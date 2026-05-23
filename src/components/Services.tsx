"use client";

import { useState } from "react";
import Link from "next/link";
import styles from "./Services.module.css";
import type { IconType } from "react-icons";
import { HiMagnifyingGlass } from "react-icons/hi2";
import {
  LuMegaphone, LuMessageSquare, LuTrendingUp, LuFactory,
  LuEye, LuSearch, LuTarget, LuCalendarCheck, LuFileText, LuActivity,
  LuBell, LuNetwork, LuScan, LuChartBar, LuDatabase, LuFileSearch,
  LuBrain, LuLayers, LuWorkflow, LuScanLine, LuMap, LuBox,
  LuMonitor, LuSmartphone, LuBug, LuCpu, LuTriangle,
  LuCheck, LuZap, LuClock, LuRocket, LuBot, LuChevronDown, LuCircleHelp,
} from "react-icons/lu";
import {
  SiPython, SiLangchain, SiFastapi, SiN8N,
  SiGooglebigquery, SiScikitlearn, SiTensorflow, SiPytorch, SiGooglecloud,
  SiReact, SiNextdotjs,
} from "react-icons/si";
import type { CartItem } from "@/components/ServiceCartPanel";
import OfferChatBot from "@/components/OfferChatBot";

interface Tech { Icon?: IconType; logo?: string; abbr?: string; color: string; n: string }

/* ── Core stack ── */
const PY: Tech  = { Icon: SiPython,                color: "#3776AB", n: "Python"       };
const LG: Tech  = { logo: "/logos/langgraph.svg",   color: "#22D3EE", n: "LangGraph"   };
const LC: Tech  = { Icon: SiLangchain,              color: "#1C3C3C", n: "LangChain"   };
const FA: Tech  = { Icon: SiFastapi,                color: "#009688", n: "FastAPI"      };
const N8: Tech  = { Icon: SiN8N,                    color: "#EA4B71", n: "n8n"          };
const BQ: Tech  = { Icon: SiGooglebigquery,          color: "#4285F4", n: "BigQuery"    };
const SK: Tech  = { Icon: SiScikitlearn,             color: "#F7931E", n: "Scikit-learn"};
const TF: Tech  = { Icon: SiTensorflow,              color: "#FF6F00", n: "TensorFlow"  };
const PT: Tech  = { Icon: SiPytorch,                 color: "#EE4C2C", n: "PyTorch"     };
const ES: Tech  = { logo: "/logos/elasticsearch.svg", color: "#005571", n: "Elastic"   };
const DF: Tech  = { logo: "/logos/dataflow.svg",       color: "#4285F4", n: "Dataflow" };
const GC: Tech  = { Icon: SiGooglecloud,             color: "#4285F4", n: "GCP"         };
const RC: Tech  = { Icon: SiReact,                   color: "#61DAFB", n: "React"       };
const NX: Tech  = { Icon: SiNextdotjs,               color: "#F0EDE6", n: "Next.js"     };

/* ── AI providers ── */
const OA: Tech  = { logo: "/logos/openai.svg",       color: "#74AA9C", n: "OpenAI"      };
const AN: Tech  = { logo: "/logos/anthropic.svg",    color: "#D97757", n: "Anthropic"   };
const HF: Tech  = { logo: "/logos/huggingface.svg",  color: "#FF9D00", n: "HuggingFace" };
const VA: Tech  = { logo: "/logos/vertexai.svg",     color: "#4285F4", n: "Vertex AI"   };
const SM: Tech  = { logo: "/logos/aws-sagemaker.svg", color: "#01A88D", n: "SageMaker"  };

/* ── Integrations & CRM ── */
const GHL: Tech = { logo: "/logos/gohighlevel.webp", color: "#2896FB", n: "GoHighLevel" };
const TW: Tech  = { logo: "/logos/twilio.svg",       color: "#F22F46", n: "Twilio"      };
const SL: Tech  = { logo: "/logos/slack.svg",        color: "#4A154B", n: "Slack"       };
const NO: Tech  = { logo: "/logos/notion.svg",       color: "#F0EDE6", n: "Notion"      };
const AT_: Tech = { logo: "/logos/airtable.svg",     color: "#18BFFF", n: "Airtable"    };
const SB: Tech  = { logo: "/logos/supabase.svg",     color: "#3ECF8E", n: "Supabase"    };

/* ── Vector & Search ── */
const PN: Tech  = { logo: "/logos/pinecone.svg",     color: "#3BB273", n: "Pinecone"    };
const WV: Tech  = { logo: "/logos/weaviate.svg",     color: "#5C4EE5", n: "Weaviate"    };
const FI: Tech  = { logo: "/logos/faiss.svg",        color: "#1877F2", n: "FAISS"       };

/* ── Data & Observability ── */
const SP: Tech  = { logo: "/logos/apache-spark.svg", color: "#E25A1C", n: "Spark"       };
const AF: Tech  = { logo: "/logos/airflow.svg",      color: "#017CEE", n: "Airflow"     };
const KF: Tech  = { logo: "/logos/kafka.svg",        color: "#ADADAD", n: "Kafka"       };
const MB: Tech  = { logo: "/logos/metabase.svg",     color: "#509EE3", n: "Metabase"    };
const PBI: Tech = { logo: "/logos/powerbi.svg",      color: "#F2C811", n: "Power BI"    };
const GF: Tech  = { logo: "/logos/grafana.svg",      color: "#F46800", n: "Grafana"     };

/* ── Cloud AI / Vision / Docs ── */
const TX: Tech  = { logo: "/logos/aws-textract.svg",           color: "#FF9900", n: "Textract"    };
const RK: Tech  = { logo: "/logos/aws-rekognition.svg",        color: "#FF9900", n: "Rekognition" };
const AP_: Tech = { logo: "/logos/aws-personalize.svg",        color: "#FF9900", n: "Personalize" };
const GDA: Tech = { logo: "/logos/gcp-document-ai.svg",        color: "#4285F4", n: "Document AI" };
const GVI: Tech = { logo: "/logos/gcp-vision-ai.svg",          color: "#34A853", n: "Vision AI"   };
const AFR: Tech = { logo: "/logos/azure-form-recognizer.svg",  color: "#0078D4", n: "Doc Intel"   };

/* ── Category header icons (7 total) ── */
const CAT_ICONS: IconType[] = [
  LuMegaphone, LuMessageSquare, LuTrendingUp, HiMagnifyingGlass, LuFactory, LuMonitor, LuCpu,
];

const CAT_SLUGS = [
  "commercial-automation",
  "production-ai",
  "decision-intelligence",
  "search-recommendation",
  "data-vision",
  "fullstack",
  "production-ai",
];

