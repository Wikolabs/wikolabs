"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import { useTranslations } from "next-intl";
import s from "./page.module.css";
import LocaleSwitcher from "@/components/LocaleSwitcher";
import type { SiteContent } from "@/lib/content";
import PackagedOffers from "@/components/PackagedOffers";
import BookingModal from "@/components/BookingModal";
import Services from "@/components/Services";
import ServiceCartPanel from "@/components/ServiceCartPanel";
import type { CartItem } from "@/components/ServiceCartPanel";
import DemoApps from "@/components/DemoApps";
import TechStack from "@/components/TechStack";
import ChatBot from "@/components/ChatBot";
import HeroSlider from "@/components/HeroSlider";
import Values from "@/components/Values";
import UseCases from "@/components/UseCases";
import Industries from "@/components/Industries";
import OrbitalDiagram from "@/components/OrbitalDiagram";
import CommercialCycle from "@/components/CommercialCycle";
import BlogPreview from "@/components/BlogPreview";
import type { IconType } from "react-icons";
import { HiGlobeAlt, HiBolt, HiShieldCheck, HiCpuChip } from "react-icons/hi2";
import {
  LuTarget, LuHandshake, LuLanguages, LuDatabase, LuBrain, LuRefreshCw, LuCloud, LuCode,
  LuMessageSquare, LuChartBar, LuLayers, LuClock, LuUsers, LuShield,
  LuTrendingUp, LuMail, LuMonitor, LuLink, LuZap, LuStar, LuCheck,
  LuArrowUp, LuArrowDown, LuShoppingCart,
} from "react-icons/lu";

export interface BookingPrefill {
  type?: string;
  scale?: string;
  startStep?: number;
  offerLabel?: { fr: string; en: string };
  offerPrice?: { fr: string; en: string };
  offerDuration?: { fr: string; en: string };
  cartServices?: { title: string; category: string }[];
}

