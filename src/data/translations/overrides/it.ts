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
    tagline:
      "Costruisco applicazioni web scalabili e potenziate dall'IA con tecnologie full-stack moderne.",
    headline:
      "SL @ Stanford Code in Place X • Formatrice • Relatrice ospite • Moderatrice",
    primaryRole: "Prossima studentessa di magistrale",
    profileCardRole: "SL @ Stanford Code in Place X",
    badges: [
      "Diplomata del programma Aspire Leaders",
      "8x Hackathon",
      "3 team guidati",
    ],
    hireMe: "Assumimi",
    downloadResume: "Scarica CV",
    viewProjects: "Vedi progetti",
    contactMe: "Contattami",
    github: "GitHub",
    linkedin: "LinkedIn",
    stats: { projects: "Progetti", hackathons: "Hackathon", aiTools: "Strumenti IA" },
    roles: [
      "Team lead in hackathon",
      "Formatrice e mentore",
      "Relatrice ospite",
      "Moderatrice di webinar",
      "Redattrice tecnica",
    ],
  },
  about: {
    label: "Chi sono",
    title: "Ingegneria, educazione e leadership di comunità",
    description:
      "Costruisco applicazioni web, condivido conoscenze tecniche e aiuto gli altri a crescere attraverso l'insegnamento e l'impegno comunitario.",
    summary:
      "Laureata in Information Technology presso la Government College University Faisalabad, con esperienza nella costruzione di applicazioni web full-stack.\n\nAttualmente ricopro il ruolo di Section Leader di Code in Place X della Stanford University. Contribuisco inoltre alla comunità tecnica come formatrice, relatrice ospite e moderatrice di webinar, oltre che come docente volontaria.\n\nI miei progetti spaziano dalla verifica multilingue basata sulla voce alle piattaforme di automazione e ai sistemi software ottimizzati per i costi. Ho partecipato ad hackathon nazionali e internazionali, guidato team e collaborato con comunità tecniche per costruire soluzioni concrete.",
  },
  achievements: {
    label: "Risultati",
    title: "Risultati e riconoscimenti",
    description:
      "Risultati verificati in competizioni, traguardi di leadership e riconoscimenti da programmi nazionali e internazionali.",
    cards: {
      "ach-participant": {
        label: "Hackathon nazionali e internazionali",
        subtitle: "Competizioni IA e web",
      },
      "ach-lead": {
        label: "Team lead",
        subtitle: "Hackathon di IA generativa",
      },
      "ach-codesprint": { label: "Posizione a CodeSprint LA" },
      "ach-stanford": {
        label: "Section Leader in Stanford Code in Place X",
        subtitle: "Selezionata al primo tentativo",
      },
      "ach-quizoff": {
        label: "QuizOff",
        subtitle: "Studenti da oltre 35 paesi",
      },
      "ach-linkedin": { label: "Comunità LinkedIn" },
    },
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
    teamProject: "Progetto di gruppo",
    myRole: "Il mio ruolo",
    github: "Vedi repository",
    liveDemo: "Demo live",
    items: {
      "proj-feature-kit": {
        description:
          "Piattaforma modulare di IA che riunisce testo in immagine, testo in voce, conversione vocale, riassunto e rimozione dello sfondo in un'unica interfaccia. Realizzata come progetto di tesi, ogni capacità resta indipendente in modo che modello o endpoint possano essere sostituiti senza toccare il resto dell'app.",
        role: "Progetto di tesi",
      },
      "proj-verivoice": {
        description:
          "Assistente di verifica multilingue basato sulla voce, creato per l'UNESCO Youth Hackathon 2026. Un ciclo voce-in-voce-out risponde in urdu, spagnolo, indonesiano e inglese, mentre la classificazione delle affermazioni, il reperimento di prove da istituzioni e le salvaguardie sulle citazioni tengono le risposte legate alle fonti recuperate. Ho costruito il visualizzatore audio, la modalità vocale hands-free e l'Evidence Drawer.",
        role: "Sviluppatrice frontend",
      },
      "proj-amd-zerotoken": {
        description:
          "Router di inferenza IA consapevole delle risorse, realizzato per la Track 1 dello AMD Developer Hackathon. Solver deterministici gestiscono i problemi strutturati a costo zero di token, un modello locale quantizzato Qwen 2.5 3B copre i compiti di bassa complessità e l'escalation in cloud resta limitata a una allow-list. Plafond di token e timeout tengono le esecuzioni entro un contenitore da 4 GB di RAM, 2 vCPU e senza GPU.",
      },
      "proj-autovance": {
        description:
          "Piattaforma di automazione basata sull'IA che riunisce invio di email, esecuzione sicura di webhook, scheduling di job e azioni di form personalizzati in un unico cruscotto. Realizzata come contributo del team alla HEC Generative AI Cohort 3, aggiunge un builder di workflow spiegabile presentato come prototipo di ricerca con anteprima a secco, e segnala gli errori del provider invece di dichiarare successo.",
        role: "Team lead",
      },
      "proj-hiregen": {
        description:
          "Piattaforma di recruiting che genera automaticamente le domande di colloquio, valuta le risposte dei candidati e produce report di assunzione. Ho guidato il team che l'ha consegnata per la HEC Generative AI Cohort 2, dando ai team di hiring un flusso di colloquio tecnico e di valutazione coerente e ripetibile.",
        role: "Team lead",
      },
      "proj-mira-ai": {
        description:
          "Piattaforma di crescita personale che unisce diario dell'umore, tracciamento delle abitudini e analisi degli obiettivi, con autenticazione JWT e Google OAuth che tiene le voci di ogni account private per il suo proprietario.",
      },
      "proj-lakki-marwat": {
        description:
          "Progetto accademico del semestre di Interazione Uomo-Macchina: una valutazione completa euristica e di usabilità del sito dell'University of Lakki Marwat, consegnata come report scritto e presentazione e valutata tramite Hirestive.",
      },
      "proj-portfolio": {
        description:
          "Portfolio realizzato con Next.js, TypeScript e Tailwind CSS, con assistente IA integrato e interfaccia animata. Pensato come dimostrazione dallo stesso stack full-stack e di IA generativa usato negli altri progetti.",
      },
    },
  },
  hackathons: {
    label: "Hackathon",
    title: "Hackathon nazionali e internazionali",
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