/* Per-offer slug for individual detail pages */
const OFFER_SLUGS: string[][] = [
  ["agent-veille-marche","agent-sourcing-leads","agent-outreach-multicanal","agent-qualification-bant","agent-setter-rdv","agent-proposition-commerciale","agent-retention-upsell"],
  ["agent-sav-ecommerce-rag","agent-triage-escalade","agent-onboarding-client","agent-notes-discovery"],
  ["agent-bi-langage-naturel","reporting-automatique","forecasting-anomalies","crm-multi-agent"],
  ["moteur-recherche-semantique","recommandation-personnalisee","pipeline-donnees-intelligent","fine-tuning-mlops"],
  ["ocr-extraction-documentaire","vision-ia-detection-objets","bim-point-cloud","cartographie-geolocalisation"],
  ["refonte-ux-ui-web","application-mobile-react-native","debogage-optimisation-performance","seo-technique-visibilite"],
  ["ia-embarquee-edge-device","monitoring-iot-temps-reel","vision-machine-camera-ip","maintenance-predictive-ia"],
];

/* 31 distinct per-card backgrounds — diverse hues */
const OFFER_CARD_BG = [
  /* 0 — Commercial (7) */
  "hsla( 43, 90%, 55%, 0.26)",  // gold
  "hsla(186, 85%, 50%, 0.24)",  // cyan
  "hsla(217, 85%, 60%, 0.26)",  // blue
  "hsla(142, 72%, 46%, 0.24)",  // green
  "hsla(270, 72%, 60%, 0.26)",  // purple
  "hsla(330, 80%, 60%, 0.24)",  // pink
  "hsla( 32, 90%, 55%, 0.26)",  // orange
  /* 1 — Support (4) */
  "hsla(174, 80%, 46%, 0.24)",  // teal
  "hsla(239, 80%, 65%, 0.26)",  // indigo
  "hsla( 83, 76%, 46%, 0.24)",  // lime
  "hsla(200, 85%, 55%, 0.24)",  // sky
  /* 2 — BI (4) */
  "hsla(  0, 80%, 60%, 0.24)",  // red
  "hsla( 52, 88%, 54%, 0.26)",  // yellow
  "hsla(155, 75%, 46%, 0.24)",  // emerald
  "hsla(290, 70%, 60%, 0.26)",  // violet
  /* 3 — Search (4) */
  "hsla( 16, 88%, 56%, 0.26)",  // red-orange
  "hsla(100, 70%, 46%, 0.24)",  // olive
  "hsla(222, 82%, 62%, 0.26)",  // cornflower
  "hsla(310, 70%, 58%, 0.24)",  // fuchsia
  /* 4 — Vision (4) */
  "hsla(165, 76%, 46%, 0.24)",  // aqua-green
  "hsla(255, 76%, 63%, 0.26)",  // slate-purple
  "hsla( 35, 88%, 58%, 0.26)",  // amber
  "hsla(195, 82%, 52%, 0.24)",  // cerulean
  /* 5 — Web (4) */
  "hsla(340, 78%, 58%, 0.24)",  // rose
  "hsla(120, 66%, 46%, 0.24)",  // medium green
  "hsla(230, 82%, 63%, 0.26)",  // periwinkle
  "hsla( 56, 82%, 52%, 0.26)",  // golden-yellow
  /* 6 — IoT (4) */
  "hsla( 22, 88%, 55%, 0.26)",  // burnt orange
  "hsla(180, 78%, 48%, 0.24)",  // aqua
  "hsla(285, 68%, 58%, 0.26)",  // medium purple
  "hsla(145, 70%, 44%, 0.24)",  // forest green
];
const CAT_OFFSETS = [0, 7, 11, 15, 19, 23, 27];
const getCardBg = (ci: number, oi: number) =>
  OFFER_CARD_BG[CAT_OFFSETS[ci] + oi] ?? OFFER_CARD_BG[0];

/* ─── Agent meta: CommercialCycle data for specific agents ─── */
interface AgentMeta {
  metric: string;
  metricLabel: { fr: string; en: string };
  automation: string;
  color: string;
  before: { fr: string; en: string };
  after: { fr: string; en: string };
}

const AGENT_META: (AgentMeta | null)[][] = [
  [ /* Cat 0 — Commercial */
    null, /* 0: Veille */
    { metric: "200", metricLabel: { fr: "leads / jour", en: "leads / day" }, automation: "100%", color: "#22D3EE",
      before: { fr: "Votre équipe passe 15h/semaine sur LinkedIn Sales Navigator manuellement. 30 prospects/jour, données souvent obsolètes.", en: "Your team spends 15h/week manually on LinkedIn Sales Navigator. 30 prospects/day, data often outdated." },
      after:  { fr: "Agent Apollo + LinkedIn scraping → 200 leads ICP+ enrichis (poste, CA, tech stack) scorés BANT automatiquement dans votre CRM, chaque matin.", en: "Apollo + LinkedIn scraping agent → 200 enriched ICP+ leads auto BANT-scored into your CRM every morning." },
    },
    { metric: "×30", metricLabel: { fr: "volume vs. manuel", en: "volume vs. manual" }, automation: "100%", color: "#D4AF37",
      before: { fr: "Chaque email rédigé à la main. 1 commercial = 30 prospects/jour max. Les relances oubliées font perdre 60% des deals chauds.", en: "Every email written by hand. 1 sales rep = 30 prospects/day. Forgotten follow-ups lose 60% of warm deals." },
      after:  { fr: "Agent LangGraph génère les emails avec hook contextuel, puis relances J+3, J+7, J+14. Ouvertures et clics trackés, CRM mis à jour automatiquement.", en: "LangGraph agent generates contextual emails then follow-ups at D+3, D+7, D+14. Opens and clicks tracked, CRM auto-updated." },
    },
    { metric: "80%", metricLabel: { fr: "auto-qualifié", en: "auto-qualified" }, automation: "80%", color: "#34D399",
      before: { fr: "Un setter appelle chaque lead pour qualifier. Taux de no-show : 40%. Deals non qualifiés qui polluent le pipeline du closer.", en: "A setter calls every lead to qualify. No-show rate: 40%. Unqualified deals polluting the closer's pipeline." },
      after:  { fr: "L'agent LLM analyse la réponse du prospect, route automatiquement : qualifié → setter / pas prêt → nurturing / hors cible → archive CRM.", en: "LLM agent analyzes prospect reply, routes automatically: qualified → setter / not ready → nurturing / off-target → CRM archive." },
    },
    { metric: "< 48h", metricLabel: { fr: "idée → signature", en: "idea → signature" }, automation: "70%", color: "#A78BFA",
      before: { fr: "Chaque proposition rédigée de zéro : 3-4h de travail par deal. DocuSign envoyé manuellement. Relances de signature oubliées.", en: "Every proposal written from scratch: 3-4h per deal. DocuSign sent manually. Signature reminders forgotten." },
      after:  { fr: "Agent Setter propose 3 créneaux Calendly + brief pré-call LLM. Après le call, proposition PDF générée, envoyée par DocuSign et relancée automatiquement.", en: "Setter agent proposes 3 Calendly slots + LLM pre-call brief. After the call, PDF proposal generated, sent via DocuSign and auto-followed up." },
    },
    null, /* 5: Proposition */
    { metric: "75%", metricLabel: { fr: "churn prévenu", en: "churn prevented" }, automation: "75%", color: "#F472B6",
      before: { fr: "Churn détecté trop tard. Renouvellements négociés à la dernière minute. Opportunités d'upsell manquées par manque de signal.", en: "Churn detected too late. Renewals negotiated last-minute. Upsell opportunities missed from lack of signals." },
      after:  { fr: "Agent monitore l'utilisation produit, détecte les signaux faibles, déclenche une séquence de réengagement personnalisée par LLM.", en: "Agent monitors product usage, detects weak signals, triggers a personalized LLM re-engagement sequence." },
    },
  ],
  [ /* Cat 1 — Support */
    { metric: "70%", metricLabel: { fr: "tickets auto-résolus", en: "tickets auto-resolved" }, automation: "70%", color: "#F97316",
      before: { fr: "Tickets traités manuellement. Délai moyen : 24-48h. Agents submergés par des questions répétitives. NPS en baisse.", en: "Tickets handled manually. Average response: 24-48h. Agents overwhelmed by repetitive questions. Declining NPS." },
      after:  { fr: "Agent RAG connecté à votre documentation et CRM : 70% des tickets résolus en < 2 minutes. Escalade intelligente vers humain si complexe.", en: "RAG agent connected to your docs and CRM: 70% of tickets resolved in under 2 minutes. Smart escalation to human if complex." },
    },
    null, null, null,
  ],
  [null, null, null, null], /* Cat 2 */
  [null, null, null, null], /* Cat 3 */
  [null, null, null, null], /* Cat 4 */
  [null, null, null, null], /* Cat 5 */
  [null, null, null, null], /* Cat 6 */
];

