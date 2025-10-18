export type TimelineItem = {
  title: string;
  organization: string;
  location: string;
  date: string;
  description: string;
  highlighted?: boolean;
};

export const timeline: TimelineItem[] = [
  {
    title: "Senior AI Engineer",
    organization: "Nordic Applied Intelligence Lab",
    location: "Vilnius, Lithuania",
    date: "2024 - Present",
    description:
      "Leading a cross-functional team shipping applied LLM copilots and decision support dashboards for manufacturing clients.",
    highlighted: true,
  },
  {
    title: "AI Product Explorer",
    organization: "Independent",
    location: "Remote",
    date: "2022 - 2024",
    description:
      "Prototyped data-centric AI products, consulted on ML platform foundations, and launched community tooling for prompt engineering.",
  },
  {
    title: "Data Science Lead",
    organization: "Baltic Fintech Collective",
    location: "Riga, Latvia",
    date: "2019 - 2022",
    description:
      "Scaled forecasting models, introduced MLOps best practices, and mentored analysts transitioning into machine learning roles.",
  },
  {
    title: "AI Research Graduate",
    organization: "Vilnius University",
    location: "Vilnius, Lithuania",
    date: "2016 - 2019",
    description:
      "Focused on probabilistic models for risk assessment and published work on interpretable neural architectures.",
  },
];
