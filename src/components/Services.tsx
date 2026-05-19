"use client";

import styles from "./Services.module.css";

const i18n = {
  fr: {
    tag: "Ce que nous faisons",
    title: "Des solutions IA qui créent de la valeur",
    titleEm: "pour votre entreprise",
    desc: "Cinq domaines d'excellence, une seule ambition : transformer vos opérations avec l'intelligence artificielle et obtenir des résultats mesurables.",
    services: [
      {
        icon: "🔍",
        label: "Recherche & Recommandation",
        title: "Trouvez le bon client, au bon moment",
        desc: "Recherche sémantique, lexicale, knowledge graph et multimodale sur vos catalogues, contenus et données structurées. Le bon produit, service ou contenu face à la bonne personne, instantanément.",
        tags: ["Recherche sémantique", "Recommandation personnalisée", "Vision IA"],
        featured: false,
      },
      {
        icon: "🤖",
        label: "Logiciels IA de Production",
        title: "Des logiciels qui apprennent et s'améliorent",
        desc: "Plateformes RAG, pipelines de données, agents intelligents avec mémoire et compétences, intelligence support, triage automatisé et déploiement MLOps. Chaque couche de la stack, accélérée par l'IA.",
        tags: ["RAG Platform", "Agents IA", "MLOps", "Fine-tuning"],
        featured: true,
      },
      {
        icon: "📊",
        label: "Intelligence Décisionnelle",
        title: "Vos données vous parlent, enfin",
        desc: "Prévisions, détection d'anomalies et intelligence décisionnelle sur vos données synchronisées, interrogeables en langage naturel. CRM multi-agent avec scoring, pipeline, rétention et réactivation.",
        tags: ["Forecasting", "BI Naturel", "CRM Multi-agent", "Rétention"],
        featured: false,
      },
      {
        icon: "📞",
        label: "Automatisation Commerciale",
        title: "Votre cycle commercial, entièrement automatisé",
        desc: "Du sourcing à l'onboarding : génération de leads, enrichissement BANT, outreach multicanal, qualification, setting, proposition, closing, support et rétention — avec routage intelligent à chaque étape.",
        tags: ["Lead Gen", "Outreach IA", "CRM Auto", "Call Intelligence"],
        featured: false,
      },
      {
        icon: "📄",
        label: "Données Non Structurées & Vision",
        title: "Exploitez vos documents et environnements visuels",
        desc: "OCR, extraction contractuelle, parsing de formulaires, automation emails via MCP — étendu à la détection d'objets, segmentation, BIM, point cloud, inventaire logistique et cartographie géospatiale.",
        tags: ["OCR IA", "Extraction documentaire", "Vision IA", "Supply Chain"],
        featured: false,
      },
    ],
    offersTag: "Nos agents & solutions",
    offersTitle: "20+ offres concrètes et déployables",
    offersDesc: "Chaque solution est un agent IA ou un système autonome testé en production, intégrable dans votre stack existante.",
    categories: [
      {
        label: "Cycle Commercial & Marketing",
        icon: "📣",
        offers: [
          { title: "Agent Veille Marché", desc: "Scraping quotidien de vos concurrents, nouveaux entrants et opportunités — résumé LLM dans Notion ou Slack." },
          { title: "Agent Sourcing de Leads", desc: "Collecte automatisée de contacts B2B qualifiés via Apollo, LinkedIn et annuaires, synchronisés dans votre CRM." },
          { title: "Agent Outreach Multicanal", desc: "Séquences personnalisées email + LinkedIn + appel générées par LLM, avec tracking et relances automatiques." },
          { title: "Agent Qualification BANT", desc: "Analyse des réponses prospects, score BANT mis à jour, routage intelligent : HOT → setter / COLD → nurturing." },
          { title: "Agent Setter (Prise de RDV)", desc: "Proposition de créneaux via Calendly, confirmations, rappels J-1 et brief pré-call généré par LLM." },
          { title: "Agent Proposition Commerciale", desc: "Draft de proposition commerciale généré depuis les notes du discovery call, PDF envoyé via DocuSign automatiquement." },
          { title: "Agent Rétention & Upsell", desc: "Détection de churn risk par analyse comportementale, email de réengagement personnalisé et séquence upsell déclenchée après succès." },
        ],
      },
      {
        label: "Support & Service Client",
        icon: "💬",
        offers: [
          { title: "Agent SAV E-commerce (RAG)", desc: "Répond aux clients par email et WhatsApp sur statut commande, livraison et retours — règles métier dans Notion. Compatible WooCommerce, Shopify." },
          { title: "Agent Triage & Escalade", desc: "Priorisation automatique des tickets par urgence et catégorie, réponse aux questions fréquentes, escalade vers humain si complexe." },
          { title: "Agent Onboarding Client", desc: "Email de bienvenue automatique, checklist d'onboarding suivie dans Notion ou Jira, rappels si étapes non complétées." },
          { title: "Agent Notes Discovery", desc: "Transcription automatique des calls (Whisper) et résumé LLM structuré — fiche créée automatiquement dans le CRM." },
        ],
      },
      {
        label: "BI & Intelligence Décisionnelle",
        icon: "📈",
        offers: [
          { title: "Agent BI Langage Naturel", desc: "Questions en français ou anglais → SQL généré → dashboard automatique. Vos équipes lisent leurs KPIs sans analyste." },
          { title: "Reporting Automatique (PPT/PDF)", desc: "Dashboard PowerPoint ou PDF généré depuis WooCommerce, Shopify ou toute source, enrichi de données externes pour le pilotage." },
          { title: "Forecasting & Anomalies", desc: "Prévisions de revenus sur 3/6/12 mois, détection d'anomalies en temps réel, alertes automatiques sur churn risk et dérives." },
          { title: "CRM Multi-agent & Pipeline", desc: "Scoring LTV, pipeline orchestration, alertes renouvellement et réactivation — CRM piloté par l'IA, pas par vos commerciaux." },
        ],
      },
      {
        label: "Recherche & Données Structurées",
        icon: "🔎",
        offers: [
          { title: "Moteur de Recherche Sémantique", desc: "Recherche vectorielle sur vos catalogues, bases de connaissance et contenus — résultats pertinents dès le premier mot." },
          { title: "Recommandation Personnalisée", desc: "Collaborative filtering et matching hybride pour surface le bon produit ou service à la bonne personne au bon moment." },
          { title: "Pipeline de Données Intelligent", desc: "ETL, CDC, synchronisation temps réel et data warehouse interrogeable en langage naturel via MCP." },
          { title: "Fine-tuning & MLOps", desc: "Entraînement, RLHF, déploiement et monitoring de modèles IA sur votre infrastructure ou la nôtre (GCP, AWS, Azure)." },
        ],
      },
      {
        label: "Documents, Vision & Industrie",
        icon: "🏭",
        offers: [
          { title: "OCR & Extraction Documentaire", desc: "Extraction intelligente de données dans vos contrats, formulaires, factures et emails — structurées en base automatiquement." },
          { title: "Vision IA & Détection d'Objets", desc: "Détection, segmentation et classification visuelle pour inventaire, qualité industrielle, logistique et retail." },
          { title: "BIM & Point Cloud", desc: "Traitement de maquettes numériques (BIM) et données 3D point cloud pour le bâtiment, la construction et l'industrie." },
          { title: "Cartographie & Géolocalisation", desc: "Analyse spatiale, routage logistique intelligent et cartographie automatisée depuis vos données terrain." },
        ],
      },
    ],
  },
  en: {
    tag: "What we do",
    title: "AI solutions that create real value",
    titleEm: "for your business",
    desc: "Five areas of excellence, one ambition: transform your operations with artificial intelligence and deliver measurable results.",
    services: [
      {
        icon: "🔍",
        label: "Search & Recommendation",
        title: "Find the right customer, at the right moment",
        desc: "Semantic, lexical, knowledge graph and multimodal search across your catalogues, content and structured data. The right product, service or content to the right person, instantly.",
        tags: ["Semantic Search", "Personalized Recommendation", "Vision AI"],
        featured: false,
      },
      {
        icon: "🤖",
        label: "Production AI Software",
        title: "Software that learns and improves",
        desc: "RAG platforms, data pipelines, intelligent agents with memory and skills, support intelligence, automated triage and MLOps deployment. Every layer of the stack, accelerated by AI.",
        tags: ["RAG Platform", "AI Agents", "MLOps", "Fine-tuning"],
        featured: true,
      },
      {
        icon: "📊",
        label: "Decision Intelligence",
        title: "Your data finally speaks to you",
        desc: "Forecasting, anomaly detection and decision intelligence on synchronized data warehouses, queryable in plain language. Multi-agent CRM with scoring, pipeline orchestration, retention and reactivation.",
        tags: ["Forecasting", "Natural Language BI", "Multi-agent CRM", "Retention"],
        featured: false,
      },
      {
        icon: "📞",
        label: "Sales Automation",
        title: "Your entire sales cycle, automated",
        desc: "From sourcing to onboarding: lead generation, BANT enrichment, multichannel outreach, qualification, appointment setting, proposal, closing, support and retention — with intelligent routing at every stage.",
        tags: ["Lead Gen", "AI Outreach", "CRM Auto", "Call Intelligence"],
        featured: false,
      },
      {
        icon: "📄",
        label: "Unstructured Data & Vision",
        title: "Unlock your documents and visual environments",
        desc: "OCR, contract extraction, form parsing, email automation via MCP — extended to object detection, segmentation, BIM integration, point cloud processing, logistics intelligence and geospatial mapping.",
        tags: ["AI OCR", "Document Extraction", "Vision AI", "Supply Chain"],
        featured: false,
      },
    ],
    offersTag: "Our agents & solutions",
    offersTitle: "20+ concrete, deployable offers",
    offersDesc: "Every solution is a production-tested AI agent or autonomous system, integrable into your existing stack.",
    categories: [
      {
        label: "Commercial Cycle & Marketing",
        icon: "📣",
        offers: [
          { title: "Market Intelligence Agent", desc: "Daily scraping of competitors, new market entrants and opportunities — LLM-summarized in Notion or Slack." },
          { title: "Lead Sourcing Agent", desc: "Automated B2B contact collection via Apollo, LinkedIn and directories, synced directly into your CRM." },
          { title: "Multichannel Outreach Agent", desc: "LLM-personalized email + LinkedIn + call sequences with open tracking and automated follow-ups." },
          { title: "BANT Qualification Agent", desc: "Analyzes prospect replies, updates BANT score, routes intelligently: HOT → setter / COLD → nurturing." },
          { title: "Setter Agent (Meeting Booking)", desc: "Slot proposals via Calendly, confirmations, J-1 reminders and LLM-generated pre-call brief." },
          { title: "Commercial Proposal Agent", desc: "Proposal draft generated from discovery call notes, PDF auto-sent via DocuSign API." },
          { title: "Retention & Upsell Agent", desc: "Behavioral churn risk detection, personalized re-engagement email and upsell sequences triggered after success milestones." },
        ],
      },
      {
        label: "Support & Customer Service",
        icon: "💬",
        offers: [
          { title: "E-commerce SAV Agent (RAG)", desc: "Answers customers via email and WhatsApp on order status, shipping and returns — business rules in Notion. WooCommerce & Shopify ready." },
          { title: "Triage & Escalation Agent", desc: "Automatic ticket prioritization by urgency and category, FAQ auto-response, escalation to human if complex." },
          { title: "Client Onboarding Agent", desc: "Welcome email automation, onboarding checklist tracked in Notion or Jira, reminders for incomplete steps." },
          { title: "Discovery Notes Agent", desc: "Automatic call transcription (Whisper) and LLM-structured summary — record auto-created in CRM." },
        ],
      },
      {
        label: "BI & Decision Intelligence",
        icon: "📈",
        offers: [
          { title: "Natural Language BI Agent", desc: "Questions in plain English → generated SQL → automatic dashboard. Your team reads KPIs without an analyst." },
          { title: "Automatic Reporting (PPT/PDF)", desc: "Dashboard generated from WooCommerce, Shopify or any source, enriched with external data for executive reporting." },
          { title: "Forecasting & Anomaly Detection", desc: "3/6/12-month revenue forecasts, real-time anomaly alerts on churn risk and performance drift." },
          { title: "Multi-agent CRM & Pipeline", desc: "LTV scoring, pipeline orchestration, renewal alerts and reactivation — CRM driven by AI, not by your team." },
        ],
      },
      {
        label: "Search & Structured Data",
        icon: "🔎",
        offers: [
          { title: "Semantic Search Engine", desc: "Vector search across your catalogues, knowledge bases and content — relevant results from the first word." },
          { title: "Personalized Recommendation", desc: "Collaborative filtering and hybrid matching to surface the right product or service to the right person." },
          { title: "Intelligent Data Pipeline", desc: "ETL, CDC, real-time sync and data warehouse queryable in plain language via MCP protocol." },
          { title: "Fine-tuning & MLOps", desc: "Training, RLHF, deployment and model monitoring on your infrastructure or ours (GCP, AWS, Azure)." },
        ],
      },
      {
        label: "Documents, Vision & Industry",
        icon: "🏭",
        offers: [
          { title: "OCR & Document Extraction", desc: "Intelligent data extraction from contracts, forms, invoices and emails — auto-structured into your database." },
          { title: "Vision AI & Object Detection", desc: "Detection, segmentation and visual classification for inventory, industrial quality, logistics and retail." },
          { title: "BIM & Point Cloud", desc: "Digital model (BIM) and 3D point cloud processing for construction, architecture and industrial environments." },
          { title: "Geolocation & Mapping", desc: "Spatial analysis, intelligent logistics routing and automated mapping from your field data." },
        ],
      },
    ],
  },
};

