export type ProjectLink = {
  label: string;
  url: string;
  kind?: "primary" | "secondary" | "tertiary";
};

export type Project = {
  title: string;
  description: string;
  year: number;
  tech: string[];
  slug: string;
  links: ProjectLink[];
  featured?: boolean;
  beta?: boolean;
};

export const projects: Project[] = [
  {
    title: "LexNova Legal Platform",
    description:
      "A production-ready legal services platform consisting of a public website, admin dashboard, and native Android application. The system supports legal service listings, blog publishing, lead capture, appointment requests, and centralized admin management using a shared Supabase backend.",
    year: 2024,
    tech: ["Next.js", "TypeScript", "Supabase", "Flutter", "Dart", "Vercel"],
    slug: "lexnova-legal-platform",
    links: [
      {
        label: "Live",
        url: "https://lexnovaeu.vercel.app",
        kind: "primary",
      },
      {
        label: "Code",
        url: "https://github.com/Shahadat99x/lawfirm-pwa-platform",
        kind: "secondary",
      },
    ],
    featured: true,
  },
  {
    title: "LexNova – Android App (Beta)",
    description:
      "A native Android application built with Flutter and Dart for the LexNova Legal platform. It shares the same Supabase backend as the web system and is currently in closed testing (beta) prior to public release.",
    year: 2024,
    tech: ["Flutter", "Dart", "Supabase"],
    slug: "lexnova-android-beta",
    links: [
      {
        label: "Request Beta Access",
        url: "/contact?subject=LexNova%20Android%20Beta%20Access",
        kind: "primary",
      },
      {
        label: "Code",
        url: "https://github.com/Shahadat99x/lawfirm_mobile_app",
        kind: "secondary",
      },
      {
        label: "Play Store (Beta)",
        url: "https://play.google.com/store/apps/details?id=com.lexnova.app",
        kind: "secondary",
      },
    ],
    featured: true,
    beta: true,
  },
  {
    title: "EstateNova – Real Estate Platform",
    description:
      "A full-stack real estate platform featuring public property listings, lead capture, and an admin dashboard for managing listings, inquiries, and blog content. Built with SEO-first architecture and optimized for production deployment.",
    year: 2024,
    tech: ["Next.js", "TypeScript", "Supabase", "Tailwind CSS", "Docker", "Vercel"],
    slug: "estatenova-real-estate",
    links: [
      {
        label: "Live",
        url: "https://estatenova.vercel.app",
        kind: "primary",
      },
      {
        label: "Code",
        url: "https://github.com/Shahadat99x/real-estate-platform",
        kind: "secondary",
      },
    ],
    featured: true,
  },
];
