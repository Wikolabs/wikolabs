"use client";

import { usePathname, useRouter } from "@/i18n/navigation";
import { useLocale } from "next-intl";

export default function LocaleSwitcher({ className }: { className?: string }) {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  const switchTo = locale === "fr" ? "en" : "fr";

  const handleSwitch = () => {
    router.replace(pathname, { locale: switchTo });
  };

  return (
    <button
      onClick={handleSwitch}
      className={className}
      aria-label={`Switch to ${switchTo === "fr" ? "French" : "English"}`}
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: 6,
        padding: "6px 14px",
        background: "rgba(200, 255, 0, 0.08)",
        border: "1px solid rgba(200, 255, 0, 0.2)",
        borderRadius: 100,
        color: "var(--wk-accent)",
        fontSize: "0.78rem",
        fontWeight: 700,
        fontFamily: "var(--wk-font-mono)",
        letterSpacing: "1px",
        cursor: "pointer",
        transition: "all 0.2s ease",
        textTransform: "uppercase",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.background = "rgba(200, 255, 0, 0.15)";
        e.currentTarget.style.borderColor = "rgba(200, 255, 0, 0.4)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.background = "rgba(200, 255, 0, 0.08)";
        e.currentTarget.style.borderColor = "rgba(200, 255, 0, 0.2)";
      }}
    >
      <span style={{ opacity: locale === "fr" ? 1 : 0.4 }}>FR</span>
      <span style={{ opacity: 0.3 }}>|</span>
      <span style={{ opacity: locale === "en" ? 1 : 0.4 }}>EN</span>
    </button>
  );
}
