import { Resend } from "resend";
import { portfolioData } from "@/data/portfolio";
import type { ContactFormData } from "./schemas";

export type SendContactResult =
  | { ok: true }
  | { ok: false; reason: "not_configured" }
  | { ok: false; reason: "send_failed"; error: string };

/** Send contact form submission to inbox via Resend */
export async function sendContactEmail(
  data: ContactFormData,
): Promise<SendContactResult> {
  const apiKey = process.env.RESEND_API_KEY?.trim();
  if (!apiKey) {
    return { ok: false, reason: "not_configured" };
  }

  const to =
    process.env.CONTACT_EMAIL_TO?.trim() ?? portfolioData.profile.email;
  const from =
    process.env.CONTACT_EMAIL_FROM?.trim() ??
    "Maryam Portfolio <onboarding@resend.dev>";

  const resend = new Resend(apiKey);
  const { error } = await resend.emails.send({
    from,
    to: [to],
    replyTo: data.email,
    subject: `Portfolio message from ${data.name}`,
    text: [
      `Name: ${data.name}`,
      `Email: ${data.email}`,
      "",
      data.message,
    ].join("\n"),
    html: `
      <h2>New portfolio contact message</h2>
      <p><strong>Name:</strong> ${escapeHtml(data.name)}</p>
      <p><strong>Email:</strong> <a href="mailto:${escapeHtml(data.email)}">${escapeHtml(data.email)}</a></p>
      <p><strong>Message:</strong></p>
      <p>${escapeHtml(data.message).replace(/\n/g, "<br />")}</p>
    `,
  });

  if (error) {
    return { ok: false, reason: "send_failed", error: error.message };
  }

  return { ok: true };
}

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}
