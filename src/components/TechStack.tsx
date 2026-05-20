"use client";

import Marquee from "react-fast-marquee";
import styles from "./TechStack.module.css";
import type { IconType } from "react-icons";
import {
  SiGooglecloud, SiPython, SiReact, SiNextdotjs, SiFastapi, SiNestjs,
  SiDocker, SiKubernetes, SiLangchain, SiTensorflow, SiPytorch, SiScikitlearn,
  SiSnowflake, SiGooglebigquery, SiDatabricks, SiN8N, SiZapier, SiZoho,
  SiRedis, SiPostgresql, SiMongodb,
} from "react-icons/si";
import { LuCloud, LuBrain, LuDatabase, LuRefreshCw, LuCode } from "react-icons/lu";

interface TechItem {
  Icon?: IconType;
  imgSrc?: string;
  abbr?: string;
  abbrColor?: string;
  name: string;
  color: string;
}

const ROW1: TechItem[] = [
  { Icon: SiGooglecloud,    name: "Google Cloud", color: "#4285F4" },
  { imgSrc: "https://cdn.simpleicons.org/amazonaws/FF9900", name: "AWS",   color: "#FF9900" },
  { imgSrc: "https://cdn.simpleicons.org/microsoftazure/0078D4", name: "Azure", color: "#0078D4" },
  { Icon: SiPython,         name: "Python",       color: "#3776AB" },
  { Icon: SiReact,          name: "React",        color: "#61DAFB" },
  { Icon: SiNextdotjs,      name: "Next.js",      color: "#F0EDE6" },
  { Icon: SiFastapi,        name: "FastAPI",      color: "#009688" },
  { Icon: SiNestjs,         name: "NestJS",       color: "#E0234E" },
  { Icon: SiDocker,         name: "Docker",       color: "#2496ED" },
  { Icon: SiKubernetes,     name: "Kubernetes",   color: "#326CE5" },
  { Icon: SiLangchain,      name: "LangChain",    color: "#1C3C3C" },
  { imgSrc: "https://cdn.simpleicons.org/langgraph/7FC8FF", name: "LangGraph", color: "#7FC8FF" },
  { imgSrc: "https://cdn.simpleicons.org/crewai/FF5A50",   name: "CrewAI",    color: "#FF5A50" },
  { abbr: "AG", abbrColor: "#A78BFA",                      name: "AutoGen",   color: "#A78BFA" },
  { imgSrc: "https://cdn.simpleicons.org/pydantic/E92063", name: "Pydantic",  color: "#E92063" },
  { Icon: SiTensorflow,     name: "TensorFlow",   color: "#FF6F00" },
];

const ROW2: TechItem[] = [
  { Icon: SiPytorch,        name: "PyTorch",      color: "#EE4C2C" },
  { Icon: SiScikitlearn,    name: "Scikit-learn", color: "#F7931E" },
  { Icon: SiSnowflake,      name: "Snowflake",    color: "#29B5E8" },
  { Icon: SiGooglebigquery, name: "BigQuery",     color: "#4285F4" },
  { abbr: "DF", abbrColor: "#4285F4", name: "Dataflow",  color: "#4285F4" },
  { Icon: SiDatabricks,     name: "Databricks",   color: "#FF3621" },
  { imgSrc: "https://cdn.simpleicons.org/dataiku/2AB1AC", name: "Dataiku",   color: "#2AB1AC" },
  { Icon: SiN8N,            name: "n8n",          color: "#EA4B71" },
  { Icon: SiZapier,         name: "Zapier",       color: "#FF4A00" },
  { imgSrc: "https://cdn.simpleicons.org/make/6D00CC",   name: "Make",        color: "#6D00CC" },
  { abbr: "GHL",abbrColor: "#F97316", name: "GoHighLevel", color: "#F97316" },
  { Icon: SiZoho,           name: "Zoho CRM",     color: "#E42527" },
  { Icon: SiPostgresql,     name: "PostgreSQL",   color: "#4169E1" },
  { Icon: SiMongodb,        name: "MongoDB",      color: "#47A248" },
  { Icon: SiRedis,          name: "Redis",        color: "#FF4438" },
];

interface Category { Icon: IconType; name: string; techs: string; color: string }
const CATEGORIES: Category[] = [
  { Icon: LuCloud,     name: "Cloud",      techs: "GCP · AWS · Azure",                       color: "#4285F4" },
  { Icon: LuBrain,     name: "AI & ML",    techs: "LangGraph · CrewAI · TensorFlow · PyTorch", color: "#D4AF37" },
  { Icon: LuDatabase,  name: "Data",       techs: "Snowflake · BigQuery · Databricks",        color: "#29B5E8" },
  { Icon: LuRefreshCw, name: "Automation", techs: "n8n · Zapier · Make · GoHighLevel",        color: "#EA4B71" },
  { Icon: LuCode,      name: "Dev",        techs: "Python · React · Next.js · FastAPI",       color: "#3776AB" },
];

const i18n = {
  fr: {
    tag: "Notre arsenal technologique",
    title: "Maîtrise complète de l'écosystème",
    titleEm: "tech moderne",
    desc: "De l'infrastructure cloud aux modèles de langage, en passant par l'automatisation et la data — nous maîtrisons les meilleures technologies du marché.",
  },
  en: {
    tag: "Our technology arsenal",
    title: "Full mastery of the modern",
    titleEm: "tech ecosystem",
    desc: "From cloud infrastructure to language models, automation and data engineering — we master the best technologies on the market.",
  },
};

function TechChip({ item }: { item: TechItem }) {
  return (
    <div className={styles.techItem}>
      <span className={styles.techIcon} style={{ color: item.color }}>
        {item.imgSrc ? (
          <img src={item.imgSrc} alt={item.name} width={28} height={28} style={{ display: "block" }} />
        ) : item.Icon ? (
          <item.Icon size={28} />
        ) : (
          <span className={styles.techAbbr} style={{ background: `${item.abbrColor}22`, color: item.abbrColor }}>
            {item.abbr}
          </span>
        )}
      </span>
      <span className={styles.techName}>{item.name}</span>
    </div>
  );
}

export default function TechStack({ locale }: { locale: string }) {
  const lang = locale === "en" ? "en" : "fr";
  const t = i18n[lang];

  return (
    <section className={styles.techStack}>
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

      <div className={styles.marqueeRow}>
        <Marquee speed={50} pauseOnHover gradient={false} autoFill>
          {ROW1.map((tech, i) => <TechChip key={i} item={tech} />)}
        </Marquee>
      </div>

      <div className={styles.marqueeRow}>
        <Marquee speed={40} direction="right" pauseOnHover gradient={false} autoFill>
          {ROW2.map((tech, i) => <TechChip key={i} item={tech} />)}
        </Marquee>
      </div>

      <div className={`reveal ${styles.categoryGrid}`}>
        {CATEGORIES.map((cat, i) => (
          <div key={i} className={`reveal d${i + 1} ${styles.categoryCard}`}>
            <div className={styles.categoryIcon} style={{ background: `${cat.color}18`, border: `1px solid ${cat.color}44`, color: cat.color }}>
              <cat.Icon size={22} />
            </div>
            <div className={styles.categoryName}>{cat.name}</div>
            <div className={styles.categoryTechs}>{cat.techs}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
