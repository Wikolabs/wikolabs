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
  LuMail,
  LuUsers,
  LuTarget,
  LuZap,
  LuGlobe,
  LuRefreshCw,
  LuCode,
  LuShield,
  LuLayers,
} from "react-icons/lu";

// ─── Per-slide orbital node (planet)
// size: planet circle diameter in px (variable per node)
// ring: 0=inner(r135), 1=middle(r180), 2=outer(r222) — planet center sits on that ring
// startAngle: 0=top(12h), 90=right, 180=bottom, 270=left
interface OrbitalNode {
  Icon: IconType;
  ring: 0 | 1 | 2;
  startAngle: number;
  period: number;
  appearDelay: number;
  size: number;     // planet circle diameter in px
}

interface Slide {
  tag: string;
  headline: string;
  headlineEm: string;
  sub: string;
  Icon: IconType;
  color: string;
  nodes: OrbitalNode[];
  imgSrc?: string;
}

// ─── Orbital constellations — unique per slide ─────────────────────────────
// Each slide has different icon set, count (4-7), ring distribution,
// start angles, sizes and orbital periods for a solar-system look.

const nodes0: OrbitalNode[] = [
  { Icon: LuDatabase,              ring: 0, startAngle: 25,  period: 13, appearDelay: 0.30, size: 72 },
  { Icon: LuChartColumnIncreasing, ring: 1, startAngle: 95,  period: 20, appearDelay: 0.60, size: 30 },
  { Icon: LuTrendingUp,            ring: 2, startAngle: 170, period: 28, appearDelay: 0.90, size: 80 },
  { Icon: LuSearch,                ring: 1, startAngle: 255, period: 20, appearDelay: 1.20, size: 36 },
  { Icon: LuBrain,                 ring: 2, startAngle: 325, period: 28, appearDelay: 1.50, size: 56 },
  { Icon: LuNetwork,               ring: 0, startAngle: 195, period: 13, appearDelay: 1.80, size: 28 },
];

const nodes1: OrbitalNode[] = [
  { Icon: LuMail,     ring: 0, startAngle: 45,  period: 12, appearDelay: 0.30, size: 78 },
  { Icon: LuUsers,    ring: 2, startAngle: 125, period: 27, appearDelay: 0.65, size: 32 },
  { Icon: LuTarget,   ring: 1, startAngle: 200, period: 19, appearDelay: 1.00, size: 54 },
  { Icon: LuZap,      ring: 2, startAngle: 285, period: 27, appearDelay: 1.35, size: 28 },
  { Icon: LuChartBar, ring: 1, startAngle: 355, period: 19, appearDelay: 1.70, size: 68 },
];

const nodes2: OrbitalNode[] = [
  { Icon: LuGlobe,    ring: 1, startAngle: 0,   period: 18, appearDelay: 0.25, size: 76 },
  { Icon: LuBrain,    ring: 2, startAngle: 52,  period: 25, appearDelay: 0.50, size: 28 },
  { Icon: LuFileText, ring: 0, startAngle: 110, period: 11, appearDelay: 0.75, size: 44 },
  { Icon: LuDatabase, ring: 2, startAngle: 168, period: 25, appearDelay: 1.00, size: 80 },
  { Icon: LuNetwork,  ring: 1, startAngle: 230, period: 18, appearDelay: 1.25, size: 30 },
  { Icon: LuLayers,   ring: 0, startAngle: 290, period: 11, appearDelay: 1.50, size: 58 },
  { Icon: LuCloud,    ring: 2, startAngle: 330, period: 25, appearDelay: 1.75, size: 34 },
];

const nodes3: OrbitalNode[] = [
  { Icon: LuRefreshCw, ring: 0, startAngle: 15,  period: 10, appearDelay: 0.30, size: 74 },
  { Icon: LuNetwork,   ring: 2, startAngle: 80,  period: 29, appearDelay: 0.65, size: 30 },
  { Icon: LuZap,       ring: 1, startAngle: 155, period: 20, appearDelay: 1.00, size: 52 },
  { Icon: LuCode,      ring: 2, startAngle: 240, period: 29, appearDelay: 1.35, size: 80 },
  { Icon: LuCloud,     ring: 1, startAngle: 315, period: 20, appearDelay: 1.70, size: 28 },
];

