import type { TranslationOverrides } from "@/types";

export const itOverrides: TranslationOverrides = {
  meta: { multilingualExperience: "Esperienza multilingue potenziata dall'IA" },
  language: { label: "Lingua", selectLanguage: "Seleziona lingua" },
  theme: {
    current: "Tema attuale: {theme}",
    switchTo: "Passa al tema {theme}",
    light: "Chiaro",
    dark: "Scuro",
  },
  nav: {
    home: "Home",
    about: "Chi sono",
    achievements: "Risultati",
    education: "Formazione",
    experience: "Esperienza",
    projects: "Progetti",
    hackathons: "Hackathon",
    volunteer: "Volontariato",
    certifications: "Certificati",
    contact: "Contatti",
    hireMe: "Assumimi",
    openMenu: "Apri menu",
    closeMenu: "Chiudi menu",
    menu: "Menu",
  },
  hero: {
    availability: "Disponibile per nuove opportunità",
    hireMe: "Assumimi",
    downloadResume: "Scarica CV",
    viewProjects: "Vedi progetti",
    contactMe: "Contattami",
    github: "GitHub",
    linkedin: "LinkedIn",
    stats: { projects: "Progetti", hackathons: "Hackathon", aiTools: "Strumenti IA" },
    roles: [
      "Sviluppatrice Full-Stack",
      "Formatrice",
      "Relatrice ospite",
      "Moderatrice",
    ],
  },
  about: {
    label: "Chi sono",
    title: "Ingegneria AI, educazione e leadership di comunità",
    description:
      "Costruisco applicazioni basate sull'IA, condivido conoscenze tecniche e aiuto gli altri a crescere attraverso l'insegnamento e l'impegno comunitario.",
    summary:
      "Laureata in Information Technology presso la Government College University Faisalabad, con esperienza nella costruzione di applicazioni web full-stack e di soluzioni basate sull'IA.\n\nAttualmente ricopro il ruolo di Section Leader di Code in Place X della Stanford University. Contribuisco inoltre alla comunità tecnica come formatrice, relatrice ospite e moderatrice di webinar, oltre che come docente volontaria.\n\nI miei progetti spaziano dallo sviluppo di applicazioni AI alla verifica multilingue basata sulla voce e ai sistemi AI ottimizzati per i costi. Ho partecipato ad hackathon nazionali e internazionali, guidato team e collaborato con comunità tecniche per costruire soluzioni concrete.",
  },
  achievements: {
    label: "Risultati",
    title: "Risultati e riconoscimenti",
    description:
      "Risultati verificati in competizioni, traguardi di leadership e riconoscimenti da programmi nazionali e internazionali.",
  },
  education: {
    label: "Formazione",
    title: "Formazione",
    description: "Laurea, percorso accademico e corsi alla base del lavoro.",
    cgpa: "Media",
    coursework: "Corsi",
  },
  skills: {
    label: "Competenze",
    title: "Dashboard competenze IA",
    description:
      "Tecnologie e strumenti che alimentano applicazioni di produzione e integrazioni IA.",
    technologies: "{count} tecnologie",
  },
  experience: {
    label: "Esperienza",
    title: "Esperienza professionale",
    description:
      "Tirocini e ruoli su prodotti in produzione, simulazioni virtuali e progetti di consulenza.",
    simulation: "Simulazione virtuale",
    certificate: "Certificato",
  },
  projects: {
    label: "Progetti",
    title: "Progetti accademici",
    description:
      "Progetti di tesi, accademici e di hackathon su applicazioni IA, automazione e ingegneria full-stack.",
    featured: "In evidenza",
    problem: "Problema",
    solution: "Soluzione",
    github: "Vedi repository",
    liveDemo: "Demo live",
  },
  hackathons: {
    label: "Hackathon",
    title: "Hackathon internazionali",
    description:
      "Partecipante e team lead in hackathon IA e per sviluppatori nazionali e internazionali, con un piazzamento nei primi 25 a CodeSprint LA.",
  },
  volunteer: {
    label: "Comunità",
    title: "Esperienza di volontariato",
    description:
      "Insegnamento, mentorship e contributi alla comunità oltre il lavoro per i clienti e gli hackathon.",
  },
  certifications: {
    label: "Certificazioni",
    title: "Formazione e certificati",
    description:
      "Sviluppo professionale, formazione al leadership e certificazioni, ognuna collegata al relativo documento verificato.",
  },
  contact: {
    label: "Contatti",
    title: "Costruiamo qualcosa di intelligente",
    description:
      "Aperta a opportunità di ingegneria full-stack e AI, collaborazioni e progetti basati sull'IA.",
    aiPoweredContact: "Contatto potenziato dall'IA",
    getInTouch: "Contattami",
    intro:
      "Scrivimi per assunzioni, progetti freelance o collaborazioni negli hackathon.",
    linkedinProfile: "Profilo LinkedIn",
    githubProfile: "Profilo GitHub",
    form: {
      name: "Nome",
      namePlaceholder: "Il tuo nome",
      email: "Email",
      emailPlaceholder: "tu@esempio.com",
      message: "Messaggio",
      messagePlaceholder: "Parlami del tuo progetto o opportunità...",
      sending: "Invio in corso...",
      send: "Invia messaggio",
    },
    toast: {
      success: "Messaggio inviato con successo",
      error: "Qualcosa è andato storto",
    },
  },
  footer: { email: "Email", rights: "Tutti i diritti riservati." },
  resume: {
    unavailable: "Il CV non è ancora disponibile. Contattami direttamente.",
  },
};
