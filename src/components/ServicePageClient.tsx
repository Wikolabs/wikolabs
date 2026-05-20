"use client";

import Link from "next/link";
import {
  HiArrowLeft,
  HiEnvelope,
} from "react-icons/hi2";
import {
  LuLinkedin,
  LuEye,
  LuSearch,
  LuMegaphone,
  LuTarget,
  LuCalendarCheck,
  LuFileText,
  LuActivity,
  LuMessageSquare,
  LuBell,
  LuNetwork,
  LuScan,
  LuChartBar as LuChartBarIcon,
  LuFileSearch,
  LuTrendingUp,
  LuDatabase,
  LuLayers,
  LuWorkflow,
  LuBrain,
  LuScanLine,
  LuMap,
  LuBox,
  LuCheck,
} from "react-icons/lu";
import {
  SiPython,
  SiLangchain,
  SiFastapi,
  SiN8N,
  SiGooglebigquery,
  SiScikitlearn,
  SiTensorflow,
  SiPytorch,
  SiGooglecloud,
} from "react-icons/si";
import { IconType } from "react-icons";
import styles from "./ServicePageClient.module.css";

const CONTACT_EMAIL = "contact@wikolabs.com";
const LINKEDIN_URL = "https://www.linkedin.com/company/112261574";

interface Tech {
  Icon?: IconType;
  abbr?: string;
  color: string;
  n: string;
}

const PY: Tech = { Icon: SiPython, color: "#3776AB", n: "Python" };
const LG: Tech = { abbr: "LG", color: "#22D3EE", n: "LangGraph" };
const LC: Tech = { Icon: SiLangchain, color: "#1C3C3C", n: "LangChain" };
const FA: Tech = { Icon: SiFastapi, color: "#009688", n: "FastAPI" };
const N8: Tech = { Icon: SiN8N, color: "#EA4B71", n: "n8n" };
const BQ: Tech = { Icon: SiGooglebigquery, color: "#4285F4", n: "BigQuery" };
const SK: Tech = { Icon: SiScikitlearn, color: "#F7931E", n: "Scikit-learn" };
const TF: Tech = { Icon: SiTensorflow, color: "#FF6F00", n: "TensorFlow" };
const PT: Tech = { Icon: SiPytorch, color: "#EE4C2C", n: "PyTorch" };
const ES: Tech = { abbr: "ES", color: "#005571", n: "Elastic" };
const DF: Tech = { abbr: "DF", color: "#4285F4", n: "Dataflow" };
const GC: Tech = { Icon: SiGooglecloud, color: "#4285F4", n: "GCP" };
const WH: Tech = { abbr: "WH", color: "#22C55E", n: "Whisper" };
const PG: Tech = { abbr: "PG", color: "#4169E1", n: "PostgreSQL" };
const DS: Tech = { abbr: "DS", color: "#00B0FF", n: "DocuSign" };
const CL: Tech = { abbr: "CL", color: "#00B0FF", n: "Calendly" };

interface Agent {
  Icon: IconType;
  color: string;
  title: { fr: string; en: string };
  desc: { fr: string; en: string };
  example: { fr: string; en: string };
  techs: Tech[];
}

interface ProcessStep {
  title: { fr: string; en: string };
  desc: { fr: string; en: string };
}

interface ServiceData {
  tag: { fr: string; en: string };
  title: { fr: string; en: string };
  titleEm: { fr: string; en: string };
  desc: { fr: string; en: string };
  features: { fr: string; en: string }[];
  agentsTag: { fr: string; en: string };
  agentsTitle: { fr: string; en: string };
  agentsDesc: { fr: string; en: string };
  agents: Agent[];
  processTag: { fr: string; en: string };
  processTitle: { fr: string; en: string };
  processDesc: { fr: string; en: string };
  steps: ProcessStep[];
}

