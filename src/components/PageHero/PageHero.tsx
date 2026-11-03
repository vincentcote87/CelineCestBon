import type { ReactNode } from 'react'
import layout from '../../styles/layout.module.css'
import { Leaf, Tomato } from '../Illustrations/Illustrations.tsx'
import { Eyebrow } from '../ui/Eyebrow.tsx'
import styles from './PageHero.module.css'

type Props = {
  // Small uppercase label above the eyebrow, e.g. "Diététiste en santé publique".
  overline?: string
  eyebrow: string
  title: ReactNode
  meta?: string
  // One paragraph, or several (e.g. the Contact page).
  text: string | string[]
  actions?: ReactNode
  // Optional visual on the right (e.g. the portrait), sitting on the panel's bottom edge.
  aside?: ReactNode
  // Extra content below the panel (jump links, contact cards…).
  children?: ReactNode
}

// Big rounded sage panel at the top of every page.
export default function PageHero({ overline, eyebrow, title, meta, text, actions, aside, children }: Props) {
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
          {overline && <p className={styles.overline}>{overline}</p>}
          <Eyebrow>{eyebrow}</Eyebrow>
          <h1 className={styles.title}>{title}</h1>
          {meta && <p className={styles.meta}>{meta}</p>}
          <div className={styles.text}>
            {(Array.isArray(text) ? text : [text]).map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
          {actions && <div className={layout.actions}>{actions}</div>}
        </div>
        {aside}
      </div>
      {children}
    </section>
  )
}
