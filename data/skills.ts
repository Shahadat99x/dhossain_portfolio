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
    title: "Languages & Runtime",
    items: [
      { name: "TypeScript", level: 92, emphasis: "primary" },
      { name: "Python", level: 88, emphasis: "primary" },
      { name: "Node.js", level: 86 },
    ],
  },
  {
    title: "Frameworks",
    items: [
      { name: "Next.js", level: 90, emphasis: "primary" },
      { name: "Tailwind CSS", level: 85 },
      { name: "Vercel", level: 82 },
    ],
  },
  {
    title: "AI & Data",
    items: [
      { name: "TensorFlow", level: 80 },
      { name: "MongoDB", level: 78 },
      { name: "Docker", level: 84 },
    ],
  },
];
