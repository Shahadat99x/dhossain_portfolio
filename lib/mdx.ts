import fs from "fs/promises";
import path from "path";
import matter from "gray-matter";
import { compileMDX } from "next-mdx-remote/rsc";
import remarkGfm from "remark-gfm";
import rehypeSlug from "rehype-slug";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import readingTime from "reading-time";
import { z } from "zod";
import { mdxComponents } from "@/mdx-components";

const BLOG_PATH = path.join(process.cwd(), "content", "blog");

const frontmatterSchema = z.object({
  title: z.string(),
  description: z.string(),
  date: z.string(),
  tags: z.array(z.string()).default([]),
  published: z.boolean().default(true),
});

export type BlogFrontmatter = z.infer<typeof frontmatterSchema>;

export type BlogPostSummary = BlogFrontmatter & {
  slug: string;
  readingTime: string;
};

export async function getAllPosts(): Promise<BlogPostSummary[]> {
  const files = await fs.readdir(BLOG_PATH);
  const posts = await Promise.all(
    files
      .filter((file) => file.endsWith(".mdx"))
      .map(async (file) => {
        const slug = file.replace(/\.mdx$/, "");
        const source = await fs.readFile(path.join(BLOG_PATH, file), "utf8");
        const { data, content } = matter(source);
        const parsed = frontmatterSchema.parse(normalizeFrontmatter(data));

        return {
          slug,
          ...parsed,
          readingTime: readingTime(content).text,
        };
      }),
  );

  return posts
    .filter((post) => post.published !== false)
    .sort(
      (a, b) =>
        new Date(b.date).getTime() - new Date(a.date).getTime(),
    );
}

export async function getPostBySlug(slug: string) {
  const filePath = path.join(BLOG_PATH, `${slug}.mdx`);
  const source = await fs.readFile(filePath, "utf8");
  const { content, frontmatter } = await compileMDX<BlogFrontmatter>({
    source,
    components: mdxComponents,
    options: {
      parseFrontmatter: true,
      mdxOptions: {
        remarkPlugins: [remarkGfm],
        rehypePlugins: [
          rehypeSlug,
          [
            rehypeAutolinkHeadings,
            {
              behavior: "wrap",
              properties: {
                className: ["group", "anchor-link"],
              },
            },
          ],
        ],
      },
    },
  });

  const parsed = frontmatterSchema.parse(normalizeFrontmatter(frontmatter));
  const { content: plainContent } = matter(source);

  return {
    slug,
    frontmatter: parsed,
    readingTime: readingTime(plainContent).text,
    content,
  };
}

export async function getPostSlugs() {
  const files = await fs.readdir(BLOG_PATH);
  return files
    .filter((file) => file.endsWith(".mdx"))
    .map((file) => file.replace(/\.mdx$/, ""));
}


function normalizeFrontmatter(data: Record<string, unknown>) {
  const normalized = { ...data } as Record<string, unknown>;
  const rawDate = normalized.date;
  if (rawDate instanceof Date) {
    normalized.date = rawDate.toISOString().split("T")[0];
  }
  return normalized;
}

