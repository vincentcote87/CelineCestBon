import type { ReactNode } from 'react'
import styles from './Tag.module.css'

// Small sage pill naming an audience, e.g. "Enfants de 3 à 12 ans".
export function Tag({ children }: { children: ReactNode }) {
  return <span className={styles.tag}>{children}</span>
}

// Wrapping list of pills, each with a green dot.
// `even`: one pill per line, all as wide as the longest one.
export function ChipList({ items, even }: { items: string[]; even?: boolean }) {
  return (
    <ul className={`${styles.chips} ${even ? styles.even : ''}`}>
      {items.map((item) => (
        <li key={item} className={styles.chip}>
          {item}
        </li>
      ))}
    </ul>
  )
}
