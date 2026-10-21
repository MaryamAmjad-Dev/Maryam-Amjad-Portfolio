import type { TranslationOverrides } from "@/types";

export const deOverrides: TranslationOverrides = {
  meta: { multilingualExperience: "KI-gestütztes mehrsprachiges Erlebnis" },
  language: { label: "Sprache", selectLanguage: "Sprache wählen" },
  theme: {
    current: "Aktuelles Design: {theme}",
    switchTo: "Zu {theme} wechseln",
    light: "Hell",
    dark: "Dunkel",
  },
  nav: {
    home: "Start",
    about: "Über mich",
    achievements: "Erfolge",
    education: "Ausbildung",
    experience: "Erfahrung",
    projects: "Projekte",
    hackathons: "Hackathons",
    volunteer: "Engagement",
    certifications: "Zertifikate",
    contact: "Kontakt",
    hireMe: "Einstellen",
    openMenu: "Menü öffnen",
    closeMenu: "Menü schließen",
    menu: "Menü",
  },
  hero: {
    availability: "Verfügbar für neue Möglichkeiten",
    hireMe: "Einstellen",
    downloadResume: "Lebenslauf herunterladen",
    viewProjects: "Projekte ansehen",
    contactMe: "Kontakt aufnehmen",
    github: "GitHub",
    linkedin: "LinkedIn",
    stats: { projects: "Projekte", hackathons: "Hackathons", aiTools: "KI-Tools" },
    roles: ["Full-Stack-Entwicklerin", "Trainerin", "Gastrednerin", "Moderatorin"],
  },
  about: {
    label: "Über mich",
    title: "KI-Engineering, Bildung und Community-Leadership",
    description:
      "Ich baue KI-gestützte Anwendungen, teile technisches Wissen und helfe anderen beim Wachstum durch Unterricht und Community-Engagement.",
    summary:
      "Informatik-Absolventin der Government College University Faisalabad mit Erfahrung im Bau von Full-Stack-Webanwendungen und KI-gestützten Lösungen.\n\nIch bin derzeit Section Leader bei Stanford Universitys Code in Place X. Zusätzlich engagiere ich mich in der Tech-Community als Trainerin, Gastrednerin und Webinar-Moderatorin sowie als freiwillige Lehrerin.\n\nMeine Projekte umfassen KI-Anwendungsentwicklung, mehrsprachige Voice-basierte Verifizierung und kostenoptimierte KI-Systeme. Ich habe an nationalen und internationalen Hackathons teilgenommen, Teams geleitet und mit technischen Communities an praktischen Lösungen gearbeitet.",
  },
  achievements: {
    label: "Erfolge",
    title: "Erfolge & Auszeichnungen",
    description:
      "Verifizierte Wettbewerbsergebnisse, Leadership-Meilensteine und Anerkennung aus nationalen und internationalen Programmen.",
  },
  education: {
    label: "Ausbildung",
    title: "Ausbildung",
    description: "Abschluss, akademischer Stand und die Kursinhalte hinter der Arbeit.",
    cgpa: "Notendurchschnitt",
    coursework: "Kursinhalt",
  },
  skills: {
    label: "Skills",
    title: "KI-Skill-Dashboard",
    description:
      "Technologien und Tools für Produktionsanwendungen und KI-Integrationen.",
    technologies: "{count} Technologien",
  },
  experience: {
    label: "Erfahrung",
    title: "Berufliche Erfahrung",
    description:
      "Praktika und rollenbasierte Arbeit an Produktionsprodukten, virtuellen Simulationen und Beratungsprojekten.",
    simulation: "Virtuelle Simulation",
    certificate: "Zertifikat",
  },
  projects: {
    label: "Projekte",
    title: "Akademische Projekte",
    description:
      "Abschluss-, akademische und Hackathon-Projekte aus KI-Anwendungen, Automatisierung und Full-Stack-Engineering.",
    featured: "Featured",
    problem: "Problem",
    solution: "Lösung",
    github: "Repository ansehen",
    liveDemo: "Live-Demo",
  },
  hackathons: {
    label: "Hackathons",
    title: "Internationale Hackathons",
    description:
      "Teilnehmerin und Team Lead bei nationalen und internationalen KI- und Developer-Hackathons, mit einem Top-25-Ergebnis bei CodeSprint LA.",
  },
  volunteer: {
    label: "Community",
    title: "Ehrenamtliches Engagement",
    description:
      "Unterricht, Mentoring und Community-Beiträge über Kunden- und Hackathon-Arbeit hinaus.",
  },
  certifications: {
    label: "Nachweise",
    title: "Schulungen und Zertifikate",
    description:
      "Berufliche Weiterbildung, Leadership-Training und Zertifikate, jeweils mit Link zum überprüften Dokument.",
  },
  contact: {
    label: "Kontakt",
    title: "Lass uns etwas Intelligentes bauen",
    description:
      "Offen für Full-Stack- und KI-Engineering-Rollen, Kooperationen und KI-gestützte Projekte.",
    aiPoweredContact: "KI-gestützter Kontakt",
    getInTouch: "Kontakt aufnehmen",
    intro:
      "Kontakt für Einstellung, Freelance-Projekte oder Hackathon-Kooperationen.",
    linkedinProfile: "LinkedIn-Profil",
    githubProfile: "GitHub-Profil",
    form: {
      name: "Name",
      namePlaceholder: "Ihr Name",
      email: "E-Mail",
      emailPlaceholder: "you@example.com",
      message: "Nachricht",
      messagePlaceholder: "Erzählen Sie mir von Ihrem Projekt oder Ihrer Opportunity...",
      sending: "Wird gesendet...",
      send: "Nachricht senden",
    },
    toast: { success: "Nachricht erfolgreich gesendet", error: "Etwas ist schiefgelaufen" },
  },
  footer: { email: "E-Mail", rights: "Alle Rechte vorbehalten." },
  resume: {
    unavailable: "Lebenslauf noch nicht verfügbar. Bitte kontaktieren Sie mich direkt.",
  },
};
