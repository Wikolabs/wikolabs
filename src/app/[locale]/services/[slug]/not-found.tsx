import Link from "next/link";

export default function NotFound() {
  return (
    <div style={{ minHeight: "100vh", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: 16, background: "#04080F", color: "#F0EDE6" }}>
      <h1 style={{ fontSize: "2rem", color: "#D4AF37" }}>404</h1>
      <p>Service introuvable.</p>
      <Link href="/" style={{ color: "#D4AF37" }}>← Retour à l'accueil</Link>
    </div>
  );
}
