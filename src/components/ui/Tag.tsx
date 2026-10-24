import type { ReactNode } from 'react'
import styles from './Tag.module.css'

// Small sage pill naming an audience, e.g. "Enfants de 3 à 12 ans".
export function Tag({ children }: { children: ReactNode }) {
  return <span className={styles.tag}>{children}</span>
}

// Wrapping list of pills, each with a green dot.
export function ChipList({ items }: { items: string[] }) {
  return (
    <ul className={styles.chips}>
      {items.map((item) => (
        <li key={item} className={styles.chip}>
          {item}
        </li>
      ))}
    </ul>
  )
}
