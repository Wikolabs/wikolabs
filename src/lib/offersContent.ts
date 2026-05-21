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

  /* ─────────────────────────────────────────────────
     0-2  Agent Outreach Multicanal
  ───────────────────────────────────────────────── */
  {
    slug: "agent-outreach-multicanal",
    catSlug: "commercial-automation",
    fr: {
      metaTitle: "Agent Outreach Multicanal IA — Wikolabs",
      metaDesc: "Séquences email + LinkedIn + appel personnalisées par LLM, tracking et relances automatiques. Taux de réponse multiplié par 3. Déployé en 10 jours.",
      tag: "Cycle Commercial & Marketing",
      title: "Agent Outreach Multicanal",
      subtitle: "Des séquences de prospection personnalisées à grande échelle",
      intro: "La prospection B2B moderne exige de la personnalisation à grande échelle — impossible manuellement au-delà de 20 prospects par jour. L'Agent Outreach Multicanal génère des séquences email + LinkedIn + appel hyper-personnalisées pour chaque prospect, automatise les relances et suit les ouvertures, clics et réponses en temps réel. Vos commerciaux n'interviennent que sur les prospects chauds.",
      problem: "Les templates génériques ont des taux de réponse inférieurs à 2 %. La personnalisation manuelle est épuisante et ne passe pas à l'échelle. Les outils d'emailing de masse sont détectés comme spam. Et sans orchestration multicanal cohérente, vos efforts se dispersent.",
      solution: "Pour chaque prospect de votre liste, l'agent rédige un email d'accroche personnalisé (basé sur le site web, le LinkedIn et les actualités récentes du prospect), programme une séquence sur 7 à 14 jours (email J0, relance J3, invitation LinkedIn J5, deuxième email J9), suit les ouvertures et déclenche une alerte commerciale dès qu'un prospect répond ou clique.",
      steps: [
        { n: 1, title: "Import des leads & enrichissement", desc: "Import depuis votre CRM ou fichier CSV. Enrichissement automatique : site web, LinkedIn, actualités récentes, tech stack." },
        { n: 2, title: "Génération des séquences LLM", desc: "Pour chaque prospect : email J0 personnalisé, relances J3/J9, invitation LinkedIn J5. Ton et angle adaptés à votre secteur." },
        { n: 3, title: "Envoi & tracking", desc: "Envoi depuis votre domaine (warm-up inclus), tracking des ouvertures et clics, tableau de bord des performances en temps réel." },
        { n: 4, title: "Qualification & handoff", desc: "Dès qu'un prospect répond, l'agent classe la réponse (intéressé / pas maintenant / refus) et transfère au commercial avec le contexte complet." },
      ],
      benefits: [
        { title: "Taux de réponse x3", desc: "Les messages personnalisés par LLM obtiennent en moyenne 3 fois plus de réponses que les templates génériques." },
        { title: "100% du temps commercial sur les chauds", desc: "Vos commerciaux ne contactent plus à froid. Ils reçoivent des leads qui ont déjà manifesté de l'intérêt." },
        { title: "Délivrabilité préservée", desc: "Warm-up de domaine, rotation d'expéditeurs, respect des quotas. Vos emails arrivent en boîte de réception, pas en spam." },
      ],
      faq: [
        { q: "Quel outil d'emailing est utilisé ?", a: "Nous intégrons Instantly, Lemlist, Smartlead ou votre outil existant. La plateforme est choisie selon votre volume et votre stack." },
        { q: "L'agent peut-il envoyer des InMails LinkedIn ?", a: "Via LinkedIn Sales Navigator API ou des connecteurs conformes aux CGU. Les invitations de connexion sont automatisées, pas les InMails directs." },
        { q: "Comment éviter d'être détecté comme spam ?", a: "Warm-up progressif, volumes journaliers respectés, rotation d'adresses, variation des templates et suivi des métriques de délivrabilité." },
        { q: "Peut-on personnaliser le ton selon le segment ?", a: "Oui. Vous définissez des personas (ex : CEO PME / DSI grand compte) avec un ton et des arguments différents pour chaque segment." },
      ],
    },
    en: {
      metaTitle: "AI Multichannel Outreach Agent — Wikolabs",
      metaDesc: "LLM-personalized email + LinkedIn + call sequences with tracking and automated follow-ups. Response rate tripled. Deployed in 10 days.",
      tag: "Commercial Cycle & Marketing",
      title: "Multichannel Outreach Agent",
      subtitle: "Hyper-personalized prospecting sequences at scale",
      intro: "Modern B2B prospecting demands personalization at scale — impossible manually beyond 20 prospects per day. The Multichannel Outreach Agent generates hyper-personalized email + LinkedIn + call sequences for each prospect, automates follow-ups and tracks opens, clicks and replies in real time. Your sales reps only engage with warm leads.",
      problem: "Generic templates get response rates below 2%. Manual personalization is exhausting and doesn't scale. Mass emailing tools get flagged as spam. And without coherent multichannel orchestration, your prospecting efforts scatter.",
      solution: "For each prospect on your list, the agent writes a personalized opening email (based on their website, LinkedIn and recent news), schedules a 7–14 day sequence (email D0, follow-up D3, LinkedIn invite D5, second email D9), tracks opens and triggers a sales alert the moment a prospect replies or clicks.",
      steps: [
        { n: 1, title: "Lead import & enrichment", desc: "Import from your CRM or CSV. Automatic enrichment: website, LinkedIn, recent news, tech stack." },
        { n: 2, title: "LLM sequence generation", desc: "Per prospect: personalized D0 email, D3/D9 follow-ups, D5 LinkedIn invite. Tone and angle adapted to your sector." },
        { n: 3, title: "Send & track", desc: "Sent from your domain (warm-up included), open and click tracking, real-time performance dashboard." },
        { n: 4, title: "Qualification & handoff", desc: "When a prospect replies, the agent classifies the response (interested / not now / no) and hands off to sales with full context." },
      ],
      benefits: [
        { title: "Response rate x3", desc: "LLM-personalized messages average 3× more replies than generic templates." },
        { title: "100% of sales time on warm leads", desc: "Your sales reps no longer cold contact. They receive leads who have already shown interest." },
        { title: "Deliverability protected", desc: "Domain warm-up, sender rotation, quota respect. Your emails land in the inbox, not spam." },
      ],
      faq: [
        { q: "Which email tool is used?", a: "We integrate Instantly, Lemlist, Smartlead or your existing tool. Platform chosen based on your volume and stack." },
        { q: "Can the agent send LinkedIn InMails?", a: "Via LinkedIn Sales Navigator API or ToS-compliant connectors. Connection invitations are automated; direct InMails are not." },
        { q: "How do you avoid spam detection?", a: "Progressive warm-up, daily volume limits, address rotation, template variation and deliverability metric monitoring." },
        { q: "Can tone be customized per segment?", a: "Yes. You define personas (e.g. SMB CEO / Enterprise CTO) with different tone and arguments per segment." },
      ],
    },
  },

  /* ─────────────────────────────────────────────────
     0-3  Agent Qualification BANT
  ───────────────────────────────────────────────── */
  {
    slug: "agent-qualification-bant",
    catSlug: "commercial-automation",
    fr: {
      metaTitle: "Agent Qualification BANT IA — Wikolabs",
      metaDesc: "Analyse automatique des réponses prospects, score BANT mis à jour, routage HOT vers setter et COLD vers nurturing. Déployez en 1 semaine.",
      tag: "Cycle Commercial & Marketing",
      title: "Agent Qualification BANT",
      subtitle: "Triez vos leads automatiquement et focalisez l'effort commercial sur les bons",
      intro: "Dans un pipeline B2B, 80 % des leads ne sont pas prêts à acheter immédiatement. Sans qualification rigoureuse, vos commerciaux perdent du temps sur des prospects froids pendant que les chauds refroidissent. L'Agent Qualification BANT analyse chaque interaction (email, formulaire, appel transcrit), met à jour le score BANT en temps réel et route automatiquement le lead vers la bonne séquence.",
      problem: "La qualification manuelle est subjective et chronophage. Les commerciaux surfacturent les leads qu'ils ont eux-mêmes sourcés. Sans score objectif, les leads chauds et froids cohabitent dans le même pipeline — et les froids noient les chauds.",
      solution: "À chaque interaction prospect (réponse email, remplissage de formulaire, transcription d'appel), l'agent extrait les signaux BANT (Budget confirmé ? Autorité identifiée ? Need explicite ? Timing précisé ?), met à jour le score dans le CRM et déclenche le workflow approprié : HOT → notification setter, COLD → séquence nurturing, DISQUALIFIED → archivage.",
      steps: [
        { n: 1, title: "Définition des critères BANT", desc: "Atelier pour définir vos seuils de qualification : quel budget minimal, quels signaux d'autorité, quels indicateurs de besoin et timing acceptables." },
        { n: 2, title: "Connexion aux sources d'interaction", desc: "Intégration des emails entrants, formulaires, transcriptions d'appels (Whisper) et réponses LinkedIn dans le pipeline de qualification." },
        { n: 3, title: "Scoring & mise à jour CRM", desc: "Pour chaque interaction, extraction automatique des signaux BANT et mise à jour du score dans votre CRM (HubSpot, Salesforce, GoHighLevel)." },
        { n: 4, title: "Routage & déclenchement", desc: "Notification au setter si score HOT, entrée en nurturing si COLD, archivage si DISQUALIFIED. Chaque action est loggée et traçable." },
      ],
      benefits: [
        { title: "Pipeline propre & priorisé", desc: "Votre CRM ne contient que des leads avec un statut objectif. Fini les deals dormants qui faussent vos prévisions." },
        { title: "Commerciaux focalisés sur les HOT", desc: "Zéro temps perdu sur des prospects non qualifiés. Le setter reçoit uniquement les leads qui ont confirmé budget et besoin." },
        { title: "Nurturing automatique des COLD", desc: "Les leads pas encore prêts entrent en séquence d'éducation automatique. Ils reviennent qualifiés — sans effort humain." },
      ],
      faq: [
        { q: "Le scoring BANT est-il personnalisable ?", a: "Oui. Vous définissez les poids de chaque critère et les seuils de passage HOT/COLD/DISQUALIFIED selon votre cycle de vente." },
        { q: "L'agent peut-il analyser des transcriptions d'appels ?", a: "Oui. Les appels sont transcrits via Whisper puis analysés par LLM pour extraire les signaux BANT implicites et explicites." },
        { q: "Que se passe-t-il si un lead COLD se réchauffe ?", a: "Le score est mis à jour à chaque nouvelle interaction. Un lead COLD peut passer HOT automatiquement si ses signaux évoluent." },
        { q: "Faut-il remplacer notre CRM ?", a: "Non. L'agent se greffe sur votre CRM existant via API et enrichit les champs de qualification sans modifier votre workflow actuel." },
      ],
    },
    en: {
      metaTitle: "AI BANT Qualification Agent — Wikolabs",
      metaDesc: "Automatic prospect response analysis, real-time BANT scoring, HOT routing to setter and COLD to nurturing. Deploy in 1 week.",
      tag: "Commercial Cycle & Marketing",
      title: "BANT Qualification Agent",
      subtitle: "Auto-sort your leads and focus sales effort on the right ones",
      intro: "In a B2B pipeline, 80% of leads aren't ready to buy immediately. Without rigorous qualification, your reps waste time on cold prospects while hot ones go cold. The BANT Qualification Agent analyzes every interaction (email, form, transcribed call), updates the BANT score in real time and automatically routes the lead to the right sequence.",
      problem: "Manual qualification is subjective and time-consuming. Reps over-rate leads they sourced themselves. Without an objective score, hot and cold leads coexist in the same pipeline — and cold ones bury the hot ones.",
      solution: "At each prospect interaction (email reply, form fill, call transcript), the agent extracts BANT signals (Budget confirmed? Authority identified? Need explicit? Timing specified?), updates the score in the CRM and triggers the appropriate workflow: HOT → setter notification, COLD → nurturing sequence, DISQUALIFIED → archive.",
      steps: [
        { n: 1, title: "BANT criteria definition", desc: "Workshop to define your qualification thresholds: minimum budget, authority signals, need indicators and acceptable timing." },
        { n: 2, title: "Interaction source connection", desc: "Integration of inbound emails, forms, call transcripts (Whisper) and LinkedIn replies into the qualification pipeline." },
        { n: 3, title: "Scoring & CRM update", desc: "For each interaction, automatic BANT signal extraction and score update in your CRM (HubSpot, Salesforce, GoHighLevel)." },
        { n: 4, title: "Routing & triggering", desc: "Setter notification if HOT, nurturing entry if COLD, archive if DISQUALIFIED. Every action is logged and traceable." },
      ],
      benefits: [
        { title: "Clean & prioritized pipeline", desc: "Your CRM only contains leads with an objective status. No more dormant deals skewing your forecasts." },
        { title: "Sales focused on HOT leads", desc: "Zero time wasted on unqualified prospects. The setter only receives leads that have confirmed budget and need." },
        { title: "Automatic COLD nurturing", desc: "Leads not yet ready enter an automatic education sequence. They return qualified — with no human effort." },
      ],
      faq: [
        { q: "Is the BANT scoring customizable?", a: "Yes. You define the weight of each criterion and HOT/COLD/DISQUALIFIED thresholds based on your sales cycle." },
        { q: "Can the agent analyze call transcripts?", a: "Yes. Calls are transcribed via Whisper then analyzed by LLM to extract implicit and explicit BANT signals." },
        { q: "What if a COLD lead warms up?", a: "The score is updated at every new interaction. A COLD lead can automatically become HOT if their signals evolve." },
        { q: "Do we need to replace our CRM?", a: "No. The agent plugs into your existing CRM via API and enriches qualification fields without altering your current workflow." },
      ],
    },
  },

  /* ─────────────────────────────────────────────────
     0-4  Agent Setter (Prise de RDV)
  ───────────────────────────────────────────────── */
  {
    slug: "agent-setter-rdv",
    catSlug: "commercial-automation",
    fr: {
      metaTitle: "Agent Setter Prise de RDV IA — Wikolabs",
      metaDesc: "Proposition automatique de créneaux Calendly, confirmations, rappels J-1 et brief pré-call LLM. Taux de no-show réduit de 60%. Déployé en 1 semaine.",
      tag: "Cycle Commercial & Marketing",
      title: "Agent Setter (Prise de RDV)",
      subtitle: "Remplissez votre agenda commercial sans intervention humaine",
      intro: "La prise de rendez-vous est l'une des tâches les plus chronophages — et les moins valorisantes — du cycle commercial. Entre les échanges d'emails pour trouver un créneau, les confirmations manuelles et les rappels oubliés, un commercial perd jusqu'à 5h par semaine. L'Agent Setter automatise l'intégralité du processus, de la proposition de créneaux au brief pré-call généré par LLM.",
      problem: "Les échanges de disponibilités prennent en moyenne 4 à 6 emails. Le taux de no-show sans rappel atteint 30 %. Sans brief pré-call structuré, vos commerciaux arrivent mal préparés. Et chaque RDV raté représente une opportunité perdue.",
      solution: "Dès qu'un lead est classé HOT, l'agent envoie un email de prise de contact avec un lien Calendly personnalisé. À la confirmation, il envoie un email de confirmation, programme un rappel SMS/email J-1 et génère un brief pré-call LLM (résumé du prospect, enjeux détectés, questions suggérées) envoyé au commercial 30 minutes avant le call.",
      steps: [
        { n: 1, title: "Connexion Calendly & CRM", desc: "Intégration de votre Calendly (ou cal.com), de votre CRM et de vos outils d'envoi (email + SMS via Twilio ou autre)." },
        { n: 2, title: "Séquence de prise de RDV", desc: "Rédaction des emails de contact, de confirmation et de rappel. Personnalisation par segment (PME, grand compte, startup)." },
        { n: 3, title: "Génération du brief pré-call", desc: "30 minutes avant chaque call, l'agent compile les infos du prospect (CRM + LinkedIn + site web) et génère un brief LLM structuré." },
        { n: 4, title: "Suivi & relance post-no-show", desc: "Si le prospect ne se présente pas, l'agent envoie automatiquement une relance polie avec proposition de nouveau créneau." },
      ],
      benefits: [
        { title: "No-show réduit de 60 %", desc: "Les rappels SMS et email J-1 automatiques réduisent drastiquement les rendez-vous manqués." },
        { title: "5h/semaine récupérées par commercial", desc: "Plus d'échanges d'emails pour caler un créneau. L'agent gère tout depuis la proposition jusqu'à la confirmation." },
        { title: "Commerciaux mieux préparés", desc: "Le brief pré-call LLM garantit que chaque commercial arrive avec le contexte, les enjeux et les questions pertinentes." },
      ],
      faq: [
        { q: "Fonctionne avec Calendly Team ?", a: "Oui, ainsi qu'avec cal.com, HubSpot Meetings et tout outil de prise de RDV disposant d'une API ou d'un webhook." },
        { q: "Le brief peut-il intégrer des données CRM spécifiques ?", a: "Oui. Vous définissez quels champs CRM inclure dans le brief : valeur du deal, historique d'interactions, notes de qualification." },
        { q: "L'agent gère-t-il les fuseaux horaires ?", a: "Oui. Calendly gère nativement les fuseaux horaires. Les rappels sont envoyés au bon moment local du prospect." },
        { q: "Peut-on intégrer un questionnaire de qualification pré-call ?", a: "Oui. Un formulaire court peut être envoyé à la confirmation du RDV pour enrichir le brief et préparer le commercial." },
      ],
    },
    en: {
      metaTitle: "AI Setter Agent — Meeting Booking — Wikolabs",
      metaDesc: "Automatic Calendly slot proposals, confirmations, D-1 reminders and LLM pre-call brief. No-show rate reduced by 60%. Deployed in 1 week.",
      tag: "Commercial Cycle & Marketing",
      title: "Setter Agent (Meeting Booking)",
      subtitle: "Fill your sales calendar without any human intervention",
      intro: "Booking meetings is one of the most time-consuming — and least valuable — tasks in the sales cycle. Between email chains to find a time slot, manual confirmations and forgotten reminders, a sales rep loses up to 5 hours per week. The Setter Agent automates the entire process, from slot proposal to LLM-generated pre-call brief.",
      problem: "Scheduling back-and-forth averages 4–6 emails. No-show rates without reminders reach 30%. Without a structured pre-call brief, your reps arrive unprepared. And every missed meeting is a lost opportunity.",
      solution: "As soon as a lead is classified HOT, the agent sends a contact email with a personalized Calendly link. On confirmation, it sends a confirmation email, schedules a D-1 SMS/email reminder and generates an LLM pre-call brief (prospect summary, detected issues, suggested questions) sent to the rep 30 minutes before the call.",
      steps: [
        { n: 1, title: "Calendly & CRM connection", desc: "Integration with your Calendly (or cal.com), CRM and sending tools (email + SMS via Twilio or equivalent)." },
        { n: 2, title: "Booking sequence setup", desc: "Drafting of contact, confirmation and reminder emails. Customization by segment (SMB, enterprise, startup)." },
        { n: 3, title: "Pre-call brief generation", desc: "30 minutes before each call, the agent compiles prospect info (CRM + LinkedIn + website) and generates a structured LLM brief." },
        { n: 4, title: "Follow-up & no-show recovery", desc: "If the prospect doesn't show, the agent automatically sends a polite follow-up with a new slot proposal." },
      ],
      benefits: [
        { title: "No-show reduced by 60%", desc: "Automated D-1 SMS and email reminders drastically reduce missed appointments." },
        { title: "5h/week recovered per rep", desc: "No more scheduling email chains. The agent handles everything from slot proposal to confirmation." },
        { title: "Better prepared reps", desc: "The LLM pre-call brief ensures every rep arrives with the context, issues and relevant questions ready." },
      ],
      faq: [
        { q: "Does it work with Calendly Team?", a: "Yes, as well as cal.com, HubSpot Meetings and any booking tool with an API or webhook." },
        { q: "Can the brief include specific CRM data?", a: "Yes. You define which CRM fields to include: deal value, interaction history, qualification notes." },
        { q: "Does the agent handle time zones?", a: "Yes. Calendly natively manages time zones. Reminders are sent at the prospect's correct local time." },
        { q: "Can we add a pre-call qualification questionnaire?", a: "Yes. A short form can be sent on meeting confirmation to enrich the brief and prepare the rep." },
      ],
    },
  },

  /* ─────────────────────────────────────────────────
     0-5  Agent Proposition Commerciale
  ───────────────────────────────────────────────── */
  {
    slug: "agent-proposition-commerciale",
    catSlug: "commercial-automation",
    fr: {
      metaTitle: "Agent Proposition Commerciale IA — Wikolabs",
      metaDesc: "Draft de proposition commerciale généré depuis les notes du discovery call. PDF envoyé via DocuSign automatiquement. Délai réduit de 48h à 2h.",
      tag: "Cycle Commercial & Marketing",
      title: "Agent Proposition Commerciale",
      subtitle: "De la note de discovery à la proposition signée en moins de 2 heures",
      intro: "Chaque heure entre la fin d'un discovery call et l'envoi de la proposition est une heure pendant laquelle le prospect refroidit. Pourtant, rédiger une proposition personnalisée, la mettre en forme et l'envoyer prend en moyenne 4 à 8 heures. L'Agent Proposition Commerciale génère un draft complet depuis vos notes de call, le formate en PDF professionnel et l'envoie via DocuSign — en moins de 2 heures.",
      problem: "Les délais de rédaction laissent le temps au prospect de solliciter un concurrent. La qualité varie selon le commercial qui rédige. Les propositions génériques sont moins convaincantes que les personnalisées. Et chaque heure de rédaction est une heure de moins en prospection.",
      solution: "À la fin d'un discovery call, le commercial remplit un formulaire rapide (ou colle sa transcription). L'agent génère un document structuré : résumé du besoin, solution proposée, ROI estimé, investissement, étapes suivantes. Le PDF est formaté à votre charte graphique et envoyé via l'API DocuSign pour signature électronique.",
      steps: [
        { n: 1, title: "Template & charte graphique", desc: "Intégration de votre template de proposition (Word, Google Docs ou HTML). Mise en conformité avec votre charte graphique." },
        { n: 2, title: "Formulaire de capture post-call", desc: "Formulaire structuré (ou transcription libre) que le commercial remplit en 5 minutes après chaque discovery call." },
        { n: 3, title: "Génération LLM & mise en forme", desc: "L'agent génère le contenu de la proposition, l'insère dans le template, ajoute les visuels et exporte en PDF professionnel." },
        { n: 4, title: "Envoi DocuSign & tracking", desc: "Envoi automatique via DocuSign ou PandaDoc. Notification dès que le prospect ouvre ou signe. Relance automatique à J+3 si non ouvert." },
      ],
      benefits: [
        { title: "De 8h à 2h", desc: "Le temps de rédaction passe de plusieurs heures à moins de 2h — dont 5 minutes pour le commercial. Le reste est automatique." },
        { title: "Propositions 100% personnalisées", desc: "Chaque proposition reprend les mots exacts du prospect, ses enjeux spécifiques et les chiffres de son secteur. Plus de templates génériques." },
        { title: "Taux de closing amélioré", desc: "Envoyer une proposition soignée et personnalisée dans les 2 heures suivant le call est l'un des meilleurs signaux de professionnalisme." },
      ],
      faq: [
        { q: "Quel format de sortie est supporté ?", a: "PDF principalement, mais aussi Word (.docx) ou Google Slides selon votre template. Toujours à votre charte graphique." },
        { q: "L'agent peut-il calculer le ROI automatiquement ?", a: "Oui, si vous lui fournissez les données de base (effectif, volume, temps actuel sur la tâche). Il estime le gain et le positionne dans la proposition." },
        { q: "Faut-il avoir DocuSign ?", a: "Non. L'agent fonctionne aussi avec PandaDoc, HelloSign, ou simplement un envoi email avec PDF en pièce jointe." },
        { q: "La proposition peut-elle inclure des témoignages clients ?", a: "Oui. Vous fournissez une base de cas clients et l'agent sélectionne les plus pertinents selon le secteur et le besoin du prospect." },
      ],
    },
    en: {
      metaTitle: "AI Commercial Proposal Agent — Wikolabs",
      metaDesc: "Proposal draft generated from discovery call notes. PDF sent via DocuSign automatically. Turnaround reduced from 48h to 2h.",
      tag: "Commercial Cycle & Marketing",
      title: "Commercial Proposal Agent",
      subtitle: "From discovery notes to signed proposal in under 2 hours",
      intro: "Every hour between the end of a discovery call and sending the proposal is an hour the prospect is cooling down. Yet writing a personalized proposal, formatting it and sending it takes an average of 4–8 hours. The Commercial Proposal Agent generates a complete draft from your call notes, formats it as a professional PDF and sends it via DocuSign — in under 2 hours.",
      problem: "Long turnaround times give prospects time to contact competitors. Quality varies by rep. Generic proposals are less convincing than personalized ones. And every hour spent writing is an hour less spent prospecting.",
      solution: "After a discovery call, the rep fills a quick form (or pastes their transcript). The agent generates a structured document: need summary, proposed solution, estimated ROI, investment, next steps. The PDF is formatted to your brand guidelines and sent via DocuSign API for electronic signature.",
      steps: [
        { n: 1, title: "Template & branding setup", desc: "Integration of your proposal template (Word, Google Docs or HTML). Alignment with your brand guidelines." },
        { n: 2, title: "Post-call capture form", desc: "Structured form (or free transcript) the rep fills in 5 minutes after each discovery call." },
        { n: 3, title: "LLM generation & formatting", desc: "The agent generates the proposal content, inserts it into the template, adds visuals and exports as a professional PDF." },
        { n: 4, title: "DocuSign send & tracking", desc: "Automatic send via DocuSign or PandaDoc. Notification when the prospect opens or signs. Auto-follow-up at D+3 if unopened." },
      ],
      benefits: [
        { title: "From 8h to 2h", desc: "Drafting time drops from several hours to under 2h — with only 5 minutes from the rep. The rest is automatic." },
        { title: "100% personalized proposals", desc: "Each proposal uses the prospect's exact words, their specific issues and sector benchmarks. No more generic templates." },
        { title: "Improved closing rate", desc: "Sending a polished personalized proposal within 2 hours of the call is one of the strongest professionalism signals." },
      ],
      faq: [
        { q: "What output format is supported?", a: "PDF primarily, but also Word (.docx) or Google Slides depending on your template. Always in your brand style." },
        { q: "Can the agent calculate ROI automatically?", a: "Yes, if you provide base data (headcount, volume, current time on task). It estimates the gain and positions it in the proposal." },
        { q: "Do we need DocuSign?", a: "No. The agent also works with PandaDoc, HelloSign, or simply an email send with PDF attachment." },
        { q: "Can the proposal include client testimonials?", a: "Yes. You provide a client case library and the agent selects the most relevant ones by sector and prospect need." },
      ],
    },
  },

  /* ─────────────────────────────────────────────────
     0-6  Agent Rétention & Upsell
  ───────────────────────────────────────────────── */
  {
    slug: "agent-retention-upsell",
    catSlug: "commercial-automation",
    fr: {
      metaTitle: "Agent Rétention & Upsell IA — Wikolabs",
      metaDesc: "Détection de churn risk, email de réengagement personnalisé et séquences upsell déclenchées automatiquement. Réduisez le churn de 35%.",
      tag: "Cycle Commercial & Marketing",
      title: "Agent Rétention & Upsell",
      subtitle: "Gardez vos clients et augmentez leur valeur sans effort manuel",
      intro: "Acquérir un nouveau client coûte 5 à 7 fois plus cher que d'en garder un existant. Pourtant, la rétention et l'upsell sont souvent réactifs : on intervient quand le client se plaint, pas avant. L'Agent Rétention & Upsell analyse en permanence les signaux comportementaux de vos clients, détecte les risques de churn avant qu'ils se matérialisent et déclenche automatiquement les bons messages au bon moment.",
      problem: "Le churn est détecté trop tard — quand le client a déjà décidé de partir. Les opportunités d'upsell sont manquées faute de timing. Les account managers gèrent trop de comptes pour surveiller chacun individuellement. Et sans automatisation, la rétention reste réactive plutôt que proactive.",
      solution: "L'agent monitore les signaux de churn (baisse d'usage, tickets support répétés, NPS en chute, absence aux renouvellements) et déclenche des campagnes de réengagement personnalisées par LLM. Quand un client atteint un milestone de succès, l'agent déclenche une séquence upsell adaptée à son profil et son usage.",
      steps: [
        { n: 1, title: "Définition des signaux de churn", desc: "Identification des indicateurs prédictifs spécifiques à votre produit : fréquence d'usage, tickets ouverts, NPS, activité de connexion." },
        { n: 2, title: "Scoring de rétention en temps réel", desc: "L'agent calcule un score de santé client quotidien et alerte l'account manager quand un compte passe en zone rouge." },
        { n: 3, title: "Campagnes de réengagement LLM", desc: "Pour chaque client à risque : email personnalisé reprenant son usage réel, ses succès passés et une offre de valeur ajoutée ciblée." },
        { n: 4, title: "Séquences upsell post-succès", desc: "Quand un client atteint un KPI positif (adoption, ROI, milestone), l'agent déclenche une séquence upsell naturelle et non intrusive." },
      ],
      benefits: [
        { title: "Churn réduit de 35 %", desc: "L'intervention préventive avant que le client ne décide de partir multiplie les chances de rétention par rapport à une intervention réactive." },
        { title: "LTV augmentée de 40 %", desc: "Les séquences upsell déclenchées au bon moment (après un succès client) convertissent 3 fois mieux que les upsells aléatoires." },
        { title: "Account managers libérés", desc: "Vos AM ne surveillent plus 200 comptes manuellement. Ils interviennent uniquement quand l'agent signale un compte critique." },
      ],
      faq: [
        { q: "Comment l'agent accède-t-il aux données d'usage ?", a: "Via l'API de votre plateforme produit, votre CRM ou un export automatique quotidien vers notre pipeline. L'intégration est sur-mesure." },
        { q: "L'agent peut-il gérer les renouvellements ?", a: "Oui. Un workflow de renouvellement peut être ajouté : rappel J-60, J-30 et J-7 avec proposition de renouvellement personnalisée." },
        { q: "Le score de santé client est-il visible dans le CRM ?", a: "Oui. Le score est synchronisé dans votre CRM sous forme de champ personnalisé, visible par vos AM en temps réel." },
        { q: "Peut-on exclure certains clients des campagnes automatiques ?", a: "Oui. Un système de liste d'exclusion permet de protéger vos comptes stratégiques gérés manuellement." },
      ],
    },
    en: {
      metaTitle: "AI Retention & Upsell Agent — Wikolabs",
      metaDesc: "Churn risk detection, personalized re-engagement emails and upsell sequences triggered automatically. Reduce churn by 35%.",
      tag: "Commercial Cycle & Marketing",
      title: "Retention & Upsell Agent",
      subtitle: "Keep your clients and grow their value without manual effort",
      intro: "Acquiring a new client costs 5–7× more than retaining an existing one. Yet retention and upsell are often reactive: you intervene when the client complains, not before. The Retention & Upsell Agent continuously analyzes your clients' behavioral signals, detects churn risks before they materialize and automatically triggers the right messages at the right time.",
      problem: "Churn is detected too late — when the client has already decided to leave. Upsell opportunities are missed for lack of timing. Account managers handle too many accounts to monitor each one individually. And without automation, retention stays reactive rather than proactive.",
      solution: "The agent monitors churn signals (usage drop, repeated support tickets, falling NPS, renewal absences) and triggers LLM-personalized re-engagement campaigns. When a client reaches a success milestone, the agent triggers an upsell sequence adapted to their profile and usage.",
      steps: [
        { n: 1, title: "Churn signal definition", desc: "Identification of predictive indicators specific to your product: usage frequency, open tickets, NPS, login activity." },
        { n: 2, title: "Real-time retention scoring", desc: "The agent calculates a daily client health score and alerts the account manager when an account enters the red zone." },
        { n: 3, title: "LLM re-engagement campaigns", desc: "For each at-risk client: personalized email drawing on their actual usage, past successes and a targeted value-add offer." },
        { n: 4, title: "Post-success upsell sequences", desc: "When a client hits a positive KPI (adoption, ROI, milestone), the agent triggers a natural, non-intrusive upsell sequence." },
      ],
      benefits: [
        { title: "Churn reduced by 35%", desc: "Preventive intervention before the client decides to leave multiplies retention chances vs. reactive intervention." },
        { title: "LTV increased by 40%", desc: "Upsell sequences triggered at the right moment (after a client success) convert 3× better than random upsells." },
        { title: "Account managers freed up", desc: "Your AMs no longer monitor 200 accounts manually. They only intervene when the agent flags a critical account." },
      ],
      faq: [
        { q: "How does the agent access usage data?", a: "Via your product platform API, CRM or an automatic daily export to our pipeline. Integration is custom-built." },
        { q: "Can the agent handle renewals?", a: "Yes. A renewal workflow can be added: D-60, D-30 and D-7 reminders with personalized renewal proposals." },
        { q: "Is the client health score visible in the CRM?", a: "Yes. The score is synced to your CRM as a custom field, visible to your AMs in real time." },
        { q: "Can we exclude certain clients from automated campaigns?", a: "Yes. An exclusion list system lets you protect strategic accounts that are managed manually." },
      ],
    },
  },

  /* ─────────────────────────────────────────────────
     1-0  Agent SAV E-commerce (RAG)
  ───────────────────────────────────────────────── */
  {
    slug: "agent-sav-ecommerce-rag",
    catSlug: "production-ai",
    fr: {
      metaTitle: "Agent SAV E-commerce RAG IA — Wikolabs",
      metaDesc: "Agent IA SAV e-commerce répondant par email et WhatsApp sur commandes, livraisons et retours. Compatible WooCommerce et Shopify. Déployé en 2 semaines.",
      tag: "Support & Service Client",
      title: "Agent SAV E-commerce (RAG)",
      subtitle: "Un service client 24h/24 qui connaît vos règles métier par cœur",
      intro: "Le service client e-commerce est un gouffre de temps et de coûts : statuts de commande, délais de livraison, procédures de retour, questions sur les produits. Des centaines de tickets répétitifs auxquels vos agents humains répondent chaque jour. L'Agent SAV RAG aspire vos règles métier (base Notion, FAQ, politique de retour), les garde dans un index vectoriel et répond à chaque client par email ou WhatsApp en moins de 30 secondes.",
      problem: "Un agent humain gère 40 à 80 tickets par jour. Les réponses sont incohérentes selon l'agent. Le coût d'un service client de qualité est prohibitif pour les PME e-commerce. Et les temps de réponse longs dégradent la satisfaction client et augmentent les avis négatifs.",
      solution: "L'agent est connecté à votre base de connaissances (Notion, Confluence ou simple PDF), à votre CMS e-commerce (Shopify ou WooCommerce) pour le statut des commandes en temps réel, et à vos canaux de contact (email via FastAPI, WhatsApp Business). Il répond en moins de 30 secondes, escalade automatiquement les cas complexes vers un humain et documente chaque interaction.",
      steps: [
        { n: 1, title: "Ingestion de la base de connaissances", desc: "Import de vos FAQ, politique de retour, fiches produit et règles métier dans un index vectoriel (Pinecone ou Weaviate)." },
        { n: 2, title: "Connexion e-commerce", desc: "Intégration Shopify ou WooCommerce pour accès en temps réel aux statuts de commandes, livraisons et stocks." },
        { n: 3, title: "Déploiement sur vos canaux", desc: "Configuration email (IMAP/SMTP), WhatsApp Business API et/ou chat widget sur votre site. Tests sur 200+ scénarios." },
        { n: 4, title: "Monitoring & amélioration continue", desc: "Dashboard des tickets traités, taux de résolution, questions sans réponse. Mise à jour hebdomadaire de la base de connaissances." },
      ],
      benefits: [
        { title: "80 % des tickets résolus sans humain", desc: "Les questions fréquentes (statut commande, délai livraison, procédure retour) sont traitées automatiquement 24h/24, 7j/7." },
        { title: "Temps de réponse < 30 secondes", desc: "Chaque client reçoit une réponse précise et cohérente en quelques secondes, même la nuit et le week-end." },
        { title: "Coût SAV divisé par 5", desc: "Vos agents humains traitent uniquement les cas complexes et les escalades. Le coût par ticket traité chute drastiquement." },
      ],
      faq: [
        { q: "L'agent peut-il traiter plusieurs langues ?", a: "Oui. L'agent détecte la langue du client et répond dans la même langue, à condition que votre base de connaissances soit multilingue ou que vous activiez la traduction automatique." },
        { q: "Comment gérer la mise à jour des règles métier ?", a: "Vous modifiez votre Notion ou votre FAQ, et l'agent re-indexe automatiquement la nuit. Les nouvelles règles sont actives le lendemain matin." },
        { q: "Que se passe-t-il quand l'agent ne sait pas répondre ?", a: "Il escalade automatiquement vers un agent humain avec le contexte complet de la conversation et une suggestion de réponse." },
        { q: "Compatible avec quel CMS e-commerce ?", a: "Shopify et WooCommerce nativement. PrestaShop, Magento et tout CMS avec une API REST sur demande." },
      ],
    },
    en: {
      metaTitle: "AI E-commerce SAV Agent (RAG) — Wikolabs",
      metaDesc: "AI customer service agent answering via email and WhatsApp on orders, shipping and returns. WooCommerce and Shopify ready. Deployed in 2 weeks.",
      tag: "Support & Customer Service",
      title: "E-commerce SAV Agent (RAG)",
      subtitle: "24/7 customer service that knows your business rules by heart",
      intro: "E-commerce customer service is a sink of time and costs: order status, delivery times, return procedures, product questions. Hundreds of repetitive tickets your human agents answer every day. The RAG SAV Agent ingests your business rules (Notion base, FAQ, return policy), keeps them in a vector index and replies to every customer via email or WhatsApp in under 30 seconds.",
      problem: "A human agent handles 40–80 tickets per day. Replies are inconsistent across agents. The cost of quality customer service is prohibitive for SMB e-commerce. And long response times degrade satisfaction and increase negative reviews.",
      solution: "The agent is connected to your knowledge base (Notion, Confluence or simple PDF), your e-commerce CMS (Shopify or WooCommerce) for real-time order status, and your contact channels (email via FastAPI, WhatsApp Business). It responds in under 30 seconds, automatically escalates complex cases to a human and documents every interaction.",
      steps: [
        { n: 1, title: "Knowledge base ingestion", desc: "Import of your FAQ, return policy, product sheets and business rules into a vector index (Pinecone or Weaviate)." },
        { n: 2, title: "E-commerce connection", desc: "Shopify or WooCommerce integration for real-time access to order status, deliveries and stock." },
        { n: 3, title: "Channel deployment", desc: "Email configuration (IMAP/SMTP), WhatsApp Business API and/or chat widget on your site. Testing on 200+ scenarios." },
        { n: 4, title: "Monitoring & continuous improvement", desc: "Dashboard of processed tickets, resolution rate, unanswered questions. Weekly knowledge base updates." },
      ],
      benefits: [
        { title: "80% of tickets resolved without humans", desc: "Frequent questions (order status, delivery time, return procedure) are handled automatically 24/7." },
        { title: "Response time < 30 seconds", desc: "Every customer receives a precise and consistent response in seconds, even at night and on weekends." },
        { title: "Customer service cost divided by 5", desc: "Your human agents only handle complex cases and escalations. Cost per processed ticket drops dramatically." },
      ],
      faq: [
        { q: "Can the agent handle multiple languages?", a: "Yes. The agent detects the client's language and replies in the same language, provided your knowledge base is multilingual or auto-translation is enabled." },
        { q: "How are business rule updates managed?", a: "You update your Notion or FAQ, and the agent automatically re-indexes overnight. New rules are active the next morning." },
        { q: "What happens when the agent doesn't know the answer?", a: "It automatically escalates to a human agent with the full conversation context and a suggested response." },
        { q: "Which e-commerce CMS is compatible?", a: "Shopify and WooCommerce natively. PrestaShop, Magento and any CMS with a REST API on request." },
      ],
    },
  },

  /* ─────────────────────────────────────────────────
     1-1  Agent Triage & Escalade
  ───────────────────────────────────────────────── */
  {
    slug: "agent-triage-escalade",
    catSlug: "production-ai",
    fr: {
      metaTitle: "Agent Triage & Escalade IA — Wikolabs",
      metaDesc: "Priorisation automatique des tickets par urgence et catégorie, réponse aux FAQ, escalade intelligente vers l'humain. Déployé en 1 semaine.",
      tag: "Support & Service Client",
      title: "Agent Triage & Escalade",
      subtitle: "Chaque ticket au bon niveau de priorité, automatiquement",
      intro: "Dans un helpdesk non trié, les tickets urgents se noient dans les demandes banales. Un bug critique reçoit la même priorité qu'une question de facturation. L'Agent Triage & Escalade classifie chaque ticket entrant par urgence, catégorie et sentiment, répond automatiquement aux questions fréquentes et route les cas complexes vers le bon agent humain avec un résumé LLM.",
      problem: "Sans triage automatique, les agents humains lisent tous les tickets dans l'ordre d'arrivée. Les cas urgents attendent. Les questions basiques mobilisent des experts. Et le coût de traitement par ticket reste trop élevé pour scaler le support.",
      solution: "Chaque ticket entrant (email, Zendesk, Intercom, Freshdesk) est analysé par LLM : urgence (P1 à P4), catégorie (facturation, bug, onboarding, etc.), sentiment et complexité estimée. L'agent répond immédiatement aux P3/P4 courants, escalade les P1/P2 vers l'agent humain le plus disponible avec un résumé contextuel.",
      steps: [
        { n: 1, title: "Connexion helpdesk", desc: "Intégration Zendesk, Freshdesk, Intercom, Linear ou tout outil ticketing via API. Configuration des webhooks entrants." },
        { n: 2, title: "Définition des règles de triage", desc: "Atelier pour définir vos catégories, niveaux de priorité et règles de routage par équipe ou par agent." },
        { n: 3, title: "Base de réponses automatiques", desc: "Import de vos réponses types pour les questions fréquentes. L'agent les personnalise à chaque ticket avant envoi." },
        { n: 4, title: "Dashboard & SLA monitoring", desc: "Vue temps réel des SLA, tickets en attente par priorité et taux de résolution automatique vs humain." },
      ],
      benefits: [
        { title: "SLA P1 respecté à 99 %", desc: "Les incidents critiques sont détectés et escaladés en moins de 2 minutes, quelle que soit l'heure de réception." },
        { title: "50 % des tickets traités sans agent", desc: "Les questions fréquentes (réinitialisation de mot de passe, statut de commande, FAQ) sont résolues automatiquement." },
        { title: "Agents plus efficaces", desc: "Chaque agent ne traite que les tickets correspondant à sa spécialité, avec un résumé contextualisé. Moins de lecture, plus de résolution." },
      ],
      faq: [
        { q: "Quel helpdesk est supporté ?", a: "Zendesk, Freshdesk, Intercom, HubSpot Service Hub, Linear, Jira Service Desk et tout outil avec une API webhook ou REST." },
        { q: "L'agent peut-il escalader à des équipes différentes ?", a: "Oui. Vous définissez des règles de routage par catégorie : bugs → équipe tech, facturation → équipe finance, etc." },
        { q: "Comment éviter les réponses automatiques incorrectes ?", a: "Un seuil de confiance minimum est défini. En dessous, l'agent draft une réponse pour validation humaine plutôt que de l'envoyer directement." },
        { q: "Le triage fonctionne-t-il en plusieurs langues ?", a: "Oui. L'agent classifie et répond dans la langue du ticket. Le routage multilingue est supporté nativement." },
      ],
    },
    en: {
      metaTitle: "AI Triage & Escalation Agent — Wikolabs",
      metaDesc: "Automatic ticket prioritization by urgency and category, FAQ auto-response, intelligent escalation to humans. Deployed in 1 week.",
      tag: "Support & Customer Service",
      title: "Triage & Escalation Agent",
      subtitle: "Every ticket at the right priority level, automatically",
      intro: "In an unsorted helpdesk, urgent tickets drown in mundane requests. A critical bug gets the same priority as a billing question. The Triage & Escalation Agent classifies every incoming ticket by urgency, category and sentiment, automatically answers frequent questions and routes complex cases to the right human agent with an LLM summary.",
      problem: "Without automatic triage, human agents read all tickets in order of arrival. Urgent cases wait. Basic questions mobilize experts. And the cost per ticket stays too high to scale support.",
      solution: "Each incoming ticket (email, Zendesk, Intercom, Freshdesk) is analyzed by LLM: urgency (P1–P4), category (billing, bug, onboarding, etc.), sentiment and estimated complexity. The agent immediately answers common P3/P4 tickets, escalates P1/P2 to the most available human agent with a contextual summary.",
      steps: [
        { n: 1, title: "Helpdesk connection", desc: "Integration with Zendesk, Freshdesk, Intercom, Linear or any ticketing tool via API. Incoming webhook setup." },
        { n: 2, title: "Triage rules definition", desc: "Workshop to define your categories, priority levels and routing rules by team or agent." },
        { n: 3, title: "Auto-response library", desc: "Import your standard responses for frequent questions. The agent personalizes them per ticket before sending." },
        { n: 4, title: "Dashboard & SLA monitoring", desc: "Real-time view of SLAs, queued tickets by priority and automatic vs. human resolution rate." },
      ],
      benefits: [
        { title: "P1 SLA met 99% of the time", desc: "Critical incidents are detected and escalated in under 2 minutes, regardless of when they arrive." },
        { title: "50% of tickets handled without an agent", desc: "Frequent questions (password reset, order status, FAQ) are resolved automatically." },
        { title: "More effective agents", desc: "Each agent only handles tickets matching their specialty, with a contextualized summary. Less reading, more resolving." },
      ],
      faq: [
        { q: "Which helpdesks are supported?", a: "Zendesk, Freshdesk, Intercom, HubSpot Service Hub, Linear, Jira Service Desk and any tool with a webhook or REST API." },
        { q: "Can the agent escalate to different teams?", a: "Yes. You define routing rules by category: bugs → tech team, billing → finance team, etc." },
        { q: "How do you prevent incorrect automatic responses?", a: "A minimum confidence threshold is set. Below it, the agent drafts a response for human review rather than sending directly." },
        { q: "Does triage work in multiple languages?", a: "Yes. The agent classifies and responds in the ticket's language. Multilingual routing is natively supported." },
      ],
    },
  },

  /* ─────────────────────────────────────────────────
     1-2  Agent Onboarding Client
  ───────────────────────────────────────────────── */
  {
    slug: "agent-onboarding-client",
    catSlug: "production-ai",
    fr: {
      metaTitle: "Agent Onboarding Client IA — Wikolabs",
      metaDesc: "Email de bienvenue automatique, checklist d'onboarding suivie dans Notion ou Jira, rappels si étapes non complétées. Réduit le time-to-value de 50%.",
      tag: "Support & Service Client",
      title: "Agent Onboarding Client",
      subtitle: "Un onboarding structuré et automatique pour chaque nouveau client",
      intro: "Le premier mois détermine si un client devient fidèle ou part avant sa première facture. Un onboarding mal orchestré — emails oubliés, étapes manquées, pas de suivi — est la première cause de churn précoce. L'Agent Onboarding automatise l'intégralité du parcours : email de bienvenue personnalisé, checklist d'activation, rappels automatiques et alerte CSM si un client reste bloqué.",
      problem: "L'onboarding manuel est incohérent d'un client à l'autre. Les Customer Success Managers gèrent trop de comptes pour suivre chaque étape. Les clients qui se perdent dans la configuration partent silencieusement. Et chaque jour de retard sur l'activation réduit les chances de rétention à long terme.",
      solution: "Dès la création du compte client, l'agent envoie un email de bienvenue personnalisé, crée une checklist d'onboarding dans Notion ou Jira (adaptée au profil du client), envoie des rappels automatiques pour les étapes non complétées et alerte le CSM si un client n'a pas progressé depuis 48h. Chaque étape est tracée et visible par l'équipe.",
      steps: [
        { n: 1, title: "Définition du parcours d'onboarding", desc: "Atelier pour définir les étapes critiques d'activation, les délais cibles et les profils client (taille, secteur, produit acheté)." },
        { n: 2, title: "Création des templates de communication", desc: "Rédaction des emails de bienvenue, rappels J+3, J+7 et J+14, et messages de félicitations à chaque étape franchie." },
        { n: 3, title: "Intégration Notion / Jira / CRM", desc: "Création automatique des checklists à la signature du contrat, synchronisation des statuts et mise à jour temps réel." },
        { n: 4, title: "Alertes CSM & tableau de bord", desc: "Dashboard de suivi de l'avancement d'onboarding par client, alertes sur les comptes bloqués et rapport hebdomadaire." },
      ],
      benefits: [
        { title: "Time-to-value réduit de 50 %", desc: "Les clients activent plus vite grâce à un parcours guidé, des rappels ciblés et une aide proactive à chaque blocage." },
        { title: "Churn précoce éliminé", desc: "Les clients qui se perdent dans la configuration sont détectés en 48h et recontactés avant qu'ils ne décident de partir." },
        { title: "CSM plus efficaces", desc: "Vos Customer Success Managers ne gèrent plus les emails de rappel manuels. Ils interviennent uniquement sur les cas qui nécessitent une attention humaine." },
      ],
      faq: [
        { q: "L'onboarding peut-il varier selon le type de client ?", a: "Oui. Vous définissez plusieurs parcours (PME, grand compte, secteur spécifique) avec des étapes et des délais différents." },
        { q: "Faut-il un outil de ticketing existant ?", a: "Non. L'agent peut fonctionner avec Notion seul. L'intégration Jira ou autre outil de projet est optionnelle." },
        { q: "Les clients peuvent-ils voir leur progression ?", a: "Oui. Un portail client simple peut être ajouté avec une vue de leur checklist d'onboarding en temps réel." },
        { q: "L'agent peut-il envoyer des vidéos ou tutoriels ?", a: "Oui. Chaque étape de l'onboarding peut inclure des liens vers vos ressources (Loom, YouTube, documentation) selon le contexte." },
      ],
    },
    en: {
      metaTitle: "AI Client Onboarding Agent — Wikolabs",
      metaDesc: "Automatic welcome email, onboarding checklist tracked in Notion or Jira, reminders for incomplete steps. Reduces time-to-value by 50%.",
      tag: "Support & Customer Service",
      title: "Client Onboarding Agent",
      subtitle: "A structured, automatic onboarding for every new client",
      intro: "The first month determines whether a client becomes loyal or leaves before their first invoice. Poorly orchestrated onboarding — forgotten emails, missed steps, no follow-up — is the leading cause of early churn. The Onboarding Agent automates the entire journey: personalized welcome email, activation checklist, automatic reminders and CSM alert if a client gets stuck.",
      problem: "Manual onboarding is inconsistent across clients. Customer Success Managers handle too many accounts to track every step. Clients who get lost during setup leave silently. And every day of activation delay reduces long-term retention chances.",
      solution: "Upon client account creation, the agent sends a personalized welcome email, creates an onboarding checklist in Notion or Jira (adapted to the client profile), sends automatic reminders for incomplete steps and alerts the CSM if a client hasn't progressed in 48h. Every step is tracked and visible to the team.",
      steps: [
        { n: 1, title: "Onboarding journey definition", desc: "Workshop to define critical activation steps, target timelines and client profiles (size, sector, product purchased)." },
        { n: 2, title: "Communication template creation", desc: "Drafting of welcome emails, D+3, D+7 and D+14 reminders, and congratulations messages at each completed step." },
        { n: 3, title: "Notion / Jira / CRM integration", desc: "Automatic checklist creation at contract signing, status synchronization and real-time updates." },
        { n: 4, title: "CSM alerts & dashboard", desc: "Onboarding progress dashboard per client, alerts on blocked accounts and weekly report." },
      ],
      benefits: [
        { title: "Time-to-value reduced by 50%", desc: "Clients activate faster with a guided journey, targeted reminders and proactive help at every blocker." },
        { title: "Early churn eliminated", desc: "Clients who get lost during setup are detected within 48h and re-contacted before they decide to leave." },
        { title: "More effective CSMs", desc: "Your CSMs no longer manage manual reminder emails. They only intervene on cases requiring human attention." },
      ],
      faq: [
        { q: "Can onboarding vary by client type?", a: "Yes. You define multiple journeys (SMB, enterprise, specific sector) with different steps and timelines." },
        { q: "Is an existing ticketing tool required?", a: "No. The agent can work with Notion alone. Jira or other project tool integration is optional." },
        { q: "Can clients see their own progress?", a: "Yes. A simple client portal can be added with a real-time view of their onboarding checklist." },
        { q: "Can the agent send videos or tutorials?", a: "Yes. Each onboarding step can include links to your resources (Loom, YouTube, documentation) based on context." },
      ],
    },
  },

  /* ─────────────────────────────────────────────────
     1-3  Agent Notes Discovery
  ───────────────────────────────────────────────── */
  {
    slug: "agent-notes-discovery",
    catSlug: "production-ai",
    fr: {
      metaTitle: "Agent Notes Discovery IA — Wikolabs",
      metaDesc: "Transcription automatique des appels (Whisper) et résumé LLM structuré. Fiche créée automatiquement dans le CRM. Zéro prise de notes manuelle.",
      tag: "Support & Service Client",
      title: "Agent Notes Discovery",
      subtitle: "Chaque discovery call transcrit, résumé et intégré au CRM en moins de 5 minutes",
      intro: "Pendant un discovery call, un commercial doit écouter, questionner et prendre des notes en même temps — un exercice de multitâche qui dégrade la qualité des échanges. Et même avec les meilleures intentions, les notes d'après-call sont incomplètes ou inconsistantes. L'Agent Notes Discovery transcrit automatiquement vos appels, génère un résumé LLM structuré et crée la fiche prospect dans votre CRM en moins de 5 minutes après le raccroché.",
      problem: "Les notes manuelles sont incomplètes, subjectives et chronophages. Les informations critiques (budget évoqué, objections, prochaines étapes) se perdent. Les fiches CRM restent vides ou mal renseignées. Et sans notes structurées, le suivi commercial devient approximatif.",
      solution: "L'enregistrement du call (Zoom, Meet, Teams) est envoyé automatiquement à l'agent après la fin de la réunion. Whisper transcrit l'audio en texte. Le LLM génère un résumé structuré : enjeux identifiés, budget évoqué, objections, prochaines étapes, score BANT. La fiche est créée dans le CRM avec tous les champs pré-remplis.",
      steps: [
        { n: 1, title: "Connexion outil de visioconférence", desc: "Intégration Zoom, Google Meet ou Microsoft Teams pour récupération automatique des enregistrements après chaque call." },
        { n: 2, title: "Transcription Whisper", desc: "Transcription audio-texte haute précision via Whisper (OpenAI), avec identification des locuteurs et timecodes." },
        { n: 3, title: "Résumé LLM structuré", desc: "Extraction automatique des informations clés : enjeux, budget, objections, prochaines étapes, score BANT et to-do list." },
        { n: 4, title: "Push CRM & notification", desc: "Création ou mise à jour automatique de la fiche CRM. Notification email au commercial avec le résumé en 5 points." },
      ],
      benefits: [
        { title: "Zéro prise de notes", desc: "Le commercial est 100% concentré sur l'échange. Pas de stylo, pas de laptop — juste la conversation." },
        { title: "CRM toujours à jour", desc: "Chaque call alimente automatiquement le CRM avec des données structurées et fiables, sans intervention manuelle." },
        { title: "Continuité commerciale parfaite", desc: "Si un commercial change de poste, son remplaçant accède à des notes complètes pour chaque prospect. Zéro perte d'information." },
      ],
      faq: [
        { q: "L'enregistrement nécessite-t-il le consentement des participants ?", a: "Oui, conformément au RGPD. Un message automatique d'information est envoyé en début de call. Le consentement est documenté." },
        { q: "Quelle est la précision de la transcription Whisper ?", a: "Supérieure à 95 % en français et en anglais pour des appels téléphoniques standard. La précision varie selon la qualité audio." },
        { q: "L'agent fonctionne avec quel CRM ?", a: "HubSpot, Salesforce, GoHighLevel, Pipedrive et tout CRM avec une API. La création de la fiche est configurable champ par champ." },
        { q: "Peut-on exclure certaines parties du call du résumé ?", a: "Oui. Des règles d'exclusion peuvent être configurées (ex : exclure les segments hors-sujet ou les parties confidentielles identifiées)." },
      ],
    },
    en: {
      metaTitle: "AI Discovery Notes Agent — Wikolabs",
      metaDesc: "Automatic call transcription (Whisper) and structured LLM summary. Record auto-created in CRM. Zero manual note-taking.",
      tag: "Support & Customer Service",
      title: "Discovery Notes Agent",
      subtitle: "Every discovery call transcribed, summarized and in the CRM in under 5 minutes",
      intro: "During a discovery call, a sales rep must listen, question and take notes simultaneously — a multitasking exercise that degrades conversation quality. And even with the best intentions, post-call notes are incomplete or inconsistent. The Discovery Notes Agent automatically transcribes your calls, generates a structured LLM summary and creates the prospect record in your CRM in under 5 minutes after hanging up.",
      problem: "Manual notes are incomplete, subjective and time-consuming. Critical information (budget mentioned, objections, next steps) gets lost. CRM records stay empty or poorly filled. And without structured notes, sales follow-up becomes approximate.",
      solution: "The call recording (Zoom, Meet, Teams) is automatically sent to the agent after the meeting ends. Whisper transcribes audio to text. The LLM generates a structured summary: identified issues, budget mentioned, objections, next steps, BANT score. The record is created in the CRM with all fields pre-filled.",
      steps: [
        { n: 1, title: "Video conferencing tool connection", desc: "Zoom, Google Meet or Microsoft Teams integration for automatic recording retrieval after each call." },
        { n: 2, title: "Whisper transcription", desc: "High-accuracy audio-to-text transcription via Whisper (OpenAI), with speaker identification and timecodes." },
        { n: 3, title: "Structured LLM summary", desc: "Automatic extraction of key information: issues, budget, objections, next steps, BANT score and to-do list." },
        { n: 4, title: "CRM push & notification", desc: "Automatic creation or update of the CRM record. Email notification to the rep with the 5-point summary." },
      ],
      benefits: [
        { title: "Zero note-taking", desc: "The rep is 100% focused on the conversation. No pen, no laptop — just the exchange." },
        { title: "CRM always up to date", desc: "Every call automatically feeds the CRM with structured, reliable data — no manual intervention." },
        { title: "Perfect sales continuity", desc: "If a rep changes roles, their replacement has complete notes for every prospect. Zero information loss." },
      ],
      faq: [
        { q: "Does recording require participant consent?", a: "Yes, per GDPR. An automatic information message is sent at the start of each call. Consent is documented." },
        { q: "How accurate is Whisper transcription?", a: "Over 95% accuracy in French and English for standard phone calls. Accuracy varies with audio quality." },
        { q: "Which CRMs does the agent support?", a: "HubSpot, Salesforce, GoHighLevel, Pipedrive and any CRM with an API. Record creation is configurable field by field." },
        { q: "Can certain call parts be excluded from the summary?", a: "Yes. Exclusion rules can be configured (e.g. exclude off-topic segments or identified confidential portions)." },
      ],
    },
  },

  /* ─────────────────────────────────────────────────
     2-0  Agent BI Langage Naturel
  ───────────────────────────────────────────────── */
  {
    slug: "agent-bi-langage-naturel",
    catSlug: "decision-intelligence",
    fr: {
      metaTitle: "Agent BI Langage Naturel IA — Wikolabs",
      metaDesc: "Questions en français vers SQL généré vers dashboard automatique. Vos équipes lisent leurs KPIs sans analyste. Connecté à BigQuery, PostgreSQL, Metabase.",
      tag: "BI & Intelligence Décisionnelle",
      title: "Agent BI Langage Naturel",
      subtitle: "Posez vos questions en français, obtenez vos données en secondes",
      intro: "La business intelligence traditionnelle crée une dépendance aux analystes data : chaque nouvelle question nécessite une demande, une attente et une réponse partielle. L'Agent BI Langage Naturel supprime cet intermédiaire. Posez votre question en français ou en anglais, l'agent génère le SQL correspondant, l'exécute sur votre entrepôt de données et vous retourne un tableau ou un graphique en quelques secondes.",
      problem: "Les équipes métier dépendent des équipes data pour chaque requête. Les analysts data sont surchargés de demandes ad hoc. Les dashboards statiques ne répondent pas aux questions qui émergent en réunion. Et les décisions sont prises sans données — ou avec des données obsolètes.",
      solution: "L'agent est connecté à votre entrepôt de données (BigQuery, PostgreSQL, Snowflake, Redshift). Il traduit vos questions en SQL valide, l'exécute en temps réel et retourne le résultat sous forme de tableau, graphique ou résumé textuel. Un historique des questions est conservé pour alimenter un dashboard auto-apprenant.",
      steps: [
        { n: 1, title: "Connexion à votre entrepôt de données", desc: "Intégration BigQuery, PostgreSQL, Snowflake, Redshift ou MySQL. Documentation automatique du schéma pour l'agent." },
        { n: 2, title: "Calibration du vocabulaire métier", desc: "Enrichissement du contexte LLM avec votre vocabulaire spécifique : noms de tables, métriques, KPIs, règles de calcul." },
        { n: 3, title: "Interface de requête", desc: "Interface chat simple (Slack bot, web app ou widget) où les équipes posent leurs questions en langage naturel." },
        { n: 4, title: "Dashboard auto-apprenant", desc: "Les questions fréquentes alimentent un dashboard Metabase ou Power BI mis à jour automatiquement. Apprentissage continu." },
      ],
      benefits: [
        { title: "Autonomie data pour tous", desc: "N'importe quel membre de l'équipe peut interroger les données sans écrire une ligne de SQL ni attendre un analyste." },
        { title: "Décisions basées sur les faits", desc: "Les KPIs sont accessibles en temps réel en réunion, sans délai. Les décisions reposent sur les vraies données." },
        { title: "Analysts data libérés", desc: "Vos data analysts arrêtent de passer 60 % de leur temps sur des requêtes ad hoc. Ils se concentrent sur l'analyse stratégique." },
      ],
      faq: [
        { q: "Quel entrepôt de données est supporté ?", a: "BigQuery, PostgreSQL, MySQL, Snowflake, Redshift, SQLite. D'autres sources peuvent être ajoutées via connecteurs." },
        { q: "L'agent peut-il gérer des schémas complexes avec des dizaines de tables ?", a: "Oui. L'agent documente automatiquement votre schéma et apprend les relations entre tables via des exemples de requêtes." },
        { q: "Les résultats peuvent-ils être exportés ?", a: "Oui. Chaque résultat peut être exporté en CSV, intégré dans Notion ou pushé dans Slack automatiquement." },
        { q: "Comment garantir la sécurité des données ?", a: "L'agent fonctionne dans votre infrastructure (VPC ou on-premise). Les données ne quittent jamais votre environnement." },
      ],
    },
    en: {
      metaTitle: "Natural Language BI Agent — Wikolabs",
      metaDesc: "Questions in plain English to generated SQL to automatic dashboard. Your teams read their KPIs without an analyst. Connected to BigQuery, PostgreSQL, Metabase.",
      tag: "BI & Decision Intelligence",
      title: "Natural Language BI Agent",
      subtitle: "Ask your questions in plain English, get your data in seconds",
      intro: "Traditional business intelligence creates analyst dependency: every new question requires a request, a wait and a partial answer. The Natural Language BI Agent removes this intermediary. Ask your question in English or French, the agent generates the corresponding SQL, executes it on your data warehouse and returns a table or chart in seconds.",
      problem: "Business teams depend on data teams for every query. Data analysts are overloaded with ad hoc requests. Static dashboards don't answer questions that arise in meetings. And decisions are made without data — or with outdated data.",
      solution: "The agent is connected to your data warehouse (BigQuery, PostgreSQL, Snowflake, Redshift). It translates your questions into valid SQL, executes it in real time and returns results as a table, chart or text summary. A question history is maintained to feed a self-learning dashboard.",
      steps: [
        { n: 1, title: "Data warehouse connection", desc: "BigQuery, PostgreSQL, Snowflake, Redshift or MySQL integration. Automatic schema documentation for the agent." },
        { n: 2, title: "Business vocabulary calibration", desc: "LLM context enrichment with your specific vocabulary: table names, metrics, KPIs, calculation rules." },
        { n: 3, title: "Query interface", desc: "Simple chat interface (Slack bot, web app or widget) where teams ask questions in natural language." },
        { n: 4, title: "Self-learning dashboard", desc: "Frequent questions feed a Metabase or Power BI dashboard updated automatically. Continuous learning." },
      ],
      benefits: [
        { title: "Data autonomy for everyone", desc: "Any team member can query data without writing a line of SQL or waiting for an analyst." },
        { title: "Fact-based decisions", desc: "KPIs are accessible in real time during meetings, with no delay. Decisions are based on real data." },
        { title: "Data analysts freed up", desc: "Your analysts stop spending 60% of their time on ad hoc requests. They focus on strategic analysis." },
      ],
      faq: [
        { q: "Which data warehouses are supported?", a: "BigQuery, PostgreSQL, MySQL, Snowflake, Redshift, SQLite. Other sources can be added via connectors." },
        { q: "Can the agent handle complex schemas with dozens of tables?", a: "Yes. The agent automatically documents your schema and learns table relationships through example queries." },
        { q: "Can results be exported?", a: "Yes. Each result can be exported as CSV, integrated into Notion or pushed to Slack automatically." },
        { q: "How is data security ensured?", a: "The agent runs in your infrastructure (VPC or on-premise). Data never leaves your environment." },
      ],
    },
  },

  /* ─────────────────────────────────────────────────
     2-1  Reporting Automatique (PPT/PDF)
  ───────────────────────────────────────────────── */
  {
    slug: "reporting-automatique",
    catSlug: "decision-intelligence",
    fr: {
      metaTitle: "Reporting Automatique PPT PDF IA — Wikolabs",
      metaDesc: "Dashboard PowerPoint ou PDF généré automatiquement depuis WooCommerce, Shopify ou toute source de données. Enrichi de données externes pour le pilotage.",
      tag: "BI & Intelligence Décisionnelle",
      title: "Reporting Automatique (PPT/PDF)",
      subtitle: "Vos rapports de pilotage générés automatiquement chaque semaine",
      intro: "La préparation d'un rapport hebdomadaire ou mensuel prend en moyenne 4 à 8 heures : extraction des données, mise en forme, rédaction des commentaires, mise à jour des graphiques. L'Agent Reporting Automatique connecte vos sources de données, génère le rapport complet au format PowerPoint ou PDF et l'envoie par email aux bonnes personnes, chaque semaine ou chaque mois, sans intervention humaine.",
      problem: "Les rapports manuels sont chronophages, souvent en retard et pas toujours fiables. Chaque membre de l'équipe produit son propre rapport avec ses propres métriques. Le management reçoit des informations contradictoires. Et le temps passé sur le reporting est du temps volé à l'analyse et à la décision.",
      solution: "L'agent se connecte à vos sources (WooCommerce, Shopify, BigQuery, Google Analytics, Facebook Ads, CRM) et génère automatiquement un rapport structuré selon votre template. Chaque graphique est commenté par LLM (interprétation des tendances, alertes sur les anomalies, recommandations). Le PDF ou PowerPoint est envoyé par email aux parties prenantes selon votre calendrier.",
      steps: [
        { n: 1, title: "Audit des sources de données", desc: "Identification de toutes vos sources : e-commerce, CRM, ads, analytics. Connexion via API ou export automatique." },
        { n: 2, title: "Définition du template de rapport", desc: "Conception ou intégration de votre template existant. Définition des métriques, graphiques et sections par rapport." },
        { n: 3, title: "Calibration du commentaire LLM", desc: "Paramétrage des règles de commentaire automatique : seuils d'alerte, formulations, ton adapté à votre audience." },
        { n: 4, title: "Planification & distribution", desc: "Configuration du calendrier d'envoi (quotidien, hebdomadaire, mensuel) et de la liste de destinataires par rapport." },
      ],
      benefits: [
        { title: "8h récupérées par rapport", desc: "La génération complète du rapport prend moins de 5 minutes. Vos équipes récupèrent plusieurs jours de travail par mois." },
        { title: "Données toujours fraîches", desc: "Le rapport utilise les données en temps réel de vos sources. Plus de risque d'analyser des chiffres obsolètes." },
        { title: "Commentaires intelligents", desc: "Chaque graphique est accompagné d'une interprétation LLM : tendance, anomalie détectée, contexte et recommandation." },
      ],
      faq: [
        { q: "Quelles sources de données sont supportées ?", a: "WooCommerce, Shopify, BigQuery, Google Analytics 4, Facebook Ads, Google Ads, HubSpot, Salesforce, et toute source avec une API ou export CSV." },
        { q: "Le template peut-il inclure notre logo et charte graphique ?", a: "Oui. Votre charte graphique (couleurs, polices, logo) est intégrée dans le template. Les rapports sont à votre image." },
        { q: "Peut-on avoir plusieurs rapports avec des audiences différentes ?", a: "Oui. Vous pouvez configurer autant de rapports que nécessaire : rapport CEO, rapport ops, rapport marketing, etc." },
        { q: "Est-il possible d'ajouter des données externes (benchmarks sectoriels) ?", a: "Oui. Des données de benchmarks sectoriels ou des flux économiques externes peuvent être intégrés pour contextualiser vos résultats." },
      ],
    },
    en: {
      metaTitle: "Automatic Reporting PPT PDF AI — Wikolabs",
      metaDesc: "PowerPoint or PDF dashboard auto-generated from WooCommerce, Shopify or any data source. Enriched with external data for executive reporting.",
      tag: "BI & Decision Intelligence",
      title: "Automatic Reporting (PPT/PDF)",
      subtitle: "Your management reports generated automatically every week",
      intro: "Preparing a weekly or monthly report takes an average of 4–8 hours: data extraction, formatting, writing commentary, updating charts. The Automatic Reporting Agent connects your data sources, generates the complete report in PowerPoint or PDF format and sends it by email to the right people, every week or month, with zero human intervention.",
      problem: "Manual reports are time-consuming, often late and not always reliable. Each team member produces their own report with their own metrics. Management receives conflicting information. And time spent on reporting is time stolen from analysis and decision-making.",
      solution: "The agent connects to your sources (WooCommerce, Shopify, BigQuery, Google Analytics, Facebook Ads, CRM) and automatically generates a structured report based on your template. Each chart is LLM-commented (trend interpretation, anomaly alerts, recommendations). The PDF or PowerPoint is emailed to stakeholders on your schedule.",
      steps: [
        { n: 1, title: "Data source audit", desc: "Identification of all your sources: e-commerce, CRM, ads, analytics. Connection via API or automatic export." },
        { n: 2, title: "Report template definition", desc: "Design or integration of your existing template. Definition of metrics, charts and sections per report." },
        { n: 3, title: "LLM commentary calibration", desc: "Configuration of automatic commentary rules: alert thresholds, phrasing, tone adapted to your audience." },
        { n: 4, title: "Scheduling & distribution", desc: "Send schedule configuration (daily, weekly, monthly) and recipient list per report." },
      ],
      benefits: [
        { title: "8h recovered per report", desc: "Complete report generation takes under 5 minutes. Your teams recover several work days per month." },
        { title: "Always fresh data", desc: "The report uses real-time data from your sources. No risk of analyzing stale figures." },
        { title: "Intelligent commentary", desc: "Every chart comes with an LLM interpretation: trend, detected anomaly, context and recommendation." },
      ],
      faq: [
        { q: "Which data sources are supported?", a: "WooCommerce, Shopify, BigQuery, Google Analytics 4, Facebook Ads, Google Ads, HubSpot, Salesforce, and any source with an API or CSV export." },
        { q: "Can the template include our logo and brand?", a: "Yes. Your brand guidelines (colors, fonts, logo) are integrated into the template. Reports reflect your identity." },
        { q: "Can we have multiple reports with different audiences?", a: "Yes. You can configure as many reports as needed: CEO report, ops report, marketing report, etc." },
        { q: "Can external data (sector benchmarks) be added?", a: "Yes. Sector benchmark data or external economic feeds can be integrated to contextualize your results." },
      ],
    },
  },

  /* ─────────────────────────────────────────────────
     2-2  Forecasting & Anomalies
  ───────────────────────────────────────────────── */
  {
    slug: "forecasting-anomalies",
    catSlug: "decision-intelligence",
    fr: {
      metaTitle: "Forecasting & Détection d'Anomalies IA — Wikolabs",
      metaDesc: "Prévisions de revenus 3/6/12 mois, détection d'anomalies en temps réel, alertes churn risk. Modèles ML déployés sur vos données historiques.",
      tag: "BI & Intelligence Décisionnelle",
      title: "Forecasting & Anomalies",
      subtitle: "Anticipez les tendances et détectez les dérives avant qu'elles impactent votre business",
      intro: "Piloter un business sans prévisions fiables, c'est conduire avec un rétroviseur. Les tableaux de bord vous montrent ce qui s'est passé — pas ce qui va se passer. L'agent Forecasting & Anomalies entraîne des modèles de prévision sur vos données historiques, génère des projections à 3, 6 et 12 mois et détecte en temps réel les anomalies qui signalent un problème avant qu'il ne soit visible dans vos KPIs.",
      problem: "Les prévisions manuelles reposent sur l'intuition et les tendances passées. Les anomalies sont détectées tardivement — quand les chiffres du mois sont déjà dans le rouge. Sans alertes proactives, les problèmes opérationnels (churn, baisse de conversion, dérive des coûts) restent invisibles jusqu'à ce qu'ils soient critiques.",
      solution: "Des modèles de machine learning (Prophet, ARIMA, XGBoost) sont entraînés sur vos données historiques (ventes, trafic, coûts, rétention). Les prévisions sont mises à jour hebdomadairement et présentées avec des intervalles de confiance. Chaque anomalie détectée (pic ou creux anormal par rapport au forecast) déclenche une alerte Slack ou email avec une explication en langage naturel.",
      steps: [
        { n: 1, title: "Collecte & nettoyage des données historiques", desc: "Extraction de 12 à 36 mois de données depuis vos sources (CRM, e-commerce, analytics). Nettoyage et normalisation." },
        { n: 2, title: "Entraînement des modèles", desc: "Sélection et entraînement des meilleurs algorithmes pour vos séries temporelles. Validation sur données holdout." },
        { n: 3, title: "Déploiement des alertes temps réel", desc: "Connexion aux flux de données en temps réel. Seuils d'anomalie configurés selon vos métriques critiques." },
        { n: 4, title: "Dashboard de prévisions & monitoring", desc: "Interface de visualisation des forecasts, historique des alertes et score de précision du modèle en continu." },
      ],
      benefits: [
        { title: "Prévisions à ±8 % de précision", desc: "Nos modèles atteignent en moyenne 92 % de précision sur les 30 premiers jours de prévision, selon la qualité des données historiques." },
        { title: "Anomalies détectées 48h avant", desc: "Les dérives sont signalées avant d'être visibles dans les KPIs mensuels. Vous intervenez quand il est encore temps." },
        { title: "Budget maîtrisé", desc: "Les prévisions de coûts et de revenus permettent d'ajuster les ressources en amont. Plus de surprises en fin de mois." },
      ],
      faq: [
        { q: "Quelle quantité de données historiques est nécessaire ?", a: "Minimum 12 mois de données pour des prévisions fiables. 24 à 36 mois permettent de capturer la saisonnalité et les tendances longues." },
        { q: "Les modèles sont-ils ré-entraînés automatiquement ?", a: "Oui. Un pipeline de ré-entraînement mensuel est mis en place pour intégrer les nouvelles données et maintenir la précision." },
        { q: "Peut-on prévoir plusieurs métriques simultanément ?", a: "Oui. Revenus, trafic, coûts d'acquisition, taux de rétention — chaque métrique a son modèle dédié." },
        { q: "Les alertes sont-elles personnalisables ?", a: "Oui. Seuils, canaux (Slack, email, SMS), fréquence et format des alertes sont tous configurables selon vos préférences." },
      ],
    },
    en: {
      metaTitle: "AI Forecasting & Anomaly Detection — Wikolabs",
      metaDesc: "3/6/12-month revenue forecasts, real-time anomaly detection, churn risk alerts. ML models trained on your historical data.",
      tag: "BI & Decision Intelligence",
      title: "Forecasting & Anomaly Detection",
      subtitle: "Anticipate trends and catch drifts before they impact your business",
      intro: "Running a business without reliable forecasts is like driving with only a rearview mirror. Dashboards show you what happened — not what will happen. The Forecasting & Anomaly Detection agent trains prediction models on your historical data, generates 3, 6 and 12-month projections and detects anomalies in real time that signal a problem before it shows up in your KPIs.",
      problem: "Manual forecasts rely on intuition and past trends. Anomalies are detected late — when monthly numbers are already in the red. Without proactive alerts, operational problems (churn, conversion drop, cost drift) stay invisible until they become critical.",
      solution: "Machine learning models (Prophet, ARIMA, XGBoost) are trained on your historical data (sales, traffic, costs, retention). Forecasts are updated weekly with confidence intervals. Each detected anomaly (abnormal peak or trough vs. forecast) triggers a Slack or email alert with a natural-language explanation.",
      steps: [
        { n: 1, title: "Historical data collection & cleaning", desc: "Extraction of 12–36 months of data from your sources (CRM, e-commerce, analytics). Cleaning and normalization." },
        { n: 2, title: "Model training", desc: "Selection and training of the best algorithms for your time series. Validation on holdout data." },
        { n: 3, title: "Real-time alert deployment", desc: "Connection to real-time data feeds. Anomaly thresholds configured to your critical metrics." },
        { n: 4, title: "Forecast dashboard & monitoring", desc: "Forecast visualization interface, alert history and continuous model accuracy score." },
      ],
      benefits: [
        { title: "Forecasts within ±8% accuracy", desc: "Our models average 92% accuracy on the first 30 days of forecast, depending on historical data quality." },
        { title: "Anomalies detected 48h early", desc: "Drifts are flagged before they appear in monthly KPIs. You intervene while there's still time." },
        { title: "Budget under control", desc: "Cost and revenue forecasts let you adjust resources in advance. No more end-of-month surprises." },
      ],
      faq: [
        { q: "How much historical data is needed?", a: "Minimum 12 months for reliable forecasts. 24–36 months allow capturing seasonality and long-term trends." },
        { q: "Are models retrained automatically?", a: "Yes. A monthly retraining pipeline is set up to incorporate new data and maintain accuracy." },
        { q: "Can multiple metrics be forecasted simultaneously?", a: "Yes. Revenue, traffic, acquisition costs, retention rate — each metric gets its own dedicated model." },
        { q: "Are alerts customizable?", a: "Yes. Thresholds, channels (Slack, email, SMS), frequency and alert format are all configurable." },
      ],
    },
  },

  /* ─────────────────────────────────────────────────
     2-3  CRM Multi-agent & Pipeline
  ───────────────────────────────────────────────── */
  {
    slug: "crm-multi-agent",
    catSlug: "decision-intelligence",
    fr: {
      metaTitle: "CRM Multi-agent & Pipeline IA — Wikolabs",
      metaDesc: "Scoring LTV, pipeline orchestration, alertes renouvellement et réactivation automatiques. CRM piloté par l'IA, pas par vos commerciaux.",
      tag: "BI & Intelligence Décisionnelle",
      title: "CRM Multi-agent & Pipeline",
      subtitle: "Votre CRM se met à jour seul et pilote vos commerciaux",
      intro: "Un CRM mal renseigné est un investissement gâché. Quand les commerciaux renseignent leurs CRM à la main — quand ils le font — les données sont souvent incomplètes, en retard ou incorrectes. Le système CRM Multi-agent orchestre plusieurs agents spécialisés qui maintiennent votre CRM à jour en temps réel, scorent vos deals, alertent sur les renouvellements et pilotent le pipeline sans intervention manuelle.",
      problem: "Les commerciaux passent 30 % de leur temps sur des tâches d'administration CRM. Les données sont obsolètes : étapes de pipeline incorrectes, contacts non mis à jour, deals stagnants non détectés. Sans vue fiable du pipeline, les prévisions commerciales sont inexactes et les décisions de recrutement ou d'investissement sont risquées.",
      solution: "Un ensemble d'agents spécialisés maintiennent votre CRM : un agent de scoring LTV met à jour la valeur prospect en temps réel, un agent de pipeline détecte les deals bloqués et alerte le manager, un agent de renouvellement envoie des séquences automatiques 60 jours avant l'échéance, et un agent de réactivation relance les deals dormants depuis plus de 30 jours.",
      steps: [
        { n: 1, title: "Audit du CRM existant", desc: "Analyse de la qualité des données actuelles, identification des champs clés et des workflows à automatiser." },
        { n: 2, title: "Déploiement des agents spécialisés", desc: "Configuration des 4 agents (scoring, pipeline, renouvellement, réactivation) avec vos règles métier spécifiques." },
        { n: 3, title: "Intégration des flux de données", desc: "Connexion de toutes vos sources (email, appels, interactions web, usage produit) pour alimenter le scoring en temps réel." },
        { n: 4, title: "Dashboard pipeline & alertes", desc: "Vue unifiée du pipeline par commercial et par équipe, alertes automatiques et rapport hebdomadaire pour le management." },
      ],
      benefits: [
        { title: "CRM fiable à 95 %", desc: "Les agents maintiennent les données à jour en temps réel. Fini les deals fantômes et les étapes de pipeline incorrectes." },
        { title: "30 % de deals supplémentaires closés", desc: "Les deals bloqués sont détectés et débloqués avant d'être perdus. Les renouvellements ne sont plus oubliés." },
        { title: "Prévisions fiables", desc: "Avec un pipeline propre et des scores LTV à jour, vos prévisions commerciales atteignent ±10 % de précision." },
      ],
      faq: [
        { q: "Compatible avec quel CRM ?", a: "HubSpot, Salesforce, Pipedrive et GoHighLevel nativement. Tout CRM avec une API REST peut être intégré." },
        { q: "Le scoring LTV utilise quelles variables ?", a: "Historique d'achat, fréquence, montant moyen, secteur, ancienneté client, NPS, usage produit et signaux comportementaux." },
        { q: "Les agents peuvent-ils modifier directement le CRM ?", a: "Oui, avec des permissions définies. Chaque modification est loggée avec l'agent qui l'a effectuée, pour une traçabilité complète." },
        { q: "Faut-il importer toutes les données historiques ?", a: "Idéalement oui. Un import initial de 12 à 24 mois de données permet de calibrer correctement les modèles de scoring." },
      ],
    },
    en: {
      metaTitle: "Multi-agent CRM & Pipeline AI — Wikolabs",
      metaDesc: "LTV scoring, pipeline orchestration, automatic renewal and reactivation alerts. CRM driven by AI, not by your reps.",
      tag: "BI & Decision Intelligence",
      title: "Multi-agent CRM & Pipeline",
      subtitle: "Your CRM updates itself and guides your sales team",
      intro: "A poorly maintained CRM is a wasted investment. When reps update their CRM manually — when they do — data is often incomplete, late or incorrect. The Multi-agent CRM system orchestrates specialized agents that keep your CRM up to date in real time, score your deals, alert on renewals and manage the pipeline without manual intervention.",
      problem: "Sales reps spend 30% of their time on CRM admin tasks. Data is stale: incorrect pipeline stages, unupdated contacts, undetected stagnant deals. Without a reliable pipeline view, revenue forecasts are inaccurate and hiring or investment decisions are risky.",
      solution: "A set of specialized agents maintain your CRM: an LTV scoring agent updates prospect value in real time, a pipeline agent detects blocked deals and alerts the manager, a renewal agent sends automatic sequences 60 days before expiry, and a reactivation agent re-engages deals dormant for more than 30 days.",
      steps: [
        { n: 1, title: "Existing CRM audit", desc: "Analysis of current data quality, identification of key fields and workflows to automate." },
        { n: 2, title: "Specialized agent deployment", desc: "Configuration of the 4 agents (scoring, pipeline, renewal, reactivation) with your specific business rules." },
        { n: 3, title: "Data feed integration", desc: "Connection of all your sources (email, calls, web interactions, product usage) to feed real-time scoring." },
        { n: 4, title: "Pipeline dashboard & alerts", desc: "Unified pipeline view by rep and team, automatic alerts and weekly management report." },
      ],
      benefits: [
        { title: "95% reliable CRM", desc: "Agents keep data up to date in real time. No more ghost deals and incorrect pipeline stages." },
        { title: "30% more deals closed", desc: "Blocked deals are detected and unblocked before they're lost. Renewals are never forgotten." },
        { title: "Reliable forecasts", desc: "With a clean pipeline and up-to-date LTV scores, your sales forecasts reach ±10% accuracy." },
      ],
      faq: [
        { q: "Which CRMs are compatible?", a: "HubSpot, Salesforce, Pipedrive and GoHighLevel natively. Any CRM with a REST API can be integrated." },
        { q: "What variables does LTV scoring use?", a: "Purchase history, frequency, average value, sector, client tenure, NPS, product usage and behavioral signals." },
        { q: "Can agents directly modify the CRM?", a: "Yes, with defined permissions. Every modification is logged with the responsible agent for full traceability." },
        { q: "Is it necessary to import all historical data?", a: "Ideally yes. An initial import of 12–24 months of data correctly calibrates the scoring models." },
      ],
    },
  },

  /* ─────────────────────────────────────────────────
     3-0  Moteur de Recherche Sémantique
  ───────────────────────────────────────────────── */
  {
    slug: "moteur-recherche-semantique",
    catSlug: "search-recommendation",
    fr: {
      metaTitle: "Moteur de Recherche Sémantique IA — Wikolabs",
      metaDesc: "Recherche vectorielle sur vos catalogues, bases de connaissance et contenus. Résultats pertinents dès le premier mot. Elasticsearch + Pinecone.",
      tag: "Recherche & Données Structurées",
      title: "Moteur de Recherche Sémantique",
      subtitle: "Trouvez ce que vos utilisateurs cherchent — même s'ils ne savent pas l'éprimer exactement",
      intro: "La recherche par mots-clés exacts est morte. Vos utilisateurs tapent des intentions, pas des mots-clés. Un catalogue de 10 000 produits avec une recherche exacte retourne zéro résultat pour \"chaussure confort longue marche\" si le produit s'appelle \"semelle orthopédique premium\". Le moteur de recherche sémantique comprend l'intention derrière la requête et retourne les résultats les plus pertinents, même avec des termes différents.",
      problem: "Les moteurs de recherche basés sur des mots-clés exacts ont un taux de zéro-résultat de 20 à 40 % sur les catalogues e-commerce. Les utilisateurs abandonnent après deux tentatives infructueuses. La recherche interne de mauvaise qualité coûte des ventes perdues et une mauvaise expérience utilisateur.",
      solution: "Vos contenus (produits, articles, documents) sont encodés en vecteurs sémantiques et stockés dans Pinecone, Weaviate ou Elasticsearch. À chaque recherche, la requête est encodée de la même façon et les résultats les plus proches sémantiquement sont retournés — indépendamment des mots exacts utilisés. Un re-ranking hybride (sémantique + popularité + filtres métier) affine la pertinence.",
      steps: [
        { n: 1, title: "Indexation de votre contenu", desc: "Import et encodage vectoriel de votre catalogue, base de connaissances ou corpus documentaire. Support PDF, HTML, JSON, CSV." },
        { n: 2, title: "Configuration du moteur", desc: "Choix du modèle d'embedding (OpenAI, Cohere, sentence-transformers), configuration de la base vectorielle et des filtres métier." },
        { n: 3, title: "Intégration à votre interface", desc: "API REST ou SDK JavaScript pour intégrer le moteur dans votre site, app mobile ou outil interne. Temps de réponse < 200ms." },
        { n: 4, title: "Optimisation continue", desc: "Analyse des requêtes sans résultat, ajustement des embeddings, A/B testing des stratégies de re-ranking." },
      ],
      benefits: [
        { title: "Taux de zéro-résultat < 2 %", desc: "La recherche sémantique comprend l'intention et retourne toujours des résultats pertinents, même pour des requêtes imprécises." },
        { title: "Conversion +25 %", desc: "Les utilisateurs qui trouvent ce qu'ils cherchent achètent. Une recherche pertinente est l'un des meilleurs leviers de conversion e-commerce." },
        { title: "Mise à jour en temps réel", desc: "Chaque nouveau produit ou document est indexé en quelques secondes. Le moteur reflète toujours l'état actuel de votre catalogue." },
      ],
      faq: [
        { q: "Quelle différence avec Elasticsearch classique ?", a: "Elasticsearch classique fait de la correspondance exacte de termes. La recherche sémantique comprend l'intention. Les deux peuvent être combinés (hybrid search)." },
        { q: "Combien de documents peuvent être indexés ?", a: "De quelques milliers à plusieurs millions de documents selon la configuration. Les bases vectorielles modernes scalent horizontalement." },
        { q: "Le moteur supporte-t-il plusieurs langues ?", a: "Oui. Les modèles d'embedding multilingues (comme multilingual-e5) permettent une recherche cross-langue cohérente." },
        { q: "Quelle est la latence de recherche ?", a: "En dessous de 200ms pour la plupart des configurations. Des optimisations supplémentaires peuvent descendre sous 50ms si nécessaire." },
      ],
    },
    en: {
      metaTitle: "AI Semantic Search Engine — Wikolabs",
      metaDesc: "Vector search across your catalogues, knowledge bases and content. Relevant results from the first word. Elasticsearch + Pinecone.",
      tag: "Search & Structured Data",
      title: "Semantic Search Engine",
      subtitle: "Find what your users are looking for — even if they can't express it exactly",
      intro: "Exact keyword search is dead. Your users type intentions, not keywords. A catalogue of 10,000 products with exact search returns zero results for \"comfort long-walk shoe\" if the product is called \"premium orthopedic insole\". The semantic search engine understands the intent behind the query and returns the most relevant results, even with different terms.",
      problem: "Keyword-based search engines have a zero-result rate of 20–40% on e-commerce catalogues. Users abandon after two failed attempts. Poor internal search costs lost sales and a bad user experience.",
      solution: "Your content (products, articles, documents) is encoded as semantic vectors and stored in Pinecone, Weaviate or Elasticsearch. With each search, the query is encoded the same way and the semantically closest results are returned — regardless of the exact words used. Hybrid re-ranking (semantic + popularity + business filters) refines relevance.",
      steps: [
        { n: 1, title: "Content indexing", desc: "Import and vector encoding of your catalogue, knowledge base or document corpus. PDF, HTML, JSON, CSV supported." },
        { n: 2, title: "Engine configuration", desc: "Embedding model selection (OpenAI, Cohere, sentence-transformers), vector database setup and business filters." },
        { n: 3, title: "Interface integration", desc: "REST API or JavaScript SDK to integrate the engine into your site, mobile app or internal tool. Response time < 200ms." },
        { n: 4, title: "Continuous optimization", desc: "Analysis of zero-result queries, embedding adjustment, A/B testing of re-ranking strategies." },
      ],
      benefits: [
        { title: "Zero-result rate < 2%", desc: "Semantic search understands intent and always returns relevant results, even for imprecise queries." },
        { title: "Conversion +25%", desc: "Users who find what they're looking for buy. Relevant search is one of the best e-commerce conversion levers." },
        { title: "Real-time updates", desc: "Every new product or document is indexed in seconds. The engine always reflects your current catalogue state." },
      ],
      faq: [
        { q: "What's the difference from classic Elasticsearch?", a: "Classic Elasticsearch does exact term matching. Semantic search understands intent. Both can be combined (hybrid search)." },
        { q: "How many documents can be indexed?", a: "From a few thousand to several million documents depending on configuration. Modern vector databases scale horizontally." },
        { q: "Does the engine support multiple languages?", a: "Yes. Multilingual embedding models (like multilingual-e5) enable consistent cross-language search." },
        { q: "What is the search latency?", a: "Under 200ms for most configurations. Additional optimizations can bring this below 50ms if needed." },
      ],
    },
  },

  /* ─────────────────────────────────────────────────
     3-1  Recommandation Personnalisée
  ───────────────────────────────────────────────── */
  {
    slug: "recommandation-personnalisee",
    catSlug: "search-recommendation",
    fr: {
      metaTitle: "Système de Recommandation Personnalisée IA — Wikolabs",
      metaDesc: "Collaborative filtering et matching hybride pour surface le bon produit ou service au bon utilisateur. Panier moyen +30%. Déployé en 3 semaines.",
      tag: "Recherche & Données Structurées",
      title: "Recommandation Personnalisée",
      subtitle: "Le bon produit, à la bonne personne, au bon moment",
      intro: "Amazon réalise 35 % de son chiffre d'affaires grâce aux recommandations. Netflix retient ses abonnés avec des suggestions personnalisées. Cette capacité n'est plus réservée aux géants technologiques. Le système de recommandation personnalisée de Wikolabs s'adapte à votre catalogue et à votre audience, quel que soit votre taille, pour augmenter le panier moyen, la rétention et l'engagement.",
      problem: "Les carousels \"Produits populaires\" ou \"Vous pourriez aimer\" basés sur des règles manuelles sont génériques et peu efficaces. Ils affichent les mêmes produits à tout le monde, ignorent le contexte et manquent les moments où un utilisateur est prêt à acheter. Résultat : taux de clic bas, panier moyen stagnant, opportunités cross-sell ratées.",
      solution: "Le système combine plusieurs approches : collaborative filtering (ce qu'ont acheté les utilisateurs similaires), content-based filtering (produits similaires au profil de l'utilisateur) et matching contextuel (heure, device, localisation, historique récent). Les recommandations sont calculées en temps réel et personnalisées pour chaque session.",
      steps: [
        { n: 1, title: "Collecte des données comportementales", desc: "Intégration du tracking : vues produits, ajouts panier, achats, temps passé, recherches. Historique des interactions." },
        { n: 2, title: "Entraînement des modèles", desc: "Collaborative filtering (matrix factorization), content-based et modèles hybrides entraînés sur vos données." },
        { n: 3, title: "API de recommandation temps réel", desc: "API REST haute disponibilité (<50ms) pour intégration dans votre frontend : pages produit, panier, emails, push." },
        { n: 4, title: "A/B testing & optimisation", desc: "Tests continus des stratégies de recommandation. Optimisation du CTR, du taux de conversion et du panier moyen." },
      ],
      benefits: [
        { title: "Panier moyen +30 %", desc: "Les recommandations contextuelles et personnalisées augmentent la valeur de chaque commande en surfaçant les compléments pertinents." },
        { title: "Rétention +20 %", desc: "Les utilisateurs qui trouvent du contenu ou des produits pertinents reviennent. La personnalisation crée une expérience mémorable." },
        { title: "Zéro maintenance manuelle", desc: "Le modèle s'améliore automatiquement au fil des interactions. Plus vous avez de données, plus les recommandations sont précises." },
      ],
      faq: [
        { q: "Quelle quantité de données est nécessaire pour démarrer ?", a: "Un minimum de 10 000 interactions (vues, achats, clics) permet de produire des recommandations utiles. Les modèles s'améliorent avec plus de données." },
        { q: "Le système gère-t-il le cold start (nouveaux utilisateurs) ?", a: "Oui. Pour les nouveaux utilisateurs, des recommandations basées sur la popularité et le contexte de session sont utilisées jusqu'à l'accumulation de données." },
        { q: "Peut-on intégrer des règles métier (exclure certains produits) ?", a: "Oui. Des règles de filtrage métier peuvent être appliquées : exclusion de produits en rupture, promotion de certaines catégories, etc." },
        { q: "Le système est-il compatible avec les règles RGPD ?", a: "Oui. Aucune donnée personnelle identifiable n'est requise. Le système fonctionne sur des identifiants anonymes de session ou de cookie." },
      ],
    },
    en: {
      metaTitle: "AI Personalized Recommendation System — Wikolabs",
      metaDesc: "Collaborative filtering and hybrid matching to surface the right product to the right user. Average basket +30%. Deployed in 3 weeks.",
      tag: "Search & Structured Data",
      title: "Personalized Recommendation",
      subtitle: "The right product, to the right person, at the right time",
      intro: "Amazon generates 35% of its revenue from recommendations. Netflix retains subscribers with personalized suggestions. This capability is no longer reserved for tech giants. Wikolabs' personalized recommendation system adapts to your catalogue and audience, regardless of your size, to increase average basket, retention and engagement.",
      problem: "\"Popular products\" or \"You might like\" carousels based on manual rules are generic and ineffective. They show the same products to everyone, ignore context and miss moments when a user is ready to buy. Result: low click rates, stagnant average basket, missed cross-sell opportunities.",
      solution: "The system combines multiple approaches: collaborative filtering (what similar users purchased), content-based filtering (products similar to the user's profile) and contextual matching (time, device, location, recent history). Recommendations are calculated in real time and personalized for each session.",
      steps: [
        { n: 1, title: "Behavioral data collection", desc: "Tracking integration: product views, add-to-cart, purchases, time spent, searches. Interaction history." },
        { n: 2, title: "Model training", desc: "Collaborative filtering (matrix factorization), content-based and hybrid models trained on your data." },
        { n: 3, title: "Real-time recommendation API", desc: "High-availability REST API (<50ms) for frontend integration: product pages, cart, emails, push notifications." },
        { n: 4, title: "A/B testing & optimization", desc: "Continuous testing of recommendation strategies. CTR, conversion rate and average basket optimization." },
      ],
      benefits: [
        { title: "Average basket +30%", desc: "Contextual, personalized recommendations increase the value of each order by surfacing relevant add-ons." },
        { title: "Retention +20%", desc: "Users who find relevant content or products come back. Personalization creates a memorable experience." },
        { title: "Zero manual maintenance", desc: "The model improves automatically with interactions. The more data you have, the more accurate the recommendations." },
      ],
      faq: [
        { q: "How much data is needed to start?", a: "A minimum of 10,000 interactions (views, purchases, clicks) produces useful recommendations. Models improve with more data." },
        { q: "Does the system handle cold start (new users)?", a: "Yes. For new users, popularity-based and session-context recommendations are used until data accumulates." },
        { q: "Can business rules be integrated (exclude certain products)?", a: "Yes. Business filtering rules can be applied: exclude out-of-stock products, promote certain categories, etc." },
        { q: "Is the system GDPR compliant?", a: "Yes. No identifiable personal data is required. The system works on anonymous session or cookie identifiers." },
      ],
    },
  },

  /* ─────────────────────────────────────────────────
     3-2  Pipeline de Données Intelligent
  ───────────────────────────────────────────────── */
  {
    slug: "pipeline-donnees-intelligent",
    catSlug: "search-recommendation",
    fr: {
      metaTitle: "Pipeline de Données Intelligent IA — Wikolabs",
      metaDesc: "ETL, CDC, synchronisation temps réel et data warehouse interrogeable en langage naturel via MCP. Apache Kafka, Airflow, BigQuery.",
      tag: "Recherche & Données Structurées",
      title: "Pipeline de Données Intelligent",
      subtitle: "Vos données toujours synchronisées, propres et interrogeables en temps réel",
      intro: "Les données d'une entreprise modernes sont éparpillées sur des dizaines de sources : CRM, e-commerce, ads, ERP, SaaS. Sans pipeline robuste, ces données sont en silos, en retard et inutilisables pour la prise de décision. Le Pipeline de Données Intelligent orchestre l'extraction, la transformation et le chargement de toutes vos sources dans un entrepôt de données unifié, interrogeable en temps réel.",
      problem: "Les données en silos empêchent une vue unifiée du business. Les exports manuels sont en retard de 24 à 48h. Les transformations ad hoc introduisent des erreurs. Sans CDC (Change Data Capture), les mises à jour manquées créent des incohérences entre systèmes. Et sans observabilité, les pannes de pipeline restent invisibles.",
      solution: "Un pipeline automatisé ingère vos données via des connecteurs natifs (Fivetran, Airbyte, CDC) et les charge dans BigQuery ou Snowflake après transformation. Apache Airflow orchestre les dépendances et les reprises en cas d'erreur. Un agent LLM (via MCP) permet d'interroger le data warehouse en langage naturel. Un tableau de bord d'observabilité surveille la fraîcheur et la qualité des données.",
      steps: [
        { n: 1, title: "Cartographie des sources", desc: "Audit de toutes vos sources de données : API, bases de données, fichiers, SaaS. Priorisation par valeur business." },
        { n: 2, title: "Construction des connecteurs", desc: "Développement ou configuration des connecteurs ETL/ELT, CDC pour les sources critiques (MySQL, PostgreSQL, Salesforce, Shopify)." },
        { n: 3, title: "Modélisation du data warehouse", desc: "Conception du schéma en étoile ou Medallion (Bronze/Silver/Gold) dans BigQuery ou Snowflake. Couche dbt pour les transformations." },
        { n: 4, title: "Orchestration & observabilité", desc: "Déploiement Airflow ou Prefect pour l'orchestration, alertes en cas de retard ou d'erreur, dashboard de qualité des données." },
      ],
      benefits: [
        { title: "Données fraîches en < 5 minutes", desc: "Le pipeline CDC capture chaque changement dans vos sources et propage les mises à jour en temps quasi-réel dans votre entrepôt." },
        { title: "Vue unifiée du business", desc: "Toutes vos sources dans un seul entrepôt. CRM, ventes, ads, produit — tout est cohérent et comparable." },
        { title: "Zéro panne silencieuse", desc: "Le système de monitoring détecte et alerte sur chaque anomalie de pipeline (retard, erreur, données manquantes) avant impact business." },
      ],
      faq: [
        { q: "Quelles sources de données pouvez-vous connecter ?", a: "CRM (HubSpot, Salesforce), e-commerce (Shopify, WooCommerce), ads (Google, Meta), ERP, bases SQL, APIs REST, fichiers S3 et GCS." },
        { q: "Quelle est la fréquence de rafraîchissement minimale ?", a: "Avec CDC, les mises à jour sont propagées en moins d'une minute. Sans CDC, les pipelines batch tournent toutes les 5 à 15 minutes." },
        { q: "Faut-il une expertise data engineering en interne ?", a: "Non. Nous gérons la mise en place et la maintenance. Vos équipes accèdent aux données via des dashboards et l'interface de requête naturelle." },
        { q: "Les transformations dbt sont-elles maintenables par nos équipes ?", a: "Oui. dbt est conçu pour être documenté et géré par des data analysts avec des compétences SQL standards. Nous formons vos équipes." },
      ],
    },
    en: {
      metaTitle: "AI Intelligent Data Pipeline — Wikolabs",
      metaDesc: "ETL, CDC, real-time sync and data warehouse queryable in plain language via MCP. Apache Kafka, Airflow, BigQuery.",
      tag: "Search & Structured Data",
      title: "Intelligent Data Pipeline",
      subtitle: "Your data always synchronized, clean and queryable in real time",
      intro: "Modern company data is scattered across dozens of sources: CRM, e-commerce, ads, ERP, SaaS. Without a robust pipeline, this data lives in silos, arrives late and is unusable for decision-making. The Intelligent Data Pipeline orchestrates extraction, transformation and loading of all your sources into a unified data warehouse, queryable in real time.",
      problem: "Siloed data prevents a unified business view. Manual exports lag 24–48 hours. Ad hoc transformations introduce errors. Without CDC (Change Data Capture), missed updates create inconsistencies between systems. And without observability, pipeline failures stay invisible.",
      solution: "An automated pipeline ingests your data via native connectors (Fivetran, Airbyte, CDC) and loads it into BigQuery or Snowflake after transformation. Apache Airflow orchestrates dependencies and retries on error. An LLM agent (via MCP) enables natural language data warehouse queries. An observability dashboard monitors data freshness and quality.",
      steps: [
        { n: 1, title: "Source mapping", desc: "Audit of all your data sources: APIs, databases, files, SaaS. Prioritization by business value." },
        { n: 2, title: "Connector construction", desc: "Development or configuration of ETL/ELT connectors, CDC for critical sources (MySQL, PostgreSQL, Salesforce, Shopify)." },
        { n: 3, title: "Data warehouse modeling", desc: "Star schema or Medallion (Bronze/Silver/Gold) design in BigQuery or Snowflake. dbt layer for transformations." },
        { n: 4, title: "Orchestration & observability", desc: "Airflow or Prefect deployment for orchestration, alerts on delay or error, data quality dashboard." },
      ],
      benefits: [
        { title: "Fresh data in < 5 minutes", desc: "The CDC pipeline captures every change in your sources and propagates updates in near real time to your warehouse." },
        { title: "Unified business view", desc: "All your sources in one warehouse. CRM, sales, ads, product — everything is consistent and comparable." },
        { title: "Zero silent failures", desc: "The monitoring system detects and alerts on every pipeline anomaly (delay, error, missing data) before business impact." },
      ],
      faq: [
        { q: "Which data sources can you connect?", a: "CRM (HubSpot, Salesforce), e-commerce (Shopify, WooCommerce), ads (Google, Meta), ERP, SQL databases, REST APIs, S3 and GCS files." },
        { q: "What is the minimum refresh frequency?", a: "With CDC, updates propagate in under one minute. Without CDC, batch pipelines run every 5–15 minutes." },
        { q: "Do we need in-house data engineering expertise?", a: "No. We handle setup and maintenance. Your teams access data via dashboards and the natural language query interface." },
        { q: "Are dbt transformations maintainable by our teams?", a: "Yes. dbt is designed to be documented and managed by data analysts with standard SQL skills. We train your teams." },
      ],
    },
  },

  /* ─────────────────────────────────────────────────
     3-3  Fine-tuning & MLOps
  ───────────────────────────────────────────────── */
  {
    slug: "fine-tuning-mlops",
    catSlug: "search-recommendation",
    fr: {
      metaTitle: "Fine-tuning & MLOps IA — Wikolabs",
      metaDesc: "Entraînement, RLHF, déploiement et monitoring de modèles IA sur GCP, AWS ou Azure. Pipeline MLOps complet de la donnée au modèle en production.",
      tag: "Recherche & Données Structurées",
      title: "Fine-tuning & MLOps",
      subtitle: "Des modèles IA entraînés sur vos données, déployés et monitorés en production",
      intro: "Les modèles de fondation (GPT, Claude, Llama) sont puissants mais génériques. Pour des performances optimales sur votre domaine spécifique — classification de tickets, extraction d'entités, génération de contenu métier — il faut un modèle fine-tuné sur vos données. Wikolabs prend en charge l'intégralité du cycle : préparation des données, fine-tuning, évaluation, déploiement et monitoring.",
      problem: "Les modèles génériques font des erreurs sur le vocabulaire et les nuances propres à votre secteur. Sans pipeline MLOps, les modèles se dégradent en production sans qu'on le détecte. L'inférence sur des modèles non optimisés coûte cher. Et sans infrastructure de déploiement, les modèles restent des POC qui n'arrivent jamais en production.",
      solution: "Nous construisons un pipeline MLOps complet : préparation et annotation des données, fine-tuning sur votre infrastructure cloud (GCP Vertex AI, AWS SageMaker ou Azure ML), évaluation comparative contre le modèle de base, déploiement en endpoint API et monitoring continu (drift, performance, coût d'inférence). Le modèle est ré-entraîné automatiquement quand ses performances se dégradent.",
      steps: [
        { n: 1, title: "Préparation & annotation des données", desc: "Constitution du dataset d'entraînement, annotation (manuelle ou semi-automatique), validation de la qualité et split train/eval/test." },
        { n: 2, title: "Fine-tuning & évaluation", desc: "Entraînement sur Vertex AI, SageMaker ou Azure ML. Évaluation sur métriques métier. Comparaison modèle base vs fine-tuné." },
        { n: 3, title: "Déploiement en production", desc: "Déploiement sur endpoint API scalable. Optimisation inférence (quantization, batching). Intégration dans vos systèmes existants." },
        { n: 4, title: "Monitoring & ré-entraînement", desc: "Surveillance des métriques de performance, détection du concept drift et déclenchement automatique du ré-entraînement si nécessaire." },
      ],
      benefits: [
        { title: "Performance +40 % vs modèle générique", desc: "Un modèle fine-tuné sur votre domaine obtient en moyenne 40 % de meilleures performances sur vos tâches spécifiques." },
        { title: "Coût d'inférence réduit de 60 %", desc: "Un petit modèle spécialisé coûte beaucoup moins cher à faire tourner qu'un grand modèle générique pour la même tâche." },
        { title: "Modèle propriétaire", desc: "Le modèle entraîné sur vos données vous appartient. C'est un actif stratégique qui prend de la valeur avec le temps." },
      ],
      faq: [
        { q: "Quel volume de données est nécessaire pour le fine-tuning ?", a: "Entre 500 et 5 000 exemples annotés pour un fine-tuning supervisé. Des techniques comme LoRA permettent de fine-tuner avec moins de données." },
        { q: "Quels modèles de base peuvent être fine-tunés ?", a: "GPT-4o, Claude, Llama 3, Mistral, Phi-3 et tout modèle open source. Le choix dépend de vos contraintes de coût, latence et confidentialité." },
        { q: "Le modèle fine-tuné peut-il tourner on-premise ?", a: "Oui, pour les modèles open source (Llama, Mistral). Nous gérons le déploiement sur vos serveurs ou votre cloud privé." },
        { q: "Comment mesure-t-on les performances du modèle ?", a: "Nous définissons des métriques métier spécifiques à votre cas d'usage (précision, rappel, F1, BLEU selon la tâche) et les suivons en continu." },
      ],
    },
    en: {
      metaTitle: "AI Fine-tuning & MLOps — Wikolabs",
      metaDesc: "Model training, RLHF, deployment and monitoring on GCP, AWS or Azure. Complete MLOps pipeline from data to model in production.",
      tag: "Search & Structured Data",
      title: "Fine-tuning & MLOps",
      subtitle: "AI models trained on your data, deployed and monitored in production",
      intro: "Foundation models (GPT, Claude, Llama) are powerful but generic. For optimal performance on your specific domain — ticket classification, entity extraction, business content generation — you need a model fine-tuned on your data. Wikolabs handles the full cycle: data preparation, fine-tuning, evaluation, deployment and monitoring.",
      problem: "Generic models make errors on vocabulary and nuances specific to your sector. Without an MLOps pipeline, models degrade in production undetected. Inference on unoptimized models is expensive. And without deployment infrastructure, models remain POCs that never reach production.",
      solution: "We build a complete MLOps pipeline: data preparation and annotation, fine-tuning on your cloud infrastructure (GCP Vertex AI, AWS SageMaker or Azure ML), comparative evaluation against the base model, API endpoint deployment and continuous monitoring (drift, performance, inference cost). The model is automatically retrained when performance degrades.",
      steps: [
        { n: 1, title: "Data preparation & annotation", desc: "Training dataset assembly, annotation (manual or semi-automatic), quality validation and train/eval/test split." },
        { n: 2, title: "Fine-tuning & evaluation", desc: "Training on Vertex AI, SageMaker or Azure ML. Business metric evaluation. Base model vs. fine-tuned comparison." },
        { n: 3, title: "Production deployment", desc: "Deployment on scalable API endpoint. Inference optimization (quantization, batching). Integration into your existing systems." },
        { n: 4, title: "Monitoring & retraining", desc: "Performance metric monitoring, concept drift detection and automatic retraining trigger when needed." },
      ],
      benefits: [
        { title: "Performance +40% vs generic model", desc: "A fine-tuned domain model averages 40% better performance on your specific tasks." },
        { title: "Inference cost reduced by 60%", desc: "A small specialized model costs much less to run than a large generic model for the same task." },
        { title: "Proprietary model", desc: "The model trained on your data belongs to you. It's a strategic asset that grows in value over time." },
      ],
      faq: [
        { q: "How much data is needed for fine-tuning?", a: "Between 500 and 5,000 annotated examples for supervised fine-tuning. Techniques like LoRA enable fine-tuning with less data." },
        { q: "Which base models can be fine-tuned?", a: "GPT-4o, Claude, Llama 3, Mistral, Phi-3 and any open-source model. Choice depends on your cost, latency and confidentiality constraints." },
        { q: "Can the fine-tuned model run on-premise?", a: "Yes, for open-source models (Llama, Mistral). We manage deployment on your servers or private cloud." },
        { q: "How are model performance measured?", a: "We define business-specific metrics for your use case (precision, recall, F1, BLEU depending on task) and monitor them continuously." },
      ],
    },
  },
];
