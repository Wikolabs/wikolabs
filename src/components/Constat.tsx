"use client";

import styles from "./Constat.module.css";
import {
  LuDatabase, LuRefreshCw, LuMessageSquare, LuChartBar,
  LuLayers, LuClock, LuUsers, LuShield,
  LuBrain, LuTrendingUp, LuMail, LuMonitor,
  LuLink, LuZap, LuStar, LuCheck,
  LuArrowRight, LuX,
} from "react-icons/lu";
import type { IconType } from "react-icons";

interface Pair {
  pIcon: IconType;
  sIcon: IconType;
  fr: { pTitle: string; pDesc: string; sTitle: string; sDesc: string };
  en: { pTitle: string; pDesc: string; sTitle: string; sDesc: string };
}

const PAIRS: Pair[] = [
  {
    pIcon: LuDatabase,
    sIcon: LuBrain,
    fr: {
      pTitle: "Vos données dorment sans produire de valeur",
      pDesc:  "Commandes, CRM, emails, documents — des mines d'or que votre organisation n'exploite pas encore, faute d'outils adaptés.",
      sTitle: "Des agents IA qui travaillent 24h/24 pour vous",
      sDesc:  "Qualification de leads, réponses clients, extraction documentaire, reporting — des workflows intelligents qui s'occupent de l'opérationnel pendant que vous pilotez.",
    },
    en: {
      pTitle: "Your data is sitting idle, generating no value",
      pDesc:  "Orders, CRM, emails, documents — goldmines your organization hasn't yet tapped, for lack of the right tools.",
      sTitle: "AI agents working around the clock for you",
      sDesc:  "Lead qualification, customer replies, document extraction, reporting — intelligent workflows handling operations while you steer.",
    },
  },
  {
    pIcon: LuRefreshCw,
    sIcon: LuTrendingUp,
    fr: {
      pTitle: "Votre cycle commercial est manuel et lent",
      pDesc:  "Prospection, suivi, qualification, relances — des dizaines d'heures par semaine absorbées par des tâches répétitives que l'IA peut prendre en charge.",
      sTitle: "Des données qui se transforment en décisions",
      sDesc:  "Tableaux de bord en langage naturel, prévisions de revenus, détection d'anomalies — votre performance devient lisible et actionnable à tout moment.",
    },
    en: {
      pTitle: "Your sales cycle is manual and slow",
      pDesc:  "Prospecting, follow-ups, qualification, reminders — dozens of hours a week consumed by repetitive tasks that AI can handle.",
      sTitle: "Data that transforms into decisions",
      sDesc:  "Natural-language dashboards, revenue forecasts, anomaly detection — your performance becomes readable and actionable at any time.",
    },
  },
  {
    pIcon: LuMessageSquare,
    sIcon: LuMail,
    fr: {
      pTitle: "Vos clients attendent, votre SAV déborde",
      pDesc:  "Statut de commande, demandes de retour, questions répétitives — votre équipe s'épuise sur des réponses que votre site peut automatiser.",
      sTitle: "Un cycle commercial entièrement orchestré",
      sDesc:  "De la génération de leads à la signature du contrat, en passant par la qualification BANT et la prise de rendez-vous — chaque étape automatisée, chaque contact personnalisé.",
    },
    en: {
      pTitle: "Customers are waiting, support is overwhelmed",
      pDesc:  "Order status, return requests, repetitive questions — your team burns out on answers your website could automate.",
      sTitle: "A fully orchestrated commercial cycle",
      sDesc:  "From lead generation to contract signing, through BANT qualification and appointment setting — every step automated, every touchpoint personalized.",
    },
  },
  {
    pIcon: LuChartBar,
    sIcon: LuMonitor,
    fr: {
      pTitle: "Vous pilotez à l'aveugle, sans reporting fiable",
      pDesc:  "Vos KPIs sont éparpillés dans des fichiers Excel et des outils déconnectés. Prendre des décisions stratégiques en temps réel est impossible — vous réagissez, vous ne pilotez pas.",
      sTitle: "Un tableau de bord IA en temps réel, en langage naturel",
      sDesc:  "Revenus, marges, conversions, anomalies — toutes vos métriques accessibles via une interface conversationnelle. Posez une question, obtenez une réponse actionnable instantanément.",
    },
    en: {
      pTitle: "You're flying blind, with no reliable reporting",
      pDesc:  "Your KPIs are scattered across Excel files and disconnected tools. Real-time strategic decisions are impossible — you react instead of steer.",
      sTitle: "A real-time AI dashboard, in plain language",
      sDesc:  "Revenue, margins, conversions, anomalies — all your metrics via a conversational interface. Ask a question, get an actionable answer instantly.",
    },
  },
  {
    pIcon: LuLayers,
    sIcon: LuLink,
    fr: {
      pTitle: "Vos processus internes sont fragmentés et coûteux",
      pDesc:  "Chaque département travaille en silo, avec ses propres outils et ses propres formats. La coordination prend du temps, les erreurs s'accumulent et les coûts opérationnels explosent.",
      sTitle: "Des workflows intégrés qui éliminent les silos",
      sDesc:  "Pipelines ETL automatisés, entrepôt de données centralisé, intégrations API clé en main — vos systèmes communiquent, vos équipes collaborent, vos coûts baissent.",
    },
    en: {
      pTitle: "Your internal processes are fragmented and costly",
      pDesc:  "Every department works in a silo with its own tools and formats. Coordination takes time, errors pile up, and operational costs explode.",
      sTitle: "Integrated workflows that eliminate silos",
      sDesc:  "Automated ETL pipelines, centralized data warehouse, turnkey API integrations — your systems talk, your teams collaborate, your costs drop.",
    },
  },
  {
    pIcon: LuClock,
    sIcon: LuZap,
    fr: {
      pTitle: "Vos talents perdent du temps sur des tâches répétitives",
      pDesc:  "Saisie de données, rédaction de rapports, traitement de documents — vos collaborateurs qualifiés s'épuisent sur des tâches à faible valeur que l'IA devrait gérer.",
      sTitle: "L'IA prend en charge la routine, vos équipes font le reste",
      sDesc:  "Classification documentaire, extraction de données, synthèses automatiques — l'IA gère l'opérationnel pour que vos collaborateurs se concentrent sur la création de valeur.",
    },
    en: {
      pTitle: "Your talent is wasting time on repetitive tasks",
      pDesc:  "Data entry, report writing, document processing — your skilled staff is burned out on low-value tasks that AI should be handling.",
      sTitle: "AI handles the routine, your teams handle the rest",
      sDesc:  "Document classification, data extraction, automated summaries — AI manages operations so your staff can focus on value creation.",
    },
  },
  {
    pIcon: LuUsers,
    sIcon: LuStar,
    fr: {
      pTitle: "Vos clients méritent une expérience plus personnalisée",
      pDesc:  "Recommandations génériques, communications identiques pour tous — la personnalisation à grande échelle semble hors de portée alors qu'elle est accessible avec les bons outils.",
      sTitle: "Personnalisation à grande échelle, sans effort supplémentaire",
      sDesc:  "Recommandations produit adaptatives, emails dynamiques, parcours d'achat sur mesure — chaque client reçoit l'expérience faite pour lui, automatiquement.",
    },
    en: {
      pTitle: "Your customers deserve a more personalized experience",
      pDesc:  "Generic recommendations, identical communications for all — large-scale personalization seems out of reach, yet it's accessible with the right tools.",
      sTitle: "Large-scale personalization, no extra effort",
      sDesc:  "Adaptive product recommendations, dynamic emails, custom purchase journeys — every customer gets the experience designed for them, automatically.",
    },
  },
  {
    pIcon: LuShield,
    sIcon: LuCheck,
    fr: {
      pTitle: "L'IA vous semble complexe, risquée ou coûteuse",
      pDesc:  "Par où commencer ? Quels outils choisir ? Comment sécuriser vos données ? La complexité perçue freine votre transformation pendant que vos concurrents prennent de l'avance.",
      sTitle: "Une transformation IA guidée, progressive et sans risque",
      sDesc:  "Audit de vos besoins, choix des outils adaptés, déploiement progressif, conformité RGPD, formation de vos équipes — nous gérons la complexité pour que vous récoltez les bénéfices.",
    },
    en: {
      pTitle: "AI feels complex, risky, or expensive to you",
      pDesc:  "Where to start? Which tools to choose? How to secure your data? Perceived complexity is stalling your transformation while competitors pull ahead.",
      sTitle: "Guided, incremental, risk-free AI transformation",
      sDesc:  "Needs audit, right tool selection, phased deployment, GDPR compliance, team training — we handle the complexity so you reap the benefits.",
    },
  },
];

