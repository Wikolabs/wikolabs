"use client";

import { useState, useEffect, useCallback } from "react";
import s from "./admin.module.css";

type SiteContent = Record<string, unknown>;

const LOCALES = [
  { code: "fr", label: "🇫🇷 Français" },
  { code: "en", label: "🇬🇧 English" },
];

/* ─── SECTION CONFIGS ─── */
const SECTION_META: {
  key: string;
  label: string;
  type: "object" | "array";
  fields?: { key: string; label: string; multiline?: boolean }[];
  itemFields?: { key: string; label: string; multiline?: boolean }[];
}[] = [
  {
    key: "hero",
    label: "🏠 Hero",
    type: "object",
    fields: [
      { key: "tag", label: "Tag line" },
      { key: "title_line1", label: "Titre ligne 1" },
      { key: "title_line2", label: "Titre ligne 2 (avant accent)" },
      { key: "title_accent", label: "Mot accentué (vert)" },
      { key: "subtitle", label: "Sous-titre", multiline: true },
    ],
  },
  {
    key: "client_problems",
    label: "❌ Problèmes clients",
    type: "array",
    itemFields: [
      { key: "title", label: "Titre" },
      { key: "text", label: "Description", multiline: true },
    ],
  },
  {
    key: "client_solutions",
    label: "✅ Solutions",
    type: "array",
    itemFields: [
      { key: "title", label: "Titre" },
      { key: "text", label: "Description", multiline: true },
    ],
  },
  {
    key: "roles",
    label: "💼 Rôles / Expertise",
    type: "array",
    itemFields: [
      { key: "emoji", label: "Emoji" },
      { key: "title", label: "Titre" },
      { key: "desc", label: "Description", multiline: true },
      { key: "tjm", label: "TJM" },
    ],
  },
  {
    key: "why_clients",
    label: "⭐ Pourquoi nous",
    type: "array",
    itemFields: [
      { key: "icon", label: "Icône (emoji)" },
      { key: "title", label: "Titre" },
      { key: "text", label: "Description", multiline: true },
    ],
  },
  {
    key: "pricing",
    label: "💰 Grille tarifaire",
    type: "array",
    itemFields: [
      { key: "role", label: "Rôle" },
      { key: "junior", label: "Junior" },
      { key: "confirmed", label: "Confirmé" },
      { key: "senior", label: "Senior" },
    ],
  },
  {
    key: "process",
    label: "📋 Processus",
    type: "array",
    itemFields: [
      { key: "num", label: "Numéro (01, 02...)" },
      { key: "title", label: "Titre" },
      { key: "text", label: "Description", multiline: true },
    ],
  },
  {
    key: "testimonials",
    label: "💬 Témoignages",
    type: "array",
    itemFields: [
      { key: "quote", label: "Citation", multiline: true },
      { key: "name", label: "Nom" },
      { key: "role", label: "Rôle / Entreprise" },
      { key: "initials", label: "Initiales" },
    ],
  },
  {
    key: "faq",
    label: "❓ FAQ",
    type: "array",
    itemFields: [
      { key: "q", label: "Question" },
      { key: "a", label: "Réponse", multiline: true },
    ],
  },
];

/* ─── LOGIN FORM ─── */
function LoginForm({ onLogin }: { onLogin: () => void }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setLoading(true);
    try {
      const res = await fetch("/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, password }),
      });
      if (!res.ok) {
        const data = await res.json();
        setError(data.error || "Erreur de connexion");
        return;
      }
      onLogin();
    } catch {
      setError("Erreur réseau");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={s.loginWrap}>
      <div className={s.loginCard}>
        <div className={s.loginLogo}>
          <span className={s.loginDot} />
          WIKOLABS
        </div>
        <h1 className={s.loginTitle}>Administration</h1>
        {error && <div className={s.loginError}>{error}</div>}
        <form onSubmit={handleSubmit} className={s.loginForm}>
          <input
            type="text"
            placeholder="Nom d'utilisateur"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className={s.input}
            autoFocus
            required
          />
          <input
            type="password"
            placeholder="Mot de passe"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className={s.input}
            required
          />
          <button type="submit" className={s.btnPrimary} disabled={loading}>
            {loading ? "Connexion..." : "Se connecter →"}
          </button>
        </form>
      </div>
    </div>
  );
}

