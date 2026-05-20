"use client";

import Link from "next/link";
import styles from "./Services.module.css";
import type { IconType } from "react-icons";
import {
  HiMagnifyingGlass, HiCpuChip, HiChartBar, HiPhone, HiDocumentText,
  HiSpeakerWave,
} from "react-icons/hi2";
import {
  LuMegaphone, LuMessageSquare, LuTrendingUp, LuFactory,
  LuEye, LuSearch, LuTarget, LuCalendarCheck, LuFileText, LuActivity,
  LuBell, LuNetwork, LuScan, LuChartBar, LuDatabase, LuFileSearch,
  LuBrain, LuLayers, LuWorkflow, LuScanLine, LuMap, LuBox, LuPackage,
} from "react-icons/lu";
import {
  SiPython, SiLangchain, SiFastapi, SiN8N,
  SiGooglebigquery, SiScikitlearn, SiTensorflow, SiPytorch, SiGooglecloud,
} from "react-icons/si";

/* ── Tech badge type ── */
interface Tech { Icon?: IconType; abbr?: string; color: string; n: string }

const PY: Tech = { Icon: SiPython,       color: "#3776AB", n: "Python"      };
const LG: Tech = { abbr: "LG",           color: "#22D3EE", n: "LangGraph"   };
const LC: Tech = { Icon: SiLangchain,    color: "#1C3C3C", n: "LangChain"   };
const FA: Tech = { Icon: SiFastapi,      color: "#009688", n: "FastAPI"     };
const N8: Tech = { Icon: SiN8N,          color: "#EA4B71", n: "n8n"         };
const BQ: Tech = { Icon: SiGooglebigquery, color: "#4285F4", n: "BigQuery"  };
const SK: Tech = { Icon: SiScikitlearn,  color: "#F7931E", n: "Scikit-learn"};
const TF: Tech = { Icon: SiTensorflow,   color: "#FF6F00", n: "TensorFlow"  };
const PT: Tech = { Icon: SiPytorch,      color: "#EE4C2C", n: "PyTorch"     };
const ES: Tech = { abbr: "ES",           color: "#005571", n: "Elastic"     };
const DF: Tech = { abbr: "DF",           color: "#4285F4", n: "Dataflow"    };
const GC: Tech = { Icon: SiGooglecloud,  color: "#4285F4", n: "GCP"         };

const SERVICE_SLUGS = [
  "search-recommendation",
  "production-ai",
  "decision-intelligence",
  "commercial-automation",
  "data-vision",
];

/* ── Icon per service card (5 main) ── */
const SERVICE_ICONS: IconType[] = [
  HiMagnifyingGlass, HiCpuChip, HiChartBar, HiPhone, HiDocumentText,
];

/* ── Icon per category header (5 categories) ── */
const CAT_ICONS: IconType[] = [
  LuMegaphone, LuMessageSquare, LuTrendingUp, HiMagnifyingGlass, LuFactory,
];

const CAT_SLUGS = [
  "commercial-automation",
  "production-ai",
  "decision-intelligence",
  "search-recommendation",
  "data-vision",
];

/* ── Tech badges per offer (category × offer) ── */
const CATEGORY_TECHS: Tech[][][] = [
  [
    [LG, PY, N8],
    [LG, LC, PY],
    [LG, N8, PY],
    [LG, PY],
    [LG, FA, PY],
    [LG, FA, PY],
    [LG, N8, PY],
  ],
  [
    [LC, LG, FA],
    [LG, PY],
    [N8, PY],
    [PY, LC],
  ],
  [
    [BQ, LG, PY],
    [PY, BQ],
    [SK, TF, PY],
    [LG, PY],
  ],
  [
    [PY, FA, ES],
    [TF, PY],
    [PY, BQ, DF],
    [PT, TF, PY],
  ],
  [
    [PY, LG],
    [PT, PY],
    [PY],
    [PY, GC],
  ],
];

