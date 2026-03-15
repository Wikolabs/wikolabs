import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Wikolabs — Initiative des Jeunes Talents du Numérique International",
  description:
    "Plateforme de freelances tech organisés à Madagascar. Rémunération transparente 70% pour les créateurs de valeur. Rejoignez une communauté de professionnels indépendants de classe mondiale.",
  keywords: [
    "freelance Madagascar",
    "développeur Madagascar",
    "AI Engineer",
    "Data Scientist",
    "remote work Africa",
    "tech outsourcing Madagascar",
    "Wikolabs",
  ],
  openGraph: {
    title: "Wikolabs — Talents Numériques Internationaux depuis Madagascar",
    description:
      "70% de la valeur que vous créez vous revient. Transparence totale. Liberté absolue.",
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
