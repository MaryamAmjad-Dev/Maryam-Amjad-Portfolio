"use client";

import { FadeIn } from "@/components/animations";
import { Section } from "@/components/ui";
import { SkillsGrid } from "./skills-grid";
import { useLanguage } from "@/hooks";

/**
 * About — the introduction that sits between the hero and the seven main
 * portfolio sections.
 *
 * Layout note: this section previously paired a short left-hand `h-full` card
 * with a much taller right-hand column of education and achievement cards.
 * Because the left card stretched to match the row height while its content
 * stayed top-aligned, it rendered as an oversized empty panel. Education and
 * Achievements now live in their own sections, and the remaining content is
 * stacked in a single readable column, so there is no unequal pair of columns
 * to stretch in the first place.
 */
export function AboutSection() {
  const { t, dictionary } = useLanguage();

  return (
    <Section
      id="about"
      label={t("about.label")}
      title={t("about.title")}
      description={t("about.description")}
    >
      <div className="space-y-10">
        <FadeIn>
          <div className="max-w-3xl space-y-5">
            {dictionary.about.summary.split("\n\n").map((paragraph, index) => (
              <p
                key={index}
                className={
                  index === 0
                    ? "text-lg leading-relaxed text-heading"
                    : "text-base leading-relaxed text-muted"
                }
              >
                {paragraph}
              </p>
            ))}
          </div>

          <div className="mt-6 flex max-w-3xl flex-wrap gap-2">
            {dictionary.hero.roles.map((role) => (
              <span
                key={role}
                className="rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-xs font-medium text-primary"
              >
                {role}
              </span>
            ))}
          </div>
        </FadeIn>

        <FadeIn delay={0.15}>
          <p className="mb-5 flex items-center gap-2 text-sm font-medium uppercase tracking-widest text-primary">
            <span className="section-label-line h-px w-6" />
            {t("skills.label")}
          </p>
          <SkillsGrid />
        </FadeIn>
      </div>
    </Section>
  );
}