const nodes4: OrbitalNode[] = [
  { Icon: LuChartBar,   ring: 0, startAngle: 55,  period: 14, appearDelay: 0.30, size: 32 },
  { Icon: LuTrendingUp, ring: 2, startAngle: 130, period: 26, appearDelay: 0.60, size: 78 },
  { Icon: LuDatabase,   ring: 1, startAngle: 200, period: 21, appearDelay: 0.90, size: 28 },
  { Icon: LuSearch,     ring: 2, startAngle: 270, period: 26, appearDelay: 1.20, size: 60 },
  { Icon: LuBrain,      ring: 0, startAngle: 330, period: 14, appearDelay: 1.50, size: 80 },
  { Icon: LuLayers,     ring: 1, startAngle: 20,  period: 21, appearDelay: 1.80, size: 34 },
];

const nodes5: OrbitalNode[] = [
  { Icon: LuSearch,   ring: 0, startAngle: 0,   period: 12, appearDelay: 0.30, size: 30 },
  { Icon: LuBrain,    ring: 1, startAngle: 85,  period: 22, appearDelay: 0.65, size: 76 },
  { Icon: LuDatabase, ring: 2, startAngle: 165, period: 30, appearDelay: 1.00, size: 28 },
  { Icon: LuNetwork,  ring: 1, startAngle: 255, period: 22, appearDelay: 1.35, size: 56 },
  { Icon: LuLayers,   ring: 2, startAngle: 335, period: 30, appearDelay: 1.70, size: 80 },
];

const nodes6: OrbitalNode[] = [
  { Icon: LuUsers,         ring: 0, startAngle: 20,  period: 11, appearDelay: 0.25, size: 76 },
  { Icon: LuMessageSquare, ring: 2, startAngle: 75,  period: 27, appearDelay: 0.50, size: 30 },
  { Icon: LuTrendingUp,    ring: 1, startAngle: 130, period: 19, appearDelay: 0.75, size: 80 },
  { Icon: LuTarget,        ring: 2, startAngle: 195, period: 27, appearDelay: 1.00, size: 28 },
  { Icon: LuMail,          ring: 0, startAngle: 250, period: 11, appearDelay: 1.25, size: 54 },
  { Icon: LuChartBar,      ring: 1, startAngle: 315, period: 19, appearDelay: 1.50, size: 32 },
  { Icon: LuZap,           ring: 2, startAngle: 350, period: 27, appearDelay: 1.75, size: 62 },
];

const nodes7: OrbitalNode[] = [
  { Icon: LuChartColumnIncreasing, ring: 1, startAngle: 30,  period: 18, appearDelay: 0.30, size: 78 },
  { Icon: LuBrain,    ring: 0, startAngle: 115, period: 13, appearDelay: 0.60, size: 28 },
  { Icon: LuSearch,   ring: 2, startAngle: 195, period: 25, appearDelay: 0.90, size: 62 },
  { Icon: LuDatabase, ring: 1, startAngle: 260, period: 18, appearDelay: 1.20, size: 30 },
  { Icon: LuCloud,    ring: 0, startAngle: 330, period: 13, appearDelay: 1.50, size: 80 },
  { Icon: LuNetwork,  ring: 2, startAngle: 70,  period: 25, appearDelay: 1.80, size: 34 },
];

const nodes8: OrbitalNode[] = [
  { Icon: LuDatabase,  ring: 0, startAngle: 40,  period: 15, appearDelay: 0.30, size: 80 },
  { Icon: LuCode,      ring: 2, startAngle: 120, period: 27, appearDelay: 0.65, size: 28 },
  { Icon: LuShield,    ring: 1, startAngle: 200, period: 22, appearDelay: 1.00, size: 62 },
  { Icon: LuRefreshCw, ring: 2, startAngle: 295, period: 27, appearDelay: 1.35, size: 30 },
  { Icon: LuNetwork,   ring: 1, startAngle: 15,  period: 22, appearDelay: 1.70, size: 76 },
];

