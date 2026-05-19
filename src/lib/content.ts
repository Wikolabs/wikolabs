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
    tag: "Intelligence Artificielle & Data pour Dirigeants d'Entreprise",
    title_line1: "Transformez votre entreprise",
    title_line2: "avec",
    title_accent: "l'Intelligence Artificielle",
    subtitle:
      "Wikolabs déploie des agents IA, des systèmes de données et des automatisations qui produisent des résultats concrets et mesurables pour votre organisation — sans jargon technique, sans délai inutile.",
    stats: [
      { value: "5+", label: "Domaines d'excellence" },
      { value: "100%", label: "Full remote & suivi" },
      { value: "FR/EN", label: "Bilingue" },
    ],
    marquee_items: [
      "Agents IA Agentiques",
      "Data Engineering",
      "Automatisation Intelligente",
      "Développement Fullstack",
      "Business Intelligence",
      "Cycle Commercial IA",
      "Recherche Sémantique",
      "MLOps & Fine-tuning",
      "Traitement Documentaire",
      "CRM Multi-agent",
    ],
  },
  client_problems: [
    {
      title: "Vos données dorment sans produire de valeur",
      text: "Commandes, CRM, emails, documents — des mines d'or que votre organisation n'exploite pas encore, faute d'outils adaptés.",
    },
    {
      title: "Votre cycle commercial est manuel et lent",
      text: "Prospection, suivi, qualification, relances — des dizaines d'heures par semaine absorbées par des tâches répétitives que l'IA peut prendre en charge.",
    },
    {
      title: "Vos clients attendent, votre SAV déborde",
      text: "Statut de commande, demandes de retour, questions répétitives — votre équipe s'épuise sur des réponses que votre site peut automatiser.",
    },
  ],
  client_solutions: [
    {
      title: "Des agents IA qui travaillent 24h/24 pour vous",
      text: "Qualification de leads, réponses clients, extraction documentaire, reporting — des workflows intelligents qui s'occupent de l'opérationnel pendant que vous pilotez.",
    },
    {
      title: "Des données qui se transforment en décisions",
      text: "Tableaux de bord en langage naturel, prévisions de revenus, détection d'anomalies — votre performance devient lisible et actionnable à tout moment.",
    },
    {
      title: "Un cycle commercial entièrement orchestré",
      text: "De la génération de leads à la signature du contrat, en passant par la qualification BANT et la prise de rendez-vous — chaque étape automatisée, chaque contact personnalisé.",
    },
  ],
  roles: [
    {
      emoji: "🤖",
      title: "Ingénieur IA Agentique",
      desc: "Conçoit et déploie des agents IA autonomes avec mémoire, compétences et outils : agents commerciaux, agents support, agents de veille.",
      tjm: "",
    },
    {
      emoji: "📊",
      title: "Data Engineer & Architecte",
      desc: "Construit les pipelines de données temps réel, les entrepôts cloud (Snowflake, BigQuery) et les architectures CDC pour alimenter vos agents et tableaux de bord.",
      tjm: "",
    },
    {
      emoji: "🧠",
      title: "Spécialiste ML & LLM",
      desc: "Fine-tune, entraîne et déploie des modèles sur mesure (RLHF, RAG, embeddings multimodaux) pour votre domaine spécifique.",
      tjm: "",
    },
    {
      emoji: "⚡",
      title: "Développeur Fullstack",
      desc: "Développe les interfaces, API et intégrations qui donnent vie à vos applications — Next.js, FastAPI, NestJS — avec une qualité de production.",
      tjm: "",
    },
    {
      emoji: "🔗",
      title: "Spécialiste Automatisation",
      desc: "Orchestre vos workflows avec n8n, Zapier, Make et des pipelines LangGraph pour connecter vos outils et éliminer les tâches répétitives.",
      tjm: "",
    },
    {
      emoji: "☁️",
      title: "Ingénieur MLOps & Cloud",
      desc: "Déploie, monitore et maintient vos modèles en production sur GCP, AWS ou Azure avec des pipelines CI/CD et une observabilité complète.",
      tjm: "",
    },
  ],
  why_clients: [
    {
      icon: "🎯",
      title: "Focalisés sur vos résultats business",
      text: "Nous ne livrons pas du code — nous livrons des résultats. Chaque solution est conçue pour produire un impact mesurable sur votre chiffre d'affaires ou votre efficacité opérationnelle.",
    },
    {
      icon: "🌐",
      title: "Full remote avec suivi structuré",
      text: "Daily standup, point hebdomadaire, reporting en temps réel. Notre méthode de travail à distance est aussi rigoureuse qu'une équipe en présentiel — Agile, Scrum ou Waterfall.",
    },
    {
      icon: "⚡",
      title: "Rapidité d'exécution sans compromis qualité",
      text: "Sprints bi-hebdomadaires, démos régulières, livraisons continues. Du premier prototype au déploiement production, nous avançons vite et bien.",
    },
    {
      icon: "🔒",
      title: "Sécurité et conformité intégrées",
      text: "RGPD, confidentialité des données, audit trail complet. Vos données et celles de vos clients sont protégées à chaque étape du développement.",
    },
    {
      icon: "🤝",
      title: "Partenaire à long terme, pas prestataire ponctuel",
      text: "Corrections, nouvelles fonctionnalités, scaling, formation de vos équipes — nous restons disponibles après la livraison pour assurer le succès de votre investissement.",
    },
    {
      icon: "🌍",
      title: "Bilingue et international",
      text: "Équipe maîtrisant le français et l'anglais, adaptée à vos fuseaux horaires (Europe, Amérique du Nord, Afrique). Communication fluide, contrats professionnels.",
    },
  ],
  pricing: [],
  process: [
    {
      num: "01",
      title: "Échange de découverte (30 min)",
      text: "Un appel pour comprendre votre contexte, vos enjeux et vos objectifs. Nous identifions ensemble où l'IA peut créer le plus de valeur pour vous.",
    },
    {
      num: "02",
      title: "Cadrage & proposition",
      text: "Nous structurons use cases, user stories et règles métier. Vous recevez une proposition claire avec périmètre, planning et jalons de livraison.",
    },
    {
      num: "03",
      title: "Kick-off & accès",
      text: "Présentation de l'équipe dédiée, validation des outils de collaboration et des accès. Le projet démarre dans un environnement structuré et sécurisé.",
    },
    {
      num: "04",
      title: "Sprints & démos bi-hebdomadaires",
      text: "Daily standup, développement en sprints de 1 à 2 semaines, démo de fin de sprint. Vous validez chaque livrable avant de passer à la suite.",
    },
    {
      num: "05",
      title: "Recette, tests & mise en production",
      text: "Tests unitaires, UAT (User Acceptance Testing), corrections et déploiement production sur votre infrastructure ou la nôtre.",
    },
    {
      num: "06",
      title: "Support, optimisation & évolutions",
      text: "Suivi post-livraison, monitoring des performances, nouvelles fonctionnalités et scaling. Point hebdomadaire pour piloter la roadmap ensemble.",
    },
  ],
  testimonials: [
    {
      quote: "L'équipe Wikolabs a livré un système de recommandations multimodal en production en 6 semaines. Compétents, réactifs, et surtout — ils comprennent les enjeux business, pas seulement la technique.",
      name: "Jean-Pierre K.",
      role: "CEO, Mediwyz",
      initials: "JK",
    },
    {
      quote: "Notre agent SAV gère maintenant 80% des questions clients automatiquement. L'impact sur notre équipe support a été immédiat et mesurable.",
      name: "Sophie M.",
      role: "Directrice E-commerce",
      initials: "SM",
    },
  ],
  faq: [
    {
      q: "À qui s'adressent vos services ?",
      a: "Nous travaillons avec des dirigeants d'entreprise — CEO, COO, directeurs commerciaux — qui veulent déployer l'intelligence artificielle pour améliorer leur performance sans avoir à gérer la complexité technique. Nos clients vont de la PME au grand groupe.",
    },
    {
      q: "Comment se déroule un projet type ?",
      a: "Tout commence par un appel de découverte (30 min). Nous cadreons ensuite votre projet avec vous (use cases, règles métier, planning). Puis nous livrons par sprints avec daily standup et point hebdomadaire, jusqu'à la mise en production et le suivi.",
    },
    {
      q: "Vous travaillez en full remote — comment assurez-vous le suivi ?",
      a: "Notre process est structuré : daily standup, point hebdomadaire, démos de sprint, reporting en temps réel. Nous utilisons Slack, Notion, Jira et les outils de votre choix. La distance ne change pas la rigueur.",
    },
    {
      q: "Quelles méthodologies utilisez-vous ?",
      a: "Agile Scrum par défaut (sprints de 1-2 semaines, backlog priorisé, démos régulières). Nous adaptons selon vos contraintes — Waterfall pour les projets réglementés, Kanban pour les évolutions continues.",
    },
    {
      q: "Mes données sont-elles en sécurité ?",
      a: "Oui. Nous appliquons les standards RGPD : chiffrement des données, accès restreint, audit trail complet. Nous signons des accords de confidentialité et pouvons héberger sur votre infrastructure si nécessaire.",
    },
    {
      q: "Comment nous contacter ?",
      a: "Par email à team@wikolabs.com ou contact@wikolabs.com, par téléphone au +261 38 66 261 00, ou en réservant directement un créneau via notre calendrier en ligne.",
    },
  ],
};

