/* ─── Shared project simulator data ─── */

export interface ProjectType {
  id: string;
  icon: string;
  label: { fr: string; en: string };
  desc: { fr: string; en: string };
  baseMin: number;
  baseMax: number;
}

export interface ProjectScale {
  id: string;
  label: { fr: string; en: string };
  desc: { fr: string; en: string };
  multiplier: number;
  duration: { fr: string; en: string };
}

export const PROJECT_TYPES: ProjectType[] = [
  {
    id: "mvp-saas",
    icon: "🚀",
    label: { fr: "Logiciel en ligne (SaaS)", en: "Online Software (SaaS)" },
    desc: { fr: "Application web complète avec espace client, tableau de bord et fonctionnalités sur mesure", en: "Complete web app with client portal, dashboard and custom features" },
    baseMin: 4000,
    baseMax: 8000,
  },
  {
    id: "ai-integration",
    icon: "🧠",
    label: { fr: "Intelligence artificielle", en: "Artificial Intelligence" },
    desc: { fr: "Chatbot intelligent, recommandations personnalisées, analyse automatique de documents", en: "Smart chatbot, personalized recommendations, automatic document analysis" },
    baseMin: 5000,
    baseMax: 10000,
  },
  {
    id: "data-dashboard",
    icon: "📊",
    label: { fr: "Tableau de bord & Données", en: "Dashboard & Data" },
    desc: { fr: "Visualisation de vos données, rapports automatiques, aide à la décision", en: "Data visualization, automated reports, decision support" },
    baseMin: 3000,
    baseMax: 6000,
  },
  {
    id: "design-ux",
    icon: "🎨",
    label: { fr: "Design d'interfaces", en: "Interface Design" },
    desc: { fr: "Conception d'écrans intuitifs, refonte visuelle, expérience utilisateur", en: "Intuitive screen design, visual redesign, user experience" },
    baseMin: 2000,
    baseMax: 5000,
  },
  {
    id: "devops",
    icon: "⚙️",
    label: { fr: "Hébergement & Infrastructure", en: "Hosting & Infrastructure" },
    desc: { fr: "Mise en ligne, sécurité, performance, gestion des montées en charge", en: "Launch, security, performance, handling traffic spikes" },
    baseMin: 3000,
    baseMax: 7000,
  },
];

export const PROJECT_SCALES: ProjectScale[] = [
  {
    id: "mvp",
    label: { fr: "Première version", en: "First version" },
    desc: { fr: "L'essentiel pour tester votre idée", en: "The essentials to test your idea" },
    multiplier: 1,
    duration: { fr: "2 – 4 semaines", en: "2 – 4 weeks" },
  },
  {
    id: "medium",
    label: { fr: "Produit complet", en: "Complete product" },
    desc: { fr: "Toutes les fonctionnalités, prêt pour vos clients", en: "All features, ready for your customers" },
    multiplier: 2.2,
    duration: { fr: "1 – 3 mois", en: "1 – 3 months" },
  },
  {
    id: "large",
    label: { fr: "Projet ambitieux", en: "Ambitious project" },
    desc: { fr: "Produit complexe, équipe dédiée", en: "Complex product, dedicated team" },
    multiplier: 4,
    duration: { fr: "3 – 6 mois", en: "3 – 6 months" },
  },
];

export type Lang = "fr" | "en";

export function computeEstimate(typeId: string, scaleId: string) {
  const type = PROJECT_TYPES.find((p) => p.id === typeId)!;
  const scale = PROJECT_SCALES.find((s) => s.id === scaleId)!;
  const min = Math.round((type.baseMin * scale.multiplier) / 100) * 100;
  const max = Math.round((type.baseMax * scale.multiplier) / 100) * 100;
  return { min, max, duration: scale.duration };
}

export function formatPrice(n: number, lang: Lang) {
  return new Intl.NumberFormat(lang === "fr" ? "fr-FR" : "en-US").format(n);
}
