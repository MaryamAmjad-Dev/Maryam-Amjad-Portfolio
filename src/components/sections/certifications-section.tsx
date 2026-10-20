"use client";

import { BadgeCheck } from "lucide-react";
import { motion } from "framer-motion";
import { staggerContainer, staggerItem } from "@/components/animations";
import { Section, TiltCard } from "@/components/ui";
import { portfolioData } from "@/data";
import { useLanguage } from "@/hooks";

export function CertificationsSection() {
  const { certifications } = portfolioData;
  const { t } = useLanguage();

  return (
    <Section
      id="certifications"
      label={t("certifications.label")}
      title={t("certifications.title")}
      description={t("certifications.description")}
    >
      <motion.div
        className="mx-auto grid max-w-3xl gap-6"
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
      >
        {certifications.map((cert) => (
          <motion.div key={cert.id} variants={staggerItem} className="h-full">
            <TiltCard className="h-full" intensity={7}>
              <div className="flex h-full flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                <div className="flex min-w-0 gap-4">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-primary/20 bg-primary/10 text-primary">
                    <BadgeCheck size={20} aria-hidden="true" />
                  </div>
                  <div className="min-w-0">
                    <h3 className="text-lg font-semibold leading-snug text-heading">
                      {cert.title}
                    </h3>
                    <p className="mt-1 text-sm text-primary/90">
                      {cert.organization}
                    </p>
                    {cert.note && (
                      <p className="mt-2 text-sm leading-relaxed text-muted">
                        {cert.note}
                      </p>
                    )}
                  </div>
                </div>

                {cert.date && (
                  <time className="shrink-0 self-start rounded-full border border-card-border bg-card px-3 py-1 text-xs text-muted">
                    {cert.date}
                  </time>
                )}
              </div>
            </TiltCard>
          </motion.div>
        ))}
      </motion.div>
    </Section>
  );
}