/* ─── Client questions per offer [category][offer] ─── */
const CLIENT_QUESTIONS: { fr: string[]; en: string[] }[][] = [
  [ /* Cat 0 — Commercial */
    { fr: ["Combien de sources à surveiller (concurrents, secteurs, mots-clés) ?", "Fréquence des rapports (quotidien / hebdo / mensuel) ?", "Outil de livraison préféré (Slack, Notion, email) ?", "CRM ou outil cible pour les alertes ?"],
      en: ["How many sources to monitor (competitors, sectors, keywords)?", "Report frequency (daily / weekly / monthly)?", "Preferred delivery tool (Slack, Notion, email)?", "Target CRM or alerting tool?"] },
    { fr: ["Volume cible de leads par jour (50 / 200 / 500+) ?", "Sources souhaitées (Apollo, LinkedIn, annuaires, base propriétaire) ?", "Critères ICP à appliquer (secteur, taille, poste, pays) ?", "CRM cible (HubSpot, Salesforce, Pipedrive...) ?"],
      en: ["Target lead volume per day (50 / 200 / 500+)?", "Desired sources (Apollo, LinkedIn, directories, proprietary database)?", "ICP criteria to apply (sector, size, role, country)?", "Target CRM (HubSpot, Salesforce, Pipedrive...)?"] },
    { fr: ["Volume de prospects à contacter par mois ?", "Canaux actifs (email seul / email + LinkedIn / multi) ?", "Nombre de relances par séquence (J+3, J+7, J+14...) ?", "Outil d'outreach existant (Lemlist, HubSpot, Salesloft...) ?"],
      en: ["Volume of prospects to contact per month?", "Active channels (email only / email + LinkedIn / multi)?", "Number of follow-ups per sequence (D+3, D+7, D+14...)?", "Existing outreach tool (Lemlist, HubSpot, Salesloft...)?"] },
    { fr: ["Volume de réponses prospects à traiter par jour ?", "Critères BANT personnalisés ou scoring existant à intégrer ?", "CRM cible pour la mise à jour automatique du score ?", "Intégrations souhaitées (Zapier, Make, webhook...) ?"],
      en: ["Volume of prospect replies to process per day?", "Custom BANT criteria or existing scoring to integrate?", "Target CRM for automatic score update?", "Desired integrations (Zapier, Make, webhook...)?"] },
    { fr: ["Nombre de RDV à générer par mois ?", "Outil de calendrier (Calendly, HubSpot, Google Calendar) ?", "Format du brief pré-call (email, Notion, CRM) ?", "Outil de signature électronique (DocuSign, Yousign, HelloSign) ?"],
      en: ["Number of meetings to generate per month?", "Calendar tool (Calendly, HubSpot, Google Calendar)?", "Pre-call brief format (email, Notion, CRM)?", "E-signature tool (DocuSign, Yousign, HelloSign)?"] },
    { fr: ["Nombre de propositions à générer par mois ?", "Format souhaité (PDF, Notion, Google Slides) ?", "Charte graphique existante à intégrer ?", "CRM source pour les données du discovery call ?"],
      en: ["Number of proposals to generate per month?", "Desired format (PDF, Notion, Google Slides)?", "Existing brand guidelines to integrate?", "CRM source for discovery call data?"] },
    { fr: ["Taille de la base clients active à monitorer ?", "Outil d'analytics produit (Mixpanel, Amplitude, Segment...) ?", "Canaux de réengagement (email, SMS, in-app) ?", "Modèle de churn existant ou à construire from scratch ?"],
      en: ["Size of active customer base to monitor?", "Product analytics tool (Mixpanel, Amplitude, Segment...)?", "Re-engagement channels (email, SMS, in-app)?", "Existing churn model or to build from scratch?"] },
  ],
  [ /* Cat 1 — Support */
    { fr: ["Volume de tickets par mois ?", "Plateforme e-commerce (WooCommerce, Shopify, Magento) ?", "Canaux entrants (email, WhatsApp, chat, téléphone) ?", "Langues à supporter ?", "Taille de la base documentaire (FAQ, docs internes) ?"],
      en: ["Ticket volume per month?", "E-commerce platform (WooCommerce, Shopify, Magento)?", "Inbound channels (email, WhatsApp, chat, phone)?", "Languages to support?", "Knowledge base size (FAQ, internal docs)?"] },
    { fr: ["Volume de tickets à prioriser par jour ?", "Plateforme helpdesk existante (Zendesk, Freshdesk, HubSpot) ?", "Nombre de niveaux de support (N1/N2/N3) ?", "Règles métier d'escalade à configurer ?"],
      en: ["Volume of tickets to prioritize per day?", "Existing helpdesk platform (Zendesk, Freshdesk, HubSpot)?", "Number of support tiers (N1/N2/N3)?", "Business escalation rules to configure?"] },
    { fr: ["Nombre de nouveaux clients à onboarder par mois ?", "Durée du parcours d'onboarding (en jours) ?", "Outils de communication client (email, Slack, Notion) ?", "Étapes critiques d'onboarding à automatiser ?"],
      en: ["Number of new customers to onboard per month?", "Onboarding journey duration (days)?", "Customer communication tools (email, Slack, Notion)?", "Critical onboarding steps to automate?"] },
    { fr: ["Volume de calls à transcrire par semaine ?", "CRM cible pour la création automatique de fiches ?", "Langue principale des calls ?", "Format de résumé souhaité (champs CRM, email, Notion) ?"],
      en: ["Volume of calls to transcribe per week?", "Target CRM for automatic record creation?", "Primary language of calls?", "Desired summary format (CRM fields, email, Notion)?"] },
  ],
  [ /* Cat 2 — BI */
    { fr: ["Sources de données à connecter (BigQuery, Snowflake, PostgreSQL...) ?", "Nombre d'utilisateurs finaux ?", "Volume de requêtes par jour ?", "Outil de visualisation préféré (Metabase, Power BI, Looker) ?"],
      en: ["Data sources to connect (BigQuery, Snowflake, PostgreSQL...)?", "Number of end users?", "Query volume per day?", "Preferred visualization tool (Metabase, Power BI, Looker)?"] },
    { fr: ["Formats de livrables souhaités (PDF, PPT, Excel, email) ?", "Fréquence de génération (quotidien / hebdo / mensuel) ?", "Nombre de rapports ou dashboards distincts ?", "Sources de données principales (e-commerce, CRM, ERP...) ?"],
      en: ["Desired deliverable formats (PDF, PPT, Excel, email)?", "Generation frequency (daily / weekly / monthly)?", "Number of distinct reports or dashboards?", "Main data sources (e-commerce, CRM, ERP...)?"] },
    { fr: ["Horizon de prévision souhaité (1, 3, 6 ou 12 mois) ?", "Volume d'historique disponible (en années) ?", "Métriques cibles (CA, volume, taux de churn...) ?", "Seuils d'alerte : définis à l'avance ou à calibrer ?"],
      en: ["Desired forecast horizon (1, 3, 6 or 12 months)?", "Available history volume (years)?", "Target metrics (revenue, volume, churn rate...)?", "Alert thresholds: predefined or to calibrate?"] },
    { fr: ["CRM utilisé (HubSpot, Salesforce, Pipedrive...) ?", "Nombre d'utilisateurs CRM actifs ?", "Nombre d'étapes dans le pipeline commercial ?", "Intégrations requises (ERP, facturation, e-commerce) ?"],
      en: ["CRM in use (HubSpot, Salesforce, Pipedrive...)?", "Number of active CRM users?", "Number of stages in the sales pipeline?", "Required integrations (ERP, billing, e-commerce)?"] },
  ],
  [ /* Cat 3 — Search */
    { fr: ["Volume de documents à indexer (1k / 100k / 1M+) ?", "Langues à supporter ?", "Nombre de requêtes par jour ?", "Latence requise (< 200ms, < 1s...) ?", "Outil vectoriel préféré (Pinecone, Weaviate, Elasticsearch) ?"],
      en: ["Volume of documents to index (1k / 100k / 1M+)?", "Languages to support?", "Query volume per day?", "Required latency (< 200ms, < 1s...)?", "Preferred vector store (Pinecone, Weaviate, Elasticsearch)?"] },
    { fr: ["Volume du catalogue (produits, contenus, services) ?", "Données comportementales disponibles (clics, achats, durée...) ?", "Canaux d'affichage (web, email, app mobile) ?", "Fréquence de mise à jour des recommandations ?"],
      en: ["Catalogue volume (products, content, services)?", "Available behavioral data (clicks, purchases, dwell time...)?", "Display channels (web, email, mobile app)?", "Recommendation update frequency?"] },
    { fr: ["Volume de données à traiter (Go / To par jour) ?", "Sources de données (API, base SQL, fichiers, streaming) ?", "Fréquence d'ingestion (temps réel / batch / mixte) ?", "Data warehouse cible (BigQuery, Snowflake, Redshift) ?"],
      en: ["Data volume to process (GB / TB per day)?", "Data sources (API, SQL database, files, streaming)?", "Ingestion frequency (real-time / batch / mixed)?", "Target data warehouse (BigQuery, Snowflake, Redshift)?"] },
    { fr: ["Taille du dataset d'entraînement (nombre d'exemples) ?", "Modèle de base préféré (GPT-4, Claude, Mistral, Llama...) ?", "Infrastructure cible (GCP, AWS, Azure, on-premise) ?", "Domaine spécialisé (juridique, médical, finance...) ?"],
      en: ["Training dataset size (number of examples)?", "Preferred base model (GPT-4, Claude, Mistral, Llama...)?", "Target infrastructure (GCP, AWS, Azure, on-premise)?", "Specialized domain (legal, medical, finance...)?"] },
  ],
  [ /* Cat 4 — Vision */
    { fr: ["Volume de documents à traiter par jour ?", "Types de documents (factures, contrats, formulaires, passeports) ?", "Langues des documents ?", "Niveau de précision requis (99%, 99.9%) ?", "Intégration cible (ERP, base SQL, email) ?"],
      en: ["Document volume to process per day?", "Document types (invoices, contracts, forms, passports)?", "Document languages?", "Required accuracy level (99%, 99.9%)?", "Target integration (ERP, SQL database, email)?"] },
    { fr: ["Résolution des images ou flux vidéo ?", "Nombre d'objets ou classes à détecter ?", "Traitement temps réel ou batch ?", "Environnement (intérieur, extérieur, conditions difficiles) ?"],
      en: ["Image or video stream resolution?", "Number of objects or classes to detect?", "Real-time or batch processing?", "Environment (indoor, outdoor, harsh conditions)?"] },
    { fr: ["Formats de fichiers (IFC, RVT, DWG, LAS/LAZ) ?", "Volume du projet (m² ou m³) ?", "Niveau de détail requis (LOD 100 à 400) ?", "Intégration avec logiciels existants (Autodesk, Revit) ?"],
      en: ["File formats (IFC, RVT, DWG, LAS/LAZ)?", "Project volume (m² or m³)?", "Required level of detail (LOD 100 to 400)?", "Integration with existing software (Autodesk, Revit)?"] },
    { fr: ["Zone géographique ciblée (ville, région, pays) ?", "Fréquence de mise à jour des données terrain ?", "Nombre de véhicules ou points à tracker ?", "Intégration avec systèmes existants (ERP, TMS) ?"],
      en: ["Target geographic area (city, region, country)?", "Field data update frequency?", "Number of vehicles or points to track?", "Integration with existing systems (ERP, TMS)?"] },
  ],
  [ /* Cat 5 — Web/Mobile */
    { fr: ["Nombre de pages à revoir ?", "Technologie actuelle (WordPress, custom, React...) ?", "Intégrations tierces existantes ?", "Objectif principal (conversion, vitesse, accessibilité) ?"],
      en: ["Number of pages to redesign?", "Current technology (WordPress, custom, React...)?", "Existing third-party integrations?", "Main goal (conversion, speed, accessibility)?"] },
    { fr: ["Plateformes cibles (iOS, Android, les deux) ?", "Nombre d'écrans ou vues principales ?", "Authentification requise (email, Google, Apple) ?", "Fonctionnalités offline nécessaires ?"],
      en: ["Target platforms (iOS, Android, both)?", "Number of main screens or views?", "Required authentication (email, Google, Apple)?", "Offline features needed?"] },
    { fr: ["Langage et framework de la codebase existante ?", "Métriques de performance cibles (LCP, TTI, FID...) ?", "Volume de trafic à supporter (utilisateurs/jour) ?", "Environnement de production (cloud, on-premise, hybride) ?"],
      en: ["Language and framework of existing codebase?", "Target performance metrics (LCP, TTI, FID...)?", "Traffic volume to support (users/day)?", "Production environment (cloud, on-premise, hybrid)?"] },
    { fr: ["Nombre de pages à optimiser ?", "Marché cible (pays, langue) ?", "Volume de mots-clés à cibler ?", "CMS ou framework actuel (WordPress, Next.js, Webflow...) ?"],
      en: ["Number of pages to optimize?", "Target market (country, language)?", "Volume of keywords to target?", "Current CMS or framework (WordPress, Next.js, Webflow...)?"] },
  ],
  [ /* Cat 6 — IoT */
    { fr: ["Hardware cible (Raspberry Pi, Jetson Nano, FPGA, MCU) ?", "Contraintes ressources (RAM max, CPU max, autonomie batterie) ?", "Mise à jour OTA des modèles nécessaire ?", "Latence d'inférence requise (< 10ms, < 50ms, < 200ms) ?"],
      en: ["Target hardware (Raspberry Pi, Jetson Nano, FPGA, MCU)?", "Resource constraints (max RAM, max CPU, battery life)?", "OTA model updates required?", "Required inference latency (< 10ms, < 50ms, < 200ms)?"] },
    { fr: ["Nombre de capteurs ou devices à connecter ?", "Fréquence de collecte des données (ms, sec, min) ?", "Alertes temps réel requises (SMS, email, dashboard) ?", "Protocoles de communication (MQTT, HTTP, LoRa, Zigbee) ?"],
      en: ["Number of sensors or devices to connect?", "Data collection frequency (ms, sec, min)?", "Real-time alerts required (SMS, email, dashboard)?", "Communication protocols (MQTT, HTTP, LoRa, Zigbee)?"] },
    { fr: ["Résolution et FPS requis pour les caméras ?", "Nombre de caméras IP à connecter ?", "Traitement edge (local) ou cloud ?", "Conditions d'éclairage (jour, nuit, infrarouge) ?"],
      en: ["Required camera resolution and FPS?", "Number of IP cameras to connect?", "Edge (local) or cloud processing?", "Lighting conditions (day, night, infrared)?"] },
    { fr: ["Nombre de machines ou équipements à monitorer ?", "Types de capteurs disponibles (vibration, température, courant) ?", "Volume d'historique de pannes disponible ?", "Horizon de prédiction souhaité (7, 14 ou 30 jours) ?"],
      en: ["Number of machines or equipment to monitor?", "Available sensor types (vibration, temperature, current)?", "Available failure history volume?", "Desired prediction horizon (7, 14 or 30 days)?"] },
  ],
];

