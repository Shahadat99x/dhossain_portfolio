import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <main className="mx-auto flex min-h-[60vh] max-w-xl flex-col items-center justify-center gap-6 px-4 text-center">
      <p className="rounded-full border border-border/60 px-4 py-1 text-xs font-semibold uppercase tracking-[0.3em] text-muted-foreground">
        404
      </p>
      <h1 className="text-4xl font-semibold text-foreground">
        This page drifted off-course
      </h1>
      <p className="text-sm text-muted-foreground">
        The page you are looking for might have been renamed, moved, or never existed.
        Let us head back and explore from the start.
      </p>
      <Button asChild size="lg" className="rounded-3xl">
        <Link href="/">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to home
        </Link>
      </Button>
    </main>
  );
}
