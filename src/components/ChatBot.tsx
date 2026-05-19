"use client";

import { useState, useRef, useEffect } from "react";
import styles from "./ChatBot.module.css";

interface Message { role: "user" | "assistant"; content: string }

const MODELS = [
  { id: "llama-3.3-70b-versatile", label: "LLaMA 3.3 70B" },
  { id: "llama-3.1-8b-instant", label: "LLaMA 3.1 8B (rapide)" },
  { id: "meta-llama/llama-4-scout-17b-16e-instruct", label: "LLaMA 4 Scout 17B" },
];

const SUGGESTIONS = {
  fr: [
    "Quels types de projets réalisez-vous ?",
    "Comment se déroule un projet ?",
    "Vous travaillez à distance ?",
    "Quels sont vos délais de livraison ?",
    "Quels secteurs d'activité couvrez-vous ?",
    "Comment démarrer un projet avec Wikolabs ?",
  ],
  en: [
    "What types of projects do you do?",
    "How does a project work?",
    "Do you work remotely?",
    "What are your delivery timelines?",
    "Which industries do you cover?",
    "How do I start a project with Wikolabs?",
  ],
};

const i18n = {
  fr: {
    placeholder: "Posez votre question...",
    send: "Envoyer",
    thinking: "L'assistant réfléchit...",
    suggestionsLabel: "Questions fréquentes",
    modelLabel: "Modèle",
    errorMsg: "Une erreur est survenue. Veuillez réessayer.",
    greeting: "Bonjour ! Je suis l'assistant IA de Wikolabs. Je peux répondre à toutes vos questions sur nos services, notre processus de travail et nos domaines d'expertise. Comment puis-je vous aider ?",
  },
  en: {
    placeholder: "Ask your question...",
    send: "Send",
    thinking: "Thinking...",
    suggestionsLabel: "Frequently asked",
    modelLabel: "Model",
    errorMsg: "An error occurred. Please try again.",
    greeting: "Hello! I'm Wikolabs' AI assistant. I can answer all your questions about our services, work process and areas of expertise. How can I help you?",
  },
};

