import type { TranslationOverrides } from "@/types";

export const frOverrides: TranslationOverrides = {
  meta: { multilingualExperience: "Expérience multilingue propulsée par l'IA" },
  language: { label: "Langue", selectLanguage: "Choisir la langue" },
  theme: {
    current: "Thème actuel : {theme}",
    switchTo: "Passer au thème {theme}",
    light: "Clair",
    dark: "Sombre",
  },
  nav: {
    home: "Accueil",
    about: "À propos",
    achievements: "Réalisations",
    education: "Formation",
    experience: "Expérience",
    projects: "Projets",
    hackathons: "Hackathons",
    volunteer: "Bénévolat",
    certifications: "Certificats",
    contact: "Contact",
    hireMe: "M'embaucher",
    openMenu: "Ouvrir le menu",
    closeMenu: "Fermer le menu",
    menu: "Menu",
  },
  hero: {
    availability: "Disponible pour de nouvelles opportunités",
    hireMe: "M'embaucher",
    downloadResume: "Télécharger le CV",
    viewProjects: "Voir les projets",
    contactMe: "Me contacter",
    github: "GitHub",
    linkedin: "LinkedIn",
    stats: { projects: "Projets", hackathons: "Hackathons", aiTools: "Outils IA" },
    roles: ["Developpeuse Full-Stack", "Formatrice", "Conferenciere invitante", "Moderatrice"],
  },
  about: {
    label: "À propos",
    title: "Ingénierie IA, éducation et leadership communautaire",
    description:
      "Concevoir des applications propulsées par l'IA, partager des connaissances techniques et aider les autres à progresser grâce à l'enseignement et à l'engagement communautaire.",
    summary:
      "Diplomee en Technologies de l Information de la Government College University Faisalabad, avec de l experience dans la construction d applications web full-stack et de solutions propulsees par l IA.\n\nJe suis actuellement Section Leader pour Code in Place X de l Universite de Stanford. Je contribue aussi a la communaute technologique en tant que formatrice, conferenciere invitante et moderatrice de webinaires, ainsi qu enseignante benevole.\n\nMes projets couvrent le developpement d applications IA, la verification multilingue basee sur la voix et les systemes IA optimises en couts. J ai participe a des hackathons nationaux et internationaux, dirige des equipes et collabore avec des communautes technologiques pour construire des solutions concretes.",
  },
  achievements: {
    label: "Réalisations",
    title: "Réalisations et distinctions",
    description:
      "Résultats de compétitions vérifiés, étapes de leadership et reconnaissance de programmes nationaux et internationaux.",
  },
  education: {
    label: "Formation",
    title: "Formation",
    description: "Diplôme, parcours académique et cours à l'origine du travail.",
    cgpa: "Moyenne",
    coursework: "Cours suivis",
  },
  skills: {
    label: "Compétences",
    title: "Tableau de bord IA des compétences",
    description:
      "Technologies et outils alimentant les applications de production et les intégrations IA.",
    technologies: "{count} technologies",
  },
  experience: {
    label: "Expérience",
    title: "Expérience professionnelle",
    description:
      "Stages et missions sur des produits en production, des simulations virtuelles et des projets de conseil.",
    simulation: "Simulation virtuelle",
    certificate: "Certificat",
  },
  projects: {
    label: "Projets",
    title: "Projets académiques",
    description:
      "Projets de fin d'études, académiques et de hackathons en applications IA, automatisation et ingénierie full-stack.",
    featured: "En vedette",
    problem: "Problème",
    solution: "Solution",
    github: "Voir le dépôt",
    liveDemo: "Démo live",
  },
  hackathons: {
    label: "Hackathons",
    title: "Hackathons internationaux",
    description:
      "Participante et team lead dans des hackathons IA et développeurs nationaux et internationaux, avec un top 25 à CodeSprint LA.",
  },
  volunteer: {
    label: "Communauté",
    title: "Expérience bénévole",
    description:
      "Enseignement, mentorat et contributions communautaires au-delà des missions clients et hackathons.",
  },
  certifications: {
    label: "Diplômes",
    title: "Formations et certificats",
    description:
      "Développement professionnel, formation au leadership et certifications, chacune liée à son document vérifié.",
  },
  contact: {
    label: "Contact",
    title: "Construisons quelque chose d'intelligent",
    description:
      "Ouverte aux opportunités en ingénierie full-stack et IA, aux collaborations et aux projets propulsés par l'IA.",
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
