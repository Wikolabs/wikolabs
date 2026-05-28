"use client";

import styles from "./PackagedOffers.module.css";
import type { BookingPrefill } from "@/app/LandingClient";

interface Offer {
  badge: { fr: string; en: string };
  icon: string;
  title: { fr: string; en: string };
  desc: { fr: string; en: string };
  timeline: { fr: string; en: string };
  features: { fr: string[]; en: string[] };
  cta: { fr: string; en: string };
  highlighted?: boolean;
  bg: string;
  prefill: BookingPrefill;
}

const OFFERS: Offer[] = [
  {
    badge: { fr: "Point de départ idéal", en: "Ideal starting point" },
    icon: "🎯",
    title: { fr: "Audit Stratégique IA", en: "Strategic AI Audit" },
    desc: {
      fr: "Nous analysons vos processus, identifions les opportunités d'automatisation et de valeur IA les plus impactantes pour votre organisation, et vous livrons un plan d'action concret et priorisé.",
      en: "We analyze your processes, identify the most impactful AI automation opportunities for your organization, and deliver a concrete, prioritized action plan.",
    },
    timeline: { fr: "1 – 2 semaines", en: "1 – 2 weeks" },
    features: {
      fr: [
        "Analyse de vos processus et flux de données",
        "Identification des quick wins IA prioritaires",
        "Feuille de route technique et business",
        "Estimation d'impact pour chaque cas d'usage",
        "Présentation à votre direction",
      ],
      en: [
        "Analysis of your processes and data flows",
        "Identification of priority AI quick wins",
        "Technical and business roadmap",
        "Impact estimate for each use case",
        "Presentation to your leadership",
      ],
    },
    cta: { fr: "Demander un audit →", en: "Request an audit →" },
    bg: "hsla(200, 80%, 55%, 0.17)",
    prefill: {
      type: "ai-integration", scale: "mvp", startStep: 2,
      offerLabel: { fr: "Audit Stratégique IA", en: "Strategic AI Audit" },
      offerPrice: { fr: "", en: "" },
      offerDuration: { fr: "1 – 2 semaines", en: "1 – 2 weeks" },
    },
  },
  {
    badge: { fr: "Solution complète recommandée", en: "Recommended complete solution" },
    icon: "🚀",
    title: { fr: "Déploiement Complet", en: "Full Deployment" },
    desc: {
      fr: "Nous concevons et livrons votre solution IA de bout en bout — agent IA, plateforme data, logiciel, automatisation — avec intégration dans vos systèmes existants et formation de vos équipes.",
      en: "We design and deliver your AI solution end to end — AI agent, data platform, software, automation — with integration into your existing systems and team training.",
    },
    timeline: { fr: "4 – 12 semaines", en: "4 – 12 weeks" },
    features: {
      fr: [
        "Architecture et développement sur mesure",
        "Intégration à vos outils existants (CRM, ERP...)",
        "Daily standup et point hebdomadaire",
        "Tests, recette et déploiement production",
        "Documentation complète et formation équipe",
        "Support post-livraison inclus",
      ],
      en: [
        "Custom architecture and development",
        "Integration with your existing tools (CRM, ERP...)",
        "Daily standup and weekly review",
        "Testing, UAT, and production deployment",
        "Complete documentation and team training",
        "Post-delivery support included",
      ],
    },
    cta: { fr: "Démarrer un projet →", en: "Start a project →" },
    bg: "hsla(43, 90%, 55%, 0.17)",
    prefill: {
      type: "mvp-saas", scale: "medium", startStep: 2,
      offerLabel: { fr: "Déploiement Complet", en: "Full Deployment" },
      offerPrice: { fr: "", en: "" },
      offerDuration: { fr: "4 – 12 semaines", en: "4 – 12 weeks" },
    },
  },
  {
    badge: { fr: "Pour systèmes existants", en: "For existing systems" },
    icon: "⚡",
    title: { fr: "Intégration & Optimisation", en: "Integration & Optimization" },
    desc: {
      fr: "Vous avez déjà des outils, des données, des workflows en place ? Nous y connectons l'IA pour les rendre plus intelligents : chatbot, recommandations, analyse automatique, reporting BI.",
      en: "Already have tools, data, and workflows in place? We connect AI to make them smarter: chatbot, recommendations, automated analysis, BI reporting.",
    },
    timeline: { fr: "2 – 8 semaines", en: "2 – 8 weeks" },
    features: {
      fr: [
        "Audit de l'existant et identification des connexions",
        "Développement des briques IA ciblées",
        "Connexion API à vos systèmes en production",
        "Tests de performance et validation",
        "Documentation pour votre équipe technique",
      ],
      en: [
        "Audit of existing systems and connection points",
        "Development of targeted AI components",
        "API connection to your production systems",
        "Performance testing and validation",
        "Documentation for your technical team",
      ],
    },
    cta: { fr: "Enrichir mon système →", en: "Enrich my system →" },
    bg: "hsla(142, 72%, 46%, 0.17)",
    prefill: {
      type: "ai-integration", scale: "medium", startStep: 2,
      offerLabel: { fr: "Intégration & Optimisation", en: "Integration & Optimization" },
      offerPrice: { fr: "", en: "" },
      offerDuration: { fr: "2 – 8 semaines", en: "2 – 8 weeks" },
    },
  },
];

const i18n = {
  fr: {
    tag: "Nos offres",
    title: "Trois façons de démarrer.",
    desc: "Du premier audit stratégique à la livraison complète de votre solution — choisissez l'entrée qui correspond à votre situation actuelle.",
    timeline_label: "Délai estimé",
  },
  en: {
    tag: "Our offers",
    title: "Three ways to get started.",
    desc: "From a first strategic audit to the complete delivery of your solution — choose the entry point that fits your current situation.",
    timeline_label: "Estimated timeline",
  },
};

export default function PackagedOffers({ locale, onBooking }: { locale: string; onBooking?: (p: BookingPrefill) => void }) {
  const lang = locale === "en" ? "en" : "fr";
  const t = i18n[lang];

  return (
    <section id="offres" className={styles.offers}>
      <div className={`reveal ${styles.sectionTag}`}>
        <span className={styles.sectionTagLine} />
        {t.tag}
      </div>
      <h2 className={`reveal d1 ${styles.sectionTitle}`}>{t.title}</h2>
      <p className={`reveal d2 ${styles.sectionDesc}`}>{t.desc}</p>

      <div className={styles.grid}>
        {OFFERS.map((offer, i) => (
          <div
            className={`reveal d${i + 1} ${styles.card}`}
            key={i}
            style={{ "--card-bg": offer.bg } as React.CSSProperties}
          >
            <div className={styles.badge}>
              {offer.badge[lang]}
            </div>

            <div className={styles.cardIcon}>{offer.icon}</div>
            <h3 className={styles.cardTitle}>{offer.title[lang]}</h3>
            <p className={styles.cardDesc}>{offer.desc[lang]}</p>

            <div className={styles.timeline}>
              <span className={styles.timelineLabel}>{t.timeline_label}</span>
              <span className={styles.timelineValue}>{offer.timeline[lang]}</span>
            </div>

            <ul className={styles.features}>
              {offer.features[lang].map((f, j) => (
                <li key={j}>
                  <span className={styles.check}>✦</span>
                  {f}
                </li>
              ))}
            </ul>

            <button
              className={styles.cta}
              onClick={() => onBooking?.(offer.prefill)}
            >
              {offer.cta[lang]}
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}
