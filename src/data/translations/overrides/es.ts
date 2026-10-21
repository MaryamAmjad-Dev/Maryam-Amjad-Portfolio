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
    hireMe: "Contrátame",
    downloadResume: "Descargar CV",
    viewProjects: "Ver proyectos",
    contactMe: "Contactarme",
    github: "GitHub",
    linkedin: "LinkedIn",
    stats: {
      projects: "Proyectos",
      hackathons: "Hackathons",
      aiTools: "Herramientas IA",
    },
    roles: [
      "Desarrolladora Full-Stack",
      "Formadora",
      "Ponente invitada",
      "Moderadora",
    ],
  },
  about: {
    label: "Acerca",
    title: "Ingeniería de IA, educación y liderazgo comunitario",
    description:
      "Construyo aplicaciones impulsadas por IA, comparto conocimientos técnicos y ayudo a otros a crecer mediante la enseñanza y la participación comunitaria.",
    summary:
      "Graduada en Tecnologia de la Informacion por la Government College University Faisalabad, con experiencia construyendo aplicaciones web full-stack y soluciones impulsadas por IA.\n\nActualmente soy Section Leader de Code in Place X de la Universidad de Stanford. Tambien contribuyo a la comunidad tecnica como formadora, ponente invitada y moderadora de webinars, asi como instructora voluntaria.\n\nMis proyectos abarcan el desarrollo de aplicaciones de IA, la verificacion multilingue basada en la voz y sistemas de IA optimizados en costes. He participado en hackathons nacionales e internacionales, liderado equipos y colaborado con comunidades tecnicas para construir soluciones practicas.",
  },
  achievements: {
    label: "Logros",
    title: "Logros y reconocimientos",
    description:
      "Resultados verificados en competiciones, hitos de liderazgo y reconocimiento de programas nacionales e internacionales.",
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
    title: "Proyectos académicos",
    description:
      "Proyectos de fin de grado, académicos y de hackathons en aplicaciones de IA, automatización e ingeniería full-stack.",
    featured: "Destacado",
    problem: "Problema",
    solution: "Solución",
    github: "Ver repositorio",
    liveDemo: "Demo en vivo",
  },
  hackathons: {
    label: "Hackathons",
    title: "Hackathons internacionales",
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
