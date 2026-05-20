import { BLOG_POSTS } from "@/lib/blogData";
import type { Metadata } from "next";
import Link from "next/link";
import styles from "./blog.module.css";

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.wikolabs.com";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const isFr = locale !== "en";

  return {
    title: isFr
      ? "Blog — Stratégie IA & Data pour Dirigeants | Wikolabs"
      : "Blog — AI & Data Strategy for Executives | Wikolabs",
    description: isFr
      ? "Analyses stratégiques sur l'IA agentique, l'automatisation commerciale, la Business Intelligence et l'intelligence documentaire — rédigées pour les dirigeants d'entreprise."
      : "Strategic insights on agentic AI, sales automation, Business Intelligence and document intelligence — written for business executives.",
    openGraph: {
      title: isFr ? "Blog Wikolabs — IA & Data pour Dirigeants" : "Wikolabs Blog — AI & Data for Executives",
      images: [{ url: `${BASE_URL}/og-image.png`, width: 1200, height: 630 }],
    },
  };
}

export default async function BlogListPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const lang = locale === "en" ? "en" : "fr";

  const featured = BLOG_POSTS.filter((p) => p.featured);
  const rest = BLOG_POSTS.filter((p) => !p.featured);

  const t = {
    fr: {
      tag: "Insights & Stratégie",
      title: "L'IA qui transforme",
      titleEm: "votre entreprise",
      desc: "Analyses approfondies sur l'intelligence artificielle, l'automatisation et la data — pour les dirigeants qui veulent des décisions fondées, pas des tendances.",
      read: "min de lecture",
      readMore: "Lire l'article →",
      featuredLabel: "À la une",
      backHome: "← Retour à l'accueil",
    },
    en: {
      tag: "Insights & Strategy",
      title: "AI that transforms",
      titleEm: "your business",
      desc: "In-depth analyses on artificial intelligence, automation and data — for executives who want grounded decisions, not trends.",
      read: "min read",
      readMore: "Read article →",
      featuredLabel: "Featured",
      backHome: "← Back to home",
    },
  }[lang];

  return (
    <div className={styles.page}>
      {/* Hero */}
      <div className={styles.hero}>
        <div className={styles.heroInner}>
          <Link href={`/${locale === "fr" ? "" : locale}`} className={styles.backLink}>
            {t.backHome}
          </Link>
          <div className={styles.sectionTag}>
            <span className={styles.sectionTagLine} />
            {t.tag}
            <span className={styles.sectionTagLine} />
          </div>
          <h1 className={styles.heroTitle}>
            {t.title} <em>{t.titleEm}</em>
          </h1>
          <p className={styles.heroDesc}>{t.desc}</p>
        </div>
      </div>

      <div className={styles.content}>
        {/* Featured posts */}
        {featured.length > 0 && (
          <section className={styles.featuredSection}>
            <div className={styles.sectionLabel}>{t.featuredLabel}</div>
            <div className={styles.featuredGrid}>
              {featured.map((post) => {
                const data = post[lang];
                return (
                  <Link
                    key={post.slug}
                    href={`/${locale === "fr" ? "" : locale + "/"}blog/${post.slug}`}
                    className={styles.featuredCard}
                  >
                    <div className={styles.cardTop}>
                      <span
                        className={styles.category}
                        style={{ color: post.categoryColor, borderColor: post.categoryColor + "44", background: post.categoryColor + "12" }}
                      >
                        {post.category[lang]}
                      </span>
                      <span className={styles.readTime}>{post.readTime} {t.read}</span>
                    </div>
                    <h2 className={styles.featuredTitle}>{data.title}</h2>
                    <p className={styles.featuredExcerpt}>{data.excerpt}</p>
                    <div className={styles.cardFooter}>
                      <time className={styles.date}>{formatDate(post.publishedAt, lang)}</time>
                      <span className={styles.readMoreLink}>{t.readMore}</span>
                    </div>
                  </Link>
                );
              })}
            </div>
          </section>
        )}

        {/* All other posts */}
        {rest.length > 0 && (
          <section className={styles.allSection}>
            <div className={styles.allGrid}>
              {rest.map((post) => {
                const data = post[lang];
                return (
                  <Link
                    key={post.slug}
                    href={`/${locale === "fr" ? "" : locale + "/"}blog/${post.slug}`}
                    className={styles.postCard}
                  >
                    <div className={styles.cardTop}>
                      <span
                        className={styles.category}
                        style={{ color: post.categoryColor, borderColor: post.categoryColor + "44", background: post.categoryColor + "12" }}
                      >
                        {post.category[lang]}
                      </span>
                      <span className={styles.readTime}>{post.readTime} {t.read}</span>
                    </div>
                    <h3 className={styles.postTitle}>{data.title}</h3>
                    <p className={styles.postExcerpt}>{data.excerpt}</p>
                    <div className={styles.cardFooter}>
                      <time className={styles.date}>{formatDate(post.publishedAt, lang)}</time>
                      <span className={styles.readMoreLink}>{t.readMore}</span>
                    </div>
                  </Link>
                );
              })}
            </div>
          </section>
        )}
      </div>
    </div>
  );
}

function formatDate(dateStr: string, lang: "fr" | "en"): string {
  const date = new Date(dateStr);
  return date.toLocaleDateString(lang === "fr" ? "fr-FR" : "en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}
