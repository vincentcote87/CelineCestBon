import type { ReactNode } from 'react'
import { Script } from '../ui/Eyebrow.tsx'
import styles from './CtaBand.module.css'

type Props = {
  kicker: string
  title: string
  text: string
  actions: ReactNode
}

// Red call-to-action band shown at the end of every page.
export default function CtaBand({ kicker, title, text, actions }: Props) {
  return (
    <section className={styles.band}>
      <div className={styles.inner}>
        <div className={styles.copy}>
          <Script>{kicker}</Script>
          <h2 className={styles.title}>{title}</h2>
          <p className={styles.text}>{text}</p>
        </div>
        <div className={styles.actions}>{actions}</div>
      </div>
    </section>
  )
}
