import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
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
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body>{children}</body>
    </html>
  );
}