export default function Constat({ locale }: { locale: string }) {
  const lang = locale === "en" ? "en" : "fr";

  return (
    <section id="pourquoi" className={styles.section}>
      <div className={styles.bgGrid} />
      <div className={styles.bgGlow} />

      <div className={`${styles.header} ${styles.headerReveal}`}>
        <div className={`reveal ${styles.sectionTag}`}>
          <span className={styles.sectionTagLine} />
          {lang === "fr" ? "Le Constat" : "The Diagnosis"}
          <span className={styles.sectionTagLine} />
        </div>
        <h2 className={`reveal d1 ${styles.headline}`}>
          {lang === "fr"
            ? <>L'IA transforme les entreprises. <em>La vôtre aussi.</em></>
            : <>AI is transforming businesses. <em>Yours too.</em></>}
        </h2>
        <p className={`reveal d2 ${styles.subtitle}`}>
          {lang === "fr"
            ? "Vos concurrents automatisent déjà ce que vos équipes font manuellement. La fenêtre d'opportunité est ouverte — mais elle ne le restera pas indéfiniment."
            : "Your competitors are already automating what your teams do manually. The window of opportunity is open — but it won't stay that way forever."}
        </p>
      </div>

      <div className={styles.columnHeaders}>
        <div className={`${styles.colHeader} ${styles.colHeaderProblem}`}>
          <LuX size={13} />
          {lang === "fr" ? "Ce qui freine votre croissance" : "What's holding back your growth"}
        </div>
        <div className={styles.colHeaderSpacer} />
        <div className={`${styles.colHeader} ${styles.colHeaderSolution}`}>
          <LuCheck size={13} />
          {lang === "fr" ? "Ce que nous mettons en place" : "What we put in place"}
        </div>
      </div>

      <div className={styles.grid}>
        {PAIRS.map((pair, i) => {
          const PIcon = pair.pIcon;
          const SIcon = pair.sIcon;
          const t = pair[lang];
          return (
            <div key={i} className={`reveal ${styles.row}`}>
              <div className={styles.problemCard}>
                <div className={styles.cardHead}>
                  <div className={`${styles.iconWrap} ${styles.problemIcon}`}>
                    <PIcon size={15} />
                  </div>
                  <div className={styles.cardTitle}>{t.pTitle}</div>
                </div>
                <p className={styles.cardDesc}>{t.pDesc}</p>
              </div>

              <div className={styles.arrow}>
                <LuArrowRight size={16} />
              </div>

              <div className={styles.solutionCard}>
                <div className={styles.cardHead}>
                  <div className={`${styles.iconWrap} ${styles.solutionIcon}`}>
                    <SIcon size={15} />
                  </div>
                  <div className={styles.cardTitle}>{t.sTitle}</div>
                </div>
                <p className={styles.cardDesc}>{t.sDesc}</p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