/* ── Large illustration icon per offer card ── */
const OFFER_ICONS: IconType[][] = [
  [LuEye, LuSearch, LuMegaphone, LuTarget, LuCalendarCheck, LuFileText, LuActivity],
  [LuMessageSquare, LuBell, LuNetwork, LuScan],
  [LuChartBar, LuFileSearch, LuTrendingUp, LuDatabase],
  [LuSearch, LuLayers, LuWorkflow, LuBrain],
  [LuScanLine, LuEye, LuBox, LuMap],
];

/* ── i18n ── */
const i18n = {
  fr: {
    tag: "Ce que nous faisons",
    title: "Des solutions IA qui créent de la valeur",
    titleEm: "pour votre entreprise",
    desc: "Cinq domaines d'excellence, une seule ambition : transformer vos opérations avec l'intelligence artificielle et obtenir des résultats mesurables.",
    services: [
      { label: "Recherche & Recommandation", title: "Trouvez le bon client, au bon moment", desc: "Recherche sémantique, lexicale, knowledge graph et multimodale sur vos catalogues, contenus et données structurées. Le bon produit, service ou contenu face à la bonne personne, instantanément.", tags: ["Recherche sémantique", "Recommandation personnalisée", "Vision IA"], featured: false },
      { label: "Logiciels IA de Production", title: "Des logiciels qui apprennent et s'améliorent", desc: "Plateformes RAG, pipelines de données, agents intelligents avec mémoire et compétences, intelligence support, triage automatisé et déploiement MLOps. Chaque couche de la stack, accélérée par l'IA.", tags: ["RAG Platform", "Agents IA", "MLOps", "Fine-tuning"], featured: true },
      { label: "Intelligence Décisionnelle", title: "Vos données vous parlent, enfin", desc: "Prévisions, détection d'anomalies et intelligence décisionnelle sur vos données synchronisées, interrogeables en langage naturel. CRM multi-agent avec scoring, pipeline, rétention et réactivation.", tags: ["Forecasting", "BI Naturel", "CRM Multi-agent", "Rétention"], featured: false },
      { label: "Automatisation Commerciale", title: "Votre cycle commercial, entièrement automatisé", desc: "Du sourcing à l'onboarding : génération de leads, enrichissement BANT, outreach multicanal, qualification, setting, proposition, closing, support et rétention. Routage intelligent à chaque étape.", tags: ["Lead Gen", "Outreach IA", "CRM Auto", "Call Intelligence"], featured: false },
      { label: "Données Non Structurées & Vision", title: "Exploitez vos documents et environnements visuels", desc: "OCR, extraction contractuelle, parsing de formulaires, automation emails via MCP. Étendu à la détection d'objets, segmentation, BIM, point cloud, inventaire logistique et cartographie géospatiale.", tags: ["OCR IA", "Extraction documentaire", "Vision IA", "Supply Chain"], featured: false },
    ],
    offersTag: "Nos agents & solutions",
    offersTitle: "20+ offres concrètes et déployables",
    offersDesc: "Chaque solution est un agent IA ou un système autonome testé en production, intégrable dans votre stack existante.",
    categories: [
      { label: "Cycle Commercial & Marketing", offers: [
        { title: "Agent Veille Marché", desc: "Scraping quotidien de vos concurrents, nouveaux entrants et opportunités. Résumé LLM livré dans Notion ou Slack." },
        { title: "Agent Sourcing de Leads", desc: "Collecte automatisée de contacts B2B qualifiés via Apollo, LinkedIn et annuaires, synchronisés dans votre CRM." },
        { title: "Agent Outreach Multicanal", desc: "Séquences personnalisées email + LinkedIn + appel générées par LLM, avec tracking et relances automatiques." },
        { title: "Agent Qualification BANT", desc: "Analyse des réponses prospects, score BANT mis à jour, routage intelligent : HOT vers setter / COLD vers nurturing." },
        { title: "Agent Setter (Prise de RDV)", desc: "Proposition de créneaux via Calendly, confirmations, rappels J-1 et brief pré-call généré par LLM." },
        { title: "Agent Proposition Commerciale", desc: "Draft de proposition commerciale généré depuis les notes du discovery call. PDF envoyé via DocuSign automatiquement." },
        { title: "Agent Rétention & Upsell", desc: "Détection de churn risk par analyse comportementale, email de réengagement personnalisé et séquence upsell déclenchée après succès." },
      ]},
      { label: "Support & Service Client", offers: [
        { title: "Agent SAV E-commerce (RAG)", desc: "Répond aux clients par email et WhatsApp sur statut commande, livraison et retours. Règles métier dans Notion. Compatible WooCommerce et Shopify." },
        { title: "Agent Triage & Escalade", desc: "Priorisation automatique des tickets par urgence et catégorie, réponse aux questions fréquentes, escalade vers humain si complexe." },
        { title: "Agent Onboarding Client", desc: "Email de bienvenue automatique, checklist d'onboarding suivie dans Notion ou Jira, rappels si étapes non complétées." },
        { title: "Agent Notes Discovery", desc: "Transcription automatique des calls (Whisper) et résumé LLM structuré. Fiche créée automatiquement dans le CRM." },
      ]},
      { label: "BI & Intelligence Décisionnelle", offers: [
        { title: "Agent BI Langage Naturel", desc: "Questions en français ou anglais vers SQL généré vers dashboard automatique. Vos équipes lisent leurs KPIs sans analyste." },
        { title: "Reporting Automatique (PPT/PDF)", desc: "Dashboard PowerPoint ou PDF généré depuis WooCommerce, Shopify ou toute source, enrichi de données externes pour le pilotage." },
        { title: "Forecasting & Anomalies", desc: "Prévisions de revenus sur 3/6/12 mois, détection d'anomalies en temps réel, alertes automatiques sur churn risk et dérives." },
        { title: "CRM Multi-agent & Pipeline", desc: "Scoring LTV, pipeline orchestration, alertes renouvellement et réactivation. CRM piloté par l'IA, pas par vos commerciaux." },
      ]},
      { label: "Recherche & Données Structurées", offers: [
        { title: "Moteur de Recherche Sémantique", desc: "Recherche vectorielle sur vos catalogues, bases de connaissance et contenus. Résultats pertinents dès le premier mot." },
        { title: "Recommandation Personnalisée", desc: "Collaborative filtering et matching hybride pour surface le bon produit ou service à la bonne personne au bon moment." },
        { title: "Pipeline de Données Intelligent", desc: "ETL, CDC, synchronisation temps réel et data warehouse interrogeable en langage naturel via MCP." },
        { title: "Fine-tuning & MLOps", desc: "Entraînement, RLHF, déploiement et monitoring de modèles IA sur votre infrastructure ou la nôtre (GCP, AWS, Azure)." },
      ]},
      { label: "Documents, Vision & Industrie", offers: [
        { title: "OCR & Extraction Documentaire", desc: "Extraction intelligente de données dans vos contrats, formulaires, factures et emails. Structurées en base automatiquement." },
        { title: "Vision IA & Détection d'Objets", desc: "Détection, segmentation et classification visuelle pour inventaire, qualité industrielle, logistique et retail." },
        { title: "BIM & Point Cloud", desc: "Traitement de maquettes numériques (BIM) et données 3D point cloud pour le bâtiment, la construction et l'industrie." },
        { title: "Cartographie & Géolocalisation", desc: "Analyse spatiale, routage logistique intelligent et cartographie automatisée depuis vos données terrain." },
      ]},
    ],
  },
  en: {
    tag: "What we do",
    title: "AI solutions that create real value",
    titleEm: "for your business",
    desc: "Five areas of excellence, one ambition: transform your operations with artificial intelligence and deliver measurable results.",
    services: [
      { label: "Search & Recommendation", title: "Find the right customer, at the right moment", desc: "Semantic, lexical, knowledge graph and multimodal search across your catalogues, content and structured data. The right product, service or content to the right person, instantly.", tags: ["Semantic Search", "Personalized Recommendation", "Vision AI"], featured: false },
      { label: "Production AI Software", title: "Software that learns and improves", desc: "RAG platforms, data pipelines, intelligent agents with memory and skills, support intelligence, automated triage and MLOps deployment. Every layer of the stack, accelerated by AI.", tags: ["RAG Platform", "AI Agents", "MLOps", "Fine-tuning"], featured: true },
      { label: "Decision Intelligence", title: "Your data finally speaks to you", desc: "Forecasting, anomaly detection and decision intelligence on synchronized data warehouses, queryable in plain language. Multi-agent CRM with scoring, pipeline orchestration, retention and reactivation.", tags: ["Forecasting", "Natural Language BI", "Multi-agent CRM", "Retention"], featured: false },
      { label: "Sales Automation", title: "Your entire sales cycle, automated", desc: "From sourcing to onboarding: lead generation, BANT enrichment, multichannel outreach, qualification, appointment setting, proposal, closing, support and retention. Intelligent routing at every stage.", tags: ["Lead Gen", "AI Outreach", "CRM Auto", "Call Intelligence"], featured: false },
      { label: "Unstructured Data & Vision", title: "Unlock your documents and visual environments", desc: "OCR, contract extraction, form parsing, email automation via MCP. Extended to object detection, segmentation, BIM integration, point cloud processing, logistics intelligence and geospatial mapping.", tags: ["AI OCR", "Document Extraction", "Vision AI", "Supply Chain"], featured: false },
    ],
    offersTag: "Our agents & solutions",
    offersTitle: "20+ concrete, deployable offers",
    offersDesc: "Every solution is a production-tested AI agent or autonomous system, integrable into your existing stack.",
    categories: [
      { label: "Commercial Cycle & Marketing", offers: [
        { title: "Market Intelligence Agent", desc: "Daily scraping of competitors, new entrants and opportunities. LLM summary delivered to Notion or Slack." },
        { title: "Lead Sourcing Agent", desc: "Automated B2B contact collection via Apollo, LinkedIn and directories, synced directly into your CRM." },
        { title: "Multichannel Outreach Agent", desc: "LLM-personalized email + LinkedIn + call sequences with open tracking and automated follow-ups." },
        { title: "BANT Qualification Agent", desc: "Analyzes prospect replies, updates BANT score, routes intelligently: HOT to setter / COLD to nurturing." },
        { title: "Setter Agent (Meeting Booking)", desc: "Slot proposals via Calendly, confirmations, J-1 reminders and LLM-generated pre-call brief." },
        { title: "Commercial Proposal Agent", desc: "Proposal draft generated from discovery call notes. PDF auto-sent via DocuSign API." },
        { title: "Retention & Upsell Agent", desc: "Behavioral churn risk detection, personalized re-engagement email and upsell sequences triggered after success milestones." },
      ]},
      { label: "Support & Customer Service", offers: [
        { title: "E-commerce SAV Agent (RAG)", desc: "Answers customers via email and WhatsApp on order status, shipping and returns. Business rules in Notion. WooCommerce and Shopify ready." },
        { title: "Triage & Escalation Agent", desc: "Automatic ticket prioritization by urgency and category, FAQ auto-response, escalation to human if complex." },
        { title: "Client Onboarding Agent", desc: "Welcome email automation, onboarding checklist tracked in Notion or Jira, reminders for incomplete steps." },
        { title: "Discovery Notes Agent", desc: "Automatic call transcription (Whisper) and LLM-structured summary. Record auto-created in CRM." },
      ]},
      { label: "BI & Decision Intelligence", offers: [
        { title: "Natural Language BI Agent", desc: "Questions in plain English to generated SQL to automatic dashboard. Your team reads KPIs without an analyst." },
        { title: "Automatic Reporting (PPT/PDF)", desc: "Dashboard generated from WooCommerce, Shopify or any source, enriched with external data for executive reporting." },
        { title: "Forecasting & Anomaly Detection", desc: "3/6/12-month revenue forecasts, real-time anomaly alerts on churn risk and performance drift." },
        { title: "Multi-agent CRM & Pipeline", desc: "LTV scoring, pipeline orchestration, renewal alerts and reactivation. CRM driven by AI, not by your team." },
      ]},
      { label: "Search & Structured Data", offers: [
        { title: "Semantic Search Engine", desc: "Vector search across your catalogues, knowledge bases and content. Relevant results from the first word." },
        { title: "Personalized Recommendation", desc: "Collaborative filtering and hybrid matching to surface the right product or service to the right person." },
        { title: "Intelligent Data Pipeline", desc: "ETL, CDC, real-time sync and data warehouse queryable in plain language via MCP protocol." },
        { title: "Fine-tuning & MLOps", desc: "Training, RLHF, deployment and model monitoring on your infrastructure or ours (GCP, AWS, Azure)." },
      ]},
      { label: "Documents, Vision & Industry", offers: [
        { title: "OCR & Document Extraction", desc: "Intelligent data extraction from contracts, forms, invoices and emails. Auto-structured into your database." },
        { title: "Vision AI & Object Detection", desc: "Detection, segmentation and visual classification for inventory, industrial quality, logistics and retail." },
        { title: "BIM & Point Cloud", desc: "Digital model (BIM) and 3D point cloud processing for construction, architecture and industrial environments." },
        { title: "Geolocation & Mapping", desc: "Spatial analysis, intelligent logistics routing and automated mapping from your field data." },
      ]},
    ],
  },
};

