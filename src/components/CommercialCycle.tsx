"use client";

import styles from "./CommercialCycle.module.css";
import {
  LuSearch, LuMail, LuFilter, LuCalendar, LuFileText, LuHeartHandshake,
  LuX, LuCheck, LuZap, LuBot,
} from "react-icons/lu";

interface Stage {
  num: string;
  phase: { fr: string; en: string };
  title: { fr: string; en: string };
  before: { fr: string; en: string };
  after: { fr: string; en: string };
  whyNot: { fr: string; en: string };
  automation: string;
  color: string;
  Icon: React.ComponentType<{ size?: number }>;
}

const STAGES: Stage[] = [
  {
    num: "01",
    phase: { fr: "Phase 1–2 · Sourcing & Scoring", en: "Phase 1–2 · Sourcing & Scoring" },
    title: { fr: "Trouver et qualifier 200 prospects ICP en 24h", en: "Find and score 200 ICP prospects in 24h" },
    before: {
      fr: "Votre équipe passe 15h/semaine sur LinkedIn Sales Navigator à chercher des contacts manuellement. 30 prospects/jour, données souvent obsolètes.",
      en: "Your team spends 15h/week on LinkedIn Sales Navigator manually sourcing contacts. 30 prospects/day, data often outdated.",
    },
    after: {
      fr: "Agent Apollo + LinkedIn scraping → 200 leads ICP+ enrichis (poste, CA, tech stack) et scorés BANT automatiquement dans votre CRM, chaque matin.",
      en: "Apollo + LinkedIn scraping agent → 200 enriched ICP+ leads (role, revenue, tech stack) with automatic BANT scoring pushed to your CRM every morning.",
    },
    whyNot: {
      fr: "ChatGPT ne se connecte pas à Apollo.io, ne scrape pas LinkedIn, ne synchronise pas HubSpot et ne peut pas noter automatiquement le BANT.",
      en: "ChatGPT cannot connect to Apollo.io, scrape LinkedIn, sync HubSpot, or automatically score BANT criteria.",
    },
    automation: "100%",
    color: "#22D3EE",
    Icon: LuSearch,
  },
  {
    num: "02",
    phase: { fr: "Phase 3 · Outreach Multicanal", en: "Phase 3 · Multi-channel Outreach" },
    title: { fr: "Séquences email + LinkedIn 100% personnalisées à grande échelle", en: "Hyper-personalized email + LinkedIn sequences at scale" },
    before: {
      fr: "Chaque email rédigé à la main. 1 commercial = 30 prospects/jour max. Les relances oubliées font perdre 60% des deals chauds.",
      en: "Every email written by hand. 1 sales rep = 30 prospects/day max. Forgotten follow-ups lose 60% of warm deals.",
    },
    after: {
      fr: "Agent LangGraph génère des premiers emails avec hook contextuel, puis relances J+3, J+7, J+14. Ouvertures et clics trackés, CRM mis à jour automatiquement.",
      en: "LangGraph agent generates contextual hook emails, then follow-ups at D+3, D+7, D+14. Opens and clicks tracked, CRM auto-updated.",
    },
    whyNot: {
      fr: "ChatGPT ne peut pas envoyer d'emails, tracker les ouvertures, relancer automatiquement selon le comportement du prospect ni mettre à jour Pipedrive.",
      en: "ChatGPT cannot send emails, track opens, auto-follow-up based on prospect behavior, or update Pipedrive.",
    },
    automation: "100%",
    color: "#D4AF37",
    Icon: LuMail,
  },
  {
    num: "03",
    phase: { fr: "Phase 4 · Qualification BANT", en: "Phase 4 · BANT Qualification" },
    title: { fr: "Qualifier chaque réponse et router vers le bon pipeline", en: "Qualify every reply and route to the right pipeline" },
    before: {
      fr: "Un setter appelle chaque lead pour qualifier. Taux de no-show : 40%. Deals non qualifiés qui polluent le pipeline du closer.",
      en: "A setter calls every lead to qualify. No-show rate: 40%. Unqualified deals polluting the closer's pipeline.",
    },
    after: {
      fr: "L'agent LLM analyse la réponse du prospect, met à jour le score BANT, route automatiquement : qualifié → setter / pas prêt → nurturing / hors cible → archive CRM.",
      en: "LLM agent analyzes prospect reply, updates BANT score, automatically routes: qualified → setter / not ready → nurturing / off-target → CRM archive.",
    },
    whyNot: {
      fr: "ChatGPT ne lit pas vos emails entrants, ne met pas à jour le score dans Salesforce et ne déclenche pas de workflows Zapier basés sur la qualification.",
      en: "ChatGPT cannot read your inbound emails, update scores in Salesforce, or trigger Zapier workflows based on qualification.",
    },
    automation: "80%",
    color: "#34D399",
    Icon: LuFilter,
  },
  {
    num: "04",
    phase: { fr: "Phase 5–7 · Setting & Proposition", en: "Phase 5–7 · Setting & Proposal" },
    title: { fr: "Du rendez-vous à la proposition signée en moins de 48h", en: "From appointment to signed proposal in under 48h" },
    before: {
      fr: "Chaque proposition rédigée de zéro : 3-4h de travail par deal. DocuSign envoyé manuellement. Relances de signature oubliées.",
      en: "Every proposal written from scratch: 3-4h per deal. DocuSign sent manually. Signature reminders forgotten.",
    },
    after: {
      fr: "Agent Setter propose 3 créneaux Calendly + brief pré-call généré par LLM. Après le call, agent génère la proposition PDF, envoie par DocuSign et relance automatiquement.",
      en: "Setter agent proposes 3 Calendly slots + LLM-generated pre-call brief. After the call, agent drafts the PDF proposal, sends via DocuSign, and auto-follows up.",
    },
    whyNot: {
      fr: "ChatGPT ne pilote pas Calendly, ne lit pas vos notes Notion, ne génère pas un PDF à votre charte et ne déclenche pas DocuSign automatiquement.",
      en: "ChatGPT cannot operate Calendly, read your Notion notes, generate a branded PDF, or trigger DocuSign automatically.",
    },
    automation: "70%",
    color: "#A78BFA",
    Icon: LuCalendar,
  },
  {
    num: "05",
    phase: { fr: "Phase 10–11 · Onboarding & Support", en: "Phase 10–11 · Onboarding & Support" },
    title: { fr: "Support client 24h/7j avec 70% de tickets auto-résolus", en: "24/7 customer support with 70% of tickets auto-resolved" },
    before: {
      fr: "Tickets traités manuellement. Délai moyen de réponse : 24-48h. Agents submergés par des questions répétitives. NPS en baisse.",
      en: "Tickets handled manually. Average response time: 24-48h. Agents overwhelmed by repetitive questions. Declining NPS.",
    },
    after: {
      fr: "Agent RAG connecté à votre documentation, historique client et CRM : 70% des tickets résolus en < 2 minutes. Escalade intelligente vers humain si complexe.",
      en: "RAG agent connected to your docs, customer history, and CRM: 70% of tickets resolved in < 2 minutes. Smart escalation to human if complex.",
    },
    whyNot: {
      fr: "ChatGPT n'a pas accès à vos docs internes, votre historique client Zendesk, ni votre base de commandes WooCommerce. Il hallucine des réponses sans contexte réel.",
      en: "ChatGPT has no access to your internal docs, Zendesk history, or WooCommerce order base. It hallucinates answers without real context.",
    },
    automation: "70%",
    color: "#F97316",
    Icon: LuFileText,
  },
  {
    num: "06",
    phase: { fr: "Phase 12–13 · Rétention & Upsell", en: "Phase 12–13 · Retention & Upsell" },
    title: { fr: "Détecter le churn avant qu'il arrive et déclencher l'upsell au bon moment", en: "Detect churn before it happens and trigger upsell at the right moment" },
    before: {
      fr: "Churn détecté trop tard. Renouvellements négociés à la dernière minute. Opportunités d'upsell manquées par manque de signal.",
      en: "Churn detected too late. Renewals negotiated last-minute. Upsell opportunities missed from lack of signals.",
    },
    after: {
      fr: "Agent monitore l'utilisation produit, détecte les signaux faibles (moins de connexions, tickets en hausse), déclenche une séquence de réengagement personnalisée par LLM.",
      en: "Agent monitors product usage, detects weak signals (fewer logins, rising tickets), triggers a personalized LLM re-engagement sequence.",
    },
    whyNot: {
      fr: "ChatGPT ne monitore pas votre base client, ne lit pas les métriques d'usage Mixpanel et ne peut pas déclencher automatiquement une campagne email Mailchimp.",
      en: "ChatGPT cannot monitor your customer base, read Mixpanel usage metrics, or automatically trigger a Mailchimp email campaign.",
    },
    automation: "75%",
    color: "#F472B6",
    Icon: LuHeartHandshake,
  },
];

