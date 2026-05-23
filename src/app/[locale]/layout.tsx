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
      title: "Wikolabs — AI Agents, Data & Automation for Businesses",
      description:
        "Wikolabs deploys agentic AI, data engineering, intelligent automation and software development that deliver measurable results. AI agents, BI, automated commercial cycle, multimodal document processing.",
      keywords: [
        "AI agents for business",
        "B2B AI agent",
        "agentic AI services",
        "sales pipeline automation AI",
        "RAG e-commerce",
        "LangGraph agent",
        "business intelligence AI",
        "automated sales cycle",
        "AI customer support chatbot",
        "semantic search AI",
        "MLOps fine-tuning",
        "LLM automation",
        "OCR AI document processing",
        "Wikolabs",
        "AI agency Madagascar",
        "AI services for executives",
        "AI revenue automation",
        "CRM automation AI",
        "anomaly detection forecasting",
        "AI agent deployment",
      ],
      openGraph: {
        title: "Wikolabs — AI Agents, Data & Automation for Businesses",
        description:
          "AI agents, Data Engineering, Intelligent Automation, Vision AI. Concrete solutions that transform your operations — no technical jargon.",
        type: "website",
        locale: "en_US",
        url: BASE_URL,
        siteName: "Wikolabs",
        images: [
          {
            url: `${BASE_URL}/og-image.png`,
            width: 1200,
            height: 630,
            alt: "Wikolabs — AI Agents, Data & Automation",
          },
        ],
      },
      twitter: {
        card: "summary_large_image",
        title: "Wikolabs — AI Agents & Data for Business Leaders",
        description:
          "AI agents, automated sales cycle, intelligent BI, document processing. Measurable results for your business.",
        images: [`${BASE_URL}/og-image.png`],
      },
      icons: { icon: "/wikolabs-logo.png", apple: "/wikolabs-logo.png" },
    };
  }

  return {
    title: "Wikolabs — Services IA, Data & Automatisation pour Entreprises",
    description:
      "Wikolabs transforme votre entreprise avec l'IA agentique, l'ingénierie des données, l'automatisation intelligente et le développement logiciel. Agents IA, BI, cycle commercial automatisé, traitement documentaire multimodal. Pour dirigeants et CEO.",
    keywords: [
      "agent IA commercial B2B",
      "automatisation pipeline vente",
      "agence agents IA",
      "IA agentique entreprise",
      "LangGraph agent",
      "RAG e-commerce",
      "business intelligence IA",
      "cycle commercial automatisé",
      "agent SAV e-commerce",
      "veille concurrentielle automatisée",
      "reporting BI automatique",
      "chatbot IA entreprise",
      "OCR intelligence artificielle",
      "MLOps fine-tuning",
      "LLM automation entreprise",
      "Wikolabs",
      "agence IA Madagascar",
      "IA pour dirigeants",
      "IA pour CEO",
      "recherche sémantique IA",
      "recommandation personnalisée IA",
      "forecasting anomalies IA",
      "automatisation CRM agent",
      "déploiement agent IA",
    ],
    openGraph: {
      title: "Wikolabs — IA & Data pour Dirigeants d'Entreprise",
      description:
        "Agents IA autonomes, Data Engineering, Automatisation intelligente, Vision IA. Des solutions concrètes qui transforment vos opérations — sans jargon technique.",
      type: "website",
      locale: "fr_FR",
      url: BASE_URL,
      siteName: "Wikolabs",
      images: [
        {
          url: `${BASE_URL}/og-image.png`,
          width: 1200,
          height: 630,
          alt: "Wikolabs — IA & Data pour Entreprises",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: "Wikolabs — IA & Data pour Dirigeants",
      description:
        "Agents IA, cycle commercial automatisé, BI intelligente, traitement documentaire. Des résultats mesurables pour votre entreprise.",
      images: [`${BASE_URL}/og-image.png`],
    },
    icons: { icon: "/wikolabs-logo.png", apple: "/wikolabs-logo.png" },
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
    email: "team@wikolabs.com",
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