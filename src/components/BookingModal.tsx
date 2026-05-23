"use client";

import { useState, useMemo, useEffect, useCallback } from "react";
import Cal, { getCalApi } from "@calcom/embed-react";
import styles from "./BookingModal.module.css";
import {
  PROJECT_TYPES,
  PROJECT_SCALES,
  computeEstimate,
  formatPrice,
  type Lang,
} from "@/lib/simulatorData";
import type { BookingPrefill } from "@/app/LandingClient";

// Cal.com booking slug — format: "username/event" or "team/team-slug/event"
// Verify your exact URL at: app.cal.com → Availability → copy the booking link path
const CAL_LINK = "wikolabs/30min";
const CAL_NS   = "wk30";

const i18n = {
  fr: {
    steps: ["Votre projet", "Vos coordonnées", "Choisir un créneau"],
    step1Title: "Quel projet avez-vous en tête ?",
    step2Title: "Comment vous contacter ?",
    step2Sub: "Pour qu'on puisse préparer notre échange.",
    step3Title: "Choisissez un créneau",
    step3Sub: "30 minutes pour discuter de votre projet.",
    projectType: "Type de projet",
    projectScale: "Envergure",
    estimate: "Estimation",
    duration: "Durée",
    next: "Continuer",
    back: "Retour",
    nameLabel: "Nom",
    namePlaceholder: "Marie Dupont",
    emailLabel: "Email",
    emailPlaceholder: "marie@exemple.com",
    descLabel: "Décrivez votre projet",
    descPlaceholder: "Je veux créer un chatbot pour mon cabinet médical qui répond aux questions fréquentes des patients...",
    optional: "facultatif",
    bookCall: "Choisir un créneau",
    booked: "Rendez-vous confirmé !",
    bookedSub: "Vous recevrez un email de confirmation. À très vite !",
    close: "Fermer",
    skip: "Passer cette étape",
    emailError: "Nom et email requis pour continuer.",
  },
  en: {
    steps: ["Your project", "Your details", "Pick a slot"],
    step1Title: "What project do you have in mind?",
    step2Title: "How can we reach you?",
    step2Sub: "So we can prepare our conversation.",
    step3Title: "Pick a time slot",
    step3Sub: "30 minutes to discuss your project.",
    projectType: "Project type",
    projectScale: "Scale",
    estimate: "Estimate",
    duration: "Duration",
    next: "Continue",
    back: "Back",
    nameLabel: "Name",
    namePlaceholder: "Jane Smith",
    emailLabel: "Email",
    emailPlaceholder: "jane@example.com",
    descLabel: "Describe your project",
    descPlaceholder: "I want to create a chatbot for my medical practice that answers common patient questions...",
    optional: "optional",
    bookCall: "Pick a slot",
    booked: "Meeting confirmed!",
    bookedSub: "You'll receive a confirmation email. Talk soon!",
    close: "Close",
    skip: "Skip this step",
    emailError: "Name and email are required to continue.",
  },
};

interface BookingModalProps {
  locale: string;
  open: boolean;
  onClose: () => void;
  prefill?: BookingPrefill;
}

