import type { ReactNode } from 'react'
import styles from './Content.module.css'

// Small bordered card with an uppercase label, e.g. "Pour qui" / "Format".
export function InfoCard({ label, children }: { label: string; children: ReactNode }) {
  return (
    <div className={styles.infoCard}>
      <h4 className={styles.infoLabel}>{label}</h4>
      {children}
    </div>
  )
}

// Row of InfoCards.
export function InfoGrid({ children }: { children: ReactNode }) {
  return <div className={styles.infoGrid}>{children}</div>
}

// List with short green dash bullets.
export function BulletList({ items }: { items: ReactNode[] }) {
  return (
    <ul className={styles.bullets}>
      {items.map((item, i) => (
        <li key={i}>{item}</li>
      ))}
    </ul>
  )
}

// Vertical timeline with red dots and a dashed green line.
export function Timeline({ items }: { items: { title: string; text: string }[] }) {
  return (
    <ol className={styles.timeline}>
      {items.map((item) => (
        <li key={item.title} className={styles.timelineItem}>
          <h4 className={styles.timelineTitle}>{item.title}</h4>
          <p>{item.text}</p>
        </li>
      ))}
    </ol>
  )
}

// Filled green pills, e.g. the program values "Plaisir · Expériences · Découvertes".
export function Pills({ items }: { items: string[] }) {
  return (
    <ul className={styles.pills}>
      {items.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  )
}

// Highlighted paragraph with a red left border.
export function Callout({ children }: { children: ReactNode }) {
  return <p className={styles.callout}>{children}</p>
}
