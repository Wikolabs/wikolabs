"use client";

import { useRef } from "react";
import styles from "./UseCases.module.css";

interface UseCase {
  icon: string;
  tag: string;
  color: string;
  metric: string;
  metricSub: { fr: string; en: string };
  title: { fr: string; en: string };
  before: { fr: string; en: string };
  after: { fr: string; en: string };
}

const CASES: UseCase[] = [
  {
    icon: "🛒",
    tag: "E-commerce",
    color: "#22D3EE",
    metric: "80%",
    metricSub: { fr: "tickets résolus sans agent", en: "tickets auto-resolved" },
    title: { fr: "Agent SAV Automatisé", en: "Automated Support Agent" },
    before: {
      fr: "3 agents submergés par 500 tickets/semaine. Délai moyen de réponse : 48h. Clients frustrés.",
      en: "3 agents overwhelmed by 500 tickets/week. Average response time: 48h. Frustrated customers.",
    },
    after: {
      fr: "Agent RAG connecté à WooCommerce & Notion : 80% résolus en < 45 secondes, 24h/24, 7j/7.",
      en: "RAG agent connected to WooCommerce & Notion: 80% resolved in < 45 seconds, 24/7.",
    },
  },
  {
    icon: "📊",
    tag: "Business Analytics",
    color: "#D4AF37",
    metric: "0h",
    metricSub: { fr: "de préparation manuelle", en: "of manual prep per month" },
    title: { fr: "Reporting Exécutif Automatique", en: "Automated Executive Reporting" },
    before: {
      fr: "4h le 1er de chaque mois pour consolider ventes, leads et coûts en un rapport PowerPoint.",
      en: "4h every 1st of the month consolidating sales, leads and costs into a PowerPoint deck.",
    },
    after: {
      fr: "Pipeline automatisé : extraction BigQuery → synthèse LLM → PDF envoyé à 8h00.",
      en: "Automated pipeline: BigQuery extraction → LLM synthesis → PDF delivered at 8am.",
    },
  },
  {
    icon: "🎯",
    tag: "Commercial",
    color: "#22C55E",
    metric: "×3.4",
    metricSub: { fr: "de leads qualifiés/semaine", en: "more qualified leads/week" },
    title: { fr: "Prospection IA Multi-canal", en: "AI Multi-channel Prospecting" },
    before: {
      fr: "Équipe commerciale passant 15h/semaine sur la prospection manuelle LinkedIn et email.",
      en: "Sales team spending 15h/week on manual LinkedIn and email prospecting.",
    },
    after: {
      fr: "Agent Apollo + LinkedIn + outreach LLM personnalisé : 200 leads ICP+ par semaine.",
      en: "Apollo + LinkedIn agent + personalized LLM outreach: 200 ICP+ leads per week.",
    },
  },
  {
    icon: "🏭",
    tag: "Industrie",
    color: "#F7931E",
    metric: "97%",
    metricSub: { fr: "précision à 40 fps", en: "accuracy at 40 fps" },
    title: { fr: "Vision IA Contrôle Qualité", en: "Vision AI Quality Control" },
    before: {
      fr: "Inspection manuelle sur ligne de production : 2 inspecteurs, taux de détection de 60%.",
      en: "Manual inspection on production line: 2 inspectors, 60% defect detection rate.",
    },
    after: {
      fr: "Modèle YOLO fine-tuné : 97% de précision à 40 images/seconde en temps réel.",
      en: "Fine-tuned YOLO model: 97% accuracy at 40 frames/second in real time.",
    },
  },
  {
    icon: "🛍️",
    tag: "Retail",
    color: "#9B59B6",
    metric: "+41%",
    metricSub: { fr: "de taux de conversion", en: "conversion rate increase" },
    title: { fr: "Recommandation Personnalisée", en: "Personalized Recommendation" },
    before: {
      fr: "50k références avec moteur de recherche par mots-clés. Panier moyen stagnant depuis 2 ans.",
      en: "50k SKUs with keyword search engine. Average cart stagnating for 2 years.",
    },
    after: {
      fr: "Recherche sémantique vectorielle + collaborative filtering. Panier +22%, session +40%.",
      en: "Vector semantic search + collaborative filtering. Cart +22%, session time +40%.",
    },
  },
  {
    icon: "📄",
    tag: "Finance",
    color: "#4285F4",
    metric: "×8",
    metricSub: { fr: "plus rapide que manuellement", en: "faster than manual" },
    title: { fr: "Extraction Documentaire Intelligente", en: "Intelligent Document Extraction" },
    before: {
      fr: "2000 factures/mois traitées manuellement par 3 FTE. Taux d'erreur de 4%.",
      en: "2,000 invoices/month processed manually by 3 FTE. Error rate of 4%.",
    },
    after: {
      fr: "Pipeline OCR + LLM vers ERP : 95% automatisé, erreurs < 0.3%, 8× plus rapide.",
      en: "OCR + LLM to ERP pipeline: 95% automated, errors < 0.3%, 8× faster.",
    },
  },
  {
    icon: "☁️",
    tag: "Infrastructure",
    color: "#E25A1C",
    metric: "-38%",
    metricSub: { fr: "de coût mensuel cloud", en: "monthly cloud cost" },
    title: { fr: "Migration Cloud & FinOps", en: "Cloud Migration & FinOps" },
    before: {
      fr: "47 serveurs on-premise, €18k/mois, maintenances imprévisibles et scaling impossible.",
      en: "47 on-premise servers, €18k/month, unpredictable maintenance and no scaling.",
    },
    after: {
      fr: "AWS + Kubernetes + FinOps : €11k/mois, auto-scaling, disponibilité 99.9%.",
      en: "AWS + Kubernetes + FinOps: €11k/month, auto-scaling, 99.9% availability.",
    },
  },
  {
    icon: "⚡",
    tag: "Data Engineering",
    color: "#EA4B71",
    metric: "15min",
    metricSub: { fr: "latence source → dashboard", en: "source to dashboard" },
    title: { fr: "Pipeline Data Temps Réel", en: "Real-time Data Pipeline" },
    before: {
      fr: "12 sources hétérogènes, rapports à J-1, impossible de décider en temps réel.",
      en: "12 heterogeneous sources, T-1 reports, impossible to make real-time decisions.",
    },
    after: {
      fr: "CDC + Airflow + BigQuery : données synchronisées en < 15min, dashboards toujours frais.",
      en: "CDC + Airflow + BigQuery: data synced in < 15min, always-fresh dashboards.",
    },
  },
];