const nodes9: OrbitalNode[] = [
  { Icon: LuCloud,     ring: 0, startAngle: 0,   period: 12, appearDelay: 0.30, size: 34 },
  { Icon: LuRefreshCw, ring: 1, startAngle: 75,  period: 20, appearDelay: 0.60, size: 78 },
  { Icon: LuNetwork,   ring: 2, startAngle: 150, period: 29, appearDelay: 0.90, size: 28 },
  { Icon: LuSearch,    ring: 0, startAngle: 225, period: 12, appearDelay: 1.20, size: 66 },
  { Icon: LuBrain,     ring: 2, startAngle: 300, period: 29, appearDelay: 1.50, size: 30 },
  { Icon: LuLayers,    ring: 1, startAngle: 355, period: 20, appearDelay: 1.80, size: 80 },
];

// ─── Slide data ────────────────────────────────────────────────────────────

const slidesFr: Slide[] = [
  {
    tag: "Intelligence Décisionnelle",
    headline: "Votre entreprise connaît déjà la réponse.",
    headlineEm: "Nous la faisons parler.",
    sub: "Transformez vos données opérationnelles en tableaux de bord temps réel que chaque dirigeant peut piloter — sans équipe data, sans SQL.",
    Icon: LuChartBar,
    color: "#D4AF37",
    nodes: nodes0,
  },
  {
    tag: "Automatisation Commerciale",
    headline: "Arrêtez de perdre des leads dans le silence.",
    headlineEm: "Laissez l'IA les convertir.",
    sub: "Un pipeline agentique qui source, qualifie BANT et relance 24h/7j — pendant que votre équipe se concentre sur les deals qui comptent vraiment.",
    Icon: LuMessageSquare,
    color: "#22D3EE",
    nodes: nodes1,
  },
  {
    tag: "Recherche Sémantique",
    headline: "Vos clients savent ce qu'ils veulent.",
    headlineEm: "Votre moteur de recherche aussi ?",
    sub: "Découverte multimodale qui comprend l'intention, pas seulement les mots-clés — texte, image ou voix, dans n'importe quelle langue, en temps réel.",
    Icon: LuSearch,
    color: "#A78BFA",
    nodes: nodes2,
  },
  {
    tag: "Agents IA Agentiques",
    headline: "Vos concurrents automatisent déjà.",
    headlineEm: "Votre fenêtre, c'est maintenant.",
    sub: "Des agents IA en production qui exécutent des workflows complexes de façon autonome — vos opérations tournent à la vitesse machine, 24h/7j.",
    Icon: LuBrain,
    color: "#F97316",
    nodes: nodes3,
  },
  {
    tag: "BI en Langage Naturel",
    headline: "Des mois de backlog analytique",
    headlineEm: "réduits à 30 secondes de réponse.",
    sub: "Posez vos questions business en langage courant. Obtenez des graphiques interactifs, des prévisions et des rapports exportables — sans analyste.",
    Icon: LuChartColumnIncreasing,
    color: "#34D399",
    nodes: nodes4,
  },
  {
    tag: "Intelligence Documentaire",
    headline: "Chaque document traité manuellement",
    headlineEm: "est de la marge qui s'évapore.",
    sub: "L'extraction intelligente transforme vos données non structurées en décisions opérationnelles — à grande échelle, sans intervention humaine.",
    Icon: LuFileText,
    color: "#FBBF24",
    nodes: nodes5,
  },
  {
    tag: "Revenue Operations",
    headline: "Votre CRM est un cimetière",
    headlineEm: "d'opportunités inexploitées.",
    sub: "Un système commercial multi-agent qui travaille votre pipeline en continu — qualification, nurturing, closing — pendant que vous pilotez la stratégie.",
    Icon: LuNetwork,
    color: "#F472B6",
    nodes: nodes6,
  },
  {
    tag: "Analytique Prédictive",
    headline: "Prévoyez ce qui arrive.",
    headlineEm: "Agissez avant que le marché réagisse.",
    sub: "Des modèles prédictifs entraînés sur vos signaux sectoriels détectent les tendances des mois avant qu'elles ne deviennent visibles à la concurrence.",
    Icon: LuTrendingUp,
    color: "#10B981",
    nodes: nodes7,
  },
  {
    tag: "Infrastructure IA Production",
    headline: "Construisez une fois.",
    headlineEm: "Déployez partout. Scalez sans recruter.",
    sub: "Infrastructure IA en production — MLOps, fine-tuning, pipelines RAG — qui évolue automatiquement avec votre croissance sans ajouter de ressources.",
    Icon: LuCloud,
    color: "#38BDF8",
    nodes: nodes8,
  },
  {
    tag: "Data Engineering",
    headline: "Vos données vous disent déjà quoi faire.",
    headlineEm: "Il est temps de les écouter.",
    sub: "Des pipelines end-to-end qui capturent, transforment et livrent vos signaux business au bon système, au bon moment, en temps réel.",
    Icon: LuDatabase,
    color: "#818CF8",
    nodes: nodes9,
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
    nodes: nodes0,
  },
  {
    tag: "Sales Automation",
    headline: "Stop losing leads to silence.",
    headlineEm: "Let AI close them.",
    sub: "An agentic pipeline that sources, qualifies BANT, and follows up 24/7 — while your team focuses on closing the deals that actually matter.",
    Icon: LuMessageSquare,
    color: "#22D3EE",
    nodes: nodes1,
  },
  {
    tag: "Semantic Search",
    headline: "Your customers know what they want.",
    headlineEm: "Does your search engine?",
    sub: "Multimodal discovery that understands intent, not just keywords — text, image, or voice, in any language, in real time.",
    Icon: LuSearch,
    color: "#A78BFA",
    nodes: nodes2,
  },
  {
    tag: "Agentic AI",
    headline: "Your competitors are automating.",
    headlineEm: "Your window is now.",
    sub: "Production-grade AI agents that execute complex workflows autonomously — so your operations run at machine speed, 24/7.",
    Icon: LuBrain,
    color: "#F97316",
    nodes: nodes3,
  },
  {
    tag: "Natural Language BI",
    headline: "Months of analytics backlog",
    headlineEm: "reduced to 30-second answers.",
    sub: "Ask your business questions in plain language. Get interactive charts, forecasts, and exportable reports — no analyst required.",
    Icon: LuChartColumnIncreasing,
    color: "#34D399",
    nodes: nodes4,
  },
  {
    tag: "Document Intelligence",
    headline: "Every document you process manually",
    headlineEm: "is bleeding margin.",
    sub: "Intelligent extraction that transforms unstructured paperwork into structured decisions — at scale, with no human in the loop.",
    Icon: LuFileText,
    color: "#FBBF24",
    nodes: nodes5,
  },
  {
    tag: "Revenue Operations",
    headline: "Your CRM is a graveyard",
    headlineEm: "of untouched opportunities.",
    sub: "A multi-agent commercial system that works your pipeline continuously — qualifying, nurturing, and closing while you focus on strategy.",
    Icon: LuNetwork,
    color: "#F472B6",
    nodes: nodes6,
  },
  {
    tag: "Predictive Analytics",
    headline: "Forecast what's coming.",
    headlineEm: "Act before competitors react.",
    sub: "Predictive models trained on your industry signals detect patterns months before they become visible to the market.",
    Icon: LuTrendingUp,
    color: "#10B981",
    nodes: nodes7,
  },
  {
    tag: "AI Infrastructure",
    headline: "Build once.",
    headlineEm: "Deploy everywhere. Scale without headcount.",
    sub: "Production-grade AI infrastructure — MLOps, fine-tuning, RAG pipelines — that grows with your business automatically.",
    Icon: LuCloud,
    color: "#38BDF8",
    nodes: nodes8,
  },
  {
    tag: "Data Engineering",
    headline: "Your data is already telling you what to do.",
    headlineEm: "It's time to listen.",
    sub: "End-to-end pipelines that capture, transform, and deliver business signals to the right system at the right time.",
    Icon: LuDatabase,
    color: "#818CF8",
    nodes: nodes9,
  },
];

