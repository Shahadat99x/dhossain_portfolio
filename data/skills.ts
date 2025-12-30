export type Skill = {
  name: string;
  level: number;
  emphasis?: "primary" | "secondary";
};

export type SkillGroup = {
  title: string;
  items: Skill[];
};

export const skillGroups: SkillGroup[] = [
  {
    title: "Core Stack",
    items: [
      { name: "Next.js", level: 95, emphasis: "primary" },
      { name: "TypeScript", level: 90, emphasis: "primary" },
      { name: "Supabase", level: 88, emphasis: "primary" },
      { name: "Tailwind CSS", level: 92 },
    ],
  },
  {
    title: "Mobile & Hybrid",
    items: [
      { name: "Flutter", level: 85, emphasis: "primary" },
      { name: "Dart", level: 85 },
      { name: "PWA", level: 80 },
    ],
  },
  {
    title: "DevOps & Infrastructure",
    items: [
      { name: "Docker", level: 75 },
      { name: "Vercel", level: 90 },
      { name: "Git", level: 88 },
      { name: "Backend Integration", level: 85 },
    ],
  },
];
