"use client";

import { useState, useEffect } from "react";
import s from "./page.module.css";

/* ─── DATA ─── */

const MARQUEE_ITEMS = [
  "AI Engineer",
  "Data Scientist",
  "Fullstack Developer",
  "DevOps Engineer",
  "UX/UI Designer",
  "Data Engineer",
  "Data Analyst",
  "ML Engineer",
  "Content & Community",
];

const CLIENT_PROBLEMS = [
  {
    title: "Coûts exorbitants en Europe",
    text: "Un développeur senior à Paris ou Zurich coûte 800-1200 EUR/jour. Pour un projet de 3 mois, c'est un budget de 50-150k EUR en salaires seuls.",
  },
  {
    title: "Freelances isolés, qualité variable",
    text: "Recruter des freelances individuels sur Upwork ou Malt ? Aucune garantie de qualité, de continuité, ni de structure derrière.",
  },
  {
    title: "Agences classiques opaques",
    text: "Les agences prennent 40-60% de marge. Vous ne savez jamais combien revient réellement à ceux qui font votre projet.",
  },
];

const CLIENT_SOLUTIONS = [
  {
    title: "Tarifs 25% sous le marché",
    text: "Des professionnels expérimentés, formés en continu et sélectionnés sur projets réels, à des TJM ultra-compétitifs. Même qualité qu'en Europe, coûts divisés par 2.",
  },
  {
    title: "Équipes structurées et formées",
    text: "Pas des freelances isolés : un collectif organisé avec processus, compétences validées sur projets, et suivi professionnel.",
  },
  {
    title: "Transparence totale sur les coûts",
    text: "Vous voyez exactement comment votre budget est réparti. 70% va aux techniciens qui font le travail. Zéro zone grise.",
  },
];

const ROLES = [
  {
    emoji: "🧠",
    title: "AI / ML Engineer",
    desc: "Systèmes intelligents, NLP, Computer Vision. PyTorch, TensorFlow, déploiement ML en production.",
    tjm: "340 – 640 EUR/jour",
  },
  {
    emoji: "📊",
    title: "Data Scientist",
    desc: "Insights actionnables depuis données massives. Statistiques avancées, ML, visualisation décisionnelle.",
    tjm: "340 – 640 EUR/jour",
  },
  {
    emoji: "⚡",
    title: "Fullstack Developer",
    desc: "Applications web complètes. React/Vue + Node.js/Python + SQL/NoSQL. Le profil le plus demandé.",
    tjm: "260 – 490 EUR/jour",
  },
  {
    emoji: "🔧",
    title: "DevOps Engineer",
    desc: "Docker, Kubernetes, Terraform, CI/CD. Infrastructure cloud automatisée et monitoring.",
    tjm: "300 – 560 EUR/jour",
  },
  {
    emoji: "🎨",
    title: "UX/UI Designer",
    desc: "Interfaces centrées utilisateur. Figma, prototypage, design systems, accessibilité.",
    tjm: "225 – 450 EUR/jour",
  },
  {
    emoji: "🔗",
    title: "Data Engineer",
    desc: "Pipelines grande échelle. ETL, Spark, Kafka, BigQuery, Airflow, orchestration data.",
    tjm: "300 – 600 EUR/jour",
  },
  {
    emoji: "📈",
    title: "Data Analyst",
    desc: "Analyse business, dashboards, rapports décisionnels. SQL, Tableau, Power BI.",
    tjm: "225 – 450 EUR/jour",
  },
  {
    emoji: "🤖",
    title: "ML Engineer",
    desc: "MLOps, déploiement modèles à l'échelle, pipelines d'entraînement, monitoring modèles.",
    tjm: "340 – 640 EUR/jour",
  },
  {
    emoji: "✍️",
    title: "Content & Community",
    desc: "Création de contenu, community management, rédaction, social media, copywriting.",
    tjm: "120 – 225 EUR/jour",
  },
];

