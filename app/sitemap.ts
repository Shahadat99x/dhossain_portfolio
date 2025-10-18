import type { MetadataRoute } from "next";
import { siteConfig } from "@/data/site";
import { getAllPosts } from "@/lib/mdx";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = siteConfig.url.replace(/\/$/, "");
  const lastMod = new Date();

  const routes: MetadataRoute.Sitemap = ["/", "/projects", "/about", "/blog", "/contact"].map((path) => ({
    url: `${baseUrl}${path}`,
    lastModified: lastMod,
  }));

  const posts = await getAllPosts();
  const postEntries = posts.map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: new Date(post.date),
  }));

  return [...routes, ...postEntries];
}
