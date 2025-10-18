export type NavItem = {
  label: string;
  href: string;
};

export type SocialLink = {
  platform: "GitHub" | "LinkedIn" | "X" | "YouTube";
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
  { platform: "GitHub", href: "https://github.com/your-github" },
  { platform: "LinkedIn", href: "https://linkedin.com/in/your-profile" },
  { platform: "X", href: "https://x.com/your-handle" },
  { platform: "YouTube", href: "https://youtube.com/@your-channel" },
];