const VALUE_ICONS: IconType[] = [LuTarget, HiGlobeAlt, HiBolt, HiShieldCheck, LuHandshake, LuLanguages];
const ROLE_ICONS: IconType[] = [HiCpuChip, LuDatabase, LuBrain, LuCode, LuRefreshCw, LuCloud];
const PROBLEM_ICONS: IconType[] = [LuDatabase, LuRefreshCw, LuMessageSquare, LuChartBar, LuLayers, LuClock, LuUsers, LuShield];
const SOLUTION_ICONS: IconType[] = [LuBrain, LuTrendingUp, LuMail, LuMonitor, LuLink, LuZap, LuStar, LuCheck];

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
  } = content;

  const marqueeDouble = [...hero.marquee_items, ...hero.marquee_items];
  const [menuOpen, setMenuOpen] = useState(false);
  const [bookingOpen, setBookingOpen] = useState(false);
  const [bookingPrefill, setBookingPrefill] = useState<BookingPrefill>({});
  const [theme, setTheme] = useState<"dark" | "light">("dark");
  const openBooking = useCallback((prefill?: BookingPrefill) => {
    setBookingPrefill(prefill || {});
    setBookingOpen(true);
  }, []);

  const closeMenu = () => setMenuOpen(false);

  // Force scroll to top on every page load (prevent browser scroll restoration)
  useEffect(() => {
    if ("scrollRestoration" in history) history.scrollRestoration = "manual";
    window.scrollTo({ top: 0, behavior: "instant" });
  }, []);

  // Theme toggle
  useEffect(() => {
    const saved = localStorage.getItem("wk-theme") as "dark" | "light" | null;
    if (saved) setTheme(saved);
  }, []);

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("wk-theme", theme);
  }, [theme]);

  // Cursor spotlight
  useEffect(() => {
    const el = document.getElementById("spotlight");
    if (!el) return;
    const onMove = (e: MouseEvent) => {
      el.style.left = e.clientX + "px";
      el.style.top = e.clientY + "px";
    };
    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, []);

  // Particle canvas
  useEffect(() => {
    const canvas = document.getElementById("particle-canvas") as HTMLCanvasElement;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const particles: { x: number; y: number; vx: number; vy: number; size: number; opacity: number }[] = [];
    for (let i = 0; i < 60; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.3,
        vy: (Math.random() - 0.5) * 0.3,
        size: Math.random() * 1.5 + 0.5,
        opacity: Math.random() * 0.5 + 0.1,
      });
    }

    let animId: number;
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      const isDark = document.documentElement.getAttribute("data-theme") !== "light";
      const color = isDark ? "212,175,55" : "154,123,42";

      for (const p of particles) {
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0) p.x = canvas.width;
        if (p.x > canvas.width) p.x = 0;
        if (p.y < 0) p.y = canvas.height;
        if (p.y > canvas.height) p.y = 0;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${color},${p.opacity})`;
        ctx.fill();
      }
      animId = requestAnimationFrame(animate);
    };
    animate();

    const onResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    window.addEventListener("resize", onResize);
    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", onResize);
    };
  }, []);

  // Scroll reveal
  useEffect(() => {
    const els = document.querySelectorAll(".reveal");
    if (!els.length) return;
    const obs = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) e.target.classList.add("on"); }),
      { threshold: 0.12 }
    );
    els.forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  // Mobile menu resize
  useEffect(() => {
    const onResize = () => { if (window.innerWidth > 1135) setMenuOpen(false); };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  // Service cart
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [cartOpen, setCartOpen] = useState(false);
  const cartItemIds = new Set(cartItems.map((i) => i.id));

  const handleAddToCart = useCallback((item: CartItem) => {
    setCartItems((prev) => {
      const exists = prev.some((i) => i.id === item.id);
      return exists ? prev.filter((i) => i.id !== item.id) : [...prev, item];
    });
  }, []);

  const handleRemoveFromCart = useCallback((id: string) => {
    setCartItems((prev) => prev.filter((i) => i.id !== id));
  }, []);

  const handleValidateCart = useCallback(() => {
    setCartOpen(false);
    openBooking({
      startStep: 2,
      cartServices: cartItems.map((i) => ({ title: i.title, category: i.category })),
    });
  }, [cartItems, openBooking]);

  // Scroll teleport button — tracks whether user is near the top
  const [atTop, setAtTop] = useState(true);
  const [scrollBtnVisible, setScrollBtnVisible] = useState(false);
  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      setAtTop(y < 120);
      setScrollBtnVisible(y > 80);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleScrollTeleport = () => {
    if (atTop) {
      window.scrollTo({ top: document.body.scrollHeight, behavior: "smooth" });
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  // Counter animation for stats
  const statsRef = useRef<HTMLDivElement>(null);
  const [statsVisible, setStatsVisible] = useState(false);
  useEffect(() => {
    if (!statsRef.current) return;
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) setStatsVisible(true); },
      { threshold: 0.5 }
    );
    obs.observe(statsRef.current);
    return () => obs.disconnect();
  }, []);

  return (
    <>
      {/* ── EFFECTS ── */}
      <div id="spotlight" />
      <canvas id="particle-canvas" />
      <div className={s.grain} />

      {/* ── CART BUTTON ── */}
      <button
        className={`${s.cartBtn} ${scrollBtnVisible ? s.cartBtnVisible : ""}`}
        onClick={() => setCartOpen((v) => !v)}
        aria-label={locale === "fr" ? "Panier de services" : "Service cart"}
        title={locale === "fr" ? "Panier de services" : "Service cart"}
      >
        <LuShoppingCart size={20} />
        {cartItems.length > 0 && (
          <span className={s.cartBadge} key={cartItems.length}>{cartItems.length}</span>
        )}
      </button>

      {/* ── CART PANEL ── */}
      <ServiceCartPanel
        locale={locale}
        items={cartItems}
        open={cartOpen}
        onClose={() => setCartOpen(false)}
        onRemove={handleRemoveFromCart}
        onValidate={handleValidateCart}
      />

      {/* ── SCROLL TELEPORT BUTTON ── */}
      <button
        className={`${s.scrollBtn} ${scrollBtnVisible ? s.scrollBtnVisible : ""}`}
        onClick={handleScrollTeleport}
        aria-label={atTop ? "Aller en bas de la page" : "Retourner en haut de la page"}
        title={atTop ? (locale === "fr" ? "Aller en bas" : "Go to bottom") : (locale === "fr" ? "Retour en haut" : "Back to top")}
      >
        <span className={s.scrollBtnIcon}>
          {atTop ? <LuArrowDown size={20} /> : <LuArrowUp size={20} />}
        </span>
      </button>

      {/* ── NAV ── */}
      <nav className={s.nav}>
        <a href="#" className={s.logo} onClick={closeMenu}>
          <img src="/wikolabs-logo.png" alt="Wikolabs" height={32} className={s.logoImg} />
          <span className={s.logoText}>WIKOLABS</span>
        </a>
        <div className={s.navLinks}>
          <a href="#services" className={s.navLink}>{t("nav.offers")}</a>
          <a href="#demos" className={s.navLink}>{t("nav.demos")}</a>
          <a href="#processus" className={s.navLink}>{t("nav.process")}</a>
          <a href="#expertise" className={s.navLink}>{t("nav.team")}</a>
          <a href="#faq" className={s.navLink}>{t("nav.faq")}</a>
          <a href={`/${locale === "fr" ? "" : locale + "/"}blog`} className={s.navLink}>{t("nav.blog")}</a>
          <LocaleSwitcher />
          <button
            className={s.themeToggle}
            onClick={() => setTheme((v) => (v === "dark" ? "light" : "dark"))}
            aria-label="Toggle theme"
            title={theme === "dark" ? "Mode clair" : "Mode sombre"}
          >
            {theme === "dark" ? "☀" : "☾"}
          </button>
          <button onClick={() => openBooking()} className={s.navCta}>
            {t("nav.cta")}
          </button>
        </div>
        <div className={s.navRight}>
          <button
            className={s.themeToggle}
            onClick={() => setTheme((v) => (v === "dark" ? "light" : "dark"))}
            aria-label="Toggle theme"
          >
            {theme === "dark" ? "☀" : "☾"}
          </button>
          <button
            className={`${s.mobileMenuBtn} ${menuOpen ? s.mobileMenuOpen : ""}`}
            aria-label="Menu"
            onClick={() => setMenuOpen((v) => !v)}
          >
            <span /><span /><span />
          </button>
        </div>
      </nav>

      {/* ── MOBILE OVERLAY ── */}
      <div
        className={`${s.mobileOverlay} ${menuOpen ? s.mobileOverlayOpen : ""}`}
        onClick={closeMenu}
      >
        <div className={s.mobileNav} onClick={(e) => e.stopPropagation()}>
          <a href="#services" className={s.mobileLink} onClick={closeMenu}>{t("nav.offers")}</a>
          <a href="#demos" className={s.mobileLink} onClick={closeMenu}>{t("nav.demos")}</a>
          <a href="#processus" className={s.mobileLink} onClick={closeMenu}>{t("nav.process")}</a>
          <a href="#expertise" className={s.mobileLink} onClick={closeMenu}>{t("nav.team")}</a>
          <a href="#faq" className={s.mobileLink} onClick={closeMenu}>{t("nav.faq")}</a>
          <a href={`/${locale === "fr" ? "" : locale + "/"}blog`} className={s.mobileLink} onClick={closeMenu}>{t("nav.blog")}</a>
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
        <div className={`${s.heroGlow} ${s.heroGlow1}`} />
        <div className={`${s.heroGlow} ${s.heroGlow2}`} />
        <div className={`${s.heroGlow} ${s.heroGlow3}`} />

        <HeroSlider locale={locale} onBooking={() => openBooking()} />

        <div className={s.heroStats} ref={statsRef}>
          {hero.stats.map((stat, i) => (
            <div className={`${s.statItem} ${statsVisible ? s.statVisible : ""}`} key={i}
              style={{ transitionDelay: `${i * 0.15}s` }}>
              <span className={s.statValue}>{stat.value}</span>
              <span className={s.statLabel}>{stat.label}</span>
            </div>
          ))}
        </div>

      </section>

      {/* ── TECH STACK ── */}
      <TechStack locale={locale} />

      {/* ── MARQUEE ── */}
      <div className={s.marquee}>
        <div className={s.marqueeTrack}>
          {marqueeDouble.map((item, i) => (
            <span className={s.marqueeItem} key={i}>{item}</span>
          ))}
        </div>
      </div>

      {/* ── SERVICES ── */}
      <Services locale={locale} onAddToCart={handleAddToCart} cartItemIds={cartItemIds} />

      {/* ── ORBITAL DIAGRAM ── */}
      <OrbitalDiagram locale={locale} onBooking={() => openBooking()} />

      {/* ── COMMERCIAL CYCLE (integration stepper) ── */}
      <CommercialCycle locale={locale} />

      {/* ── USE CASES ── */}
      <UseCases locale={locale} />

      {/* ── CLIENT PROBLEM / SOLUTION ── */}
      <section id="pourquoi" className={`${s.section} ${s.problemSection}`}>
        <div className={`reveal ${s.sectionTag}`}>
          <span className={s.sectionTagLine} />
          {t("problems.tag")}
        </div>
        <h2 className={`reveal d1 ${s.sectionTitle}`}>{t("problems.title")}</h2>
        <p className={`reveal d2 ${s.sectionDesc}`}>{t("problems.desc")}</p>

        <div className={s.problemGrid}>
          <div className={s.problemCol}>
            <h3>
              <span className={`${s.problemBadge} ${s.problemBadgeRed}`}>
                {t("problems.badge_bad")}
              </span>
            </h3>
            {client_problems.map((p, i) => {
              const PIcon = PROBLEM_ICONS[i];
              return (
                <div className={`reveal d${Math.min(i + 1, 5)} ${s.problemCard} ${s.problemCardBad}`} key={i}>
                  {PIcon && <div className={`${s.problemCardIcon} ${s.problemCardIconBad}`}><PIcon size={18} /></div>}
                  <div className={s.problemCardTitle}>{p.title}</div>
                  <div className={s.problemCardText}>{p.text}</div>
                </div>
              );
            })}
          </div>
          <div className={s.problemCol}>
            <h3>
              <span className={`${s.problemBadge} ${s.problemBadgeGreen}`}>
                {t("problems.badge_good")}
              </span>
            </h3>
            {client_solutions.map((p, i) => {
              const SIcon = SOLUTION_ICONS[i];
              return (
                <div className={`reveal d${Math.min(i + 1, 5)} ${s.problemCard} ${s.problemCardGood}`} key={i}>
                  {SIcon && <div className={`${s.problemCardIcon} ${s.problemCardIconGood}`}><SIcon size={18} /></div>}
                  <div className={s.problemCardTitle}>{p.title}</div>
                  <div className={s.problemCardText}>{p.text}</div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── INDUSTRIES ── */}
      <Industries locale={locale} />

      {/* ── DEMO APPS ── */}
      <DemoApps locale={locale} />

      {/* ── WHY CLIENTS ── */}
      <section className={`${s.section} ${s.valuesSection}`}>
        <div className={`reveal ${s.sectionTag}`}>
          <span className={s.sectionTagLine} />
          {t("why_clients.tag")}
        </div>
        <h2 className={`reveal d1 ${s.sectionTitle}`}>{t("why_clients.title")}</h2>
        <p className={`reveal d2 ${s.sectionDesc}`}>{t("why_clients.desc")}</p>

        <div className={s.valuesGrid}>
          {why_clients.map((v, i) => {
            const VIcon = VALUE_ICONS[i];
            return (
              <div className={`reveal d${Math.min(i + 1, 5)} ${s.valueCard}`} key={i}>
                <div className={s.valueIcon}>{VIcon && <VIcon size={26} />}</div>
                <div className={s.valueTitle}>{v.title}</div>
                <div className={s.valueText}>{v.text}</div>
              </div>
            );
          })}
        </div>
      </section>

      {/* ── EXPERTISE / ROLES ── */}
      <section id="expertise" className={s.section}>
        <div className={`reveal ${s.sectionTag}`}>
          <span className={s.sectionTagLine} />
          {t("expertise.tag")}
        </div>
        <h2 className={`reveal d1 ${s.sectionTitle}`}>
          {t("expertise.title", { count: roles.length })}
        </h2>
        <p className={`reveal d2 ${s.sectionDesc}`}>{t("expertise.desc")}</p>

        <div className={s.rolesGrid}>
          {roles.map((r, i) => {
            const RIcon = ROLE_ICONS[i];
            return (
              <div className={`reveal d${Math.min(i + 1, 5)} ${s.roleCard}`} key={i}>
                <div className={s.roleEmoji}>{RIcon && <RIcon size={28} />}</div>
                <div className={s.roleTitle}>{r.title}</div>
                <div className={s.roleDesc}>{r.desc}</div>
              </div>
            );
          })}
        </div>
      </section>

      {/* ── PACKAGED OFFERS ── */}
      <PackagedOffers locale={locale} onBooking={openBooking} />

      {/* ── PROCESS ── */}
      <section id="processus" className={s.section}>
        <div className={`reveal ${s.sectionTag}`}>
          <span className={s.sectionTagLine} />
          {t("process.tag")}
        </div>
        <h2 className={`reveal d1 ${s.sectionTitle}`}>
          {t("process.title", { count: process.length })}
        </h2>
        <p className={`reveal d2 ${s.sectionDesc}`}>{t("process.desc")}</p>

        <div className={s.stepper}>
          {process.map((step, i) => (
            <div className={`reveal d${Math.min(i + 1, 4)} ${s.stepperItem}`} key={i}>
              <div className={s.stepperHead}>
                <div className={s.stepperCircle}>{String(i + 1).padStart(2, "0")}</div>
                {i < process.length - 1 && <div className={s.stepperConnector} />}
              </div>
              <div className={s.stepperBody}>
                <div className={s.stepperLabel}>{t("process.step")} {step.num}</div>
                <div className={s.stepperTitle}>{step.title}</div>
                <div className={s.stepperText}>{step.text}</div>
              </div>
            </div>
          ))}
        </div>
      </section>


      {/* ── VALUES ── */}
      <Values locale={locale} />

      {/* ── CHATBOT / FAQ ── */}
      <ChatBot locale={locale} />

      {/* ── BLOG PREVIEW ── */}
      <BlogPreview locale={locale} />

      {/* ── CTA ── */}
      <section className={s.ctaSection}>
        <div className={s.ctaGlow} />
        <div className={`reveal ${s.ctaTag}`}>
          {locale === "fr" ? "Passez à l'action" : "Take action"}
        </div>
        <h2 className={`reveal d1 ${s.ctaTitle}`}>{t("cta.title")}</h2>
        <p className={`reveal d2 ${s.ctaText}`}>{t("cta.desc")}</p>
        <div className={`reveal d3 ${s.ctaActions}`}>
          <button onClick={() => openBooking()} className={s.btnPrimary}>
            {t("cta.button")}
          </button>
          <a href="mailto:team@wikolabs.com" className={s.btnSecondary}>
            {t("cta.email")} ✉
          </a>
        </div>
        <div className={`reveal d4 ${s.ctaContact}`}>
          <a href="tel:+261386626100" className={s.ctaPhone}>
            📞 +261 38 66 261 00
          </a>
          <span className={s.ctaDivider}>·</span>
          <a href="mailto:contact@wikolabs.com" className={s.ctaPhone}>
            contact@wikolabs.com
          </a>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer className={s.footer}>
        <div className={s.footerTop}>
          <div className={s.footerBrand}>
            <div className={s.footerBrandName}>
              <img src="/wikolabs-logo.png" alt="Wikolabs" height={28} className={s.logoImg} />
            </div>
            <div className={s.footerBrandText}>{t("footer.brand_text")}</div>
          </div>

          <div className={s.footerCols}>
            <div className={s.footerCol}>
              <h4>{t("footer.nav_title")}</h4>
              <a href="#services">{t("nav.offers")}</a>
              <a href="#demos">{t("nav.demos")}</a>
              <a href="#processus">{t("nav.process")}</a>
              <a href="#expertise">{t("nav.team")}</a>
              <a href="#faq">{t("nav.faq")}</a>
              <a href={`/${locale === "fr" ? "" : locale + "/"}blog`}>{t("nav.blog")}</a>
            </div>
            <div className={s.footerCol}>
              <h4>{t("footer.services_title")}</h4>
              <a href={`/${locale}/services/production-ai`}>
                {locale === "fr" ? "Agents IA & Support" : "AI Agents & Support"}
              </a>
              <a href={`/${locale}/services/search-recommendation`}>
                {locale === "fr" ? "Recherche & Recommandation" : "Search & Recommendation"}
              </a>
              <a href={`/${locale}/services/commercial-automation`}>
                {locale === "fr" ? "Automatisation Commerciale" : "Sales Automation"}
              </a>
              <a href={`/${locale}/services/decision-intelligence`}>
                {locale === "fr" ? "Business Intelligence" : "Decision Intelligence"}
              </a>
              <a href={`/${locale}/services/data-vision`}>
                {locale === "fr" ? "Documents & Vision IA" : "Documents & Vision AI"}
              </a>
            </div>
            <div className={s.footerCol}>
              <h4>{t("footer.contact_title")}</h4>
              <a href="tel:+261386626100">📞 {t("footer.contact_phone")}</a>
              <a href="mailto:team@wikolabs.com">{t("footer.contact_email1")}</a>
              <a href="mailto:contact@wikolabs.com">{t("footer.contact_email2")}</a>
              <a href="https://www.linkedin.com/company/112261574" target="_blank" rel="noopener noreferrer">
                LinkedIn →
              </a>
            </div>
          </div>
        </div>

        <div className={s.footerBottom}>
          <div className={s.footerCopy}>
            © {new Date().getFullYear()} Wikolabs SARLU — Antananarivo, Madagascar
          </div>
          <div className={s.footerLegal}>
            {t("footer.legal")}
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