const i18n = {
  fr: {
    tag: "Intégration intelligente",
    title: "Comment nous entrons dans",
    titleEm: "votre cycle commercial",
    desc: "Nous ne remplaçons pas votre équipe — nous l'augmentons. Chaque phase de votre cycle est optimisée par un agent IA spécialisé qui s'intègre à vos outils existants.",
    noticeTitle: "Pourquoi pas ChatGPT ou Claude directement ?",
    beforeLabel: "Aujourd'hui",
    afterLabel: "Avec nos Agents",
    autoLabel: "automatisé",
  },
  en: {
    tag: "Intelligent integration",
    title: "How we plug into",
    titleEm: "your commercial cycle",
    desc: "We don't replace your team — we augment it. Each phase of your cycle is optimized by a specialized AI agent that integrates with your existing tools.",
    noticeTitle: "Why not just use ChatGPT or Claude directly?",
    beforeLabel: "Today",
    afterLabel: "With our Agents",
    autoLabel: "automated",
  },
};

export default function CommercialCycle({ locale }: { locale: string }) {
  const lang = locale === "en" ? "en" : "fr";
  const t = i18n[lang];

  return (
    <section className={styles.section}>
      <div className={styles.bgGlow1} />
      <div className={styles.bgGlow2} />

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

      <div className={styles.timeline}>
        {STAGES.map((stage, i) => (
          <div
            key={i}
            className={`reveal d${Math.min(i + 1, 5)} ${styles.stage}`}
            style={{ "--c": stage.color } as React.CSSProperties}
          >
            {/* Timeline dot + line */}
            <div className={styles.timelineCol}>
              <div className={styles.timelineDot} style={{ background: stage.color, boxShadow: `0 0 0 4px ${stage.color}25, 0 0 16px ${stage.color}40` }}>
                <stage.Icon size={16} />
              </div>
              {i < STAGES.length - 1 && <div className={styles.timelineLine} />}
            </div>

            {/* Content */}
            <div className={styles.stageContent}>
              {/* Header */}
              <div className={styles.stageHead}>
                <span className={styles.stageNum} style={{ color: stage.color }}>#{stage.num}</span>
                <span className={styles.stagePhase}>{stage.phase[lang]}</span>
                <span className={styles.automBadge} style={{ background: `${stage.color}18`, color: stage.color, borderColor: `${stage.color}40` }}>
                  <LuZap size={11} />
                  {stage.automation} {t.autoLabel}
                </span>
              </div>

              <h3 className={styles.stageTitle}>{stage.title[lang]}</h3>

              {/* Before / After */}
              <div className={styles.compareGrid}>
                <div className={styles.beforeBox}>
                  <div className={styles.boxLabel}>
                    <LuX size={12} className={styles.iconBad} />
                    {t.beforeLabel}
                  </div>
                  <p className={styles.boxText}>{stage.before[lang]}</p>
                </div>
                <div className={styles.afterBox} style={{ borderLeftColor: stage.color }}>
                  <div className={styles.boxLabel}>
                    <LuCheck size={12} className={styles.iconGood} style={{ color: stage.color } as React.CSSProperties} />
                    {t.afterLabel}
                  </div>
                  <p className={styles.boxText}>{stage.after[lang]}</p>
                </div>
              </div>

              {/* Why not ChatGPT */}
              <div className={styles.whyNot}>
                <div className={styles.whyNotLabel}>
                  <LuBot size={13} />
                  {t.noticeTitle}
                </div>
                <p className={styles.whyNotText}>{stage.whyNot[lang]}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
