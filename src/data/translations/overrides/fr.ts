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
    tagline:
      "Je conçois des applications web évolutives et augmentées par l'IA avec des technologies full-stack modernes.",
    headline:
      "SL @ Stanford Code in Place X • Formatrice • Conférencière invitée • Modératrice",
    primaryRole: "Future candidate au master",
    profileCardRole: "SL @ Stanford Code in Place X",
    badges: [
      "Diplômée du programme Aspire Leaders",
      "8x Hackathon",
      "3 équipes dirigées",
    ],
    hireMe: "M'embaucher",
    downloadResume: "Télécharger le CV",
    viewProjects: "Voir les projets",
    contactMe: "Me contacter",
    github: "GitHub",
    linkedin: "LinkedIn",
    stats: { projects: "Projets", hackathons: "Hackathons", aiTools: "Outils IA" },
    roles: [
      "Chef d'équipe en hackathon",
      "Formatrice et mentore",
      "Conférencière invitée",
      "Modératrice de webinaires",
      "Rédactrice technique",
    ],
  },
  about: {
    label: "À propos",
    title: "Ingénierie, éducation et leadership communautaire",
    description:
      "Concevoir des applications web, partager des connaissances techniques et aider les autres à progresser grâce à l'enseignement et à l'engagement communautaire.",
    summary:
      "Diplomee en Technologies de l Information de la Government College University Faisalabad, avec de l experience dans la construction d applications web full-stack.\n\nJe suis actuellement Section Leader pour Code in Place X de l Universite de Stanford. Je contribue aussi a la communaute technologique en tant que formatrice, conferenciere invitante et moderatrice de webinaires, ainsi qu enseignante benevole.\n\nMes projets couvrent la verification multilingue basee sur la voix, les plateformes d automatisation et les systemes logiciels optimises en couts. J ai participe a des hackathons nationaux et internationaux, dirige des equipes et collabore avec des communautes technologiques pour construire des solutions concretes.",
  },
  achievements: {
    label: "Réalisations",
    title: "Réalisations et distinctions",
    description:
      "Résultats de compétitions vérifiés, étapes de leadership et reconnaissance de programmes nationaux et internationaux.",
    cards: {
      "ach-participant": { label: "Hackathons nationaux et internationaux", subtitle: "Compétitions IA et web" },
      "ach-lead": { label: "Chef d'équipe", subtitle: "Hackathons IA générative" },
      "ach-codesprint": { label: "Classement à CodeSprint LA" },
      "ach-stanford": {
        label: "Section Leader chez Stanford Code in Place X",
        subtitle: "Sélectionnée du premier coup",
      },
      "ach-quizoff": {
        label: "QuizOff",
        subtitle: "Étudiants de plus de 35 pays",
      },
      "ach-linkedin": { label: "Communauté LinkedIn" },
    },
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
    teamProject: "Projet d'équipe",
    myRole: "Mon rôle",
    github: "Voir le dépôt",
    liveDemo: "Démo live",
    items: {
      "proj-feature-kit": {
        description:
          "Plateforme modulaire d'IA qui réunit texte en image, texte en parole, conversion vocale, résumé et suppression d'arrière-plan dans une seule interface. Construite comme projet de fin d'études, chaque fonction reste indépendante afin qu'un modèle ou un point d'entrée puisse être remplacé sans toucher au reste de l'application.",
        role: "Projet de fin d'études",
      },
      "proj-verivoice": {
        description:
          "Assistant de vérification multilingue piloté par la voix, conçu pour le UNESCO Youth Hackathon 2026. Une boucle voix-entrant-voix-sortant répond en ourdou, espagnol, indonésien et anglais, tandis que la classification des affirmations, la recherche de preuves auprès d'institutions et les garde-fous de citation maintiennent les réponses liées aux sources récupérées. J'ai construit la visualisation audio, le mode vocal sans mains et le tiroir de preuves.",
        role: "Développeuse frontend",
      },
      "proj-amd-zerotoken": {
        description:
          "Routeur d'inférence IA conscient des ressources, conçu pour la Track 1 du AMD Developer Hackathon. Des solveurs déterministes traitent les problèmes structurés à coût de jetons nul, un modèle local quantifié Qwen 2.5 3B couvre les tâches de faible complexité, et l'escalade vers le cloud reste limitée à une liste blanche. Plafonds de jetons et délais d'attente gardent les exécutions dans un conteneur de 4 Go de RAM, 2 vCPU et sans GPU.",
      },
      "proj-autovance": {
        description:
          "Plateforme d'automatisation pilotée par l'IA qui réunit envoi d'e-mails, exécution sécurisée de webhooks, planification de tâches et actions de formulaires personnalisés dans un seul tableau de bord. Réalisée comme contribution de l'équipe à la HEC Generative AI Cohort 3, elle ajoute un constructeur de flux de travail explicable présenté comme un prototype de recherche avec prévisualisation à sec, et signale les échecs de fournisseur plutôt que d'affirmer la réussite.",
        role: "Chef d'équipe",
      },
      "proj-hiregen": {
        description:
          "Plateforme de recrutement qui génère automatiquement les questions d'entretien, évalue les réponses des candidats et produit des rapports d'embauche. J'ai dirigé l'équipe qui l'a livrée pour la HEC Generative AI Cohort 2, offrant aux équipes un processus d'entretien technique et de notation cohérent et reproductible.",
        role: "Chef d'équipe",
      },
      "proj-mira-ai": {
        description:
          "Plateforme de développement personnel associant journal d'humeur, suivi d'habitudes et analyse d'objectifs, avec une authentification JWT et Google OAuth qui garde les saisies de chaque compte privées à son propriétaire.",
      },
      "proj-lakki-marwat": {
        description:
          "Projet académique du semestre en Interaction Homme-Machine : une évaluation heuristique et de convivialité complète du site de l'University of Lakki Marwat, livrée sous forme de rapport écrit et de présentation, et évaluée via Hirestive.",
      },
      "proj-portfolio": {
        description:
          "Portfolio en Next.js, TypeScript et Tailwind CSS, avec un assistant IA intégré et une interface animée. Conçu comme démonstration en direct du même stack full-stack et d'IA générative utilisé dans les autres projets.",
      },
    },
  },
  hackathons: {
    label: "Hackathons",
    title: "Hackathons nationaux et internationaux",
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
