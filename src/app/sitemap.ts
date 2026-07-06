import type { MetadataRoute } from "next";
import { SITE, SITE_ROUTES } from "@/constants";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: `${SITE.url}${SITE_ROUTES.home}`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
  ];
}
