import pool from "./db";

/* ─── TYPES ─── */

export interface HeroContent {
  tag: string;
  title_line1: string;
  title_line2: string;
  title_accent: string;
  subtitle: string;
  stats: { value: string; label: string }[];
  marquee_items: string[];
}

export interface ProblemCard {
  title: string;
  text: string;
}

export interface RoleCard {
  emoji: string;
  title: string;
  desc: string;
  tjm: string;
}

export interface ValueCard {
  icon: string;
  title: string;
  text: string;
}

export interface PricingRow {
  role: string;
  junior: string;
  confirmed: string;
  senior: string;
}

export interface ProcessStep {
  num: string;
  title: string;
  text: string;
}

export interface Testimonial {
  quote: string;
  name: string;
  role: string;
  initials: string;
}

export interface FaqItem {
  q: string;
  a: string;
}

export interface SiteContent {
  hero: HeroContent;
  client_problems: ProblemCard[];
  client_solutions: ProblemCard[];
  roles: RoleCard[];
  why_clients: ValueCard[];
  pricing: PricingRow[];
  process: ProcessStep[];
  testimonials: Testimonial[];
  faq: FaqItem[];
}

/* ─── DEFAULTS (current hardcoded landing content) ─── */

export const DEFAULTS: SiteContent = {
  hero: {
    tag: "Talents tech éprouvés — basés à Madagascar",
    title_line1: "Votre équipe tech",
    title_line2: "d'experts",
    title_accent: "éprouvés",
    subtitle:
      "Développeurs, AI Engineers, Data Scientists et Designers — sélectionnés sur projets réels, formés en continu, à des tarifs 25% sous le marché européen. Transparence totale sur chaque euro investi.",
    stats: [
      { value: "9+", label: "Spécialisations" },
      { value: "25%", label: "Sous le marché" },
      { value: "100%", label: "Transparent" },
      { value: "UTC+3", label: "Fuseau Europe" },
    ],
    marquee_items: [
      "AI Engineer",
      "Data Scientist",
      "Fullstack Developer",
      "DevOps Engineer",
      "UX/UI Designer",
      "Data Engineer",
      "Data Analyst",
      "ML Engineer",
      "Content & Community",
    ],
  },
  client_problems: [
    {
      title: "Coûts exorbitants en Europe",
      text: "Un développeur senior à Paris ou Zurich coûte 800-1200 EUR/jour. Pour un projet de 3 mois, c'est un budget de 50-150k EUR en salaires seuls.",
    },
    {
      title: "Freelances isolés, qualité variable",
      text: "Recruter des freelances individuels sur Upwork ou Malt ? Aucune garantie de qualité, de continuité, ni de structure derrière.",
    },
    {
      title: "Agences classiques opaques",
      text: "Les agences prennent 40-60% de marge. Vous ne savez jamais combien revient réellement à ceux qui font votre projet.",
    },
  ],
  client_solutions: [
    {
      title: "Tarifs 25% sous le marché",
      text: "Des professionnels expérimentés, formés en continu et sélectionnés sur projets réels, à des TJM ultra-compétitifs. Même qualité qu'en Europe, coûts divisés par 2.",
    },
    {
      title: "Équipes structurées et formées",
      text: "Pas des freelances isolés : un collectif organisé avec processus, compétences validées sur projets, et suivi professionnel.",
    },
    {
      title: "Transparence totale sur les coûts",
      text: "Vous voyez exactement comment votre budget est réparti. 70% va aux techniciens qui font le travail. Zéro zone grise.",
    },
  ],
  roles: [
    { emoji: "🧠", title: "AI / ML Engineer", desc: "Systèmes intelligents, NLP, Computer Vision. PyTorch, TensorFlow, déploiement ML en production.", tjm: "340 – 640 EUR/jour" },
    { emoji: "📊", title: "Data Scientist", desc: "Insights actionnables depuis données massives. Statistiques avancées, ML, visualisation décisionnelle.", tjm: "340 – 640 EUR/jour" },
    { emoji: "⚡", title: "Fullstack Developer", desc: "Applications web complètes. React/Vue + Node.js/Python + SQL/NoSQL. Le profil le plus demandé.", tjm: "260 – 490 EUR/jour" },
    { emoji: "🔧", title: "DevOps Engineer", desc: "Docker, Kubernetes, Terraform, CI/CD. Infrastructure cloud automatisée et monitoring.", tjm: "300 – 560 EUR/jour" },
    { emoji: "🎨", title: "UX/UI Designer", desc: "Interfaces centrées utilisateur. Figma, prototypage, design systems, accessibilité.", tjm: "225 – 450 EUR/jour" },
    { emoji: "🔗", title: "Data Engineer", desc: "Pipelines grande échelle. ETL, Spark, Kafka, BigQuery, Airflow, orchestration data.", tjm: "300 – 600 EUR/jour" },
    { emoji: "📈", title: "Data Analyst", desc: "Analyse business, dashboards, rapports décisionnels. SQL, Tableau, Power BI.", tjm: "225 – 450 EUR/jour" },
    { emoji: "🤖", title: "ML Engineer", desc: "MLOps, déploiement modèles à l'échelle, pipelines d'entraînement, monitoring modèles.", tjm: "340 – 640 EUR/jour" },
    { emoji: "✍️", title: "Content & Community", desc: "Création de contenu, community management, rédaction, social media, copywriting.", tjm: "120 – 225 EUR/jour" },
  ],
  why_clients: [
    { icon: "💰", title: "Rapport qualité-prix imbattable", text: "Professionnels expérimentés, formés en continu, à des tarifs 25% sous le marché européen. Même qualité, coûts divisés." },
    { icon: "🔍", title: "Transparence totale", text: "Vous savez exactement où va votre argent. 70% aux techniciens, 10% formation/outils, 20% business. Pas de marge cachée." },
    { icon: "🎓", title: "Talents sélectionnés et formés", text: "Recrutement rigoureux sur mini-projets réels. Certains membres détiennent des certifications internationales (AWS, GCP, Azure), tous bénéficient d'une formation continue financée." },
    { icon: "⚡", title: "Équipes dédiées et structurées", text: "Pas de freelances isolés. Des équipes constituées avec processus, outils de suivi, et un interlocuteur unique pour votre projet." },
    { icon: "🌍", title: "Fuseau horaire compatible", text: "Madagascar (UTC+3) : chevauchement naturel avec l'Europe. Communication en français et anglais courant." },
    { icon: "🤝", title: "Talents motivés et investis", text: "Nos membres sont rémunérés proportionnellement à la valeur créée. Résultat : ils sont investis dans la réussite de VOTRE projet." },
  ],
  pricing: [
    { role: "AI / ML Engineer", junior: "340 €", confirmed: "490 €", senior: "640 €" },
    { role: "Data Scientist", junior: "340 €", confirmed: "490 €", senior: "640 €" },
    { role: "Data Engineer", junior: "300 €", confirmed: "450 €", senior: "600 €" },
    { role: "Fullstack Dev", junior: "260 €", confirmed: "375 €", senior: "490 €" },
    { role: "DevOps Engineer", junior: "300 €", confirmed: "450 €", senior: "560 €" },
    { role: "UX/UI Designer", junior: "225 €", confirmed: "340 €", senior: "450 €" },
    { role: "Data Analyst", junior: "225 €", confirmed: "340 €", senior: "450 €" },
    { role: "Content & Community", junior: "120 €", confirmed: "175 €", senior: "225 €" },
  ],
  process: [
    { num: "01", title: "Décrivez votre besoin", text: "Contactez-nous avec votre brief projet. Nous analysons vos besoins techniques, votre budget et vos délais." },
    { num: "02", title: "Recevez un devis transparent", text: "Notre équipe technique co-construit le backlog et chiffre précisément. Vous voyez chaque ligne du devis." },
    { num: "03", title: "Équipe dédiée constituée", text: "Nous assignons les meilleurs profils disponibles selon compétences et expérience. Vous validez l'équipe avant le démarrage." },
    { num: "04", title: "Développement agile", text: "Livraisons incrémentielles avec validation à chaque jalon. Points hebdomadaires et accès aux outils de suivi." },
    { num: "05", title: "Livraison et recette", text: "Démonstration complète, phase de test, corrections. Validation finale signée avant paiement du solde." },
    { num: "06", title: "Support et continuité", text: "Votre équipe reste disponible pour le support post-livraison. Besoin d'évolutions ? On continue ensemble." },
  ],
  testimonials: [
    { quote: "Qualité identique à nos prestataires parisiens, pour un budget divisé par deux. Le suivi projet est impeccable.", name: "Marc D.", role: "CTO, Startup SaaS — Suisse", initials: "MD" },
    { quote: "Ce qui m'a convaincu, c'est la transparence. Je sais exactement où va mon argent et qui travaille sur mon projet.", name: "Sophie L.", role: "Directrice Digitale — France", initials: "SL" },
    { quote: "Leur équipe AI/ML a livré un moteur de recommandation en 6 semaines. Compétents, réactifs, professionnels.", name: "Jean-Pierre K.", role: "CEO, Mediwyz", initials: "JK" },
  ],
  faq: [
    { q: "Comment garantissez-vous la qualité ?", a: "Recrutement sur mini-projets réels, pas sur CV. Formation continue financée pour tous les membres. Certains détiennent des certifications internationales (AWS, GCP, Azure), tous sont évalués par les clients après chaque projet." },
    { q: "Comment fonctionne la tarification ?", a: "TJM fixe par profil et niveau (Junior, Confirmé, Senior). Le devis détaille chaque poste, chaque jour estimé. 70% va directement aux techniciens — pas de marge cachée à 50% comme les agences classiques." },
    { q: "Quelle est votre structure juridique ?", a: "Wikolabs est une SARLU malgache immatriculée au RCS, avec NIF et compte bancaire SWIFT. Contrats professionnels, factures conformes, propriété intellectuelle transférée." },
    { q: "Quels fuseaux horaires couvrez-vous ?", a: "Madagascar (UTC+3) offre un chevauchement naturel avec l'Europe. Communication bilingue français-anglais. Points hebdomadaires adaptés à vos horaires." },
    { q: "Et si le projet nécessite des ajustements ?", a: "Approche agile avec jalons intermédiaires. Tout changement de scope est négocié avec un avenant clair avant exécution. Vous gardez le contrôle à chaque étape." },
    { q: "Puis-je voir les profils de l'équipe avant de signer ?", a: "Absolument. Nous vous montrons le portfolio, les projets passés, les éventuelles certifications et les évaluations de chaque membre proposé. Vous pouvez demander des ajustements d'équipe." },
  ],
};

/* ─── DB HELPERS ─── */

export async function getContent(): Promise<SiteContent> {
  try {
    const [rows] = await pool.query(
      "SELECT section_key, content_json FROM site_content"
    );
    const dbContent: Partial<SiteContent> = {};
    for (const row of rows as { section_key: string; content_json: string }[]) {
      try {
        (dbContent as Record<string, unknown>)[row.section_key] = JSON.parse(row.content_json);
      } catch { /* skip malformed rows */ }
    }
    // Merge: DB values override defaults
    return { ...DEFAULTS, ...dbContent };
  } catch {
    // DB not ready or table missing — return defaults
    return DEFAULTS;
  }
}

export async function saveSection(key: string, data: unknown): Promise<void> {
  const json = JSON.stringify(data);
  await pool.query(
    `INSERT INTO site_content (section_key, content_json, updated_at)
     VALUES (?, ?, NOW())
     ON DUPLICATE KEY UPDATE content_json = VALUES(content_json), updated_at = NOW()`,
    [key, json]
  );
}
