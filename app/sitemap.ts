import type { MetadataRoute } from "next";
import { SITE_CONFIG, SITEMAP_STATIC_PAGES } from "@/config/seo-config";
import { getBlogPosts } from "@/app/actions/adminActions";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const staticEntries: MetadataRoute.Sitemap = SITEMAP_STATIC_PAGES.map(
    ({ path, changeFrequency, priority }) => ({
      url: path === "/" ? SITE_CONFIG.domain : `${SITE_CONFIG.domain}${path}`,
      lastModified: new Date(),
      changeFrequency,
      priority,
    }),
  );

  let blogEntries: MetadataRoute.Sitemap = [];
  try {
    const posts = await getBlogPosts();
    blogEntries = posts.map((post: { slug: string; updatedAt?: string; createdAt?: string }) => ({
      url: `${SITE_CONFIG.domain}/blog/${post.slug}`,
      lastModified: new Date(post.updatedAt ?? post.createdAt ?? Date.now()),
      changeFrequency: "monthly" as const,
      priority: 0.6,
    }));
  } catch {
    // DB may be unavailable at build time — static pages still ship
  }

  return [...staticEntries, ...blogEntries];
}
