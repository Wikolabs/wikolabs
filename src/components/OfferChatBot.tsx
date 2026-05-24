"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import styles from "./OfferChatBot.module.css";
import { LuX, LuSend, LuBot, LuShoppingCart } from "react-icons/lu";

interface Message {
  role: "bot" | "user";
  text: string;
  streaming?: boolean;
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
    placeholder: "Votre réponse...",
    send: "Envoyer",
    addToCart: "Ajouter au panier",
    addWithout: "Ajouter sans préciser →",
    errorMsg: "Une erreur est survenue. Réessayez.",
  },
  en: {
    title: "Wikolabs Assistant",
    placeholder: "Your answer...",
    send: "Send",
    addToCart: "Add to cart",
    addWithout: "Add without details →",
    errorMsg: "An error occurred. Please try again.",
  },
};

function buildSystemPrompt(offerTitle: string, questions: string[], lang: "fr" | "en"): string {
  const topicHints = questions.join(", ");
  if (lang === "fr") {
    return `Tu es l'assistant commercial de Wikolabs, une agence spécialisée en intelligence artificielle. Un client vient d'exprimer son intérêt pour l'offre : **${offerTitle}**.

Ton objectif : collecter les informations essentielles pour préparer un devis personnalisé. Sujets à explorer : ${topicHints}.

Règles :
- Pose UNE seule question à la fois, de façon naturelle et conversationnelle
- Adapte chaque question selon les réponses précédentes
- Sois chaleureux, professionnel et concis (2 phrases max par réponse)
- Ne mentionne jamais de prix ou de tarifs
- Après 3 à 4 échanges, quand tu as assez d'informations, fais un récapitulatif bref et termine ton message par le marqueur exact : [PRÊT]
- Commence immédiatement par ta première question, sans introduction`;
  }
  return `You are Wikolabs' sales assistant, an AI agency. A client has just expressed interest in the offer: **${offerTitle}**.

Your goal: collect essential information to prepare a personalized quote. Topics to explore: ${topicHints}.

Rules:
- Ask ONE question at a time, in a natural and conversational way
- Adapt each question based on previous answers
- Be warm, professional and concise (2 sentences max per response)
- Never mention prices or rates
- After 3-4 exchanges, when you have enough information, give a brief summary and end your message with the exact marker: [READY]
- Start immediately with your first question, without any introduction`;
}

function renderText(text: string) {
  return text.split("\n").map((line, li) => (
    <span key={li}>
      {li > 0 && <br />}
      {line.split(/\*\*(.*?)\*\*/g).map((part, i) =>
        i % 2 === 1 ? <strong key={i}>{part}</strong> : <span key={i}>{part}</span>
      )}
    </span>
  ));
}

export default function OfferChatBot({ locale, offerTitle, questions, onComplete, onSkip, onClose }: Props) {
  const lang = locale === "en" ? "en" : "fr";
  const t = i18n[lang];
  const readyMarker = lang === "fr" ? "[PRÊT]" : "[READY]";

  const [messages, setMessages] = useState<Message[]>([]);
  const [inputVal, setInputVal] = useState("");
  const [done, setDone] = useState(false);
  const [isStreaming, setIsStreaming] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const initialized = useRef(false);
  const apiHistory = useRef<{ role: "user" | "assistant"; content: string }[]>([]);

  const scrollBottom = () =>
    setTimeout(() => messagesEndRef.current?.scrollIntoView({ behavior: "smooth" }), 50);

  const streamResponse = useCallback(async (history: { role: "user" | "assistant"; content: string }[]) => {
    setIsStreaming(true);
    setMessages(prev => [...prev, { role: "bot", text: "", streaming: true }]);
    scrollBottom();

    let fullText = "";
    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          messages: history,
          systemPrompt: buildSystemPrompt(offerTitle, questions, lang),
        }),
      });

      if (!res.ok || !res.body) throw new Error("Stream failed");

      const reader = res.body.getReader();
      const decoder = new TextDecoder();

      while (true) {
        const { done: streamDone, value } = await reader.read();
        if (streamDone) break;
        fullText += decoder.decode(value, { stream: true });

        const displayText = fullText.replace(readyMarker, "").trimEnd();
        setMessages(prev => {
          const copy = [...prev];
          copy[copy.length - 1] = { role: "bot", text: displayText, streaming: true };
          return copy;
        });
        scrollBottom();
      }

      const isReady = fullText.includes(readyMarker);
      const finalText = fullText.replace(readyMarker, "").trimEnd();
      apiHistory.current = [...history, { role: "assistant", content: fullText }];

      setMessages(prev => {
        const copy = [...prev];
        copy[copy.length - 1] = { role: "bot", text: finalText, streaming: false };
        return copy;
      });

      if (isReady) setDone(true);
    } catch {
      setMessages(prev => {
        const copy = [...prev];
        copy[copy.length - 1] = { role: "bot", text: t.errorMsg, streaming: false };
        return copy;
      });
    } finally {
      setIsStreaming(false);
      scrollBottom();
      setTimeout(() => inputRef.current?.focus(), 100);
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [offerTitle, questions, lang, readyMarker, t.errorMsg]);

  useEffect(() => {
    if (initialized.current) return;
    initialized.current = true;
    streamResponse([]);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => { document.body.style.overflow = ""; };
  }, []);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") onClose(); };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [onClose]);

  const handleSend = () => {
    if (!inputVal.trim() || isStreaming || done) return;
    const text = inputVal.trim();
    setInputVal("");

    const newHistory = [...apiHistory.current, { role: "user" as const, content: text }];
    setMessages(prev => [...prev, { role: "user", text }]);
    scrollBottom();
    streamResponse(newHistory);
  };

  const handleConfirm = () => {
    const conversation = messages
      .filter(m => m.text)
      .map(m => `${m.role === "bot" ? "Assistant" : "Client"}: ${m.text}`)
      .join("\n\n");
    onComplete(`${offerTitle} :\n\n${conversation}`);
  };

  return (
    <div className={styles.overlay} onClick={onClose}>
      <div className={styles.chatWindow} onClick={e => e.stopPropagation()}>

        {/* Header */}
        <div className={styles.header}>
          <div className={styles.headerLeft}>
            <div className={styles.botAvatar}><LuBot size={16} /></div>
            <div className={styles.headerTitle}>{t.title}</div>
          </div>
          <button className={styles.closeBtn} onClick={onClose} aria-label="Fermer">
            <LuX size={15} />
          </button>
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
              <div className={`${styles.bubble} ${msg.streaming && msg.text === "" ? styles.typingBubble : ""}`}>
                {msg.streaming && msg.text === "" ? (
                  <><span /><span /><span /></>
                ) : renderText(msg.text)}
              </div>
            </div>
          ))}
          <div ref={messagesEndRef} />
        </div>

        {/* Input / Actions */}
        {!done ? (
          <div className={styles.inputRow}>
            <input
              ref={inputRef}
              className={styles.chatInput}
              placeholder={t.placeholder}
              value={inputVal}
              onChange={e => setInputVal(e.target.value)}
              onKeyDown={e => { if (e.key === "Enter") handleSend(); }}
              disabled={isStreaming}
            />
            <button
              className={styles.sendBtn}
              onClick={handleSend}
              disabled={!inputVal.trim() || isStreaming}
              aria-label={t.send}
            >
              <LuSend size={14} />
            </button>
          </div>
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
