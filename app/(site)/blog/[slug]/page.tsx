
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { ArrowLeft, CalendarDays, Clock } from "lucide-react";
import { getPostBySlug, getPostSlugs } from "@/lib/mdx";
import { buildMetadata } from "@/lib/seo";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  const slugs = await getPostSlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata(
  props: PageProps,
): Promise<Metadata | undefined> {
  const { slug } = await props.params;
  const post = await safeGetPost(slug);
  if (!post) return undefined;

  return buildMetadata({
    title: post.frontmatter.title,
    description: post.frontmatter.description,
    path: `/blog/${slug}`,
  });
}

export default async function BlogPostPage(props: PageProps) {
  const { slug } = await props.params;
  const post = await safeGetPost(slug);
  if (!post) notFound();

  return (
    <article className="mx-auto max-w-3xl space-y-10">
      <header className="space-y-6">
        <Link
          href="/blog"
          className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to writing
        </Link>
        <h1 className="text-4xl font-semibold tracking-tight">
          {post.frontmatter.title}
        </h1>
        <p className="text-base text-muted-foreground">
          {post.frontmatter.description}
        </p>
        <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
          <span className="inline-flex items-center gap-2">
            <CalendarDays className="h-4 w-4 text-primary" />
            {formatDate(post.frontmatter.date)}
          </span>
          <span className="inline-flex items-center gap-2">
            <Clock className="h-4 w-4 text-primary" />
            {post.readingTime}
          </span>
        </div>
      </header>

      <div className="prose prose-invert max-w-none prose-h2:text-foreground prose-p:text-muted-foreground dark:prose-invert">
        {post.content}
      </div>
    </article>
  );
}

async function safeGetPost(slug: string) {
  try {
    return await getPostBySlug(slug);
  } catch {
    return null;
  }
}

function formatDate(value: string) {
  return new Date(value + "T00:00:00Z").toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
}



