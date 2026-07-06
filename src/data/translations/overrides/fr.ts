import type { TranslationOverrides } from "@/types";

export const frOverrides: TranslationOverrides = {
  meta: { multilingualExperience: "Expérience multilingue propulsée par l'IA" },
  language: { label: "Langue", selectLanguage: "Choisir la langue" },
  nav: {
    home: "Accueil",
    about: "À propos",
    skills: "Compétences",
    experience: "Expérience",
    projects: "Projets",
    hackathons: "Hackathons",
    contact: "Contact",
    hireMe: "M'embaucher",
    openMenu: "Ouvrir le menu",
    closeMenu: "Fermer le menu",
  },
  hero: {
    availability: "Disponible pour de nouvelles opportunités",
    hireMe: "M'embaucher",
    downloadResume: "Télécharger le CV",
    github: "GitHub",
    linkedin: "LinkedIn",
    stats: { projects: "Projets", hackathons: "Hackathons", aiTools: "Outils IA" },
    roles: [
      "Développeuse MERN Stack",
      "Développeuse Next.js",
      "Passionnée d'IA Automation & Agentic AI",
    ],
  },
  about: {
    label: "À propos",
    title: "Là où l'art MERN Stack rencontre les systèmes intelligents",
    description:
      "Expérience SaaS en production, expertise en automatisation IA et leadership en hackathons — un aperçu pour recruteurs et collaborateurs.",
    education: "Formation",
    achievementHighlights: "Points forts",
    cgpa: "Moyenne",
    summary:
      "Développeuse MERN Stack passionnée par la création d'applications full-stack évolutives et performantes avec MongoDB, Express.js, React.js, Next.js, Node.js, TypeScript et Tailwind CSS.\n\nAnimée par la curiosité pour les systèmes intelligents, j'explore et construis des solutions IA avec AI Automation, Agentic AI workflows, LLM APIs, Gemini API, Groq API et des concepts de Machine Learning.\n\nMon expérience inclut des contributions à des produits SaaS réels, le développement frontend et backend, l'intégration d'APIs et la livraison d'applications web prêtes pour la production.\n\nAu-delà de l'ingénierie, je participe activement aux hackathons IA et Web en tant que contributrice et team lead, transformant des idées en solutions digitales impactantes.",
  },
  skills: {
    label: "Compétences",
    title: "Tableau de bord IA des compétences",
    description:
      "Technologies et outils alimentant les applications de production et les intégrations IA.",
  },
  experience: {
    label: "Expérience",
    title: "Parcours professionnel",
    description:
      "Expérience concrète dans la construction de produits SaaS, l'intégration d'APIs et la livraison de fonctionnalités en production.",
  },
  projects: {
    label: "Projets",
    title: "Vitrine de projets",
    description:
      "Plateformes SaaS IA, middleware de sécurité et applications web de production.",
    featured: "En vedette",
    problem: "Problème",
    solution: "Solution",
    github: "GitHub",
    liveDemo: "Démo live",
  },
  hackathons: {
    label: "Hackathons",
    title: "Compétition & Innovation",
    description:
      "Participante active et team lead dans des hackathons IA et développeurs à l'international.",
  },
  contact: {
    label: "Contact",
    title: "Construisons quelque chose d'intelligent",
    description:
      "Ouverte aux opportunités MERN Stack Developer, collaborations et projets propulsés par l'IA.",
    aiPoweredContact: "Contact propulsé par l'IA",
    getInTouch: "Me contacter",
    intro:
      "Contactez-moi pour un recrutement, des projets freelance ou des collaborations hackathon.",
    linkedinProfile: "Profil LinkedIn",
    githubProfile: "Profil GitHub",
    form: {
      name: "Nom",
      namePlaceholder: "Votre nom",
      email: "E-mail",
      emailPlaceholder: "you@example.com",
      message: "Message",
      messagePlaceholder: "Parlez-moi de votre projet ou opportunité...",
      sending: "Envoi...",
      send: "Envoyer le message",
    },
    toast: { success: "Message envoyé avec succès", error: "Une erreur s'est produite" },
  },
  footer: { email: "E-mail", rights: "Tous droits réservés." },
  resume: { unavailable: "CV non disponible pour le moment. Contactez-moi directement." },
};
