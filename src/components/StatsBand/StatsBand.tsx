import type { ReactNode } from 'react'
import { Leaf, Tomato } from '../Illustrations/Illustrations.tsx'
import styles from './StatsBand.module.css'

export type Stat = { value: string; label: string }

type Props = {
  title: string
  text: string
  stats: Stat[]
  footnote?: ReactNode
}

// Green band of key figures, e.g. "1 740+ jeunes de 3 à 12 ans".
export default function StatsBand({ title, text, stats, footnote }: Props) {
  return (
    <section className={styles.band}>
      <div className={styles.inner}>
        <Tomato className={styles.tomato} />
        <Leaf className={styles.leaf} />
        <div className={styles.header}>
          <h2 className={styles.title}>{title}</h2>
          <p className={styles.text}>{text}</p>
        </div>
        <dl className={styles.grid}>
          {stats.map((stat) => (
            <div key={stat.label} className={styles.stat}>
              <dt className={styles.label}>{stat.label}</dt>
              <dd className={styles.value}>
                {stat.value.endsWith('+') ? (
                  <>
                    {stat.value.slice(0, -1)}
                    <span className={styles.plus}>+</span>
                  </>
                ) : (
                  stat.value
                )}
              </dd>
            </div>
          ))}
        </dl>
        {footnote && <p className={styles.footnote}>{footnote}</p>}
      </div>
    </section>
  )
}
