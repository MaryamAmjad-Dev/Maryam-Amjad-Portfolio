"use client";

import { ExternalLink, HeartHandshake } from "lucide-react";
import { motion } from "framer-motion";
import { staggerContainer, staggerItem } from "@/components/animations";
import { Section, TiltCard } from "@/components/ui";
import { portfolioData } from "@/data";
import { useLanguage } from "@/hooks";

export function VolunteerSection() {
  const { volunteer } = portfolioData;
  const { t } = useLanguage();

  return (
    <Section
      id="volunteer"
      label={t("volunteer.label")}
      title={t("volunteer.title")}
      description={t("volunteer.description")}
    >
      <motion.div
        className="mx-auto grid max-w-3xl gap-6"
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
      >
        {volunteer.map((item) => (
          <motion.div key={item.id} variants={staggerItem} className="h-full">
            {/* `interactive` disables the 3D tilt: a tilting card shifts its
                link targets as the pointer approaches, so the pill moves away
                and the click misses. Links must stay put. */}
            <TiltCard className="h-full" intensity={7} interactive>
              <div className="flex h-full flex-col">
                <div className="mb-4 flex items-start gap-4">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-primary/20 bg-primary/10 text-primary">
                    <HeartHandshake size={20} aria-hidden="true" />
                  </div>
                  <div className="min-w-0">
                    <h3 className="text-lg font-semibold leading-snug text-heading">
                      {item.title}
                    </h3>
                    {item.organization && (
                      <p className="mt-1 text-sm text-primary/90">
                        {item.organization}
                      </p>
                    )}
                  </div>
                </div>

                <p className="text-sm leading-relaxed text-muted">
                  {item.description}
                </p>

                {item.links && item.links.length > 0 && (
                  <div className="mt-4 flex flex-wrap gap-2">
                    {item.links.map((link) => (
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

                {item.date && (
                  <p className="mt-auto pt-4 text-xs text-muted-subtle">
                    {item.date}
                  </p>
                )}
              </div>
            </TiltCard>
          </motion.div>
        ))}
      </motion.div>
    </Section>
  );
}
