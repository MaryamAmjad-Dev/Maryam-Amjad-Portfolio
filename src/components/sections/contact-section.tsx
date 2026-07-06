"use client";

import { useState, type FormEvent } from "react";
import { Mail, MapPin, Phone, Send, Sparkles } from "lucide-react";
import { toast } from "sonner";
import { GitHubIcon, LinkedInIcon } from "@/components/shared";
import { FadeIn } from "@/components/animations";
import { Button, Input, Section, Textarea, TiltCard } from "@/components/ui";
import { SOCIAL_LINKS } from "@/constants";
import { portfolioData } from "@/data";
import { useLanguage } from "@/hooks";
import {
  contactFormSchema,
  submitContactForm,
  type ContactFormData,
} from "@/lib/contact";


export function ContactSection() {
  const { profile } = portfolioData;
  const { t, dictionary } = useLanguage();
  const formCopy = dictionary.contact.form;

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [errors, setErrors] = useState<Partial<Record<keyof ContactFormData, string>>>(
    {},
  );
  const [isSubmitting, setIsSubmitting] = useState(false);

  const clearErrors = (field: keyof ContactFormData) => {
    setErrors((prev) => {
      if (!prev[field]) return prev;
      const next = { ...prev };
      delete next[field];
      return next;
    });
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const payload: ContactFormData = {
      name: name.trim(),
      email: email.trim(),
      message: message.trim(),
    };

    const parsed = contactFormSchema.safeParse(payload);
    if (!parsed.success) {
      const fieldErrors: Partial<Record<keyof ContactFormData, string>> = {};
      for (const issue of parsed.error.issues) {
        const field = issue.path[0];
        if (typeof field === "string" && !fieldErrors[field as keyof ContactFormData]) {
          fieldErrors[field as keyof ContactFormData] = issue.message;
        }
      }
      setErrors(fieldErrors);
      return;
    }

    setErrors({});
    setIsSubmitting(true);

    try {
      const result = await submitContactForm(parsed.data);

      if (!result.success) {
        toast.error(result.error ?? t("contact.toast.error"));
        return;
      }

      toast.success(t("contact.toast.success"));
      setName("");
      setEmail("");
      setMessage("");
    } catch {
      toast.error(t("contact.toast.error"));
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Section
      id="contact"
      label={t("contact.label")}
      title={t("contact.title")}
      description={t("contact.description")}
      className="relative pb-20 sm:pb-32"
    >
      <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
        <div className="absolute bottom-0 left-1/2 h-64 w-96 -translate-x-1/2 rounded-full bg-primary/8 blur-[100px]" />
      </div>

      <div className="relative grid gap-8 lg:grid-cols-2">
        <FadeIn>
          <TiltCard intensity={6} interactive>
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
                  <span className="min-w-0 break-all text-sm text-foreground group-hover:text-heading sm:break-normal">
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
          <TiltCard intensity={6} interactive>
            <form onSubmit={handleSubmit} className="relative z-10 space-y-5" noValidate>
              <Input
                id="contact-name"
                name="name"
                label={formCopy.name}
                placeholder={formCopy.namePlaceholder}
                autoComplete="name"
                value={name}
                onChange={(e) => {
                  setName(e.target.value);
                  clearErrors("name");
                }}
                disabled={isSubmitting}
                error={errors.name}
              />
              <Input
                id="contact-email"
                name="email"
                label={formCopy.email}
                type="email"
                placeholder={formCopy.emailPlaceholder}
                autoComplete="email"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                  clearErrors("email");
                }}
                disabled={isSubmitting}
                error={errors.email}
              />
              <Textarea
                id="contact-message"
                name="message"
                label={formCopy.message}
                placeholder={formCopy.messagePlaceholder}
                rows={5}
                value={message}
                onChange={(e) => {
                  setMessage(e.target.value);
                  clearErrors("message");
                }}
                disabled={isSubmitting}
                error={errors.message}
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
