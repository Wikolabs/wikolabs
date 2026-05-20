"use client";

import Link from "next/link";
import { BLOG_POSTS } from "@/lib/blogData";
import styles from "./BlogPreview.module.css";

function formatDate(dateStr: string, lang: "fr" | "en"): string {
  const date = new Date(dateStr);
  return date.toLocaleDateString(lang === "fr" ? "fr-FR" : "en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export default function BlogPreview({ locale }: { locale: string }) {
  const lang = locale === "en" ? "en" : "fr";
  const posts = BLOG_POSTS.slice(0, 3);

  const t = {
    fr: {
      tag: "Insights & Stratégie",
      title: "Ce que les dirigeants",
      titleEm: "lisent en ce moment",
      desc: "Analyses approfondies sur l'IA agentique, l'automatisation et la data — pour prendre de meilleures décisions.",
      read: "min de lecture",
      readMore: "Lire →",
      seeAll: "Voir tous les articles →",
    },
    en: {
      tag: "Insights & Strategy",
      title: "What executives",
      titleEm: "are reading now",
      desc: "In-depth analyses on agentic AI, automation and data — to make better decisions.",
      read: "min read",
      readMore: "Read →",
      seeAll: "See all articles →",
    },
  }[lang];

  const blogHref = `/${locale === "fr" ? "" : locale + "/"}blog`;

  return (
    <section className={styles.section}>
      <div className={styles.bgGlow} />

      <div className={`reveal ${styles.header}`}>
        <div className={styles.sectionTag}>
          <span className={styles.sectionTagLine} />
          {t.tag}
          <span className={styles.sectionTagLine} />
        </div>
        <h2 className={styles.sectionTitle}>
          {t.title} <em>{t.titleEm}</em>
        </h2>
        <p className={styles.sectionDesc}>{t.desc}</p>
      </div>

      <div className={styles.grid}>
        {posts.map((post, i) => {
          const data = post[lang];
          const href = `${blogHref}/${post.slug}`;
          return (
            <Link
              key={post.slug}
              href={href}
              className={`reveal d${i + 1} ${styles.card}`}
            >
              <div className={styles.cardTop}>
                <span
                  className={styles.category}
                  style={{
                    color: post.categoryColor,
                    borderColor: post.categoryColor + "44",
                    background: post.categoryColor + "12",
                  }}
                >
                  {post.category[lang]}
                </span>
                <span className={styles.readTime}>{post.readTime} {t.read}</span>
              </div>
              <h3 className={styles.cardTitle}>{data.title}</h3>
              <p className={styles.cardExcerpt}>{data.excerpt}</p>
              <div className={styles.cardFooter}>
                <time className={styles.date}>{formatDate(post.publishedAt, lang)}</time>
                <span className={styles.readMoreLink}>{t.readMore}</span>
              </div>
            </Link>
          );
        })}
      </div>

      <div className={`reveal ${styles.seeAll}`}>
        <Link href={blogHref} className={styles.seeAllLink}>
          {t.seeAll}
        </Link>
      </div>
    </section>
  );
}
