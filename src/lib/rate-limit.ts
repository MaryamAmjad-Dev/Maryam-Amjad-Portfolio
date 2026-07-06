const WINDOW_MS = 60_000;

/** In-memory rate limit store — swap for Redis/Upstash in production */
const requestLog = new Map<string, number[]>();

export function getClientIdentifier(request: Request): string {
  const forwarded = request.headers.get("x-forwarded-for");
  if (forwarded) return forwarded.split(",")[0]?.trim() ?? "anonymous";
  return request.headers.get("x-real-ip") ?? "anonymous";
}

export function checkRateLimit(
  identifier: string,
  maxRequests: number,
): {
  allowed: boolean;
  retryAfterMs?: number;
} {
  const now = Date.now();
  const timestamps = (requestLog.get(identifier) ?? []).filter(
    (t) => now - t < WINDOW_MS,
  );

  if (timestamps.length >= maxRequests) {
    const oldest = timestamps[0] ?? now;
    return { allowed: false, retryAfterMs: WINDOW_MS - (now - oldest) };
  }

  timestamps.push(now);
  requestLog.set(identifier, timestamps);
  return { allowed: true };
}

/** Clear stale entries periodically to prevent memory growth */
export function pruneRateLimitStore() {
  const now = Date.now();
  for (const [key, timestamps] of requestLog.entries()) {
    const fresh = timestamps.filter((t) => now - t < WINDOW_MS);
    if (fresh.length === 0) requestLog.delete(key);
    else requestLog.set(key, fresh);
  }
}