export default function BookingModal({ locale, open, onClose, prefill }: BookingModalProps) {
  const lang = (locale === "en" ? "en" : "fr") as Lang;
  const t = i18n[lang];
  const offerLabel = prefill?.offerLabel?.[lang];
  const offerPrice = prefill?.offerPrice?.[lang];
  const offerDuration = prefill?.offerDuration?.[lang];
  const cartServices = prefill?.cartServices;
  const [step, setStep] = useState(1);
  const [selectedType, setSelectedType] = useState("mvp-saas");
  const [selectedScale, setSelectedScale] = useState("mvp");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [description, setDescription] = useState("");
  const [booked, setBooked] = useState(false);
  const [formError, setFormError] = useState("");

  // Listen for cal.com booking
  useEffect(() => {
    let mounted = true;
    getCalApi({ namespace: CAL_NS }).then((cal) => {
      if (!mounted) return;
      cal("init", CAL_NS, { origin: "https://app.cal.com" });
      cal("on", {
        action: "bookingSuccessful",
        callback: () => setBooked(true),
      });
    });
    return () => { mounted = false; };
  }, []);

  // Apply prefill and reset on open
  useEffect(() => {
    if (open) {
      setBooked(false);
      if (prefill?.type) setSelectedType(prefill.type);
      if (prefill?.scale) setSelectedScale(prefill.scale);
      setStep(prefill?.startStep || 1);
      if (prefill?.cartServices?.length) {
        const list = prefill.cartServices.map((s) => s.title).join(", ");
        const header = lang === "fr" ? `Services souhaités : ${list}` : `Requested services: ${list}`;
        const answersBlocks = prefill.cartServices
          .filter((s) => s.answers)
          .map((s) => s.answers as string);
        const body = answersBlocks.length > 0 ? "\n\n" + answersBlocks.join("\n\n") : "";
        setDescription(header + body);
      } else {
        setDescription("");
      }
    }
  }, [open, prefill]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") onClose(); };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [onClose]);

  const result = useMemo(() => {
    const est = computeEstimate(selectedType, selectedScale);
    return { ...est, durationLabel: est.duration[lang] };
  }, [selectedType, selectedScale, lang]);

  const typeObj = PROJECT_TYPES.find((p) => p.id === selectedType);
  const typeLabel = typeObj?.label[lang] || "";
  const scaleLabel = PROJECT_SCALES.find((s) => s.id === selectedScale)?.label[lang] || "";

  const bookingNotes = useMemo(() => {
    if (offerLabel) {
      return [
        `Offre: ${offerLabel}`,
        `Prix: ${offerPrice}`,
        `Durée: ${offerDuration}`,
        description ? `Description: ${description}` : "",
      ].filter(Boolean).join("\n");
    }
    if (cartServices?.length) {
      const list = cartServices.map((s) => `• ${s.title} (${s.category})`).join("\n");
      return [
        lang === "fr" ? `Services sélectionnés:\n${list}` : `Selected services:\n${list}`,
        description ? `\n${lang === "fr" ? "Détails" : "Details"}: ${description}` : "",
      ].filter(Boolean).join("\n");
    }
    return [
      `${t.projectType}: ${typeLabel} — ${scaleLabel}`,
      `${t.estimate}: ${formatPrice(result.min, lang)} – ${formatPrice(result.max, lang)} €`,
      `${t.duration}: ${result.durationLabel}`,
      description ? `Description: ${description}` : "",
    ].filter(Boolean).join("\n");
  }, [prefill, typeLabel, scaleLabel, result, description, lang, cartServices]);

  const goTo = useCallback((s: number) => setStep(s), []);

  if (!open) return null;

  return (
    <div className={styles.overlay} onClick={onClose}>
      <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
        <button className={styles.closeBtn} onClick={onClose} aria-label="Close">
          <span /><span />
        </button>

        {/* ── Step indicator ── */}
        {!booked && (
          <div className={styles.stepper}>
            {t.steps.map((label, i) => (
              <div key={i} className={`${styles.stepperItem} ${step > i + 1 ? styles.stepperDone : ""} ${step === i + 1 ? styles.stepperCurrent : ""}`}>
                <div className={styles.stepperNum}>{step > i + 1 ? "✓" : i + 1}</div>
                <span className={styles.stepperLabel}>{label}</span>
              </div>
            ))}
          </div>
        )}

        {/* ── STEP 1: Project selection ── */}
        {step === 1 && (
          <div className={styles.body}>
            <h3 className={styles.title}>{t.step1Title}</h3>

            <div className={styles.group}>
              <label className={styles.label}>{t.projectType}</label>
              <div className={styles.optionsGrid}>
                {PROJECT_TYPES.map((pt) => (
                  <button
                    key={pt.id}
                    className={`${styles.chip} ${selectedType === pt.id ? styles.chipActive : ""}`}
                    onClick={() => setSelectedType(pt.id)}
                  >
                    <span className={styles.chipIcon}>{pt.icon}</span>
                    {pt.label[lang]}
                  </button>
                ))}
              </div>
            </div>

            <div className={styles.group}>
              <label className={styles.label}>{t.projectScale}</label>
              <div className={styles.scaleRow}>
                {PROJECT_SCALES.map((sc) => (
                  <button
                    key={sc.id}
                    className={`${styles.scaleCard} ${selectedScale === sc.id ? styles.scaleActive : ""}`}
                    onClick={() => setSelectedScale(sc.id)}
                  >
                    <span className={styles.scaleName}>{sc.label[lang]}</span>
                    <span className={styles.scaleDur}>{sc.duration[lang]}</span>
                  </button>
                ))}
              </div>
            </div>

            <div className={styles.resultBar}>
              <div className={styles.resultCol}>
                <span className={styles.resultLabel}>{t.duration}</span>
                <span className={styles.resultVal}>{result.durationLabel}</span>
              </div>
            </div>
            {/* <button className={styles.btnGhost} onClick={() => goTo(2)} style={{ marginTop: 4, fontSize: "0.85rem", opacity: 0.6 }}>
              {t.skip}
            </button> */}
            <button className={styles.btnPrimary} onClick={() => goTo(2)}>
              {t.next}
            </button>
          </div>
        )}

        {/* ── STEP 2: Contact form ── */}
        {step === 2 && (
          <div className={styles.body}>
            <h3 className={styles.title}>{t.step2Title}</h3>
            <p className={styles.subtitle}>{t.step2Sub}</p>

            <div className={styles.recap}>
              {offerLabel ? (
                <>
                  <span>{offerLabel}</span>
                  <span className={styles.recapDot}>·</span>
                  <span className={styles.recapAccent}>{offerPrice}</span>
                  <span className={styles.recapDot}>·</span>
                  <span>{offerDuration}</span>
                </>
              ) : cartServices?.length ? (
                <>
                  <span className={styles.recapAccent}>🛒 {cartServices.length} {lang === "fr" ? `service${cartServices.length > 1 ? "s" : ""} sélectionné${cartServices.length > 1 ? "s" : ""}` : `service${cartServices.length > 1 ? "s" : ""} selected`}</span>
                  <span className={styles.recapDot}>·</span>
                  <span>{cartServices.slice(0, 2).map((s) => s.title).join(", ")}{cartServices.length > 2 ? ` +${cartServices.length - 2}` : ""}</span>
                </>
              ) : (
                <>
                  <span>{typeObj?.icon} {typeLabel}</span>
                  <span className={styles.recapDot}>·</span>
                  <span>{scaleLabel}</span>
                  <span className={styles.recapDot}>·</span>
                  <span className={styles.recapAccent}>{result.durationLabel}</span>
                </>
              )}
            </div>

            <div className={styles.formRow}>
              <div className={styles.field}>
                <label className={styles.label}>{t.nameLabel}</label>
                <input type="text" className={styles.input} placeholder={t.namePlaceholder} value={name} onChange={(e) => { setName(e.target.value); setFormError(""); }} />
              </div>
              <div className={styles.field}>
                <label className={styles.label}>{t.emailLabel}</label>
                <input type="email" className={styles.input} placeholder={t.emailPlaceholder} value={email} onChange={(e) => { setEmail(e.target.value); setFormError(""); }} />
              </div>
            </div>

            <div className={styles.field}>
              <label className={styles.label}>{t.descLabel} <span className={styles.opt}>({t.optional})</span></label>
              <textarea className={styles.textarea} placeholder={t.descPlaceholder} rows={3} value={description} onChange={(e) => setDescription(e.target.value)} />
            </div>
            {formError && (
              <p style={{ color: "var(--color-error, #f87171)", fontSize: "0.85rem", margin: "4px 0 0" }}>
                {formError}
              </p>
            )}
            <div className={styles.actions}>
              <button className={styles.btnGhost} onClick={() => goTo(1)}>{t.back}</button>
              <button
                className={styles.btnPrimary}
                onClick={() => {
                  if (!name.trim() || !email.trim()) {
                    setFormError(t.emailError);
                    return;
                  }
                  setFormError("");
                  goTo(3);
                }}
              >
                {t.bookCall}
              </button>
            </div>
          </div>
        )}

        {/* ── STEP 3: Cal.com ── */}
        {step === 3 && !booked && (
          <div className={styles.body}>
            <h3 className={styles.title}>{t.step3Title}</h3>
            <p className={styles.subtitle}>{t.step3Sub}</p>

            <div className={styles.calWrap}>
              <Cal
                namespace={CAL_NS}
                calLink={CAL_LINK}
                style={{ width: "100%", height: "100%", overflow: "auto" }}
                config={{
                  layout: "month_view",
                  theme: "dark",
                  name: name || '',
                  email: email || '',
                  notes: bookingNotes,
                }}
              />
            </div>

            <button className={styles.btnGhost} onClick={() => goTo(2)} style={{ alignSelf: "flex-start" }}>{t.back}</button>
          </div>
        )}

        {/* ── Success ── */}
        {booked && (
          <div className={styles.body}>
            <div className={styles.success}>
              <div className={styles.successCheck}>✓</div>
              <h3 className={styles.title}>{t.booked}</h3>
              <p className={styles.subtitle}>{t.bookedSub}</p>
              <button className={styles.btnPrimary} onClick={onClose} style={{ marginTop: 8 }}>{t.close}</button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
