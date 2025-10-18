"use client";

import { cn } from "@/lib/utils";

type TechBadgeProps = {
  label: string;
  className?: string;
};

export function TechBadge({ label, className }: TechBadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full border border-border/70 bg-foreground/5 px-3 py-1 text-xs font-medium uppercase tracking-wide text-muted-foreground backdrop-blur-sm transition-colors hover:border-primary/50 hover:text-primary",
        className,
      )}
    >
      {label}
    </span>
  );
}
