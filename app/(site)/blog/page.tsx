
import Link from "next/link";
import { CalendarDays, Clock } from "lucide-react";
import { SectionHeader } from "@/components/section-header";
import { TechBadge } from "@/components/tech-badge";
import { getAllPosts } from "@/lib/mdx";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Blog",
  description:
    "Writing on applied AI, data science workflows, and building thoughtful developer experiences.",
  path: "/blog",
});

export default async function BlogPage() {
  const posts = await getAllPosts();

  return (
    <div className="space-y-12">
      <SectionHeader
        eyebrow="Thinking"
        title="Notes from the lab"
        description="Ideas I am exploring around applied AI, product strategy, and developer tooling."
      />

      {posts.length === 0 ? (
        <EmptyState />
      ) : (
        <div className="grid gap-6">
          {posts.map((post) => (
            <article
              key={post.slug}
              className="group rounded-3xl border border-border/70 bg-card/80 p-6 shadow-sm transition-all hover:-translate-y-1 hover:shadow-soft"
            >
              <Link href={`/blog/${post.slug}`} className="space-y-4">
                <div className="flex flex-wrap items-center gap-4 text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">
                  <span className="inline-flex items-center gap-2 text-muted-foreground">
                    <CalendarDays className="h-3.5 w-3.5 text-primary" />
                    {formatDate(post.date)}
                  </span>
                  <span className="inline-flex items-center gap-2 text-muted-foreground">
                    <Clock className="h-3.5 w-3.5 text-primary" />
                    {post.readingTime}
                  </span>
                </div>
                <div className="space-y-3">
                  <h3 className="text-2xl font-semibold text-foreground transition-colors group-hover:text-primary">
                    {post.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">{post.description}</p>
                </div>
                <div className="flex flex-wrap gap-2">
                  {post.tags.map((tag) => (
                    <TechBadge key={tag} label={tag} className="text-xs" />
                  ))}
                </div>
              </Link>
            </article>
          ))}
        </div>
      )}
    </div>
  );
}

function formatDate(value: string) {
  return new Date(value + "T00:00:00Z").toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
}

function EmptyState() {
  return (
    <div className="rounded-3xl border border-dashed border-border/70 bg-card/80 p-10 text-center shadow-sm">
      <p className="text-lg font-semibold text-foreground">Stay tuned.</p>
      <p className="mt-2 text-sm text-muted-foreground">
        I am drafting essays on applied AI experiments, product insights, and the craft of
        data-informed storytelling. Subscribe soon for updates.
      </p>
    </div>
  );
}
