"use client";

import { ExternalLink, Sparkles } from "lucide-react";
import { motion } from "framer-motion";
import { GitHubIcon } from "@/components/shared";
import { staggerContainer, staggerItem } from "@/components/animations";
import { Badge, Button, Section, TiltCard } from "@/components/ui";
import { portfolioData } from "@/data";
import { useLanguage } from "@/hooks";
import type { Project } from "@/types";

function ProjectCard({
  project,
  labels,
}: {
  project: Project;
  labels: {
    featured: string;
    problem: string;
    solution: string;
    github: string;
    liveDemo: string;
  };
}) {
  return (
    <motion.div variants={staggerItem} className="h-full">
      <TiltCard className="h-full" intensity={10}>
        <div className="flex h-full flex-col">
          <div className="mb-4 flex items-start justify-between gap-3">
            <div>
              <div className="mb-2 flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-primary/20 to-accent/10 text-primary">
                <Sparkles size={18} aria-hidden="true" />
              </div>
              <h3 className="text-xl font-semibold tracking-tight">{project.title}</h3>
            </div>
            {project.featured && <Badge variant="accent">{labels.featured}</Badge>}
          </div>

          <p className="text-sm leading-relaxed text-muted">{project.description}</p>

          <div className="mt-5 space-y-3 rounded-xl border border-white/5 bg-white/[0.02] p-4">
            <div>
              <p className="text-[10px] font-semibold uppercase tracking-widest text-muted-subtle">
                {labels.problem}
              </p>
              <p className="mt-1.5 text-sm leading-relaxed text-foreground">{project.problem}</p>
            </div>
            <div className="h-px bg-white/5" />
            <div>
              <p className="text-[10px] font-semibold uppercase tracking-widest text-muted-subtle">
                {labels.solution}
              </p>
              <p className="mt-1.5 text-sm leading-relaxed text-foreground">{project.solution}</p>
            </div>
          </div>

          <div className="mt-5 flex flex-wrap gap-2">
            {project.technologies.map((tech) => (
              <Badge key={tech} variant="outline">
                {tech}
              </Badge>
            ))}
          </div>

          <div className="mt-auto flex flex-wrap gap-2 pt-6">
            {project.repoUrl && (
              <Button href={project.repoUrl} variant="outline" size="sm" external>
                <GitHubIcon size={14} />
                {labels.github}
              </Button>
            )}
            {project.liveUrl && (
              <Button href={project.liveUrl} variant="secondary" size="sm" external>
                <ExternalLink size={14} aria-hidden="true" />
                {labels.liveDemo}
              </Button>
            )}
          </div>
        </div>
      </TiltCard>
    </motion.div>
  );
}

export function ProjectsSection() {
  const { t, dictionary } = useLanguage();
  const projectLabels = dictionary.projects;

  return (
    <Section
      id="projects"
      label={t("projects.label")}
      title={t("projects.title")}
      description={t("projects.description")}
    >
      <motion.div
        className="grid gap-6 md:grid-cols-2"
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
      >
        {portfolioData.projects.map((project) => (
          <ProjectCard
            key={project.id}
            project={project}
            labels={{
              featured: projectLabels.featured,
              problem: projectLabels.problem,
              solution: projectLabels.solution,
              github: projectLabels.github,
              liveDemo: projectLabels.liveDemo,
            }}
          />
        ))}
      </motion.div>
    </Section>
  );
}
