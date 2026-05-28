"use client";

import styles from "./TechMarquee.module.css";
import type { IconType } from "react-icons";
import {
  SiPython, SiReact, SiNextdotjs, SiFastapi, SiNestjs,
  SiPostgresql, SiRedis, SiMongodb, SiDocker, SiKubernetes,
  SiTensorflow, SiPytorch, SiLangchain, SiSnowflake, SiGooglebigquery,
  SiDatabricks, SiN8N, SiZapier, SiGooglecloud,
} from "react-icons/si";

interface TechItem {
  label: string;
  imgSrc?: string;
  Icon?: IconType;
  color: string;
}

const TECH: TechItem[] = [
  { label: "Python",      Icon: SiPython,           color: "#3776AB" },
  { label: "React",       Icon: SiReact,            color: "#61DAFB" },
  { label: "Next.js",     Icon: SiNextdotjs,        color: "#888888" },
  { label: "FastAPI",     Icon: SiFastapi,          color: "#009688" },
  { label: "NestJS",      Icon: SiNestjs,           color: "#E0234E" },
  { label: "PostgreSQL",  Icon: SiPostgresql,       color: "#4169E1" },
  { label: "Redis",       Icon: SiRedis,            color: "#FF4438" },
  { label: "MongoDB",     Icon: SiMongodb,          color: "#47A248" },
  { label: "Docker",      Icon: SiDocker,           color: "#2496ED" },
  { label: "Kubernetes",  Icon: SiKubernetes,       color: "#326CE5" },
  { label: "TensorFlow",  Icon: SiTensorflow,       color: "#FF6F00" },
  { label: "PyTorch",     Icon: SiPytorch,          color: "#EE4C2C" },
  { label: "LangChain",   Icon: SiLangchain,        color: "#1C3C3C" },
  { label: "Snowflake",   Icon: SiSnowflake,        color: "#29B5E8" },
  { label: "BigQuery",    Icon: SiGooglebigquery,   color: "#4285F4" },
  { label: "Databricks",  Icon: SiDatabricks,       color: "#FF3621" },
  { label: "n8n",         Icon: SiN8N,              color: "#EA4B71" },
  { label: "Zapier",      Icon: SiZapier,           color: "#FF4A00" },
  { label: "GCP",         Icon: SiGooglecloud,      color: "#4285F4" },
  { label: "AWS",         imgSrc: "/logos/aws.svg",              color: "#FF9900" },
  { label: "Azure",       imgSrc: "/logos/azure.svg",            color: "#0078D4" },
  { label: "OpenAI",      imgSrc: "/logos/openai.svg",           color: "#74AA9C" },
  { label: "Anthropic",   imgSrc: "/logos/anthropic.svg",        color: "#D97757" },
  { label: "LangGraph",   imgSrc: "/logos/langgraph.svg",        color: "#7FC8FF" },
  { label: "HuggingFace", imgSrc: "/logos/huggingface.svg",      color: "#FF9D00" },
  { label: "CrewAI",      imgSrc: "/logos/crewai.svg",           color: "#FF5A50" },
  { label: "Spark",       imgSrc: "/logos/apache-spark.svg",     color: "#E25A1C" },
  { label: "Airflow",     imgSrc: "/logos/airflow.svg",          color: "#017CEE" },
  { label: "Kafka",       imgSrc: "/logos/kafka.svg",            color: "#ADADAD" },
  { label: "Pinecone",    imgSrc: "/logos/pinecone.svg",         color: "#3BB273" },
  { label: "Supabase",    imgSrc: "/logos/supabase.svg",         color: "#3ECF8E" },
  { label: "Notion",      imgSrc: "/logos/notion.svg",           color: "#888888" },
  { label: "Airtable",    imgSrc: "/logos/airtable.svg",         color: "#18BFFF" },
  { label: "Power BI",    imgSrc: "/logos/powerbi.svg",          color: "#F2C811" },
  { label: "Twilio",      imgSrc: "/logos/twilio.svg",           color: "#F22F46" },
  { label: "Gemini",      imgSrc: "/logos/gemini.svg",           color: "#4285F4" },
];

const DOUBLE = [...TECH, ...TECH];

export default function TechMarquee() {
  return (
    <div className={styles.marquee} aria-hidden="true">
      <div className={styles.track}>
        {DOUBLE.map((t, i) => (
          <span key={i} className={styles.item}>
            <span
              className={styles.icon}
              style={{ background: `${t.color}1a`, border: `1px solid ${t.color}28` }}
            >
              {t.imgSrc ? (
                // eslint-disable-next-line @next/next/no-img-element
                <img src={t.imgSrc} alt="" width={14} height={14} style={{ objectFit: "contain", display: "block" }} />
              ) : t.Icon ? (
                <t.Icon size={13} color={t.color} />
              ) : null}
            </span>
            <span className={styles.label}>{t.label}</span>
            <span className={styles.sep}>◆</span>
          </span>
        ))}
      </div>
    </div>
  );
}
