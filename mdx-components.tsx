
import type { MDXComponents } from "mdx/types";
import Link from "next/link";
import { cn } from "@/lib/utils";

export const mdxComponents: MDXComponents = {
  h2: (props) => (
    <h2
      {...props}
      className={cn(
        "mt-10 text-3xl font-semibold tracking-tight",
        props.className,
      )}
      id={slugify(props.children)}
    />
  ),
  h3: (props) => (
    <h3
      {...props}
      className={cn(
        "mt-8 text-2xl font-semibold tracking-tight",
        props.className,
      )}
      id={slugify(props.children)}
    />
  ),
  p: (props) => (
    <p
      {...props}
      className={cn("leading-7 text-muted-foreground", props.className)}
    />
  ),
  a: (props) => (
    <Link
      {...props}
      className={cn(
        "font-medium text-primary underline-offset-4 hover:underline",
        props.className,
      )}
    />
  ),
  ul: (props) => (
    <ul
      {...props}
      className={cn(
        "my-4 list-disc pl-5 text-muted-foreground marker:text-primary",
        props.className,
      )}
    />
  ),
  ol: (props) => (
    <ol
      {...props}
      className={cn(
        "my-4 list-decimal pl-5 text-muted-foreground marker:text-primary",
        props.className,
      )}
    />
  ),
  pre: (props) => (
    <pre
      {...props}
      className={cn(
        "mt-6 overflow-x-auto rounded-2xl border border-border/60 bg-secondary/90 p-4 text-sm text-secondary-foreground",
        props.className,
      )}
    />
  ),
  code: (props) => (
    <code
      {...props}
      className={cn(
        "rounded-md bg-muted px-1.5 py-0.5 text-sm font-medium text-foreground",
        props.className,
      )}
    />
  ),
};

function slugify(value: unknown) {
  if (typeof value !== "string") return undefined;
  return value
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)+/g, "");
}

