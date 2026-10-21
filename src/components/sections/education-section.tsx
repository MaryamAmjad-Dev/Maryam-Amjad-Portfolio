"use client";

import { GraduationCap, TrendingUp } from "lucide-react";
import { motion } from "framer-motion";
import { staggerContainer, staggerItem } from "@/components/animations";
import { Section, TiltCard } from "@/components/ui";
import { portfolioData } from "@/data";
import { useLanguage } from "@/hooks";
import { formatDateRange } from "@/utils";

/** Section 2 — degree, institution, dates, CGPA, ranking and coursework. */
export function EducationSection() {
  const { education } = portfolioData;
  const { t } = useLanguage();

  return (
    <Section
      id="education"
      label={t("education.label")}
      title={t("education.title")}
      description={t("education.description")}
    >
      <motion.div
        className="mx-auto grid max-w-3xl gap-6"
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
      >
        {education.map((edu) => (
          <motion.div key={edu.id} variants={staggerItem} className="h-full">
            <TiltCard className="h-full" intensity={5}>
              <div className="flex gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-primary/20 bg-primary/10 text-primary">
                  <GraduationCap size={20} aria-hidden="true" />
                </div>
                <div className="min-w-0 flex-1 space-y-1">
                  <div className="flex flex-wrap items-start justify-between gap-2">
                    <h3 className="text-lg font-semibold text-heading">
                      {edu.institution}
                    </h3>
                    {edu.startDate && (
                      <time className="shrink-0 rounded-full border border-card-border bg-card px-3 py-1 text-xs text-muted">
                        {formatDateRange(edu.startDate, edu.endDate)}
                      </time>
                    )}
                  </div>
                  <p className="text-sm text-foreground">{edu.degree}</p>
                  {edu.cgpa && (
                    <p className="text-sm text-muted-subtle">
                      {t("education.cgpa")}: {edu.cgpa}
                    </p>
                  )}
                  {edu.achievement && (
                    <p className="flex items-start gap-2 text-sm text-primary">
                      <TrendingUp
                        size={15}
                        className="mt-0.5 shrink-0"
                        aria-hidden="true"
                      />
                      {edu.achievement}
                    </p>
                  )}
                  {edu.coursework && edu.coursework.length > 0 && (
                    <div className="pt-2">
                      <p className="text-[10px] font-semibold uppercase tracking-widest text-muted-subtle">
                        {t("education.coursework")}
                      </p>
                      <ul className="mt-2 flex flex-wrap gap-1.5">
                        {edu.coursework.map((course) => (
                          <li
                            key={course}
                            className="rounded-full border border-card-border bg-card px-2.5 py-0.5 text-xs text-muted"
                          >
                            {course}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              </div>
            </TiltCard>
          </motion.div>
        ))}
      </motion.div>
    </Section>
  );
}
