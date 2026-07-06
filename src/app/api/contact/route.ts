import { NextResponse } from "next/server";
import { CONTACT_RATE_LIMIT } from "@/constants";
import { contactFormSchema, sendContactEmail } from "@/lib/contact";
import {
  checkRateLimit,
  getClientIdentifier,
  pruneRateLimitStore,
} from "@/lib/rate-limit";

export const runtime = "nodejs";

export async function POST(request: Request) {
  try {
    pruneRateLimitStore();

    const clientId = getClientIdentifier(request);
    const rateCheck = checkRateLimit(
      `contact:${clientId}`,
      CONTACT_RATE_LIMIT.maxRequestsPerMinute,
    );

    if (!rateCheck.allowed) {
      return NextResponse.json(
        {
          success: false,
          error: "Too many messages sent. Please try again shortly.",
        },
        {
          status: 429,
          headers: rateCheck.retryAfterMs
            ? { "Retry-After": String(Math.ceil(rateCheck.retryAfterMs / 1000)) }
            : undefined,
        },
      );
    }

    let body: unknown;
    try {
      body = await request.json();
    } catch {
      return NextResponse.json(
        { success: false, error: "Invalid JSON body" },
        { status: 400 },
      );
    }

    const parsed = contactFormSchema.safeParse(body);
    if (!parsed.success) {
      return NextResponse.json(
        {
          success: false,
          error: parsed.error.issues[0]?.message ?? "Invalid form data",
        },
        { status: 400 },
      );
    }

    const delivery = await sendContactEmail(parsed.data);

    if (!delivery.ok && delivery.reason === "not_configured") {
      return NextResponse.json({
        success: false,
        fallback: "mailto",
        error: "Email service is not configured on the server.",
      });
    }

    if (!delivery.ok) {
      return NextResponse.json(
        {
          success: false,
          error: delivery.error ?? "Failed to send message",
        },
        { status: 502 },
      );
    }

    return NextResponse.json({
      success: true,
      message: "Message sent successfully",
    });
  } catch {
    return NextResponse.json(
      { success: false, error: "Something went wrong" },
      { status: 500 },
    );
  }
}