function TechBadge({ tech }: { tech: Tech }) {
  return (
    <span className={styles.offerTech} style={{ background: `${tech.color}22`, borderColor: `${tech.color}55`, color: tech.color }}>
      {tech.Icon ? (
        <tech.Icon size={10} style={{ flexShrink: 0 }} />
      ) : (
        <span className={styles.techAbbrBadge} style={{ background: `${tech.color}33`, color: tech.color }}>{tech.abbr}</span>
      )}
      {tech.n}
    </span>
  );
}

export default function Services({ locale }: { locale: string }) {
  const lang = locale === "en" ? "en" : "fr";
  const t = i18n[lang];
  const learnMore = lang === "fr" ? "Découvrir →" : "Learn more →";

  return (
    <section id="services" className={styles.services}>
      <div className={`reveal ${styles.sectionTag}`}>
        <span className={styles.sectionTagLine} />
        {t.tag}
      </div>
      <h2 className={`reveal d1 ${styles.sectionTitle}`}>
        {t.title} <em>{t.titleEm}</em>
      </h2>
      <p className={`reveal d2 ${styles.sectionDesc}`}>{t.desc}</p>

      <div className={styles.grid}>
        {t.services.map((s, i) => {
          const Icon = SERVICE_ICONS[i];
          const slug = SERVICE_SLUGS[i];
          return (
            <div key={i} className={`reveal d${Math.min(i + 1, 5)} ${styles.card} ${s.featured ? styles.cardFeatured : ""}`}>
              <div className={styles.iconWrap}>
                <Icon size={24} />
              </div>
              <div className={styles.cardLabel}>{s.label}</div>
              <h3 className={styles.cardTitle}>{s.title}</h3>
              <p className={styles.cardDesc}>{s.desc}</p>
              <div className={styles.tags}>
                {s.tags.map((tag, j) => (
                  <span key={j} className={`${styles.tag} ${j === 0 ? styles.tagGold : styles.tagBlue}`}>{tag}</span>
                ))}
              </div>
              <Link href={`/${locale}/services/${slug}`} className={styles.cardLink}>
                {learnMore}
              </Link>
            </div>
          );
        })}
      </div>

      <div style={{ marginTop: 96 }}>
        <div className={`reveal ${styles.sectionTag}`}>
          <span className={styles.sectionTagLine} />
          {t.offersTag}
        </div>
        <h3 className={`reveal d1 ${styles.offersTitle}`}>{t.offersTitle}</h3>
        <p className={`reveal d2 ${styles.sectionDesc}`} style={{ marginBottom: 48 }}>{t.offersDesc}</p>

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
                      <div key={oi} className={styles.offerCard}>
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
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