/* ─── HERO EDITOR ─── */
function HeroEditor({
  data,
  onChange,
}: {
  data: Record<string, unknown>;
  onChange: (d: Record<string, unknown>) => void;
}) {
  const meta = SECTION_META.find((s) => s.key === "hero")!;
  const stats = (data.stats as { value: string; label: string }[]) || [];
  const marquee = (data.marquee_items as string[]) || [];

  const updateField = (key: string, val: string) => {
    onChange({ ...data, [key]: val });
  };

  const updateStat = (i: number, field: string, val: string) => {
    const next = [...stats];
    next[i] = { ...next[i], [field]: val };
    onChange({ ...data, stats: next });
  };

  const addStat = () => onChange({ ...data, stats: [...stats, { value: "", label: "" }] });
  const removeStat = (i: number) => onChange({ ...data, stats: stats.filter((_, idx) => idx !== i) });

  const updateMarquee = (i: number, val: string) => {
    const next = [...marquee];
    next[i] = val;
    onChange({ ...data, marquee_items: next });
  };

  const addMarquee = () => onChange({ ...data, marquee_items: [...marquee, ""] });
  const removeMarquee = (i: number) => onChange({ ...data, marquee_items: marquee.filter((_, idx) => idx !== i) });

  return (
    <div className={s.editorFields}>
      {meta.fields!.map((f) => (
        <div key={f.key} className={s.field}>
          <label className={s.fieldLabel}>{f.label}</label>
          {f.multiline ? (
            <textarea
              className={s.textarea}
              value={(data[f.key] as string) || ""}
              onChange={(e) => updateField(f.key, e.target.value)}
              rows={3}
            />
          ) : (
            <input
              className={s.input}
              value={(data[f.key] as string) || ""}
              onChange={(e) => updateField(f.key, e.target.value)}
            />
          )}
        </div>
      ))}

      <div className={s.subSection}>
        <h4 className={s.subTitle}>
          Stats
          <button className={s.btnSmall} onClick={addStat} type="button">+ Ajouter</button>
        </h4>
        {stats.map((stat, i) => (
          <div key={i} className={s.inlineGroup}>
            <input className={s.inputSm} value={stat.value} onChange={(e) => updateStat(i, "value", e.target.value)} placeholder="Valeur" />
            <input className={s.inputSm} value={stat.label} onChange={(e) => updateStat(i, "label", e.target.value)} placeholder="Label" />
            <button className={s.btnDanger} onClick={() => removeStat(i)} type="button">×</button>
          </div>
        ))}
      </div>

      <div className={s.subSection}>
        <h4 className={s.subTitle}>
          Marquee (défilant)
          <button className={s.btnSmall} onClick={addMarquee} type="button">+ Ajouter</button>
        </h4>
        {marquee.map((item, i) => (
          <div key={i} className={s.inlineGroup}>
            <input className={s.input} value={item} onChange={(e) => updateMarquee(i, e.target.value)} placeholder="Nom du rôle" />
            <button className={s.btnDanger} onClick={() => removeMarquee(i)} type="button">×</button>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ─── ARRAY EDITOR ─── */
function ArrayEditor({
  data,
  itemFields,
  onChange,
}: {
  data: Record<string, unknown>[];
  itemFields: { key: string; label: string; multiline?: boolean }[];
  onChange: (d: Record<string, unknown>[]) => void;
}) {
  const updateItem = (i: number, key: string, val: string) => {
    const next = [...data];
    next[i] = { ...next[i], [key]: val };
    onChange(next);
  };

  const addItem = () => {
    const empty: Record<string, string> = {};
    itemFields.forEach((f) => (empty[f.key] = ""));
    onChange([...data, empty]);
  };

  const removeItem = (i: number) => onChange(data.filter((_, idx) => idx !== i));

  const moveItem = (i: number, dir: -1 | 1) => {
    const j = i + dir;
    if (j < 0 || j >= data.length) return;
    const next = [...data];
    [next[i], next[j]] = [next[j], next[i]];
    onChange(next);
  };

  return (
    <div className={s.editorFields}>
      {data.map((item, i) => (
        <div key={i} className={s.arrayCard}>
          <div className={s.arrayCardHeader}>
            <span className={s.arrayCardNum}>#{i + 1}</span>
            <div className={s.arrayCardActions}>
              <button className={s.btnSmall} onClick={() => moveItem(i, -1)} disabled={i === 0} type="button">↑</button>
              <button className={s.btnSmall} onClick={() => moveItem(i, 1)} disabled={i === data.length - 1} type="button">↓</button>
              <button className={s.btnDanger} onClick={() => removeItem(i)} type="button">Supprimer</button>
            </div>
          </div>
          {itemFields.map((f) => (
            <div key={f.key} className={s.field}>
              <label className={s.fieldLabel}>{f.label}</label>
              {f.multiline ? (
                <textarea className={s.textarea} value={(item[f.key] as string) || ""} onChange={(e) => updateItem(i, f.key, e.target.value)} rows={3} />
              ) : (
                <input className={s.input} value={(item[f.key] as string) || ""} onChange={(e) => updateItem(i, f.key, e.target.value)} />
              )}
            </div>
          ))}
        </div>
      ))}
      <button className={s.btnSecondary} onClick={addItem} type="button">
        + Ajouter un élément
      </button>
    </div>
  );
}

/* ─── MAIN ADMIN PANEL ─── */
export default function AdminPage() {
  const [authed, setAuthed] = useState<boolean | null>(null);
  const [content, setContent] = useState<SiteContent | null>(null);
  const [activeSection, setActiveSection] = useState("hero");
  const [activeLocale, setActiveLocale] = useState("fr");
  const [saving, setSaving] = useState(false);
  const [saveMsg, setSaveMsg] = useState("");
  const [dirty, setDirty] = useState<Set<string>>(new Set());

  // Dirty keys include locale: "hero:fr", "faq:en"
  const dirtyKey = (section: string) => `${section}:${activeLocale}`;

  const loadContent = useCallback(async (locale?: string) => {
    const loc = locale || activeLocale;
    try {
      const res = await fetch(`/api/admin/content?locale=${loc}`);
      if (res.status === 401) {
        setAuthed(false);
        return;
      }
      const data = await res.json();
      setContent(data);
      setAuthed(true);
    } catch {
      setAuthed(false);
    }
  }, [activeLocale]);

  useEffect(() => {
    loadContent();
  }, [loadContent]);

  const handleLocaleSwitch = (loc: string) => {
    setActiveLocale(loc);
    setContent(null); // show loading
    loadContent(loc);
  };

  const handleSave = async (sectionKey: string) => {
    if (!content) return;
    setSaving(true);
    setSaveMsg("");
    try {
      const res = await fetch("/api/admin/content", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          section: sectionKey,
          data: content[sectionKey],
          locale: activeLocale,
        }),
      });
      if (!res.ok) throw new Error("Save failed");
      const locLabel = activeLocale.toUpperCase();
      setSaveMsg(`✓ ${sectionKey} [${locLabel}] sauvegardé`);
      setDirty((prev) => {
        const next = new Set(prev);
        next.delete(dirtyKey(sectionKey));
        return next;
      });
      setTimeout(() => setSaveMsg(""), 3000);
    } catch {
      setSaveMsg("✗ Erreur de sauvegarde");
    } finally {
      setSaving(false);
    }
  };

  const handleLogout = async () => {
    await fetch("/api/auth/logout", { method: "POST" });
    setAuthed(false);
    setContent(null);
  };

  const updateSection = (key: string, data: unknown) => {
    setContent((prev) => (prev ? { ...prev, [key]: data } : prev));
    setDirty((prev) => new Set(prev).add(dirtyKey(key)));
  };

  // Loading
  if (authed === null) {
    return (
      <div className={s.loadingWrap}>
        <div className={s.spinner} />
      </div>
    );
  }

  // Login
  if (!authed) {
    return <LoginForm onLogin={() => loadContent()} />;
  }

  const activeMeta = SECTION_META.find((sec) => sec.key === activeSection)!;

  return (
    <div className={s.adminLayout}>
      {/* Sidebar */}
      <aside className={s.sidebar}>
        <div className={s.sidebarHeader}>
          <div className={s.sidebarLogo}>
            <span className={s.loginDot} />
            ADMIN
          </div>
        </div>

        {/* Locale tabs */}
        <div className={s.localeTabs}>
          {LOCALES.map((loc) => (
            <button
              key={loc.code}
              className={`${s.localeTab} ${activeLocale === loc.code ? s.localeTabActive : ""}`}
              onClick={() => handleLocaleSwitch(loc.code)}
            >
              {loc.label}
            </button>
          ))}
        </div>

        <nav className={s.sidebarNav}>
          {SECTION_META.map((sec) => (
            <button
              key={sec.key}
              className={`${s.sidebarLink} ${activeSection === sec.key ? s.sidebarLinkActive : ""}`}
              onClick={() => setActiveSection(sec.key)}
            >
              {sec.label}
              {dirty.has(dirtyKey(sec.key)) && <span className={s.dirtyDot} />}
            </button>
          ))}
        </nav>
        <div className={s.sidebarFooter}>
          <a href={`/${activeLocale}`} className={s.sidebarLink} target="_blank">↗ Voir le site ({activeLocale.toUpperCase()})</a>
          <button className={s.sidebarLink} onClick={handleLogout}>⏻ Déconnexion</button>
        </div>
      </aside>

      {/* Main */}
      <main className={s.adminMain}>
        <div className={s.adminTopBar}>
          <div>
            <h1 className={s.adminTitle}>
              {activeMeta.label}
              <span className={s.localeBadge}>{activeLocale.toUpperCase()}</span>
            </h1>
            <p className={s.adminSubtitle}>
              Modifiez le contenu <strong>{activeLocale === "fr" ? "français" : "anglais"}</strong> ci-dessous puis sauvegardez.
            </p>
          </div>
          <div className={s.topBarActions}>
            {saveMsg && <span className={s.saveMsg}>{saveMsg}</span>}
            <button
              className={s.btnPrimary}
              onClick={() => handleSave(activeSection)}
              disabled={saving || !dirty.has(dirtyKey(activeSection))}
            >
              {saving ? "Sauvegarde..." : "Sauvegarder"}
            </button>
          </div>
        </div>

        <div className={s.adminContent}>
          {!content ? (
            <div className={s.loadingWrap} style={{ minHeight: 200 }}>
              <div className={s.spinner} />
            </div>
          ) : (
            <>
              {activeSection === "hero" && (
                <HeroEditor
                  data={content.hero as Record<string, unknown>}
                  onChange={(d) => updateSection("hero", d)}
                />
              )}
              {activeMeta.type === "array" && activeMeta.itemFields && (
                <ArrayEditor
                  data={content[activeSection] as Record<string, unknown>[]}
                  itemFields={activeMeta.itemFields}
                  onChange={(d) => updateSection(activeSection, d)}
                />
              )}
            </>
          )}
        </div>
      </main>
    </div>
  );
}
