/** Supported UI locales */
export type Locale = "en" | "ur" | "ar" | "fr" | "de" | "zh" | "ja" | "it" | "ko" | "es";

/** Complete translation dictionary — English is the canonical baseline */
export interface TranslationDictionary {
  meta: {
    multilingualExperience: string;
  };
  nav: {
    home: string;
    about: string;
    achievements: string;
    education: string;
    experience: string;
    projects: string;
    hackathons: string;
    volunteer: string;
    certifications: string;
    contact: string;
    hireMe: string;
    openMenu: string;
    closeMenu: string;
    /** Accessible name for the mobile navigation drawer */
    menu: string;
  };
  language: {
    label: string;
    selectLanguage: string;
  };
  theme: {
    /** "Current theme: {theme}" */
    current: string;
    /** "Switch to {theme} theme" */
    switchTo: string;
    light: string;
    dark: string;
  };
  hero: {
    availability: string;
    tagline: string;
    hireMe: string;
    downloadResume: string;
    /** Hero CTA linking to the projects section */
    viewProjects: string;
    /** Hero CTA linking to the contact section */
    contactMe: string;
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
    summary: string;
  };
  /** Section 1 of the main portfolio content */
  achievements: {
    label: string;
    title: string;
    description: string;
  };
  /** Section 2 of the main portfolio content */
  education: {
    label: string;
    title: string;
    description: string;
    cgpa: string;
    /** Label above the education coursework list */
    coursework: string;
  };
  skills: {
    label: string;
    title: string;
    description: string;
    /** "{count} technologies" */
    technologies: string;
  };
  experience: {
    label: string;
    title: string;
    description: string;
    /** Badge marking a virtual job simulation rather than employment */
    simulation: string;
    /** Label for the experience certificate link */
    certificate: string;
  };
  projects: {
    label: string;
    title: string;
    description: string;
    featured: string;
    teamProject: string;
    myRole: string;
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
  volunteer: {
    label: string;
    title: string;
    description: string;
  };
  certifications: {
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
