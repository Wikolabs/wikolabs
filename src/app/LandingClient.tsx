"use client";

import { useState, useEffect, useCallback } from "react";
import { useTranslations } from "next-intl";
import s from "./page.module.css";
import HeroBg from "./HeroBg";
import LocaleSwitcher from "@/components/LocaleSwitcher";
import type { SiteContent } from "@/lib/content";
import ProjectSimulator from "@/components/ProjectSimulator";
import PackagedOffers from "@/components/PackagedOffers";
import BookingModal from "@/components/BookingModal";

export interface BookingPrefill {
  type?: string;
  scale?: string;
  startStep?: number;
  offerLabel?: { fr: string; en: string };
  offerPrice?: { fr: string; en: string };
  offerDuration?: { fr: string; en: string };
}

export default function LandingClient({
  content,
  locale,
}: {
  content: SiteContent;
  locale: string;
}) {
  const t = useTranslations();
  const {
    hero,
    client_problems,
    client_solutions,
    roles,
    why_clients,
    process,
    testimonials,
    faq,
  } = content;

  const marqueeDouble = [...hero.marquee_items, ...hero.marquee_items];
  const [menuOpen, setMenuOpen] = useState(false);
  const [bookingOpen, setBookingOpen] = useState(false);
  const [bookingPrefill, setBookingPrefill] = useState<BookingPrefill>({});

  const openBooking = useCallback((prefill?: BookingPrefill) => {
    setBookingPrefill(prefill || {});
    setBookingOpen(true);
  }, []);

  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth > 1135) setMenuOpen(false);
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
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
          <a href="#offres" className={s.navLink}>{t("nav.offers")}</a>
          <a href="#processus" className={s.navLink}>{t("nav.process")}</a>
          <a href="#expertise" className={s.navLink}>{t("nav.team")}</a>
          <a href="#faq" className={s.navLink}>{t("nav.faq")}</a>
          <LocaleSwitcher />
          <button onClick={() => openBooking()} className={s.navCta}>
            {t("nav.cta")}
          </button>
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
          <a href="#offres" className={s.mobileLink} onClick={closeMenu}>{t("nav.offers")}</a>
          <a href="#processus" className={s.mobileLink} onClick={closeMenu}>{t("nav.process")}</a>
          <a href="#expertise" className={s.mobileLink} onClick={closeMenu}>{t("nav.team")}</a>
          <a href="#faq" className={s.mobileLink} onClick={closeMenu}>{t("nav.faq")}</a>
          <div style={{ padding: "12px 0" }}>
            <LocaleSwitcher />
          </div>
          <button
            className={s.btnPrimary}
            onClick={() => { closeMenu(); openBooking(); }}
            style={{ marginTop: 8, textAlign: "center", justifyContent: "center" }}
          >
            {t("nav.cta_arrow")}
          </button>
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
          <button onClick={() => openBooking()} className={s.btnPrimary}>
            {t("nav.cta_arrow")}
          </button>
          <a href="#processus" className={s.btnSecondary}>
            {t("hero.how_it_works")}
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
          {t("problems.tag")}
        </div>
        <h2 className={s.sectionTitle}>{t("problems.title")}</h2>
        <p className={s.sectionDesc}>{t("problems.desc")}</p>

        <div className={s.problemGrid}>
          <div className={s.problemCol}>
            <h3>
              <span className={`${s.problemBadge} ${s.problemBadgeRed}`}>
                {t("problems.badge_bad")}
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
                {t("problems.badge_good")}
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

      {/* ── WHY CLIENTS ── */}
      <section className={`${s.section} ${s.valuesSection}`}>
        <div className={s.sectionTag}>
          <span className={s.sectionTagLine} />
          {t("why_clients.tag")}
        </div>
        <h2 className={s.sectionTitle}>{t("why_clients.title")}</h2>
        <p className={s.sectionDesc}>{t("why_clients.desc")}</p>

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
          {t("expertise.tag")}
        </div>
        <h2 className={s.sectionTitle}>
          {t("expertise.title", { count: roles.length })}
        </h2>
        <p className={s.sectionDesc}>{t("expertise.desc")}</p>

        <div className={s.rolesGrid}>
          {roles.map((r, i) => (
            <div className={s.roleCard} key={i}>
              <span className={s.roleEmoji}>{r.emoji}</span>
              <div className={s.roleTitle}>{r.title}</div>
              <div className={s.roleDesc}>{r.desc}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ── PACKAGED OFFERS ── */}
      <PackagedOffers locale={locale} onBooking={openBooking} />

      {/* ── PROJECT SIMULATOR ── */}
      <ProjectSimulator locale={locale} onBooking={openBooking} />

      {/* ── PROCESS ── */}
      <section id="processus" className={s.section}>
        <div className={s.sectionTag}>
          <span className={s.sectionTagLine} />
          {t("process.tag")}
        </div>
        <h2 className={s.sectionTitle}>
          {t("process.title", { count: process.length })}
        </h2>
        <p className={s.sectionDesc}>{t("process.desc")}</p>

        <div className={s.timeline}>
          {process.map((step, i) => (
            <div className={s.timelineItem} key={i}>
              <div className={s.timelineDot} />
              <div className={s.timelineNum}>{t("process.step")} {step.num}</div>
              <div className={s.timelineTitle}>{step.title}</div>
              <div className={s.timelineText}>{step.text}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ── TESTIMONIALS ── */}
      {/* <section className={`${s.section} ${s.clientSection}`}>
        <div className={s.sectionTag}>
          <span className={s.sectionTagLine} />
          {t("testimonials.tag")}
        </div>
        <h2 className={s.sectionTitle}>{t("testimonials.title")}</h2>

        <div className={s.clientGrid}>
          {testimonials.map((tm, i) => (
            <div className={s.clientCard} key={i}>
              <div className={s.clientQuote}>{tm.quote}</div>
              <div className={s.clientInfo}>
                <div className={s.clientAvatar}>{tm.initials}</div>
                <div>
                  <div className={s.clientName}>{tm.name}</div>
                  <div className={s.clientRole}>{tm.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section> */}

      {/* ── FAQ ── */}
      <section id="faq" className={s.section}>
        <div className={s.sectionTag}>
          <span className={s.sectionTagLine} />
          {t("faq.tag")}
        </div>
        <h2 className={s.sectionTitle}>{t("faq.title")}</h2>

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
        <h2 className={s.ctaTitle}>{t("cta.title")}</h2>
        <p className={s.ctaText}>{t("cta.desc")}</p>
        <div className={s.ctaActions}>
          <button onClick={() => openBooking()} className={s.btnPrimary}>
            {t("cta.button")}
          </button>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer className={s.footer}>
        <div className={s.footerTop}>
          <div className={s.footerBrand}>
            <div className={s.footerBrandName}>
              <img src="/wikolabs-logo.svg" alt="Wikolabs" height={32} className={s.logoImg} />
            </div>
            <div className={s.footerBrandText}>{t("footer.brand_text")}</div>
          </div>

          <div className={s.footerCols}>
            <div className={s.footerCol}>
              <h4>{t("footer.nav_title")}</h4>
              <a href="#offres">{t("nav.offers")}</a>
              <a href="#processus">{t("nav.process")}</a>
              <a href="#expertise">{t("nav.team")}</a>
              <a href="#faq">{t("nav.faq")}</a>
            </div>
            <div className={s.footerCol}>
              <h4>{t("footer.contact_title")}</h4>
              <a href="mailto:team@wikolabs.com">team@wikolabs.com</a>
            </div>
          </div>
        </div>

        <div className={s.footerBottom}>
          <div className={s.footerCopy}>
            © {new Date().getFullYear()} Wikolabs SARLU — Antananarivo, Madagascar
          </div>
        </div>
      </footer>

      {/* ── BOOKING MODAL ── */}
      <BookingModal
        locale={locale}
        open={bookingOpen}
        onClose={() => setBookingOpen(false)}
        prefill={bookingPrefill}
      />
    </>
  );
}
