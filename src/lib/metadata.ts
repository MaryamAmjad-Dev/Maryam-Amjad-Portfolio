import type { Metadata } from "next";
import { SITE } from "@/constants";

type MetadataOverrides = Partial<
  Pick<Metadata, "title" | "description" | "keywords" | "openGraph" | "twitter">
>;

/** Build consistent page metadata from site defaults */
export function createMetadata(overrides: MetadataOverrides = {}): Metadata {
  const title = overrides.title ?? SITE.title;
  const description = overrides.description ?? SITE.description;

  return {
    title,
    description,
    keywords: overrides.keywords ?? [...SITE.keywords],
    authors: [{ name: SITE.author }],
    creator: SITE.author,
    metadataBase: new URL(SITE.url),
    openGraph: {
      type: "website",
      locale: SITE.locale,
      url: SITE.url,
      siteName: SITE.name,
      title: typeof title === "string" ? title : SITE.title,
      description: typeof description === "string" ? description : SITE.description,
      ...overrides.openGraph,
    },
    twitter: {
      card: "summary_large_image",
      title: typeof title === "string" ? title : SITE.title,
      description: typeof description === "string" ? description : SITE.description,
      ...overrides.twitter,
    },
    robots: {
      index: true,
      follow: true,
    },
  };
}
