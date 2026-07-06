import { portfolioData } from "@/data/portfolio";
import type { ContactFormData } from "@/lib/contact";

/** Open the visitor's email client with a pre-filled message */
export function buildMailtoContactUrl(data: ContactFormData): string {
  const { email } = portfolioData.profile;
  const subject = `Portfolio inquiry from ${data.name}`;
  const body = [
    `Name: ${data.name}`,
    `Email: ${data.email}`,
    "",
    data.message,
  ].join("\n");

  const params = new URLSearchParams({
    subject,
    body,
  });

  return `mailto:${email}?${params.toString()}`;
}
