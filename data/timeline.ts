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
    title: "Full-Stack Engineer",
    organization: "Nordic Applied Intelligence Lab",
    location: "Vilnius, Lithuania",
    date: "2024 - Present",
    description:
      "Developing production-ready web platforms and internal tools using Next.js and Supabase. Implementing secure authentication, real-time data features, and responsive administrative dashboards.",
    highlighted: true,
  },
  {
    title: "Product Engineer",
    organization: "Independent",
    location: "Remote",
    date: "2022 - 2024",
    description:
      "Designed and built end-to-end web applications for clients, focusing on performance, SEO optimisation, and clean user experience. Managed deployment pipelines and cloud infrastructure.",
  },
  {
    title: "Software Developer",
    organization: "Baltic Fintech Collective",
    location: "Riga, Latvia",
    date: "2019 - 2022",
    description:
      "Contributed to backend API development and frontend integration. Wrote clean, maintainable code and collaborated with cross-functional teams to deliver feature updates.",
  },
  {
    title: "Computer Science Student",
    organization: "Vilnius University",
    location: "Vilnius, Lithuania",
    date: "2016 - 2019",
    description:
      "Focused on software engineering fundamentals, algorithms, and web technologies. Completed capstone project on distributed systems architecture.",
  },
];
