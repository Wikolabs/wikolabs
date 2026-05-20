"use client";

import styles from "./Values.module.css";
import { LuEye, LuTarget, LuLock, LuScale } from "react-icons/lu";

import type { IconType } from "react-icons";

interface Value {
  num: string;
  accent: string;
  Icon: IconType;
  fr: { name: string; desc: string };
  en: { name: string; desc: string };
}

const VALUES: Value[] = [
  {
    num: "01",
    accent: "#D4AF37",
    Icon: LuEye,
    fr: {
      name: "Transparence",
      desc: "Nous communiquons ouvertement sur ce que nous faisons, ce qui fonctionne et ce qui ne fonctionne pas. Aucune boîte noire, aucun jargon pour masquer la réalité.",
    },
    en: {
      name: "Transparency",
      desc: "We communicate openly about what we do, what works, and what doesn't. No black boxes, no jargon to obscure reality.",
    },
  },
  {
    num: "02",
    accent: "#5B9CF6",
    Icon: LuTarget,
    fr: {
      name: "Responsabilité",
      desc: "Nous sommes propriétaires de nos résultats. Si quelque chose ne tient pas nos engagements, nous le corrigeons — sans discussion, sans facturation supplémentaire.",
    },
    en: {
      name: "Responsibility",
      desc: "We own our results. If something falls short of our commitments, we fix it — without debate, without extra billing.",
    },
  },
  {
    num: "03",
    accent: "#34D399",
    Icon: LuLock,
    fr: {
      name: "Autonomie",
      desc: "Vous gardez le contrôle total sur votre produit et vos données. Nous travaillons de manière indépendante et vous livrons un système que vous comprenez et que vous pouvez piloter.",
    },
    en: {
      name: "Autonomy",
      desc: "You retain full control over your product and data. We work independently and deliver a system you understand and can steer on your own.",
    },
  },
  {
    num: "04",
    accent: "#C084FC",
    Icon: LuScale,
    fr: {
      name: "Équité",
      desc: "Un tarif juste pour un travail de qualité. Pas de surfacturation à l'urgence, pas de contrats inutiles imposés. Chaque euro investi doit produire une valeur mesurable.",
    },
    en: {
      name: "Equity",
      desc: "Fair pricing for quality work. No urgency surcharges, no unnecessary contracts imposed. Every euro invested must produce measurable value.",
    },
  },
];

const i18n = {
  fr: {
    tag: "Ce en quoi nous croyons",
    title: "Nos valeurs,",
    titleEm: "pas juste des mots.",
  },
  en: {
    tag: "What we stand for",
    title: "Our values,",
    titleEm: "not just words.",
  },
};

export default function Values({ locale }: { locale: string }) {
  const lang = locale === "en" ? "en" : "fr";
  const t = i18n[lang];

  return (
    <section className={styles.values}>
      <div className={`reveal ${styles.header}`}>
        <div className={styles.sectionTag}>
          <span className={styles.sectionTagLine} />
          {t.tag}
        </div>
        <h2 className={styles.sectionTitle}>
          {t.title} <em>{t.titleEm}</em>
        </h2>
      </div>

      <div className={styles.grid}>
        {VALUES.map((v, i) => (
          <div
            key={i}
            className={`reveal d${i + 1} ${styles.card}`}
            style={{ "--accent": v.accent } as React.CSSProperties}
          >
            <div className={styles.cardIcon} style={{ background: `${v.accent}18`, color: v.accent }}>
              <v.Icon size={28} />
            </div>
            <div className={styles.cardNum}>{v.num}</div>
            <div className={styles.cardName}>{v[lang].name}</div>
            <p className={styles.cardDesc}>{v[lang].desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
