"use client";

import styles from "./Industries.module.css";

interface Industry {
  icon: string;
  name: { fr: string; en: string };
  color: string;
}

const INDUSTRIES: Industry[] = [
  { icon: "🛒", color: "#22D3EE", name: { fr: "E-commerce & Retail", en: "E-commerce & Retail" } },
  { icon: "💳", color: "#D4AF37", name: { fr: "Finance & Fintech", en: "Finance & Fintech" } },
  { icon: "🏥", color: "#22C55E", name: { fr: "Santé & MedTech", en: "Healthcare & MedTech" } },
  { icon: "🏭", color: "#F7931E", name: { fr: "Industrie & Manufacturing", en: "Manufacturing" } },
  { icon: "🚚", color: "#4285F4", name: { fr: "Logistique & Supply Chain", en: "Logistics & Supply Chain" } },
  { icon: "💻", color: "#9B59B6", name: { fr: "SaaS & Tech Startups", en: "SaaS & Tech Startups" } },
  { icon: "⚖️", color: "#EA4B71", name: { fr: "Juridique & Services Pro", en: "Legal & Professional Services" } },
  { icon: "🏗️", color: "#E25A1C", name: { fr: "Immobilier & Construction", en: "Real Estate & Construction" } },
  { icon: "📱", color: "#EC4899", name: { fr: "Médias & Contenu", en: "Media & Content" } },
];

const i18n = {
  fr: {
    tag: "Nos secteurs d'intervention",
    title: "Une expertise qui traverse",
    titleEm: "tous les secteurs",
    desc: "Que vous soyez dans le retail, la finance ou l'industrie lourde, nos solutions IA s'adaptent aux contraintes spécifiques de votre métier et de votre secteur.",
    cta: "Décrire votre projet →",
  },
  en: {
    tag: "Industries we serve",
    title: "Expertise across",
    titleEm: "every industry",
    desc: "Whether you're in retail, finance or heavy manufacturing, our AI solutions adapt to the specific constraints of your business and sector.",
    cta: "Describe your project →",
  },
};

export default function Industries({ locale }: { locale: string }) {
  const lang = locale === "en" ? "en" : "fr";
  const t = i18n[lang];

  return (
    <section className={styles.section}>
      {/* subtle grid lines background */}
      <div className={styles.bgGrid} />
      <div className={styles.bgGlow} />

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

      <div className={styles.grid}>
        {INDUSTRIES.map((ind, i) => (
          <div
            key={i}
            className={`reveal d${Math.min((i % 5) + 1, 5)} ${styles.card}`}
            style={{ "--c": ind.color } as React.CSSProperties}
          >
            <div className={styles.ringOuter}>
              <div className={styles.ringInner} style={{ boxShadow: `0 0 0 1.5px ${ind.color}50, inset 0 0 20px ${ind.color}10` }}>
                <div className={styles.iconWrap} style={{ background: `${ind.color}16` }}>
                  <span className={styles.icon}>{ind.icon}</span>
                </div>
              </div>
              {/* rotating arc on hover */}
              <div className={styles.arc} style={{ borderColor: `${ind.color}80 transparent transparent transparent` }} />
            </div>
            <span className={styles.name}>{ind.name[lang]}</span>
            <span className={styles.dot} style={{ background: ind.color }} />
          </div>
        ))}
      </div>
    </section>
  );
}
