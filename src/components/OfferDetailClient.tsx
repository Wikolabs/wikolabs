"use client";

import { useState } from "react";
import Link from "next/link";
import { LuChevronDown, LuArrowLeft, LuCalendar, LuMessageSquare } from "react-icons/lu";
import styles from "./OfferDetailClient.module.css";
import { OFFERS_CONTENT } from "@/lib/offersContent";

const CAT_LABEL: Record<string, { fr: string; en: string }> = {
  "commercial-automation":  { fr: "Cycle Commercial & Marketing", en: "Commercial Cycle & Marketing" },
  "production-ai":          { fr: "Support & Service Client",      en: "Support & Customer Service"  },
  "decision-intelligence":  { fr: "BI & Intelligence Décisionnelle",en: "BI & Decision Intelligence"  },
  "search-recommendation":  { fr: "Recherche & Données Structurées",en: "Search & Structured Data"    },
  "data-vision":            { fr: "Documents, Vision & Industrie", en: "Documents, Vision & Industry" },
  "fullstack":              { fr: "Développement Web & Mobile",    en: "Web & Mobile Development"     },
  "iot-edge-ai":            { fr: "IoT & IA Embarquée",            en: "IoT & Edge AI"                },
};

function FaqItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className={styles.faqItem} data-open={open}>
      <button className={styles.faqQuestion} onClick={() => setOpen(!open)}>
        {q}
        <LuChevronDown size={18} className={styles.faqChevron} data-open={open} />
      </button>
      {open && <div className={styles.faqAnswer}>{a}</div>}
    </div>
  );
}

