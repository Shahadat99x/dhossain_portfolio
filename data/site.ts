export type NavItem = {
  label: string;
  href: string;
};

export type SocialLink = {
  platform:
  | "GitHub"
  | "LinkedIn"
  | "X"
  | "YouTube"
  | "Instagram"
  | "Reddit"
  | "Facebook";
  href: string;
};

export const siteConfig = {
  name: "Shahadat Hossain",
  title: "AI & Data Science Explorer",
  tagline: "I build practical AI products and modern web apps.",
  description:
    "Shahadat Hossain is an AI & Data Science Explorer based in Vilnius, Lithuania, crafting practical AI products and modern web experiences.",
  location: "Vilnius, Lithuania",
  email: "hello@dhossian.com",
  url: "https://dhossian.com",
  ogImage: "/api/og",
};

export const navigation: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "Projects", href: "/projects" },
  { label: "About", href: "/about" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
];

export const socialLinks: SocialLink[] = [
  { platform: "GitHub", href: "https://github.com/Shahadat99x" },
  { platform: "LinkedIn", href: "https://linkedin.com/in/shahadat-ai" },
  { platform: "X", href: "https://x.com/shahadat_ai" },
  { platform: "Instagram", href: "https://www.instagram.com/shahadathossainverified/" },
  { platform: "Reddit", href: "https://reddit.com/user/shahadat99x" },
  { platform: "Facebook", href: "https://facebook.com/shahadathossainverified" },
  { platform: "YouTube", href: "https://youtube.com/@TraveloguebyShahadat" },
];
