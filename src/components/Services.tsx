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
        desc: "Quand votre entreprise doit mettre le bon produit, service ou contenu face à la bonne personne au bon instant, nous construisons des systèmes de recherche et recommandation intelligents. Recherche sémantique, lexicale, multimodale — votre catalogue ou votre offre devient immédiatement accessible.",
        tags: ["Recherche sémantique", "Recommandation personnalisée", "Vision IA"],
        featured: false,
      },
      {
        icon: "🤖",
        label: "Logiciels IA de Production",
        title: "Des logiciels qui apprennent et s'améliorent",
        desc: "Nous construisons des logiciels et systèmes complets où l'IA accélère chaque couche. Plateformes RAG, pipelines de données, agents intelligents avec mémoire et compétences, intelligence support, triage automatisé et déploiement MLOps inclus.",
        tags: ["RAG Platform", "Agents IA", "MLOps", "Fine-tuning"],
        featured: true,
      },
      {
        icon: "📊",
        label: "Intelligence Décisionnelle",
        title: "Vos données vous parlent, enfin",
        desc: "La performance de votre entreprise ne devrait pas nécessiter un analyste pour être comprise. Nous construisons prévisions, détection d'anomalies et intelligence décisionnelle sur vos données synchronisées, interrogeables en langage naturel.",
        tags: ["Forecasting", "BI Naturel", "CRM Multi-agent", "Rétention"],
        featured: false,
      },
      {
        icon: "📞",
        label: "Automatisation Commerciale",
        title: "Votre cycle commercial, entièrement automatisé",
        desc: "Nous automatisons l'intégralité du cycle commercial de A à Z : génération de leads, qualification BANT, prospection multicanale (email, LinkedIn, appel), suivi, prise de rendez-vous, call intelligence, CRM et suivi d'exécution avec routage intelligent.",
        tags: ["Lead Gen", "Outreach IA", "CRM Auto", "Call Intelligence"],
        featured: false,
      },
      {
        icon: "📄",
        label: "Données Non Structurées & Vision",
        title: "Exploitez vos documents et environnements visuels",
        desc: "La plupart des systèmes ne savent pas traiter les données non structurées dans vos documents, emails et environnements visuels. OCR, extraction contractuelle, parsing de formulaires, détection d'objets, BIM, point cloud, inventaire logistique et cartographie.",
        tags: ["OCR IA", "Extraction documentaire", "Vision IA", "Supply Chain"],
        featured: false,
      },
    ],
    tangibleTitle: "Solutions clés en main — concrètes et déployables",
    tangibleDesc: "Des exemples concrets de ce que nous livrons, testés en production.",
    solutions: [
      {
        num: "01",
        title: "Agent SAV intelligent pour votre boutique en ligne",
        desc: "Un agent IA répond à vos clients par email et WhatsApp en utilisant les données de votre site (statut commande, livraison, retours) avec vos règles de gestion définies dans Notion. Compatible WooCommerce, Shopify et tout site e-commerce.",
      },
      {
        num: "02",
        title: "Veille concurrentielle automatisée dans Notion",
        desc: "Scraping automatique quotidien ou hebdomadaire qui remplit et met à jour un tableau Notion avec vos concurrents en ligne et leurs critères produits — sans intervention manuelle.",
      },
      {
        num: "03",
        title: "Reporting BI PowerPoint généré automatiquement",
        desc: "Un dashboard PowerPoint ou PDF généré automatiquement depuis vos données WooCommerce, Shopify ou tout autre source, enrichi avec des données externes pour analyser la demande et piloter votre activité.",
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
        desc: "When your business needs to surface the right product, service, or content to the right person at the right moment, we build search and recommendation systems using hybrid retrieval combining semantic, lexical, and multimodal search.",
        tags: ["Semantic Search", "Personalized Recommendation", "Vision AI"],
        featured: false,
      },
      {
        icon: "🤖",
        label: "Production AI Software",
        title: "Software that learns and improves",
        desc: "We build production-grade software and data systems where AI accelerates every layer. RAG platforms, data pipelines, intelligent agents with memory and skills, support intelligence, automated triage, and full MLOps deployment.",
        tags: ["RAG Platform", "AI Agents", "MLOps", "Fine-tuning"],
        featured: true,
      },
      {
        icon: "📊",
        label: "Decision Intelligence",
        title: "Your data finally speaks to you",
        desc: "Business performance should never require a data analyst to interpret it. We build forecasting, anomaly detection, and decision intelligence on synchronized data warehouses, queryable in plain language.",
        tags: ["Forecasting", "Natural Language BI", "Multi-agent CRM", "Retention"],
        featured: false,
      },
      {
        icon: "📞",
        label: "Sales Automation",
        title: "Your entire sales cycle, automated",
        desc: "We automate the full commercial cycle end to end: lead generation, BANT scoring, multichannel outreach (email, LinkedIn, cold call), follow-up, appointment setting, call intelligence, CRM automation, and fulfillment tracking.",
        tags: ["Lead Gen", "AI Outreach", "CRM Auto", "Call Intelligence"],
        featured: false,
      },
      {
        icon: "📄",
        label: "Unstructured Data & Vision",
        title: "Unlock your documents and visual environments",
        desc: "Most systems cannot process unstructured data locked in documents, emails, and visual environments. OCR, contract extraction, form parsing, object detection, BIM integration, point cloud processing, and logistics intelligence.",
        tags: ["AI OCR", "Document Extraction", "Vision AI", "Supply Chain"],
        featured: false,
      },
    ],
    tangibleTitle: "Ready-to-deploy concrete solutions",
    tangibleDesc: "Examples of what we deliver, tested in production.",
    solutions: [
      {
        num: "01",
        title: "Intelligent SAV agent for your online store",
        desc: "An AI agent answers your customers via email and WhatsApp using your store data (order status, shipping, returns) with business rules defined in Notion. Compatible with WooCommerce, Shopify, and any e-commerce platform.",
      },
      {
        num: "02",
        title: "Automated competitive intelligence in Notion",
        desc: "Automatic daily or weekly scraping that fills and updates a Notion table with your online competitors and their product criteria — fully automated.",
      },
      {
        num: "03",
        title: "Automatically generated BI PowerPoint reports",
        desc: "A PowerPoint or PDF dashboard automatically generated from your WooCommerce, Shopify, or any data source, enriched with external data for demand analysis.",
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

      {/* Tangible Solutions */}
      <div style={{ marginTop: 80 }}>
        <div className={`reveal ${styles.sectionTag}`}>
          <span className={styles.sectionTagLine} />
          {t.tangibleTitle}
        </div>
        <p className={`reveal d1 ${styles.sectionDesc}`} style={{ marginBottom: 32 }}>
          {t.tangibleDesc}
        </p>
        <div className={styles.solutionsRow}>
          {t.solutions.map((s, i) => (
            <div key={i} className={`reveal d${i + 1} ${styles.solutionCard}`}>
              <div className={styles.solutionNumber}>{s.num}</div>
              <h4 className={styles.solutionTitle}>{s.title}</h4>
              <p className={styles.solutionDesc}>{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
