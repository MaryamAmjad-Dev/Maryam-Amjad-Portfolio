import type { Locale, TranslationDictionary, TranslationOverrides } from "@/types";

/** Deep-merge locale overrides onto the English baseline */
export function mergeTranslations(
  base: TranslationDictionary,
  overrides?: TranslationOverrides,
): TranslationDictionary {
  if (!overrides) return base;

  return {
    ...base,
    ...overrides,
    meta: { ...base.meta, ...overrides.meta },
    language: { ...base.language, ...overrides.language },
    theme: { ...base.theme, ...overrides.theme },
    nav: { ...base.nav, ...overrides.nav },
    hero: {
      ...base.hero,
      ...overrides.hero,
      stats: { ...base.hero.stats, ...overrides.hero?.stats },
      roles: overrides.hero?.roles ?? base.hero.roles,
      tagline: overrides.hero?.tagline ?? base.hero.tagline,
    },
    about: { ...base.about, ...overrides.about },
    achievements: { ...base.achievements, ...overrides.achievements },
    education: { ...base.education, ...overrides.education },
    skills: { ...base.skills, ...overrides.skills },
    experience: { ...base.experience, ...overrides.experience },
    projects: { ...base.projects, ...overrides.projects },
    hackathons: { ...base.hackathons, ...overrides.hackathons },
    volunteer: { ...base.volunteer, ...overrides.volunteer },
    certifications: { ...base.certifications, ...overrides.certifications },
    contact: {
      ...base.contact,
      ...overrides.contact,
      form: { ...base.contact.form, ...overrides.contact?.form },
      toast: { ...base.contact.toast, ...overrides.contact?.toast },
    },
    footer: { ...base.footer, ...overrides.footer },
    resume: { ...base.resume, ...overrides.resume },
  };
}

function getByPath(obj: unknown, path: string): unknown {
  return path.split(".").reduce<unknown>((acc, key) => {
    if (acc && typeof acc === "object" && key in acc) {
      return (acc as Record<string, unknown>)[key];
    }
    return undefined;
  }, obj);
}

function interpolate(
  template: string,
  params?: Record<string, string | number>,
): string {
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, key: string) =>
    params[key] !== undefined ? String(params[key]) : `{${key}}`,
  );
}

export function createTranslator(dictionary: TranslationDictionary) {
  return function translate(
    path: string,
    params?: Record<string, string | number>,
  ): string {
    const value = getByPath(dictionary, path);
    if (typeof value === "string") {
      return interpolate(value, params);
    }
    return path;
  };
}

export function resolveDictionary(
  locale: Locale,
  base: TranslationDictionary,
  catalog: Record<Exclude<Locale, "en">, TranslationOverrides>,
): TranslationDictionary {
  if (locale === "en") return base;
  return mergeTranslations(base, catalog[locale]);
}
