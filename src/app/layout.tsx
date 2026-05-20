import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  icons: {
    icon: [{ url: "/favicon.png", type: "image/png" }],
    apple: "/favicon.png",
    shortcut: "/favicon.png",
  },
  title: "Wikolabs — Services IA, Data & Automatisation pour Entreprises",
  description:
    "Wikolabs transforme votre entreprise avec l'IA agentique, l'ingénierie des données, l'automatisation intelligente et le développement logiciel. Agents IA, BI, cycle commercial automatisé, traitement documentaire multimodal. Services pour dirigeants et CEO.",
  keywords: [
    "intelligence artificielle entreprise",
    "agent IA",
    "automatisation IA",
    "data engineering",
    "agentic AI",
    "RAG platform",
    "LangGraph",
    "business intelligence IA",
    "cycle commercial automatisé",
    "agent SAV WooCommerce",
    "veille concurrentielle automatisée",
    "reporting BI automatique",
    "multimodal AI",
    "OCR intelligence artificielle",
    "MLOps",
    "développement fullstack",
    "Wikolabs",
    "Madagascar tech company",
    "nearshore Madagascar",
    "services IA Madagascar",
    "AI services CEO",
    "AI agentic services",
    "recherche sémantique produit",
    "recommandation personnalisée",
    "forecasting BI",
    "CRM automation",
  ].join(", "),
  authors: [{ name: "Wikolabs" }],
  creator: "Wikolabs",
  publisher: "Wikolabs",
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
  openGraph: {
    type: "website",
    locale: "fr_FR",
    alternateLocale: "en_US",
    title: "Wikolabs — IA & Data pour Dirigeants d'Entreprise",
    description:
      "Agents IA, Data Engineering, Automatisation, Développement Fullstack. Des solutions concrètes qui transforment vos opérations — sans jargon technique.",
    siteName: "Wikolabs",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Wikolabs" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Wikolabs — IA & Data pour Dirigeants",
    description:
      "Agents IA, cycle commercial automatisé, BI intelligente, traitement documentaire. Des résultats mesurables pour votre entreprise.",
    images: ["/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="fr" suppressHydrationWarning>
      <head>
        <link rel="icon" type="image/png" href="/favicon.png" />
        <link rel="apple-touch-icon" href="/favicon.png" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Instrument+Serif:ital@0;1&family=Space+Grotesk:wght@300;400;500;600;700&family=JetBrains+Mono:wght@400;500&display=swap"
          rel="stylesheet"
        />
      </head>
      <body suppressHydrationWarning>{children}</body>
    </html>
  );
}
