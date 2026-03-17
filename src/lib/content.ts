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
    tag: "De l'idée au produit — en 4 à 8 semaines",
    title_line1: "On construit votre",
    title_line2: "SaaS",
    title_accent: "intelligent",
    subtitle:
      "Une équipe complète — développeurs, spécialistes en intelligence artificielle et designers — qui transforme votre idée en produit fonctionnel, prêt pour vos premiers utilisateurs.",
    stats: [
      { value: "4-8", label: "Semaines" },
      { value: "6", label: "Métiers clés" },
      { value: "FR/EN", label: "Bilingue" },
    ],
    marquee_items: [
      "Applications SaaS", "Chatbots intelligents", "Tableaux de bord", "Apps Web",
      "Automatisation IA", "Interfaces utilisateur", "Recommandations", "Hébergement cloud",
    ],
  },
  client_problems: [
    { title: "Trouver la bonne équipe est compliqué", text: "Recruter des développeurs prend du temps, coûte cher, et rien ne garantit qu'ils comprennent votre vision produit." },
    { title: "Freelances sans structure", text: "Des freelances isolés : aucune garantie de livraison, pas de vision d'ensemble, zéro continuité si l'un d'eux quitte." },
    { title: "Agences classiques, résultats flous", text: "Les agences traditionnelles sont souvent opaques : peu de visibilité sur l'avancement, et un produit qui ne correspond pas toujours à ce que vous aviez imaginé." },
  ],
  client_solutions: [
    { title: "Une équipe dédiée à votre projet", text: "Des professionnels sélectionnés sur des projets concrets, qui travaillent exclusivement sur votre produit du début à la fin." },
    { title: "Un vrai processus produit", text: "Un chef de projet, des méthodes éprouvées, des démos régulières. Vous voyez votre produit avancer chaque semaine." },
    { title: "Vous gardez le contrôle", text: "Rien ne démarre sans votre validation. Chaque fonctionnalité, chaque étape est discutée et approuvée avec vous." },
  ],
  roles: [
    { emoji: "🧠", title: "Spécialiste intelligence artificielle", desc: "Il rend votre produit intelligent : chatbots qui comprennent vos clients, recommandations personnalisées, analyse automatique de documents.", tjm: "" },
    { emoji: "⚡", title: "Développeur web", desc: "Il construit votre application : l'inscription, le tableau de bord, les fonctionnalités — tout ce que vos utilisateurs voient et utilisent.", tjm: "" },
    { emoji: "📊", title: "Spécialiste données", desc: "Il transforme vos données en décisions : il identifie les tendances, prédit les comportements et crée des rapports visuels clairs.", tjm: "" },
    { emoji: "🔗", title: "Ingénieur données", desc: "Il organise le flux de vos données pour que tout circule sans accroc entre vos différents outils et votre intelligence artificielle.", tjm: "" },
    { emoji: "🎨", title: "Designer d'interfaces", desc: "Il dessine l'expérience de vos utilisateurs : des écrans clairs, intuitifs et agréables à utiliser sur ordinateur comme sur mobile.", tjm: "" },
    { emoji: "🔧", title: "Ingénieur infrastructure", desc: "Il s'assure que votre application est en ligne 24h/24, rapide, sécurisée, et qu'elle tient la charge même avec beaucoup d'utilisateurs.", tjm: "" },
  ],
  why_clients: [
    { icon: "🧠", title: "Experts en intelligence artificielle", text: "Notre équipe fondatrice vient du monde de l'IA. On ne fait pas que développer — on intègre de l'intelligence dans votre produit pour le rendre unique." },
    { icon: "🚀", title: "De l'idée au produit en 4-8 semaines", text: "Un processus rodé : vous décrivez votre besoin, on planifie ensemble, on développe par étapes avec des démos régulières." },
    { icon: "⚡", title: "Un seul interlocuteur", text: "Un chef de projet dédié, des points d'avancement chaque semaine, un suivi en temps réel. Pas besoin de gérer plusieurs freelances." },
    { icon: "🌍", title: "On s'adapte à vos horaires", text: "Que vous soyez en Europe, en Amérique du Nord ou en Afrique — on organise nos échanges pour que ce soit fluide. Communication en français et en anglais." },
    { icon: "🎯", title: "Focalisés sur le résultat", text: "On mesure notre succès au vôtre : un produit livré dans les temps, qui fonctionne, et qui plaît à vos utilisateurs." },
    { icon: "🔄", title: "On reste après la livraison", text: "Corrections, nouvelles fonctionnalités, montée en charge — votre équipe ne disparaît pas une fois le projet terminé." },
  ],
  pricing: [
    { role: "Spécialiste IA", junior: "340 €", confirmed: "490 €", senior: "640 €" },
    { role: "Spécialiste données", junior: "340 €", confirmed: "490 €", senior: "640 €" },
    { role: "Ingénieur données", junior: "300 €", confirmed: "450 €", senior: "600 €" },
    { role: "Développeur web", junior: "260 €", confirmed: "375 €", senior: "490 €" },
    { role: "Ingénieur infrastructure", junior: "300 €", confirmed: "450 €", senior: "560 €" },
    { role: "Designer d'interfaces", junior: "225 €", confirmed: "340 €", senior: "450 €" },
  ],
  process: [
    { num: "01", title: "Partagez votre idée", text: "Un appel de 30 minutes pour comprendre votre vision, vos futurs utilisateurs et vos contraintes. On vous dit si c'est faisable et comment." },
    { num: "02", title: "On planifie ensemble", text: "On définit ensemble les fonctionnalités et le planning. Vous validez le périmètre, l'équipe et le budget avant de démarrer." },
    { num: "03", title: "Votre équipe est constituée", text: "On assemble les profils les mieux adaptés à votre projet. Vous les rencontrez et donnez votre accord avant le lancement." },
    { num: "04", title: "Développement par étapes", text: "Toutes les 1 à 2 semaines, vous recevez une nouvelle version fonctionnelle. Vous testez, vous faites vos retours, on ajuste." },
    { num: "05", title: "Livraison et mise en ligne", text: "Tests complets, mise en ligne, documentation. Votre produit est accessible et prêt à accueillir ses premiers utilisateurs." },
    { num: "06", title: "Support et évolutions", text: "L'équipe reste disponible après la livraison. Corrections, nouvelles fonctionnalités, montée en charge — on continue ensemble." },
  ],
  testimonials: [
    { quote: "Leur équipe a livré un système de recommandations intelligentes en 6 semaines. Compétents, réactifs, professionnels.", name: "Jean-Pierre K.", role: "CEO, Mediwyz", initials: "JK" },
  ],
  faq: [
    { q: "C'est quoi un « SaaS intelligent » ?", a: "C'est un logiciel en ligne (accessible depuis un navigateur) qui intègre de l'intelligence artificielle : par exemple un chatbot qui répond à vos clients, des recommandations personnalisées, ou de l'analyse automatique de documents. On construit aussi des logiciels classiques sans IA." },
    { q: "Comment garantissez-vous la qualité ?", a: "On recrute nos experts sur la base de mini-projets concrets, pas sur CV. Ils sont formés en continu et évalués par les clients après chaque projet." },
    { q: "Et si mon projet n'a pas besoin d'intelligence artificielle ?", a: "Aucun problème. Notre équipe couvre tout : application web, tableau de bord, design d'interfaces. L'IA est notre spécialité, mais pas notre seul savoir-faire." },
    { q: "Quel budget faut-il prévoir pour démarrer ?", a: "Notre offre Audit démarre à 1 500 €. Pour un premier produit complet, comptez à partir de 8 000 €. Le simulateur sur cette page vous donne une estimation personnalisée." },
    { q: "Quelle est votre structure juridique ?", a: "Wikolabs est une société de droit malgache (SARLU) immatriculée au registre du commerce, avec un compte bancaire international. Contrats professionnels, factures conformes, propriété intellectuelle transférée." },
    { q: "Dans quels fuseaux horaires travaillez-vous ?", a: "Notre équipe est basée à Madagascar (UTC+3). On s'adapte à vos horaires, que vous soyez en Europe, en Amérique du Nord ou en Afrique. Communication en français et en anglais." },
  ],
};

