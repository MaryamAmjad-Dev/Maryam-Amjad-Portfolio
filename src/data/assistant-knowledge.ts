/**
 * Structured knowledge for the in-app AI assistant and future features.
 * This file provides concise descriptions of projects, APIs, certifications,
 * and keywords to help the assistant answer queries about Maryam's work.
 */
export const assistantKnowledge = {
  projects: {
    verivoice: {
      name: "VeriVoice",
      summary:
        "AI-powered multilingual voice fact verification platform with modular multi-agent pipeline (speech, language, translation, fact verification, evidence retrieval, reporting). UNESCO Youth Hackathon 2026 team project; Maryam contributed as Frontend Developer.",
      highlights: [
        "Speech analysis",
        "Language detection & translation",
        "AI fact verification with confidence scoring",
        "Explainable report generation",
      ],
      role: "Frontend Developer — design systems, 3D Evidence Constellation visualizer, and multilingual UI/UX",
      showcase: [
        "UNESCO Youth Hackathon 2026 — Featured team project",
        "Python, Next.js, React, TypeScript, Tailwind CSS, Google Gemini API, FastAPI, MongoDB",
      ],
      links: {
        github: "https://github.com/MaryamAmjad-Dev/Veri-Voice-Unesco-Hackathon",
        live: "https://verivoice-ten.vercel.app",
      },
    },
    aiFeatureKit: {
      name: "AI Feature Kit",
      summary:
        "Modular multi-modal AI toolkit: Text-to-Image, Text-to-Speech, Voice Changer, Summarization, Background Removal.",
      highlights: ["Final Year Project", "1st Position"],
    },
    amdZeroToken: {
      name: "AMD ZeroToken Hybrid AI Router",
      summary:
        "Hybrid routing system that dynamically selects local or cloud models to minimize inference costs and latency with a five-layer decision pipeline.",
      highlights: ["Cost-aware routing", "Token savings analytics"],
    },
    miraAI: {
      name: "MIRA AI",
      summary:
        "MERN application for emotional wellbeing, journaling, habit tracking and AI-driven insights.",
    },
  },
  apis: {
    googleGemini: "Google Gemini API — used for LLM tasks and embeddings",
    googleADK: "Google ADK — platform-specific developer kit",
    googleAntigravity: "Google Antigravity — internal / experimental integration reference",
    huggingFace: "Hugging Face API — models and tooling for ML inference",
  },
  certifications: [
    "Claude Certified",
    "Google AI",
    "Developing the Mindset and Skills Young People Need to Succeed in a Global World — Global Youth Development Forum, Sierra Leone Chapter (August 2026)",
  ],
  skills: [
    "Prompt Engineering",
    "AI Agents",
    "LLM Integration",
    "Speech Processing",
    "Fact Verification",
    "RAG",
  ],
};

export default assistantKnowledge;
