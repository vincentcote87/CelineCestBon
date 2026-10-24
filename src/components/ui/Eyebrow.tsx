import type { ReactNode } from 'react'
import styles from './Eyebrow.module.css'

// Handwritten label above section headings, e.g. "Qui suis-je ?".
export function Eyebrow({ children, light }: { children: ReactNode; light?: boolean }) {
  return <p className={`${styles.eyebrow} ${light ? styles.light : ''}`}>{children}</p>
}

// A word in a headline highlighted with a yellow marker stroke.
export function Accent({ children }: { children?: ReactNode }) {
  return <em className={styles.accent}>{children}</em>
}

// Handwritten kicker on dark bands, e.g. "Un projet pour votre groupe ?"
export function Script({ children }: { children: ReactNode }) {
  return <p className={styles.script}>{children}</p>
}
