import type { Locale } from "@/types";

export const LOCALE_STORAGE_KEY = "maryam-portfolio-locale";

export interface LanguageOption {
  code: Locale;
  label: string;
  nativeLabel: string;
  /** Display flag for language switcher UI */
  flag: string;
  /** BCP-47 tag for AI + document lang */
  bcp47: string;
  dir: "ltr" | "rtl";
}

export const LANGUAGES: LanguageOption[] = [
  { code: "en", label: "English", nativeLabel: "English", flag: "🇺🇸", bcp47: "en", dir: "ltr" },
  { code: "ur", label: "Urdu", nativeLabel: "اردو", flag: "🇵🇰", bcp47: "ur", dir: "rtl" },
  { code: "ar", label: "Arabic", nativeLabel: "العربية", flag: "🇸🇦", bcp47: "ar", dir: "rtl" },
  { code: "fr", label: "French", nativeLabel: "Français", flag: "🇫🇷", bcp47: "fr", dir: "ltr" },
  { code: "de", label: "German", nativeLabel: "Deutsch", flag: "🇩🇪", bcp47: "de", dir: "ltr" },
  { code: "zh", label: "Chinese", nativeLabel: "中文", flag: "🇨🇳", bcp47: "zh", dir: "ltr" },
  { code: "ja", label: "Japanese", nativeLabel: "日本語", flag: "🇯🇵", bcp47: "ja", dir: "ltr" },
  { code: "it", label: "Italian", nativeLabel: "Italiano", flag: "🇮🇹", bcp47: "it", dir: "ltr" },
];

export const DEFAULT_LOCALE: Locale = "en";

export const SUPPORTED_LOCALES = LANGUAGES.map((l) => l.code);

export function getLanguageOption(code: Locale): LanguageOption {
  return LANGUAGES.find((l) => l.code === code) ?? LANGUAGES[0];
}

export function isSupportedLocale(value: string): value is Locale {
  return SUPPORTED_LOCALES.includes(value as Locale);
}
