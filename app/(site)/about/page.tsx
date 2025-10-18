import { AboutContent } from "@/components/about/about-content";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "About",
  description:
    "Learn more about Shahadat Hossain's journey as an AI & Data Science Explorer, blending research, product strategy, and hands-on engineering.",
  path: "/about",
});

export default function AboutPage() {
  return <AboutContent />;
}
