"use client";

import { Briefcase } from "lucide-react";
import { motion } from "framer-motion";
import { FadeIn } from "@/components/animations";
import { Badge, Section, TiltCard } from "@/components/ui";
import { portfolioData } from "@/data";
import { useLanguage } from "@/hooks";
import { formatDateRange } from "@/utils";

export function ExperienceSection() {
  const { experience } = portfolioData;
  const { t } = useLanguage();

  return (
    <Section
      id="experience"
      label={t("experience.label")}
      title={t("experience.title")}
      description={t("experience.description")}
      className="relative"
    >      <div className="relative mx-auto max-w-3xl">
        <div
          className="absolute left-[11px] top-2 hidden h-[calc(100%-1rem)] w-px md:block"
          aria-hidden="true"
        >
          <div className="h-full w-full bg-linear-to-b from-primary via-accent/50 to-transparent" />
        </div>

        <div className="space-y-6">
          {experience.map((exp, i) => (
            <FadeIn key={exp.id} delay={i * 0.12}>
              <div className="relative md:pl-12">
                <motion.div
                  className="absolute left-0 top-8 hidden h-[22px] w-[22px] items-center justify-center rounded-full border-2 border-primary bg-background md:flex"
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, type: "spring" }}
                  aria-hidden="true"
                >
                  <span className="h-2 w-2 rounded-full bg-primary" />
                </motion.div>

                <TiltCard intensity={6}>
                  <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                    <div className="flex min-w-0 gap-4">
                      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-primary/20 bg-primary/10 text-primary">
                        <Briefcase size={20} aria-hidden="true" />
                      </div>
                      <div className="min-w-0">
                        <h3 className="text-heading text-lg font-semibold">{exp.role}</h3>
                        <p className="text-primary">{exp.company}</p>
                        {exp.location && (
                          <p className="mt-1 text-sm text-muted-subtle">{exp.location}</p>
                        )}
                      </div>
                    </div>
                    <time className="shrink-0 rounded-full border border-card-border bg-card px-3 py-1 text-xs text-muted">
                      {formatDateRange(exp.startDate, exp.endDate, exp.current)}
                    </time>
                  </div>

                  <p className="mt-4 text-sm leading-relaxed text-muted">{exp.description}</p>

                  {exp.highlights.length > 0 && (
                    <ul className="mt-4 space-y-2.5">
                      {exp.highlights.map((point, hi) => (
                        <motion.li
                          key={point}
                          className="flex min-w-0 items-start gap-3 text-sm text-foreground"
                          initial={{ opacity: 0, x: -12 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.4, delay: hi * 0.05 }}
                        >
                          <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-linear-to-r from-primary to-accent" />
                          {point}
                        </motion.li>
                      ))}
                    </ul>
                  )}

                  <div className="mt-5 flex flex-wrap gap-2">
                    {exp.technologies.map((tech) => (
                      <Badge key={tech} variant="accent">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </TiltCard>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </Section>
  );
}
