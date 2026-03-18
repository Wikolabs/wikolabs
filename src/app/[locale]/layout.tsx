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
      title: "Wikolabs — We build your intelligent SaaS",
      description:
        "A complete team — AI engineers, developers, designers — that turns your idea into a working product in 4 to 8 weeks. From idea to launch, with AI built in.",
      keywords: [
        "SaaS development Madagascar",
        "AI product studio",
        "build SaaS with AI",
        "intelligent web app",
        "MVP development",
        "AI integration existing product",
        "dedicated tech team",
        "Wikolabs",
        "software development Madagascar",
        "nearshore SaaS studio",
      ],
      openGraph: {
        title: "Wikolabs — We build your intelligent SaaS",
        description:
          "From idea to product in 4–8 weeks. A full team of AI engineers, developers and designers — ready to build your SaaS.",
        type: "website",
        locale: "en_US",
        url: "https://wikolabs.com",
        siteName: "Wikolabs",
        images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Wikolabs — We build your intelligent SaaS" }],
      },
      twitter: {
        card: "summary_large_image",
        title: "Wikolabs — We build your intelligent SaaS",
        description:
          "From idea to product in 4–8 weeks. AI engineers, developers and designers — all in one team.",
        images: ["/og-image.png"],
      },
      icons: { icon: "/favicon.ico", apple: "/apple-touch-icon.png" },
    };
  }

  return {
    title: "Wikolabs — On construit votre SaaS intelligent",
    description:
      "Une équipe complète — ingénieurs IA, développeurs, designers — qui transforme votre idée en produit fonctionnel en 4 à 8 semaines. De l'idée au lancement, avec l'IA intégrée.",
    keywords: [
      "développement SaaS Madagascar",
      "studio produit IA",
      "créer SaaS avec IA",
      "application web intelligente",
      "développement MVP",
      "intégration IA produit existant",
      "équipe tech dédiée",
      "Wikolabs",
      "développement logiciel Madagascar",
      "studio SaaS nearshore",
    ],
    openGraph: {
      title: "Wikolabs — On construit votre SaaS intelligent",
      description:
        "De l'idée au produit en 4 à 8 semaines. Une équipe complète d'ingénieurs IA, développeurs et designers — prête à construire votre SaaS.",
      type: "website",
      locale: "fr_FR",
      url: "https://wikolabs.com",
      siteName: "Wikolabs",
      images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Wikolabs — On construit votre SaaS intelligent" }],
    },
    twitter: {
      card: "summary_large_image",
      title: "Wikolabs — On construit votre SaaS intelligent",
      description:
        "De l'idée au produit en 4 à 8 semaines. Ingénieurs IA, développeurs et designers — tout en une seule équipe.",
      images: ["/og-image.png"],
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