/* ── Tech badges per offer [category][offer] ── */
const CATEGORY_TECHS: Tech[][][] = [
  /* 0 — Cycle Commercial & Marketing */
  [
    [LG, OA, N8, PY, SL, NO],          // Agent Veille Marché
    [LG, LC, OA, N8, GHL, PY],         // Agent Sourcing de Leads
    [LG, OA, TW, N8, GHL, PY],         // Agent Outreach Multicanal
    [LG, OA, FA, N8, GHL, PY],         // Agent Qualification BANT
    [LG, FA, OA, TW, N8, PY],          // Agent Setter (Prise de RDV)
    [LG, FA, OA, AN, N8, PY],          // Agent Proposition Commerciale
    [LG, SK, OA, N8, GHL, PY],         // Agent Rétention & Upsell
  ],
  /* 1 — Support & Service Client */
  [
    [LC, LG, OA, TW, PN, FA],          // Agent SAV E-commerce (RAG)
    [LG, OA, FA, N8, PY],              // Agent Triage & Escalade
    [N8, OA, NO, AT_, FA, PY],         // Agent Onboarding Client
    [PY, LC, OA, GHL, FA, AN],         // Agent Notes Discovery
  ],
  /* 2 — BI & Intelligence Décisionnelle */
  [
    [BQ, LG, OA, MB, PBI, PY],         // Agent BI Langage Naturel
    [PY, BQ, FA, N8, PBI, MB],         // Reporting Automatique (PPT/PDF)
    [SK, TF, PT, BQ, PY, MB],          // Forecasting & Anomalies
    [LG, SK, OA, N8, GHL, PY],         // CRM Multi-agent & Pipeline
  ],
  /* 3 — Recherche & Données Structurées */
  [
    [ES, OA, PN, WV, FI, FA],          // Moteur de Recherche Sémantique
    [TF, PT, SK, AP_, FA, PY],         // Recommandation Personnalisée
    [PY, BQ, DF, SP, AF, KF],          // Pipeline de Données Intelligent
    [PT, TF, HF, SM, VA, PY],          // Fine-tuning & MLOps
  ],
  /* 4 — Documents, Vision & Industrie */
  [
    [OA, TX, GDA, AFR, LG, PY],        // OCR & Extraction Documentaire
    [PT, TF, RK, GVI, HF, PY],         // Vision IA & Détection d'Objets
    [PT, PY, VA, GC],                  // BIM & Point Cloud
    [PY, BQ, FA, VA, GC],              // Cartographie & Géolocalisation
  ],
  /* 5 — Développement Web & Mobile */
  [
    [NX, RC, FA, SB, PY],              // Refonte UX/UI Web
    [RC, FA, SB, N8, PY],              // Application Mobile
    [NX, RC, GF, PY, FA],              // Débogage & Performance
    [NX, RC, GC, FA, PY],              // SEO Technique
  ],
  /* 6 — IoT & IA Embarquée */
  [
    [PT, TF, PY, VA, GC],              // IA Embarquée sur Edge Device
    [KF, GF, PY, BQ, N8],              // Monitoring IoT Temps Réel
    [PT, TF, GVI, RK, PY],             // Vision Machine sur Caméra IP
    [SK, TF, PT, PY, BQ],              // Maintenance Prédictive IA
  ],
];

