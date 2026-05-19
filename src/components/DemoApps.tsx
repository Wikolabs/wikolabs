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
}

const APPS: { fr: App[]; en: App[] } = {
  fr: [
    {
      icon: "🔎",
      stack: ["Python", "FastAPI", "Gemini", "Groq LLaMA", "React"],
      title: "ProductSearch",
      tagline: "Recherche de produits multimodale par IA",
      desc: "Trouvez des produits par description naturelle ou par photo. Combinez texte et image pour des résultats ultra-pertinents. Propulsé par Gemini Embeddings et Groq LLaMA.",
      features: [
        "Recherche en langage naturel et par image",
        "Réponses conversationnelles avec cartes produit",
        "Ajout de produits avec recherche immédiate",
        "Embeddings Gemini 3072 dimensions",
      ],
      url: "https://productsearch.wikolabs.com/",
      live: true,
    },
    {
      icon: "🏢",
      stack: ["Python", "FastAPI", "Gemini Vision", "Groq", "Docker"],
      title: "PrestaSearch",
      tagline: "Recherche sémantique de prestataires",
      desc: "Trouvez le bon prestataire de services en décrivant votre besoin ou en envoyant une photo. L'IA comprend votre contexte et vous propose les profils les plus adaptés.",
      features: [
        "Recherche par texte libre ou par image",
        "Analyse visuelle Gemini Flash pour la photo",
        "Chat IA avec streaming en temps réel",
        "Gestion des prestataires avec admin intégré",
      ],
      url: "https://prestasearch.wikolabs.com/",
      live: true,
    },
    {
      icon: "📈",
      stack: ["Groq LLM", "MongoDB", "pgvector", "Chainlit", "Plotly"],
      title: "BI Wikolabs",
      tagline: "Agent BI en langage naturel",
      desc: "Posez vos questions business en français et obtenez des graphiques interactifs, analyses et rapports exportables — sans SQL, sans analyste intermédiaire.",
      features: [
        "Questions business en langage naturel → SQL → graphique",
        "Décomposition de questions complexes automatique",
        "Correction automatique des requêtes (3 tentatives)",
        "Export Excel et PDF des résultats",
      ],
      url: "https://bi.wikolabs.com/",
      live: true,
    },
    {
      icon: "🏥",
      stack: ["Next.js 15", "NestJS", "Flutter", "Socket.IO", "AI"],
      title: "MediWyz",
      tagline: "Plateforme de santé digitale multi-pays",
      desc: "Plateforme SaaS multi-pays connectant patients et 17+ types de prestataires de santé en Afrique. Vidéo WebRTC, OCR médical, assistant IA santé et moteur de workflow configurable.",
      features: [
        "Consultations vidéo WebRTC temps réel",
        "Vérification des licences médicales par OCR",
        "Assistant santé IA personnalisé (RAG)",
        "Paiement mobile intégré (MCB Juice)",
      ],
      url: "https://mediwyz.com/",
      live: true,
    },
  ],
  en: [
    {
      icon: "🔎",
      stack: ["Python", "FastAPI", "Gemini", "Groq LLaMA", "React"],
      title: "ProductSearch",
      tagline: "Multimodal AI product search",
      desc: "Find products using natural language or photos. Combine text and image for highly relevant results. Powered by Gemini Embeddings and Groq LLaMA.",
      features: [
        "Natural language and image-based search",
        "Conversational responses with product cards",
        "Instant product addition and searchability",
        "Gemini embeddings (3072 dimensions)",
      ],
      url: "https://productsearch.wikolabs.com/",
      live: true,
    },
    {
      icon: "🏢",
      stack: ["Python", "FastAPI", "Gemini Vision", "Groq", "Docker"],
      title: "PrestaSearch",
      tagline: "Semantic provider search",
      desc: "Find the right service provider by describing your need or sending a photo. The AI understands your context and suggests the most relevant profiles.",
      features: [
        "Text or image-based free search",
        "Gemini Flash visual analysis for photos",
        "Real-time streaming AI chat",
        "Integrated provider management admin",
      ],
      url: "https://prestasearch.wikolabs.com/",
      live: true,
    },
    {
      icon: "📈",
      stack: ["Groq LLM", "MongoDB", "pgvector", "Chainlit", "Plotly"],
      title: "BI Wikolabs",
      tagline: "Natural language BI agent",
      desc: "Ask your business questions in plain English and get interactive charts, analyses, and exportable reports — no SQL, no analyst needed.",
      features: [
        "Natural language → MongoDB query → interactive chart",
        "Automatic compound question decomposition",
        "Self-correcting queries (up to 3 attempts)",
        "Excel and PDF export",
      ],
      url: "https://bi.wikolabs.com/",
      live: true,
    },
    {
      icon: "🏥",
      stack: ["Next.js 15", "NestJS", "Flutter", "Socket.IO", "AI"],
      title: "MediWyz",
      tagline: "Multi-country digital health platform",
      desc: "A multi-country SaaS platform connecting patients with 17+ provider types across Africa. WebRTC video, medical OCR, AI health assistant, and configurable workflow engine.",
      features: [
        "Real-time WebRTC video consultations",
        "Medical license verification via OCR",
        "Personalized AI health assistant (RAG)",
        "Integrated mobile payment (MCB Juice)",
      ],
      url: "https://mediwyz.com/",
      live: true,
    },
  ],
};

