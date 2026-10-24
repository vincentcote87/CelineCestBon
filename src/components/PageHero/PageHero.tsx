import type { ReactNode } from 'react'
import layout from '../../styles/layout.module.css'
import { Leaf, Tomato } from '../Illustrations/Illustrations.tsx'
import { Eyebrow } from '../ui/Eyebrow.tsx'
import styles from './PageHero.module.css'

type Props = {
  eyebrow: string
  title: ReactNode
  meta?: string
  text: string
  actions?: ReactNode
  // Optional visual on the right (e.g. the portrait), sitting on the panel's bottom edge.
  aside?: ReactNode
  // Extra content below the panel (jump links, contact cards…).
  children?: ReactNode
}

// Big rounded sage panel at the top of every page.
export default function PageHero({ eyebrow, title, meta, text, actions, aside, children }: Props) {
  return (
    <section className={`${layout.container} ${styles.hero}`}>
      <div className={`${styles.panel} ${aside ? styles.withAside : ''}`}>
        {!aside && (
          <div className={styles.decor} aria-hidden="true">
            <Tomato className={styles.tomato} />
            <Leaf className={styles.leaf} />
          </div>
        )}
        <div className={styles.copy}>
          <Eyebrow>{eyebrow}</Eyebrow>
          <h1 className={styles.title}>{title}</h1>
          {meta && <p className={styles.meta}>{meta}</p>}
          <p className={styles.text}>{text}</p>
          {actions && <div className={layout.actions}>{actions}</div>}
        </div>
        {aside}
      </div>
      {children}
    </section>
  )
}
