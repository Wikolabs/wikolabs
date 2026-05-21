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

/* ─── ROW 1 — Cloud Platforms, Core Dev & AI Providers ─── */
const ROW1: TechItem[] = [
  { Icon: SiGooglecloud,                           name: "Google Cloud",    color: "#4285F4" },
  { imgSrc: "/logos/aws.svg",                      name: "AWS",             color: "#FF9900" },
  { imgSrc: "/logos/azure.svg",                    name: "Azure",           color: "#0078D4" },
  { Icon: SiPython,                                name: "Python",          color: "#3776AB" },
  { Icon: SiReact,                                 name: "React",           color: "#61DAFB" },
  { Icon: SiNextdotjs,                             name: "Next.js",         color: "#F0EDE6" },
  { Icon: SiFastapi,                               name: "FastAPI",         color: "#009688" },
  { Icon: SiNestjs,                                name: "NestJS",          color: "#E0234E" },
  { Icon: SiDocker,                                name: "Docker",          color: "#2496ED" },
  { Icon: SiKubernetes,                            name: "Kubernetes",      color: "#326CE5" },
  { Icon: SiLangchain,                             name: "LangChain",       color: "#1C3C3C" },
  { imgSrc: "/logos/langgraph.svg",                name: "LangGraph",       color: "#7FC8FF" },
  { imgSrc: "/logos/crewai.svg",                   name: "CrewAI",          color: "#FF5A50" },
  { textOnly: true,                                name: "AutoGen",         color: "#A78BFA" },
  { imgSrc: "/logos/pydantic.svg",                 name: "Pydantic",        color: "#E92063" },
  { Icon: SiTensorflow,                            name: "TensorFlow",      color: "#FF6F00" },
  { imgSrc: "/logos/openai.svg",                   name: "OpenAI",          color: "#74AA9C" },
  { imgSrc: "/logos/anthropic.svg",                name: "Anthropic",       color: "#D97757" },
  { imgSrc: "/logos/aws-lambda.svg",               name: "AWS Lambda",      color: "#FF9900" },
  { imgSrc: "/logos/aws-s3.svg",                   name: "Amazon S3",       color: "#569A31" },
  { imgSrc: "/logos/aws-ec2.svg",                  name: "Amazon EC2",      color: "#FF9900" },
  { imgSrc: "/logos/aws-sagemaker.svg",            name: "SageMaker",       color: "#FF9900" },
  { imgSrc: "/logos/aws-bedrock.svg",              name: "Amazon Bedrock",  color: "#FF9900" },
  { imgSrc: "/logos/aws-fargate.svg",              name: "AWS Fargate",     color: "#FF9900" },
  { imgSrc: "/logos/aws-eks.svg",                  name: "Amazon EKS",      color: "#FF9900" },
  { imgSrc: "/logos/aws-ecs.svg",                  name: "Amazon ECS",      color: "#FF9900" },
];