const WHY_CLIENTS = [
  {
    icon: "💰",
    title: "Rapport qualité-prix imbattable",
    text: "Professionnels expérimentés, formés en continu, à des tarifs 25% sous le marché européen. Même qualité, coûts divisés.",
  },
  {
    icon: "🔍",
    title: "Transparence totale",
    text: "Vous savez exactement où va votre argent. 70% aux techniciens, 10% formation/outils, 20% business. Pas de marge cachée.",
  },
  {
    icon: "🎓",
    title: "Talents sélectionnés et formés",
    text: "Recrutement rigoureux sur mini-projets réels. Certains membres détiennent des certifications internationales (AWS, GCP, Azure), tous bénéficient d'une formation continue financée.",
  },
  {
    icon: "⚡",
    title: "Équipes dédiées et structurées",
    text: "Pas de freelances isolés. Des équipes constituées avec processus, outils de suivi, et un interlocuteur unique pour votre projet.",
  },
  {
    icon: "🌍",
    title: "Fuseau horaire compatible",
    text: "Madagascar (UTC+3) : chevauchement naturel avec l'Europe. Communication en français et anglais courant.",
  },
  {
    icon: "🤝",
    title: "Talents motivés et investis",
    text: "Nos membres sont rémunérés proportionnellement à la valeur créée. Résultat : ils sont investis dans la réussite de VOTRE projet.",
  },
];

const PRICING = [
  { role: "AI / ML Engineer", junior: "340 €", confirmed: "490 €", senior: "640 €" },
  { role: "Data Scientist", junior: "340 €", confirmed: "490 €", senior: "640 €" },
  { role: "Data Engineer", junior: "300 €", confirmed: "450 €", senior: "600 €" },
  { role: "Fullstack Dev", junior: "260 €", confirmed: "375 €", senior: "490 €" },
  { role: "DevOps Engineer", junior: "300 €", confirmed: "450 €", senior: "560 €" },
  { role: "UX/UI Designer", junior: "225 €", confirmed: "340 €", senior: "450 €" },
  { role: "Data Analyst", junior: "225 €", confirmed: "340 €", senior: "450 €" },
  { role: "Content & Community", junior: "120 €", confirmed: "175 €", senior: "225 €" },
];

const PROCESS = [
  {
    num: "01",
    title: "Décrivez votre besoin",
    text: "Contactez-nous avec votre brief projet. Nous analysons vos besoins techniques, votre budget et vos délais.",
  },
  {
    num: "02",
    title: "Recevez un devis transparent",
    text: "Notre équipe technique co-construit le backlog et chiffre précisément. Vous voyez chaque ligne du devis.",
  },
  {
    num: "03",
    title: "Équipe dédiée constituée",
    text: "Nous assignons les meilleurs profils disponibles selon compétences et expérience. Vous validez l'équipe avant le démarrage.",
  },
  {
    num: "04",
    title: "Développement agile",
    text: "Livraisons incrémentielles avec validation à chaque jalon. Points hebdomadaires et accès aux outils de suivi.",
  },
  {
    num: "05",
    title: "Livraison et recette",
    text: "Démonstration complète, phase de test, corrections. Validation finale signée avant paiement du solde.",
  },
  {
    num: "06",
    title: "Support et continuité",
    text: "Votre équipe reste disponible pour le support post-livraison. Besoin d'évolutions ? On continue ensemble.",
  },
];

const TESTIMONIALS = [
  {
    quote: "Qualité identique à nos prestataires parisiens, pour un budget divisé par deux. Le suivi projet est impeccable.",
    name: "Marc D.",
    role: "CTO, Startup SaaS — Suisse",
    initials: "MD",
  },
  {
    quote: "Ce qui m'a convaincu, c'est la transparence. Je sais exactement où va mon argent et qui travaille sur mon projet.",
    name: "Sophie L.",
    role: "Directrice Digitale — France",
    initials: "SL",
  },
  {
    quote: "Leur équipe AI/ML a livré un moteur de recommandation en 6 semaines. Compétents, réactifs, professionnels.",
    name: "Jean-Pierre K.",
    role: "CEO, Mediwyz",
    initials: "JK",
  },
];

