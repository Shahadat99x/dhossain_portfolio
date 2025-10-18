import { HomeContent } from "@/components/home/home-content";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata();

export default function HomePage() {
  return <HomeContent />;
}
