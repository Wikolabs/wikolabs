"use client";

import styles from "./OrbitalDiagram.module.css";
import { LuBrain, LuDatabase, LuCloud, LuZap, LuSearch } from "react-icons/lu";

const SERVICES = [
  { Icon: LuBrain, angle: 270, fr: "Agents IA", en: "AI Agents", color: "#D4AF37" },
  { Icon: LuDatabase, angle: 342, fr: "Data & BI", en: "Data & BI", color: "#22D3EE" },
  { Icon: LuCloud, angle: 54, fr: "Cloud & Infra", en: "Cloud & Infra", color: "#60A5FA" },
  { Icon: LuZap, angle: 126, fr: "Automatisation", en: "Automation", color: "#34D399" },
  { Icon: LuSearch, angle: 198, fr: "Recherche IA", en: "AI Search", color: "#A78BFA" },
];

const ORBIT_R = 165;

const i18n = {
  fr: {
    tag: "Ce que nous faisons",
    title: "Un écosystème IA",
    titleEm: "centré sur votre métier",
    desc: "Cinq domaines de compétences interconnectés, pilotés par une équipe unique. Du modèle à la production, de la donnée brute à la décision.",
    cta: "Décrire votre projet →",
  },
  en: {
    tag: "What we do",
    title: "An AI ecosystem",
    titleEm: "built around your business",
    desc: "Five interconnected areas of expertise, driven by a single team. From model to production, from raw data to decision.",
    cta: "Describe your project →",
  },
};

export default function OrbitalDiagram({
  locale,
  onBooking,
}: {
  locale: string;
  onBooking?: () => void;
}) {
  const lang = locale === "en" ? "en" : "fr";
  const t = i18n[lang];

  return (
    <section className={styles.section}>
      <div className={styles.bgGlow} />

      <div className={styles.inner}>
        {/* ── Left text ── */}
        <div className={`reveal ${styles.textCol}`}>
          <div className={styles.sectionTag}>
            <span className={styles.sectionTagLine} />
            {t.tag}
            <span className={styles.sectionTagLine} />
          </div>
          <h2 className={styles.sectionTitle}>
            {t.title} <em>{t.titleEm}</em>
          </h2>
          <p className={styles.sectionDesc}>{t.desc}</p>
          <button className={styles.cta} onClick={onBooking}>
            {t.cta}
          </button>
        </div>

        {/* ── Right diagram ── */}
        <div className={styles.diagramCol}>
          <div className={styles.diagram}>
            {/* Outer dashed ring */}
            <div className={styles.outerRing} />
            {/* Inner solid ring */}
            <div className={styles.innerRing} />

            {/* SVG connecting lines */}
            <svg className={styles.lineSvg} viewBox="-200 -200 400 400">
              {SERVICES.map((svc, i) => {
                const rad = (svc.angle * Math.PI) / 180;
                const x = Math.cos(rad) * ORBIT_R;
                const y = Math.sin(rad) * ORBIT_R;
                return (
                  <line
                    key={i}
                    x1={0} y1={0}
                    x2={x} y2={y}
                    stroke={`${svc.color}30`}
                    strokeWidth="1"
                    strokeDasharray="4 4"
                  />
                );
              })}
            </svg>

            {/* Central circle */}
            <div className={styles.central}>
              <img src="/wikolabs-logo.png" alt="Wikolabs" height={44} className={styles.centralLogo} />
              <span className={styles.centralText}>WIKOLABS</span>
            </div>

            {/* Satellite circles */}
            {SERVICES.map((svc, i) => {
              const rad = (svc.angle * Math.PI) / 180;
              const x = Math.cos(rad) * ORBIT_R;
              const y = Math.sin(rad) * ORBIT_R;
              return (
                <div
                  key={i}
                  className={styles.satellite}
                  style={{
                    transform: `translate(calc(-50% + ${x}px), calc(-50% + ${y}px))`,
                    "--sc": svc.color,
                  } as React.CSSProperties}
                >
                  <div
                    className={styles.satelliteInner}
                    style={{
                      boxShadow: `0 0 0 1.5px ${svc.color}40, inset 0 0 20px ${svc.color}10`,
                    }}
                  >
                    <div
                      className={styles.satelliteIcon}
                      style={{ background: `${svc.color}18`, color: svc.color }}
                    >
                      <svc.Icon size={22} />
                    </div>
                  </div>
                  <span className={styles.satelliteLabel}>{svc[lang]}</span>
                </div>
              );
            })}

            {/* Decorative floating dots */}
            <div className={`${styles.floatDot} ${styles.fd1}`} />
            <div className={`${styles.floatDot} ${styles.fd2}`} />
            <div className={`${styles.floatDot} ${styles.fd3}`} />
          </div>
        </div>
      </div>
    </section>
  );
}