const FAQ = [
  {
    q: "Comment garantissez-vous la qualité ?",
    a: "Recrutement sur mini-projets réels, pas sur CV. Formation continue financée pour tous les membres. Certains détiennent des certifications internationales (AWS, GCP, Azure), tous sont évalués par les clients après chaque projet.",
  },
  {
    q: "Comment fonctionne la tarification ?",
    a: "TJM fixe par profil et niveau (Junior, Confirmé, Senior). Le devis détaille chaque poste, chaque jour estimé. 70% va directement aux techniciens — pas de marge cachée à 50% comme les agences classiques.",
  },
  {
    q: "Quelle est votre structure juridique ?",
    a: "Wikolabs est une SARLU malgache immatriculée au RCS, avec NIF et compte bancaire SWIFT. Contrats professionnels, factures conformes, propriété intellectuelle transférée.",
  },
  {
    q: "Quels fuseaux horaires couvrez-vous ?",
    a: "Madagascar (UTC+3) offre un chevauchement naturel avec l'Europe. Communication bilingue français-anglais. Points hebdomadaires adaptés à vos horaires.",
  },
  {
    q: "Et si le projet nécessite des ajustements ?",
    a: "Approche agile avec jalons intermédiaires. Tout changement de scope est négocié avec un avenant clair avant exécution. Vous gardez le contrôle à chaque étape.",
  },
  {
    q: "Puis-je voir les profils de l'équipe avant de signer ?",
    a: "Absolument. Nous vous montrons le portfolio, les projets passés, les éventuelles certifications et les évaluations de chaque membre proposé. Vous pouvez demander des ajustements d'équipe.",
  },
];

/* ─── COMPONENT ─── */

