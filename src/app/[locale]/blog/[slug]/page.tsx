import { BLOG_POSTS, getPostBySlug } from "@/lib/blogData";
import type { ContentBlock } from "@/lib/blogData";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import styles from "./post.module.css";

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.wikolabs.com";

export function generateStaticParams() {
  const locales = ["fr", "en"] as const;
  return BLOG_POSTS.flatMap((post) =>
    locales.map((locale) => ({ locale, slug: post.slug }))
  );
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}): Promise<Metadata> {
  const { locale, slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return {};

  const lang = locale === "en" ? "en" : "fr";
  const data = post[lang];

  return {
    title: `${data.title} | Wikolabs`,
    description: data.excerpt,
    openGraph: {
      title: data.title,
      description: data.excerpt,
      type: "article",
      publishedTime: post.publishedAt,
      images: [{ url: `${BASE_URL}/og-image.png`, width: 1200, height: 630 }],
    },
    twitter: {
      card: "summary_large_image",
      title: data.title,
      description: data.excerpt,
      images: [`${BASE_URL}/og-image.png`],
    },
  };
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale, slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  const lang = locale === "en" ? "en" : "fr";
  const data = post[lang];

  const t = {
    fr: {
      backBlog: "← Tous les articles",
      read: "min de lecture",
      share: "Partager cet article",
      cta: "Transformer votre entreprise avec l'IA →",
      ctaDesc: "Discutons de votre projet lors d'un appel de 30 minutes.",
      ctaBtn: "Réserver un appel",
    },
    en: {
      backBlog: "← All articles",
      read: "min read",
      share: "Share this article",
      cta: "Transform your business with AI →",
      ctaDesc: "Let's discuss your project in a 30-minute call.",
      ctaBtn: "Book a call",
    },
  }[lang];

  const blogHref = `/${locale === "fr" ? "" : locale + "/"}blog`;

  return (
    <div className={styles.page}>
      {/* Header */}
      <div className={styles.header}>
        <div className={styles.headerInner}>
          <Link href={blogHref} className={styles.backLink}>{t.backBlog}</Link>

          <div className={styles.meta}>
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
            <time className={styles.date}>{formatDate(post.publishedAt, lang)}</time>
          </div>

          <h1 className={styles.title}>{data.title}</h1>
          <p className={styles.excerpt}>{data.excerpt}</p>
        </div>
      </div>

      {/* Article body */}
      <div className={styles.body}>
        <div className={styles.article}>
          {data.content.map((block, i) => (
            <BlockRenderer key={i} block={block} />
          ))}
        </div>

        {/* CTA box */}
        <aside className={styles.ctaBox}>
          <p className={styles.ctaLabel}>{t.cta}</p>
          <p className={styles.ctaDesc}>{t.ctaDesc}</p>
          <a
            href={`/${locale === "fr" ? "" : locale}#contact`}
            className={styles.ctaBtn}
          >
            {t.ctaBtn}
          </a>
        </aside>
      </div>
    </div>
  );
}

function BlockRenderer({ block }: { block: ContentBlock }) {
  switch (block.type) {
    case "h2":
      return <h2 className={styles.h2}>{block.text}</h2>;
    case "h3":
      return <h3 className={styles.h3}>{block.text}</h3>;
    case "p":
      return <p className={styles.p}>{block.text}</p>;
    case "ul":
      return (
        <ul className={styles.ul}>
          {block.items.map((item, i) => <li key={i}>{item}</li>)}
        </ul>
      );
    case "ol":
      return (
        <ol className={styles.ol}>
          {block.items.map((item, i) => <li key={i}>{item}</li>)}
        </ol>
      );
    case "quote":
      return (
        <blockquote className={styles.quote}>
          <p>{block.text}</p>
          {block.author && <cite>— {block.author}</cite>}
        </blockquote>
      );
    case "highlight":
      return (
        <div className={styles.highlight}>
          <span className={styles.highlightLabel}>{block.label}</span>
          <p>{block.text}</p>
        </div>
      );
    default:
      return null;
  }
}

function formatDate(dateStr: string, lang: "fr" | "en"): string {
  const date = new Date(dateStr);
  return date.toLocaleDateString(lang === "fr" ? "fr-FR" : "en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}
