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

/* ─── DEFAULTS ─── */

const DEFAULTS_FR: SiteContent = {
  hero: {
    tag: "Talents tech éprouvés — basés à Madagascar",
    title_line1: "Votre équipe tech",
    title_line2: "",
    title_accent: "d'experts",
    subtitle:
      "Développeurs, AI Engineers, Data Scientists et Designers — sélectionnés sur projets réels, formés en continu, à des tarifs 25% sous le marché européen. Transparence totale sur chaque euro investi.",
    stats: [
      { value: "9+", label: "Spécialisations" },
      { value: "25%", label: "Sous le marché" },
      { value: "100%", label: "Transparent" },
      { value: "UTC+3", label: "Fuseau Europe" },
    ],
    marquee_items: [
      "AI Engineer", "Data Scientist", "Fullstack Developer", "DevOps Engineer",
      "UX/UI Designer", "Data Engineer", "Data Analyst", "ML Engineer", "Content & Community",
    ],
  },
  client_problems: [
    { title: "Coûts exorbitants en Europe", text: "Un développeur senior à Paris ou Zurich coûte 800-1200 EUR/jour. Pour un projet de 3 mois, c'est un budget de 50-150k EUR en salaires seuls." },
    { title: "Freelances isolés, qualité variable", text: "Recruter des freelances individuels sur Upwork ou Malt ? Aucune garantie de qualité, de continuité, ni de structure derrière." },
    { title: "Agences classiques opaques", text: "Les agences prennent 40-60% de marge. Vous ne savez jamais combien revient réellement à ceux qui font votre projet." },
  ],
  client_solutions: [
    { title: "Tarifs 25% sous le marché", text: "Des professionnels expérimentés, formés en continu et sélectionnés sur projets réels, à des TJM ultra-compétitifs. Même qualité qu'en Europe, coûts divisés par 2." },
    { title: "Équipes structurées et formées", text: "Pas des freelances isolés : un collectif organisé avec processus, compétences validées sur projets, et suivi professionnel." },
    { title: "Transparence totale sur les coûts", text: "Vous voyez exactement comment votre budget est utilisé. Devis détaillé, suivi en temps réel, aucun frais caché. Zéro zone grise." },
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
    { icon: "🔍", title: "Transparence totale", text: "Vous savez exactement où va votre argent. Devis détaillé ligne par ligne, pas de marge cachée à 40-60% comme les agences classiques." },
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
    { q: "Comment fonctionne la tarification ?", a: "TJM fixe par profil et niveau (Junior, Confirmé, Senior). Le devis détaille chaque poste, chaque jour estimé. Nos marges sont parmi les plus basses du marché — pas de surcoût caché à 40-60% comme les agences classiques." },
    { q: "Quelle est votre structure juridique ?", a: "Wikolabs est une SARLU malgache immatriculée au RCS, avec NIF et compte bancaire SWIFT. Contrats professionnels, factures conformes, propriété intellectuelle transférée." },
    { q: "Quels fuseaux horaires couvrez-vous ?", a: "Madagascar (UTC+3) offre un chevauchement naturel avec l'Europe. Communication bilingue français-anglais. Points hebdomadaires adaptés à vos horaires." },
    { q: "Et si le projet nécessite des ajustements ?", a: "Approche agile avec jalons intermédiaires. Tout changement de scope est négocié avec un avenant clair avant exécution. Vous gardez le contrôle à chaque étape." },
    { q: "Puis-je voir les profils de l'équipe avant de signer ?", a: "Absolument. Nous vous montrons le portfolio, les projets passés, les éventuelles certifications et les évaluations de chaque membre proposé. Vous pouvez demander des ajustements d'équipe." },
  ],
};

