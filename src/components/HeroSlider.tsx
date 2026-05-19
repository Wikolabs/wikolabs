"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import styles from "./HeroSlider.module.css";
import type { IconType } from "react-icons";
import {
  LuChartBar,
  LuMessageSquare,
  LuSearch,
  LuBrain,
  LuChartColumnIncreasing,
  LuFileText,
  LuNetwork,
  LuTrendingUp,
  LuCloud,
  LuDatabase,
  LuChevronLeft,
  LuChevronRight,
} from "react-icons/lu";

interface Slide {
  tag: string;
  headline: string;
  headlineEm: string;
  sub: string;
  Icon: IconType;
  color: string;
  imgSrc?: string;
}

const slidesFr: Slide[] = [
  {
    tag: "Intelligence Décisionnelle",
    headline: "Votre entreprise connaît déjà la réponse.",
    headlineEm: "Nous la faisons parler.",
    sub: "Transformez vos données opérationnelles en tableaux de bord temps réel que chaque dirigeant peut piloter — sans équipe data, sans SQL.",
    Icon: LuChartBar,
    color: "#D4AF37",
  },
  {
    tag: "Automatisation Commerciale",
    headline: "Arrêtez de perdre des leads dans le silence.",
    headlineEm: "Laissez l'IA les convertir.",
    sub: "Un pipeline agentique qui source, qualifie BANT et relance 24h/7j — pendant que votre équipe se concentre sur les deals qui comptent vraiment.",
    Icon: LuMessageSquare,
    color: "#22D3EE",
  },
  {
    tag: "Recherche Sémantique",
    headline: "Vos clients savent ce qu'ils veulent.",
    headlineEm: "Votre moteur de recherche aussi ?",
    sub: "Découverte multimodale qui comprend l'intention, pas seulement les mots-clés — texte, image ou voix, dans n'importe quelle langue, en temps réel.",
    Icon: LuSearch,
    color: "#A78BFA",
  },
  {
    tag: "Agents IA Agentiques",
    headline: "Vos concurrents automatisent déjà.",
    headlineEm: "Votre fenêtre, c'est maintenant.",
    sub: "Des agents IA en production qui exécutent des workflows complexes de façon autonome — vos opérations tournent à la vitesse machine, 24h/7j.",
    Icon: LuBrain,
    color: "#F97316",
  },
  {
    tag: "BI en Langage Naturel",
    headline: "Des mois de backlog analytique",
    headlineEm: "réduits à 30 secondes de réponse.",
    sub: "Posez vos questions business en langage courant. Obtenez des graphiques interactifs, des prévisions et des rapports exportables — sans analyste.",
    Icon: LuChartColumnIncreasing,
    color: "#34D399",
  },
  {
    tag: "Intelligence Documentaire",
    headline: "Chaque document traité manuellement",
    headlineEm: "est de la marge qui s'évapore.",
    sub: "L'extraction intelligente transforme vos données non structurées en décisions opérationnelles — à grande échelle, sans intervention humaine.",
    Icon: LuFileText,
    color: "#FBBF24",
  },
  {
    tag: "Revenue Operations",
    headline: "Votre CRM est un cimetière",
    headlineEm: "d'opportunités inexploitées.",
    sub: "Un système commercial multi-agent qui travaille votre pipeline en continu — qualification, nurturing, closing — pendant que vous pilotez la stratégie.",
    Icon: LuNetwork,
    color: "#F472B6",
  },
  {
    tag: "Analytique Prédictive",
    headline: "Prévoyez ce qui arrive.",
    headlineEm: "Agissez avant que le marché réagisse.",
    sub: "Des modèles prédictifs entraînés sur vos signaux sectoriels détectent les tendances des mois avant qu'elles ne deviennent visibles à la concurrence.",
    Icon: LuTrendingUp,
    color: "#10B981",
  },
  {
    tag: "Infrastructure IA Production",
    headline: "Construisez une fois.",
    headlineEm: "Déployez partout. Scalez sans recruter.",
    sub: "Infrastructure IA en production — MLOps, fine-tuning, pipelines RAG — qui évolue automatiquement avec votre croissance sans ajouter de ressources.",
    Icon: LuCloud,
    color: "#38BDF8",
  },
  {
    tag: "Data Engineering",
    headline: "Vos données vous disent déjà quoi faire.",
    headlineEm: "Il est temps de les écouter.",
    sub: "Des pipelines end-to-end qui capturent, transforment et livrent vos signaux business au bon système, au bon moment, en temps réel.",
    Icon: LuDatabase,
    color: "#818CF8",
  },
];

