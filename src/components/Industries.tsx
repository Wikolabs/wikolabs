"use client";

import styles from "./Industries.module.css";
import type { IconType } from "react-icons";
import {
  LuShoppingCart, LuCreditCard, LuActivity, LuFactory,
  LuTruck, LuTerminal, LuScale, LuBuilding2, LuFilm,
  LuZap, LuLeaf, LuBookOpen,
} from "react-icons/lu";

interface Industry {
  Icon: IconType;
  name: { fr: string; en: string };
  color: string;
}

const INDUSTRIES: Industry[] = [
  { Icon: LuShoppingCart, color: "#22D3EE", name: { fr: "E-commerce & Retail",        en: "E-commerce & Retail"         } },
  { Icon: LuCreditCard,   color: "#D4AF37", name: { fr: "Finance & Fintech",           en: "Finance & Fintech"           } },
  { Icon: LuActivity,     color: "#22C55E", name: { fr: "Santé & MedTech",             en: "Healthcare & MedTech"        } },
  { Icon: LuFactory,      color: "#F7931E", name: { fr: "Industrie & Manufacturing",   en: "Manufacturing"               } },
  { Icon: LuTruck,        color: "#4285F4", name: { fr: "Logistique & Supply Chain",   en: "Logistics & Supply Chain"    } },
  { Icon: LuTerminal,     color: "#9B59B6", name: { fr: "SaaS & Tech Startups",        en: "SaaS & Tech Startups"        } },
  { Icon: LuScale,        color: "#EA4B71", name: { fr: "Juridique & Services Pro",    en: "Legal & Professional Svcs"   } },
  { Icon: LuBuilding2,    color: "#E25A1C", name: { fr: "Immobilier & Construction",   en: "Real Estate & Construction"  } },
  { Icon: LuFilm,         color: "#EC4899", name: { fr: "Médias & Contenu",            en: "Media & Content"             } },
  { Icon: LuZap,          color: "#FACC15", name: { fr: "Énergie & Cleantech",         en: "Energy & Cleantech"          } },
  { Icon: LuLeaf,         color: "#34D399", name: { fr: "Agriculture & AgriTech",      en: "Agriculture & AgriTech"      } },
  { Icon: LuBookOpen,     color: "#818CF8", name: { fr: "Éducation & EdTech",          en: "Education & EdTech"          } },
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
                <div className={styles.iconWrap} style={{ background: `${ind.color}16`, color: ind.color }}>
                  <ind.Icon size={30} />
                </div>
              </div>
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
