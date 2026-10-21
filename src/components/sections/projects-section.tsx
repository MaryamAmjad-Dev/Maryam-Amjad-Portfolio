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

function ProjectCard({
  project,
  labels,
}: {
  project: Project;
  labels: {
    featured: string;
    teamProject: string;
    myRole: string;
    problem: string;
    solution: string;
    github: string;
    liveDemo: string;
  };
}) {
  const githubUrl = getGithubUrl(project);

  return (
    <motion.div variants={staggerItem} className="h-full">
      <TiltCard className="h-full" intensity={10} interactive>
        <div className="flex h-full flex-col">
          <div className="mb-4 flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
            <div className="min-w-0 flex-1">
              <div className="mb-2 flex h-11 w-11 items-center justify-center rounded-xl border border-primary/20 bg-primary/10 text-primary">
                <Sparkles size={20} aria-hidden="true" />
              </div>
              <h3 className="text-xl font-semibold tracking-tight text-heading">
                {project.title}
              </h3>
            </div>
            <div className="flex flex-wrap items-start justify-start gap-2 sm:justify-end">
              {project.featured && <Badge variant="accent">{labels.featured}</Badge>}
              {project.teamProject && (
                <Badge variant="outline">{labels.teamProject}</Badge>
              )}
              {githubUrl && (
                <a
                  href={githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${project.title} on GitHub`}
                  className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-full border border-card-border bg-card text-muted transition-all duration-300 hover:scale-110 hover:border-primary/40 hover:bg-primary/10 hover:text-primary"
                >
                  <GitHubIcon size={16} />
                </a>
              )}
            </div>
          </div>

          <p className="text-sm leading-relaxed text-muted">{project.description}</p>

          {project.role && (
            <div className="mt-4 flex items-start gap-2.5 rounded-xl border border-primary/20 bg-primary/10 px-4 py-3">
              <UserRound
                size={15}
                className="mt-0.5 shrink-0 text-primary"
                aria-hidden="true"
              />
              <div>
                <p className="text-[10px] font-semibold uppercase tracking-widest text-primary/80">
                  {labels.myRole}
                </p>
                <p className="mt-1 text-sm leading-relaxed text-foreground">
                  {project.role}
                </p>
              </div>
            </div>
          )}

          {(project.problem || project.solution) && (
            <div className="mt-5 space-y-3 rounded-xl border border-card-border bg-card p-4">
              {project.problem && (
                <div>
                  <p className="text-[10px] font-semibold uppercase tracking-widest text-muted-subtle">
                    {labels.problem}
                  </p>
                  <p className="mt-1.5 text-sm leading-relaxed text-foreground">
                    {project.problem}
                  </p>
                </div>
              )}
              {project.problem && project.solution && (
                <div className="h-px bg-card-border" />
              )}
              {project.solution && (
                <div>
                  <p className="text-[10px] font-semibold uppercase tracking-widest text-muted-subtle">
                    {labels.solution}
                  </p>
                  <p className="mt-1.5 text-sm leading-relaxed text-foreground">
                    {project.solution}
                  </p>
                </div>
              )}
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
