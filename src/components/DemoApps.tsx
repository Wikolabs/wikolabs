"use client";

import { useState } from "react";
import styles from "./DemoApps.module.css";

interface App {
  icon: string;
  stack: string[];
  title: string;
  tagline: string;
  desc: string;
  features: string[];
  url: string;
  live: boolean;
  screenshot: string;
  cat?: string;
}

const APPS: App[] = [
  {
    icon: "📡",
    cat: "Intelligence marché",
    stack: ["Python", "LangChain", "Slack API", "Next.js"],
    title: "PulseScope",
    tagline: "Veille marché 24h/24 dans votre Slack",
    desc: "Surveillance concurrentielle automatisée — 50+ sources, synthèse IA à 8h chaque matin. Zéro intervention humaine.",
    features: ["Veille multi-sources (web, LinkedIn, RSS)", "Synthèse IA quotidienne à 8h", "Alertes instantanées sur signaux critiques"],
    url: "http://187.124.167.18:3001",
    live: true,
    screenshot: "/screenshots/pulsescope.png",
  },
  {
    icon: "⚡",
    cat: "Prospection B2B",
    stack: ["Python", "Apollo", "GPT-4o", "HubSpot"],
    title: "LeadForge",
    tagline: "300 prospects qualifiés livrés chaque lundi",
    desc: "Sourcing ICP automatisé — enrichissement, scoring BANT, 94% d'emails valides. Votre pipeline se remplit sans intervention.",
    features: ["Scoring ICP automatique A/B/C", "94% d'emails vérifiés", "Sync CRM quotidien"],
    url: "http://187.124.167.18:3002",
    live: true,
    screenshot: "/screenshots/leadforge.png",
  },
  {
    icon: "📢",
    cat: "Outreach multicanal",
    stack: ["Python", "Lemlist", "LinkedIn API", "Twilio"],
    title: "ReachWave",
    tagline: "Séquences Email · LinkedIn · SMS automatisées",
    desc: "Outreach multicanal orchestré — ×3 sur le taux de réponse en 72h. Personnalisation IA par profil.",
    features: ["3 canaux orchestrés en parallèle", "×3 taux de réponse moyen", "Premiers retours en 72h"],
    url: "http://187.124.167.18:3003",
    live: true,
    screenshot: "/screenshots/reachwave.png",
  },
  {
    icon: "✅",
    cat: "Qualification IA",
    stack: ["Python", "Whisper", "GPT-4o", "Salesforce"],
    title: "ScoreFlow",
    tagline: "80% des prospects qualifiés sans intervention",
    desc: "Scoring BANT IA et routing automatique — votre closer ne voit que les deals chauds. Pipeline propre, prévisions fiables.",
    features: ["Scoring BANT en temps réel", "Routing automatique HOT/COLD", "Pipeline CRM toujours à jour"],
    url: "http://187.124.167.18:3004",
    live: true,
    screenshot: "/screenshots/scoreflow.png",
  },
  {
    icon: "📅",
    cat: "Prise de RDV",
    stack: ["Next.js", "Calendly API", "GPT-4o", "Notion"],
    title: "BookLync",
    tagline: "Votre agenda rempli. Automatiquement.",
    desc: "Détection d'intention → 3 créneaux → confirmation → brief pré-call. De l'intention à la réunion en moins de 4 minutes.",
    features: ["Détection d'intention automatique", "+65% de RDV vs formulaire", "92% de taux de présence"],
    url: "http://187.124.167.18:3005",
    live: true,
    screenshot: "/screenshots/booklync.png",
  },
  {
    icon: "✍️",
    cat: "Proposition commerciale",
    stack: ["Python", "GPT-4o", "DocuSign", "WeasyPrint"],
    title: "PropGenAI",
    tagline: "De la discovery au contrat signé en 48h",
    desc: "Notes de call → proposition PDF → DocuSign. Relance automatique jusqu'à signature. −90% de temps de rédaction.",
    features: ["PDF professionnel en 5 minutes", "Envoi & suivi DocuSign auto", "Relances jusqu'à signature"],
    url: "http://187.124.167.18:3006",
    live: true,
    screenshot: "/screenshots/propgenai.png",
  },
  {
    icon: "🛡️",
    cat: "Rétention client",
    stack: ["Python", "Mixpanel", "GPT-4o", "HubSpot"],
    title: "RetainIQ",
    tagline: "75% du churn détecté avant qu'il se produise",
    desc: "Monitoring comportemental continu, scoring churn IA et séquences de réengagement personnalisées. €42k de MRR sauvé/mois en moyenne.",
    features: ["75% du churn détecté à l'avance", "Réengagement automatique", "ROI ×3 au premier trimestre"],
    url: "http://187.124.167.18:3007",
    live: true,
    screenshot: "/screenshots/retainiq.png",
  },
  {
    icon: "🤝",
    cat: "Support client IA",
    stack: ["Python", "RAG", "GPT-4o", "Zendesk"],
    title: "HelpiqAI",
    tagline: "Support client IA — résolution en moins de 30 secondes",
    desc: "Agent IA de support client qui répond aux tickets en langage naturel, escalade les cas complexes et apprend de chaque interaction.",
    features: ["Résolution automatique de 80% des tickets", "Base de connaissance RAG auto-mise à jour"],
    url: "http://187.124.167.18:3008",
    live: true,
    screenshot: "/screenshots/helpiqai.png",
  },
  {
    icon: "🎯",
    cat: "Triage & priorisation",
    stack: ["Python", "GPT-4o", "Jira", "Slack"],
    title: "TriageIQ",
    tagline: "Priorisez 100% de vos tickets sans effort humain",
    desc: "Triage automatique des incidents et demandes — classification, priorité SLA, assignation et escalade sans intervention manuelle.",
    features: ["Classification et priorité SLA automatiques", "Assignation intelligente par compétences"],
    url: "http://187.124.167.18:3009",
    live: true,
    screenshot: "/screenshots/triageiq.png",
  },
  {
    icon: "🚀",
    cat: "Onboarding client",
    stack: ["Next.js", "GPT-4o", "Notion", "Slack"],
    title: "OnboardAI",
    tagline: "Onboarding client de 14 jours → 48 heures",
    desc: "Automatise chaque étape de l'onboarding client — checklist personnalisée, formations IA, suivi de progression et alertes décrochage.",
    features: ["Onboarding personnalisé par segment client", "−90% de time-to-value"],
    url: "http://187.124.167.18:3010",
    live: true,
    screenshot: "/screenshots/onboardai.png",
  },
  {
    icon: "📞",
    cat: "Intelligence commerciale",
    stack: ["Python", "Whisper", "GPT-4o", "HubSpot"],
    title: "CallNotes",
    tagline: "Chaque appel client transcrit, résumé et synchronisé en CRM",
    desc: "Transcription et analyse IA de vos appels — BANT extrait automatiquement, prochaines actions détectées, CRM mis à jour sans saisie manuelle.",
    features: ["Transcription temps réel multilingue", "Extraction BANT et actions auto"],
    url: "http://187.124.167.18:3011",
    live: true,
    screenshot: "/screenshots/callnotes.png",
  },
  {
    icon: "🎙️",
    cat: "Analytics vocaux",
    stack: ["Python", "Whisper", "Plotly", "FastAPI"],
    title: "DataVoice",
    tagline: "Interrogez vos données en parlant, obtenez un graphique",
    desc: "Interface vocale vers vos données — posez une question en français, recevez un graphique interactif. Zéro SQL, zéro dashboard à configurer.",
    features: ["Requêtes vocales vers SQL vers graphique", "Graphiques Plotly interactifs en temps réel"],
    url: "http://187.124.167.18:3012",
    live: true,
    screenshot: "/screenshots/datavoice.png",
  },
  {
    icon: "📰",
    cat: "Reporting automatisé",
    stack: ["Python", "GPT-4o", "WeasyPrint", "Notion"],
    title: "Reportly",
    tagline: "Rapports hebdomadaires générés et envoyés automatiquement",
    desc: "Génère, formate et envoie vos rapports métier chaque semaine sans intervention — données fraîches, mise en page pro, distribution automatique.",
    features: ["Rapports PDF pro générés en 2 minutes", "Distribution email et Slack automatique"],
    url: "http://187.124.167.18:3013",
    live: true,
    screenshot: "/screenshots/reportly.png",
  },
  {
    icon: "📊",
    cat: "Prévision IA",
    stack: ["Python", "Prophet", "GPT-4o", "Plotly"],
    title: "ForecastIQ",
    tagline: "Prévisions de ventes et stocks à 90 jours — sans data scientist",
    desc: "Modèles de prévision IA entraînés sur vos données historiques. Anticipe la demande, optimise les stocks, réduit les ruptures et le sur-stockage.",
    features: ["Prévisions à 90 jours avec intervalles de confiance", "Alertes stock critique automatiques"],
    url: "http://187.124.167.18:3014",
    live: true,
    screenshot: "/screenshots/forecastiq.png",
  },
  {
    icon: "🧩",
    cat: "CRM intelligent",
    stack: ["Python", "GPT-4o", "Salesforce", "HubSpot"],
    title: "NexusCRM",
    tagline: "5 agents IA pilotent votre CRM en continu",
    desc: "Enrichissement automatique, scoring prédictif, détection d'opportunités, relances intelligentes et reporting — votre CRM s'auto-gère.",
    features: ["5 agents IA spécialisés en parallèle", "Enrichissement et scoring en temps réel"],
    url: "http://187.124.167.18:3015",
    live: true,
    screenshot: "/screenshots/nexuscrm.png",
  },
  {
    icon: "🧠",
    cat: "Recherche sémantique",
    stack: ["Python", "Embeddings", "pgvector", "FastAPI"],
    title: "Semantiq",
    tagline: "Recherche sémantique sur vos documents internes",
    desc: "Moteur de recherche IA sur vos bases documentaires — comprend le sens, pas juste les mots-clés. Réponses sourcées en moins de 2 secondes.",
    features: ["Recherche par sens sur 1M+ documents", "Réponses sourcées avec extraits précis"],
    url: "http://187.124.167.18:3016",
    live: true,
    screenshot: "/screenshots/semantiq.png",
  },
  {
    icon: "👤",
    cat: "Personnalisation IA",
    stack: ["Python", "GPT-4o", "Segment", "Braze"],
    title: "PersonaAI",
    tagline: "Personnalisation 1-to-1 pour chaque utilisateur",
    desc: "Construit des personas dynamiques pour chaque client et personnalise emails, contenu et offres en temps réel selon le comportement observé.",
    features: ["Personas dynamiques mis à jour en temps réel", "Personnalisation email, push et in-app"],
    url: "http://187.124.167.18:3017",
    live: true,
    screenshot: "/screenshots/personaai.png",
  },
  {
    icon: "🌊",
    cat: "Data streaming",
    stack: ["Python", "Kafka", "Flink", "ClickHouse"],
    title: "DataStream",
    tagline: "Pipeline de données temps réel — de la source au dashboard",
    desc: "Ingestion, transformation et visualisation de flux de données en temps réel. Kafka, Flink et ClickHouse orchestrés clé en main.",
    features: ["Ingestion multi-sources temps réel", "Latence < 100ms de la source au dashboard"],
    url: "http://187.124.167.18:3018",
    live: true,
    screenshot: "/screenshots/datastream.png",
  },
  {
    icon: "🤖",
    cat: "MLOps",
    stack: ["Python", "MLflow", "Docker", "FastAPI"],
    title: "ModelOps",
    tagline: "Fine-tuning, versioning et déploiement de modèles IA en 48h",
    desc: "Plateforme MLOps clé en main — fine-tunez vos LLMs, versionnez vos modèles, déployez en production et monitorez le drift sans data scientist dédié.",
    features: ["Fine-tuning LLM sur vos données en 48h", "Versioning Git-like et rollback en 1 clic"],
    url: "http://187.124.167.18:3019",
    live: true,
    screenshot: "/screenshots/modelops.png",
  },
  {
    icon: "📄",
    cat: "Extraction documentaire",
    stack: ["Python", "GPT-4o Vision", "FastAPI", "PostgreSQL"],
    title: "DocExtract",
    tagline: "Extrayez les données de n'importe quel document en secondes",
    desc: "OCR + IA Vision — factures, contrats, formulaires, relevés. Données extraites, validées et exportées vers votre système en moins de 10 secondes.",
    features: ["Extraction depuis PDF, image, scan", "99.2% de précision sur factures et contrats"],
    url: "http://187.124.167.18:3020",
    live: true,
    screenshot: "/screenshots/docextract.png",
  },
  {
    icon: "👁️",
    cat: "Vision par ordinateur",
    stack: ["Python", "YOLO", "OpenCV", "FastAPI"],
    title: "DetectVision",
    tagline: "Détection d'objets et d'anomalies sur vos flux vidéo",
    desc: "Détection temps réel d'objets, defauts qualité et anomalies sur vos flux caméra industriels. Intégration RTSP plug & play, alertes instantanées.",
    features: ["Détection temps réel sur flux RTSP", "Contrôle qualité automatisé en production"],
    url: "http://187.124.167.18:3021",
    live: true,
    screenshot: "/screenshots/detectvision.png",
  },
  {
    icon: "🏗️",
    cat: "BIM & Construction",
    stack: ["Python", "IFC.js", "GPT-4o", "Three.js"],
    title: "BIMFlow",
    tagline: "Analysez et interrogez vos maquettes BIM par IA",
    desc: "Importez vos fichiers IFC, posez des questions en langage naturel sur votre maquette et obtenez analyses de conflits, métrés et rapports automatiquement.",
    features: ["Analyse de conflits BIM automatisée", "Questions en langage naturel sur maquette IFC"],
    url: "http://187.124.167.18:3022",
    live: true,
    screenshot: "/screenshots/bimflow.png",
  },
  {
    icon: "🗺️",
    cat: "Intelligence géospatiale",
    stack: ["Python", "GeoPandas", "Mapbox", "GPT-4o"],
    title: "GeoMapAI",
    tagline: "Transformez vos données terrain en décisions stratégiques",
    desc: "Analyse géospatiale IA — optimisation de territoire, planification logistique, cartographie concurrentielle et scoring de zones en temps réel.",
    features: ["Optimisation territoire et routes logistiques", "Cartographie concurrentielle par zone"],
    url: "http://187.124.167.18:3023",
    live: true,
    screenshot: "/screenshots/geomapai.png",
  },
  {
    icon: "🎨",
    cat: "Recherche UX",
    stack: ["Python", "GPT-4o", "Hotjar", "Typeform"],
    title: "UXForge",
    tagline: "Analysez 1 000 retours utilisateurs en 10 minutes",
    desc: "Analyse IA de feedback UX multi-sources — détection automatique des friction points, priorisation par impact et recommandations actionnables.",
    features: ["Analyse de feedback multi-source en 10 minutes", "Détection automatique des friction points"],
    url: "http://187.124.167.18:3024",
    live: true,
    screenshot: "/screenshots/uxforge.png",
  },
  {
    icon: "⚙️",
    cat: "Apps internes",
    stack: ["Next.js", "GPT-4o", "Airtable", "Notion"],
    title: "AppCraft",
    tagline: "Créez vos apps internes en 24h, sans une ligne de code",
    desc: "Décrivez votre app en langage naturel — formulaires, tableaux, workflows CRUD générés et déployés en 24h avec 50+ connecteurs natifs.",
    features: ["App fonctionnelle en 24h depuis une description", "50+ connecteurs (Notion, Slack, Salesforce...)"],
    url: "http://187.124.167.18:3025",
    live: true,
    screenshot: "/screenshots/appcraft.png",
  },
  {
    icon: "⚡",
    cat: "Performance app",
    stack: ["Python", "eBPF", "ClickHouse", "Grafana"],
    title: "PerfOptiq",
    tagline: "−32% de latence en 48h — détection IA des bottlenecks",
    desc: "APM sans agent — profiling continu eBPF, root cause analysis automatique et suggestions de fix IA. Zéro instrumentation manuelle.",
    features: ["Profiling continu sans agent (eBPF)", "Root cause analysis et fix suggérés par IA"],
    url: "http://187.124.167.18:3026",
    live: true,
    screenshot: "/screenshots/perfoptiq.png",
  },
  {
    icon: "📈",
    cat: "SEO automatisé",
    stack: ["Python", "GPT-4o", "WordPress", "Ahrefs"],
    title: "SEOWave",
    tagline: "100 articles SEO livrés chaque mois, automatiquement",
    desc: "Machine à contenu SEO — recherche de mots-clés IA, rédaction E-E-A-T, publication automatique et monitoring de ranking. +340% de trafic en 6 mois.",
    features: ["+340% de trafic organique en 6 mois", "100 articles/mois, 0 rédacteur nécessaire"],
    url: "http://187.124.167.18:3027",
    live: true,
    screenshot: "/screenshots/seowave.png",
  },
  {
    icon: "🔬",
    cat: "Edge AI",
    stack: ["Python", "TensorFlow Lite", "MQTT", "Docker"],
    title: "EdgeAI",
    tagline: "Inférence IA directement sur vos équipements terrain",
    desc: "Déployez des modèles IA légers sur vos dispositifs edge — Raspberry Pi, Jetson, PLC industriels. Inférence locale, zéro latence cloud.",
    features: ["Modèles IA optimisés pour CPU/GPU embarqué", "Déploiement OTA sur flotte de devices"],
    url: "http://187.124.167.18:3028",
    live: true,
    screenshot: "/screenshots/edgeai.png",
  },
  {
    icon: "📡",
    cat: "Monitoring IoT",
    stack: ["Python", "MQTT", "InfluxDB", "Grafana"],
    title: "IoTWatch",
    tagline: "Supervisez 10 000 capteurs IoT depuis un seul dashboard",
    desc: "Plateforme IoT clé en main — collecte MQTT, stockage time-series, alertes intelligentes et dashboards temps réel pour flottes de capteurs industriels.",
    features: ["10 000+ capteurs supervisés en temps réel", "Alertes intelligentes avec corrélation automatique"],
    url: "http://187.124.167.18:3029",
    live: true,
    screenshot: "/screenshots/iotwatch.png",
  },
  {
    icon: "📷",
    cat: "Surveillance intelligente",
    stack: ["Python", "YOLO", "OpenCV", "RTSP"],
    title: "VisionCam",
    tagline: "99.7% de précision — vos caméras existantes deviennent intelligentes",
    desc: "Analyse vidéo IA sur flux RTSP existants — intrusion, foule, incendie, plaques d'immatriculation. Plug & play sur caméras IP, alertes instantanées.",
    features: ["Plug & play sur caméras RTSP existantes", "99.7% précision, −94% de faux positifs"],
    url: "http://187.124.167.18:3030",
    live: true,
    screenshot: "/screenshots/visioncam.png",
  },
  {
    icon: "🔧",
    cat: "Maintenance prédictive",
    stack: ["Python", "IoT", "Prophet", "FastAPI"],
    title: "MaintainIQ",
    tagline: "Zéro panne imprévue — 72h d'avance garanties",
    desc: "Analyse vibratoire, thermique et électrique de vos machines industrielles. L'IA prédit les défaillances 72h à l'avance et planifie la maintenance automatiquement.",
    features: ["Prédiction de panne 72h à l'avance", "−40% de coûts de maintenance en 6 mois"],
    url: "http://187.124.167.18:3031",
    live: true,
    screenshot: "/screenshots/maintainiq.png",
  },
  {
    icon: "🛍️",
    stack: ["Python", "FastAPI", "Gemini", "Groq LLaMA", "React"],
    title: "Botsika.com",
    tagline: "Recherche de produits multimodale par IA",
    desc: "Trouvez des produits par description naturelle ou par photo. Combinez texte et image pour des résultats ultra-pertinents. Propulsé par Gemini Embeddings et Groq LLaMA.",
    features: ["Recherche en langage naturel et par image", "Réponses conversationnelles avec cartes produit", "Ajout de produits avec recherche immédiate", "Embeddings Gemini 3072 dimensions"],
    url: "http://187.124.167.18:3049",
    live: true,
    screenshot: "/screenshots/productsearch.png",
  },
  {
    icon: "🔍",
    stack: ["Python", "FastAPI", "Gemini Vision", "Groq", "Docker"],
    title: "Karohy.mg",
    tagline: "Trouvez le bon prestataire en quelques secondes",
    desc: "Décrivez votre besoin ou envoyez une photo — l'IA trouve les prestataires les plus adaptés à votre contexte. Recherche sémantique + vision, streaming en temps réel.",
    features: ["Recherche par texte libre ou par image", "Analyse visuelle Gemini Flash pour la photo", "Chat IA avec streaming en temps réel", "Gestion des prestataires avec admin intégré"],
    url: "http://187.124.167.18:3050",
    live: true,
    screenshot: "/screenshots/prestasearch.png",
  },
  {
    icon: "📈",
    stack: ["Groq LLM", "MongoDB", "pgvector", "Chainlit", "Plotly"],
    title: "BI Wikolabs",
    tagline: "Agent BI en langage naturel",
    desc: "Posez vos questions business en français et obtenez des graphiques interactifs, analyses et rapports exportables — sans SQL, sans analyste intermédiaire.",
    features: ["Questions business en langage naturel → SQL → graphique", "Décomposition de questions complexes automatique", "Correction automatique des requêtes (3 tentatives)", "Export Excel et PDF des résultats"],
    url: "http://187.124.167.18:3051",
    live: true,
    screenshot: "/screenshots/bi-wikolabs.png",
  },
  {
    icon: "🏥",
    stack: ["Next.js 15", "NestJS", "Flutter", "Socket.IO", "AI"],
    title: "MediWyz",
    tagline: "Plateforme de santé digitale multi-pays",
    desc: "Plateforme SaaS multi-pays connectant patients et 17+ types de prestataires de santé en Afrique. Vidéo WebRTC, OCR médical, assistant IA santé et moteur de workflow configurable.",
    features: ["Consultations vidéo WebRTC temps réel", "Vérification des licences médicales par OCR", "Assistant santé IA personnalisé (RAG)", "Paiement mobile intégré (MCB Juice)"],
    url: "https://mediwyz.com/",
    live: true,
    screenshot: "/screenshots/mediwyz.png",
  },
  {
    icon: "🚗",
    cat: "Marketplace IA",
    stack: ["Python", "FastAPI", "Gemini", "Groq LLaMA", "React"],
    title: "okaiz.com",
    tagline: "Achetez et vendez des véhicules d'occasion en toute confiance",
    desc: "Marketplace IA de véhicules d'occasion à Madagascar — estimation de prix instantanée, annonces vérifiées par vision IA, recherche par description naturelle ou par photo.",
    features: ["Estimation prix IA en 2 secondes", "Annonces vérifiées par vision IA", "Recherche par texte ou photo"],
    url: "http://187.124.167.18:3052",
    live: true,
    screenshot: "/screenshots/okaiz.png",
  },
  {
    icon: "🔮",
    cat: "Conseil IA",
    stack: ["Python", "FastAPI", "Groq LLaMA", "Big Data", "React"],
    title: "Piskid.com",
    tagline: "Assez des arnaques — place au big data pour une vraie vision",
    desc: "Agent IA inspiré du mpisikidy malgache. Analyse big data pour conseiller les Malgaches sur famille, finances, opportunités et protection contre les arnaques religieuses.",
    features: ["Analyse passé-présent-futur multi-source", "Protection anti-arnaques, conseils en malagasy et français"],
    url: "http://187.124.167.18:3053",
    live: true,
    screenshot: "/screenshots/piskid.png",
  },
  {
    icon: "👗",
    cat: "Marketplace IA",
    stack: ["Python", "FastAPI", "Gemini", "Groq LLaMA", "React"],
    title: "Firipy",
    tagline: "La friperie malgache réinventée par l'IA",
    desc: "Marketplace IA de vêtements de seconde main à Madagascar — cherchez par photo de style, obtenez un prix juste automatique et des recommandations personnalisées.",
    features: ["Recherche par photo de style", "Estimation prix automatique par l'IA"],
    url: "http://187.124.167.18:3054",
    live: true,
    screenshot: "/screenshots/firipy.png",
  },
];