/* ─── ROW 2 — Data, Analytics & Automation ─── */
const ROW2: TechItem[] = [
  { Icon: SiPytorch,                               name: "PyTorch",         color: "#EE4C2C" },
  { Icon: SiScikitlearn,                           name: "Scikit-learn",    color: "#F7931E" },
  { Icon: SiSnowflake,                             name: "Snowflake",       color: "#29B5E8" },
  { Icon: SiGooglebigquery,                        name: "BigQuery",        color: "#4285F4" },
  { imgSrc: "/logos/dataflow.svg",                 name: "Dataflow",        color: "#4285F4" },
  { Icon: SiDatabricks,                            name: "Databricks",      color: "#FF3621" },
  { imgSrc: "/logos/dataiku.svg",                  name: "Dataiku",         color: "#2AB1AC" },
  { Icon: SiN8N,                                   name: "n8n",             color: "#EA4B71" },
  { Icon: SiZapier,                                name: "Zapier",          color: "#FF4A00" },
  { imgSrc: "/logos/make.svg",                     name: "Make",            color: "#6D00CC" },
  { imgSrc: "/logos/gohighlevel.webp",             name: "GoHighLevel",     color: "#2896FB" },
  { Icon: SiZoho,                                  name: "Zoho CRM",        color: "#E42527" },
  { Icon: SiPostgresql,                            name: "PostgreSQL",      color: "#4169E1" },
  { Icon: SiMongodb,                               name: "MongoDB",         color: "#47A248" },
  { Icon: SiRedis,                                 name: "Redis",           color: "#FF4438" },
  { imgSrc: "/logos/azure-ml.svg",                 name: "Azure ML",        color: "#0078D4" },
  { imgSrc: "/logos/twilio.svg",                   name: "Twilio",          color: "#F22F46" },
  { imgSrc: "/logos/asterisk.svg",                 name: "Asterisk",        color: "#F67400" },
  { imgSrc: "/logos/apache-spark.svg",             name: "Apache Spark",    color: "#E25A1C" },
  { imgSrc: "/logos/airflow.svg",                  name: "Airflow",         color: "#017CEE" },
  { imgSrc: "/logos/dbt.svg",                      name: "dbt",             color: "#FF694B" },
  { imgSrc: "/logos/elasticsearch.svg",            name: "Elasticsearch",   color: "#005571" },
  { imgSrc: "/logos/pinecone.svg",                 name: "Pinecone",        color: "#3BB273" },
  { imgSrc: "/logos/weaviate.svg",                 name: "Weaviate",        color: "#5C4EE5" },
  { imgSrc: "/logos/aws-redshift.svg",             name: "Amazon Redshift", color: "#FF9900" },
  { imgSrc: "/logos/aws-glue.svg",                 name: "AWS Glue",        color: "#FF9900" },
  { imgSrc: "/logos/aws-kinesis.svg",              name: "Amazon Kinesis",  color: "#FF9900" },
  { imgSrc: "/logos/aws-opensearch.svg",           name: "OpenSearch",      color: "#FF9900" },
  { imgSrc: "/logos/aws-athena.svg",               name: "Amazon Athena",   color: "#FF9900" },
  { imgSrc: "/logos/aws-msk.svg",                  name: "Amazon MSK",      color: "#FF9900" },
  { imgSrc: "/logos/aws-lake-formation.svg",       name: "Lake Formation",  color: "#FF9900" },
  { imgSrc: "/logos/aws-emr.svg",                  name: "Amazon EMR",      color: "#FF9900" },
];

/* ─── ROW 3 — ML/AI Services & Specialized Tools ─── */
const ROW3: TechItem[] = [
  { imgSrc: "/logos/huggingface.svg",              name: "Hugging Face",    color: "#FF9D00" },
  { imgSrc: "/logos/kafka.svg",                    name: "Apache Kafka",    color: "#ADADAD" },
  { imgSrc: "/logos/flink.svg",                    name: "Apache Flink",    color: "#E6526F" },
  { imgSrc: "/logos/grafana.svg",                  name: "Grafana",         color: "#F46800" },
  { imgSrc: "/logos/prometheus.svg",               name: "Prometheus",      color: "#E6522C" },
  { imgSrc: "/logos/terraform.svg",                name: "Terraform",       color: "#7B42BC" },
  { imgSrc: "/logos/mysql.svg",                    name: "MySQL",           color: "#4479A1" },
  { imgSrc: "/logos/clickhouse.svg",               name: "ClickHouse",      color: "#FFCC01" },
  { imgSrc: "/logos/jupyter.svg",                  name: "Jupyter",         color: "#F37626" },
  { imgSrc: "/logos/opencv.svg",                   name: "OpenCV",          color: "#5C3EE8" },
  { imgSrc: "/logos/metabase.svg",                 name: "Metabase",        color: "#509EE3" },
  { imgSrc: "/logos/vertexai.svg",                 name: "Vertex AI",       color: "#4285F4" },
  { imgSrc: "/logos/gemini.svg",                   name: "Gemini",          color: "#8E75B2" },
  { imgSrc: "/logos/ray.svg",                      name: "Ray",             color: "#028CF0" },
  { imgSrc: "/logos/aws-rekognition.svg",          name: "Rekognition",     color: "#FF9900" },
  { imgSrc: "/logos/aws-textract.svg",             name: "Amazon Textract", color: "#FF9900" },
  { imgSrc: "/logos/aws-comprehend.svg",           name: "Comprehend",      color: "#FF9900" },
  { imgSrc: "/logos/aws-transcribe.svg",           name: "Transcribe",      color: "#FF9900" },
  { imgSrc: "/logos/aws-kendra.svg",               name: "Amazon Kendra",   color: "#FF9900" },
  { imgSrc: "/logos/aws-personalize.svg",          name: "Personalize",     color: "#FF9900" },
  { imgSrc: "/logos/aws-quicksight.svg",           name: "QuickSight",      color: "#FF9900" },
];

