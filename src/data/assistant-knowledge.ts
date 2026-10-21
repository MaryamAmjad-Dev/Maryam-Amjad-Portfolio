/**
 * Structured knowledge for the in-app AI assistant and future features.
 * This file provides concise descriptions of projects, APIs, certifications,
 * and keywords to help the assistant answer queries about Maryam's work.
 *
 * Every entry here mirrors `src/data/portfolio.ts`, which is sourced from the
 * CV (`reference-docs/Maryam_Amjad_CV - Updated.pdf`). No certification, award,
 * position, or API is listed here unless the CV states it.
 */
export const assistantKnowledge = {
  projects: {
    verivoice: {
      name: "VeriVoice",
      summary:
        "Voice-first multilingual verification assistant built for the UNESCO Youth Hackathon 2026. Users speak a question in Urdu, Spanish, Indonesian or English and receive a spoken, evidence-backed answer. Maryam contributed as Frontend Developer.",
      highlights: [
        "Claim classification and evidence retrieval from institutional sources",
        "Structured verdicts (TRUE, FALSE, MIXED, UNCERTAIN) validated with Zod",
        "Citation guardrails that reject URLs absent from the retrieved evidence set",
        "Spoken responses via Microsoft Edge Neural TTS",
      ],
      role: "Frontend Developer — audio visualizer, hands-free voice mode, Evidence Drawer, emergency alerts, and multilingual UI/UX",
      showcase: [
        "UNESCO Youth Hackathon 2026 — team project",
        "React 18, Vite, TypeScript, Tailwind CSS, Groq (Whisper, Llama 3.3 70B), Zod, Edge Neural TTS, Discord.js",
        "Supports Urdu, Indonesian, Spanish and English",
        "170 passing tests",
      ],
      links: {
        live: "https://verivoice-ten.vercel.app",
        repo: "https://github.com/MaryamAmjad-Dev/Veri-Voice-Unesco-Hackathon",
      },
    },
    featureKit: {
      name: "AI Feature Kit",
      summary:
        "Modular multi-modal AI toolkit: Text-to-Image, Text-to-Speech, Voice Changer, Summarization, Background Removal.",
      highlights: ["Final Year Project", "React, Node.js, Express, MySQL"],
      links: {
        live: "https://fyp-ai-feature-kit-web-app.vercel.app",
        repo: "https://github.com/MaryamAmjad-Dev/FYP-AI-Feature-Kit-Web-App",
      },
    },
    amdZeroToken: {
      name: "AMD Model Router",
      summary:
        "Resource-aware AI inference router designed for Track 1 of the AMD Developer Hackathon, balancing task accuracy, API-token usage and strict compute limits in a 4 GB RAM, 2 vCPU, no-GPU container with a 10-minute execution limit.",
      highlights: [
        "Eight task categories routed across deterministic solvers, a local quantized model, and cloud escalation",
        "Local Qwen 2.5 3B GGUF via llama.cpp",
        "Output validation gate that checks for truncation or missing markers",
        "Cloud models restricted to the ALLOWED_MODELS environment variable",
      ],
      showcase: [
        "AMD Developer Hackathon: Act II — Team Shaheen",
        "Python, Docker, llama.cpp, Qwen 2.5 3B (GGUF), AsyncOpenAI, Fireworks API, Next.js, Tailwind CSS",
        "The 80% figure in the hackathon brief is an eligibility gate for scoring, not a measured result of this build",
      ],
      links: {
        live: "https://amd-zero-token-ai-router.vercel.app",
        repo: "https://github.com/MaryamAmjad-Dev/AMD-ZeroToken-AI-Router-Project",
      },
    },
    autovanceAI: {
      name: "Autovance AI",
      summary:
        "AI-powered automation platform combining email automation, secure webhook execution, cron job scheduling, custom form actions and an experimental explainable AI workflow builder in one dashboard.",
      highlights: [
        "Next.js (Pages Router) on Vercel with Neon PostgreSQL persistence",
        "OpenRouter for AI generation and configurable email providers",
        "Server-side validation, session auth, rate limiting, password hashing and SSRF protection for webhooks",
        "Workflow builder framed as a research prototype with a dry-run preview",
      ],
      role: "Team Lead",
      links: {
        live: "https://autovance-ai.vercel.app",
        repo: "https://github.com/MaryamAmjad-Dev/Autovance-AI",
      },
    },
    hiregenAI: {
      name: "HireGen AI",
      summary:
        "Recruitment platform that automates interview questions and candidate scoring.",
      highlights: ["HEC Generative AI Cohort 2", "Next.js, AI, Node.js, MongoDB"],
      role: "Team Lead",
      links: {
        live: "https://hiregen-ai.vercel.app",
        repo: "https://github.com/MaryamAmjad-Dev/hiregen-ai",
      },
    },
    miraAI: {
      name: "MIRA AI",
      summary:
        "MERN application for emotional wellbeing, mood journaling, habit tracking, goal analytics, JWT and Google OAuth.",
      highlights: ["MERN", "JWT", "Google OAuth"],
      links: {
        repo: "https://github.com/MaryamAmjad-Dev/MIRA-AI-Personal-Growth-Assistant",
      },
    },
    lakkiMarwat: {
      name: "University of Lakki Marwat Website Evaluation",
      summary:
        "Academic HCI mid-semester project: heuristic evaluation of the University of Lakki Marwat website, produced as a presentation and a detailed report.",
      highlights: ["Human-Computer Interaction", "Heuristic Evaluation"],
      links: {
        slides:
          "https://docs.google.com/presentation/d/17H6NsZhOOeXh7tgE09xO1KK0DHyOTUOD/edit?slide=id.p1&slide=id.p1",
        report:
          "https://docs.google.com/document/d/1tvl6LJONnrjT3y9Kf_We101-cwWqWdkO/edit",
      },
    },
    portfolio: {
      name: "Maryam AI Portfolio",
      summary:
        "Next-generation AI-powered developer portfolio built with Next.js, TypeScript, Tailwind CSS and Generative AI.",
      links: {
        live: "https://maryam-amjad-portfolio.vercel.app/",
        repo: "https://github.com/MaryamAmjad-Dev/Maryam-Amjad-Portfolio",
      },
    },
  },
  apis: {
    groq: "Groq API — Whisper for speech-to-text and Llama 3.3 70B for verification",
    fireworkds: "Fireworks API — cloud escalation for the AMD ZeroToken router",
    edgeNeuralTTS: "Edge Neural TTS — VeriVoice voice output",
  },
  certifications: [
    "Web Development Bootcamp — WPBrigade, in collaboration with iCodeGuru (September 2026)",
    "Generative AI Mastermind — Outskill, led by Vaibhav Sisinty",
    "Aspire Leaders Program (Cohort 3, 2026) — Aspire Institute, graduate and alumna",
    "Developing the Mindset and Skills Young People Need to Succeed in a Global World — Global Youth Development Forum, Sierra Leone Chapter (August 2026)",
  ],
  skills: [
    "Agentic AI",
    "Generative AI",
    "Prompt Engineering",
    "LLM Application Development",
    "Multi-Agent Systems",
    "Speech Processing",
    "Fact Verification",
  ],
};

export default assistantKnowledge;
