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
    skills: "Habilidades",
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
    github: "GitHub",
    linkedin: "LinkedIn",
    stats: {
      projects: "Proyectos",
      hackathons: "Hackathons",
      aiTools: "Herramientas IA",
    },
    roles: [
      "Desarrolladora MERN Stack",
      "Desarrolladora Next.js",
      "Apasionada por IA, automatización y agentes inteligentes",
    ],
  },
  about: {
    label: "Acerca",
    title: "Donde el desarrollo MERN Stack se encuentra con sistemas inteligentes",
    description:
      "Experiencia en SaaS de producción, especialización en automatización IA y liderazgo en hackathons — una instantánea para reclutadores y colaboradores.",
    education: "Educación",
    achievementHighlights: "Logros destacados",
    cgpa: "Promedio",
    summary:
      "Desarrolladora MERN Stack apasionada por construir aplicaciones full-stack escalables y de alto rendimiento con MongoDB, Express.js, React.js, Next.js, Node.js, TypeScript y Tailwind CSS.\n\nImpulsada por la curiosidad hacia sistemas inteligentes, exploro y construyo soluciones de IA con automatización, flujos de trabajo agentic, APIs de modelos de lenguaje y conceptos de aprendizaje automático.\n\nMi experiencia incluye contribuciones a productos SaaS reales, desarrollo frontend y backend, integración de APIs y entrega de aplicaciones web listas para producción.",
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
    title: "Trayectoria profesional",
    description:
      "Experiencia real construyendo productos SaaS, integrando APIs y entregando funciones en producción.",
  },
  projects: {
    label: "Proyectos",
    title: "Portafolio de proyectos",
    description:
      "Plataformas SaaS impulsadas por IA, middleware de seguridad y aplicaciones web de producción.",
    featured: "Destacado",
    problem: "Problema",
    solution: "Solución",
    github: "GitHub",
    liveDemo: "Demo en vivo",
  },
  hackathons: {
    label: "Hackathons",
    title: "Competencia e innovación",
    description:
      "Participante activa y líder de equipo en hackathons de IA y desarrollo a nivel mundial.",
  },
  volunteer: {
    label: "Comunidad",
    title: "Experiencia de voluntariado",
    description:
      "Investigación independiente y contribuciones a la comunidad más allá del trabajo con clientes y hackathons.",
  },
  certifications: {
    label: "Credenciales",
    title: "Certificaciones y formación",
    description:
      "Desarrollo profesional, formación en liderazgo y certificados obtenidos en el camino.",
  },
  contact: {
    label: "Contacto",
    title: "Construyamos algo inteligente",
    description:
      "Abierta a oportunidades como desarrolladora MERN Stack, colaboraciones y proyectos impulsados por IA.",
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
