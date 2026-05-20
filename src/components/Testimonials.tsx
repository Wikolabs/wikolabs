import styles from "./Testimonials.module.css";
import type { Testimonial } from "@/lib/content";

const i18n = {
  fr: {
    tag: "Ce qu'ils en disent",
    title: "Des résultats concrets,",
    titleEm: "des clients satisfaits.",
  },
  en: {
    tag: "What our clients say",
    title: "Concrete results,",
    titleEm: "satisfied clients.",
  },
};

export default function Testimonials({
  locale,
  testimonials,
}: {
  locale: string;
  testimonials: Testimonial[];
}) {
  const lang = locale === "en" ? "en" : "fr";
  const t = i18n[lang];

  if (!testimonials?.length) return null;

  return (
    <section className={styles.testimonials}>
      <div className={`reveal ${styles.sectionTag}`}>
        <span className={styles.sectionTagLine} />
        {t.tag}
      </div>
      <h2 className={`reveal d1 ${styles.sectionTitle}`}>
        {t.title} <em>{t.titleEm}</em>
      </h2>

      <div className={styles.grid}>
        {testimonials.map((item, i) => (
          <div key={i} className={`reveal d${Math.min(i + 1, 4)} ${styles.card}`}>
            <span className={styles.quoteIcon}>&ldquo;</span>
            <p className={styles.quote}>{item.quote}</p>
            <div className={styles.author}>
              <div className={styles.avatar}>{item.initials}</div>
              <div>
                <div className={styles.authorName}>{item.name}</div>
                <div className={styles.authorRole}>{item.role}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
