import { NextResponse } from "next/server";
import { CONTACT_RATE_LIMIT } from "@/constants";
import { contactFormSchema } from "@/lib/contact";
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

    const { name, email, message } = parsed.data;

    // Ready for email/webhook integration — validated submissions are accepted
    console.info("[contact] New message", {
      name,
      email,
      messageLength: message.length,
      at: new Date().toISOString(),
    });

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
