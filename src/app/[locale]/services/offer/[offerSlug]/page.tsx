import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { OFFERS_CONTENT } from "@/lib/offersContent";
import OfferDetailClient from "@/components/OfferDetailClient";

const locales = ["fr", "en"] as const;

export function generateStaticParams() {
  return OFFERS_CONTENT.flatMap((offer) =>
    locales.map((locale) => ({ locale, offerSlug: offer.slug }))
  );
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; offerSlug: string }>;
}): Promise<Metadata> {
  const { locale, offerSlug } = await params;
  const offer = OFFERS_CONTENT.find((o) => o.slug === offerSlug);
  if (!offer) return {};
  const lang = locale === "en" ? "en" : "fr";
  return {
    title: offer[lang].metaTitle,
    description: offer[lang].metaDesc,
  };
}

export default async function OfferPage({
  params,
}: {
  params: Promise<{ locale: string; offerSlug: string }>;
}) {
  const { locale, offerSlug } = await params;
  const exists = OFFERS_CONTENT.some((o) => o.slug === offerSlug);
  if (!exists) notFound();
  return <OfferDetailClient slug={offerSlug} locale={locale} />;
}