const FLAGSHIP_TITLES = new Set(["Botsika.com", "Karohy.mg", "MediWyz", "okaiz.com", "Piskid.com", "Firipy"]);

const i18n = {
  fr: {
    tag: "Ils nous font confiance",
    title: "Projets livrés,",
    titleEm: "accessibles en ligne",
    desc: "Des solutions concrètes déployées pour nos clients — entrez, testez, voyez ce que l'IA fait pour eux.",
    liveLabel: "En ligne",
    btnDemo: "Voir en direct →",
    btnMore: "En savoir plus",
    comingSoon: "De nouvelles solutions chaque mois",
    comingBadge: "En continu",
  },
  en: {
    tag: "They trust us",
    title: "Delivered projects,",
    titleEm: "live online",
    desc: "Concrete solutions deployed for our clients — enter, test, see what AI does for them.",
    liveLabel: "Live",
    btnDemo: "See live →",
    btnMore: "Learn more",
    comingSoon: "New solutions ship every month",
    comingBadge: "Ongoing",
  },
};

export default function DemoApps({ locale }: { locale: string }) {
  const lang = locale === "en" ? "en" : "fr";
  const t = i18n[lang];
  const [selectedApp, setSelectedApp] = useState<App | null>(null);

  const renderCard = (app: App, i: number) => (
    <div key={app.title} className={`reveal d${Math.min((i % 4) + 1, 4)} ${styles.card}`}>
      <div className={styles.cardPreview}>
        <div className={styles.browserChrome}>
          <div className={styles.browserBar}>
            <div className={styles.browserDots}>
              <span className={styles.dotRed} />
              <span className={styles.dotYellow} />
              <span className={styles.dotGreen} />
            </div>
            <div className={styles.browserUrl}>
              {app.url.replace("https://", "").replace("http://", "")}
            </div>
          </div>
          <div className={styles.browserContent}>
            <img
              src={app.screenshot}
              alt={`${app.title} preview`}
              className={styles.screenshotImg}
              loading="lazy"
              draggable={false}
            />
          </div>
        </div>
        {app.live && (
          <div className={styles.liveBadge}>
            <div className={styles.liveDot} />
            {t.liveLabel}
          </div>
        )}
        {app.cat && (
          <div className={styles.catBadge}>
            {app.cat}
          </div>
        )}
      </div>

      <div className={styles.cardBody}>
        <div className={styles.cardStack}>
          {app.stack.slice(0, 3).map((s) => (
            <span key={s} className={styles.stackBadge}>{s}</span>
          ))}
        </div>
        <h3 className={styles.cardTitle}>{app.title}</h3>
        <p className={styles.cardDesc}>{app.tagline}</p>
        <div className={styles.cardFeatures}>
          {app.features.slice(0, 2).map((f) => (
            <div key={f} className={styles.feature}>
              <span className={styles.featureCheck}>✦</span>
              <span>{f}</span>
            </div>
          ))}
        </div>
        <div className={styles.cardActions}>
          <a href={app.url} target="_blank" rel="noopener noreferrer" className={styles.btnDemo}>
            {t.btnDemo}
          </a>
          <button className={styles.btnMore} onClick={() => setSelectedApp(app)}>
            {t.btnMore}
          </button>
        </div>
      </div>
    </div>
  );

  return (
    <>
      <section id="realisations" className={styles.demo}>
        <div className={`reveal ${styles.sectionTag}`}>
          <span className={styles.sectionTagLine} />
          {t.tag}
        </div>
        <h2 className={`reveal d1 ${styles.sectionTitle}`}>
          {t.title} <em>{t.titleEm}</em>
        </h2>
        <p className={`reveal d2 ${styles.sectionDesc}`}>{t.desc}</p>

        <div className={`${styles.grid} ${styles.gridOffers}`}>
          {APPS.filter(a => FLAGSHIP_TITLES.has(a.title)).map((app, i) => renderCard(app, i))}
        </div>

        <div className={`reveal d3 ${styles.comingRow}`}>
          <p>{t.comingSoon}</p>
          <span className={styles.comingBadge}>{t.comingBadge}</span>
        </div>
      </section>

      {selectedApp && (
        <div className={styles.modalOverlay} onClick={() => setSelectedApp(null)}>
          <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
            <button className={styles.modalClose} onClick={() => setSelectedApp(null)}>×</button>
            <div className={styles.cardStack} style={{ marginBottom: 12 }}>
              {selectedApp.stack.map((s) => (
                <span key={s} className={styles.stackBadge}>{s}</span>
              ))}
            </div>
            <h2 className={styles.modalTitle}>{selectedApp.icon} {selectedApp.title}</h2>
            <p className={styles.modalDesc}>{selectedApp.desc}</p>
            <div className={styles.modalSectionTitle}>
              {lang === "fr" ? "Fonctionnalités clés" : "Key features"}
            </div>
            <div className={styles.modalFeatureList}>
              {selectedApp.features.map((f) => (
                <div key={f} className={styles.modalFeature}>
                  <span className={styles.modalFeatureIcon}>✦</span>
                  <span>{f}</span>
                </div>
              ))}
            </div>
            <a href={selectedApp.url} target="_blank" rel="noopener noreferrer" className={styles.modalLink}>
              {lang === "fr" ? "Accéder en direct →" : "Access live →"}
            </a>
          </div>
        </div>
      )}
    </>
  );
}
