"use client";

import styles from "./TechStack.module.css";

const ROW1 = [
  { icon: "☁️", name: "Google Cloud" },
  { icon: "🟠", name: "AWS" },
  { icon: "🔵", name: "Azure" },
  { icon: "🐍", name: "Python" },
  { icon: "⚛️", name: "React" },
  { icon: "🔺", name: "Next.js" },
  { icon: "🚀", name: "FastAPI" },
  { icon: "🏗️", name: "NestJS" },
  { icon: "🐳", name: "Docker" },
  { icon: "☸️", name: "Kubernetes" },
  { icon: "🦜", name: "LangChain" },
  { icon: "🔗", name: "LangGraph" },
  { icon: "🤝", name: "CrewAI" },
  { icon: "🧬", name: "AutoGen" },
  { icon: "✅", name: "Pydantic" },
  { icon: "🧠", name: "TensorFlow" },
];

const ROW2 = [
  { icon: "🔥", name: "PyTorch" },
  { icon: "📊", name: "Scikit-learn" },
  { icon: "❄️", name: "Snowflake" },
  { icon: "📦", name: "BigQuery" },
  { icon: "🌊", name: "Dataflow" },
  { icon: "🧱", name: "Databricks" },
  { icon: "🎯", name: "Dataiku" },
  { icon: "🔄", name: "n8n" },
  { icon: "⚡", name: "Zapier" },
  { icon: "🏗️", name: "Make" },
  { icon: "🔷", name: "GoHighLevel" },
  { icon: "📋", name: "Zoho CRM" },
  { icon: "🗄️", name: "PostgreSQL" },
  { icon: "🍃", name: "MongoDB" },
  { icon: "⚡", name: "Redis" },
  { icon: "🔍", name: "Elasticsearch" },
];

const CATEGORIES = [
  {
    icon: "☁️",
    name: "Cloud",
    techs: "GCP · AWS · Azure",
  },
  {
    icon: "🤖",
    name: "IA & ML",
    techs: "LangGraph · CrewAI · TensorFlow · PyTorch",
  },
  {
    icon: "📊",
    name: "Data",
    techs: "Snowflake · BigQuery · Databricks · Dataiku",
  },
  {
    icon: "🔄",
    name: "Automation",
    techs: "n8n · Zapier · Make · GoHighLevel",
  },
  {
    icon: "💻",
    name: "Dev",
    techs: "Python · React · Next.js · FastAPI · Java · C#",
  },
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

export default function TechStack({ locale }: { locale: string }) {
  const lang = locale === "en" ? "en" : "fr";
  const t = i18n[lang];
  const doubleRow1 = [...ROW1, ...ROW1];
  const doubleRow2 = [...ROW2, ...ROW2];

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
        <div className={styles.marqueeTrack}>
          {doubleRow1.map((tech, i) => (
            <div key={i} className={styles.techItem}>
              <span className={styles.techIcon}>{tech.icon}</span>
              <span className={styles.techName}>{tech.name}</span>
            </div>
          ))}
        </div>
      </div>

      <div className={styles.marqueeRow}>
        <div className={styles.marqueeTrackReverse}>
          {doubleRow2.map((tech, i) => (
            <div key={i} className={styles.techItem}>
              <span className={styles.techIcon}>{tech.icon}</span>
              <span className={styles.techName}>{tech.name}</span>
            </div>
          ))}
        </div>
      </div>

      <div className={`reveal ${styles.categoryGrid}`}>
        {CATEGORIES.map((cat, i) => (
          <div key={i} className={`reveal d${i + 1} ${styles.categoryCard}`}>
            <div className={styles.categoryIcon}>{cat.icon}</div>
            <div className={styles.categoryName}>{cat.name}</div>
            <div className={styles.categoryTechs}>{cat.techs}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