const slidesEn: Slide[] = [
  {
    tag: "Business Intelligence",
    headline: "Your business already knows the answer.",
    headlineEm: "We make it speak.",
    sub: "Turn raw operational data into real-time dashboards any executive can act on — without a data team or SQL knowledge.",
    Icon: LuChartBar,
    color: "#D4AF37",
  },
  {
    tag: "Sales Automation",
    headline: "Stop losing leads to silence.",
    headlineEm: "Let AI close them.",
    sub: "An agentic pipeline that sources, qualifies BANT, and follows up 24/7 — while your team focuses on closing the deals that actually matter.",
    Icon: LuMessageSquare,
    color: "#22D3EE",
  },
  {
    tag: "Semantic Search",
    headline: "Your customers know what they want.",
    headlineEm: "Does your search engine?",
    sub: "Multimodal discovery that understands intent, not just keywords — text, image, or voice, in any language, in real time.",
    Icon: LuSearch,
    color: "#A78BFA",
  },
  {
    tag: "Agentic AI",
    headline: "Your competitors are automating.",
    headlineEm: "Your window is now.",
    sub: "Production-grade AI agents that execute complex workflows autonomously — so your operations run at machine speed, 24/7.",
    Icon: LuBrain,
    color: "#F97316",
  },
  {
    tag: "Natural Language BI",
    headline: "Months of analytics backlog",
    headlineEm: "reduced to 30-second answers.",
    sub: "Ask your business questions in plain language. Get interactive charts, forecasts, and exportable reports — no analyst required.",
    Icon: LuChartColumnIncreasing,
    color: "#34D399",
  },
  {
    tag: "Document Intelligence",
    headline: "Every document you process manually",
    headlineEm: "is bleeding margin.",
    sub: "Intelligent extraction that transforms unstructured paperwork into structured decisions — at scale, with no human in the loop.",
    Icon: LuFileText,
    color: "#FBBF24",
  },
  {
    tag: "Revenue Operations",
    headline: "Your CRM is a graveyard",
    headlineEm: "of untouched opportunities.",
    sub: "A multi-agent commercial system that works your pipeline continuously — qualifying, nurturing, and closing while you focus on strategy.",
    Icon: LuNetwork,
    color: "#F472B6",
  },
  {
    tag: "Predictive Analytics",
    headline: "Forecast what's coming.",
    headlineEm: "Act before competitors react.",
    sub: "Predictive models trained on your industry signals detect patterns months before they become visible to the market.",
    Icon: LuTrendingUp,
    color: "#10B981",
  },
  {
    tag: "AI Infrastructure",
    headline: "Build once.",
    headlineEm: "Deploy everywhere. Scale without headcount.",
    sub: "Production-grade AI infrastructure — MLOps, fine-tuning, RAG pipelines — that grows with your business automatically.",
    Icon: LuCloud,
    color: "#38BDF8",
  },
  {
    tag: "Data Engineering",
    headline: "Your data is already telling you what to do.",
    headlineEm: "It's time to listen.",
    sub: "End-to-end pipelines that capture, transform, and deliver business signals to the right system at the right time.",
    Icon: LuDatabase,
    color: "#818CF8",
  },
];

const DOT_POSITIONS = [
  { top: "8%", left: "60%" },
  { top: "30%", left: "95%" },
  { top: "75%", left: "85%" },
  { top: "88%", left: "25%" },
  { top: "40%", left: "2%" },
  { top: "10%", left: "20%" },
];

const DOT_DELAYS = ["0s", "0.5s", "1s", "1.5s", "2s", "2.5s"];