export default function OfferDetailClient({ slug, locale }: { slug: string; locale: string }) {
  const lang = locale === "en" ? "en" : "fr";
  const offer = OFFERS_CONTENT.find((o) => o.slug === slug);

  if (!offer) {
    return (
      <div className={styles.page}>
        <div className={styles.notFound}>
          <div className={styles.notFoundTitle}>404</div>
          <p className={styles.notFoundDesc}>
            {lang === "fr" ? "Cette offre n'existe pas encore." : "This offer doesn't exist yet."}
          </p>
          <Link href={`/${locale}/#services`} className={styles.ctaPrimary}>
            {lang === "fr" ? "← Voir toutes les offres" : "← View all offers"}
          </Link>
        </div>
      </div>
    );
  }

  const t = offer[lang];
  const catLabel = CAT_LABEL[offer.catSlug]?.[lang] ?? offer.catSlug;

  return (
    <div className={styles.page}>
      {/* Sticky nav */}
      <nav className={styles.topNav}>
        <Link href={`/${locale}`} className={styles.navLogo}>
          WIKO<span>LABS</span>
        </Link>
        <Link href={`/${locale}/#services`} className={styles.navBack}>
          <LuArrowLeft size={14} />
          {lang === "fr" ? "Retour aux offres" : "Back to offers"}
        </Link>
      </nav>

      {/* Breadcrumb */}
      <nav className={styles.breadcrumb}>
        <Link href={`/${locale}`}>{lang === "fr" ? "Accueil" : "Home"}</Link>
        <span className={styles.breadcrumbSep}>/</span>
        <Link href={`/${locale}/services/${offer.catSlug}`}>{catLabel}</Link>
        <span className={styles.breadcrumbSep}>/</span>
        <span className={styles.breadcrumbCurrent}>{t.title}</span>
      </nav>

      {/* Hero */}
      <div className={styles.hero}>
        <div className={styles.heroGlow} style={{ background: "var(--gold)" }} />
        <div className={styles.heroTag}>
          <span className={styles.heroTagLine} />
          {t.tag}
        </div>
        <h1 className={styles.heroTitle}>
          <em>{t.title}</em>
        </h1>
        <p className={styles.heroSubtitle}>{t.subtitle}</p>
        <div className={styles.heroCtas}>
          <Link href={`/${locale}/#contact`} className={styles.ctaPrimary}>
            <LuCalendar size={15} />
            {lang === "fr" ? "Démarrer ce projet" : "Start this project"}
          </Link>
          <Link href={`/${locale}/#services`} className={styles.ctaSecondary}>
            <LuMessageSquare size={15} />
            {lang === "fr" ? "Voir d'autres offres" : "Browse other offers"}
          </Link>
        </div>
      </div>

      <div className={styles.divider} style={{ maxWidth: 1200, margin: "0 auto 0", padding: "0 48px" }}>
        <div style={{ height: 1, background: "linear-gradient(90deg, transparent, var(--gold-border), transparent)" }} />
      </div>

      {/* Intro */}
      <div className={styles.intro}>
        <div className={styles.introBg}>
          <div className={styles.sectionTag}>
            <span className={styles.sectionTagLine} />
            {lang === "fr" ? "Vue d'ensemble" : "Overview"}
          </div>
          <p className={styles.introText}>{t.intro}</p>
        </div>
      </div>

      {/* Problem → Solution */}
      <div className={styles.section}>
        <div className={styles.sectionTag}>
          <span className={styles.sectionTagLine} />
          {lang === "fr" ? "Problème → Solution" : "Problem → Solution"}
        </div>
        <div className={styles.problemSolution}>
          <div className={styles.problemCard}>
            <div className={styles.psLabel}>
              <span className={styles.psIcon}>✕</span>
              {lang === "fr" ? "Le problème" : "The problem"}
            </div>
            <div className={styles.psTitle}>{lang === "fr" ? "Sans notre solution" : "Without our solution"}</div>
            <p className={styles.psText}>{t.problem}</p>
          </div>
          <div className={styles.solutionCard}>
            <div className={styles.psLabel}>
              <span className={styles.psIcon}>✓</span>
              {lang === "fr" ? "Notre réponse" : "Our answer"}
            </div>
            <div className={styles.psTitle}>{lang === "fr" ? "Avec notre agent IA" : "With our AI agent"}</div>
            <p className={styles.psText}>{t.solution}</p>
          </div>
        </div>
      </div>

      {/* How it works */}
      <div className={styles.section}>
        <div className={styles.sectionTag}>
          <span className={styles.sectionTagLine} />
          {lang === "fr" ? "Comment ça marche" : "How it works"}
        </div>
        <h2 className={styles.sectionTitle}>
          {lang === "fr" ? "Déployé en " : "Deployed in "}
          <em>{lang === "fr" ? "4 étapes" : "4 steps"}</em>
        </h2>
        <div className={styles.stepsGrid}>
          {t.steps.map((step, i) => (
            <div key={i} className={styles.stepCard}>
              <div className={styles.stepNum}>0{step.n}</div>
              <div className={styles.stepTitle}>{step.title}</div>
              <p className={styles.stepDesc}>{step.desc}</p>
              {i < t.steps.length - 1 && (
                <div className={styles.stepConnector}>→</div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Benefits */}
      <div className={styles.section}>
        <div className={styles.sectionTag}>
          <span className={styles.sectionTagLine} />
          {lang === "fr" ? "Ce que vous gagnez" : "What you gain"}
        </div>
        <h2 className={styles.sectionTitle}>
          {lang === "fr" ? "Des résultats " : "Measurable "}
          <em>{lang === "fr" ? "mesurables" : "results"}</em>
        </h2>
        <div className={styles.benefitsGrid}>
          {t.benefits.map((b, i) => (
            <div key={i} className={styles.benefitCard}>
              <div className={styles.benefitNum}>0{i + 1}</div>
              <div className={styles.benefitTitle}>{b.title}</div>
              <p className={styles.benefitDesc}>{b.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* FAQ */}
      <div className={styles.section}>
        <div className={styles.sectionTag}>
          <span className={styles.sectionTagLine} />
          FAQ
        </div>
        <h2 className={styles.sectionTitle}>
          {lang === "fr" ? "Questions " : "Frequently asked "}
          <em>{lang === "fr" ? "fréquentes" : "questions"}</em>
        </h2>
        <div className={styles.faqList}>
          {t.faq.map((item, i) => (
            <FaqItem key={i} q={item.q} a={item.a} />
          ))}
        </div>
      </div>

      {/* CTA */}
      <div className={styles.ctaSection}>
        <div className={styles.ctaInner}>
          <div className={styles.ctaText}>
            <div className={styles.ctaTag}>
              {lang === "fr" ? "Prêt à démarrer ?" : "Ready to start?"}
            </div>
            <h2 className={styles.ctaTitle}>
              {lang === "fr" ? "Déployons " : "Let's deploy "}
              <em>{t.title}</em>
              {lang === "fr" ? " dans votre business" : " in your business"}
            </h2>
            <p className={styles.ctaDesc}>
              {lang === "fr"
                ? "Audit gratuit de 30 minutes. Nous analysons votre contexte et vous proposons une feuille de route concrète."
                : "Free 30-minute audit. We analyze your context and deliver a concrete roadmap."}
            </p>
          </div>
          <div className={styles.ctaActions}>
            <Link href={`/${locale}/#contact`} className={styles.ctaPrimary}>
              <LuCalendar size={15} />
              {lang === "fr" ? "Réserver un audit gratuit" : "Book a free audit"}
            </Link>
            <Link href={`/${locale}/#services`} className={styles.ctaSecondary}>
              {lang === "fr" ? "Explorer d'autres offres" : "Explore other offers"}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
