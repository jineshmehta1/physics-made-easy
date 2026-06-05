import type { MetadataRoute } from "next";
import { SITE_CONFIG, CRAWL_RULES } from "@/config/seo-config";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: CRAWL_RULES.allow,
      disallow: CRAWL_RULES.disallow,
    },
    sitemap: `${SITE_CONFIG.domain}/sitemap.xml`,
  };
}