export default function Home() {
  const marqueeDouble = [...MARQUEE_ITEMS, ...MARQUEE_ITEMS];
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth > 768) setMenuOpen(false);
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      <div className={s.grain} />

      {/* ── NAV ── */}
      <nav className={s.nav}>
        <a href="#" className={s.logo} onClick={closeMenu}>
          <img
            src="/wikolabs-logo.svg"
            alt="Wikolabs"
            height={36}
            className={s.logoImg}
          />
        </a>
        <div className={s.navLinks}>
          <a href="#expertise" className={s.navLink}>Expertise</a>
          <a href="#pourquoi" className={s.navLink}>Pourquoi nous</a>
          <a href="#tarifs" className={s.navLink}>Tarifs</a>
          <a href="#processus" className={s.navLink}>Processus</a>
          <a href="#faq" className={s.navLink}>FAQ</a>
          <a href="mailto:service@wikolabs.com" className={s.navCta}>
            Démarrer un projet
          </a>
        </div>
        <button
          className={`${s.mobileMenuBtn} ${menuOpen ? s.mobileMenuOpen : ""}`}
          aria-label="Menu"
          onClick={() => setMenuOpen((v) => !v)}
        >
          <span /><span /><span />
        </button>
      </nav>

      {/* ── MOBILE OVERLAY ── */}
      <div
        className={`${s.mobileOverlay} ${menuOpen ? s.mobileOverlayOpen : ""}`}
        onClick={closeMenu}
      >
        <div className={s.mobileNav} onClick={(e) => e.stopPropagation()}>
          <a href="#expertise" className={s.mobileLink} onClick={closeMenu}>Expertise</a>
          <a href="#pourquoi" className={s.mobileLink} onClick={closeMenu}>Pourquoi nous</a>
          <a href="#tarifs" className={s.mobileLink} onClick={closeMenu}>Tarifs</a>
          <a href="#processus" className={s.mobileLink} onClick={closeMenu}>Processus</a>
          <a href="#faq" className={s.mobileLink} onClick={closeMenu}>FAQ</a>
          <a
            href="mailto:service@wikolabs.com"
            className={s.btnPrimary}
            onClick={closeMenu}
            style={{ marginTop: 16, textAlign: "center", justifyContent: "center" }}
          >
            Démarrer un projet →
          </a>
        </div>
      </div>

      {/* ── HERO ── */}
      <section className={s.hero}>
        <div className={`${s.heroGlow} ${s.heroGlow1}`} />
        <div className={`${s.heroGlow} ${s.heroGlow2}`} />

        <div className={s.heroTag}>
          <span className={s.heroTagLine} />
          Talents tech éprouvés — basés à Madagascar
        </div>

        <h1 className={s.heroTitle}>
          Votre équipe tech
          <br />
          d&#39;experts{" "}
          <span className={s.heroTitleAccent}>éprouvés</span>.
        </h1>

        <p className={s.heroSub}>
          Développeurs, AI Engineers, Data Scientists et Designers — sélectionnés
          sur projets réels, formés en continu, à des tarifs 25% sous le marché
          européen. Transparence totale sur chaque euro investi.
        </p>

        <div className={s.heroActions}>
          <a href="mailto:service@wikolabs.com" className={s.btnPrimary}>
            Démarrer un projet →
          </a>
          <a href="#processus" className={s.btnSecondary}>
            Comment ça marche
          </a>
        </div>

        <div className={s.heroStats}>
          <div className={s.statItem}>
            <span className={s.statValue}>9+</span>
            <span className={s.statLabel}>Spécialisations</span>
          </div>
          <div className={s.statItem}>
            <span className={s.statValue}>25%</span>
            <span className={s.statLabel}>Sous le marché</span>
          </div>
          <div className={s.statItem}>
            <span className={s.statValue}>100%</span>
            <span className={s.statLabel}>Transparent</span>
          </div>
          <div className={s.statItem}>
            <span className={s.statValue}>UTC+3</span>
            <span className={s.statLabel}>Fuseau Europe</span>
          </div>
        </div>
      </section>

      {/* ── MARQUEE ── */}
      <div className={s.marquee}>
        <div className={s.marqueeTrack}>
          {marqueeDouble.map((item, i) => (
            <span className={s.marqueeItem} key={i}>{item}</span>
          ))}
        </div>
      </div>

      {/* ── CLIENT PROBLEM / SOLUTION ── */}
      <section id="pourquoi" className={`${s.section} ${s.problemSection}`}>
        <div className={s.sectionTag}>
          <span className={s.sectionTagLine} />
          Le Constat
        </div>
        <h2 className={s.sectionTitle}>
          Recruter des talents tech ne devrait pas coûter une fortune.
        </h2>
        <p className={s.sectionDesc}>
          Que vous soyez une startup, une PME ou un grand groupe — vous méritez
          une équipe tech de qualité à un prix juste, sans marge cachée.
        </p>

        <div className={s.problemGrid}>
          <div className={s.problemCol}>
            <h3>
              <span className={`${s.problemBadge} ${s.problemBadgeRed}`}>
                Vos frustrations
              </span>
            </h3>
            {CLIENT_PROBLEMS.map((p, i) => (
              <div className={`${s.problemCard} ${s.problemCardBad}`} key={i}>
                <div className={s.problemCardTitle}>{p.title}</div>
                <div className={s.problemCardText}>{p.text}</div>
              </div>
            ))}
          </div>
          <div className={s.problemCol}>
            <h3>
              <span className={`${s.problemBadge} ${s.problemBadgeGreen}`}>
                Notre réponse
              </span>
            </h3>
            {CLIENT_SOLUTIONS.map((p, i) => (
              <div className={`${s.problemCard} ${s.problemCardGood}`} key={i}>
                <div className={s.problemCardTitle}>{p.title}</div>
                <div className={s.problemCardText}>{p.text}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── TRANSPARENCY 20-10-70 ── */}
      <section className={s.section}>
        <div className={s.sectionTag}>
          <span className={s.sectionTagLine} />
          Notre modèle
        </div>
        <h2 className={s.sectionTitle}>
          Où va votre argent : le système 20 — 10 — 70
        </h2>
        <p className={s.sectionDesc}>
          Contrairement aux agences classiques qui gardent 40-60% en marge,
          nous redistribuons 70% directement à ceux qui font votre projet.
        </p>

        <div className={s.splitGrid}>
          <div className={s.splitVisual}>
            <div className={s.barChart}>
              <div className={`${s.bar} ${s.bar70}`}>
                <span className={s.barLabel}>70%</span>
                <span className={s.barDesc}>Techniciens</span>
              </div>
              <div className={`${s.bar} ${s.bar20}`}>
                <span className={s.barLabel}>20%</span>
                <span className={s.barDesc}>Business</span>
              </div>
              <div className={`${s.bar} ${s.bar10}`}>
                <span className={s.barLabel}>10%</span>
                <span className={s.barDesc}>Formation</span>
              </div>
            </div>
            <div className={s.barBottom}>
              Répartition réelle sur chaque projet — vérifiable
            </div>
          </div>

          <div className={s.splitContent}>
            <div className={s.splitItem}>
              <div className={`${s.splitIcon} ${s.splitIcon70}`}>70</div>
              <div>
                <div className={s.splitItemTitle}>70% — Vos techniciens</div>
                <div className={s.splitItemText}>
                  La majorité de votre investissement va directement aux experts
                  qui construisent votre projet. Résultat : des talents motivés et investis.
                </div>
              </div>
            </div>
            <div className={s.splitItem}>
              <div className={`${s.splitIcon} ${s.splitIcon20}`}>20</div>
              <div>
                <div className={s.splitItemTitle}>20% — Développement business</div>
                <div className={s.splitItemText}>
                  Prospection, qualification, gestion de la relation client.
                  Le lien entre vos besoins et les bons profils.
                </div>
              </div>
            </div>
            <div className={s.splitItem}>
              <div className={`${s.splitIcon} ${s.splitIcon10}`}>10</div>
              <div>
                <div className={s.splitItemTitle}>10% — Formation continue</div>
                <div className={s.splitItemText}>
                  Certifications internationales, outils, plateforme de suivi.
                  Ce qui garantit que vos techniciens restent à la pointe.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── WHY CLIENTS ── */}
      <section className={`${s.section} ${s.valuesSection}`}>
        <div className={s.sectionTag}>
          <span className={s.sectionTagLine} />
          Avantages
        </div>
        <h2 className={s.sectionTitle}>
          Pourquoi nos clients nous choisissent.
        </h2>
        <p className={s.sectionDesc}>
          Un modèle conçu pour aligner les intérêts de tous :
          vous payez moins, nos talents gagnent plus. Tout le monde y gagne.
        </p>

        <div className={s.valuesGrid}>
          {WHY_CLIENTS.map((v, i) => (
            <div className={s.valueCard} key={i}>
              <div className={s.valueIcon}>{v.icon}</div>
              <div className={s.valueTitle}>{v.title}</div>
              <div className={s.valueText}>{v.text}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ── EXPERTISE / ROLES ── */}
      <section id="expertise" className={s.section}>
        <div className={s.sectionTag}>
          <span className={s.sectionTagLine} />
          Expertise
        </div>
        <h2 className={s.sectionTitle}>
          9 spécialisations à votre service.
        </h2>
        <p className={s.sectionDesc}>
          Des profils sélectionnés sur projets réels, formés en continu, positionnés 25% sous le marché
          international. De l&#39;IA au design, du backend au DevOps.
        </p>

        <div className={s.rolesGrid}>
          {ROLES.map((r, i) => (
            <div className={s.roleCard} key={i}>
              <span className={s.roleEmoji}>{r.emoji}</span>
              <div className={s.roleTitle}>{r.title}</div>
              <div className={s.roleDesc}>{r.desc}</div>
              <div className={s.roleTjm}>{r.tjm}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ── PRICING ── */}
      <section id="tarifs" className={`${s.section} ${s.valuesSection}`}>
        <div className={s.sectionTag}>
          <span className={s.sectionTagLine} />
          Grille Tarifaire
        </div>
        <h2 className={s.sectionTitle}>
          TJM clairs, par profil et niveau.
        </h2>
        <p className={s.sectionDesc}>
          Junior (0-2 ans), Confirmé (2-5 ans), Senior (5+ ans).
          Tarifs adaptés par marché : France, BE/LU, Canada, UK, Afrique.
        </p>

        <div className={s.pricingWrap}>
          <table className={s.pricingTable}>
            <thead>
              <tr>
                <th>Rôle</th>
                <th>Junior</th>
                <th>Confirmé</th>
                <th>Senior</th>
              </tr>
            </thead>
            <tbody>
              {PRICING.map((p, i) => (
                <tr key={i}>
                  <td><span className={s.pricingRole}>{p.role}</span></td>
                  <td><span className={`${s.pricingLevel} ${s.levelJunior}`}>{p.junior}</span></td>
                  <td><span className={`${s.pricingLevel} ${s.levelConfirmed}`}>{p.confirmed}</span></td>
                  <td><span className={`${s.pricingLevel} ${s.levelSenior}`}>{p.senior}</span></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* ── PROCESS ── */}
      <section id="processus" className={s.section}>
        <div className={s.sectionTag}>
          <span className={s.sectionTagLine} />
          Processus
        </div>
        <h2 className={s.sectionTitle}>
          Du brief à la livraison : 6 étapes.
        </h2>
        <p className={s.sectionDesc}>
          Un processus clair, agile, avec validation à chaque étape.
          Vous gardez le contrôle de bout en bout.
        </p>

        <div className={s.timeline}>
          {PROCESS.map((t, i) => (
            <div className={s.timelineItem} key={i}>
              <div className={s.timelineDot} />
              <div className={s.timelineNum}>Étape {t.num}</div>
              <div className={s.timelineTitle}>{t.title}</div>
              <div className={s.timelineText}>{t.text}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ── TESTIMONIALS ── */}
      <section className={`${s.section} ${s.clientSection}`}>
        <div className={s.sectionTag}>
          <span className={s.sectionTagLine} />
          Ils nous font confiance
        </div>
        <h2 className={s.sectionTitle}>
          Ce qu&#39;en disent nos clients.
        </h2>

        <div className={s.clientGrid}>
          {TESTIMONIALS.map((t, i) => (
            <div className={s.clientCard} key={i}>
              <div className={s.clientQuote}>{t.quote}</div>
              <div className={s.clientInfo}>
                <div className={s.clientAvatar}>{t.initials}</div>
                <div>
                  <div className={s.clientName}>{t.name}</div>
                  <div className={s.clientRole}>{t.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── FAQ ── */}
      <section id="faq" className={s.section}>
        <div className={s.sectionTag}>
          <span className={s.sectionTagLine} />
          FAQ
        </div>
        <h2 className={s.sectionTitle}>
          Questions fréquentes.
        </h2>

        <div className={s.faqGrid}>
          {FAQ.map((f, i) => (
            <div className={s.faqCard} key={i}>
              <div className={s.faqQ}>{f.q}</div>
              <div className={s.faqA}>{f.a}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ── CTA ── */}
      <section className={s.ctaSection}>
        <div className={s.ctaGlow} />
        <h2 className={s.ctaTitle}>
          Prêt à lancer votre prochain projet&nbsp;?
        </h2>
        <p className={s.ctaText}>
          Décrivez-nous votre besoin. Nous vous répondons sous 24h
          avec une proposition d&#39;équipe et un devis transparent.
        </p>
        <div className={s.ctaActions}>
          <a href="mailto:service@wikolabs.com" className={s.btnPrimary}>
            Contactez-nous →
          </a>
          <a
            href="https://mediwyz.com/"
            target="_blank"
            rel="noopener noreferrer"
            className={s.btnSecondary}
          >
            Voir Mediwyz — Projet livré
          </a>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer className={s.footer}>
        <div className={s.footerTop}>
          <div className={s.footerBrand}>
            <div className={s.footerBrandName}>
              <img src="/wikolabs-logo.svg" alt="Wikolabs" height={32} className={s.logoImg} />
            </div>
            <div className={s.footerBrandText}>
              Initiative des Jeunes Talents Indépendants du Numérique
              International fondé à Madagascar. SARLU immatriculée au RCS.
            </div>
          </div>

          <div className={s.footerCols}>
            <div className={s.footerCol}>
              <h4>Navigation</h4>
              <a href="#expertise">Expertise</a>
              <a href="#pourquoi">Pourquoi nous</a>
              <a href="#tarifs">Tarifs</a>
              <a href="#processus">Processus</a>
              <a href="#faq">FAQ</a>
            </div>
            <div className={s.footerCol}>
              <h4>Contact</h4>
              <a href="mailto:service@wikolabs.com">service@wikolabs.com</a>
              <a
                href="https://mediwyz.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Mediwyz (Projet livré)
              </a>
            </div>
            {/* TODO: Uncomment when legal pages are ready
            <div className={s.footerCol}>
              <h4>Légal</h4>
              <a href="/mentions-legales">Mentions légales</a>
              <a href="/cgv">CGV</a>
              <a href="/confidentialite">Confidentialité</a>
            </div>
            */}
          </div>
        </div>

        <div className={s.footerBottom}>
          <div className={s.footerCopy}>
            © {new Date().getFullYear()} Wikolabs SARLU — Antananarivo, Madagascar
          </div>
          {/* TODO: Uncomment when social profiles are live
          <div className={s.footerSocials}>
            <a href="https://linkedin.com/company/wikolabs" className={s.footerSocial}>LinkedIn</a>
            <a href="https://github.com/wikolabs" className={s.footerSocial}>GitHub</a>
          </div>
          */}
        </div>
      </footer>
    </>
  );
}