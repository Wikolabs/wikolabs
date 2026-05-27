import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.wikolabs.com"),
  icons: {
    icon: [{ url: "/wikolabs-logo.png", type: "image/png" }],
    apple: "/wikolabs-logo.png",
    shortcut: "/wikolabs-logo.png",
  },
  title: "Wikolabs — Services IA, Data & Automatisation pour Entreprises",
  description:
    "Wikolabs transforme votre entreprise avec l'IA agentique, l'ingénierie des données, l'automatisation intelligente et le développement logiciel. Agents IA, BI, cycle commercial automatisé, traitement documentaire multimodal. Services pour dirigeants et CEO.",
  keywords: [
    "agent IA commercial B2B",
    "automatisation pipeline vente",
    "agence agents IA",
    "IA agentique entreprise",
    "LangGraph agent",
    "RAG e-commerce",
    "business intelligence IA",
    "cycle commercial automatisé",
    "agent SAV WooCommerce",
    "veille concurrentielle automatisée",
    "reporting BI automatique",
    "chatbot IA entreprise",
    "OCR intelligence artificielle",
    "MLOps fine-tuning",
    "LLM automation entreprise",
    "Wikolabs",
    "agence IA Madagascar",
    "automatisation CRM",
    "recherche sémantique produit",
    "recommandation personnalisée IA",
    "forecasting anomalies IA",
    "agent IA pour dirigeants",
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
      "Agents IA autonomes, Data Engineering, Automatisation intelligente, Vision IA. Des solutions concrètes qui transforment vos opérations — sans jargon technique.",
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
        <link rel="icon" type="image/png" href="/wikolabs-logo.png" />
        <link rel="apple-touch-icon" href="/wikolabs-logo.png" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Instrument+Serif:ital@0;1&family=Inter:wght@400;500;600;700;800&family=JetBrains+Mono:wght@400;500&display=swap"
          rel="stylesheet"
        />
      </head>
      <body suppressHydrationWarning>{children}</body>
    </html>
  );
}
