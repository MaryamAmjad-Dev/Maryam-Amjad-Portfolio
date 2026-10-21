"use client";

import { Award, ExternalLink, Trophy, Users } from "lucide-react";
import { motion } from "framer-motion";
import { staggerContainer, staggerItem } from "@/components/animations";
import { Badge, Section, TiltCard } from "@/components/ui";
import { portfolioData } from "@/data";
import { useLanguage } from "@/hooks";
import type { Hackathon } from "@/types";

function HackathonIcon({ hackathon }: { hackathon: Hackathon }) {
  const Icon = hackathon.role ? Users : hackathon.placement ? Trophy : Award;
  return <Icon size={18} aria-hidden="true" />;
}

export function HackathonsSection() {
  const { t } = useLanguage();

  return (
    <Section
      id="hackathons"
      label={t("hackathons.label")}
      title={t("hackathons.title")}
      description={t("hackathons.description")}
    >
      <motion.div
        className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3"
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
      >
        {portfolioData.hackathons.map((hackathon) => (
          <motion.div key={hackathon.id} variants={staggerItem} className="h-full">
            {/* `interactive` keeps the placement/post link stationary. */}
            <TiltCard className="h-full" intensity={7} interactive>
              <div className="flex h-full flex-col">
                <div className="mb-4 flex items-center justify-between gap-3">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-primary/20 bg-primary/10 text-primary">
                    <HackathonIcon hackathon={hackathon} />
                  </div>
                  {hackathon.role && (
                    <Badge variant="accent" className="min-w-0 text-right">
                      {hackathon.role}
                    </Badge>
                  )}
                </div>

                <h3 className="text-lg font-semibold leading-snug text-heading">
                  {hackathon.title}
                </h3>
                <p className="mt-1.5 text-sm text-primary/90">{hackathon.event}</p>

                {hackathon.placement && (
                  <p className="mt-4 text-sm font-semibold">
                    <span className="gradient-text">{hackathon.placement}</span>
                  </p>
                )}

                {hackathon.description && (
                  <p className="mt-3 text-sm leading-relaxed text-muted">
                    {hackathon.description}
                  </p>
                )}

                {/* Previously unrendered — the CodeSprint LA post link was in
                    the data but had no control in the DOM. */}
                {hackathon.links && hackathon.links.length > 0 && (
                  <div className="mt-4 flex flex-wrap gap-2">
                    {hackathon.links.map((link) => (
                      <a
                        key={link.url}
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex cursor-pointer items-center gap-1.5 rounded-full border border-card-border bg-card px-3 py-1.5 text-xs font-medium text-muted transition-colors duration-200 hover:border-primary/40 hover:bg-primary/10 hover:text-primary focus-visible:border-primary/40"
                      >
                        <ExternalLink size={12} aria-hidden="true" />
                        {link.label}
                      </a>
                    ))}
                  </div>
                )}

                {hackathon.year && (
                  <p className="mt-auto pt-4 text-xs text-muted-subtle">{hackathon.year}</p>
                )}
              </div>
            </TiltCard>
          </motion.div>
        ))}
      </motion.div>
    </Section>
  );
}
