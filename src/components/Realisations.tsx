"use client";
import s from "./Realisations.module.css";

const PROJECTS = [
  // ── Commercial Automation ──────────────────────────────────────────────────
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
  // ── AI Agents & Support ────────────────────────────────────────────────────
  {
    name: "HelpiqAI",
    tagline: "Votre SAV e-commerce, résolu en 30 secondes",
    desc: "Agent IA sur votre catalogue produit, FAQ et politiques — 80% de tickets résolus sans humain.",
    url: "http://187.124.167.18:3008",
    accent: "#06b6d4",
    bg: "#ecfeff",
    cat: "Support client IA",
  },
  {
    name: "TriageIQ",
    tagline: "0 ticket non traité. Jamais.",
    desc: "Classification, priorisation et routing automatique de chaque incident IT entrant.",
    url: "http://187.124.167.18:3009",
    accent: "#ef4444",
    bg: "#fef2f2",
    cat: "IT Support IA",
  },
  {
    name: "OnboardAI",
    tagline: "Activez vos clients en 48 heures, pas 14 jours",
    desc: "Parcours d'activation guidé par IA — checklists dynamiques, rappels et coaching produit.",
    url: "http://187.124.167.18:3010",
    accent: "#84cc16",
    bg: "#f7fee7",
    cat: "Activation client",
  },
  {
    name: "CallNotes",
    tagline: "Vos appels structurés. Actions générées en 60s.",
    desc: "Transcription → résumé → CRM update → relance planifiée. Automatiquement après chaque call.",
    url: "http://187.124.167.18:3011",
    accent: "#64748b",
    bg: "#f8fafc",
    cat: "Sales IA",
  },
  {
    name: "DataVoice",
    tagline: "Posez une question. Obtenez un insight.",
    desc: "Interface vocale et textuelle sur vos bases de données — SQL généré, graphique livré.",
    url: "http://187.124.167.18:3012",
    accent: "#0891b2",
    bg: "#f0fdff",
    cat: "BI conversationnelle",
  },
  // ── Reporting & Forecasting ────────────────────────────────────────────────
  {
    name: "Reportly",
    tagline: "Vos KPIs. Chaque lundi. Automatiquement.",
    desc: "Agrégation multi-sources, narration IA et distribution Slack/email sans configuration.",
    url: "http://187.124.167.18:3013",
    accent: "#7c3aed",
    bg: "#ede9fe",
    cat: "Reporting IA",
  },
  {
    name: "ForecastIQ",
    tagline: "Anticipez les pannes de revenus avant qu'elles arrivent",
    desc: "Modèles prédictifs sur vos séries temporelles — anomalies, tendances, alertes proactives.",
    url: "http://187.124.167.18:3014",
    accent: "#059669",
    bg: "#ecfdf5",
    cat: "Prévisions IA",
  },
  // ── CRM & Data ─────────────────────────────────────────────────────────────
  {
    name: "NexusCRM",
    tagline: "Votre CRM piloté par 5 agents IA",
    desc: "Enrichissement, scoring, séquences et reporting — CRM intelligent clé-en-main.",
    url: "http://187.124.167.18:3015",
    accent: "#dc2626",
    bg: "#fef2f2",
    cat: "CRM IA",
  },
  {
    name: "Semantiq",
    tagline: "La recherche qui comprend ce que vous cherchez",
    desc: "Moteur vectoriel Gemini Embeddings — résultats sémantiques sur catalogue ou base de connaissances.",
    url: "http://187.124.167.18:3016",
    accent: "#2563eb",
    bg: "#eff6ff",
    cat: "Recherche sémantique",
  },
  {
    name: "PersonaAI",
    tagline: "Chaque client reçoit l'offre faite pour lui",
    desc: "Segmentation comportementale IA et recommandations personnalisées en temps réel.",
    url: "http://187.124.167.18:3017",
    accent: "#c026d3",
    bg: "#fdf4ff",
    cat: "Recommandation IA",
  },
  {
    name: "DataStream",
    tagline: "Vos données propres. En temps réel. Sans équipe data.",
    desc: "Pipelines ETL/ELT automatisés, validation IA et livraison continue vers vos outils.",
    url: "http://187.124.167.18:3018",
    accent: "#0284c7",
    bg: "#f0f9ff",
    cat: "Data pipeline IA",
  },
  {
    name: "ModelOps",
    tagline: "Fine-tuning & déploiement de modèles IA en 48h",
    desc: "MLOps complet — versioning, A/B testing, monitoring et retraining automatique.",
    url: "http://187.124.167.18:3019",
    accent: "#7c3aed",
    bg: "#f5f3ff",
    cat: "MLOps",
  },
  // ── Document & Vision ──────────────────────────────────────────────────────
  {
    name: "DocExtract",
    tagline: "Vos documents lisibles par vos systèmes en 5s",
    desc: "OCR + LLM — extraction structurée de factures, contrats, formulaires vers JSON/CSV.",
    url: "http://187.124.167.18:3020",
    accent: "#d97706",
    bg: "#fffbeb",
    cat: "OCR / Extraction IA",
  },
  {
    name: "DetectVision",
    tagline: "Votre caméra voit. Notre IA comprend.",
    desc: "Détection d'objets, anomalies et comportements sur flux vidéo en temps réel.",
    url: "http://187.124.167.18:3021",
    accent: "#16a34a",
    bg: "#f0fdf4",
    cat: "Vision temps réel",
  },
  {
    name: "BIMFlow",
    tagline: "Votre maquette numérique analysée automatiquement",
    desc: "Analyse IFC/BIM par IA — conflits, métrés, reporting chantier automatisé.",
    url: "http://187.124.167.18:3022",
    accent: "#0369a1",
    bg: "#e0f2fe",
    cat: "BIM IA",
  },
  {
    name: "GeoMapAI",
    tagline: "Données terrain → décisions en quelques secondes",
    desc: "Intelligence géospatiale — clustering, heatmaps et alertes sur vos données terrain.",
    url: "http://187.124.167.18:3023",
    accent: "#15803d",
    bg: "#f0fdf4",
    cat: "Géospatial IA",
  },
  // ── UX, Apps & Web ─────────────────────────────────────────────────────────
  {
    name: "UXForge",
    tagline: "1 000 retours utilisateurs analysés en 10 minutes",
    desc: "Thématisation automatique de verbatims, NPS IA et roadmap suggestions prioritisées.",
    url: "http://187.124.167.18:3024",
    accent: "#e11d48",
    bg: "#fff1f2",
    cat: "UX Research IA",
  },
  {
    name: "AppCraft",
    tagline: "Créez vos apps internes en 24h — sans code",
    desc: "Générateur d'interfaces métier IA — formulaires, tableaux, workflows visuels.",
    url: "http://187.124.167.18:3025",
    accent: "#7e22ce",
    bg: "#faf5ff",
    cat: "No-code IA",
  },
  {
    name: "PerfOptiq",
    tagline: "Détectez les goulots d'étranglement avant qu'ils coûtent",
    desc: "APM IA — profiling continu, alertes proactives et recommandations d'optimisation.",
    url: "http://187.124.167.18:3026",
    accent: "#b45309",
    bg: "#fffbeb",
    cat: "Performance IA",
  },
  {
    name: "SeoWave",
    tagline: "100 articles SEO livrés chaque mois automatiquement",
    desc: "Audit technique, clustering sémantique, rédaction IA et publication planifiée.",
    url: "http://187.124.167.18:3027",
    accent: "#0f766e",
    bg: "#f0fdfa",
    cat: "SEO IA",
  },
  // ── Edge, IoT & Industrial ─────────────────────────────────────────────────
  {
    name: "EdgeAI",
    tagline: "L'IA qui tourne sans internet.",
    desc: "Inférence embarquée ONNX/TensorRT — déploiement OTA, monitoring flotte, alertes locales.",
    url: "http://187.124.167.18:3028",
    accent: "#1d4ed8",
    bg: "#eff6ff",
    cat: "Edge computing IA",
  },
  {
    name: "IoTWatch",
    tagline: "10 000 capteurs. 1 dashboard. 0 alerte manquée.",
    desc: "Ingestion MQTT/Modbus/LoRaWAN, TimescaleDB, anomalies Isolation Forest et RUL Prophet.",
    url: "http://187.124.167.18:3029",
    accent: "#0891b2",
    bg: "#ecfeff",
    cat: "IoT monitoring",
  },
  {
    name: "VisionCam",
    tagline: "Contrôle qualité visuel automatisé sur ligne",
    desc: "YOLOv8 + OpenCV — détection de défauts en temps réel, SPC Shewhart, rejet GPIO.",
    url: "http://187.124.167.18:3030",
    accent: "#7c3aed",
    bg: "#f5f3ff",
    cat: "Vision industrielle",
  },
  {
    name: "MaintainIQ",
    tagline: "Zéro panne imprévue. 72h d'avance garanties.",
    desc: "GMAO IA — diagnostic Groq LLM, optimisation tournées OR-Tools, stock prédictif Prophet.",
    url: "http://187.124.167.18:3031",
    accent: "#b45309",
    bg: "#fef9c3",
    cat: "Maintenance prédictive",
  },
  // ── Plateformes full-stack ──────────────────────────────────────────────────
  {
    name: "ProductSearch",
    tagline: "Recherchez vos produits par texte ou par image",
    desc: "FastAPI + React + Gemini Embeddings 3072-dim — moteur vectoriel e-commerce en production.",
    url: "http://187.124.167.18:3049",
    accent: "#4f46e5",
    bg: "#eef2ff",
    cat: "Recherche produit IA",
  },
  {
    name: "PrestaSearch",
    tagline: "Trouvez le bon prestataire en une phrase",
    desc: "Matching sémantique prestataires — Gemini Flash 2.5 image→texte, Groq LLaMA 3.3 70B.",
    url: "http://187.124.167.18:3050",
    accent: "#d97706",
    bg: "#fffbeb",
    cat: "Matching prestataires",
  },
  {
    name: "BI Wikolabs",
    tagline: "Pilotez votre activité en posant une question",
    desc: "Chainlit + Groq + MongoDB + PostgreSQL pgvector — BI conversationnelle multi-source.",
    url: "http://187.124.167.18:3051",
    accent: "#0f766e",
    bg: "#f0fdfa",
    cat: "BI conversationnelle",
  },
  // ── ML / Data Science ──────────────────────────────────────────────────────
  {
    name: "FraudGuard",
    tagline: "Chaque transaction scorée. Fraude bloquée en 100ms.",
    desc: "Scoring de risque IA en temps réel — gradient boosting, device fingerprinting, 99.2% de précision.",
    url: "http://187.124.167.18:3034",
    accent: "#ef4444",
    bg: "#fef2f2",
    cat: "Détection de fraude",
  },
  {
    name: "ChurnPredict",
    tagline: "30 jours d'avance sur le départ de vos clients",
    desc: "ML prédictif sur CRM — score churn quotidien, signaux comportementaux, playbooks de rétention.",
    url: "http://187.124.167.18:3035",
    accent: "#f97316",
    bg: "#fff7ed",
    cat: "Prédiction churn",
  },
  {
    name: "RAG AI",
    tagline: "Posez une question. Obtenez une réponse sourcée.",
    desc: "RAG sur vos documents internes — embeddings haute dimension, 0 hallucination, RGPD conforme.",
    url: "http://187.124.167.18:3036",
    accent: "#8b5cf6",
    bg: "#f5f3ff",
    cat: "RAG & Knowledge Base",
  },
  {
    name: "RecSys",
    tagline: "+40% de conversion grâce aux recommandations IA",
    desc: "Moteur de recommandation collaboratif & content-based — personnalisation temps réel, A/B testing intégré.",
    url: "http://187.124.167.18:3037",
    accent: "#10b981",
    bg: "#ecfdf5",
    cat: "Recommandation IA",
  },
  {
    name: "SentimentLive",
    tagline: "Votre réputation surveillée. Alertes en 60 secondes.",
    desc: "Monitoring de sentiment multi-canal 24h/24 — 50+ sources, détection de crise, NPS automatique.",
    url: "http://187.124.167.18:3038",
    accent: "#0ea5e9",
    bg: "#f0f9ff",
    cat: "Analyse de sentiment",
  },
  {
    name: "AgentFlow",
    tagline: "Orchestrez vos agents IA visuellement",
    desc: "Pipelines d'agents IA drag-and-drop — 50+ connecteurs, monitoring temps réel, déploiement en 10 minutes.",
    url: "http://187.124.167.18:3039",
    accent: "#6366f1",
    bg: "#eef2ff",
    cat: "Orchestration IA",
  },
  {
    name: "CausalAI",
    tagline: "Comprenez pourquoi. Pas seulement quoi.",
    desc: "IA causale — graphes auto-découverts, simulations counterfactuelles et recommandations d'actions prouvées.",
    url: "http://187.124.167.18:3040",
    accent: "#14b8a6",
    bg: "#f0fdfa",
    cat: "IA causale",
  },
  {
    name: "EntityResolution",
    tagline: "Un client = un profil. Toujours. À l'échelle.",
    desc: "Déduplication et matching ML 99.3% de précision — golden record unifié sur bases hétérogènes.",
    url: "http://187.124.167.18:3041",
    accent: "#f59e0b",
    bg: "#fffbeb",
    cat: "Déduplication ML",
  },
  {
    name: "ImageGen",
    tagline: "Votre identité visuelle. À l'infini. Automatiquement.",
    desc: "Pipeline de génération d'images IA brand-consistent — Flux/SDXL/DALL-E orchestrés, export direct.",
    url: "http://187.124.167.18:3042",
    accent: "#ec4899",
    bg: "#fdf2f8",
    cat: "Génération d'images IA",
  },
  {
    name: "MedicalIQA",
    tagline: "L'assistant médical IA qui cite toujours ses sources",
    desc: "QA médicale sur protocoles et guidelines — 0 hallucination, sources citées, hébergement HDS.",
    url: "http://187.124.167.18:3043",
    accent: "#3b82f6",
    bg: "#eff6ff",
    cat: "IA médicale",
  },
  {
    name: "GraphFraud",
    tagline: "La fraude organisée ne se cache plus dans votre graphe",
    desc: "Graph Neural Network — détection de communautés frauduleuses et d'anneaux de fraude organisée.",
    url: "http://187.124.167.18:3044",
    accent: "#f43f5e",
    bg: "#fff1f2",
    cat: "Fraude réseau GNN",
  },
  {
    name: "PricingRL",
    tagline: "+12% de revenus dès le premier mois",
    desc: "Pricing dynamique par reinforcement learning — prix optimal en <1ms, contraintes métier respectées.",
    url: "http://187.124.167.18:3045",
    accent: "#22c55e",
    bg: "#f0fdf4",
    cat: "Dynamic pricing RL",
  },
  {
    name: "SyntheticData",
    tagline: "Données illimitées. Conformes RGPD. Statistiquement fidèles.",
    desc: "Génération de données synthétiques tabular/texte — fidélité statistique 99%, zéro PII, certification RGPD.",
    url: "http://187.124.167.18:3046",
    accent: "#06b6d4",
    bg: "#ecfeff",
    cat: "Données synthétiques",
  },
  {
    name: "VoiceTranslate",
    tagline: "Parlez. Votre audience comprend. En direct.",
    desc: "Traduction vocale temps réel 40+ langues — ASR + traduction neurale + TTS, latence <500ms.",
    url: "http://187.124.167.18:3047",
    accent: "#7c3aed",
    bg: "#f5f3ff",
    cat: "Traduction vocale IA",
  },
  {
    name: "FineTuneDLM",
    tagline: "Votre LLM maison privé et souverain en 48h",
    desc: "Fine-tuning LoRA/QLoRA sur vos données — LLM déployé sur votre infrastructure, 10× moins cher.",
    url: "http://187.124.167.18:3048",
    accent: "#ea580c",
    bg: "#fff7ed",
    cat: "LLM fine-tuning",
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
          ? "49 projets Wikolabs — chacun sa codebase GitHub, son pipeline CI/CD et son URL en production."
          : "49 Wikolabs projects — each with its own GitHub codebase, CI/CD pipeline and live production URL."}
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
    </section>
  );
}