// ─── Slide illustration ────────────────────────────────────────────────────

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
      {/* Radial glow blob */}
      <div
        className={styles.illustOrb}
        style={{ background: `radial-gradient(circle, ${slide.color}22 0%, transparent 65%)` }}
      />

      {/* Rings — outer first so they appear behind planets */}
      <div className={`${styles.illustRing3} ${styles.revealFirst}`}  style={{ borderColor: `${slide.color}14` }} />
      <div className={`${styles.illustRing2} ${styles.revealSecond}`} style={{ borderColor: `${slide.color}20` }} />
      <div className={`${styles.illustRing}  ${styles.revealThird}`}  style={{ borderColor: `${slide.color}32` }} />

      {/* Central icon circle */}
      <div
        className={`${styles.illustIconBox} ${styles.revealLast}`}
        style={{
          boxShadow: `0 0 0 1px ${slide.color}35, 0 0 40px ${slide.color}30, 0 0 80px ${slide.color}12, inset 0 0 20px ${slide.color}08`,
          background: `rgba(255,255,255,0.03)`,
        }}
      >
        <slide.Icon size={62} color={slide.color} />
      </div>

      {/* Orbital planets — unique per slide (different icons, count, sizes, angles) */}
      {slide.nodes.map((node, i) => {
        const preSpin = -(node.startAngle / 360) * node.period;
        const half = node.size / 2;
        const iconSize = Math.round(node.size * 0.38);

        return (
          <div
            key={i}
            className={styles.orbitArm}
            style={{
              "--orbit-period": `${node.period}s`,
              "--orbit-pre-spin": `${preSpin}s`,
            } as React.CSSProperties}
          >
            <div
              className={styles.orbitPlanetWrap}
              data-ring={node.ring}
              style={{
                "--orbit-period": `${node.period}s`,
                "--orbit-pre-spin": `${preSpin}s`,
                "--ps": `${node.size}px`,
                width: node.size,
                height: node.size,
                margin: `-${half}px 0 0 -${half}px`,
              } as React.CSSProperties}
            >
              <div
                className={styles.orbitPlanet}
                style={{
                  "--appear-delay": `${node.appearDelay}s`,
                  width: node.size,
                  height: node.size,
                  background: `${slide.color}16`,
                  boxShadow: `0 0 0 1px ${slide.color}45, 0 8px 28px rgba(0,0,0,0.38), inset 0 1px 0 rgba(255,255,255,0.1)`,
                } as React.CSSProperties}
              >
                <node.Icon size={iconSize} color={slide.color} />
              </div>
            </div>
          </div>
        );
      })}

      {/* Floating micro dots */}
      {[
        { top: "8%",  left: "58%", delay: "0s"   },
        { top: "28%", left: "94%", delay: "0.7s"  },
        { top: "70%", left: "88%", delay: "1.4s"  },
        { top: "86%", left: "32%", delay: "0.3s"  },
        { top: "18%", left: "6%",  delay: "1.1s"  },
      ].map((pos, i) => (
        <div
          key={i}
          className={styles.illustDot}
          style={{
            top: pos.top, left: pos.left,
            animationDelay: pos.delay,
            background: `${slide.color}35`,
            border: `1px solid ${slide.color}55`,
          }}
        />
      ))}
    </div>
  );
}

// ─── Main slider ───────────────────────────────────────────────────────────

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
      if (!pausedRef.current) setCurrent((c) => (c + 1) % slides.length);
    }, 4500);
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
        <button className={styles.navArrow} onClick={prev} aria-label="Previous">
          <LuChevronLeft size={18} />
        </button>
        <div className={styles.dots}>
          {slides.map((_, i) => (
            <button
              key={i}
              className={`${styles.dot} ${i === current ? styles.dotActive : ""}`}
              style={
                i === current
                  ? { background: slide.color, boxShadow: `0 0 8px ${slide.color}80` }
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
