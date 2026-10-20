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
    skills: "Competenze",
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
    github: "GitHub",
    linkedin: "LinkedIn",
    stats: { projects: "Progetti", hackathons: "Hackathon", aiTools: "Strumenti IA" },
    roles: [
      "Sviluppatrice MERN Stack",
      "Sviluppatrice Next.js",
      "Appassionata di AI Automation & Agentic AI",
    ],
  },
  about: {
    label: "Chi sono",
    title: "Dove l'arte MERN Stack incontra i sistemi intelligenti",
    description:
      "Esperienza SaaS in produzione, competenze in automazione IA e leadership negli hackathon — una panoramica per recruiter e collaboratori.",
    education: "Formazione",
    achievementHighlights: "Risultati principali",
    cgpa: "Media",
    summary:
      "Sviluppatrice MERN Stack appassionata nella creazione di applicazioni full-stack scalabili e ad alte prestazioni con MongoDB, Express.js, React.js, Next.js, Node.js, TypeScript e Tailwind CSS.\n\nSpinta dalla curiosità verso i sistemi intelligenti, esploro e costruisco soluzioni basate sull'IA con AI Automation, workflow Agentic AI, LLM API, Gemini API, Groq API e concetti di Machine Learning.\n\nLa mia esperienza include contributi a prodotti SaaS reali, sviluppo di funzionalità frontend e backend, integrazione di API e realizzazione di applicazioni web pronte per la produzione in flussi di lavoro professionali.\n\nOltre all'ingegneria, partecipo attivamente ad hackathon IA e Web come contributor e team lead, trasformando idee in soluzioni digitali di impatto attraverso apprendimento continuo e innovazione.",
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
    title: "Percorso professionale",
    description:
      "Esperienza concreta nella costruzione di prodotti SaaS, integrazione di API e consegna di funzionalità in produzione.",
  },
  projects: {
    label: "Progetti",
    title: "Vetrina progetti",
    description:
      "Piattaforme SaaS basate sull'IA, middleware di sicurezza e applicazioni web di produzione.",
    featured: "In evidenza",
    problem: "Problema",
    solution: "Soluzione",
    github: "GitHub",
    liveDemo: "Demo live",
  },
  hackathons: {
    label: "Hackathon",
    title: "Competizione e innovazione",
    description:
      "Partecipante attiva e team lead in hackathon IA e per sviluppatori a livello internazionale.",
  },
  volunteer: {
    label: "Comunità",
    title: "Esperienza di volontariato",
    description:
      "Ricerca indipendente e contributi alla comunità oltre il lavoro per i clienti e gli hackathon.",
  },
  certifications: {
    label: "Certificazioni",
    title: "Certificazioni e formazione",
    description:
      "Sviluppo professionale, formazione al leadership e certificazioni ottenute nel percorso.",
  },
  contact: {
    label: "Contatti",
    title: "Costruiamo qualcosa di intelligente",
    description:
      "Aperta a opportunità come MERN Stack Developer, collaborazioni e progetti basati sull'IA.",
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