const i18n = {
  fr: {
    tag: "Cas d'usage concrets",
    title: "Des résultats réels,",
    titleEm: "mesurables dès le jour 1",
    desc: "Chaque cas d'usage ci-dessous est inspiré d'une réalisation concrète de notre équipe. Les chiffres correspondent aux performances observées en production.",
    before: "Avant",
    after: "Après",
    drag: "Faites glisser →",
  },
  en: {
    tag: "Concrete use cases",
    title: "Real results,",
    titleEm: "measurable from day 1",
    desc: "Each use case below is inspired by a real implementation from our team. The numbers reflect observed production performance.",
    before: "Before",
    after: "After",
    drag: "Drag to scroll →",
  },
};

export default function UseCases({ locale }: { locale: string }) {
  const lang = locale === "en" ? "en" : "fr";
  const t = i18n[lang];
  const trackRef = useRef<HTMLDivElement>(null);
  const dragging = useRef(false);
  const startX = useRef(0);
  const scrollLeft = useRef(0);

  const onMouseDown = (e: React.MouseEvent) => {
    dragging.current = true;
    startX.current = e.pageX - (trackRef.current?.offsetLeft ?? 0);
    scrollLeft.current = trackRef.current?.scrollLeft ?? 0;
    if (trackRef.current) trackRef.current.style.cursor = "grabbing";
  };
  const onMouseUp = () => {
    dragging.current = false;
    if (trackRef.current) trackRef.current.style.cursor = "grab";
  };
  const onMouseMove = (e: React.MouseEvent) => {
    if (!dragging.current || !trackRef.current) return;
    e.preventDefault();
    const x = e.pageX - trackRef.current.offsetLeft;
    const walk = (x - startX.current) * 1.5;
    trackRef.current.scrollLeft = scrollLeft.current - walk;
  };

  const scroll = (dir: "left" | "right") => {
    trackRef.current?.scrollBy({ left: dir === "right" ? 370 : -370, behavior: "smooth" });
  };

  return (
    <section className={styles.section}>
      <div className={styles.orb1} />
      <div className={styles.orb2} />

      <div className={`reveal ${styles.header}`}>
        <div className={styles.sectionTag}>
          <span className={styles.sectionTagLine} />
          {t.tag}
          <span className={styles.sectionTagLine} />
        </div>
        <h2 className={styles.sectionTitle}>
          {t.title} <em>{t.titleEm}</em>
        </h2>
        <p className={styles.sectionDesc}>{t.desc}</p>
      </div>

      <div className={styles.scrollWrapper}>
        <button className={`${styles.navBtn} ${styles.navBtnLeft}`} onClick={() => scroll("left")} aria-label="Previous">‹</button>
        <div
          className={styles.track}
          ref={trackRef}
          onMouseDown={onMouseDown}
          onMouseUp={onMouseUp}
          onMouseLeave={onMouseUp}
          onMouseMove={onMouseMove}
        >
          {CASES.map((c, i) => (
            <div
              key={i}
              className={styles.card}
              style={{ "--c": c.color } as React.CSSProperties}
            >
              <div className={styles.cardAccentBar} style={{ background: c.color }} />
              <div className={styles.cardTop}>
                <span className={styles.cardIcon}>{c.icon}</span>
                <div>
                  <div className={styles.cardMetric} style={{ color: c.color }}>{c.metric}</div>
                  <div className={styles.cardMetricSub}>{c.metricSub[lang]}</div>
                </div>
              </div>
              <div className={styles.cardTag} style={{ color: c.color, borderColor: `${c.color}44`, background: `${c.color}14` }}>{c.tag}</div>
              <div className={styles.cardTitle}>{c.title[lang]}</div>
              <div className={styles.cardBefore}>
                <span className={styles.rowLabel}>{t.before}</span>
                {c.before[lang]}
              </div>
              <div className={styles.cardAfter}>
                <span className={styles.rowLabel}>{t.after}</span>
                {c.after[lang]}
              </div>
            </div>
          ))}
        </div>
        <button className={`${styles.navBtn} ${styles.navBtnRight}`} onClick={() => scroll("right")} aria-label="Next">›</button>
      </div>

      <p className={styles.dragHint}>{t.drag}</p>
    </section>
  );
}
