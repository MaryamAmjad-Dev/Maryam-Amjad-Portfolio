import type { ContactFormData } from "./schemas";
import { buildMailtoContactUrl } from "./mailto";

export type SubmitContactResult =
  | { success: true; via: "api" | "mailto" }
  | { success: false; error: string };

/** Submit contact form via API (Resend) with mailto fallback */
export async function submitContactForm(
  data: ContactFormData,
): Promise<SubmitContactResult> {
  const response = await fetch("/api/contact", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });

  const result = (await response.json()) as {
    success?: boolean;
    error?: string;
    fallback?: "mailto";
  };

  if (result.fallback === "mailto") {
    window.location.href = buildMailtoContactUrl(data);
    return { success: true, via: "mailto" };
  }

  if (!response.ok || !result.success) {
    return {
      success: false,
      error: result.error ?? "Something went wrong",
    };
  }

  return { success: true, via: "api" };
}
