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
    tag: "Assistant Wikolabs",
    title: "Posez vos questions",
    titleEm: "à notre IA",
    desc: "Notre assistant connaît tous nos services, processus et domaines d'expertise. Posez-lui n'importe quelle question.",
    placeholder: "Posez votre question...",
    send: "Envoyer",
    thinking: "L'assistant réfléchit...",
    suggestionsLabel: "Questions fréquentes",
    modelLabel: "Modèle",
    errorMsg: "Une erreur est survenue. Veuillez réessayer.",
    greeting: "Bonjour ! Je suis l'assistant IA de Wikolabs. Je peux répondre à toutes vos questions sur nos services, notre processus de travail et nos domaines d'expertise. Comment puis-je vous aider ?",
  },
  en: {
    tag: "Wikolabs Assistant",
    title: "Ask your questions",
    titleEm: "to our AI",
    desc: "Our assistant knows all our services, processes and areas of expertise. Ask it anything.",
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

  const [messages, setMessages] = useState<Message[]>([
    { role: "assistant", content: t.greeting },
  ]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [model, setModel] = useState(MODELS[0].id);
  const [streamText, setStreamText] = useState("");
  const bottomRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, streamText]);

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

      if (!res.ok) throw new Error("API error");
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
    } catch {
      setMessages([...history, { role: "assistant", content: t.errorMsg }]);
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
    <section id="faq" className={styles.section}>
      <div className={`reveal ${styles.sectionTag}`}>
        <span className={styles.sectionTagLine} />
        {t.tag}
      </div>
      <h2 className={`reveal d1 ${styles.sectionTitle}`}>
        {t.title} <em>{t.titleEm}</em>
      </h2>
      <p className={`reveal d2 ${styles.sectionDesc}`}>{t.desc}</p>

      <div className={`reveal d3 ${styles.chatWrap}`}>
        {/* Model selector */}
        <div className={styles.chatHeader}>
          <div className={styles.chatStatus}>
            <span className={styles.statusDot} />
            Wikolabs AI
          </div>
          <select
            className={styles.modelSelect}
            value={model}
            onChange={(e) => setModel(e.target.value)}
          >
            {MODELS.map((m) => (
              <option key={m.id} value={m.id}>{m.label}</option>
            ))}
          </select>
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

        {/* Input */}
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
    </section>
  );
}
