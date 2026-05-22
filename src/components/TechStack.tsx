"use client";

import styles from "./TechStack.module.css";
import type { IconType } from "react-icons";
import {
  SiGooglecloud, SiPython, SiReact, SiNextdotjs, SiFastapi, SiNestjs,
  SiDocker, SiKubernetes, SiLangchain, SiTensorflow, SiPytorch,
  SiSnowflake, SiGooglebigquery, SiDatabricks, SiN8N, SiZapier,
  SiRedis, SiPostgresql, SiMongodb,
} from "react-icons/si";
import { LuCloud, LuBrain, LuDatabase, LuRefreshCw, LuCode } from "react-icons/lu";

interface SysNode {
  imgSrc?: string;
  Icon?: IconType;
  name: string;
  color: string;
  ring: 0 | 1 | 2;
  startAngle: number;
  period: number;
  size: number;
  appearDelay: number;
}

interface SolarSys {
  CenterIcon: IconType;
  label: { fr: string; en: string };
  sublabel: string;
  color: string;
  nodes: SysNode[];
}

const SYSTEMS: SolarSys[] = [
  {
    CenterIcon: LuCloud,
    label: { fr: "Cloud", en: "Cloud" },
    sublabel: "GCP · AWS · Azure",
    color: "#4285F4",
    nodes: [
      { imgSrc: "/logos/aws.svg",           name: "AWS",        color: "#FF9900", ring: 0, startAngle: 0,   period: 28, size: 40, appearDelay: 0.4 },
      { imgSrc: "/logos/azure.svg",          name: "Azure",      color: "#0078D4", ring: 0, startAngle: 180, period: 32, size: 40, appearDelay: 0.6 },
      { Icon: SiGooglecloud,                 name: "GCP",        color: "#4285F4", ring: 1, startAngle: 60,  period: 20, size: 36, appearDelay: 0.8 },
      { Icon: SiDocker,                      name: "Docker",     color: "#2496ED", ring: 1, startAngle: 180, period: 22, size: 34, appearDelay: 1.0 },
      { Icon: SiKubernetes,                  name: "Kubernetes", color: "#326CE5", ring: 1, startAngle: 300, period: 24, size: 34, appearDelay: 1.2 },
      { imgSrc: "/logos/aws-lambda.svg",     name: "Lambda",     color: "#FF9900", ring: 2, startAngle: 30,  period: 15, size: 30, appearDelay: 1.4 },
      { imgSrc: "/logos/gcp-cloud-run.svg",  name: "Cloud Run",  color: "#4285F4", ring: 2, startAngle: 150, period: 17, size: 30, appearDelay: 1.6 },
      { imgSrc: "/logos/supabase.svg",       name: "Supabase",   color: "#3ECF8E", ring: 2, startAngle: 270, period: 16, size: 30, appearDelay: 1.8 },
    ],
  },
  {
    CenterIcon: LuBrain,
    label: { fr: "IA & LLM", en: "AI & LLM" },
    sublabel: "OpenAI · Anthropic · LangGraph",
    color: "#D4AF37",
    nodes: [
      { imgSrc: "/logos/openai.svg",         name: "OpenAI",     color: "#74AA9C", ring: 0, startAngle: 45,  period: 25, size: 40, appearDelay: 0.4 },
      { imgSrc: "/logos/anthropic.svg",      name: "Anthropic",  color: "#D97757", ring: 0, startAngle: 225, period: 28, size: 40, appearDelay: 0.6 },
      { imgSrc: "/logos/langgraph.svg",      name: "LangGraph",  color: "#7FC8FF", ring: 1, startAngle: 0,   period: 18, size: 36, appearDelay: 0.8 },
      { Icon: SiLangchain,                   name: "LangChain",  color: "#1C3C3C", ring: 1, startAngle: 120, period: 20, size: 34, appearDelay: 1.0 },
      { imgSrc: "/logos/huggingface.svg",    name: "HuggingFace",color: "#FF9D00", ring: 1, startAngle: 240, period: 22, size: 34, appearDelay: 1.2 },
      { Icon: SiTensorflow,                  name: "TensorFlow", color: "#FF6F00", ring: 2, startAngle: 60,  period: 14, size: 30, appearDelay: 1.4 },
      { Icon: SiPytorch,                     name: "PyTorch",    color: "#EE4C2C", ring: 2, startAngle: 180, period: 16, size: 30, appearDelay: 1.6 },
      { imgSrc: "/logos/crewai.svg",         name: "CrewAI",     color: "#FF5A50", ring: 2, startAngle: 300, period: 13, size: 30, appearDelay: 1.8 },
    ],
  },
  {
    CenterIcon: LuDatabase,
    label: { fr: "Data & ML", en: "Data & ML" },
    sublabel: "Snowflake · BigQuery · Spark",
    color: "#29B5E8",
    nodes: [
      { Icon: SiSnowflake,                   name: "Snowflake",  color: "#29B5E8", ring: 0, startAngle: 90,  period: 27, size: 40, appearDelay: 0.4 },
      { Icon: SiGooglebigquery,              name: "BigQuery",   color: "#4285F4", ring: 0, startAngle: 270, period: 30, size: 40, appearDelay: 0.6 },
      { Icon: SiDatabricks,                  name: "Databricks", color: "#FF3621", ring: 1, startAngle: 30,  period: 19, size: 36, appearDelay: 0.8 },
      { imgSrc: "/logos/apache-spark.svg",   name: "Spark",      color: "#E25A1C", ring: 1, startAngle: 150, period: 21, size: 34, appearDelay: 1.0 },
      { imgSrc: "/logos/airflow.svg",        name: "Airflow",    color: "#017CEE", ring: 1, startAngle: 270, period: 23, size: 34, appearDelay: 1.2 },
      { imgSrc: "/logos/kafka.svg",          name: "Kafka",      color: "#ADADAD", ring: 2, startAngle: 45,  period: 13, size: 30, appearDelay: 1.4 },
      { imgSrc: "/logos/pinecone.svg",       name: "Pinecone",   color: "#3BB273", ring: 2, startAngle: 165, period: 15, size: 30, appearDelay: 1.6 },
      { imgSrc: "/logos/elasticsearch.svg",  name: "Elastic",    color: "#005571", ring: 2, startAngle: 285, period: 14, size: 30, appearDelay: 1.8 },
    ],
  },
  {
    CenterIcon: LuRefreshCw,
    label: { fr: "Automatisation", en: "Automation" },
    sublabel: "n8n · Zapier · Make",
    color: "#EA4B71",
    nodes: [
      { Icon: SiN8N,                         name: "n8n",        color: "#EA4B71", ring: 0, startAngle: 135, period: 26, size: 40, appearDelay: 0.4 },
      { Icon: SiZapier,                      name: "Zapier",     color: "#FF4A00", ring: 0, startAngle: 315, period: 29, size: 40, appearDelay: 0.6 },
      { imgSrc: "/logos/make.svg",           name: "Make",       color: "#6D00CC", ring: 1, startAngle: 60,  period: 18, size: 36, appearDelay: 0.8 },
      { imgSrc: "/logos/gohighlevel.webp",   name: "GoHighLevel",color: "#2896FB", ring: 1, startAngle: 180, period: 20, size: 34, appearDelay: 1.0 },
      { imgSrc: "/logos/twilio.svg",         name: "Twilio",     color: "#F22F46", ring: 1, startAngle: 300, period: 22, size: 34, appearDelay: 1.2 },
      { imgSrc: "/logos/slack.svg",          name: "Slack",      color: "#4A154B", ring: 2, startAngle: 30,  period: 12, size: 30, appearDelay: 1.4 },
      { imgSrc: "/logos/notion.svg",         name: "Notion",     color: "#F0EDE6", ring: 2, startAngle: 150, period: 15, size: 30, appearDelay: 1.6 },
      { imgSrc: "/logos/airtable.svg",       name: "Airtable",   color: "#18BFFF", ring: 2, startAngle: 270, period: 13, size: 30, appearDelay: 1.8 },
    ],
  },
  {
    CenterIcon: LuCode,
    label: { fr: "Dev & Infra", en: "Dev & Infra" },
    sublabel: "Python · React · FastAPI",
    color: "#3776AB",
    nodes: [
      { Icon: SiPython,                      name: "Python",     color: "#3776AB", ring: 0, startAngle: 60,  period: 24, size: 40, appearDelay: 0.4 },
      { Icon: SiReact,                       name: "React",      color: "#61DAFB", ring: 0, startAngle: 240, period: 27, size: 40, appearDelay: 0.6 },
      { Icon: SiNextdotjs,                   name: "Next.js",    color: "#F0EDE6", ring: 1, startAngle: 0,   period: 17, size: 36, appearDelay: 0.8 },
      { Icon: SiFastapi,                     name: "FastAPI",    color: "#009688", ring: 1, startAngle: 120, period: 19, size: 34, appearDelay: 1.0 },
      { Icon: SiNestjs,                      name: "NestJS",     color: "#E0234E", ring: 1, startAngle: 240, period: 21, size: 34, appearDelay: 1.2 },
      { Icon: SiPostgresql,                  name: "PostgreSQL", color: "#4169E1", ring: 2, startAngle: 90,  period: 11, size: 30, appearDelay: 1.4 },
      { Icon: SiRedis,                       name: "Redis",      color: "#FF4438", ring: 2, startAngle: 210, period: 14, size: 30, appearDelay: 1.6 },
      { Icon: SiMongodb,                     name: "MongoDB",    color: "#47A248", ring: 2, startAngle: 330, period: 12, size: 30, appearDelay: 1.8 },
    ],
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

function SysPlanet({ node }: { node: SysNode }) {
  const preSpin = -(node.startAngle / 360) * node.period;
  const half = node.size / 2;
  const iconSize = Math.round(node.size * 0.52);

  return (
    <div
      className={styles.orbitArm}
      style={{
        "--orbit-period": `${node.period}s`,
        "--orbit-pre-spin": `${preSpin}s`,
      } as React.CSSProperties}
    >
      <div
        className={styles.orbitPlanetWrap}
        data-ring={node.ring}
        style={{
          "--orbit-period": `${node.period}s`,
          "--orbit-pre-spin": `${preSpin}s`,
          width: node.size,
          height: node.size,
          margin: `-${half}px 0 0 -${half}px`,
        } as React.CSSProperties}
      >
        <div
          className={styles.orbitPlanet}
          style={{
            "--appear-delay": `${node.appearDelay}s`,
            width: node.size,
            height: node.size,
            background: `${node.color}18`,
            boxShadow: `0 0 0 1px ${node.color}45, 0 6px 20px rgba(0,0,0,0.35), inset 0 1px 0 rgba(255,255,255,0.1)`,
          } as React.CSSProperties}
          title={node.name}
        >
          {node.imgSrc ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img src={node.imgSrc} alt={node.name} width={iconSize} height={iconSize} style={{ objectFit: "contain", display: "block" }} />
          ) : node.Icon ? (
            <node.Icon size={iconSize} color={node.color} />
          ) : null}
        </div>
      </div>
    </div>
  );
}

function SolarSystem({ sys, lang }: { sys: SolarSys; lang: "fr" | "en" }) {
  return (
    <div className={styles.solarWrap}>
      <div className={styles.solarOrbit}>
        <div
          className={styles.sysGlow}
          style={{ background: `radial-gradient(circle, ${sys.color}20 0%, transparent 65%)` }}
        />
        <div className={styles.sysRing2} style={{ borderColor: `${sys.color}12` }} />
        <div className={styles.sysRing1} style={{ borderColor: `${sys.color}1e` }} />
        <div className={styles.sysRing0} style={{ borderColor: `${sys.color}30` }} />
        <div
          className={styles.sysCenterBox}
          style={{
            boxShadow: `0 0 0 1px ${sys.color}35, 0 0 28px ${sys.color}28, inset 0 0 14px ${sys.color}08`,
            background: "rgba(255,255,255,0.03)",
          }}
        >
          <sys.CenterIcon size={28} color={sys.color} />
        </div>
        {sys.nodes.map((node, i) => (
          <SysPlanet key={i} node={node} />
        ))}
      </div>
      <div className={styles.sysLabel}>
        <div className={styles.sysName}>{sys.label[lang]}</div>
        <div className={styles.sysSublabel}>{sys.sublabel}</div>
      </div>
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

      <div className={`reveal d1 ${styles.planetsGrid}`}>
        {SYSTEMS.map((sys, i) => (
          <SolarSystem key={i} sys={sys} lang={lang as "fr" | "en"} />
        ))}
      </div>
    </section>
  );
}
