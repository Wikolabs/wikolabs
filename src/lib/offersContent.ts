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

  /* ─────────────────────────────────────────────────
     0-1  Agent Sourcing de Leads
  ───────────────────────────────────────────────── */
  {
    slug: "agent-sourcing-leads",
    catSlug: "commercial-automation",
    fr: {
      metaTitle: "Agent Sourcing Leads B2B IA — Wikolabs",
      metaDesc: "Collecte automatisée de leads B2B qualifiés via Apollo, LinkedIn et annuaires. Synchronisation CRM en temps réel. Déployé en moins de 2 semaines.",
      tag: "Cycle Commercial & Marketing",
      title: "Agent Sourcing de Leads",
      subtitle: "Un flux constant de prospects qualifiés, sans effort humain",
      intro: "La prospection B2B repose encore sur des listes achetées ou des recherches LinkedIn manuelles — fastidieux, coûteux et vite obsolètes. L'Agent Sourcing de Leads automatise l'identification, la collecte et l'enrichissement de contacts B2B pertinents, en continu, selon vos critères de ciblage. Chaque lead est qualifié, enrichi et synchronisé dans votre CRM avant même que votre équipe commerciale commence sa journée.",
      problem: "Les équipes commerciales perdent 40 % de leur temps sur des tâches de prospection répétitives. Les listes de leads se dégradent vite (15 à 30 % d'obsolescence par an). Les outils de scraping manuels violent souvent les CGU et produisent des données non structurées difficiles à exploiter.",
      solution: "L'agent interroge Apollo, LinkedIn Sales Navigator et les annuaires sectoriels selon vos critères ICP (taille, secteur, poste, technologie utilisée). Il enrichit chaque contact (email vérifié, LinkedIn, téléphone), déduplique et synchronise automatiquement dans HubSpot, Salesforce ou GoHighLevel via API. Vous recevez chaque matin un rapport des leads ajoutés.",
      steps: [
        { n: 1, title: "Définition ICP", desc: "Atelier de 2h pour formaliser votre profil client idéal : secteur, taille d'entreprise, fonction cible, technologie utilisée, zone géographique." },
        { n: 2, title: "Configuration des sources", desc: "Connexion Apollo, LinkedIn, annuaires sectoriels. Mise en place des filtres de scraping et des règles de déduplication." },
        { n: 3, title: "Enrichissement & scoring", desc: "Vérification email, enrichissement LinkedIn, scoring de pertinence par rapport à votre ICP. Tri automatique : leads A/B/C." },
        { n: 4, title: "Sync CRM & rapport quotidien", desc: "Push automatique dans votre CRM avec les champs mappés. Rapport quotidien des nouveaux leads par segment et par score." },
      ],
      benefits: [
        { title: "200+ leads qualifiés/semaine", desc: "L'agent tourne 24h/24. Votre pipeline se remplit en permanence sans qu'un commercial touche à une feuille de calcul." },
        { title: "Données fraîches & vérifiées", desc: "Email vérifié, poste LinkedIn à jour, enrichissement automatique. Fini les bounces et les contacts obsolètes." },
        { title: "ROI en 30 jours", desc: "Coût de déploiement amorti dès le premier mois grâce à l'économie sur les outils d'enrichissement et le temps commercial libéré." },
      ],
      faq: [
        { q: "Est-ce conforme au RGPD ?", a: "Oui. L'agent collecte uniquement des données professionnelles publiquement accessibles. Le traitement est documenté et une procédure de désinscription est fournie." },
        { q: "Quels CRM sont supportés ?", a: "HubSpot, Salesforce, GoHighLevel, Pipedrive, Notion et tout CRM disposant d'une API REST. Intégration sur-mesure possible." },
        { q: "L'agent peut-il cibler plusieurs ICP simultanément ?", a: "Oui. Vous pouvez définir jusqu'à 5 segments ICP avec des critères différents, chacun alimentant une liste séparée dans votre CRM." },
        { q: "Combien coûtent les crédits Apollo ou LinkedIn ?", a: "Ces coûts sont à votre charge et dépendent de votre volume. Nous vous aidons à optimiser votre consommation pour rester dans votre budget." },
      ],
    },
    en: {
      metaTitle: "B2B Lead Sourcing AI Agent — Wikolabs",
      metaDesc: "Automated B2B lead collection via Apollo, LinkedIn and directories. Real-time CRM sync. Deployed in under 2 weeks.",
      tag: "Commercial Cycle & Marketing",
      title: "Lead Sourcing Agent",
      subtitle: "A constant flow of qualified prospects, with zero manual effort",
      intro: "B2B prospecting still relies on purchased lists or manual LinkedIn searches — tedious, expensive and quickly outdated. The Lead Sourcing Agent automates the identification, collection and enrichment of relevant B2B contacts, continuously, based on your targeting criteria. Every lead is qualified, enriched and synced into your CRM before your sales team even starts their day.",
      problem: "Sales teams waste 40% of their time on repetitive prospecting tasks. Lead lists degrade fast (15–30% obsolescence per year). Manual scraping tools often violate terms of service and produce unstructured data that's hard to act on.",
      solution: "The agent queries Apollo, LinkedIn Sales Navigator and industry directories based on your ICP criteria (size, sector, role, technology stack). It enriches each contact (verified email, LinkedIn, phone), deduplicates and automatically syncs to HubSpot, Salesforce or GoHighLevel via API. You receive a morning report of all new leads added.",
      steps: [
        { n: 1, title: "ICP definition", desc: "2-hour workshop to formalize your ideal customer profile: sector, company size, target role, technology stack, geography." },
        { n: 2, title: "Source configuration", desc: "Connect Apollo, LinkedIn, industry directories. Set up scraping filters and deduplication rules." },
        { n: 3, title: "Enrichment & scoring", desc: "Email verification, LinkedIn enrichment, relevance scoring against your ICP. Automatic sorting: A/B/C leads." },
        { n: 4, title: "CRM sync & daily report", desc: "Automatic push to your CRM with mapped fields. Daily report of new leads by segment and score." },
      ],
      benefits: [
        { title: "200+ qualified leads/week", desc: "The agent runs 24/7. Your pipeline fills continuously without a sales rep touching a spreadsheet." },
        { title: "Fresh & verified data", desc: "Verified email, up-to-date LinkedIn role, automatic enrichment. No more bounces or stale contacts." },
        { title: "ROI in 30 days", desc: "Deployment cost recovered in the first month through savings on enrichment tools and freed sales time." },
      ],
      faq: [
        { q: "Is this GDPR compliant?", a: "Yes. The agent only collects publicly accessible professional data. Processing is documented and an opt-out procedure is provided." },
        { q: "Which CRMs are supported?", a: "HubSpot, Salesforce, GoHighLevel, Pipedrive, Notion and any CRM with a REST API. Custom integration available." },
        { q: "Can the agent target multiple ICPs simultaneously?", a: "Yes. You can define up to 5 ICP segments with different criteria, each feeding a separate list in your CRM." },
        { q: "What about Apollo or LinkedIn credit costs?", a: "Those costs are yours and depend on your volume. We help you optimize consumption to stay within your budget." },
      ],
    },
  },
];
