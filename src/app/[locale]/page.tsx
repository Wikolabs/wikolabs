import { getContent } from "@/lib/content";
import { DEFAULTS } from "@/lib/content";
import LandingClient from "../LandingClient";

export const dynamic = "force-dynamic";

export default async function Home({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  let content;
  try {
    content = await getContent(locale);
  } catch {
    content = locale === "en" ? DEFAULTS.en : DEFAULTS.fr;
  }

  return <LandingClient content={content} locale={locale} />;
}
