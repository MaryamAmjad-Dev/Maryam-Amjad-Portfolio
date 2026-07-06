import type { Locale, TranslationDictionary, TranslationOverrides } from "@/types";
import { mergeTranslations, resolveDictionary } from "@/lib/i18n/translate";
import { enDictionary } from "./translations/en";
import { arOverrides } from "./translations/overrides/ar";
import { deOverrides } from "./translations/overrides/de";
import { frOverrides } from "./translations/overrides/fr";
import { jaOverrides } from "./translations/overrides/ja";
import { itOverrides } from "./translations/overrides/it";
import { urOverrides } from "./translations/overrides/ur";
import { zhOverrides } from "./translations/overrides/zh";

export { enDictionary } from "./translations/en";

/** Locale-specific partial overrides merged onto English baseline */
export const localeOverrides: Record<Exclude<Locale, "en">, TranslationOverrides> = {
  ur: urOverrides,
  ar: arOverrides,
  fr: frOverrides,
  de: deOverrides,
  zh: zhOverrides,
  ja: jaOverrides,
  it: itOverrides,
};

/** Resolve a complete dictionary for the given locale */
export function getDictionary(locale: Locale): TranslationDictionary {
  return resolveDictionary(locale, enDictionary, localeOverrides);
}

/** Pre-built dictionaries for all locales (memoize-friendly) */
export const translations: Record<Locale, TranslationDictionary> = {
  en: enDictionary,
  ur: mergeTranslations(enDictionary, urOverrides),
  ar: mergeTranslations(enDictionary, arOverrides),
  fr: mergeTranslations(enDictionary, frOverrides),
  de: mergeTranslations(enDictionary, deOverrides),
  zh: mergeTranslations(enDictionary, zhOverrides),
  ja: mergeTranslations(enDictionary, jaOverrides),
  it: mergeTranslations(enDictionary, itOverrides),
};

export type NavSectionId =
  | "home"
  | "about"
  | "skills"
  | "experience"
  | "projects"
  | "hackathons"
  | "contact";

/** Map nav section ids to translation keys */
export const NAV_SECTION_IDS: NavSectionId[] = [
  "home",
  "about",
  "skills",
  "experience",
  "projects",
  "hackathons",
  "contact",
];

export const LOCALE_CHANGE_EVENT = "portfolio-locale-change";