const DEFAULTS_EN: SiteContent = {
  hero: {
    tag: "Artificial Intelligence & Data Services for Business Leaders",
    title_line1: "Transform your business",
    title_line2: "with",
    title_accent: "Artificial Intelligence",
    subtitle:
      "Wikolabs deploys AI agents, data systems, and automation that produce concrete, measurable results for your organization — no technical jargon, no unnecessary delays.",
    stats: [
      { value: "5+", label: "Areas of excellence" },
      { value: "100%", label: "Remote with oversight" },
      { value: "FR/EN", label: "Bilingual" },
    ],
    marquee_items: [
      "Agentic AI",
      "Data Engineering",
      "Intelligent Automation",
      "Fullstack Development",
      "Business Intelligence",
      "AI Sales Cycle",
      "Semantic Search",
      "MLOps & Fine-tuning",
      "Document Processing",
      "Multi-agent CRM",
    ],
  },
  client_problems: [
    {
      title: "Your data sits idle without producing value",
      text: "Orders, CRM, emails, documents — gold mines your organization isn't yet exploiting, for lack of the right tools.",
    },
    {
      title: "Your sales cycle is manual and slow",
      text: "Prospecting, follow-up, qualification, reminders — dozens of hours per week absorbed by repetitive tasks AI can handle.",
    },
    {
      title: "Your customers wait, your support team is overwhelmed",
      text: "Order status, return requests, repeat questions — your team burns out on answers your platform can automate.",
    },
  ],
  client_solutions: [
    {
      title: "AI agents working 24/7 for you",
      text: "Lead qualification, customer responses, document extraction, reporting — intelligent workflows handling operations while you steer the ship.",
    },
    {
      title: "Data that transforms into decisions",
      text: "Natural language dashboards, revenue forecasting, anomaly detection — your performance becomes readable and actionable at any time.",
    },
    {
      title: "A fully orchestrated sales cycle",
      text: "From lead generation to signed contract, through BANT qualification and appointment setting — every step automated, every contact personalized.",
    },
  ],
  roles: [
    {
      emoji: "🤖",
      title: "Agentic AI Engineer",
      desc: "Designs and deploys autonomous AI agents with memory, skills, and tools: sales agents, support agents, market intelligence agents.",
      tjm: "",
    },
    {
      emoji: "📊",
      title: "Data Engineer & Architect",
      desc: "Builds real-time data pipelines, cloud warehouses (Snowflake, BigQuery), and CDC architectures to power your agents and dashboards.",
      tjm: "",
    },
    {
      emoji: "🧠",
      title: "ML & LLM Specialist",
      desc: "Fine-tunes, trains, and deploys custom models (RLHF, RAG, multimodal embeddings) tailored to your specific domain.",
      tjm: "",
    },
    {
      emoji: "⚡",
      title: "Fullstack Developer",
      desc: "Builds interfaces, APIs, and integrations that bring your applications to life — Next.js, FastAPI, NestJS — at production quality.",
      tjm: "",
    },
    {
      emoji: "🔗",
      title: "Automation Specialist",
      desc: "Orchestrates your workflows with n8n, Zapier, Make, and LangGraph pipelines to connect your tools and eliminate repetitive tasks.",
      tjm: "",
    },
    {
      emoji: "☁️",
      title: "MLOps & Cloud Engineer",
      desc: "Deploys, monitors, and maintains your models in production on GCP, AWS, or Azure with CI/CD pipelines and full observability.",
      tjm: "",
    },
  ],
  why_clients: [
    {
      icon: "🎯",
      title: "Focused on your business results",
      text: "We don't deliver code — we deliver results. Every solution is designed to produce measurable impact on your revenue or operational efficiency.",
    },
    {
      icon: "🌐",
      title: "Full remote with structured oversight",
      text: "Daily standup, weekly review, real-time reporting. Our remote work method is as rigorous as an in-house team — Agile, Scrum, or Waterfall.",
    },
    {
      icon: "⚡",
      title: "Speed without sacrificing quality",
      text: "Bi-weekly sprints, regular demos, continuous delivery. From first prototype to production deployment, we move fast and right.",
    },
    {
      icon: "🔒",
      title: "Security and compliance built in",
      text: "GDPR, data privacy, full audit trail. Your data and your customers' data are protected at every stage of development.",
    },
    {
      icon: "🤝",
      title: "Long-term partner, not a one-off vendor",
      text: "Fixes, new features, scaling, team training — we stay available after delivery to ensure the success of your investment.",
    },
    {
      icon: "🌍",
      title: "Bilingual and international",
      text: "Team fluent in French and English, adapted to your timezones (Europe, North America, Africa). Seamless communication, professional contracts.",
    },
  ],
  pricing: [],
  process: [
    {
      num: "01",
      title: "Discovery call (30 min)",
      text: "A call to understand your context, challenges, and goals. We identify together where AI can create the most value for you.",
    },
    {
      num: "02",
      title: "Scoping & proposal",
      text: "We structure use cases, user stories, and business rules with you. You receive a clear proposal with scope, timeline, and delivery milestones.",
    },
    {
      num: "03",
      title: "Kick-off & access",
      text: "Team introduction, collaboration tool setup, and access provisioning. The project starts in a structured and secure environment.",
    },
    {
      num: "04",
      title: "Sprints & bi-weekly demos",
      text: "Daily standup, 1-2 week sprints, end-of-sprint demo. You validate every deliverable before moving to the next phase.",
    },
    {
      num: "05",
      title: "Testing, QA & production launch",
      text: "Unit tests, UAT (User Acceptance Testing), bug fixes, and production deployment on your infrastructure or ours.",
    },
    {
      num: "06",
      title: "Support, optimization & roadmap",
      text: "Post-delivery monitoring, performance tracking, new features, and scaling. Weekly review to steer the roadmap together.",
    },
  ],
  testimonials: [
    {
      quote: "The Wikolabs team delivered a multimodal recommendation system in production in 6 weeks. Skilled, responsive, and above all — they understand business challenges, not just the technology.",
      name: "Jean-Pierre K.",
      role: "CEO, Mediwyz",
      initials: "JK",
    },
    {
      quote: "Our customer service agent now handles 80% of customer inquiries automatically. The impact on our support team was immediate and measurable.",
      name: "Sophie M.",
      role: "E-commerce Director",
      initials: "SM",
    },
  ],
  faq: [
    {
      q: "Who are your services for?",
      a: "We work with business leaders — CEOs, COOs, commercial directors — who want to deploy artificial intelligence to improve their performance without managing the technical complexity. Our clients range from SMBs to large enterprises.",
    },
    {
      q: "How does a typical project work?",
      a: "It starts with a discovery call (30 min). We then scope your project together (use cases, business rules, timeline). We deliver in sprints with daily standups and weekly reviews, through to production and ongoing support.",
    },
    {
      q: "You work fully remote — how do you ensure follow-up?",
      a: "Our process is structured: daily standup, weekly review, sprint demos, real-time reporting. We use Slack, Notion, Jira, and whatever tools you prefer. Distance doesn't change rigor.",
    },
    {
      q: "What methodologies do you use?",
      a: "Agile Scrum by default (1-2 week sprints, prioritized backlog, regular demos). We adapt based on your constraints — Waterfall for regulated projects, Kanban for continuous improvements.",
    },
    {
      q: "Is my data secure?",
      a: "Yes. We apply GDPR standards: data encryption, restricted access, full audit trail. We sign NDAs and can host on your infrastructure if needed.",
    },
    {
      q: "How can we get in touch?",
      a: "By email at team@wikolabs.com or contact@wikolabs.com, by phone at +261 38 66 261 00, or by booking a slot directly via our online calendar.",
    },
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
        const cleanKey = suffix ? row.section_key.replace(suffix, "") : row.section_key;
        (dbContent as Record<string, unknown>)[cleanKey] = JSON.parse(row.content_json);
      } catch { /* skip malformed */ }
    }

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
