import type { MetadataRoute } from "next";
import { BLOG_POSTS } from "@/lib/blogData";

const BASE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.wikolabs.com";

const locales = ["fr", "en"] as const;

const CATEGORY_SLUGS = [
  "commercial-automation",
  "production-ai",
  "decision-intelligence",
  "search-recommendation",
  "data-vision",
  "fullstack",
  "iot-edge-ai",
];

const OFFER_SLUGS = [
  // commercial-automation (7)
  "agent-veille-marche",
  "agent-sourcing-leads",
  "agent-outreach-multicanal",
  "agent-qualification-bant",
  "agent-setter-rdv",
  "agent-proposition-commerciale",
  "agent-retention-upsell",
  // production-ai (4)
  "agent-sav-ecommerce-rag",
  "agent-triage-escalade",
  "agent-onboarding-client",
  "agent-notes-discovery",
  // decision-intelligence (4)
  "agent-bi-langage-naturel",
  "reporting-automatique",
  "forecasting-anomalies",
  "crm-multi-agent",
  // search-recommendation (4)
  "moteur-recherche-semantique",
  "recommandation-personnalisee",
  "pipeline-donnees-intelligent",
  "fine-tuning-mlops",
  // data-vision (4)
  "ocr-extraction-documentaire",
  "vision-ia-detection-objets",
  "bim-point-cloud",
  "cartographie-geolocalisation",
  // fullstack (4)
  "refonte-ux-ui-web",
  "application-mobile-react-native",
  "debogage-optimisation-performance",
  "seo-technique-visibilite",
  // iot-edge-ai (4)
  "ia-embarquee-edge-device",
  "monitoring-iot-temps-reel",
  "vision-machine-camera-ip",
  "maintenance-predictive-ia",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const homes: MetadataRoute.Sitemap = locales.map((locale) => ({
    url: `${BASE_URL}/${locale}`,
    lastModified: now,
    changeFrequency: "weekly",
    priority: 1.0,
  }));

  const blogIndexes: MetadataRoute.Sitemap = locales.map((locale) => ({
    url: `${BASE_URL}/${locale}/blog`,
    lastModified: now,
    changeFrequency: "weekly",
    priority: 0.8,
  }));

  const blogPosts: MetadataRoute.Sitemap = BLOG_POSTS.flatMap((post) =>
    locales.map((locale) => ({
      url: `${BASE_URL}/${locale}/blog/${post.slug}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.7,
    }))
  );

  const categoryPages: MetadataRoute.Sitemap = CATEGORY_SLUGS.flatMap((slug) =>
    locales.map((locale) => ({
      url: `${BASE_URL}/${locale}/services/${slug}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.9,
    }))
  );

  const offerPages: MetadataRoute.Sitemap = OFFER_SLUGS.flatMap((slug) =>
    locales.map((locale) => ({
      url: `${BASE_URL}/${locale}/services/offer/${slug}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.85,
    }))
  );

  return [...homes, ...blogIndexes, ...blogPosts, ...categoryPages, ...offerPages];
}