const SERVICES: Record<string, ServiceData> = {
  "commercial-automation": {
    tag: { fr: "Automatisation Commerciale", en: "Sales Automation" },
    title: { fr: "Votre cycle commercial,", en: "Your entire sales cycle," },
    titleEm: { fr: "entièrement automatisé", en: "fully automated" },
    desc: {
      fr: "Du sourcing au closing — chaque étape de votre cycle de vente est orchestrée par des agents IA spécialisés qui travaillent en continu, sans fatigue, pour remplir votre pipeline et conclure plus de deals.",
      en: "From sourcing to closing — every step of your sales cycle is orchestrated by specialized AI agents that work continuously, without fatigue, to fill your pipeline and close more deals.",
    },
    features: [
      { fr: "Génération de leads automatisée", en: "Automated lead generation" },
      { fr: "Outreach multicanal IA", en: "AI multichannel outreach" },
      { fr: "Qualification BANT intelligente", en: "Intelligent BANT qualification" },
      { fr: "Propositions commerciales auto-générées", en: "Auto-generated commercial proposals" },
      { fr: "Rétention & upsell prédictif", en: "Predictive retention & upsell" },
    ],
    agentsTag: { fr: "Nos agents commerciaux", en: "Our sales agents" },
    agentsTitle: { fr: "7 agents, un pipeline complet", en: "7 agents, one complete pipeline" },
    agentsDesc: {
      fr: "Chaque agent prend en charge une étape clé de votre cycle de vente. Ensemble, ils forment un système autonome qui ne s'arrête jamais.",
      en: "Each agent handles a key stage of your sales cycle. Together, they form an autonomous system that never stops.",
    },
    agents: [
      {
        Icon: LuEye,
        color: "#22D3EE",
        title: { fr: "Agent Veille Marché", en: "Market Intelligence Agent" },
        desc: {
          fr: "Scraping quotidien de vos concurrents, nouveaux entrants, appels d'offres et opportunités sectorielles. Le résumé LLM est livré chaque matin dans Notion ou Slack, avec les signaux d'affaires prioritaires.",
          en: "Daily scraping of competitors, new entrants, RFPs and sector opportunities. The LLM summary is delivered each morning in Notion or Slack, with prioritized business signals.",
        },
        example: {
          fr: "Résultat : 3 appels d'offres détectés cette semaine, 2 concurrents avec baisse de prix — résumé en 2 minutes.",
          en: "Result: 3 RFPs detected this week, 2 competitors with price drops — summary in 2 minutes.",
        },
        techs: [LG, PY, N8],
      },
      {
        Icon: LuSearch,
        color: "#3776AB",
        title: { fr: "Agent Sourcing de Leads", en: "Lead Sourcing Agent" },
        desc: {
          fr: "Collecte automatisée de contacts B2B qualifiés depuis Apollo, LinkedIn Sales Navigator et annuaires sectoriels. Chaque lead est enrichi (poste, taille entreprise, score ICP) et synchronisé dans votre CRM sans intervention manuelle.",
          en: "Automated collection of qualified B2B contacts from Apollo, LinkedIn Sales Navigator and sector directories. Each lead is enriched (title, company size, ICP score) and synced into your CRM without manual work.",
        },
        example: {
          fr: "Résultat : 200 leads qualifiés ICP+/semaine importés automatiquement dans HubSpot.",
          en: "Result: 200 ICP+ qualified leads/week automatically imported into HubSpot.",
        },
        techs: [LG, LC, PY],
      },
      {
        Icon: LuMegaphone,
        color: "#EA4B71",
        title: { fr: "Agent Outreach Multicanal", en: "Multichannel Outreach Agent" },
        desc: {
          fr: "Séquences personnalisées email + LinkedIn + appel générées par LLM selon le profil du prospect et son secteur. Tracking des ouvertures, clics et réponses, relances automatiques, A/B testing des messages.",
          en: "LLM-personalized email + LinkedIn + call sequences based on prospect profile and sector. Open, click and reply tracking, automatic follow-ups, message A/B testing.",
        },
        example: {
          fr: "Résultat : taux de réponse 3× supérieur à l'outreach manuel sur le même segment.",
          en: "Result: 3× higher reply rate than manual outreach on the same segment.",
        },
        techs: [LG, N8, PY],
      },
      {
        Icon: LuTarget,
        color: "#F7931E",
        title: { fr: "Agent Qualification BANT", en: "BANT Qualification Agent" },
        desc: {
          fr: "Analyse automatique des réponses prospects et des données CRM pour évaluer Budget, Autorité, Besoin et Timeline. Les HOT leads sont routés vers le setter, les COLD leads vers une séquence nurturing adaptée.",
          en: "Automatic analysis of prospect replies and CRM data to assess Budget, Authority, Need and Timeline. HOT leads are routed to the setter, COLD leads to an adapted nurturing sequence.",
        },
        example: {
          fr: "Résultat : 40% du temps commercial économisé sur la qualification — concentré sur les deals chauds.",
          en: "Result: 40% sales time saved on qualification — focused on hot deals.",
        },
        techs: [LG, PY],
      },
      {
        Icon: LuCalendarCheck,
        color: "#22C55E",
        title: { fr: "Agent Setter (Prise de RDV)", en: "Setter Agent (Meeting Booking)" },
        desc: {
          fr: "Propose des créneaux via Calendly selon la disponibilité du commercial, envoie les confirmations, les rappels J-1 et J-0, et génère un brief pré-call structuré (contexte prospect, objections anticipées, angle d'approche).",
          en: "Proposes calendar slots via Calendly based on sales rep availability, sends confirmations, J-1 and J-0 reminders, and generates a structured pre-call brief (prospect context, anticipated objections, approach angle).",
        },
        example: {
          fr: "Résultat : 0 no-show sur 3 semaines grâce aux rappels automatiques + brief pré-call reçu 1h avant.",
          en: "Result: 0 no-shows over 3 weeks thanks to automatic reminders + pre-call brief received 1h before.",
        },
        techs: [LG, FA, PY, CL],
      },
      {
        Icon: LuFileText,
        color: "#9B59B6",
        title: { fr: "Agent Proposition Commerciale", en: "Commercial Proposal Agent" },
        desc: {
          fr: "Draft de proposition commerciale généré depuis les notes du discovery call, contextualisé selon le secteur et les enjeux du prospect. PDF généré automatiquement et envoyé via DocuSign ou email selon la préférence client.",
          en: "Commercial proposal draft generated from discovery call notes, contextualized to the prospect's sector and challenges. PDF auto-generated and sent via DocuSign or email according to client preference.",
        },
        example: {
          fr: "Résultat : proposition envoyée dans l'heure suivant le call au lieu de 3 jours.",
          en: "Result: proposal sent within the hour after the call instead of 3 days.",
        },
        techs: [LG, FA, PY, DS],
      },
      {
        Icon: LuActivity,
        color: "#D4AF37",
        title: { fr: "Agent Rétention & Upsell", en: "Retention & Upsell Agent" },
        desc: {
          fr: "Détecte les signaux de churn risk par analyse comportementale (fréquence d'utilisation, tickets ouverts, NPS). Déclenche des emails de réengagement personnalisés et des séquences upsell après les jalons de succès client.",
          en: "Detects churn risk signals through behavioral analysis (usage frequency, open tickets, NPS). Triggers personalized re-engagement emails and upsell sequences after customer success milestones.",
        },
        example: {
          fr: "Résultat : -28% de churn sur le segment SMB après 2 mois, +15% d'expansion revenue.",
          en: "Result: -28% churn on the SMB segment after 2 months, +15% expansion revenue.",
        },
        techs: [LG, N8, PY],
      },
    ],
    processTag: { fr: "Comment on travaille", en: "How we work" },
    processTitle: { fr: "Notre processus de livraison", en: "Our delivery process" },
    processDesc: {
      fr: "De l'audit initial au déploiement en production, voici comment nous construisons et livrons votre solution.",
      en: "From the initial audit to production deployment, here is how we build and deliver your solution.",
    },
    steps: [
      {
        title: { fr: "Audit Commercial", en: "Commercial Audit" },
        desc: {
          fr: "Cartographie de votre funnel actuel, état du CRM, points de friction manuels et métriques de conversion.",
          en: "Mapping of your current funnel, CRM state, manual friction points and conversion metrics.",
        },
      },
      {
        title: { fr: "Architecture Multi-agent", en: "Multi-agent Architecture" },
        desc: {
          fr: "Conception du système d'agents adapté à votre cycle de vente, intégrations CRM et canaux de communication.",
          en: "Design of the agent system tailored to your sales cycle, CRM integrations and communication channels.",
        },
      },
      {
        title: { fr: "Intégration & Formation", en: "Integration & Training" },
        desc: {
          fr: "Connexion à votre CRM, LinkedIn, email, calendrier et outils existants. Formation des équipes commerciales.",
          en: "Connection to your CRM, LinkedIn, email, calendar and existing tools. Sales team onboarding.",
        },
      },
      {
        title: { fr: "Lancement & Optimisation", en: "Launch & Optimization" },
        desc: {
          fr: "Déploiement en production, monitoring des KPIs, itérations hebdomadaires sur les performances.",
          en: "Production deployment, KPI monitoring, weekly performance iterations.",
        },
      },
    ],
  },

  "production-ai": {
    tag: { fr: "Support & Service Client IA", en: "AI Customer Support" },
    title: { fr: "Un support client qui", en: "Customer support that" },
    titleEm: { fr: "ne dort jamais", en: "never sleeps" },
    desc: {
      fr: "Des agents IA déployés sur vos canaux de communication qui gèrent les tickets, qualifient les demandes, onboardent vos clients et capturent l'intelligence de chaque interaction — sans latence, sans erreur.",
      en: "AI agents deployed across your communication channels that handle tickets, qualify requests, onboard customers and capture the intelligence of every interaction — without latency, without errors.",
    },
    features: [
      { fr: "Support 24/7 sans surcoût", en: "24/7 support without added cost" },
      { fr: "Réponse automatique multicanal", en: "Automatic multichannel response" },
      { fr: "Escalade intelligente vers humain", en: "Intelligent escalation to human" },
      { fr: "Onboarding client automatisé", en: "Automated client onboarding" },
      { fr: "Intelligence conversationnelle", en: "Conversational intelligence" },
    ],
    agentsTag: { fr: "Nos agents support", en: "Our support agents" },
    agentsTitle: { fr: "4 agents, zéro ticket oublié", en: "4 agents, zero forgotten ticket" },
    agentsDesc: {
      fr: "Du premier contact à l'onboarding complet — chaque interaction client est gérée, tracée et enrichie automatiquement.",
      en: "From first contact to full onboarding — every customer interaction is handled, tracked and enriched automatically.",
    },
    agents: [
      {
        Icon: LuMessageSquare,
        color: "#22D3EE",
        title: { fr: "Agent SAV E-commerce (RAG)", en: "E-commerce SAV Agent (RAG)" },
        desc: {
          fr: "Répond aux clients par email et WhatsApp sur le statut des commandes, délais de livraison, procédures de retour et politiques tarifaires. La base de connaissances est dans Notion, mise à jour sans intervention technique. Compatible WooCommerce, Shopify et Prestashop.",
          en: "Answers customers via email and WhatsApp on order status, delivery times, return procedures and pricing policies. Knowledge base lives in Notion, updated without technical intervention. Compatible with WooCommerce, Shopify and Prestashop.",
        },
        example: {
          fr: "Résultat : 78% des tickets traités automatiquement, temps de réponse moyen de 45 secondes.",
          en: "Result: 78% of tickets handled automatically, average response time of 45 seconds.",
        },
        techs: [LC, LG, FA, N8],
      },
      {
        Icon: LuBell,
        color: "#F7931E",
        title: { fr: "Agent Triage & Escalade", en: "Triage & Escalation Agent" },
        desc: {
          fr: "Priorise automatiquement chaque ticket entrant selon l'urgence (bloquant, critique, normal), la catégorie (technique, facturation, livraison) et le profil client. Répond aux FAQ, résout les cas simples et escalade avec contexte complet vers le bon agent humain.",
          en: "Automatically prioritizes each incoming ticket by urgency (blocking, critical, normal), category (technical, billing, delivery) and customer profile. Answers FAQs, resolves simple cases and escalates with full context to the right human agent.",
        },
        example: {
          fr: "Résultat : -65% de tickets escaladés au support humain, SLA respecté à 98%.",
          en: "Result: -65% tickets escalated to human support, SLA met at 98%.",
        },
        techs: [LG, PY],
      },
      {
        Icon: LuNetwork,
        color: "#22C55E",
        title: { fr: "Agent Onboarding Client", en: "Client Onboarding Agent" },
        desc: {
          fr: "Automatise l'ensemble du parcours d'onboarding : email de bienvenue personnalisé, checklist d'étapes suivie dans Notion ou Jira, rappels intelligents pour les étapes non complétées, reporting d'avancement pour le CSM.",
          en: "Automates the entire onboarding journey: personalized welcome email, step checklist tracked in Notion or Jira, intelligent reminders for incomplete steps, progress reporting for the CSM.",
        },
        example: {
          fr: "Résultat : time-to-value réduit de 14 jours à 4 jours, NPS onboarding +22 points.",
          en: "Result: time-to-value reduced from 14 days to 4 days, onboarding NPS +22 points.",
        },
        techs: [N8, PY, LC],
      },
      {
        Icon: LuScan,
        color: "#9B59B6",
        title: { fr: "Agent Notes Discovery", en: "Discovery Notes Agent" },
        desc: {
          fr: "Transcription automatique de tous vos calls clients avec Whisper, structurée par l'LLM en fiche client : besoins exprimés, objections, décisions prises, prochaines étapes. La fiche est créée automatiquement dans votre CRM.",
          en: "Automatic transcription of all your client calls with Whisper, structured by LLM into a client record: expressed needs, objections, decisions made, next steps. The record is automatically created in your CRM.",
        },
        example: {
          fr: "Résultat : 100% des calls tracés sans saisie manuelle, mémoire client parfaite pour toute l'équipe.",
          en: "Result: 100% of calls tracked without manual entry, perfect client memory for the whole team.",
        },
        techs: [WH, PY, LC, LG],
      },
    ],
    processTag: { fr: "Comment on travaille", en: "How we work" },
    processTitle: { fr: "Notre processus de livraison", en: "Our delivery process" },
    processDesc: {
      fr: "De l'audit initial au déploiement en production, voici comment nous construisons et livrons votre solution.",
      en: "From the initial audit to production deployment, here is how we build and deliver your solution.",
    },
    steps: [
      {
        title: { fr: "Audit Support", en: "Support Audit" },
        desc: {
          fr: "Analyse de votre volume de tickets, temps de réponse, taux d'escalade et canaux de communication actuels.",
          en: "Analysis of your ticket volume, response times, escalation rate and current communication channels.",
        },
      },
      {
        title: { fr: "Base de Connaissances", en: "Knowledge Base" },
        desc: {
          fr: "Structuration de vos FAQ, politiques et règles métier dans une base de connaissances indexée pour le RAG.",
          en: "Structuring your FAQs, policies and business rules in an indexed knowledge base for RAG.",
        },
      },
      {
        title: { fr: "Intégration Canaux", en: "Channel Integration" },
        desc: {
          fr: "Connexion à votre e-commerce, CRM, WhatsApp, email et outils de ticketing (Zendesk, Freshdesk, Linear).",
          en: "Connection to your e-commerce platform, CRM, WhatsApp, email and ticketing tools (Zendesk, Freshdesk, Linear).",
        },
      },
      {
        title: { fr: "Déploiement & Qualité", en: "Deployment & Quality" },
        desc: {
          fr: "Lancement en production avec métriques de qualité (précision, satisfaction) et amélioration continue.",
          en: "Production launch with quality metrics (accuracy, satisfaction) and continuous improvement.",
        },
      },
    ],
  },

  "decision-intelligence": {
    tag: { fr: "Intelligence Décisionnelle", en: "Decision Intelligence" },
    title: { fr: "Vos données vous parlent,", en: "Your data finally" },
    titleEm: { fr: "enfin", en: "speaks to you" },
    desc: {
      fr: "Transformez vos données brutes en prévisions actionnables, dashboards en langage naturel et alertes intelligentes. Vos équipes prennent de meilleures décisions, plus vite, sans avoir besoin d'un analyste.",
      en: "Transform your raw data into actionable forecasts, natural language dashboards and intelligent alerts. Your teams make better decisions, faster, without needing an analyst.",
    },
    features: [
      { fr: "BI en langage naturel", en: "Natural language BI" },
      { fr: "Prévisions 3/6/12 mois", en: "3/6/12-month forecasts" },
      { fr: "Détection d'anomalies temps réel", en: "Real-time anomaly detection" },
      { fr: "Reporting PPT/PDF automatique", en: "Automatic PPT/PDF reporting" },
      { fr: "CRM piloté par l'IA", en: "AI-driven CRM" },
    ],
    agentsTag: { fr: "Nos agents BI", en: "Our BI agents" },
    agentsTitle: { fr: "4 agents, des insights en temps réel", en: "4 agents, real-time insights" },
    agentsDesc: {
      fr: "Chaque agent transforme une couche de vos données en intelligence opérationnelle directement accessible par vos équipes.",
      en: "Each agent transforms a layer of your data into operational intelligence directly accessible by your teams.",
    },
    agents: [
      {
        Icon: LuChartBarIcon,
        color: "#4285F4",
        title: { fr: "Agent BI Langage Naturel", en: "Natural Language BI Agent" },
        desc: {
          fr: "Posez vos questions en français ou en anglais — l'agent génère le SQL, interroge votre data warehouse et produit un dashboard visuel interactif. Vos équipes lisent leurs KPIs sans passer par un analyste ou par PowerBI.",
          en: "Ask your questions in plain language — the agent generates SQL, queries your data warehouse and produces an interactive visual dashboard. Your teams read their KPIs without going through an analyst or PowerBI.",
        },
        example: {
          fr: "Exemple : 'Quels sont mes 10 clients avec la plus forte LTV ce trimestre ?' → dashboard en 8 secondes.",
          en: "Example: 'Who are my top 10 customers by LTV this quarter?' → dashboard in 8 seconds.",
        },
        techs: [BQ, LG, PY],
      },
      {
        Icon: LuFileSearch,
        color: "#9B59B6",
        title: { fr: "Reporting Automatique (PPT/PDF)", en: "Automatic Reporting (PPT/PDF)" },
        desc: {
          fr: "Génération automatique de rapports exécutifs (PowerPoint ou PDF) depuis WooCommerce, Shopify, votre CRM ou toute source de données. Enrichis de données externes (marché, benchmark) et envoyés automatiquement aux décideurs.",
          en: "Automatic generation of executive reports (PowerPoint or PDF) from WooCommerce, Shopify, your CRM or any data source. Enriched with external data (market, benchmark) and automatically sent to decision-makers.",
        },
        example: {
          fr: "Exemple : rapport mensuel CEO envoyé le 1er de chaque mois à 8h — zéro préparation manuelle.",
          en: "Example: monthly CEO report sent on the 1st of each month at 8am — zero manual preparation.",
        },
        techs: [PY, BQ, N8],
      },
      {
        Icon: LuTrendingUp,
        color: "#22C55E",
        title: { fr: "Forecasting & Détection d'Anomalies", en: "Forecasting & Anomaly Detection" },
        desc: {
          fr: "Modèles de prévision de revenus sur 3, 6 et 12 mois entraînés sur vos données historiques. Détection en temps réel des anomalies (pic de churn, baisse de conversion, dérive de coûts) avec alertes automatiques dans Slack ou email.",
          en: "Revenue forecasting models for 3, 6 and 12 months trained on your historical data. Real-time anomaly detection (churn spikes, conversion drops, cost drift) with automatic alerts in Slack or email.",
        },
        example: {
          fr: "Exemple : alerte Slack reçue 3 semaines avant un pic de churn — action corrective prise à temps.",
          en: "Example: Slack alert received 3 weeks before a churn spike — corrective action taken in time.",
        },
        techs: [SK, TF, PY, BQ],
      },
      {
        Icon: LuDatabase,
        color: "#D4AF37",
        title: { fr: "CRM Multi-agent & Pipeline IA", en: "Multi-agent CRM & AI Pipeline" },
        desc: {
          fr: "Scoring automatique de la LTV client, orchestration du pipeline commercial (alertes renouvellement, réactivation de comptes dormants), segmentation dynamique et recommandations d'actions pour chaque commercial.",
          en: "Automatic customer LTV scoring, commercial pipeline orchestration (renewal alerts, dormant account reactivation), dynamic segmentation and action recommendations for each sales rep.",
        },
        example: {
          fr: "Exemple : 12 comptes dormants réactivés automatiquement en 1 mois, +€47k de pipeline récupéré.",
          en: "Example: 12 dormant accounts automatically reactivated in 1 month, +€47k pipeline recovered.",
        },
        techs: [LG, PY, BQ],
      },
    ],
    processTag: { fr: "Comment on travaille", en: "How we work" },
    processTitle: { fr: "Notre processus de livraison", en: "Our delivery process" },
    processDesc: {
      fr: "De l'audit initial au déploiement en production, voici comment nous construisons et livrons votre solution.",
      en: "From the initial audit to production deployment, here is how we build and deliver your solution.",
    },
    steps: [
      {
        title: { fr: "Audit Data", en: "Data Audit" },
        desc: {
          fr: "Inventaire de vos sources de données, KPIs actuels, outils de reporting et points de friction décisionnels.",
          en: "Inventory of your data sources, current KPIs, reporting tools and decision friction points.",
        },
      },
      {
        title: { fr: "Architecture BI", en: "BI Architecture" },
        desc: {
          fr: "Conception du data warehouse, de la couche NL query et des modèles de forecasting adaptés à votre métier.",
          en: "Design of the data warehouse, NL query layer and forecasting models adapted to your business.",
        },
      },
      {
        title: { fr: "Intégration Sources", en: "Source Integration" },
        desc: {
          fr: "Connexion à vos outils (WooCommerce, Shopify, Salesforce, HubSpot, Google Analytics, ad platforms).",
          en: "Connection to your tools (WooCommerce, Shopify, Salesforce, HubSpot, Google Analytics, ad platforms).",
        },
      },
      {
        title: { fr: "Activation & Alertes", en: "Activation & Alerts" },
        desc: {
          fr: "Déploiement des dashboards, rapports automatiques, alertes et accès self-service pour vos équipes.",
          en: "Deployment of dashboards, automatic reports, alerts and self-service access for your teams.",
        },
      },
    ],
  },

  "search-recommendation": {
    tag: { fr: "Recherche & Recommandation", en: "Search & Recommendation" },
    title: { fr: "Trouvez le bon résultat,", en: "Find the right result," },
    titleEm: { fr: "au premier mot", en: "from the first word" },
    desc: {
      fr: "Moteurs de recherche sémantiques, systèmes de recommandation personnalisés, pipelines de données intelligents et MLOps — chaque couche de votre stack de recherche, construite pour performer en production.",
      en: "Semantic search engines, personalized recommendation systems, intelligent data pipelines and MLOps — every layer of your search stack, built to perform in production.",
    },
    features: [
      { fr: "Recherche vectorielle & sémantique", en: "Vector & semantic search" },
      { fr: "Recommandation collaborative & hybride", en: "Collaborative & hybrid recommendation" },
      { fr: "ETL & pipeline temps réel", en: "ETL & real-time pipeline" },
      { fr: "Fine-tuning sur vos données", en: "Fine-tuning on your data" },
      { fr: "MLOps & monitoring en production", en: "MLOps & production monitoring" },
    ],
    agentsTag: { fr: "Nos solutions de recherche", en: "Our search solutions" },
    agentsTitle: { fr: "4 systèmes, une stack complète", en: "4 systems, a complete stack" },
    agentsDesc: {
      fr: "Du moteur de recherche au modèle fine-tuné — chaque brique est conçue pour fonctionner ensemble et s'améliorer dans le temps.",
      en: "From search engine to fine-tuned model — each building block is designed to work together and improve over time.",
    },
    agents: [
      {
        Icon: LuSearch,
        color: "#22D3EE",
        title: { fr: "Moteur de Recherche Sémantique", en: "Semantic Search Engine" },
        desc: {
          fr: "Indexation vectorielle de vos catalogues produits, bases de connaissances et contenus. Recherche hybride (vectorielle + BM25) pour des résultats pertinents dès le premier mot, même avec des fautes de frappe ou des formulations vagues.",
          en: "Vector indexing of your product catalogs, knowledge bases and content. Hybrid search (vector + BM25) for relevant results from the first word, even with typos or vague formulations.",
        },
        example: {
          fr: "Exemple : e-commerce B2B avec 50k références — taux de conversion recherche +34% en 6 semaines.",
          en: "Example: B2B e-commerce with 50k SKUs — search conversion rate +34% in 6 weeks.",
        },
        techs: [PY, FA, ES, LG],
      },
      {
        Icon: LuLayers,
        color: "#F7931E",
        title: { fr: "Recommandation Personnalisée", en: "Personalized Recommendation" },
        desc: {
          fr: "Collaborative filtering, content-based filtering et approches hybrides pour surfacer le bon produit ou service à la bonne personne au bon moment. Intégré directement dans votre interface via API avec A/B testing automatisé.",
          en: "Collaborative filtering, content-based filtering and hybrid approaches to surface the right product or service to the right person at the right time. Integrated directly into your interface via API with automated A/B testing.",
        },
        example: {
          fr: "Exemple : plateforme SaaS B2C — panier moyen +22%, temps de session +40% après recommandations.",
          en: "Example: B2C SaaS platform — average cart +22%, session time +40% after recommendations.",
        },
        techs: [TF, PY, FA],
      },
      {
        Icon: LuWorkflow,
        color: "#4285F4",
        title: { fr: "Pipeline de Données Intelligent", en: "Intelligent Data Pipeline" },
        desc: {
          fr: "Architecture ETL complète avec CDC (Change Data Capture), synchronisation temps réel entre vos sources de données et votre data warehouse, et couche MCP pour interroger vos données en langage naturel depuis n'importe quel outil.",
          en: "Complete ETL architecture with CDC (Change Data Capture), real-time synchronization between your data sources and data warehouse, and MCP layer to query your data in plain language from any tool.",
        },
        example: {
          fr: "Exemple : synchronisation temps réel entre ERP, CRM et DWH — latence < 30 secondes, zéro perte de données.",
          en: "Example: real-time sync between ERP, CRM and DWH — latency < 30 seconds, zero data loss.",
        },
        techs: [PY, BQ, DF, N8],
      },
      {
        Icon: LuBrain,
        color: "#D4AF37",
        title: { fr: "Fine-tuning & MLOps", en: "Fine-tuning & MLOps" },
        desc: {
          fr: "Entraînement de modèles IA sur vos données propriétaires, RLHF, déploiement sur votre infrastructure ou la nôtre (GCP, AWS, Azure), monitoring continu des performances et ré-entraînement automatisé selon les dérives détectées.",
          en: "Training AI models on your proprietary data, RLHF, deployment on your infrastructure or ours (GCP, AWS, Azure), continuous performance monitoring and automated retraining based on detected drift.",
        },
        example: {
          fr: "Exemple : modèle de classification métier fine-tuné en 2 semaines — précision 94% vs 67% pour le modèle générique.",
          en: "Example: domain classification model fine-tuned in 2 weeks — 94% accuracy vs 67% for the generic model.",
        },
        techs: [PT, TF, PY, GC],
      },
    ],
    processTag: { fr: "Comment on travaille", en: "How we work" },
    processTitle: { fr: "Notre processus de livraison", en: "Our delivery process" },
    processDesc: {
      fr: "De l'audit initial au déploiement en production, voici comment nous construisons et livrons votre solution.",
      en: "From the initial audit to production deployment, here is how we build and deliver your solution.",
    },
    steps: [
      {
        title: { fr: "Audit Données & Recherche", en: "Data & Search Audit" },
        desc: {
          fr: "Inventaire de vos sources de données, requêtes de recherche actuelles, métriques de conversion et modèles utilisés.",
          en: "Inventory of your data sources, current search queries, conversion metrics and existing models.",
        },
      },
      {
        title: { fr: "Architecture Search & ML", en: "Search & ML Architecture" },
        desc: {
          fr: "Conception des index vectoriels, du moteur de recommandation et du pipeline MLOps adapté à votre stack.",
          en: "Design of vector indexes, recommendation engine and MLOps pipeline adapted to your stack.",
        },
      },
      {
        title: { fr: "Intégration & A/B Testing", en: "Integration & A/B Testing" },
        desc: {
          fr: "Intégration via API dans votre produit, mise en place du framework A/B testing et des métriques de pertinence.",
          en: "API integration into your product, A/B testing framework setup and relevance metrics.",
        },
      },
      {
        title: { fr: "Monitor & Ré-entraînement", en: "Monitor & Retrain" },
        desc: {
          fr: "Surveillance continue des performances, détection de drift et ré-entraînement automatisé des modèles.",
          en: "Continuous performance monitoring, drift detection and automated model retraining.",
        },
      },
    ],
  },

  "data-vision": {
    tag: { fr: "Documents, Vision & Industrie", en: "Documents, Vision & Industry" },
    title: { fr: "Exploitez vos documents et", en: "Unlock your documents and" },
    titleEm: { fr: "environnements visuels", en: "visual environments" },
    desc: {
      fr: "OCR intelligent, extraction contractuelle, détection d'objets, traitement BIM et cartographie géospatiale — transformez vos contenus non structurés en données exploitables et structurées.",
      en: "Intelligent OCR, contract extraction, object detection, BIM processing and geospatial mapping — transform your unstructured content into exploitable, structured data.",
    },
    features: [
      { fr: "OCR & extraction intelligente", en: "Intelligent OCR & extraction" },
      { fr: "Détection et segmentation visuelle", en: "Visual detection and segmentation" },
      { fr: "Traitement BIM & point cloud", en: "BIM & point cloud processing" },
      { fr: "Cartographie & géolocalisation", en: "Geolocation & mapping" },
      { fr: "Automatisation emails via MCP", en: "Email automation via MCP" },
    ],
    agentsTag: { fr: "Nos solutions vision & documents", en: "Our vision & document solutions" },
    agentsTitle: { fr: "4 systèmes, du pixel à la donnée", en: "4 systems, from pixel to data" },
    agentsDesc: {
      fr: "De l'image au tableau de bord, du document PDF à la base de données — chaque pipeline transforme des données non structurées en intelligence opérationnelle.",
      en: "From image to dashboard, from PDF to database — each pipeline transforms unstructured data into operational intelligence.",
    },
    agents: [
      {
        Icon: LuScanLine,
        color: "#22D3EE",
        title: { fr: "OCR & Extraction Documentaire", en: "OCR & Document Extraction" },
        desc: {
          fr: "Extraction intelligente de données dans vos contrats, formulaires, factures, notes de frais et emails. Le moteur OCR est couplé à un LLM pour comprendre le contexte et structurer les données extraites directement dans votre base ou ERP.",
          en: "Intelligent data extraction from your contracts, forms, invoices, expense reports and emails. The OCR engine is coupled with an LLM to understand context and structure extracted data directly into your database or ERP.",
        },
        example: {
          fr: "Exemple : traitement de 2000 factures fournisseurs/mois — 95% automatisé, temps de traitement divisé par 8.",
          en: "Example: processing 2,000 supplier invoices/month — 95% automated, processing time divided by 8.",
        },
        techs: [PY, LG, FA],
      },
      {
        Icon: LuEye,
        color: "#F7931E",
        title: { fr: "Vision IA & Détection d'Objets", en: "Vision AI & Object Detection" },
        desc: {
          fr: "Détection, segmentation et classification visuelle en temps réel pour vos cas d'usage : contrôle qualité industriel, gestion d'inventaire en entrepôt, analyse de rayonnages retail, surveillance logistique. Déployé sur edge ou cloud.",
          en: "Real-time visual detection, segmentation and classification for your use cases: industrial quality control, warehouse inventory management, retail shelf analysis, logistics monitoring. Deployed on edge or cloud.",
        },
        example: {
          fr: "Exemple : détection de défauts en ligne de production — précision 97%, vitesse 40 images/seconde.",
          en: "Example: defect detection on production line — 97% accuracy, 40 frames per second.",
        },
        techs: [PT, PY, GC],
      },
      {
        Icon: LuBox,
        color: "#9B59B6",
        title: { fr: "BIM & Point Cloud", en: "BIM & Point Cloud" },
        desc: {
          fr: "Traitement de maquettes numériques BIM (IFC, Revit) et de données 3D point cloud (LiDAR, photogrammétrie) pour le bâtiment, la construction et l'industrie. Extraction automatique de métriques, détection de conflits et reporting.",
          en: "Processing of BIM digital models (IFC, Revit) and 3D point cloud data (LiDAR, photogrammetry) for construction and industry. Automatic metrics extraction, conflict detection and reporting.",
        },
        example: {
          fr: "Exemple : vérification automatique de conformité BIM sur 500 éléments — rapport en 10 minutes vs 2 jours.",
          en: "Example: automatic BIM compliance check on 500 elements — report in 10 minutes vs 2 days.",
        },
        techs: [PY, GC],
      },
      {
        Icon: LuMap,
        color: "#22C55E",
        title: { fr: "Cartographie & Géolocalisation", en: "Geolocation & Mapping" },
        desc: {
          fr: "Analyse spatiale de vos données terrain, routage logistique intelligent (optimisation tournées, zones de chalandise), cartographie automatisée et enrichissement géospatial. Intégré dans vos outils métier via API.",
          en: "Spatial analysis of your field data, intelligent logistics routing (tour optimization, catchment areas), automated mapping and geospatial enrichment. Integrated into your business tools via API.",
        },
        example: {
          fr: "Exemple : optimisation de 45 tournées de livraison — -18% de kilométrage, -22% de coût carburant.",
          en: "Example: optimization of 45 delivery routes — -18% mileage, -22% fuel cost.",
        },
        techs: [PY, GC, FA],
      },
    ],
    processTag: { fr: "Comment on travaille", en: "How we work" },
    processTitle: { fr: "Notre processus de livraison", en: "Our delivery process" },
    processDesc: {
      fr: "De l'audit initial au déploiement en production, voici comment nous construisons et livrons votre solution.",
      en: "From the initial audit to production deployment, here is how we build and deliver your solution.",
    },
    steps: [
      {
        title: { fr: "Audit Documents & Vision", en: "Document & Vision Audit" },
        desc: {
          fr: "Inventaire de vos types de documents, volumes, qualité des images et cas d'usage vision existants.",
          en: "Inventory of your document types, volumes, image quality and existing vision use cases.",
        },
      },
      {
        title: { fr: "Conception Pipeline", en: "Pipeline Design" },
        desc: {
          fr: "Architecture des flux OCR, extraction, vision et cartographie adaptés à vos contraintes et volumes.",
          en: "Architecture of OCR, extraction, vision and mapping flows adapted to your constraints and volumes.",
        },
      },
      {
        title: { fr: "Intégration Systèmes", en: "System Integration" },
        desc: {
          fr: "Connexion à votre ERP, CRM, base de données ou système de fichiers. Validation sur un échantillon réel.",
          en: "Connection to your ERP, CRM, database or file system. Validation on a real sample.",
        },
      },
      {
        title: { fr: "Validation & Mise à l'Échelle", en: "Validation & Scale" },
        desc: {
          fr: "Tests de précision, validation métier et montée en charge progressive jusqu'aux volumes de production.",
          en: "Accuracy testing, business validation and progressive scale-up to production volumes.",
        },
      },
    ],
  },
};

