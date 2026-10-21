import type { TranslationOverrides } from "@/types";

export const esOverrides: TranslationOverrides = {
  meta: { multilingualExperience: "Experiencia multilingüe impulsada por IA" },
  language: { label: "Idioma", selectLanguage: "Seleccionar idioma" },
  theme: {
    current: "Tema actual: {theme}",
    switchTo: "Cambiar al tema {theme}",
    light: "Claro",
    dark: "Oscuro",
  },
  nav: {
    home: "Inicio",
    about: "Acerca",
    achievements: "Logros",
    education: "Educación",
    experience: "Experiencia",
    projects: "Proyectos",
    hackathons: "Hackathons",
    volunteer: "Voluntariado",
    certifications: "Certificados",
    contact: "Contacto",
    hireMe: "Contrátame",
    openMenu: "Abrir menú",
    closeMenu: "Cerrar menú",
    menu: "Menú",
  },
  hero: {
    availability: "Disponible para oportunidades",
    tagline:
      "Construyo aplicaciones web escalables e impulsadas con IA usando tecnología full-stack moderna.",
    headline:
      "SL @ Stanford Code in Place X • Formadora • Ponente invitada • Moderadora",
    primaryRole: "Próxima candidata a máster",
    profileCardRole: "SL @ Stanford Code in Place X",
    badges: [
      "Egresada del programa Aspire Leaders",
      "8x Hackathon",
      "3 equipos liderados",
    ],
    hireMe: "Contrátame",
    downloadResume: "Descargar CV",
    viewProjects: "Ver proyectos",
    contactMe: "Contactarme",
    github: "GitHub",
    linkedin: "LinkedIn",
    stats: {
      projects: "Proyectos",
      hackathons: "Hackathons",
      // Short form on purpose: "Herramientas" alone is 12 characters and renders
      // wider than the hero stat cell, where break-words would split it
      // mid-syllable. Matches the brevity of the other locales (fr "Outils IA",
      // de "KI-Tools"), and es.ts already uses loanwords such as "Hackathons".
      aiTools: "Tools IA",
    },
    roles: [
      "Líder de equipo en hackathons",
      "Formadora y mentora",
      "Ponente invitada",
      "Moderadora de webinars",
      "Redactora técnica",
    ],
  },
  about: {
    label: "Acerca",
    title: "Ingeniería, educación y liderazgo comunitario",
    description:
      "Construyo aplicaciones web, comparto conocimientos técnicos y ayudo a otros a crecer mediante la enseñanza y la participación comunitaria.",
    summary:
      "Graduada en Tecnologia de la Informacion por la Government College University Faisalabad, con experiencia construyendo aplicaciones web full-stack.\n\nActualmente soy Section Leader de Code in Place X de la Universidad de Stanford. Tambien contribuyo a la comunidad tecnica como formadora, ponente invitada y moderadora de webinars, asi como instructora voluntaria.\n\nMis proyectos abarcan la verificacion multilingue basada en la voz, plataformas de automatizacion y sistemas de software optimizados en costes. He participado en hackathons nacionales e internacionales, liderado equipos y colaborado con comunidades tecnicas para construir soluciones practicas.",
  },
  achievements: {
    label: "Logros",
    title: "Logros y reconocimientos",
    description:
      "Resultados verificados en competiciones, hitos de liderazgo y reconocimiento de programas nacionales e internacionales.",
    cards: {
      "ach-participant": {
        label: "Hackathons nacionales e internacionales",
        subtitle: "Competiciones de IA y desarrollo web",
      },
      "ach-lead": {
        label: "Líder de equipo",
        subtitle: "Hackathons de IA generativa",
      },
      "ach-codesprint": { label: "Posición en CodeSprint LA" },
      "ach-stanford": {
        label: "Section Leader en Stanford Code in Place X",
        subtitle: "Seleccionada al primer intento",
      },
      "ach-quizoff": {
        label: "QuizOff",
        subtitle: "Estudiantes de más de 35 países",
      },
      "ach-linkedin": { label: "Comunidad de LinkedIn" },
    },
  },
  education: {
    label: "Educación",
    title: "Educación",
    description: "Titrulación, rendimiento académico y cursos relacionados con el trabajo.",
    cgpa: "Promedio",
    coursework: "Cursos",
  },
  skills: {
    label: "Habilidades",
    title: "Panel de habilidades de IA",
    description:
      "Tecnologías y herramientas que impulsan aplicaciones de producción e integraciones de IA.",
    technologies: "{count} tecnologías",
  },
  experience: {
    label: "Experiencia",
    title: "Experiencia profesional",
    description:
      "Prácticas y trabajo por roles en productos de producción, simulaciones virtuales y proyectos de consultoría.",
    simulation: "Simulacion virtual",
    certificate: "Certificado",
  },
  projects: {
    label: "Proyectos",
    title: "Proyectos académicos y hackathons",
    description:
      "Proyectos de fin de grado, académicos y de hackathons en aplicaciones de IA, automatización e ingeniería full-stack.",
    featured: "Destacado",
    teamProject: "Proyecto en equipo",
    myRole: "Mi rol",
    github: "Ver repositorio",
    liveDemo: "Demo en vivo",
    items: {
      "proj-feature-kit": {
        description:
          "Plataforma modular de IA que reúne texto a imagen, texto a voz, conversión de voz, resumen y eliminación de fondos en una sola interfaz. Construida como proyecto de fin de grado, cada capacidad sigue siendo independiente, de modo que se puede sustituir el modelo o el punto de conexión sin tocar el resto de la aplicación.",
        role: "Proyecto de fin de grado",
      },
      "proj-verivoice": {
        description:
          "Asistente de verificación multilingüe basado en voz, creado para el UNESCO Youth Hackathon 2026. Un bucle de voz entra y voz sale responde en urdu, español, indonesio e inglés, mientras la clasificación de afirmaciones, la búsqueda de pruebas en fuentes institucionales y las salvaguardas de citación mantienen las respuestas ligadas a las fuentes recuperadas. Construí el visualizador de audio, el modo de voz manos libres y el Evidence Drawer.",
        role: "Desarrolladora frontend",
      },
      "proj-amd-zerotoken": {
        description:
          "Enrutador de inferencia de IA consciente de los recursos, creado para la Track 1 del AMD Developer Hackathon. Los solucionadores deterministas resuelven problemas estructurados con coste cero de tokens, un modelo local cuantizado Qwen 2.5 3B cubre las tareas de baja complejidad y la escalada a la nube queda limitada a una lista permitida. Los techos de tokens y los tiempos de espera mantienen las ejecuciones dentro de un contenedor de 4 GB de RAM, 2 vCPU y sin GPU.",
      },
      "proj-autovance": {
        description:
          "Plataforma de automatización impulsada por IA que combina el envío de correo, la ejecución segura de webhooks, la programación de tareas y acciones de formularios personalizados en un único panel. Creada como aportación del equipo a la HEC Generative AI Cohort 3, añade un constructor de flujos de trabajo explicable presentado como prototipo de investigación con vista previa en seco, e informa de los fallos del proveedor en lugar de afirmar éxito.",
        role: "Líder de equipo",
      },
      "proj-hiregen": {
        description:
          "Plataforma de reclutamiento que genera preguntas de entrevista automáticamente, evalúa las respuestas de los candidatos y produce informes de contratación. Lideré el equipo que la entregó para la HEC Generative AI Cohort 2, dando a los equipos un flujo de entrevista técnica y puntuación consistente y repetible.",
        role: "Líder de equipo",
      },
      "proj-mira-ai": {
        description:
          "Plataforma de crecimiento personal que combina diario de ánimo, seguimiento de hábitos y análisis de objetivos, con autenticación JWT y de Google OAuth que mantiene las entradas de cada cuenta privadas para su dueño.",
      },
      "proj-lakki-marwat": {
        description:
          "Proyecto académico del parcial de Interacción Persona-Ordenador: una evaluación completa heurística y de usabilidad del sitio web de la University of Lakki Marwat, entregada como informe escrito y presentación y evaluada a través de Hirestive.",
      },
      "proj-portfolio": {
        description:
          "Portfolio con Next.js, TypeScript y Tailwind CSS, con un asistente de IA integrado y una interfaz animada. Diseñado como demostración en vivo del mismo stack full-stack y de IA generativa usado en el resto de proyectos.",
      },
    },
  },
  hackathons: {
    label: "Hackathons",
    title: "Hackathons nacionales e internacionales",
    description:
      "Participante y líder de equipo en hackathons de IA y desarrollo nacionales e internacionales, con un puesto entre los 25 primeros en CodeSprint LA.",
  },
  volunteer: {
    label: "Comunidad",
    title: "Experiencia de voluntariado",
    description:
      "Enseñanza, mentoría y contribuciones a la comunidad más allá del trabajo con clientes y hackathons.",
  },
  certifications: {
    label: "Credenciales",
    title: "Formación y certificados",
    description:
      "Desarrollo profesional, formación en liderazgo y certificados, cada uno enlazado a su documento verificado.",
  },
  contact: {
    label: "Contacto",
    title: "Construyamos algo inteligente",
    description:
      "Abierta a oportunidades de ingeniería full-stack e IA, colaboraciones y proyectos impulsados por IA.",
    aiPoweredContact: "Contacto impulsado por IA",
    getInTouch: "Contactarme",
    intro:
      "Contáctame para contratación, proyectos freelance o colaboraciones en hackathons.",
    linkedinProfile: "Perfil de LinkedIn",
    githubProfile: "Perfil de GitHub",
    form: {
      name: "Nombre",
      namePlaceholder: "Tu nombre",
      email: "Correo",
      emailPlaceholder: "tu@ejemplo.com",
      message: "Mensaje",
      messagePlaceholder: "Cuéntame sobre tu proyecto u oportunidad...",
      sending: "Enviando...",
      send: "Enviar mensaje",
    },
    toast: { success: "Mensaje enviado con éxito", error: "Algo salió mal" },
  },
  footer: { email: "Correo", rights: "Todos los derechos reservados." },
  resume: { unavailable: "El currículum no está disponible todavía. Contáctame directamente." },
};
