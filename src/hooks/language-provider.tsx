"use client";

import {
  createContext,
  useCallback,
  useContext,
  useLayoutEffect,
  useMemo,
  useState,
  useSyncExternalStore,
  type ReactNode,
} from "react";
import {
  DEFAULT_LOCALE,
  getLanguageOption,
  isSupportedLocale,
  LOCALE_STORAGE_KEY,
  type LanguageOption,
} from "@/constants/languages";
import {
  getDictionary,
  LOCALE_CHANGE_EVENT,
  type NavSectionId,
} from "@/data/translations";
import { createTranslator } from "@/lib/i18n/translate";
import type { Locale, TranslationDictionary } from "@/types";

export type TranslateFn = (
  path: string,
  params?: Record<string, string | number>,
) => string;

interface LanguageContextValue {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  t: TranslateFn;
  dictionary: TranslationDictionary;
  language: LanguageOption;
  navLabel: (id: NavSectionId) => string;
  isReady: boolean;
}

const LanguageContext = createContext<LanguageContextValue | null>(null);

/**
 * In-memory fallback for browsers where `localStorage` is unavailable
 * (private mode, blocked cookies). When storage works it stays the source of
 * truth; this only back-stops the "persist failed" case so the UI still changes.
 */
let fallbackLocale: Locale | null = null;

/**
 * The locale to render with. Never called during SSR — React uses
 * `getServerLocaleSnapshot` there instead.
 */
function getLocaleSnapshot(): Locale {
  try {
    const stored = window.localStorage.getItem(LOCALE_STORAGE_KEY);
    if (stored && isSupportedLocale(stored)) return stored;
  } catch {
    // Storage unavailable (or no window) — fall through to the fallback.
  }
  return fallbackLocale ?? DEFAULT_LOCALE;
}

/**
 * SSR cannot read `localStorage`, so the server always renders the default
 * locale and hydration matches that markup exactly.
 */
function getServerLocaleSnapshot(): Locale {
  return DEFAULT_LOCALE;
}

/** Re-read the store when the locale changes here or in another tab. */
function subscribeToLocaleChange(onStoreChange: () => void): () => void {
  window.addEventListener(LOCALE_CHANGE_EVENT, onStoreChange);
  window.addEventListener("storage", onStoreChange);
  return () => {
    window.removeEventListener(LOCALE_CHANGE_EVENT, onStoreChange);
    window.removeEventListener("storage", onStoreChange);
  };
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  // The locale lives in an external store (localStorage) rather than in
  // component state. `useSyncExternalStore` renders the server snapshot during
  // SSR *and* hydration, so the first client render is byte-identical to the
  // server markup; React then picks up the saved locale on its own.
  //
  // The previous version read localStorage inside a `useState` initializer
  // guarded by `typeof window !== "undefined"`. That made the client text
  // differ from the server text for anyone who had picked a language,
  // hydration failed, and React regenerated the whole tree client-side. That
  // regeneration re-created next-themes' anti-FOUC <script> through
  // createInstance — React deliberately builds an inert script it will never
  // execute, hence "Encountered a script tag while rendering React component".
  const locale = useSyncExternalStore(
    subscribeToLocaleChange,
    getLocaleSnapshot,
    getServerLocaleSnapshot,
  );
  const [isReady] = useState(true);

  const setLocale = useCallback((next: Locale) => {
    fallbackLocale = next;
    try {
      window.localStorage.setItem(LOCALE_STORAGE_KEY, next);
    } catch {
      // Persist is best-effort; the in-memory value keeps the UI correct.
    }
    // Doubles as the notification that tells React to re-read the snapshot.
    window.dispatchEvent(
      new CustomEvent(LOCALE_CHANGE_EVENT, { detail: next }),
    );
  }, []);

  // A layout effect so an RTL locale lands on <html> before paint rather than
  // flipping the page after it has rendered.
  useLayoutEffect(() => {
    const option = getLanguageOption(locale);
    document.documentElement.lang = option.bcp47;
    document.documentElement.dir = option.dir;
  }, [locale]);

  const dictionary = useMemo(() => getDictionary(locale), [locale]);
  const t = useMemo(() => createTranslator(dictionary), [dictionary]);
  const language = useMemo(() => getLanguageOption(locale), [locale]);

  const navLabel = useCallback(
    (id: NavSectionId) => dictionary.nav[id],
    [dictionary.nav],
  );

  const value = useMemo(
    () => ({
      locale,
      setLocale,
      t,
      dictionary,
      language,
      navLabel,
      isReady,
    }),
    [locale, setLocale, t, dictionary, language, navLabel, isReady],
  );

  return (
    <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>
  );
}

export function useLanguage(): LanguageContextValue {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}
