"use client";

import { Award, Trophy, Users } from "lucide-react";
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
            <TiltCard className="h-full" intensity={7}>
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
                  <p className="mt-3 text-sm leading-relaxed text-muted-subtle">
                    {hackathon.description}
                  </p>
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