/* ── Large illustration icon per offer card ── */
const OFFER_ICONS: IconType[][] = [
  [LuEye, LuSearch, LuMegaphone, LuTarget, LuCalendarCheck, LuFileText, LuActivity],
  [LuMessageSquare, LuBell, LuNetwork, LuScan],
  [LuChartBar, LuFileSearch, LuTrendingUp, LuDatabase],
  [LuSearch, LuLayers, LuWorkflow, LuBrain],
  [LuScanLine, LuEye, LuBox, LuMap],
  [LuMonitor, LuSmartphone, LuBug, LuSearch],
  [LuCpu, LuActivity, LuEye, LuTriangle],
];

/* ── i18n ── */
const i18n = {
  fr: {
    offersTag: "Nos agents & solutions",
    offersTitle: "30+ offres concrètes",
    offersTitleEm: "et déployables",
    offersDesc: "Chaque solution est un agent IA ou un système autonome testé en production, intégrable dans votre stack existante.",
    categories: [
      { label: "Cycle Commercial & Marketing", offers: [
        { title: "Agent Veille Marché",           desc: "Scraping quotidien de vos concurrents, nouveaux entrants et opportunités. Résumé LLM livré dans Notion ou Slack." },
        { title: "Agent Sourcing de Leads",       desc: "Collecte automatisée de contacts B2B qualifiés via Apollo, LinkedIn et annuaires, synchronisés dans votre CRM." },
        { title: "Agent Outreach Multicanal",     desc: "Séquences personnalisées email + LinkedIn + appel générées par LLM, avec tracking et relances automatiques." },
        { title: "Agent Qualification BANT",      desc: "Analyse des réponses prospects, score BANT mis à jour, routage intelligent : HOT vers setter / COLD vers nurturing." },
        { title: "Agent Setter (Prise de RDV)",   desc: "Proposition de créneaux via Calendly, confirmations, rappels J-1 et brief pré-call généré par LLM." },
        { title: "Agent Proposition Commerciale", desc: "Draft de proposition commerciale généré depuis les notes du discovery call. PDF envoyé via DocuSign automatiquement." },
        { title: "Agent Rétention & Upsell",      desc: "Détection de churn risk par analyse comportementale, email de réengagement personnalisé et séquence upsell déclenchée après succès." },
      ]},
      { label: "Support & Service Client", offers: [
        { title: "Agent SAV E-commerce (RAG)",    desc: "Répond aux clients par email et WhatsApp sur statut commande, livraison et retours. Règles métier dans Notion. Compatible WooCommerce et Shopify." },
        { title: "Agent Triage & Escalade",       desc: "Priorisation automatique des tickets par urgence et catégorie, réponse aux questions fréquentes, escalade vers humain si complexe." },
        { title: "Agent Onboarding Client",       desc: "Email de bienvenue automatique, checklist d'onboarding suivie dans Notion ou Jira, rappels si étapes non complétées." },
        { title: "Agent Notes Discovery",         desc: "Transcription automatique des calls (Whisper) et résumé LLM structuré. Fiche créée automatiquement dans le CRM." },
      ]},
      { label: "BI & Intelligence Décisionnelle", offers: [
        { title: "Agent BI Langage Naturel",      desc: "Questions en français ou anglais vers SQL généré vers dashboard automatique. Vos équipes lisent leurs KPIs sans analyste." },
        { title: "Reporting Automatique (PPT/PDF)",desc: "Dashboard PowerPoint ou PDF généré depuis WooCommerce, Shopify ou toute source, enrichi de données externes pour le pilotage." },
        { title: "Forecasting & Anomalies",       desc: "Prévisions de revenus sur 3/6/12 mois, détection d'anomalies en temps réel, alertes automatiques sur churn risk et dérives." },
        { title: "CRM Multi-agent & Pipeline",    desc: "Scoring LTV, pipeline orchestration, alertes renouvellement et réactivation. CRM piloté par l'IA, pas par vos commerciaux." },
      ]},
      { label: "Recherche & Données Structurées", offers: [
        { title: "Moteur de Recherche Sémantique",desc: "Recherche vectorielle sur vos catalogues, bases de connaissance et contenus. Résultats pertinents dès le premier mot." },
        { title: "Recommandation Personnalisée",  desc: "Collaborative filtering et matching hybride pour surface le bon produit ou service à la bonne personne au bon moment." },
        { title: "Pipeline de Données Intelligent",desc: "ETL, CDC, synchronisation temps réel et data warehouse interrogeable en langage naturel via MCP." },
        { title: "Fine-tuning & MLOps",           desc: "Entraînement, RLHF, déploiement et monitoring de modèles IA sur votre infrastructure ou la nôtre (GCP, AWS, Azure)." },
      ]},
      { label: "Documents, Vision & Industrie", offers: [
        { title: "OCR & Extraction Documentaire", desc: "Extraction intelligente de données dans vos contrats, formulaires, factures et emails. Structurées en base automatiquement." },
        { title: "Vision IA & Détection d'Objets",desc: "Détection, segmentation et classification visuelle pour inventaire, qualité industrielle, logistique et retail." },
        { title: "BIM & Point Cloud",             desc: "Traitement de maquettes numériques (BIM) et données 3D point cloud pour le bâtiment, la construction et l'industrie." },
        { title: "Cartographie & Géolocalisation",desc: "Analyse spatiale, routage logistique intelligent et cartographie automatisée depuis vos données terrain." },
      ]},
      { label: "Développement Web & Mobile", offers: [
        { title: "Refonte UX/UI Web",             desc: "Audit UX, refonte visuelle et technique de votre site ou application web. Core Web Vitals, accessibilité et expérience utilisateur optimisés." },
        { title: "Application Mobile (React Native)", desc: "Développement iOS et Android avec React Native. API REST, mode offline et publication sur App Store et Play Store." },
        { title: "Débogage & Optimisation Performance", desc: "Chasse systématique aux bugs, memory leaks et régressions. Profiling, correction et tests de non-régression pour fiabiliser votre code." },
        { title: "SEO Technique & Visibilité Organique", desc: "Audit SEO technique complet, structured data, Core Web Vitals et stratégie de mots-clés. De l'analyse à l'implémentation sur votre stack." },
      ]},
      { label: "IoT & IA Embarquée", offers: [
        { title: "IA Embarquée sur Edge Device",  desc: "Déploiement de modèles IA légers (TFLite, ONNX) sur Raspberry Pi, Jetson Nano et microcontrôleurs. Inférence locale, latence < 50ms, zéro cloud." },
        { title: "Monitoring IoT Temps Réel",     desc: "Collecte et agrégation de données capteurs, détection d'anomalies en temps réel et tableaux de bord de supervision pour vos équipements connectés." },
        { title: "Vision Machine sur Caméra IP",  desc: "Détection, classification et contrôle qualité directement sur caméra IP ou device edge. Traitement local, alerte instantanée, audit visuel automatisé." },
        { title: "Maintenance Prédictive IA",     desc: "Modèles de prédiction de pannes sur données capteurs vibratoires, thermiques et électriques. Alertes anticipées 7 à 30 jours avant la défaillance." },
      ]},
    ],
  },
  en: {
    offersTag: "Our agents & solutions",
    offersTitle: "30+ concrete,",
    offersTitleEm: "deployable solutions",
    offersDesc: "Every solution is a production-tested AI agent or autonomous system, integrable into your existing stack.",
    categories: [
      { label: "Commercial Cycle & Marketing", offers: [
        { title: "Market Intelligence Agent",     desc: "Daily scraping of competitors, new entrants and opportunities. LLM summary delivered to Notion or Slack." },
        { title: "Lead Sourcing Agent",           desc: "Automated B2B contact collection via Apollo, LinkedIn and directories, synced directly into your CRM." },
        { title: "Multichannel Outreach Agent",   desc: "LLM-personalized email + LinkedIn + call sequences with open tracking and automated follow-ups." },
        { title: "BANT Qualification Agent",      desc: "Analyzes prospect replies, updates BANT score, routes intelligently: HOT to setter / COLD to nurturing." },
        { title: "Setter Agent (Meeting Booking)",desc: "Slot proposals via Calendly, confirmations, J-1 reminders and LLM-generated pre-call brief." },
        { title: "Commercial Proposal Agent",     desc: "Proposal draft generated from discovery call notes. PDF auto-sent via DocuSign API." },
        { title: "Retention & Upsell Agent",      desc: "Behavioral churn risk detection, personalized re-engagement email and upsell sequences triggered after success milestones." },
      ]},
      { label: "Support & Customer Service", offers: [
        { title: "E-commerce SAV Agent (RAG)",    desc: "Answers customers via email and WhatsApp on order status, shipping and returns. Business rules in Notion. WooCommerce and Shopify ready." },
        { title: "Triage & Escalation Agent",     desc: "Automatic ticket prioritization by urgency and category, FAQ auto-response, escalation to human if complex." },
        { title: "Client Onboarding Agent",       desc: "Welcome email automation, onboarding checklist tracked in Notion or Jira, reminders for incomplete steps." },
        { title: "Discovery Notes Agent",         desc: "Automatic call transcription (Whisper) and LLM-structured summary. Record auto-created in CRM." },
      ]},
      { label: "BI & Decision Intelligence", offers: [
        { title: "Natural Language BI Agent",     desc: "Questions in plain English to generated SQL to automatic dashboard. Your team reads KPIs without an analyst." },
        { title: "Automatic Reporting (PPT/PDF)", desc: "Dashboard generated from WooCommerce, Shopify or any source, enriched with external data for executive reporting." },
        { title: "Forecasting & Anomaly Detection",desc: "3/6/12-month revenue forecasts, real-time anomaly alerts on churn risk and performance drift." },
        { title: "Multi-agent CRM & Pipeline",    desc: "LTV scoring, pipeline orchestration, renewal alerts and reactivation. CRM driven by AI, not by your team." },
      ]},
      { label: "Search & Structured Data", offers: [
        { title: "Semantic Search Engine",        desc: "Vector search across your catalogues, knowledge bases and content. Relevant results from the first word." },
        { title: "Personalized Recommendation",   desc: "Collaborative filtering and hybrid matching to surface the right product or service to the right person." },
        { title: "Intelligent Data Pipeline",     desc: "ETL, CDC, real-time sync and data warehouse queryable in plain language via MCP protocol." },
        { title: "Fine-tuning & MLOps",           desc: "Training, RLHF, deployment and model monitoring on your infrastructure or ours (GCP, AWS, Azure)." },
      ]},
      { label: "Documents, Vision & Industry", offers: [
        { title: "OCR & Document Extraction",     desc: "Intelligent data extraction from contracts, forms, invoices and emails. Auto-structured into your database." },
        { title: "Vision AI & Object Detection",  desc: "Detection, segmentation and visual classification for inventory, industrial quality, logistics and retail." },
        { title: "BIM & Point Cloud",             desc: "Digital model (BIM) and 3D point cloud processing for construction, architecture and industrial environments." },
        { title: "Geolocation & Mapping",         desc: "Spatial analysis, intelligent logistics routing and automated mapping from your field data." },
      ]},
      { label: "Web & Mobile Development", offers: [
        { title: "UX/UI Web Redesign",            desc: "UX audit, visual and technical redesign of your website or web app. Core Web Vitals, accessibility and user experience optimized." },
        { title: "Mobile App (React Native)",      desc: "iOS and Android app development with React Native. REST APIs, offline mode and publishing on App Store and Play Store." },
        { title: "Debugging & Performance Optimization", desc: "Systematic bug hunting, memory leaks and regression fixes. Profiling, correction and non-regression tests to stabilize your codebase." },
        { title: "Technical SEO & Organic Growth",desc: "Full technical SEO audit, structured data, Core Web Vitals and keyword strategy. From analysis to implementation on your stack." },
      ]},
      { label: "IoT & Edge AI", offers: [
        { title: "Edge AI on Embedded Devices",   desc: "Lightweight AI model deployment (TFLite, ONNX) on Raspberry Pi, Jetson Nano and microcontrollers. Local inference, < 50ms latency, zero cloud." },
        { title: "Real-time IoT Monitoring",      desc: "Sensor data collection and aggregation, real-time anomaly detection and supervision dashboards for your connected equipment." },
        { title: "Machine Vision on IP Camera",   desc: "Detection, classification and quality control directly on IP cameras or edge devices. Local processing, instant alerts, automated visual audit." },
        { title: "AI Predictive Maintenance",     desc: "Failure prediction models on vibration, thermal and electrical sensor data. Early warnings 7–30 days before equipment failure." },
      ]},
    ],
  },
};