const i18n = {
  fr: {
    tag: "Plateforme de démos",
    title: "Découvrez nos solutions",
    titleEm: "en action",
    desc: "Des applications réelles, en production, accessibles immédiatement. Voyez par vous-même ce que l'IA peut faire pour votre entreprise.",
    liveLabel: "En production",
    btnDemo: "Accéder à la démo →",
    btnMore: "En savoir plus",
  },
  en: {
    tag: "Demo platform",
    title: "Discover our solutions",
    titleEm: "in action",
    desc: "Real applications, in production, accessible immediately. See for yourself what AI can do for your business.",
    liveLabel: "Live",
    btnDemo: "Access demo →",
    btnMore: "Learn more",
  },
};

export default function DemoApps({ locale }: { locale: string }) {
  const lang = locale === "en" ? "en" : "fr";
  const t = i18n[lang];
  const apps = APPS[lang];
  const [selectedApp, setSelectedApp] = useState<App | null>(null);

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

        <div className={styles.grid}>
          {apps.map((app, i) => (
            <div key={i} className={`reveal d${Math.min(i + 1, 4)} ${styles.card}`}>
              <div className={styles.cardPreview}>
                <div className={styles.previewFallback}>
                  <div className={styles.previewIcon}>{app.icon}</div>
                  <div className={styles.previewLabel}>{app.title}</div>
                </div>
                {app.live && (
                  <div className={styles.liveBadge}>
                    <div className={styles.liveDot} />
                    {t.liveLabel}
                  </div>
                )}
              </div>

              <div className={styles.cardBody}>
                <div className={styles.cardStack}>
                  {app.stack.slice(0, 3).map((s, j) => (
                    <span key={j} className={styles.stackBadge}>{s}</span>
                  ))}
                </div>
                <h3 className={styles.cardTitle}>{app.title}</h3>
                <p className={styles.cardDesc}>{app.tagline}</p>
                <div className={styles.cardFeatures}>
                  {app.features.slice(0, 2).map((f, j) => (
                    <div key={j} className={styles.feature}>
                      <span className={styles.featureCheck}>✦</span>
                      <span>{f}</span>
                    </div>
                  ))}
                </div>
                <div className={styles.cardActions}>
                  <a
                    href={app.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.btnDemo}
                  >
                    {t.btnDemo}
                  </a>
                  <button
                    className={styles.btnMore}
                    onClick={() => setSelectedApp(app)}
                  >
                    {t.btnMore}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {selectedApp && (
        <div className={styles.modalOverlay} onClick={() => setSelectedApp(null)}>
          <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
            <button className={styles.modalClose} onClick={() => setSelectedApp(null)}>
              ×
            </button>
            <div className={styles.cardStack} style={{ marginBottom: 12 }}>
              {selectedApp.stack.map((s, i) => (
                <span key={i} className={styles.stackBadge}>{s}</span>
              ))}
            </div>
            <h2 className={styles.modalTitle}>
              {selectedApp.icon} {selectedApp.title}
            </h2>
            <p className={styles.modalDesc}>{selectedApp.desc}</p>
            <div className={styles.modalSectionTitle}>
              {lang === "fr" ? "Fonctionnalités clés" : "Key features"}
            </div>
            <div className={styles.modalFeatureList}>
              {selectedApp.features.map((f, i) => (
                <div key={i} className={styles.modalFeature}>
                  <span className={styles.modalFeatureIcon}>✦</span>
                  <span>{f}</span>
                </div>
              ))}
            </div>
            <a
              href={selectedApp.url}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.modalLink}
            >
              {lang === "fr" ? "Accéder à la démo en direct →" : "Access live demo →"}
            </a>
          </div>
        </div>
      )}
    </>
  );
}