/* ─── ROW 4 — DevOps, Databases, Infra & BI ─── */
const ROW4: TechItem[] = [
  { imgSrc: "/logos/supabase.svg",                 name: "Supabase",        color: "#3ECF8E" },
  { imgSrc: "/logos/stripe.svg",                   name: "Stripe",          color: "#635BFF" },
  { imgSrc: "/logos/slack.svg",                    name: "Slack",           color: "#4A154B" },
  { imgSrc: "/logos/notion.svg",                   name: "Notion",          color: "#F0EDE6" },
  { imgSrc: "/logos/airtable.svg",                 name: "Airtable",        color: "#18BFFF" },
  { imgSrc: "/logos/gitlab.svg",                   name: "GitLab",          color: "#FC6D26" },
  { imgSrc: "/logos/github.svg",                   name: "GitHub",          color: "#F0EDE6" },
  { imgSrc: "/logos/powerbi.svg",                  name: "Power BI",        color: "#F2C811" },
  { imgSrc: "/logos/tableau.svg",                  name: "Tableau",         color: "#E97627" },
  { imgSrc: "/logos/looker.svg",                   name: "Looker",          color: "#4285F4" },
  { imgSrc: "/logos/delta-lake.svg",               name: "Delta Lake",      color: "#0078D4" },
  { imgSrc: "/logos/faiss.svg",                    name: "FAISS",           color: "#1877F2" },
  { imgSrc: "/logos/chroma.svg",                   name: "ChromaDB",        color: "#F47021" },
  { imgSrc: "/logos/aws-rds.svg",                  name: "Amazon RDS",      color: "#FF9900" },
  { imgSrc: "/logos/aws-dynamodb.svg",             name: "DynamoDB",        color: "#FF9900" },
  { imgSrc: "/logos/aws-aurora.svg",               name: "Amazon Aurora",   color: "#FF9900" },
  { imgSrc: "/logos/aws-elasticache.svg",          name: "ElastiCache",     color: "#FF9900" },
  { imgSrc: "/logos/aws-cloudfront.svg",           name: "CloudFront",      color: "#FF9900" },
  { imgSrc: "/logos/aws-route53.svg",              name: "Route 53",        color: "#FF9900" },
  { imgSrc: "/logos/aws-api-gateway.svg",          name: "API Gateway",     color: "#FF9900" },
  { imgSrc: "/logos/aws-step-functions.svg",       name: "Step Functions",  color: "#FF9900" },
  { imgSrc: "/logos/aws-eventbridge.svg",          name: "EventBridge",     color: "#FF9900" },
  { imgSrc: "/logos/aws-codebuild.svg",            name: "CodeBuild",       color: "#FF9900" },
  { imgSrc: "/logos/aws-codepipeline.svg",         name: "CodePipeline",    color: "#FF9900" },
  { imgSrc: "/logos/aws-ecr.svg",                  name: "Amazon ECR",      color: "#FF9900" },
  { imgSrc: "/logos/aws-cloudformation.svg",       name: "CloudFormation",  color: "#FF9900" },
];