const DEFAULTS_EN: SiteContent = {
  hero: {
    tag: "Proven tech talent — based in Madagascar",
    title_line1: "Your tech team",
    title_line2: "of proven",
    title_accent: "experts",
    subtitle:
      "Developers, AI Engineers, Data Scientists and Designers — selected on real projects, continuously trained, at rates 25% below the European market. Full transparency on every euro invested.",
    stats: [
      { value: "9+", label: "Specializations" },
      { value: "25%", label: "Below market" },
      { value: "100%", label: "Transparent" },
      { value: "UTC+3", label: "Europe timezone" },
    ],
    marquee_items: [
      "AI Engineer", "Data Scientist", "Fullstack Developer", "DevOps Engineer",
      "UX/UI Designer", "Data Engineer", "Data Analyst", "ML Engineer", "Content & Community",
    ],
  },
  client_problems: [
    { title: "Exorbitant costs in Europe", text: "A senior developer in Paris or Zurich costs 800-1200 EUR/day. For a 3-month project, that's a budget of 50-150k EUR in salaries alone." },
    { title: "Isolated freelancers, variable quality", text: "Hiring individual freelancers on Upwork or Malt? No guarantee of quality, continuity, or structure behind them." },
    { title: "Opaque traditional agencies", text: "Agencies take 40-60% margins. You never know how much actually goes to the people doing your project." },
  ],
  client_solutions: [
    { title: "Rates 25% below market", text: "Experienced professionals, continuously trained and selected on real projects, at ultra-competitive daily rates. Same quality as Europe, costs cut in half." },
    { title: "Structured and trained teams", text: "Not isolated freelancers: an organized collective with processes, skills validated on projects, and professional project management." },
    { title: "Full cost transparency", text: "You see exactly how your budget is used. Detailed quotes, real-time tracking, no hidden fees. Zero grey areas." },
  ],
  roles: [
    { emoji: "🧠", title: "AI / ML Engineer", desc: "Intelligent systems, NLP, Computer Vision. PyTorch, TensorFlow, ML deployment in production.", tjm: "340 – 640 EUR/day" },
    { emoji: "📊", title: "Data Scientist", desc: "Actionable insights from massive datasets. Advanced statistics, ML, decision-making visualization.", tjm: "340 – 640 EUR/day" },
    { emoji: "⚡", title: "Fullstack Developer", desc: "Complete web applications. React/Vue + Node.js/Python + SQL/NoSQL. The most in-demand profile.", tjm: "260 – 490 EUR/day" },
    { emoji: "🔧", title: "DevOps Engineer", desc: "Docker, Kubernetes, Terraform, CI/CD. Automated cloud infrastructure and monitoring.", tjm: "300 – 560 EUR/day" },
    { emoji: "🎨", title: "UX/UI Designer", desc: "User-centered interfaces. Figma, prototyping, design systems, accessibility.", tjm: "225 – 450 EUR/day" },
    { emoji: "🔗", title: "Data Engineer", desc: "Large-scale pipelines. ETL, Spark, Kafka, BigQuery, Airflow, data orchestration.", tjm: "300 – 600 EUR/day" },
    { emoji: "📈", title: "Data Analyst", desc: "Business analysis, dashboards, decision reports. SQL, Tableau, Power BI.", tjm: "225 – 450 EUR/day" },
    { emoji: "🤖", title: "ML Engineer", desc: "MLOps, model deployment at scale, training pipelines, model monitoring.", tjm: "340 – 640 EUR/day" },
    { emoji: "✍️", title: "Content & Community", desc: "Content creation, community management, copywriting, social media.", tjm: "120 – 225 EUR/day" },
  ],
  why_clients: [
    { icon: "💰", title: "Unbeatable value", text: "Experienced professionals, continuously trained, at rates 25% below the European market. Same quality, lower costs." },
    { icon: "🔍", title: "Full transparency", text: "You know exactly where your money goes. Line-by-line detailed quotes, no hidden 40-60% margins like traditional agencies." },
    { icon: "🎓", title: "Selected and trained talent", text: "Rigorous recruitment on real mini-projects. Some members hold international certifications (AWS, GCP, Azure), all benefit from funded continuous training." },
    { icon: "⚡", title: "Dedicated structured teams", text: "Not isolated freelancers. Teams built with processes, tracking tools, and a single point of contact for your project." },
    { icon: "🌍", title: "Compatible timezone", text: "Madagascar (UTC+3): natural overlap with Europe. Communication in French and English." },
    { icon: "🤝", title: "Motivated and invested talent", text: "Our members are compensated in proportion to the value they create. Result: they are invested in YOUR project's success." },
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
    { num: "01", title: "Describe your needs", text: "Contact us with your project brief. We analyze your technical requirements, budget and timeline." },
    { num: "02", title: "Receive a transparent quote", text: "Our technical team co-builds the backlog and estimates precisely. You see every line of the quote." },
    { num: "03", title: "Dedicated team assembled", text: "We assign the best available profiles based on skills and experience. You validate the team before kickoff." },
    { num: "04", title: "Agile development", text: "Incremental deliveries with validation at each milestone. Weekly check-ins and access to tracking tools." },
    { num: "05", title: "Delivery and acceptance", text: "Complete demonstration, testing phase, corrections. Final sign-off before final payment." },
    { num: "06", title: "Support and continuity", text: "Your team remains available for post-delivery support. Need enhancements? We continue together." },
  ],
  testimonials: [
    { quote: "Quality identical to our Parisian providers, at half the budget. Project management is impeccable.", name: "Marc D.", role: "CTO, SaaS Startup — Switzerland", initials: "MD" },
    { quote: "What convinced me was the transparency. I know exactly where my money goes and who works on my project.", name: "Sophie L.", role: "Digital Director — France", initials: "SL" },
    { quote: "Their AI/ML team delivered a recommendation engine in 6 weeks. Skilled, responsive, professional.", name: "Jean-Pierre K.", role: "CEO, Mediwyz", initials: "JK" },
  ],
  faq: [
    { q: "How do you guarantee quality?", a: "Recruitment through real mini-projects, not CVs. Continuous training funded for all members. Some hold international certifications (AWS, GCP, Azure), all are evaluated by clients after each project." },
    { q: "How does pricing work?", a: "Fixed daily rate per profile and level (Junior, Mid-level, Senior). The quote details every role, every estimated day. Our margins are among the lowest in the industry — no hidden 40-60% surcharge like traditional agencies." },
    { q: "What is your legal structure?", a: "Wikolabs is a Malagasy SARLU registered with the RCS, with a NIF and SWIFT bank account. Professional contracts, compliant invoices, IP transferred." },
    { q: "What timezones do you cover?", a: "Madagascar (UTC+3) offers natural overlap with Europe. Bilingual communication in French and English. Weekly check-ins adapted to your schedule." },
    { q: "What if the project needs adjustments?", a: "Agile approach with intermediate milestones. Any scope change is negotiated with a clear amendment before execution. You stay in control at every stage." },
    { q: "Can I see team profiles before signing?", a: "Absolutely. We show you the portfolio, past projects, any certifications and client evaluations for each proposed member. You can request team adjustments." },
  ],
};

