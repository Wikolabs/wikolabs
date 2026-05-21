"use client";

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
  LuPlus, LuCheck,
} from "react-icons/lu";
import {
  SiPython, SiLangchain, SiFastapi, SiN8N,
  SiGooglebigquery, SiScikitlearn, SiTensorflow, SiPytorch, SiGooglecloud,
  SiReact, SiNextdotjs,
} from "react-icons/si";
import type { CartItem } from "@/components/ServiceCartPanel";

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

/* Per-card hue-shifted background — unique tint for every card */
const CAT_BASE_HUES = [43, 185, 217, 142, 270, 195, 35];
const getCardBg = (ci: number, oi: number) =>
  `hsla(${CAT_BASE_HUES[ci] + oi * 8}, 65%, 58%, 0.07)`;

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
                      <div className={styles.offerTitle}>{offer.title}</div>
                      <div className={styles.offerDesc}>{offer.desc}</div>
                      <div className={styles.offerTechs}>
                        {techs.map((tech, ti) => <TechBadge key={ti} tech={tech} />)}
                      </div>
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
                              onClick={() => onAddToCart({ id: itemId, title: offer.title, category: cat.label })}
                              aria-label={inCart
                                ? (lang === "fr" ? "Retirer du panier" : "Remove from cart")
                                : (lang === "fr" ? "Ajouter au panier" : "Add to cart")}
                            >
                              {inCart ? <LuCheck size={13} /> : <LuPlus size={13} />}
                              {inCart
                                ? (lang === "fr" ? "Ajouté" : "Added")
                                : (lang === "fr" ? "Ajouter" : "Add")}
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
    </section>
  );
}
