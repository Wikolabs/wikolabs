// This file is populated by the content generation script.
// Types are defined here; content entries are appended below.

export interface OfferLocale {
  metaTitle: string;
  metaDesc: string;
  tag: string;
  title: string;
  subtitle: string;
  intro: string;
  problem: string;
  solution: string;
  steps: { n: number; title: string; desc: string }[];
  benefits: { title: string; desc: string }[];
  faq: { q: string; a: string }[];
}

export interface OfferPageContent {
  slug: string;
  catSlug: string;
  fr: OfferLocale;
  en: OfferLocale;
}

export const OFFERS_CONTENT: OfferPageContent[] = [
  /* ─────────────────────────────────────────────────
     0-0  Agent Veille Marché
  ───────────────────────────────────────────────── */
  {
    slug: "agent-veille-marche",
    catSlug: "commercial-automation",
    fr: {
      metaTitle: "Agent Veille Marché IA — Wikolabs",
      metaDesc: "Automatisez votre veille concurrentielle avec un agent IA. Scraping quotidien, résumé LLM livré dans Slack ou Notion. Déployé en 5 à 10 jours.",
      tag: "Cycle Commercial & Marketing",
      title: "Agent Veille Marché",
      subtitle: "Restez en avance sur votre marché sans lever le petit doigt",
      intro: "Votre équipe passe des heures chaque semaine à surveiller les concurrents, lire des newsletters et compiler des rapports. Résultat : des insights qui arrivent trop tard, des opportunités manquées et une équipe commerciale qui navigue à vue. L'Agent Veille Marché automatise intégralement ce processus — scraping ciblé chaque nuit, synthèse LLM structurée, livraison automatique dans vos outils au réveil.",
      problem: "La veille manuelle est chronophage et incomplète. Les commerciaux lisent les actualités quand ils ont le temps, pas quand c'est critique. Les alertes Google ne suffisent plus face à la vitesse des marchés B2B. Et sans synthèse intelligente, les données brutes restent inexploitées.",
      solution: "Un agent autonome scrape chaque nuit vos sources prédéfinies (sites concurrents, LinkedIn, Product Hunt, Google News, forums spécialisés), génère un résumé structuré en langage naturel et le pousse dans Slack, Notion ou votre CRM. Chaque signal est classifié : opportunité, menace, tendance ou mouvement de marché.",
      steps: [
        { n: 1, title: "Audit des sources", desc: "Identification de vos 20 à 50 sources prioritaires : sites concurrents, comptes LinkedIn, flux RSS, forums, Product Hunt, places de marché." },
        { n: 2, title: "Configuration du pipeline", desc: "Mise en place du crawler, des filtres de pertinence, des prompts LLM de synthèse et des règles de classification par type de signal." },
        { n: 3, title: "Connexion à vos outils", desc: "Intégration Slack, Notion, ou webhook vers votre CRM. Chaque résumé arrive au bon endroit, formaté pour être lu en 90 secondes." },
        { n: 4, title: "Monitoring & ajustements", desc: "Tableau de bord des signaux captés, score de pertinence par source et boucle d'ajustement hebdomadaire pour améliorer la précision." },
      ],
      benefits: [
        { title: "10h/semaine récupérées", desc: "Votre équipe arrête de compiler des rapports manuellement. L'agent fait la veille à 2h du matin pendant que vous dormez." },
        { title: "Zéro opportunité manquée", desc: "Chaque mouvement concurrent ou signal marché est capté, classifié et livré avant que votre équipe arrive le matin." },
        { title: "Insights actionnables", desc: "Pas de données brutes : synthèses en langage naturel avec contexte, source et niveau de priorité pour décision immédiate." },
      ],
      faq: [
        { q: "Quelles sources peuvent être monitorées ?", a: "Tout site web public, flux RSS, LinkedIn public, Google News, Product Hunt, Capterra, G2, places de marché Amazon/Shopify, forums Reddit ou spécialisés." },
        { q: "L'agent peut-il accéder aux contenus derrière login ?", a: "Non pour des raisons éthiques et légales. L'agent se concentre sur les données publiques. Pour les données propriétaires, nous utilisons les APIs officielles." },
        { q: "Quel délai de déploiement ?", a: "Entre 5 et 10 jours ouvrés selon le nombre de sources et intégrations. Première livraison de rapport dès le lendemain du go-live." },
        { q: "Peut-on personnaliser les rubriques du résumé ?", a: "Absolument. Le format du rapport (sections, ton, longueur) est entièrement configurable via vos instructions dans Notion ou un fichier de configuration dédié." },
      ],
    },
    en: {
      metaTitle: "AI Market Intelligence Agent — Wikolabs",
      metaDesc: "Automate competitive intelligence with an AI agent. Daily scraping, LLM summary in Slack or Notion. Deployed in 5–10 days.",
      tag: "Commercial Cycle & Marketing",
      title: "Market Intelligence Agent",
      subtitle: "Stay ahead of your market without lifting a finger",
      intro: "Your team spends hours each week monitoring competitors, reading newsletters and compiling reports. The result: insights that arrive too late, missed opportunities and a sales team navigating blind. The Market Intelligence Agent fully automates this process — targeted scraping every night, structured LLM synthesis, automatic delivery into your tools by morning.",
      problem: "Manual competitive intelligence is time-consuming and incomplete. Sales reps read the news when they have time, not when it matters. Google Alerts no longer suffice at the pace of B2B markets. And without intelligent synthesis, raw data stays unexploited.",
      solution: "An autonomous agent scrapes your predefined sources every night (competitor sites, LinkedIn, Product Hunt, Google News, specialist forums), generates a structured natural-language summary and pushes it to Slack, Notion or your CRM. Each signal is classified: opportunity, threat, trend or market move.",
      steps: [
        { n: 1, title: "Source audit", desc: "Identification of your 20–50 priority sources: competitor sites, LinkedIn accounts, RSS feeds, forums, Product Hunt, marketplaces." },
        { n: 2, title: "Pipeline configuration", desc: "Crawler setup, relevance filters, LLM synthesis prompts and classification rules by signal type." },
        { n: 3, title: "Tool integration", desc: "Slack, Notion or webhook to your CRM. Each summary arrives in the right place, formatted to read in 90 seconds." },
        { n: 4, title: "Monitoring & tuning", desc: "Dashboard of captured signals, relevance score per source and weekly adjustment loop to improve precision over time." },
      ],
      benefits: [
        { title: "10h/week recovered", desc: "Your team stops compiling reports manually. The agent does the research at 2am while you sleep." },
        { title: "Zero missed opportunities", desc: "Every competitor move or market signal is captured, classified and delivered before your team arrives in the morning." },
        { title: "Actionable insights", desc: "No raw data: natural-language summaries with context, source and priority level for immediate decision-making." },
      ],
      faq: [
        { q: "What sources can be monitored?", a: "Any public website, RSS feed, public LinkedIn, Google News, Product Hunt, Capterra, G2, Amazon/Shopify marketplaces, Reddit or specialist forums." },
        { q: "Can the agent access login-protected content?", a: "No, for ethical and legal reasons. The agent focuses on public data. For proprietary data, we use official APIs." },
        { q: "What is the deployment timeline?", a: "5–10 business days depending on the number of sources and integrations. First report delivered the day after go-live." },
        { q: "Can we customize the summary sections?", a: "Absolutely. The report format (sections, tone, length) is fully configurable via your instructions in Notion or a dedicated config file." },
      ],
    },
  },
];
