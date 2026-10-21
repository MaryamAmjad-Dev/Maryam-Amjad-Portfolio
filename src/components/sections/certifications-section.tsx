"use client";

import { BadgeCheck, ExternalLink } from "lucide-react";
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
            {/* `interactive` disables the 3D tilt so the certificate/post
                links inside stay stationary and reliably clickable. */}
            <TiltCard className="h-full" intensity={7} interactive>
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
                    {cert.links && cert.links.length > 0 && (
                      <div className="mt-3 flex flex-wrap gap-2">
                        {cert.links.map((link) => (
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