export default function ChatBot({ locale }: { locale: string }) {
  const lang = locale === "en" ? "en" : "fr";
  const t = i18n[lang];
  const suggestions = SUGGESTIONS[lang];

  const [open, setOpen] = useState(false);
  const [fullscreen, setFullscreen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { role: "assistant", content: t.greeting },
  ]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [model, setModel] = useState(MODELS[0].id);
  const [streamText, setStreamText] = useState("");
  const bottomRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLTextAreaElement>(null);

  // Escape closes fullscreen or panel
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        if (fullscreen) setFullscreen(false);
        else if (open) setOpen(false);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [fullscreen, open]);

  // Auto-open when hash is #faq
  useEffect(() => {
    const check = () => {
      if (window.location.hash === "#faq") setOpen(true);
    };
    check();
    window.addEventListener("hashchange", check);
    return () => window.removeEventListener("hashchange", check);
  }, []);

  // Scroll to bottom on new messages or streaming
  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, streamText]);

  // Focus input when panel opens
  useEffect(() => {
    if (open) {
      setTimeout(() => inputRef.current?.focus(), 320);
    }
  }, [open]);

  const send = async (text: string) => {
    if (!text.trim() || loading) return;
    const userMsg: Message = { role: "user", content: text.trim() };
    const history = [...messages, userMsg];
    setMessages(history);
    setInput("");
    setLoading(true);
    setStreamText("");

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messages: history, model }),
      });

      if (!res.ok) {
        const errText = await res.text().catch(() => "Unknown error");
        console.error("Chat API error:", res.status, errText);
        throw new Error(errText || t.errorMsg);
      }
      const reader = res.body!.getReader();
      const dec = new TextDecoder();
      let full = "";

      while (true) {
        const { done, value } = await reader.read();
        if (done) break;
        const chunk = dec.decode(value);
        full += chunk;
        setStreamText(full);
      }

      setMessages([...history, { role: "assistant", content: full }]);
      setStreamText("");
    } catch (err) {
      const msg = err instanceof Error ? err.message : t.errorMsg;
      setMessages([...history, { role: "assistant", content: msg }]);
      setStreamText("");
    } finally {
      setLoading(false);
    }
  };

  const onKey = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      send(input);
    }
  };

  const showSuggestions = messages.length === 1;

  return (
    <>
      {/* Floating toggle button */}
      <button
        id="faq"
        className={`${styles.floatBtn} ${open ? styles.floatBtnOpen : ""}`}
        onClick={() => setOpen((v) => !v)}
        aria-label={open ? "Close chat" : "Open FAQLab"}
      >
        {open ? (
          /* X icon */
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <path d="M18 6L6 18M6 6l12 12" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>
          </svg>
        ) : (
          /* Chat bubble icon */
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        )}
        {!open && <span className={styles.floatLabel}>FAQLab</span>}
      </button>

      {/* Slide-up chat panel */}
      <div
        className={`${styles.panel} ${open ? styles.panelOpen : ""} ${fullscreen ? styles.panelFullscreen : ""}`}
        role="dialog"
        aria-label="FAQLab chat panel"
        aria-modal="false"
      >
        {/* Header */}
        <div className={styles.chatHeader}>
          <div className={styles.chatStatus}>
            <span className={styles.statusDot} />
            Wikolabs AI
          </div>
          <div className={styles.headerRight}>
            <select
              className={styles.modelSelect}
              value={model}
              onChange={(e) => setModel(e.target.value)}
            >
              {MODELS.map((m) => (
                <option key={m.id} value={m.id}>{m.label}</option>
              ))}
            </select>
            <button
              className={styles.expandBtn}
              onClick={() => setFullscreen((v) => !v)}
              aria-label={fullscreen ? "Réduire" : "Agrandir"}
              title={fullscreen ? "Réduire" : "Agrandir"}
            >
              {fullscreen ? (
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                  <path d="M8 3v3a2 2 0 0 1-2 2H3m18 0h-3a2 2 0 0 1-2-2V3m0 18v-3a2 2 0 0 1 2-2h3M3 16h3a2 2 0 0 1 2 2v3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              ) : (
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                  <path d="M8 3H5a2 2 0 0 0-2 2v3m18 0V5a2 2 0 0 0-2-2h-3m0 18h3a2 2 0 0 0 2-2v-3M3 16v3a2 2 0 0 0 2 2h3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Messages */}
        <div className={styles.messages}>
          {messages.map((msg, i) => (
            <div key={i} className={`${styles.bubble} ${styles[msg.role]}`}>
              {msg.role === "assistant" && (
                <div className={styles.avatar}>W</div>
              )}
              <div className={styles.bubbleContent}>
                {msg.content.split("\n").map((line, li) => (
                  <span key={li}>
                    {line}
                    {li < msg.content.split("\n").length - 1 && <br />}
                  </span>
                ))}
              </div>
            </div>
          ))}

          {streamText && (
            <div className={`${styles.bubble} ${styles.assistant}`}>
              <div className={styles.avatar}>W</div>
              <div className={styles.bubbleContent}>
                {streamText}
                <span className={styles.cursor}>▋</span>
              </div>
            </div>
          )}

          {loading && !streamText && (
            <div className={`${styles.bubble} ${styles.assistant}`}>
              <div className={styles.avatar}>W</div>
              <div className={styles.thinking}>
                <span /><span /><span />
              </div>
            </div>
          )}

          <div ref={bottomRef} />
        </div>

        {/* Suggestions */}
        {showSuggestions && (
          <div className={styles.suggestions}>
            <div className={styles.suggestionsLabel}>{t.suggestionsLabel}</div>
            <div className={styles.suggestionChips}>
              {suggestions.map((s, i) => (
                <button key={i} className={styles.chip} onClick={() => send(s)}>
                  {s}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Input row */}
        <form
          className={styles.inputRow}
          onSubmit={(e) => { e.preventDefault(); send(input); }}
        >
          <textarea
            ref={inputRef}
            className={styles.input}
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={onKey}
            placeholder={t.placeholder}
            rows={1}
            disabled={loading}
          />
          <button
            type="submit"
            className={styles.sendBtn}
            disabled={loading || !input.trim()}
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
              <path d="M22 2L11 13M22 2L15 22L11 13M22 2L2 9L11 13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        </form>
      </div>
    </>
  );
}
