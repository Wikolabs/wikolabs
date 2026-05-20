import { NextIntlClientProvider, hasLocale } from "next-intl";
import { getMessages } from "next-intl/server";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";
import type { Metadata } from "next";

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.wikolabs.com";

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
        url: BASE_URL,
        siteName: "Wikolabs",
        images: [
          {
            url: `${BASE_URL}/og-image.png`,
            width: 1200,
            height: 630,
            alt: "Wikolabs — We build your intelligent SaaS",
          },
        ],
      },
      twitter: {
        card: "summary_large_image",
        title: "Wikolabs — We build your intelligent SaaS",
        description:
          "From idea to product in 4–8 weeks. AI engineers, developers and designers — all in one team.",
        images: [`${BASE_URL}/og-image.png`], // ✅ URL absolue
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
      url: BASE_URL,
      siteName: "Wikolabs",
      images: [
        {
          url: `${BASE_URL}/og-image.png`,
          width: 1200,
          height: 630,
          alt: "Wikolabs — On construit votre SaaS intelligent",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: "Wikolabs — On construit votre SaaS intelligent",
      description:
        "De l'idée au produit en 4 à 8 semaines. Ingénieurs IA, développeurs et designers — tout en une seule équipe.",
      images: [`${BASE_URL}/og-image.png`], // ✅ URL absolue
    },
    icons: { icon: "/favicon.ico", apple: "/apple-touch-icon.png" },
  };
}

const ORG_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Wikolabs",
  url: "https://www.wikolabs.com",
  logo: "https://www.wikolabs.com/wikolabs-logo.png",
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+261-38-66-261-00",
    contactType: "customer service",
    email: "contact@wikolabs.com",
    availableLanguage: ["French", "English"],
  },
  sameAs: ["https://www.linkedin.com/company/112261574"],
  address: {
    "@type": "PostalAddress",
    addressLocality: "Antananarivo",
    addressCountry: "MG",
  },
};

const SERVICE_SCHEMAS = [
  {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Automatisation Commerciale",
    description: "Agents IA pour l'automatisation du cycle commercial : sourcing de leads, outreach multicanal, qualification BANT, prise de rendez-vous, propositions commerciales et rétention.",
    provider: { "@type": "Organization", name: "Wikolabs" },
    serviceType: "AI Sales Automation",
    url: "https://www.wikolabs.com/fr/services/commercial-automation",
  },
  {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Support & Service Client IA",
    description: "Agents IA pour le support client : SAV e-commerce RAG, triage et escalade, onboarding automatisé, transcription et notes discovery.",
    provider: { "@type": "Organization", name: "Wikolabs" },
    serviceType: "AI Customer Support",
    url: "https://www.wikolabs.com/fr/services/production-ai",
  },
  {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Intelligence Décisionnelle",
    description: "BI en langage naturel, reporting automatique PPT/PDF, forecasting et détection d'anomalies, CRM multi-agent piloté par l'IA.",
    provider: { "@type": "Organization", name: "Wikolabs" },
    serviceType: "AI Decision Intelligence",
    url: "https://www.wikolabs.com/fr/services/decision-intelligence",
  },
  {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Recherche & Recommandation",
    description: "Moteur de recherche sémantique, recommandation personnalisée, pipeline de données intelligent, fine-tuning et MLOps.",
    provider: { "@type": "Organization", name: "Wikolabs" },
    serviceType: "AI Search & Recommendation",
    url: "https://www.wikolabs.com/fr/services/search-recommendation",
  },
  {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Documents, Vision & Industrie",
    description: "OCR et extraction documentaire, vision IA et détection d'objets, traitement BIM et point cloud, cartographie et géolocalisation.",
    provider: { "@type": "Organization", name: "Wikolabs" },
    serviceType: "AI Document & Vision Processing",
    url: "https://www.wikolabs.com/fr/services/data-vision",
  },
];

export default async function LocaleLayout({ children, params }: Props) {
  const { locale } = await params;

  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  const messages = await getMessages();

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(ORG_SCHEMA) }}
      />
      {SERVICE_SCHEMAS.map((schema, i) => (
        <script
          key={i}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}
      <NextIntlClientProvider locale={locale} messages={messages}>
        {children}
      </NextIntlClientProvider>
    </>
  );
}