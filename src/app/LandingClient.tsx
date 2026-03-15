"use client";

import { useState, useEffect } from "react";
import s from "./page.module.css";
import HeroBg from "./HeroBg";
import type { SiteContent } from "@/lib/content";

export default function LandingClient({ content }: { content: SiteContent }) {
  const {
    hero,
    client_problems,
    client_solutions,
    roles,
    why_clients,
    pricing,
    process,
    testimonials,
    faq,
  } = content;

  const marqueeDouble = [...hero.marquee_items, ...hero.marquee_items];
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
          <img src="/wikolabs-logo.svg" alt="Wikolabs" height={36} className={s.logoImg} />
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
        <HeroBg />
        <div className={`${s.heroGlow} ${s.heroGlow1}`} />
        <div className={`${s.heroGlow} ${s.heroGlow2}`} />

        <div className={s.heroTag}>
          <span className={s.heroTagLine} />
          {hero.tag}
        </div>

        <h1 className={s.heroTitle}>
          {hero.title_line1}
          <br />
          {hero.title_line2}{" "}
          <span className={s.heroTitleAccent}>{hero.title_accent}</span>.
        </h1>

        <p className={s.heroSub}>{hero.subtitle}</p>

        <div className={s.heroActions}>
          <a href="mailto:service@wikolabs.com" className={s.btnPrimary}>
            Démarrer un projet →
          </a>
          <a href="#processus" className={s.btnSecondary}>
            Comment ça marche
          </a>
        </div>

        <div className={s.heroStats}>
          {hero.stats.map((stat, i) => (
            <div className={s.statItem} key={i}>
              <span className={s.statValue}>{stat.value}</span>
              <span className={s.statLabel}>{stat.label}</span>
            </div>
          ))}
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
            {client_problems.map((p, i) => (
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
            {client_solutions.map((p, i) => (
              <div className={`${s.problemCard} ${s.problemCardGood}`} key={i}>
                <div className={s.problemCardTitle}>{p.title}</div>
                <div className={s.problemCardText}>{p.text}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── OUR APPROACH ── */}
      <section className={s.section}>
        <div className={s.sectionTag}>
          <span className={s.sectionTagLine} />
          Notre approche
        </div>
        <h2 className={s.sectionTitle}>
          Des marges faibles. Des talents investis.
        </h2>
        <p className={s.sectionDesc}>
          Notre modèle est conçu pour que la majorité de votre budget aille
          directement aux experts qui construisent votre projet — pas dans
          des frais de structure.
        </p>

        <div className={s.splitGrid}>
          <div className={s.splitVisual}>
            <div className={s.barChart}>
              <div className={`${s.bar} ${s.bar70}`}>
                <span className={s.barLabel}>&lt;15%</span>
                <span className={s.barDesc}>Nos frais</span>
              </div>
              <div className={`${s.bar} ${s.bar20}`}>
                <span className={s.barLabel}>40-60%</span>
                <span className={s.barDesc}>Agences classiques</span>
              </div>
            </div>
            <div className={s.barBottom}>
              Comparaison marge Wikolabs vs agences traditionnelles
            </div>
          </div>

          <div className={s.splitContent}>
            <div className={s.splitItem}>
              <div className={`${s.splitIcon} ${s.splitIcon70}`}>✓</div>
              <div>
                <div className={s.splitItemTitle}>Budget optimisé</div>
                <div className={s.splitItemText}>
                  Nos frais de gestion sont parmi les plus bas du marché.
                  Votre budget finance le travail réel, pas une structure lourde.
                </div>
              </div>
            </div>
            <div className={s.splitItem}>
              <div className={`${s.splitIcon} ${s.splitIcon20}`}>✓</div>
              <div>
                <div className={s.splitItemTitle}>Talents motivés</div>
                <div className={s.splitItemText}>
                  Nos experts sont rémunérés à la hauteur de leur contribution.
                  Résultat : ils sont directement investis dans la réussite de votre projet.
                </div>
              </div>
            </div>
            <div className={s.splitItem}>
              <div className={`${s.splitIcon} ${s.splitIcon10}`}>✓</div>
              <div>
                <div className={s.splitItemTitle}>Formation continue incluse</div>
                <div className={s.splitItemText}>
                  Une partie de nos frais finance la montée en compétences permanente
                  de nos membres. Vos techniciens restent à la pointe.
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
          {why_clients.map((v, i) => (
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
          {roles.length} spécialisations à votre service.
        </h2>
        <p className={s.sectionDesc}>
          Des profils sélectionnés sur projets réels, formés en continu, positionnés 25% sous le marché
          international. De l&#39;IA au design, du backend au DevOps.
        </p>

        <div className={s.rolesGrid}>
          {roles.map((r, i) => (
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
              {pricing.map((p, i) => (
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
          Du brief à la livraison : {process.length} étapes.
        </h2>
        <p className={s.sectionDesc}>
          Un processus clair, agile, avec validation à chaque étape.
          Vous gardez le contrôle de bout en bout.
        </p>

        <div className={s.timeline}>
          {process.map((t, i) => (
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
          {testimonials.map((t, i) => (
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
          {faq.map((f, i) => (
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
            </div>
          </div>
        </div>

        <div className={s.footerBottom}>
          <div className={s.footerCopy}>
            © {new Date().getFullYear()} Wikolabs SARLU — Antananarivo, Madagascar
          </div>
        </div>
      </footer>
    </>
  );
}