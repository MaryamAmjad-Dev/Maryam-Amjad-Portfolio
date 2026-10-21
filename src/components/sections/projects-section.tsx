"use client";

import { ExternalLink, Sparkles, UserRound } from "lucide-react";
import { motion } from "framer-motion";
import { GitHubIcon } from "@/components/shared";
import { staggerContainer, staggerItem } from "@/components/animations";
import { Badge, Button, Section, TiltCard } from "@/components/ui";
import { portfolioData } from "@/data";
import { useLanguage } from "@/hooks";
import type { Project } from "@/types";

function getGithubUrl(project: Project): string | undefined {
  return project.githubUrl || project.repoUrl || undefined;
}

/**
 * Every card renders the same blocks in the same order — icon and name,
 * badges, one-paragraph overview, key contribution, technology tags, then the
 * action row. Descriptions are held to a similar length in the data layer, and
 * the action row is pushed down with `mt-auto` rather than a fixed card height,
 * so the buttons line up across a row without clipping long text on mobile.
 */
function ProjectCard({
  project,
  labels,
}: {
  project: Project;
  labels: {
    featured: string;
    teamProject: string;
    myRole: string;
    github: string;
    liveDemo: string;
  };
}) {
  const { dictionary } = useLanguage();
  const item = dictionary.projects.items[project.id];
  const description = item?.description ?? project.description;
  const role = item?.role ?? project.role;
  const githubUrl = getGithubUrl(project);

  return (
    <motion.div variants={staggerItem} className="h-full">
      <TiltCard className="h-full" intensity={6} interactive>
        <div className="flex h-full flex-col">
          <div className="mb-4 flex items-start gap-3">
            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-primary/20 bg-primary/10 text-primary">
              <Sparkles size={20} aria-hidden="true" />
            </div>
            <div className="min-w-0 flex-1">
              <h3 className="text-xl font-semibold tracking-tight text-heading">
                {project.title}
              </h3>
            </div>
            <div className="flex shrink-0 flex-wrap items-start justify-end gap-2">
              {project.featured && <Badge variant="accent">{labels.featured}</Badge>}
              {project.teamProject && (
                <Badge variant="outline">{labels.teamProject}</Badge>
              )}
            </div>
          </div>

          <p className="text-sm leading-relaxed text-muted">{description}</p>

          {role && (
            <div className="mt-4 flex items-start gap-2.5">
              <UserRound
                size={15}
                className="mt-0.5 shrink-0 text-primary"
                aria-hidden="true"
              />
              <p className="text-sm leading-relaxed text-foreground">
                <span className="sr-only">{labels.myRole}: </span>
                {role}
              </p>
            </div>
          )}

          <div className="mt-5 flex flex-wrap gap-2">
            {project.technologies.map((tech) => (
              <Badge key={tech} variant="outline">
                {tech}
              </Badge>
            ))}
          </div>

          <div className="relative z-10 mt-auto flex flex-wrap gap-2 pt-6">
            {githubUrl && (
              <Button
                href={githubUrl}
                variant="outline"
                size="sm"
                external
                className="cursor-pointer transition-transform hover:scale-105"
              >
                <GitHubIcon size={14} />
                {labels.github}
              </Button>
            )}
            {project.liveUrl && (
              <Button
                href={project.liveUrl}
                variant="secondary"
                size="sm"
                external
                className="cursor-pointer transition-transform hover:scale-105"
              >
                <ExternalLink size={14} aria-hidden="true" />
                {labels.liveDemo}
              </Button>
            )}
            {project.links?.map((link) => (
              <Button
                key={link.url}
                href={link.url}
                variant="ghost"
                size="sm"
                external
                className="cursor-pointer transition-transform hover:scale-105"
              >
                <ExternalLink size={14} aria-hidden="true" />
                {link.label}
              </Button>
            ))}
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
              teamProject: projectLabels.teamProject,
              myRole: projectLabels.myRole,
              github: projectLabels.github,
              liveDemo: projectLabels.liveDemo,
            }}
          />
        ))}
      </motion.div>
    </Section>
  );
}