function SlideIllust({ slide, slideKey }: { slide: Slide; slideKey: number }) {
  if (slide.imgSrc) {
    return (
      <div className={styles.illustWrap} key={slideKey}>
        <img src={slide.imgSrc} alt={slide.tag} className={styles.illustImg} />
      </div>
    );
  }

  return (
    <div className={styles.illustWrap} key={slideKey}>
      <div
        className={styles.illustOrb}
        style={{
          background: `radial-gradient(circle, ${slide.color}20 0%, transparent 65%)`,
        }}
      />
      <div
        className={styles.illustRing}
        style={{ borderColor: `${slide.color}20` }}
      />
      <div
        className={styles.illustRing2}
        style={{ borderColor: `${slide.color}10` }}
      />
      <div className={styles.illustIconBox}>
        <slide.Icon size={72} color={slide.color} />
      </div>
      {DOT_POSITIONS.map((pos, i) => (
        <div
          key={i}
          className={styles.illustDot}
          style={{
            top: pos.top,
            left: pos.left,
            animationDelay: DOT_DELAYS[i],
            background: `${slide.color}30`,
            border: `1px solid ${slide.color}50`,
          }}
        />
      ))}
    </div>
  );
}

export default function HeroSlider({
  locale,
  onBooking,
}: {
  locale: string;
  onBooking: () => void;
}) {
  const slides = locale === "fr" ? slidesFr : slidesEn;
  const [current, setCurrent] = useState(0);
  const [paused, setPaused] = useState(false);
  const pausedRef = useRef(paused);
  pausedRef.current = paused;

  const next = useCallback(() => {
    setCurrent((c) => (c + 1) % slides.length);
  }, [slides.length]);

  const prev = useCallback(() => {
    setCurrent((c) => (c - 1 + slides.length) % slides.length);
  }, [slides.length]);

  useEffect(() => {
    const id = setInterval(() => {
      if (!pausedRef.current) {
        setCurrent((c) => (c + 1) % slides.length);
      }
    }, 6000);
    return () => clearInterval(id);
  }, [slides.length]);

  const slide = slides[current];

  return (
    <div
      className={styles.slider}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div className={styles.slideGrid}>
        <div key={`content-${current}`} className={styles.slideContent}>
          <div
            className={styles.slideTag}
            style={{
              color: slide.color,
              borderColor: `${slide.color}40`,
              background: `${slide.color}12`,
            }}
          >
            {slide.tag}
          </div>
          <h1 className={styles.slideHeadline}>
            {slide.headline}{" "}
            <em style={{ color: slide.color }}>{slide.headlineEm}</em>
          </h1>
          <p className={styles.slideSub}>{slide.sub}</p>
          <div className={styles.slideActions}>
            <button
              className={styles.btnPrimary}
              onClick={onBooking}
              style={{ background: slide.color }}
            >
              {locale === "fr" ? "Démarrer un projet →" : "Start a project →"}
            </button>
            <a href="#demos" className={styles.btnSecondary}>
              {locale === "fr" ? "Voir nos démos" : "View demos"}
            </a>
          </div>
        </div>

        <SlideIllust slide={slide} slideKey={current} />
      </div>

      <div className={styles.nav}>
        <button
          className={styles.navArrow}
          onClick={prev}
          aria-label="Previous"
        >
          <LuChevronLeft size={18} />
        </button>
        <div className={styles.dots}>
          {slides.map((_, i) => (
            <button
              key={i}
              className={`${styles.dot} ${i === current ? styles.dotActive : ""}`}
              style={
                i === current
                  ? {
                      background: slide.color,
                      boxShadow: `0 0 8px ${slide.color}80`,
                    }
                  : {}
              }
              onClick={() => setCurrent(i)}
              aria-label={`Slide ${i + 1}`}
            />
          ))}
        </div>
        <button className={styles.navArrow} onClick={next} aria-label="Next">
          <LuChevronRight size={18} />
        </button>
      </div>

      <div
        key={`prog-${current}`}
        className={styles.progressBar}
        style={{ background: slide.color }}
      />
    </div>
  );
}
