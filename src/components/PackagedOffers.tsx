"use client";

import styles from "./PackagedOffers.module.css";
import type { BookingPrefill } from "@/app/LandingClient";

interface Offer {
  badge: { fr: string; en: string };
  title: { fr: string; en: string };
  desc: { fr: string; en: string };
  price: { fr: string; en: string };
  duration: { fr: string; en: string };
  features: { fr: string[]; en: string[] };
  cta: { fr: string; en: string };
  highlighted?: boolean;
  prefill: BookingPrefill;
}

const OFFERS: Offer[] = [
  {
    badge: { fr: "Point de départ", en: "Starting point" },
    title: { fr: "Audit & Plan d'action", en: "Audit & Action Plan" },
    desc: {
      fr: "On analyse votre idée, identifie comment l'intelligence artificielle peut la renforcer, et vous livre un plan d'action concret.",
      en: "We analyze your idea, identify how AI can strengthen it, and deliver a concrete action plan.",
    },
    price: { fr: "À partir de 1 500 €", en: "From €1,500" },
    duration: { fr: "1 – 2 semaines", en: "1 – 2 weeks" },
    features: {
      fr: [
        "Analyse de faisabilité de votre idée",
        "Identification des opportunités IA",
        "Recommandations techniques claires",
        "Liste des fonctionnalités prioritaires",
        "Estimation du budget pour la suite",
      ],
      en: [
        "Feasibility analysis of your idea",
        "AI opportunity identification",
        "Clear technical recommendations",
        "Prioritized feature list",
        "Budget estimate for next steps",
      ],
    },
    cta: { fr: "Demander un audit →", en: "Request an audit →" },
    prefill: { type: "ai-integration", scale: "mvp", startStep: 2, offerLabel: "Audit & Plan d'action", offerPrice: "À partir de 1 500 €", offerDuration: "1 – 2 semaines" },
  },
  {
    badge: { fr: "Le plus populaire", en: "Most popular" },
    title: { fr: "Votre produit de A à Z", en: "Your product from A to Z" },
    desc: {
      fr: "On construit votre logiciel en ligne complet — avec intelligence artificielle intégrée — prêt pour vos premiers utilisateurs.",
      en: "We build your complete online software — with built-in AI — ready for your first users.",
    },
    price: { fr: "À partir de 8 000 €", en: "From €8,000" },
    duration: { fr: "4 – 8 semaines", en: "4 – 8 weeks" },
    features: {
      fr: [
        "Application web complète et fonctionnelle",
        "Intelligence artificielle intégrée sur mesure",
        "Design professionnel et intuitif",
        "Mise en ligne et hébergement sécurisé",
        "Documentation pour votre équipe",
        "2 semaines de support après livraison",
      ],
      en: [
        "Complete, working web application",
        "Custom-built artificial intelligence",
        "Professional, intuitive design",
        "Launch and secure hosting",
        "Documentation for your team",
        "2 weeks of post-delivery support",
      ],
    },
    cta: { fr: "Construire mon produit →", en: "Build my product →" },
    highlighted: true,
    prefill: { type: "mvp-saas", scale: "medium", startStep: 2, offerLabel: "Produit de A à Z", offerPrice: "À partir de 8 000 €", offerDuration: "4 – 8 semaines" },
  },
  {
    badge: { fr: "Pour produits existants", en: "For existing products" },
    title: { fr: "Ajouter de l'IA à votre produit", en: "Add AI to your product" },
    desc: {
      fr: "Votre logiciel existe déjà ? On y ajoute de l'intelligence : chatbot, recommandations, analyse automatique.",
      en: "Already have software? We add intelligence to it: chatbot, recommendations, automated analysis.",
    },
    price: { fr: "À partir de 5 000 €", en: "From €5,000" },
    duration: { fr: "2 – 6 semaines", en: "2 – 6 weeks" },
    features: {
      fr: [
        "Analyse de votre produit existant",
        "Développement de la brique IA",
        "Connexion à votre logiciel actuel",
        "Tests et optimisation des résultats",
        "Documentation pour votre équipe technique",
      ],
      en: [
        "Analysis of your existing product",
        "AI module development",
        "Connection to your current software",
        "Testing and results optimization",
        "Documentation for your tech team",
      ],
    },
    cta: { fr: "Ajouter de l'IA →", en: "Add AI →" },
    prefill: { type: "ai-integration", scale: "medium", startStep: 2, offerLabel: "Ajouter de l'IA", offerPrice: "À partir de 5 000 €", offerDuration: "2 – 6 semaines" },
  },
];

const i18n = {
  fr: {
    tag: "Nos offres",
    title: "Trois façons de démarrer.",
    desc: "Du premier audit à la livraison complète de votre produit — choisissez l'entrée qui correspond à votre stade.",
    duration_label: "Durée",
  },
  en: {
    tag: "Our offers",
    title: "Three ways to get started.",
    desc: "From a first audit to a complete product delivery — choose the entry point that matches your stage.",
    duration_label: "Duration",
  },
};

export default function PackagedOffers({ locale, onBooking }: { locale: string; onBooking?: (p: BookingPrefill) => void }) {
  const lang = locale === "en" ? "en" : "fr";
  const t = i18n[lang];

  return (
    <section id="offres" className={styles.offers}>
      <div className={styles.sectionTag}>
        <span className={styles.sectionTagLine} />
        {t.tag}
      </div>
      <h2 className={styles.sectionTitle}>{t.title}</h2>
      <p className={styles.sectionDesc}>{t.desc}</p>

      <div className={styles.grid}>
        {OFFERS.map((offer, i) => (
          <div
            className={`${styles.card} ${offer.highlighted ? styles.cardHighlighted : ""}`}
            key={i}
          >
            <div className={`${styles.badge} ${offer.highlighted ? styles.badgeHighlighted : ""}`}>
              {offer.badge[lang]}
            </div>

            <h3 className={styles.cardTitle}>{offer.title[lang]}</h3>
            <p className={styles.cardDesc}>{offer.desc[lang]}</p>

            <div className={styles.priceBlock}>
              <span className={styles.price}>{offer.price[lang]}</span>
              <span className={styles.duration}>
                {t.duration_label} : {offer.duration[lang]}
              </span>
            </div>

            <ul className={styles.features}>
              {offer.features[lang].map((f, j) => (
                <li key={j}>
                  <span className={styles.check}>✓</span>
                  {f}
                </li>
              ))}
            </ul>

            <button
              className={`${styles.cta} ${offer.highlighted ? styles.ctaHighlighted : ""}`}
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
