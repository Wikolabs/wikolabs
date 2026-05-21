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
];
