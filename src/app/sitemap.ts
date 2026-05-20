import type { MetadataRoute } from "next";
import { BLOG_POSTS } from "@/lib/blogData";

const BASE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.wikolabs.com";

const locales = ["fr", "en"] as const;

const serviceslugs = [
  "search-recommendation",
  "production-ai",
  "decision-intelligence",
  "commercial-automation",
  "data-vision",
  "data-annotation",
  "data-engineering",
  "cloud-infrastructure",
  "seo-refonte",
  "fullstack",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  // Home pages
  const homes: MetadataRoute.Sitemap = locales.map((locale) => ({
    url: `${BASE_URL}/${locale}`,
    lastModified: now,
    changeFrequency: "weekly",
    priority: 1.0,
  }));

  // Blog listing pages
  const blogIndexes: MetadataRoute.Sitemap = locales.map((locale) => ({
    url: `${BASE_URL}/${locale}/blog`,
    lastModified: now,
    changeFrequency: "weekly",
    priority: 0.8,
  }));

  // Individual blog posts (locale-agnostic slugs — same content for now)
  const blogPosts: MetadataRoute.Sitemap = BLOG_POSTS.flatMap((post) =>
    locales.map((locale) => ({
      url: `${BASE_URL}/${locale}/blog/${post.slug}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.7,
    }))
  );

  // Service pages
  const services: MetadataRoute.Sitemap = serviceslugs.flatMap((slug) =>
    locales.map((locale) => ({
      url: `${BASE_URL}/${locale}/services/${slug}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.9,
    }))
  );

  return [...homes, ...blogIndexes, ...blogPosts, ...services];
}
