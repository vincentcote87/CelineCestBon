import type { ReactNode } from 'react'
import { Leaf } from '../Illustrations/Illustrations.tsx'
import styles from './Eyebrow.module.css'

// Small uppercase label with a leaf, shown above section headings.
export function Eyebrow({ children, light }: { children: ReactNode; light?: boolean }) {
  return (
    <p className={`${styles.eyebrow} ${light ? styles.light : ''}`}>
      <Leaf className={styles.leaf} />
      {children}
    </p>
  )
}

// The red italic word in a headline, with a green underline swoosh.
export function Accent({ children }: { children?: ReactNode }) {
  return <em className={styles.accent}>{children}</em>
}

// Handwritten kicker, e.g. "Un projet pour votre groupe ?"
export function Script({ children }: { children: ReactNode }) {
  return <p className={styles.script}>{children}</p>
}
