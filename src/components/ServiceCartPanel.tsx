"use client";

import styles from "./ServiceCartPanel.module.css";
import { LuX, LuShoppingCart, LuArrowRight } from "react-icons/lu";

export interface CartItem {
  id: string;
  title: string;
  category: string;
}

interface Props {
  locale: string;
  items: CartItem[];
  open: boolean;
  onClose: () => void;
  onRemove: (id: string) => void;
  onValidate: () => void;
}

const i18n = {
  fr: {
    title: "Votre sélection",
    empty: "Aucun service sélectionné.",
    emptySub: "Ajoutez des services depuis la liste ci-dessous.",
    validate: "Valider et prendre RDV",
    remove: "Retirer",
    service: "service",
    services: "services",
  },
  en: {
    title: "Your selection",
    empty: "No services selected.",
    emptySub: "Add services from the list below.",
    validate: "Validate & book a call",
    remove: "Remove",
    service: "service",
    services: "services",
  },
};

export default function ServiceCartPanel({ locale, items, open, onClose, onRemove, onValidate }: Props) {
  const t = i18n[locale === "en" ? "en" : "fr"];
  const count = items.length;

  return (
    <div className={`${styles.panel} ${open ? styles.panelOpen : ""}`}>
      <div className={styles.header}>
        <div className={styles.headerLeft}>
          <LuShoppingCart size={16} />
          <span className={styles.headerTitle}>{t.title}</span>
          {count > 0 && (
            <span className={styles.count}>{count} {count === 1 ? t.service : t.services}</span>
          )}
        </div>
        <button className={styles.closeBtn} onClick={onClose} aria-label="Fermer">
          <LuX size={14} />
        </button>
      </div>

      <div className={styles.body}>
        {count === 0 ? (
          <div className={styles.empty}>
            <LuShoppingCart size={28} className={styles.emptyIcon} />
            <p className={styles.emptyText}>{t.empty}</p>
            <p className={styles.emptySub}>{t.emptySub}</p>
          </div>
        ) : (
          <ul className={styles.list}>
            {items.map((item) => (
              <li key={item.id} className={styles.item}>
                <div className={styles.itemInfo}>
                  <span className={styles.itemCategory}>{item.category}</span>
                  <span className={styles.itemTitle}>{item.title}</span>
                </div>
                <button
                  className={styles.removeBtn}
                  onClick={() => onRemove(item.id)}
                  aria-label={t.remove}
                >
                  <LuX size={12} />
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>

      {count > 0 && (
        <div className={styles.footer}>
          <button className={styles.validateBtn} onClick={onValidate}>
            {t.validate}
            <LuArrowRight size={15} />
          </button>
        </div>
      )}
    </div>
  );
}
