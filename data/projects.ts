export type Project = {
  title: string;
  description: string;
  year: number;
  tech: string[];
  slug: string;
  // Deprecated: use links object instead
  github?: string;
  live?: string;
  links: {
    live?: string;
    code?: string;
    playStore?: string;
    mobileCode?: string;
  };
  featured?: boolean;
};

export const projects: Project[] = [
  {
    title: "LexNova Legal Platform",
    description:
      "A production-ready legal services platform consisting of a public website, admin dashboard, and native Android application. The system supports legal service listings, blog publishing, lead capture, appointment requests, and centralized admin management using a shared Supabase backend.",
    year: 2024,
    tech: ["Next.js", "TypeScript", "Supabase", "Flutter", "Dart", "Vercel"],
    slug: "lexnova-legal-platform",
    // Keeping backward compatibility if needed, but type says optional
    github: "https://github.com/Shahadat99x/lawfirm-pwa-platform",
    live: "https://lexnovaeu.vercel.app",
    links: {
      live: "https://lexnovaeu.vercel.app",
      code: "https://github.com/Shahadat99x/lawfirm-pwa-platform",
      playStore: "https://play.google.com/store/apps/details?id=com.lexnova.app",
      mobileCode: "https://github.com/Shahadat99x/lawfirm_mobile_app",
    },
    featured: true,
  },
  {
    title: "EstateNova – Real Estate Platform",
    description:
      "A full-stack real estate platform featuring public property listings, lead capture, and an admin dashboard for managing listings, inquiries, and blog content. Built with SEO-first architecture and optimized for production deployment.",
    year: 2024,
    tech: ["Next.js", "TypeScript", "Supabase", "Tailwind CSS", "Docker", "Vercel"],
    slug: "estatenova-real-estate",
    github: "https://github.com/Shahadat99x/real-estate-platform",
    live: "https://estatenova.vercel.app",
    links: {
      live: "https://estatenova.vercel.app",
      code: "https://github.com/Shahadat99x/real-estate-platform",
    },
    featured: true,
  },
];