/* ─── ROW 5 — GCP AI/ML + Compute ─── */
const ROW5: TechItem[] = [
  { imgSrc: "/logos/gcp-vertex-ai.svg",             name: "Vertex AI",           color: "#4285F4" },
  { imgSrc: "/logos/gcp-vertex-ai-search.svg",      name: "Vertex AI Search",    color: "#4285F4" },
  { imgSrc: "/logos/gcp-vertex-ai-vision.svg",      name: "Vertex AI Vision",    color: "#4285F4" },
  { imgSrc: "/logos/gcp-document-ai.svg",           name: "Document AI",         color: "#4285F4" },
  { imgSrc: "/logos/gcp-vision-ai.svg",             name: "Vision AI",           color: "#34A853" },
  { imgSrc: "/logos/gcp-natural-language-ai.svg",   name: "Natural Language AI", color: "#4285F4" },
  { imgSrc: "/logos/gcp-speech-to-text.svg",        name: "Speech-to-Text",      color: "#4285F4" },
  { imgSrc: "/logos/gcp-text-to-speech.svg",        name: "Text-to-Speech",      color: "#4285F4" },
  { imgSrc: "/logos/gcp-translation-ai.svg",        name: "Translation AI",      color: "#4285F4" },
  { imgSrc: "/logos/gcp-automl.svg",                name: "AutoML",              color: "#4285F4" },
  { imgSrc: "/logos/gcp-dialogflow.svg",            name: "Dialogflow",          color: "#FF9800" },
  { imgSrc: "/logos/gcp-dialogflow-cx.svg",         name: "Dialogflow CX",       color: "#FF9800" },
  { imgSrc: "/logos/gcp-contact-center-ai.svg",     name: "Contact Center AI",   color: "#4285F4" },
  { imgSrc: "/logos/gcp-cloud-run.svg",             name: "Cloud Run",           color: "#4285F4" },
  { imgSrc: "/logos/gcp-gke.svg",                   name: "GKE",                 color: "#326CE5" },
  { imgSrc: "/logos/gcp-app-engine.svg",            name: "App Engine",          color: "#4285F4" },
  { imgSrc: "/logos/gcp-cloud-functions.svg",       name: "Cloud Functions",     color: "#4285F4" },
  { imgSrc: "/logos/gcp-compute-engine.svg",        name: "Compute Engine",      color: "#4285F4" },
  { imgSrc: "/logos/gcp-bare-metal.svg",            name: "Bare Metal",          color: "#4285F4" },
];

