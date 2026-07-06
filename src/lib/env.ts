/** Typed environment variables */
export const env = {
  nodeEnv: process.env.NODE_ENV ?? "development",
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000",
} as const;

export function isProduction() {
  return env.nodeEnv === "production";
}