export default function Services({ locale }: { locale: string }) {
  const lang = locale === "en" ? "en" : "fr";
  const t = i18n[lang];

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
        {t.services.map((s, i) => (
          <div
            key={i}
            className={`reveal d${Math.min(i + 1, 5)} ${styles.card} ${s.featured ? styles.cardFeatured : ""}`}
          >
            <div className={styles.iconWrap}>{s.icon}</div>
            <div className={styles.cardLabel}>{s.label}</div>
            <h3 className={styles.cardTitle}>{s.title}</h3>
            <p className={styles.cardDesc}>{s.desc}</p>
            <div className={styles.tags}>
              {s.tags.map((tag, j) => (
                <span key={j} className={`${styles.tag} ${j === 0 ? styles.tagGold : ""}`}>
                  {tag}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* All offers & agents */}
      <div style={{ marginTop: 96 }}>
        <div className={`reveal ${styles.sectionTag}`}>
          <span className={styles.sectionTagLine} />
          {t.offersTag}
        </div>
        <h3 className={`reveal d1 ${styles.offersTitle}`}>{t.offersTitle}</h3>
        <p className={`reveal d2 ${styles.sectionDesc}`} style={{ marginBottom: 48 }}>
          {t.offersDesc}
        </p>

        <div className={styles.categories}>
          {t.categories.map((cat, ci) => (
            <div key={ci} className={`reveal d${Math.min(ci + 1, 4)} ${styles.categoryBlock}`}>
              <div className={styles.categoryHeader}>
                <span className={styles.categoryIcon}>{cat.icon}</span>
                <span className={styles.categoryLabel}>{cat.label}</span>
              </div>
              <div className={styles.offersGrid}>
                {cat.offers.map((offer, oi) => (
                  <div key={oi} className={styles.offerCard}>
                    <div className={styles.offerTitle}>{offer.title}</div>
                    <div className={styles.offerDesc}>{offer.desc}</div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
