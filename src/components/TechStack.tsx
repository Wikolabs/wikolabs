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
  textOnly?: boolean;
  name: string;
  color: string;
}

const ROW1: TechItem[] = [
  { Icon: SiGooglecloud,    name: "Google Cloud", color: "#4285F4" },
  { imgSrc: "/logos/aws.svg",   name: "AWS",   color: "#FF9900" },
  { imgSrc: "/logos/azure.svg", name: "Azure", color: "#0078D4" },
  { Icon: SiPython,         name: "Python",       color: "#3776AB" },
  { Icon: SiReact,          name: "React",        color: "#61DAFB" },
  { Icon: SiNextdotjs,      name: "Next.js",      color: "#F0EDE6" },
  { Icon: SiFastapi,        name: "FastAPI",      color: "#009688" },
  { Icon: SiNestjs,         name: "NestJS",       color: "#E0234E" },
  { Icon: SiDocker,         name: "Docker",       color: "#2496ED" },
  { Icon: SiKubernetes,     name: "Kubernetes",   color: "#326CE5" },
  { Icon: SiLangchain,      name: "LangChain",    color: "#1C3C3C" },
  { imgSrc: "/logos/langgraph.svg", name: "LangGraph", color: "#7FC8FF" },
  { imgSrc: "/logos/crewai.svg",   name: "CrewAI",    color: "#FF5A50" },
  { textOnly: true,         name: "AutoGen",      color: "#A78BFA" },
  { imgSrc: "/logos/pydantic.svg",     name: "Pydantic",   color: "#E92063" },
  { Icon: SiTensorflow,               name: "TensorFlow", color: "#FF6F00" },
  { imgSrc: "/logos/aws-lambda.svg",  name: "AWS Lambda", color: "#FF9900" },
  { imgSrc: "/logos/aws-s3.svg",      name: "Amazon S3",  color: "#569A31" },
  { imgSrc: "/logos/aws-sagemaker.svg", name: "SageMaker", color: "#FF9900" },
  { imgSrc: "/logos/aws-ec2.svg",     name: "Amazon EC2", color: "#FF9900" },
  { textOnly: true,                   name: "AWS Bedrock", color: "#FF9900" },
  { imgSrc: "/logos/openai.svg",      name: "OpenAI",     color: "#74AA9C" },
  { imgSrc: "/logos/anthropic.svg",   name: "Anthropic",  color: "#D97757" },
];

const ROW2: TechItem[] = [
  { Icon: SiPytorch,        name: "PyTorch",      color: "#EE4C2C" },
  { Icon: SiScikitlearn,    name: "Scikit-learn", color: "#F7931E" },
  { Icon: SiSnowflake,      name: "Snowflake",    color: "#29B5E8" },
  { Icon: SiGooglebigquery, name: "BigQuery",     color: "#4285F4" },
  { imgSrc: "/logos/dataflow.svg",                name: "Dataflow",          color: "#4285F4" },
  { Icon: SiDatabricks,     name: "Databricks",   color: "#FF3621" },
  { imgSrc: "/logos/dataiku.svg",  name: "Dataiku",   color: "#2AB1AC" },
  { Icon: SiN8N,            name: "n8n",          color: "#EA4B71" },
  { Icon: SiZapier,         name: "Zapier",       color: "#FF4A00" },
  { imgSrc: "/logos/make.svg",     name: "Make",       color: "#6D00CC" },
  { textOnly: true,                               name: "GoHighLevel",       color: "#F97316" },
  { Icon: SiZoho,           name: "Zoho CRM",     color: "#E42527" },
  { Icon: SiPostgresql,     name: "PostgreSQL",   color: "#4169E1" },
  { Icon: SiMongodb,        name: "MongoDB",      color: "#47A248" },
  { Icon: SiRedis,          name: "Redis",        color: "#FF4438" },
  { textOnly: true,                               name: "Azure ML",          color: "#0078D4" },
  { textOnly: true,                               name: "Azure OpenAI",      color: "#0078D4" },
  { textOnly: true,                               name: "Azure Data Factory", color: "#0078D4" },
  { imgSrc: "/logos/twilio.svg",        name: "Twilio",       color: "#F22F46" },
  { imgSrc: "/logos/asterisk.svg",      name: "Asterisk",     color: "#F67400" },
  { imgSrc: "/logos/apache-spark.svg",  name: "Apache Spark", color: "#E25A1C" },
  { imgSrc: "/logos/airflow.svg",       name: "Airflow",      color: "#017CEE" },
  { imgSrc: "/logos/dbt.svg",           name: "dbt",          color: "#FF694B" },
  { imgSrc: "/logos/elasticsearch.svg", name: "Elasticsearch", color: "#005571" },
  { imgSrc: "/logos/pinecone.svg",      name: "Pinecone",     color: "#3BB273" },
  { imgSrc: "/logos/weaviate.svg",      name: "Weaviate",     color: "#5C4EE5" },
];

