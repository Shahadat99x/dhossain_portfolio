"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ExternalLink, Github, Smartphone } from "lucide-react";
import { Project } from "@/data/projects";
import { Button } from "@/components/ui/button";
import { TechBadge } from "@/components/tech-badge";
import { cn } from "@/lib/utils";

type ProjectCardProps = {
  project: Project;
  layoutId?: string;
};

export function ProjectCard({ project, layoutId }: ProjectCardProps) {
  return (
    <motion.article
      layoutId={layoutId ?? project.slug}
      className={cn(
        "group relative flex h-full flex-col rounded-3xl border border-border/70 bg-gradient-card p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-soft",
        project.featured && "border-primary/30",
      )}
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: 0.35, ease: "easeOut" }}
    >
      <div className="flex items-center justify-between text-xs text-muted-foreground">
        <span className="font-medium uppercase tracking-[0.2em]">
          {project.year}
        </span>
        {project.featured && (
          <span className="rounded-full bg-primary/15 px-3 py-1 text-[11px] font-semibold text-primary">
            Featured
          </span>
        )}
      </div>
      <div className="mt-4 space-y-3">
        <h3 className="text-2xl font-semibold text-foreground">
          {project.title}
        </h3>
        <p className="text-sm text-muted-foreground">
          {project.description}
        </p>
      </div>
      <div className="mt-4 flex flex-wrap gap-2">
        {project.tech.map((item) => (
          <TechBadge key={item} label={item} />
        ))}
      </div>
      <div className="mt-6 grid grid-cols-2 gap-3 pt-4">
        {project.links?.live && (
          <Button asChild variant="primary" size="sm" className="rounded-2xl">
            <Link href={project.links.live} target="_blank" rel="noreferrer">
              Live <ExternalLink className="h-4 w-4" />
            </Link>
          </Button>
        )}
        {project.links?.code && (
          <Button
            asChild
            variant="outline"
            size="sm"
            className="rounded-2xl text-muted-foreground hover:text-foreground"
          >
            <Link href={project.links.code} target="_blank" rel="noreferrer">
              Code <Github className="h-4 w-4" />
            </Link>
          </Button>
        )}
        {project.links?.playStore && (
          <Button asChild variant="outline" size="sm" className="rounded-2xl">
            <Link href={project.links.playStore} target="_blank" rel="noreferrer">
              Android <Smartphone className="h-4 w-4" />
            </Link>
          </Button>
        )}
        {project.links?.mobileCode && (
          <Button
            asChild
            variant="outline"
            size="sm"
            className="rounded-2xl text-muted-foreground hover:text-foreground"
          >
            <Link
              href={project.links.mobileCode}
              target="_blank"
              rel="noreferrer"
            >
              Mobile <Github className="h-4 w-4" />
            </Link>
          </Button>
        )}
        {/* Fallback for legacy data/types if needed, though we updated all data */}
        {!project.links && project.live && (
          <Button asChild variant="primary" size="sm" className="rounded-2xl">
            <Link href={project.live} target="_blank" rel="noreferrer">
              Live <ExternalLink className="h-4 w-4" />
            </Link>
          </Button>
        )}
        {!project.links && project.github && (
          <Button
            asChild
            variant="outline"
            size="sm"
            className="rounded-2xl text-muted-foreground hover:text-foreground"
          >
            <Link href={project.github} target="_blank" rel="noreferrer">
              Code <Github className="h-4 w-4" />
            </Link>
          </Button>
        )}
      </div>
    </motion.article>
  );
}
