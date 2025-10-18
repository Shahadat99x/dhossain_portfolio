export type Project = {
  title: string;
  description: string;
  year: number;
  tech: string[];
  slug: string;
  github: string;
  live: string;
  featured?: boolean;
};

export const projects: Project[] = [
  {
    title: "Insight SOOOOOO TEEEE",
    description:
      "Operational intelligence platform combining LLM copilots with observability data to automate incident response workflows.",
    year: 2025,
    tech: ["Next.js", "TypeScript", "PostgreSQL", "Tailwind"],
    slug: "insightops-ai",
    github: "https://github.com/your-github/insightops-ai",
    live: "https://insightops-ai.example.com",
    featured: true,
  },
  {
    title: "VisionFlow Analytics",
    description:
      "Streaming computer vision analytics dashboard for manufacturing quality assurance with real-time anomaly detection.",
    year: 2024,
    tech: ["Python", "FastAPI", "TensorFlow", "Redis", "Docker"],
    slug: "visionflow-analytics",
    github: "https://github.com/your-github/visionflow-analytics",
    live: "https://visionflow-analytics.example.com",
    featured: true,
  },
  {
    title: "PromptCraft Studio",
    description:
      "Collaborative prompt engineering workspace with experiment tracking and shareable knowledge base.",
    year: 2024,
    tech: ["Next.js", "React", "Supabase", "Python", "Vercel"],
    slug: "promptcraft-studio",
    github: "https://github.com/your-github/promptcraft-studio",
    live: "https://promptcraft-studio.example.com",
    featured: true,
  },
  {
    title: "DataPilot CLI",
    description:
      "Composable command-line toolkit that ships data quality heuristics, schema drift detection, and AI-assisted remediation.",
    year: 2023,
    tech: ["Node.js", "TypeScript", "Zod", "SQLite"],
    slug: "datapilot-cli",
    github: "https://github.com/your-github/datapilot-cli",
    live: "https://npmjs.com/package/datapilot-cli",
  },
  {
    title: "Aurora Forecast Hub",
    description:
      "Global aurora forecasting site blending satellite data with probabilistic models and delightful storytelling UI.",
    year: 2023,
    tech: ["Next.js", "Chart.js", "Tailwind", "Mapbox"],
    slug: "aurora-forecast-hub",
    github: "https://github.com/your-github/aurora-forecast-hub",
    live: "https://aurora-forecast.example.com",
  },
  {
    title: "CarePulse Insights",
    description:
      "Healthcare analytics suite surfacing patient journey insights using federated learning for privacy-safe predictions.",
    year: 2022,
    tech: ["Python", "PyTorch", "Airflow", "MongoDB"],
    slug: "carepulse-insights",
    github: "https://github.com/your-github/carepulse-insights",
    live: "https://carepulse-insights.example.com",
  },
];