export const DEFAULTS = { fr: DEFAULTS_FR, en: DEFAULTS_EN };

/* ─── DB HELPERS ─── */

export async function getContent(locale: string = "fr"): Promise<SiteContent> {
  const defaults = locale === "en" ? DEFAULTS_EN : DEFAULTS_FR;
  const suffix = locale === "fr" ? "" : `_${locale}`;

  try {
    const [rows] = await pool.query(
      "SELECT section_key, content_json FROM site_content WHERE section_key LIKE ?",
      [`%${suffix}`]
    );
    const dbContent: Partial<SiteContent> = {};
    for (const row of rows as { section_key: string; content_json: string }[]) {
      try {
        // Strip locale suffix to get clean key: "hero_en" → "hero"
        const cleanKey = suffix ? row.section_key.replace(suffix, "") : row.section_key;
        (dbContent as Record<string, unknown>)[cleanKey] = JSON.parse(row.content_json);
      } catch { /* skip malformed */ }
    }

    // Also load non-suffixed keys for FR (backward compat with existing data)
    if (locale === "fr") {
      const [frRows] = await pool.query(
        "SELECT section_key, content_json FROM site_content WHERE section_key NOT LIKE '%\\_en' AND section_key NOT LIKE '%\\_fr'"
      );
      for (const row of frRows as { section_key: string; content_json: string }[]) {
        try {
          if (!(row.section_key in dbContent)) {
            (dbContent as Record<string, unknown>)[row.section_key] = JSON.parse(row.content_json);
          }
        } catch { /* skip */ }
      }
    }

    return { ...defaults, ...dbContent };
  } catch {
    return defaults;
  }
}

export async function saveSection(key: string, data: unknown, locale: string = "fr"): Promise<void> {
  const dbKey = locale === "fr" ? key : `${key}_${locale}`;
  const json = JSON.stringify(data);
  await pool.query(
    `INSERT INTO site_content (section_key, content_json, updated_at)
     VALUES (?, ?, NOW())
     ON DUPLICATE KEY UPDATE content_json = VALUES(content_json), updated_at = NOW()`,
    [dbKey, json]
  );
}