const ROW3: TechItem[] = [
  { imgSrc: "/logos/huggingface.svg",  name: "Hugging Face", color: "#FF9D00" },
  { imgSrc: "/logos/kafka.svg",        name: "Apache Kafka", color: "#ADADAD" },
  { imgSrc: "/logos/flink.svg",        name: "Apache Flink", color: "#E6526F" },
  { imgSrc: "/logos/grafana.svg",      name: "Grafana",      color: "#F46800" },
  { imgSrc: "/logos/prometheus.svg",   name: "Prometheus",   color: "#E6522C" },
  { imgSrc: "/logos/terraform.svg",    name: "Terraform",    color: "#7B42BC" },
  { imgSrc: "/logos/mysql.svg",        name: "MySQL",        color: "#4479A1" },
  { imgSrc: "/logos/clickhouse.svg",   name: "ClickHouse",   color: "#FFCC01" },
  { imgSrc: "/logos/jupyter.svg",      name: "Jupyter",      color: "#F37626" },
  { imgSrc: "/logos/opencv.svg",       name: "OpenCV",       color: "#5C3EE8" },
  { imgSrc: "/logos/metabase.svg",     name: "Metabase",     color: "#509EE3" },
  { textOnly: true,                                           name: "Vertex AI",    color: "#4285F4" },
  { imgSrc: "/logos/gemini.svg",                              name: "Gemini",       color: "#8E75B2" },
  { imgSrc: "/logos/ray.svg",                                 name: "Ray",          color: "#028CF0" },
  { textOnly: true,                                           name: "Vertex Search", color: "#FF6D00" },
];

const ROW4: TechItem[] = [
  { imgSrc: "/logos/supabase.svg",   name: "Supabase",   color: "#3ECF8E" },
  { imgSrc: "/logos/stripe.svg",     name: "Stripe",     color: "#635BFF" },
  { imgSrc: "/logos/slack.svg",      name: "Slack",      color: "#4A154B" },
  { imgSrc: "/logos/notion.svg",     name: "Notion",     color: "#F0EDE6" },
  { imgSrc: "/logos/airtable.svg",   name: "Airtable",   color: "#18BFFF" },
  { imgSrc: "/logos/gitlab.svg",     name: "GitLab",     color: "#FC6D26" },
  { imgSrc: "/logos/github.svg",     name: "GitHub",     color: "#F0EDE6" },
  { imgSrc: "/logos/powerbi.svg",    name: "Power BI",   color: "#F2C811" },
  { imgSrc: "/logos/tableau.svg",    name: "Tableau",    color: "#E97627" },
  { imgSrc: "/logos/looker.svg",     name: "Looker",     color: "#4285F4" },
  { imgSrc: "/logos/delta-lake.svg",                        name: "Delta Lake", color: "#0078D4" },
  { textOnly: true,                                         name: "FAISS",      color: "#1877F2" },
  { imgSrc: "/logos/chroma.svg",                            name: "ChromaDB",   color: "#F47021" },
  { textOnly: true,                                         name: "AWS Bedrock", color: "#FF9900" },
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
      {!item.textOnly && (
        <span className={styles.techIcon} style={{ color: item.color }}>
          {item.imgSrc ? (
            <img src={item.imgSrc} alt={item.name} width={34} height={34} style={{ display: "block" }} />
          ) : item.Icon ? (
            <item.Icon size={34} />
          ) : null}
        </span>
      )}
      <span className={styles.techName} style={item.textOnly ? { color: item.color } : undefined}>
        {item.name}
      </span>
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

      <div className={styles.marqueeRow}>
        <Marquee speed={45} pauseOnHover gradient={false} autoFill>
          {ROW3.map((tech, i) => <TechChip key={i} item={tech} />)}
        </Marquee>
      </div>

      <div className={styles.marqueeRow}>
        <Marquee speed={35} direction="right" pauseOnHover gradient={false} autoFill>
          {ROW4.map((tech, i) => <TechChip key={i} item={tech} />)}
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