/* ─── ROW 6 — GCP Data, DB & DevOps ─── */
const ROW6: TechItem[] = [
  { imgSrc: "/logos/gcp-bigquery.svg",              name: "BigQuery",            color: "#4285F4" },
  { imgSrc: "/logos/gcp-bigquery-ml.svg",           name: "BigQuery ML",         color: "#4285F4" },
  { imgSrc: "/logos/gcp-pubsub.svg",                name: "Pub/Sub",             color: "#4285F4" },
  { imgSrc: "/logos/gcp-dataproc.svg",              name: "Dataproc",            color: "#4285F4" },
  { imgSrc: "/logos/gcp-cloud-composer.svg",        name: "Cloud Composer",      color: "#4285F4" },
  { imgSrc: "/logos/gcp-data-catalog.svg",          name: "Data Catalog",        color: "#4285F4" },
  { imgSrc: "/logos/gcp-analytics-hub.svg",         name: "Analytics Hub",       color: "#4285F4" },
  { imgSrc: "/logos/gcp-dataplex.svg",              name: "Dataplex",            color: "#4285F4" },
  { imgSrc: "/logos/gcp-datastream.svg",            name: "Datastream",          color: "#4285F4" },
  { imgSrc: "/logos/gcp-spanner.svg",               name: "Spanner",             color: "#4285F4" },
  { imgSrc: "/logos/gcp-firestore.svg",             name: "Firestore",           color: "#FFCA28" },
  { imgSrc: "/logos/gcp-bigtable.svg",              name: "Bigtable",            color: "#4285F4" },
  { imgSrc: "/logos/gcp-alloydb.svg",               name: "AlloyDB",             color: "#4285F4" },
  { imgSrc: "/logos/gcp-cloud-sql.svg",             name: "Cloud SQL",           color: "#4285F4" },
  { imgSrc: "/logos/gcp-memorystore.svg",           name: "Memorystore",         color: "#4285F4" },
  { imgSrc: "/logos/gcp-datastore.svg",             name: "Datastore",           color: "#4285F4" },
  { imgSrc: "/logos/gcp-cloud-storage.svg",         name: "Cloud Storage",       color: "#4285F4" },
  { imgSrc: "/logos/gcp-cloud-build.svg",           name: "Cloud Build",         color: "#4285F4" },
  { imgSrc: "/logos/gcp-artifact-registry.svg",     name: "Artifact Registry",   color: "#4285F4" },
  { imgSrc: "/logos/gcp-firebase.svg",              name: "Firebase",            color: "#FFCA28" },
  { imgSrc: "/logos/gcp-cloud-logging.svg",         name: "Cloud Logging",       color: "#4285F4" },
  { imgSrc: "/logos/gcp-cloud-monitoring.svg",      name: "Cloud Monitoring",    color: "#4285F4" },
  { imgSrc: "/logos/gcp-eventarc.svg",              name: "Eventarc",            color: "#4285F4" },
  { imgSrc: "/logos/gcp-workflows.svg",             name: "Workflows",           color: "#4285F4" },
  { imgSrc: "/logos/gcp-cloud-deploy.svg",          name: "Cloud Deploy",        color: "#4285F4" },
  { imgSrc: "/logos/gcp-secret-manager.svg",        name: "Secret Manager",      color: "#4285F4" },
  { imgSrc: "/logos/gcp-cloud-kms.svg",             name: "Cloud KMS",           color: "#4285F4" },
  { imgSrc: "/logos/gcp-cloud-cdn.svg",             name: "Cloud CDN",           color: "#4285F4" },
  { imgSrc: "/logos/gcp-load-balancing.svg",        name: "Load Balancing",      color: "#4285F4" },
  { imgSrc: "/logos/gcp-cloud-dns.svg",             name: "Cloud DNS",           color: "#4285F4" },
  { imgSrc: "/logos/gcp-looker.svg",                name: "Looker (GCP)",        color: "#4285F4" },
];

interface Category { Icon: IconType; name: string; techs: string; color: string }
const CATEGORIES: Category[] = [
  { Icon: LuCloud,     name: "Cloud",      techs: "GCP · AWS · Azure",                        color: "#4285F4" },
  { Icon: LuBrain,     name: "AI & ML",    techs: "LangGraph · CrewAI · TensorFlow · PyTorch", color: "#D4AF37" },
  { Icon: LuDatabase,  name: "Data",       techs: "Snowflake · BigQuery · Databricks",         color: "#29B5E8" },
  { Icon: LuRefreshCw, name: "Automation", techs: "n8n · Zapier · Make · GoHighLevel",         color: "#EA4B71" },
  { Icon: LuCode,      name: "Dev",        techs: "Python · React · Next.js · FastAPI",        color: "#3776AB" },
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

      <div className={styles.marqueeRow}>
        <Marquee speed={42} pauseOnHover gradient={false} autoFill>
          {ROW5.map((tech, i) => <TechChip key={i} item={tech} />)}
        </Marquee>
      </div>

      <div className={styles.marqueeRow}>
        <Marquee speed={38} direction="right" pauseOnHover gradient={false} autoFill>
          {ROW6.map((tech, i) => <TechChip key={i} item={tech} />)}
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
