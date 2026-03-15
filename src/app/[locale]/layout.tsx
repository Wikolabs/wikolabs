import { NextIntlClientProvider, hasLocale } from "next-intl";
import { getMessages } from "next-intl/server";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";
import type { Metadata } from "next";

type Props = {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;

  if (locale === "en") {
    return {
      title: "Wikolabs — Proven tech experts from Madagascar",
      description:
        "Structured tech teams, continuously trained, at rates 25% below the European market. AI Engineers, Data Scientists, Fullstack Devs, DevOps — selected on real projects.",
      keywords: [
        "freelance Madagascar",
        "developer Madagascar",
        "AI Engineer",
        "Data Scientist",
        "remote work Africa",
        "tech outsourcing Madagascar",
        "Wikolabs",
        "outsourced tech team",
        "nearshore Madagascar",
      ],
      openGraph: {
        title: "Wikolabs — Your proven tech expert team",
        description:
          "Tech talent selected on real projects, continuously trained, at rates 25% below market. Among the lowest fees in the industry.",
        type: "website",
        locale: "en_US",
        images: [{ url: "/og-image.png", width: 1200, height: 630 }],
      },
      icons: { icon: "/favicon.ico", apple: "/apple-touch-icon.png" },
    };
  }

  return {
    title: "Wikolabs — Experts tech éprouvés depuis Madagascar",
    description:
      "Équipes tech structurées, formées en continu, à des tarifs 25% sous le marché européen. AI Engineers, Data Scientists, Fullstack Devs, DevOps — sélectionnés sur projets réels.",
    keywords: [
      "freelance Madagascar",
      "développeur Madagascar",
      "AI Engineer",
      "Data Scientist",
      "remote work Africa",
      "tech outsourcing Madagascar",
      "Wikolabs",
      "équipe tech externalisée",
      "nearshore Madagascar",
    ],
    openGraph: {
      title: "Wikolabs — Votre équipe tech d'experts éprouvés",
      description:
        "Talents tech sélectionnés sur projets réels, formés en continu, à des tarifs 25% sous le marché. Marges parmi les plus basses du secteur.",
      type: "website",
      locale: "fr_FR",
      images: [{ url: "/og-image.png", width: 1200, height: 630 }],
    },
    icons: { icon: "/favicon.ico", apple: "/apple-touch-icon.png" },
  };
}

export default async function LocaleLayout({ children, params }: Props) {
  const { locale } = await params;

  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  const messages = await getMessages();

  return (
    <NextIntlClientProvider locale={locale} messages={messages}>
      {children}
    </NextIntlClientProvider>
  );
}