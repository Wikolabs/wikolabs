"use client";

import { useState, useMemo } from "react";
import styles from "./ProjectSimulator.module.css";
import {
  PROJECT_TYPES,
  PROJECT_SCALES,
  computeEstimate,
  formatPrice,
  type Lang,
} from "@/lib/simulatorData";
import type { BookingPrefill } from "@/app/LandingClient";

const i18n = {
  fr: {
    tag: "Simulateur",
    title: "Estimez votre projet en 20 secondes.",
    desc: "Sélectionnez votre besoin et l'envergure souhaitée. Recevez une estimation instantanée — sans engagement.",
    step1: "Quel type de projet ?",
    step2: "Quelle envergure ?",
    duration: "Durée estimée",
    estimate: "Estimation projet",
    cta: "Discutons de votre projet →",
    note: "Estimation indicative. Le devis final est co-construit avec vous après analyse du besoin.",
  },
  en: {
    tag: "Simulator",
    title: "Estimate your project in 20 seconds.",
    desc: "Select your need and the desired scale. Get an instant estimate — no commitment.",
    step1: "What type of project?",
    step2: "What scale?",
    duration: "Estimated duration",
    estimate: "Project estimate",
    cta: "Let's discuss your project →",
    note: "Indicative estimate. Final quote is co-built with you after needs analysis.",
  },
};

export default function ProjectSimulator({ locale, onBooking }: { locale: string; onBooking?: (p: BookingPrefill) => void }) {
  const lang = (locale === "en" ? "en" : "fr") as Lang;
  const t = i18n[lang];

  const [selectedType, setSelectedType] = useState<string>("mvp-saas");
  const [selectedScale, setSelectedScale] = useState<string>("mvp");

  const result = useMemo(() => {
    const est = computeEstimate(selectedType, selectedScale);
    return { ...est, durationLabel: est.duration[lang] };
  }, [selectedType, selectedScale, lang]);

  const handleBooking = () => {
    onBooking?.({ type: selectedType, scale: selectedScale, startStep: 2 });
  };

  return (
    <section id="tarifs" className={styles.simulator}>
      <div className={styles.sectionTag}>
        <span className={styles.sectionTagLine} />
        {t.tag}
      </div>
      <h2 className={styles.sectionTitle}>{t.title}</h2>
      <p className={styles.sectionDesc}>{t.desc}</p>

      <div className={styles.grid}>
        <div className={styles.selectors}>
          <div className={styles.stepGroup}>
            <div className={styles.stepLabel}>
              <span className={styles.stepNum}>01</span>
              {t.step1}
            </div>
            <div className={styles.optionsGrid}>
              {PROJECT_TYPES.map((pt) => (
                <button
                  key={pt.id}
                  className={`${styles.optionCard} ${selectedType === pt.id ? styles.optionActive : ""}`}
                  onClick={() => setSelectedType(pt.id)}
                >
                  <span className={styles.optionIcon}>{pt.icon}</span>
                  <span className={styles.optionLabel}>{pt.label[lang]}</span>
                  <span className={styles.optionDesc}>{pt.desc[lang]}</span>
                </button>
              ))}
            </div>
          </div>

          <div className={styles.stepGroup}>
            <div className={styles.stepLabel}>
              <span className={styles.stepNum}>02</span>
              {t.step2}
            </div>
            <div className={styles.scaleRow}>
              {PROJECT_SCALES.map((sc) => (
                <button
                  key={sc.id}
                  className={`${styles.scaleCard} ${selectedScale === sc.id ? styles.scaleActive : ""}`}
                  onClick={() => setSelectedScale(sc.id)}
                >
                  <span className={styles.scaleLabel}>{sc.label[lang]}</span>
                  <span className={styles.scaleDesc}>{sc.desc[lang]}</span>
                  <span className={styles.scaleDuration}>{sc.duration[lang]}</span>
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className={styles.resultPanel}>
          <div className={styles.resultInner}>
            <div className={styles.resultHeader}>
              <span className={styles.resultIcon}>
                {PROJECT_TYPES.find((p) => p.id === selectedType)?.icon}
              </span>
              <span className={styles.resultType}>
                {PROJECT_TYPES.find((p) => p.id === selectedType)?.label[lang]}
              </span>
            </div>
            <div className={styles.resultDuration}>
              <span className={styles.resultDurationLabel}>{t.duration}</span>
              <span className={styles.resultDurationValue}>{result.durationLabel}</span>
            </div>
            <div className={styles.resultPrice}>
              <span className={styles.resultPriceLabel}>{t.estimate}</span>
              <span className={styles.resultPriceValue}>
                {formatPrice(result.min, lang)} – {formatPrice(result.max, lang)} €
              </span>
            </div>
            <button className={styles.resultCta} onClick={handleBooking}>
              {t.cta}
            </button>
            <p className={styles.resultNote}>{t.note}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
