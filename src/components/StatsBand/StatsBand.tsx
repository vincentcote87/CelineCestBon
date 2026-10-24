import type { ReactNode } from 'react'
import layout from '../../styles/layout.module.css'
import { Eyebrow } from '../ui/Eyebrow.tsx'
import styles from './StatsBand.module.css'

export type Stat = { value: string; label: string }

type Props = {
  kicker?: string
  title: string
  text: string
  stats: Stat[]
  footnote?: ReactNode
}

// White panel of key figures in pastel bubbles, e.g. "1 740+ jeunes de 3 à 12 ans".
// Four figures sit beside the title; more go in a full-width grid below it.
export default function StatsBand({ kicker, title, text, stats, footnote }: Props) {
  const wide = stats.length > 4

  return (
    <section className={layout.container}>
      <div className={`${styles.panel} ${wide ? styles.wide : ''}`}>
        <div className={styles.header}>
          {kicker && <Eyebrow>{kicker}</Eyebrow>}
          <h2 className={styles.title}>{title}</h2>
          <p className={styles.text}>{text}</p>
        </div>
        <dl className={styles.grid}>
          {stats.map((stat) => (
            <div key={stat.label} className={styles.stat}>
              <dt className={styles.label}>{stat.label}</dt>
              <dd className={styles.value}>{stat.value}</dd>
            </div>
          ))}
        </dl>
        {footnote && <p className={styles.footnote}>{footnote}</p>}
      </div>
    </section>
  )
}