interface Props {
  slug: string;
  locale: string;
}

export default function ServicePageClient({ slug, locale }: Props) {
  const service = SERVICES[slug];
  if (!service) return null;

  const lang = locale === "en" ? "en" : "fr";

  return (
    <div className={styles.page}>
      <nav className={styles.topNav}>
        <Link href={`/${locale}`} className={styles.topNavLogo}>
          WIKO<span>LABS</span>
        </Link>
        <Link href={`/${locale}`} className={styles.topNavBack}>
          <HiArrowLeft size={13} />
          {lang === "fr" ? "Retour à l'accueil" : "Back to home"}
        </Link>
      </nav>

      <nav className={styles.breadcrumb}>
        <Link href={`/${locale}`}>
          {lang === "fr" ? "Accueil" : "Home"}
        </Link>
        <span className={styles.breadcrumbSep}>/</span>
        <span className={styles.breadcrumbCurrent}>{service.tag[lang]}</span>
      </nav>

      <div className={styles.hero}>
        <div className={styles.heroGlow} style={{ background: "#D4AF37" }} />
        <div className={styles.heroTag}>
          <span className={styles.heroTagLine} />
          {service.tag[lang]}
        </div>
        <h1 className={styles.heroTitle}>
          {service.title[lang]} <em>{service.titleEm[lang]}</em>
        </h1>
        <p className={styles.heroDesc}>{service.desc[lang]}</p>
        <div className={styles.heroFeatures}>
          {service.features.map((f, i) => (
            <span key={i} className={styles.heroFeature}>
              <LuCheck size={13} />
              {f[lang]}
            </span>
          ))}
        </div>
      </div>

      <div className={styles.sectionAlt}>
        <div className={styles.sectionAltInner}>
          <div className={styles.sectionTag}>
            <span className={styles.sectionTagLine} />
            {service.agentsTag[lang]}
          </div>
          <h2 className={styles.sectionTitle}>{service.agentsTitle[lang]}</h2>
          <p className={styles.sectionDesc}>{service.agentsDesc[lang]}</p>
          <div className={styles.agentsGrid}>
            {service.agents.map((agent, i) => (
              <div key={i} className={styles.agentCard}>
                <div
                  className={styles.agentIconWrap}
                  style={{
                    background: `${agent.color}18`,
                    border: `1px solid ${agent.color}44`,
                  }}
                >
                  <agent.Icon size={24} style={{ color: agent.color }} />
                </div>
                <div className={styles.agentTitle}>{agent.title[lang]}</div>
                <p className={styles.agentDesc}>{agent.desc[lang]}</p>
                <div className={styles.agentExample}>
                  <span className={styles.agentExampleLabel}>
                    {lang === "fr" ? "Exemple concret" : "Concrete example"}
                  </span>
                  {agent.example[lang]}
                </div>
                <div className={styles.agentTechs}>
                  {agent.techs.map((tech, ti) => (
                    <span
                      key={ti}
                      className={styles.techBadge}
                      style={{
                        background: `${tech.color}22`,
                        borderColor: `${tech.color}55`,
                        color: tech.color,
                      }}
                    >
                      {tech.Icon ? (
                        <tech.Icon size={10} />
                      ) : (
                        <span style={{ fontSize: "0.65rem", fontWeight: 700 }}>{tech.abbr}</span>
                      )}
                      {tech.n}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className={styles.section}>
        <div className={styles.sectionTag}>
          <span className={styles.sectionTagLine} />
          {lang === "fr" ? "Comment on travaille" : "How we work"}
        </div>
        <h2 className={styles.sectionTitle}>
          {lang === "fr" ? "Notre processus de" : "Our"}{" "}
          <em>{lang === "fr" ? "livraison" : "delivery process"}</em>
        </h2>
        <p className={styles.sectionDesc}>
          {lang === "fr"
            ? "De l'audit initial au déploiement en production, voici comment nous construisons et livrons votre solution."
            : "From the initial audit to production deployment, here is how we build and deliver your solution."}
        </p>
        <div className={styles.steps}>
          {service.steps.map((step, i) => (
            <div key={i} className={styles.step}>
              <div className={styles.stepNum}>0{i + 1}</div>
              <div className={styles.stepTitle}>{step.title[lang]}</div>
              <p className={styles.stepDesc}>{step.desc[lang]}</p>
            </div>
          ))}
        </div>
      </div>

      <div className={styles.ctaSection}>
        <div className={styles.ctaInner}>
          <div className={styles.ctaTag}>
            <span className={styles.ctaTagLine} />
            {lang === "fr" ? "Passons à l'action" : "Let's talk"}
          </div>
          <h2 className={styles.ctaTitle}>
            {lang === "fr" ? "Prêt à déployer cette" : "Ready to deploy this"}{" "}
            <em>{lang === "fr" ? "solution ?" : "solution?"}</em>
          </h2>
          <p className={styles.ctaDesc}>
            {lang === "fr"
              ? "Décrivez votre cas d'usage et nous vous proposerons une architecture adaptée à votre stack et à vos objectifs. Réponse sous 24h."
              : "Describe your use case and we'll propose an architecture tailored to your stack and goals. Response within 24h."}
          </p>
          <div className={styles.ctaActions}>
            <a href={`mailto:${CONTACT_EMAIL}`} className={styles.ctaBtnPrimary}>
              <HiEnvelope size={16} />
              {CONTACT_EMAIL}
            </a>
            <a
              href={LINKEDIN_URL}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.ctaBtnOutline}
            >
              <LuLinkedin size={16} />
              LinkedIn
            </a>
            <Link href={`/${locale}`} className={styles.ctaBtnOutline}>
              <HiArrowLeft size={16} />
              {lang === "fr" ? "Retour à l'accueil" : "Back to home"}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