const DEFAULTS_EN: SiteContent = {
  hero: {
    tag: "From idea to product — in 4 to 8 weeks",
    title_line1: "We build your",
    title_line2: "intelligent",
    title_accent: "SaaS",
    subtitle:
      "A complete team — developers, AI specialists and designers — that turns your idea into a working product, ready for your first users.",
    stats: [
      { value: "4-8", label: "Weeks" },
      { value: "6", label: "Key roles" },
      { value: "FR/EN", label: "Bilingual" },
    ],
    marquee_items: [
      "SaaS Applications", "Smart Chatbots", "Dashboards", "Web Apps",
      "AI Automation", "User Interfaces", "Recommendations", "Cloud Hosting",
    ],
  },
  client_problems: [
    { title: "Finding the right team is hard", text: "Recruiting developers takes time, costs a lot, and there's no guarantee they'll understand your product vision." },
    { title: "Freelancers without structure", text: "Isolated freelancers: no delivery guarantee, no big-picture vision, zero continuity if one of them leaves." },
    { title: "Traditional agencies, unclear results", text: "Traditional agencies are often opaque: little visibility on progress, and a product that doesn't always match what you had in mind." },
  ],
  client_solutions: [
    { title: "A dedicated team for your project", text: "Professionals selected on real projects, who work exclusively on your product from start to finish." },
    { title: "A real product process", text: "A project manager, proven methods, regular demos. You see your product progress every week." },
    { title: "You stay in control", text: "Nothing starts without your approval. Every feature, every step is discussed and validated with you." },
  ],
  roles: [
    { emoji: "🧠", title: "AI specialist", desc: "Makes your product smart: chatbots that understand your customers, personalized recommendations, automatic document analysis.", tjm: "" },
    { emoji: "⚡", title: "Web developer", desc: "Builds your application: signup, dashboard, features — everything your users see and interact with.", tjm: "" },
    { emoji: "📊", title: "Data specialist", desc: "Turns your data into decisions: identifies trends, predicts behaviors, and creates clear visual reports.", tjm: "" },
    { emoji: "🔗", title: "Data engineer", desc: "Organizes the flow of your data so everything runs smoothly between your tools and your AI.", tjm: "" },
    { emoji: "🎨", title: "Interface designer", desc: "Designs your users' experience: clear, intuitive, and pleasant screens on desktop and mobile.", tjm: "" },
    { emoji: "🔧", title: "Infrastructure engineer", desc: "Keeps your application online 24/7, fast, secure, and able to handle high traffic.", tjm: "" },
  ],
  why_clients: [
    { icon: "🧠", title: "AI experts", text: "Our founding team comes from the AI world. We don't just develop — we integrate intelligence into your product to make it unique." },
    { icon: "🚀", title: "Idea to product in 4-8 weeks", text: "A proven process: you describe your need, we plan together, we develop in stages with regular demos." },
    { icon: "⚡", title: "One point of contact", text: "A dedicated project manager, weekly progress updates, real-time tracking. No need to manage multiple freelancers." },
    { icon: "🌍", title: "We adapt to your schedule", text: "Whether you're in Europe, North America or Africa — we organize our communication to make it seamless. French and English." },
    { icon: "🎯", title: "Focused on results", text: "We measure our success by yours: a product delivered on time, that works, and that your users love." },
    { icon: "🔄", title: "We stay after launch", text: "Fixes, new features, scaling — your team doesn't disappear once the project is done." },
  ],
  pricing: [
    { role: "AI specialist", junior: "340 €", confirmed: "490 €", senior: "640 €" },
    { role: "Data specialist", junior: "340 €", confirmed: "490 €", senior: "640 €" },
    { role: "Data engineer", junior: "300 €", confirmed: "450 €", senior: "600 €" },
    { role: "Web developer", junior: "260 €", confirmed: "375 €", senior: "490 €" },
    { role: "Infrastructure engineer", junior: "300 €", confirmed: "450 €", senior: "560 €" },
    { role: "Interface designer", junior: "225 €", confirmed: "340 €", senior: "450 €" },
  ],
  process: [
    { num: "01", title: "Share your idea", text: "A 30-minute call to understand your vision, your future users and your constraints. We tell you if it's doable and how." },
    { num: "02", title: "We plan together", text: "We define the features and timeline together. You approve the scope, team and budget before we start." },
    { num: "03", title: "Your team is assembled", text: "We bring together the profiles best suited to your project. You meet them and give your approval before we begin." },
    { num: "04", title: "Step-by-step development", text: "Every 1-2 weeks, you receive a new working version. You test, share feedback, and we adjust." },
    { num: "05", title: "Delivery and launch", text: "Full testing, launch, documentation. Your product is live and ready for its first users." },
    { num: "06", title: "Support and new features", text: "The team stays available after launch. Fixes, new features, handling more users — we continue together." },
  ],
  testimonials: [
    { quote: "Their team delivered a smart recommendation system in 6 weeks. Skilled, responsive, professional.", name: "Jean-Pierre K.", role: "CEO, Mediwyz", initials: "JK" },
  ],
  faq: [
    { q: "What is an 'intelligent SaaS'?", a: "It's online software (accessible from a browser) that includes artificial intelligence: for example a chatbot that answers your customers, personalized recommendations, or automatic document analysis. We also build classic software without AI." },
    { q: "How do you guarantee quality?", a: "We recruit our experts based on real mini-projects, not resumes. They receive ongoing training and are evaluated by clients after each project." },
    { q: "What if my project doesn't need AI?", a: "No problem at all. Our team covers everything: web application, dashboard, interface design. AI is our specialty, but not our only skill." },
    { q: "What budget should I plan for?", a: "Our Audit offer starts at €1,500. For a complete first product, plan from €8,000. The simulator on this page gives you a personalized estimate." },
    { q: "What is your legal structure?", a: "Wikolabs is a company registered under Malagasy law (SARLU), with an international bank account. Professional contracts, compliant invoices, intellectual property transferred to you." },
    { q: "What timezones do you work in?", a: "Our team is based in Madagascar (UTC+3). We adapt to your schedule, whether you're in Europe, North America or Africa. Communication in French and English." },
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
