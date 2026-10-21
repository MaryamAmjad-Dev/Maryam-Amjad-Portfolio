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
    tagline:
      "Ich baue skalierbare, KI-gestützte Webanwendungen mit moderner Full-Stack-Technologie.",
    headline: "SL @ Stanford Code in Place X • Trainerin • Gastrednerin • Moderatorin",
    primaryRole: "Zukünftige Masterkandidatin",
    profileCardRole: "SL @ Stanford Code in Place X",
    badges: ["Alumna des Aspire Leaders Programms", "8x Hackathon", "3 Teams geleitet"],
    hireMe: "Einstellen",
    downloadResume: "Lebenslauf herunterladen",
    viewProjects: "Projekte ansehen",
    contactMe: "Kontakt aufnehmen",
    github: "GitHub",
    linkedin: "LinkedIn",
    stats: { projects: "Projekte", hackathons: "Hackathons", aiTools: "KI-Tools" },
    roles: [
      "Hackathon-Team-Leiterin",
      "Trainerin & Mentorin",
      "Gastrednerin",
      "Webinar-Moderatorin",
      "Technische Redakteurin",
    ],
  },
  about: {
    label: "Über mich",
    title: "Engineering, Bildung und Community-Leadership",
    description:
      "Ich baue Webanwendungen, teile technisches Wissen und helfe anderen beim Wachstum durch Unterricht und Community-Engagement.",
    summary:
      "Informatik-Absolventin der Government College University Faisalabad mit Erfahrung im Bau von Full-Stack-Webanwendungen.\n\nIch bin derzeit Section Leader bei Stanford Universitys Code in Place X. Zusätzlich engagiere ich mich in der Tech-Community als Trainerin, Gastrednerin und Webinar-Moderatorin sowie als freiwillige Lehrerin.\n\nMeine Projekte umfassen mehrsprachige Voice-basierte Verifizierung, Automatisierungsplattformen und kostenoptimierte Softwaresysteme. Ich habe an nationalen und internationalen Hackathons teilgenommen, Teams geleitet und mit technischen Communities an praktischen Lösungen gearbeitet.",
  },
  achievements: {
    label: "Erfolge",
    title: "Erfolge & Auszeichnungen",
    description:
      "Verifizierte Wettbewerbsergebnisse, Leadership-Meilensteine und Anerkennung aus nationalen und internationalen Programmen.",
    cards: {
      "ach-participant": {
        label: "Nationale und internationale Hackathons",
        subtitle: "KI- und Web-Wettbewerbe",
      },
      "ach-lead": {
        label: "Teamleitung",
        subtitle: "Generative-AI-Hackathons",
      },
      "ach-codesprint": { label: "Rang bei CodeSprint LA" },
      "ach-stanford": {
        label: "Section Leader bei Stanford Code in Place X",
        subtitle: "Beim ersten Versuch ausgewählt",
      },
      "ach-quizoff": {
        label: "QuizOff",
        subtitle: "Studierende aus über 35 Ländern",
      },
      "ach-linkedin": { label: "LinkedIn-Community" },
    },
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
    teamProject: "Teamprojekt",
    myRole: "Meine Rolle",
    github: "Repository ansehen",
    liveDemo: "Live-Demo",
    items: {
      "proj-feature-kit": {
        description:
          "Modulare KI-Plattform, die Text-zu-Bild, Text-zu-Sprache, Sprachkonvertierung, Zusammenfassung und Hintergrundentfernung in einer Oberfläche vereint. Als Abschlussprojekt gebaut, bleibt jede Funktion unabhängig, sodass sich ein Modell oder Endpunkt austauschen lässt, ohne den Rest der App zu berühren.",
        role: "Abschlussprojekt",
      },
      "proj-verivoice": {
        description:
          "Sprachbasierter mehrsprachiger Verifizierungsassistent für den UNESCO Youth Hackathon 2026. Eine Sprach-in-Sprach-out-Schleife antwortet auf Urdu, Spanisch, Indonesisch und Englisch, während Behauptungsklassifizierung, Belegsuche bei institutionellen Quellen und Zitations-Safeguards die Antworten an die gefundenen Quellen binden. Ich habe den Audio-Visualizer, den Hands-free-Voice-Modus und den Evidence Drawer gebaut.",
        role: "Frontend-Entwicklerin",
      },
      "proj-amd-zerotoken": {
        description:
          "Ressourcenbewusster KI-Inferenz-Router für Track 1 des AMD Developer Hackathons. Deterministische Solver bearbeiten strukturierte Probleme ohne Token-Kosten, ein quantisiertes lokales Qwen-2.5-3B-Modell übernimmt Aufgaben geringer Komplexität, und die Cloud-Eskalation bleibt auf eine Allow-List beschränkt. Token-Obergrenzen und Timeouts halten Läufe innerhalb eines Containers mit 4 GB RAM, 2 vCPUs und ohne GPU.",
      },
      "proj-autovance": {
        description:
          "KI-gestützte Automatisierungsplattform, die E-Mail-Versand, sichere Webhook-Ausführung, Cron-Zeitplanung und benutzerdefinierte Formularaktionen in einem Dashboard vereint. Als Beitrag des Teams zur HEC Generative AI Cohort 3 gebaut, ergänzt sie einen erklärbaren KI-Workflow-Builder, der als Forschungsprototyp mit Trockenlauf-Vorschau daherkommt und Anbieterfehler ehrlich meldet, statt Erfolg zu behaupten.",
        role: "Teamleitung",
      },
      "proj-hiregen": {
        description:
          "Rekrutierungsplattform, die Interviewfragen automatisch generiert, Antworten der Kandidaten bewertet und Hiring-Reports erstellt. Ich habe das Team geleitet, das sie für die HEC Generative AI Cohort 2 gebaut hat, sodass Hiring-Teams einen konsistenten, wiederholbaren technischen Interview- und Bewertungsprozess erhalten.",
        role: "Teamleitung",
      },
      "proj-mira-ai": {
        description:
          "Plattform für persönliche Entwicklung mit Mood-Journaling, Gewohnheitsverfolgung und Ziel-Analysen, wobei JWT- und Google-OAuth-Authentifizierung die Einträge jedes Kontos privat halten.",
      },
      "proj-lakki-marwat": {
        description:
          "Akademisches Projekt für die Mid-Semester-Prüfung im Fach Human-Computer Interaction: eine vollständige Heuristik- und Usability-Bewertung der Website der University of Lakki Marwat, geliefert als schriftlicher Bericht und Präsentation und über Hirestive bewertet.",
      },
      "proj-portfolio": {
        description:
          "Portfolio mit Next.js, TypeScript und Tailwind CSS, integriertem KI-Assistenten und bewegungsgetriebener Oberfläche. Als Live-Demo desselben Full-Stack- und Generative-AI-Stacks konzipiert, der auch in den anderen Projekten zum Einsatz kommt.",
      },
    },
  },
  hackathons: {
    label: "Hackathons",
    title: "Nationale und internationale Hackathons",
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
