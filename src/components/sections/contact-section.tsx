"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { Mail, MapPin, Phone, Send, Sparkles } from "lucide-react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { GitHubIcon, LinkedInIcon } from "@/components/shared";
import { FadeIn } from "@/components/animations";
import { Button, Input, Section, Textarea, TiltCard } from "@/components/ui";
import { SOCIAL_LINKS } from "@/constants";
import { portfolioData } from "@/data";
import { useLanguage } from "@/hooks";
import { contactFormSchema, type ContactFormData } from "@/lib/contact";

export function ContactSection() {
  const { profile } = portfolioData;
  const { t, dictionary } = useLanguage();
  const formCopy = dictionary.contact.form;

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  const onSubmit = async (data: ContactFormData) => {
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      const result = (await response.json()) as {
        success?: boolean;
        error?: string;
      };

      if (!response.ok || !result.success) {
        toast.error(result.error ?? t("contact.toast.error"));
        return;
      }

      toast.success(t("contact.toast.success"));
      reset();
    } catch {
      toast.error(t("contact.toast.error"));
    }
  };

  return (
    <Section
      id="contact"
      label={t("contact.label")}
      title={t("contact.title")}
      description={t("contact.description")}
      className="relative pb-32"
    >
      <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
        <div className="absolute bottom-0 left-1/2 h-64 w-96 -translate-x-1/2 rounded-full bg-primary/8 blur-[100px]" />
      </div>

      <div className="relative grid gap-8 lg:grid-cols-2">
        <FadeIn>
          <TiltCard intensity={6}>
            <div className="mb-2 flex items-center gap-2 text-primary">
              <Sparkles size={16} aria-hidden="true" />
              <span className="text-xs font-medium uppercase tracking-widest">
                {t("contact.aiPoweredContact")}
              </span>
            </div>
            <h3 className="text-xl font-semibold text-heading">{t("contact.getInTouch")}</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted">{t("contact.intro")}</p>

            <ul className="mt-8 space-y-3">
              <li>
                <a
                  href={SOCIAL_LINKS.email}
                  className="group flex cursor-pointer items-center gap-4 rounded-xl border border-transparent px-4 py-3 transition-all hover:scale-[1.01] hover:border-primary/20 hover:bg-primary/5"
                >
                  <span className="flex h-10 w-10 items-center justify-center rounded-lg border border-card-border bg-card text-primary transition-colors group-hover:border-primary/30">
                    <Mail size={18} aria-hidden="true" />
                  </span>
                  <span className="text-sm text-foreground group-hover:text-heading">
                    {profile.email}
                  </span>
                </a>
              </li>
              <li>
                <a
                  href={SOCIAL_LINKS.phone}
                  className="group flex cursor-pointer items-center gap-4 rounded-xl border border-transparent px-4 py-3 transition-all hover:scale-[1.01] hover:border-primary/20 hover:bg-primary/5"
                >
                  <span className="flex h-10 w-10 items-center justify-center rounded-lg border border-card-border bg-card text-primary transition-colors group-hover:border-primary/30">
                    <Phone size={18} aria-hidden="true" />
                  </span>
                  <span className="text-sm text-foreground group-hover:text-heading">
                    {profile.phone}
                  </span>
                </a>
              </li>
              <li>
                <a
                  href={SOCIAL_LINKS.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex cursor-pointer items-center gap-4 rounded-xl border border-transparent px-4 py-3 transition-all hover:scale-[1.01] hover:border-primary/20 hover:bg-primary/5"
                >
                  <span className="flex h-10 w-10 items-center justify-center rounded-lg border border-card-border bg-card text-primary transition-colors group-hover:border-primary/30">
                    <LinkedInIcon size={18} />
                  </span>
                  <span className="text-sm text-foreground group-hover:text-heading">
                    {t("contact.linkedinProfile")}
                  </span>
                </a>
              </li>
              <li>
                <a
                  href={SOCIAL_LINKS.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex cursor-pointer items-center gap-4 rounded-xl border border-transparent px-4 py-3 transition-all hover:scale-[1.01] hover:border-primary/20 hover:bg-primary/5"
                >
                  <span className="flex h-10 w-10 items-center justify-center rounded-lg border border-card-border bg-card text-primary transition-colors group-hover:border-primary/30">
                    <GitHubIcon size={18} />
                  </span>
                  <span className="text-sm text-foreground group-hover:text-heading">
                    {t("contact.githubProfile")}
                  </span>
                </a>
              </li>
              <li className="flex items-center gap-4 px-4 py-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-lg border border-card-border bg-card text-primary">
                  <MapPin size={18} aria-hidden="true" />
                </span>
                <span className="text-sm text-foreground">{profile.location}</span>
              </li>
            </ul>
          </TiltCard>
        </FadeIn>

        <FadeIn delay={0.15}>
          <TiltCard intensity={6}>
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="space-y-5"
              noValidate
            >
              <Input
                id="contact-name"
                label={formCopy.name}
                placeholder={formCopy.namePlaceholder}
                autoComplete="name"
                disabled={isSubmitting}
                error={errors.name?.message}
                {...register("name")}
              />
              <Input
                id="contact-email"
                label={formCopy.email}
                type="email"
                placeholder={formCopy.emailPlaceholder}
                autoComplete="email"
                disabled={isSubmitting}
                error={errors.email?.message}
                {...register("email")}
              />
              <Textarea
                id="contact-message"
                label={formCopy.message}
                placeholder={formCopy.messagePlaceholder}
                rows={5}
                disabled={isSubmitting}
                error={errors.message?.message}
                {...register("message")}
              />
              <Button
                type="submit"
                size="lg"
                className="w-full"
                loading={isSubmitting}
                disabled={isSubmitting}
              >
                <Send size={16} aria-hidden="true" />
                {isSubmitting ? formCopy.sending : formCopy.send}
              </Button>
            </form>
          </TiltCard>
        </FadeIn>
      </div>
    </Section>
  );
}
