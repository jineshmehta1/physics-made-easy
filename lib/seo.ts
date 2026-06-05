import type { Metadata } from "next";
import {
  SITE_CONFIG,
  PAGE_SEO,
  ORGANIZATION_SCHEMA,
  getBlogPostSchema,
  type PageSeoEntry,
} from "@/config/seo-config";

export function getPageSeo(path: string): PageSeoEntry | undefined {
  return PAGE_SEO[path];
}

function absoluteUrl(path: string): string {
  return path.startsWith("http") ? path : `${SITE_CONFIG.domain}${path}`;
}

function buildOgImage(entry?: PageSeoEntry): string {
  const image = entry?.ogImage ?? SITE_CONFIG.defaultOgImage;
  return absoluteUrl(image);
}

export function buildPageMetadata(path: string): Metadata {
  const entry = PAGE_SEO[path];
  const title = entry?.title ?? SITE_CONFIG.name;
  const description = entry?.description ?? SITE_CONFIG.tagline;
  const canonical = entry?.canonical ?? absoluteUrl(path === "/" ? "/" : path);
  const noIndex = entry?.noIndex ?? false;

  return {
    title,
    description,
    keywords: entry?.keywords,
    metadataBase: new URL(SITE_CONFIG.domain),
    alternates: { canonical },
    robots: noIndex
      ? { index: false, follow: false }
      : { index: true, follow: true },
    openGraph: {
      title,
      description,
      url: canonical,
      siteName: SITE_CONFIG.name,
      locale: SITE_CONFIG.locale,
      type: "website",
      images: [{ url: buildOgImage(entry), alt: title }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [buildOgImage(entry)],
      ...(SITE_CONFIG.twitterHandle
        ? { site: SITE_CONFIG.twitterHandle, creator: SITE_CONFIG.twitterHandle }
        : {}),
    },
    ...(SITE_CONFIG.googleVerification
      ? { verification: { google: SITE_CONFIG.googleVerification } }
      : {}),
    other: {
      "theme-color": SITE_CONFIG.themeColor,
      ...(SITE_CONFIG.bingVerification
        ? { "msvalidate.01": SITE_CONFIG.bingVerification }
        : {}),
    },
  };
}

export function buildBlogPostMetadata(post: {
  title: string;
  excerpt?: string | null;
  slug: string;
  image?: string | null;
  publishedAt?: string;
  author?: string;
}): Metadata {
  const title = `${post.title} | ${SITE_CONFIG.name}`;
  const description =
    post.excerpt || `Learn more about ${post.title} with Mr. Chew at Physics Made Easy.`;
  const canonical = `${SITE_CONFIG.domain}/blog/${post.slug}`;
  const ogImage = post.image
    ? post.image.startsWith("http")
      ? post.image
      : absoluteUrl(post.image)
    : buildOgImage();

  return {
    title,
    description,
    metadataBase: new URL(SITE_CONFIG.domain),
    alternates: { canonical },
    openGraph: {
      title,
      description,
      url: canonical,
      siteName: SITE_CONFIG.name,
      locale: SITE_CONFIG.locale,
      type: "article",
      images: [{ url: ogImage, alt: post.title }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [ogImage],
    },
  };
}

export function getOrganizationJsonLd(): Record<string, unknown> {
  return ORGANIZATION_SCHEMA;
}

export function getBlogPostJsonLd(post: {
  title: string;
  excerpt?: string | null;
  slug: string;
  publishedAt: string;
  author?: string;
  image?: string | null;
}): Record<string, unknown> {
  return getBlogPostSchema({
    title: post.title,
    description: post.excerpt || post.title,
    slug: post.slug,
    publishedAt: post.publishedAt,
    author: post.author ?? "Mr. Chew Kok Mun",
    image: post.image ?? undefined,
  });
}

export function jsonLdScript(data: Record<string, unknown>): string {
  return JSON.stringify(data);
}
