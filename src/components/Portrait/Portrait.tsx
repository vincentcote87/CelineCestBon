import headshot from '../../assets/images/celine-headshot.webp'
import { Leaf, Lime, Pepper, Tomato } from '../Illustrations/Illustrations.tsx'
import styles from './Portrait.module.css'

// Céline's headshot in a circle, framed by food illustrations.
export default function Portrait({ alt, badge }: { alt: string; badge?: string }) {
  return (
    <div className={styles.portrait}>
      <div className={styles.portraitRing} aria-hidden="true" />
      <div className={styles.portraitFrame}>
        <img src={headshot} alt={alt} width={564} height={752} className={styles.portraitImg} />
      </div>
      {badge && <p className={styles.badge}>{badge}</p>}
      <svg className={styles.dashes} viewBox="0 0 120 40" aria-hidden="true">
        <path
          d="M4 36C30 8 80 2 116 10"
          fill="none"
          stroke="#58a845"
          strokeWidth="2.5"
          strokeDasharray="7 7"
          strokeLinecap="round"
        />
      </svg>
      <Leaf className={`${styles.food} ${styles.leafA}`} />
      <Leaf className={`${styles.food} ${styles.leafB}`} />
      <Tomato className={`${styles.food} ${styles.tomato}`} />
      <Pepper className={`${styles.food} ${styles.pepper}`} />
      <Lime className={`${styles.food} ${styles.lime}`} />
    </div>
  )
}
