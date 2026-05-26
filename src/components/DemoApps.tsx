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
    icon: "🔎",
    stack: ["Python", "FastAPI", "Gemini", "Groq LLaMA", "React"],
    title: "ProductSearch",
    tagline: "Recherche de produits multimodale par IA",
    desc: "Trouvez des produits par description naturelle ou par photo. Combinez texte et image pour des résultats ultra-pertinents. Propulsé par Gemini Embeddings et Groq LLaMA.",
    features: ["Recherche en langage naturel et par image", "Réponses conversationnelles avec cartes produit", "Ajout de produits avec recherche immédiate", "Embeddings Gemini 3072 dimensions"],
    url: "https://productsearch.wikolabs.com/",
    live: true,
    screenshot: "/screenshots/productsearch.png",
  },
  {
    icon: "🏢",
    stack: ["Python", "FastAPI", "Gemini Vision", "Groq", "Docker"],
    title: "PrestaSearch",
    tagline: "Recherche sémantique de prestataires",
    desc: "Trouvez le bon prestataire de services en décrivant votre besoin ou en envoyant une photo. L'IA comprend votre contexte et vous propose les profils les plus adaptés.",
    features: ["Recherche par texte libre ou par image", "Analyse visuelle Gemini Flash pour la photo", "Chat IA avec streaming en temps réel", "Gestion des prestataires avec admin intégré"],
    url: "https://prestasearch.wikolabs.com/",
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
    url: "https://bi.wikolabs.com/",
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
];

const i18n = {
  fr: {
    tag: "Solutions en production",
    title: "Des solutions réelles,",
    titleEm: "déployées aujourd'hui",
    desc: "Applications interactives et outils métiers — chacun avec son code source, son CI/CD et son infrastructure. Voyez ce que l'IA peut faire pour votre entreprise.",
    liveLabel: "En ligne",
    btnDemo: "Voir en direct →",
    btnMore: "En savoir plus",
    comingSoon: "24 solutions supplémentaires en cours de développement",
    comingBadge: "Bientôt disponibles",
  },
  en: {
    tag: "Solutions in production",
    title: "Real solutions,",
    titleEm: "deployed today",
    desc: "Interactive apps and business tools — each with its own codebase, CI/CD pipeline, and infrastructure. See what AI can do for your business.",
    liveLabel: "Live",
    btnDemo: "See live →",
    btnMore: "Learn more",
    comingSoon: "24 additional solutions in development",
    comingBadge: "Coming soon",
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
      <section id="demos" className={styles.demo}>
        <div className={`reveal ${styles.sectionTag}`}>
          <span className={styles.sectionTagLine} />
          {t.tag}
        </div>
        <h2 className={`reveal d1 ${styles.sectionTitle}`}>
          {t.title} <em>{t.titleEm}</em>
        </h2>
        <p className={`reveal d2 ${styles.sectionDesc}`}>{t.desc}</p>

        <div className={`${styles.grid} ${styles.gridOffers}`}>
          {APPS.map((app, i) => renderCard(app, i))}
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
