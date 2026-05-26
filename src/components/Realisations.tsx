"use client";
import s from "./Realisations.module.css";

const PROJECTS = [
  {
    name: "PulseScope",
    tagline: "Veille marché 24h/24 dans votre Slack",
    desc: "Surveillance concurrentielle automatisée — 50+ sources, synthèse IA à 8h chaque matin.",
    url: "http://187.124.167.18:3001",
    accent: "#0ea5e9",
    bg: "#f0f9ff",
    cat: "Intelligence marché",
  },
  {
    name: "LeadForge",
    tagline: "300 prospects qualifiés livrés chaque lundi",
    desc: "Sourcing ICP automatisé — enrichissement, scoring, 94% d'emails valides.",
    url: "http://187.124.167.18:3002",
    accent: "#6366f1",
    bg: "#eef2ff",
    cat: "Prospection B2B",
  },
  {
    name: "ReachWave",
    tagline: "Séquences Email · LinkedIn · SMS automatisées",
    desc: "Outreach multicanal orchestré — ×3 sur le taux de réponse en 72h.",
    url: "http://187.124.167.18:3003",
    accent: "#f97316",
    bg: "#fff7ed",
    cat: "Outreach multicanal",
  },
  {
    name: "ScoreFlow",
    tagline: "80% des prospects qualifiés sans intervention",
    desc: "Scoring BANT IA et routing automatique — votre closer ne voit que les deals chauds.",
    url: "http://187.124.167.18:3004",
    accent: "#10b981",
    bg: "#ecfdf5",
    cat: "Qualification IA",
  },
  {
    name: "BookLync",
    tagline: "Votre agenda rempli. Automatiquement.",
    desc: "Détection d'intention → 3 créneaux → confirmation → brief pré-call. Zéro friction.",
    url: "http://187.124.167.18:3005",
    accent: "#a855f7",
    bg: "#faf5ff",
    cat: "Prise de RDV",
  },
  {
    name: "PropGenAI",
    tagline: "De la discovery au contrat signé en 48h",
    desc: "Notes de call → proposition PDF → DocuSign. Relance automatique jusqu'à signature.",
    url: "http://187.124.167.18:3006",
    accent: "#f43f5e",
    bg: "#fff1f2",
    cat: "Proposition commerciale",
  },
  {
    name: "RetainIQ",
    tagline: "75% du churn détecté avant qu'il se produise",
    desc: "Monitoring comportemental, scoring churn IA et réengagement personnalisé.",
    url: "http://187.124.167.18:3007",
    accent: "#f59e0b",
    bg: "#fffbeb",
    cat: "Rétention client",
  },
];

export default function Realisations({ locale }: { locale: string }) {
  const isFr = locale !== "en";

  return (
    <section className={s.section} id="realisations">
      <div className={s.tag}>
        <span className={s.tagLine} />
        {isFr ? "Nos réalisations" : "Our work"}
        <span className={s.tagLine} />
      </div>
      <h2 className={`reveal d1 ${s.title}`}>
        {isFr
          ? "Des agents déployés, pas des promesses"
          : "Deployed agents, not promises"}
      </h2>
      <p className={`reveal d2 ${s.desc}`}>
        {isFr
          ? "Chaque offre Wikolabs est une landing page indépendante, une codebase GitHub, un pipeline CI/CD — déjà en production."
          : "Each Wikolabs offer has its own landing page, GitHub codebase, and CI/CD pipeline — already in production."}
      </p>

      <div className={s.grid}>
        {PROJECTS.map((p, i) => (
          <a
            key={p.name}
            href={p.url}
            target="_blank"
            rel="noopener noreferrer"
            className={`reveal d${(i % 4) + 1} ${s.card}`}
            style={{ "--accent": p.accent, "--bg": p.bg } as React.CSSProperties}
          >
            <div className={s.cardTop}>
              <div className={s.cardPreview}>
                <div className={s.previewDot} />
                <div className={s.previewDot} />
                <div className={s.previewDot} />
                <div className={s.previewScreen}>
                  <div className={s.previewBar} />
                  <div className={s.previewBar} style={{ width: "60%" }} />
                  <div className={s.previewGrid}>
                    <div className={s.previewBlock} />
                    <div className={s.previewBlock} />
                    <div className={s.previewBlock} />
                  </div>
                  <div className={s.previewBar} style={{ width: "45%" }} />
                </div>
              </div>
              <span className={s.cat}>{p.cat}</span>
            </div>
            <div className={s.cardBody}>
              <div className={s.cardName}>{p.name}</div>
              <div className={s.cardTagline}>{p.tagline}</div>
              <p className={s.cardDesc}>{p.desc}</p>
            </div>
            <div className={s.cardFooter}>
              <span className={s.live}>
                <span className={s.liveDot} />
                {isFr ? "En ligne" : "Live"}
              </span>
              <span className={s.arrow}>→</span>
            </div>
          </a>
        ))}
      </div>

      <div className={`reveal d3 ${s.cta}`}>
        <p>{isFr ? "24 autres agents en cours de développement" : "24 more agents in development"}</p>
        <span className={s.ctaBadge}>{isFr ? "Bientôt disponibles" : "Coming soon"}</span>
      </div>
    </section>
  );
}
