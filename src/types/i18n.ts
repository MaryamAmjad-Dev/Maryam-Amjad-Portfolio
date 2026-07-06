/** Supported UI locales */
export type Locale = "en" | "ur" | "ar" | "fr" | "de" | "zh" | "ja" | "it";

/** Complete translation dictionary — English is the canonical baseline */
export interface TranslationDictionary {
  meta: {
    multilingualExperience: string;
  };
  language: {
    label: string;
    selectLanguage: string;
  };
  nav: {
    home: string;
    about: string;
    skills: string;
    experience: string;
    projects: string;
    hackathons: string;
    contact: string;
    hireMe: string;
    openMenu: string;
    closeMenu: string;
  };
  hero: {
    availability: string;
    tagline: string;
    hireMe: string;
    downloadResume: string;
    github: string;
    linkedin: string;
    stats: {
      projects: string;
      hackathons: string;
      aiTools: string;
    };
    roles: string[];
  };
  about: {
    label: string;
    title: string;
    description: string;
    education: string;
    achievementHighlights: string;
    cgpa: string;
    summary: string;
  };
  skills: {
    label: string;
    title: string;
    description: string;
    technologiesCount: string;
  };
  experience: {
    label: string;
    title: string;
    description: string;
  };
  projects: {
    label: string;
    title: string;
    description: string;
    featured: string;
    problem: string;
    solution: string;
    github: string;
    liveDemo: string;
  };
  hackathons: {
    label: string;
    title: string;
    description: string;
  };
  contact: {
    label: string;
    title: string;
    description: string;
    aiPoweredContact: string;
    getInTouch: string;
    intro: string;
    linkedinProfile: string;
    githubProfile: string;
    form: {
      name: string;
      namePlaceholder: string;
      email: string;
      emailPlaceholder: string;
      message: string;
      messagePlaceholder: string;
      sending: string;
      send: string;
    };
    toast: {
      success: string;
      error: string;
    };
  };
  footer: {
    email: string;
    rights: string;
  };
  resume: {
    unavailable: string;
  };
}

export type TranslationOverrides = {
  [K in keyof TranslationDictionary]?: TranslationDictionary[K] extends object
    ? Partial<TranslationDictionary[K]>
    : TranslationDictionary[K];
};
