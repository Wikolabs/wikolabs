import { notFound } from "next/navigation";
import type { Metadata } from "next";
import ServicePageClient from "@/components/ServicePageClient";

const slugTitles: Record<string, { fr: string; en: string }> = {
  "search-recommendation": {
    fr: "Recherche & Recommandation — Wikolabs",
    en: "Search & Recommendation — Wikolabs",
  },
  "production-ai": {
    fr: "Logiciels IA de Production — Wikolabs",
    en: "Production AI Software — Wikolabs",
  },
  "decision-intelligence": {
    fr: "Intelligence Décisionnelle — Wikolabs",
    en: "Decision Intelligence — Wikolabs",
  },
  "commercial-automation": {
    fr: "Automatisation Commerciale — Wikolabs",
    en: "Commercial Automation — Wikolabs",
  },
  "data-vision": {
    fr: "Données Non Structurées & Vision — Wikolabs",
    en: "Unstructured Data & Vision — Wikolabs",
  },
};

const validSlugs = Object.keys(slugTitles);
const locales = ["fr", "en"] as const;

export function generateStaticParams() {
  return validSlugs.flatMap((slug) =>
    locales.map((locale) => ({ locale, slug }))
  );
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}): Promise<Metadata> {
  const { locale, slug } = await params;
  const titles = slugTitles[slug];
  if (!titles) return {};
  const title = locale === "fr" ? titles.fr : titles.en;
  return { title };
}

export default async function ServicePage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale, slug } = await params;

  if (!validSlugs.includes(slug)) {
    notFound();
  }

  return <ServicePageClient slug={slug} locale={locale} />;
}
