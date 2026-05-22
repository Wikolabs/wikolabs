"use client";

import { useState, useEffect, useRef } from "react";
import styles from "./OfferChatBot.module.css";
import { LuX, LuSend, LuBot, LuShoppingCart, LuSkipForward } from "react-icons/lu";

interface Message {
  role: "bot" | "user";
  text: string;
}

interface Props {
  locale: string;
  offerTitle: string;
  questions: string[];
  onComplete: (answersText: string) => void;
  onSkip: () => void;
  onClose: () => void;
}

const i18n = {
  fr: {
    title: "Assistant Wikolabs",
    welcome: (title: string, count: number) =>
      `Avant d'ajouter **${title}** au panier, ${count} question${count > 1 ? "s" : ""} rapide${count > 1 ? "s" : ""} pour personnaliser votre devis.`,
    placeholder: "Votre réponse...",
    send: "Envoyer",
    skipQ: "Passer",
    skipAll: "Passer toutes les questions →",
    summary: "Parfait, voici le récapitulatif :",
    addToCart: "Ajouter au panier",
    addWithout: "Ajouter sans détails",
    skipped: "Non précisé",
    questionOf: (c: number, t: number) => `Question ${c} / ${t}`,
  },
  en: {
    title: "Wikolabs Assistant",
    welcome: (title: string, count: number) =>
      `Before adding **${title}** to your cart, ${count} quick question${count > 1 ? "s" : ""} to personalize your quote.`,
    placeholder: "Your answer...",
    send: "Send",
    skipQ: "Skip",
    skipAll: "Skip all questions →",
    summary: "Great, here's your summary:",
    addToCart: "Add to cart",
    addWithout: "Add without details",
    skipped: "Not specified",
    questionOf: (c: number, t: number) => `Question ${c} / ${t}`,
  },
};

function renderText(text: string) {
  return text.split(/\*\*(.*?)\*\*/g).map((part, i) =>
    i % 2 === 1 ? <strong key={i}>{part}</strong> : <span key={i}>{part}</span>
  );
}

export default function OfferChatBot({ locale, offerTitle, questions, onComplete, onSkip, onClose }: Props) {
  const lang = locale === "en" ? "en" : "fr";
  const t = i18n[lang];

  const [messages, setMessages] = useState<Message[]>([]);
  const [currentQ, setCurrentQ] = useState(0);
  const [inputVal, setInputVal] = useState("");
  const [answers, setAnswers] = useState<string[]>([]);
  const [done, setDone] = useState(false);
  const [typing, setTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const initialized = useRef(false);

  const scrollBottom = () =>
    setTimeout(() => messagesEndRef.current?.scrollIntoView({ behavior: "smooth" }), 50);

  useEffect(() => {
    if (initialized.current) return;
    initialized.current = true;
    setMessages([{ role: "bot", text: t.welcome(offerTitle, questions.length) }]);
    setTyping(true);
    const timer = setTimeout(() => {
      setTyping(false);
      setMessages(prev => [...prev, { role: "bot", text: questions[0] }]);
      scrollBottom();
      setTimeout(() => inputRef.current?.focus(), 100);
    }, 800);
    return () => clearTimeout(timer);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleSend = (skip?: true) => {
    const val = skip ? "" : inputVal.trim();
    if (!skip && !inputVal.trim()) return;

    const displayVal = val || t.skipped;
    setMessages(prev => [...prev, { role: "user", text: displayVal }]);
    const newAnswers = [...answers, val];
    setAnswers(newAnswers);
    setInputVal("");

    const nextIdx = currentQ + 1;
    setCurrentQ(nextIdx);
    scrollBottom();

    setTyping(true);
    setTimeout(() => {
      setTyping(false);
      if (nextIdx < questions.length) {
        setMessages(prev => [...prev, { role: "bot", text: questions[nextIdx] }]);
        scrollBottom();
        setTimeout(() => inputRef.current?.focus(), 50);
      } else {
        const lines = questions
          .map((q, i) => `• ${q.replace(/\s*\?$/, "")} : ${newAnswers[i] || t.skipped}`)
          .join("\n");
        setMessages(prev => [...prev, { role: "bot", text: `${t.summary}\n${lines}` }]);
        setDone(true);
        scrollBottom();
      }
    }, 550);
  };

  const handleConfirm = () => {
    const lines = questions
      .map((q, i) => `• ${q.replace(/\s*\?$/, "")} : ${answers[i] || t.skipped}`)
      .join("\n");
    onComplete(`${offerTitle} :\n${lines}`);
  };

  const isWaiting = !done && currentQ < questions.length;
  const progress = Math.round((currentQ / questions.length) * 100);

  return (
    <div className={styles.overlay} onClick={onClose}>
      <div className={styles.chatWindow} onClick={e => e.stopPropagation()}>

        {/* Header */}
        <div className={styles.header}>
          <div className={styles.headerLeft}>
            <div className={styles.botAvatar}><LuBot size={16} /></div>
            <div>
              <div className={styles.headerTitle}>{t.title}</div>
              {isWaiting && (
                <div className={styles.headerSub}>{t.questionOf(currentQ + 1, questions.length)}</div>
              )}
            </div>
          </div>
          <button className={styles.closeBtn} onClick={onClose} aria-label="Fermer">
            <LuX size={15} />
          </button>
        </div>

        {/* Progress bar */}
        <div className={styles.progressBar}>
          <div className={styles.progressFill} style={{ width: `${progress}%` }} />
        </div>

        {/* Messages */}
        <div className={styles.messages}>
          {messages.map((msg, i) => (
            <div
              key={i}
              className={`${styles.message} ${msg.role === "user" ? styles.msgUser : styles.msgBot}`}
            >
              {msg.role === "bot" && (
                <div className={styles.msgAvatar}><LuBot size={11} /></div>
              )}
              <div className={styles.bubble}>
                {msg.text.split("\n").map((line, li) => (
                  <span key={li}>
                    {li > 0 && <br />}
                    {renderText(line)}
                  </span>
                ))}
              </div>
            </div>
          ))}

          {typing && (
            <div className={`${styles.message} ${styles.msgBot}`}>
              <div className={styles.msgAvatar}><LuBot size={11} /></div>
              <div className={`${styles.bubble} ${styles.typingBubble}`}>
                <span /><span /><span />
              </div>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>

        {/* Input / Actions */}
        {!done ? (
          <>
            <div className={styles.inputRow}>
              <input
                ref={inputRef}
                className={styles.chatInput}
                placeholder={t.placeholder}
                value={inputVal}
                onChange={e => setInputVal(e.target.value)}
                onKeyDown={e => { if (e.key === "Enter") handleSend(); }}
              />
              <button
                className={styles.sendBtn}
                onClick={() => handleSend()}
                disabled={!inputVal.trim()}
                aria-label={t.send}
              >
                <LuSend size={14} />
              </button>
              <button
                className={styles.skipQBtn}
                onClick={() => handleSend(true)}
                title={t.skipQ}
                aria-label={t.skipQ}
              >
                <LuSkipForward size={13} />
              </button>
            </div>
            <button className={styles.skipAllBtn} onClick={onSkip}>{t.skipAll}</button>
          </>
        ) : (
          <div className={styles.actions}>
            <button className={styles.btnPrimary} onClick={handleConfirm}>
              <LuShoppingCart size={14} />
              {t.addToCart}
            </button>
            <button className={styles.btnGhost} onClick={onSkip}>{t.addWithout}</button>
          </div>
        )}
      </div>
    </div>
  );
}
