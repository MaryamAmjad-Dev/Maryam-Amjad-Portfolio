"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
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

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>(DEFAULT_LOCALE);
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem(LOCALE_STORAGE_KEY);
    if (stored && isSupportedLocale(stored)) {
      setLocaleState(stored);
    }
    setIsReady(true);
  }, []);

  const setLocale = useCallback((next: Locale) => {
    setLocaleState(next);
    window.dispatchEvent(
      new CustomEvent(LOCALE_CHANGE_EVENT, { detail: next }),
    );
  }, []);

  useEffect(() => {
    if (!isReady) return;
    const option = getLanguageOption(locale);
    document.documentElement.lang = option.bcp47;
    document.documentElement.dir = option.dir;
    localStorage.setItem(LOCALE_STORAGE_KEY, locale);
  }, [locale, isReady]);

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
