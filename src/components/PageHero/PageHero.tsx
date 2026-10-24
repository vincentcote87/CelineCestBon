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
  // Optional visual on the right (e.g. the portrait). Without one, a soft
  // blush circle with a tomato and leaf decorates the corner.
  aside?: ReactNode
  children?: ReactNode
}

// Top section of the inner pages (About, Services, Contact).
export default function PageHero({ eyebrow, title, meta, text, actions, aside, children }: Props) {
  return (
    <section className={`${styles.hero} ${aside ? styles.withAside : ''}`}>
      {!aside && (
        <div className={styles.decor} aria-hidden="true">
          <Tomato className={styles.tomato} />
          <Leaf className={styles.leaf} />
        </div>
      )}
      <div className={`${layout.container} ${styles.grid}`}>
        <div className={styles.copy}>
          <Eyebrow>{eyebrow}</Eyebrow>
          <h1 className={styles.title}>{title}</h1>
          {meta && <p className={styles.meta}>{meta}</p>}
          <p className={styles.text}>{text}</p>
          {actions && <div className={layout.actions}>{actions}</div>}
        </div>
        {aside}
      </div>
      {children && <div className={layout.container}>{children}</div>}
    </section>
  )
}