function TechBadge({ tech }: { tech: Tech }) {
  return (
    <span className={styles.offerTech} style={{ background: `${tech.color}18`, borderColor: `${tech.color}50`, color: tech.color }}>
      {tech.logo ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img src={tech.logo} alt={tech.n} width={16} height={16} style={{ flexShrink: 0, objectFit: "contain" }} />
      ) : tech.Icon ? (
        <tech.Icon size={14} style={{ flexShrink: 0 }} />
      ) : (
        <span className={styles.techAbbrBadge} style={{ background: `${tech.color}33`, color: tech.color }}>{tech.abbr}</span>
      )}
      {tech.n}
    </span>
  );
}

export default function Services({
  locale,
  onAddToCart,
  cartItemIds,
}: {
  locale: string;
  onAddToCart?: (item: CartItem) => void;
  cartItemIds?: Set<string>;
}) {
  const lang = locale === "en" ? "en" : "fr";
  const t = i18n[lang];

  const [openQ, setOpenQ] = useState<Set<string>>(new Set());
  const [openMeta, setOpenMeta] = useState<Set<string>>(new Set());
  const [chatOffer, setChatOffer] = useState<{
    cardId: string;
    title: string;
    category: string;
    questions: string[];
  } | null>(null);

  const toggleQ = (id: string) => setOpenQ(prev => {
    const next = new Set(prev);
    next.has(id) ? next.delete(id) : next.add(id);
    return next;
  });

  const toggleMeta = (id: string) => setOpenMeta(prev => {
    const next = new Set(prev);
    next.has(id) ? next.delete(id) : next.add(id);
    return next;
  });

  return (
    <section id="services" className={styles.services}>
      <div className={`reveal ${styles.sectionTag}`}>
        <span className={styles.sectionTagLine} />
        {t.offersTag}
      </div>
      <h2 className={`reveal d1 ${styles.sectionTitle}`}>
        {t.offersTitle} <em>{t.offersTitleEm}</em>
      </h2>
      <p className={`reveal d2 ${styles.sectionDesc}`} style={{ marginBottom: 48 }}>
        {t.offersDesc}
      </p>

      <div className={styles.categories}>
        {t.categories.map((cat, ci) => {
          const CatIcon = CAT_ICONS[ci];
          const catSlug = CAT_SLUGS[ci];
          const discoverLabel = lang === "fr" ? "Découvrir →" : "Learn more →";
          return (
            <div key={ci} className={`reveal d${Math.min(ci + 1, 4)} ${styles.categoryBlock}`}>
              <div className={styles.categoryHeader}>
                <div className={styles.categoryIconWrap}>
                  <CatIcon size={18} />
                </div>
                <span className={styles.categoryLabel}>{cat.label}</span>
                <Link href={`/${locale}/services/${catSlug}`} className={styles.categoryDiscover}>
                  {discoverLabel}
                </Link>
              </div>
              <div className={styles.offersGrid}>
                {cat.offers.map((offer, oi) => {
                  const OfferIcon = OFFER_ICONS[ci]?.[oi];
                  const techs = CATEGORY_TECHS[ci]?.[oi] ?? [];
                  const meta = AGENT_META[ci]?.[oi] ?? null;
                  const questions = CLIENT_QUESTIONS[ci]?.[oi];
                  const cardId = `${ci}-${oi}`;
                  const isMetaOpen = openMeta.has(cardId);
                  const isQOpen = openQ.has(cardId);

                  return (
                    <div
                      key={oi}
                      className={styles.offerCard}
                      style={{ "--card-cat": getCardBg(ci, oi) } as React.CSSProperties}
                    >
                      {OfferIcon && (
                        <div className={styles.offerIllust}>
                          <OfferIcon size={36} />
                        </div>
                      )}

                      {/* Agent metric badge (CommercialCycle data) */}
                      {meta && (
                        <div className={styles.agentMetaRow}>
                          <span className={styles.agentMetricNum} style={{ color: meta.color }}>{meta.metric}</span>
                          <span className={styles.agentMetricLbl}>{meta.metricLabel[lang]}</span>
                          <span className={styles.agentAutomBadge} style={{ background: `${meta.color}18`, color: meta.color, borderColor: `${meta.color}35` }}>
                            <LuZap size={9} />
                            {meta.automation} {lang === "fr" ? "auto" : "auto"}
                          </span>
                        </div>
                      )}

                      <div className={styles.offerTitle}>{offer.title}</div>
                      <div className={styles.offerDesc}>{offer.desc}</div>
                      <div className={styles.offerTechs}>
                        {techs.map((tech, ti) => <TechBadge key={ti} tech={tech} />)}
                      </div>

                      {/* Before / After toggle */}
                      {meta && (
                        <>
                          <button
                            className={styles.agentToggleBtn}
                            onClick={() => toggleMeta(cardId)}
                            style={{ color: meta.color, borderColor: `${meta.color}30` }}
                          >
                            <LuClock size={11} />
                            <span>{lang === "fr" ? "Avant / Après →" : "Before / After →"}</span>
                            <LuChevronDown size={12} style={{ marginLeft: "auto", transform: isMetaOpen ? "rotate(180deg)" : "none", transition: "transform 0.25s" }} />
                          </button>
                          {isMetaOpen && (
                            <div className={styles.agentPanel}>
                              <div className={styles.beforeCell}>
                                <div className={styles.compareLabel}>
                                  <LuClock size={10} />
                                  <span>{lang === "fr" ? "Aujourd'hui" : "Today"}</span>
                                </div>
                                <p>{meta.before[lang]}</p>
                              </div>
                              <div className={styles.afterCell} style={{ borderLeftColor: meta.color }}>
                                <div className={styles.compareLabel} style={{ color: meta.color }}>
                                  <LuRocket size={10} />
                                  <span>{lang === "fr" ? "Avec notre Agent" : "With our Agent"}</span>
                                </div>
                                <p>{meta.after[lang]}</p>
                              </div>
                            </div>
                          )}
                        </>
                      )}

                      {/* Client questions */}
                      {questions && (
                        <>
                          <button
                            className={styles.questionsToggleBtn}
                            onClick={() => toggleQ(cardId)}
                          >
                            <LuCircleHelp size={11} />
                            <span>{lang === "fr" ? `Questions clés (${questions.fr.length})` : `Key questions (${questions.en.length})`}</span>
                            <LuChevronDown size={12} style={{ marginLeft: "auto", transform: isQOpen ? "rotate(180deg)" : "none", transition: "transform 0.25s" }} />
                          </button>
                          {isQOpen && (
                            <ul className={styles.questionsList}>
                              {questions[lang].map((q, qi) => (
                                <li key={qi} className={styles.questionsItem}>
                                  <span className={styles.questionsDot} />
                                  {q}
                                </li>
                              ))}
                            </ul>
                          )}
                        </>
                      )}

                      <div className={styles.offerCardFooter}>
                        <Link href={`/${locale}/services/offer/${OFFER_SLUGS[ci]?.[oi] ?? catSlug}`} className={styles.offerCardLink}>
                          {lang === "fr" ? "En savoir plus →" : "Learn more →"}
                        </Link>
                        {onAddToCart && (() => {
                          const itemId = `${ci}-${oi}`;
                          const inCart = cartItemIds?.has(itemId);
                          return (
                            <button
                              className={`${styles.addToCartBtn} ${inCart ? styles.addToCartBtnActive : ""}`}
                              onClick={() => {
                              if (inCart) {
                                onAddToCart({ id: itemId, title: offer.title, category: cat.label });
                              } else if (questions?.[lang]?.length) {
                                setChatOffer({ cardId: itemId, title: offer.title, category: cat.label, questions: questions[lang] });
                              } else {
                                onAddToCart({ id: itemId, title: offer.title, category: cat.label });
                              }
                            }}
                              aria-label={inCart
                                ? (lang === "fr" ? "Retirer du panier" : "Remove from cart")
                                : (lang === "fr" ? "Commander ce service" : "Order this service")}
                            >
                              {inCart ? <LuCheck size={13} /> : <LuCalendarCheck size={13} />}
                              {inCart
                                ? (lang === "fr" ? "Commandé" : "Ordered")
                                : (lang === "fr" ? "Commander" : "Order")}
                            </button>
                          );
                        })()}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>

        {chatOffer && onAddToCart && (
          <OfferChatBot
            locale={locale}
            offerTitle={chatOffer.title}
            questions={chatOffer.questions}
            onComplete={(answersText) => {
              onAddToCart({ id: chatOffer.cardId, title: chatOffer.title, category: chatOffer.category, answers: answersText });
              setChatOffer(null);
            }}
            onSkip={() => {
              onAddToCart({ id: chatOffer.cardId, title: chatOffer.title, category: chatOffer.category });
              setChatOffer(null);
            }}
            onClose={() => setChatOffer(null)}
          />
        )}
    </section>
  );
}
