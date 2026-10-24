import headshot from '../../assets/images/celine-headshot.webp'
import { Leaf, Tomato } from '../Illustrations/Illustrations.tsx'
import styles from './Portrait.module.css'

type Props = {
  alt: string
  // Up to two "sticker" labels around the photo, e.g. ["Dt.P. / RD", "25 ans d'expérience"].
  stickers?: string[]
}

// Céline's cut-out headshot on a yellow arch, with sticker labels.
export default function Portrait({ alt, stickers = [] }: Props) {
  const [first, second] = stickers

  return (
    <div className={styles.portrait}>
      <div className={styles.arch} aria-hidden="true" />
      <Tomato className={styles.tomato} />
      <Leaf className={styles.leaf} />
      <img src={headshot} alt={alt} width={564} height={752} className={styles.photo} />
      {first && <p className={`${styles.sticker} ${styles.stickerLight}`}>{first}</p>}
      {second && <p className={`${styles.sticker} ${styles.stickerDark}`}>{second}</p>}
    </div>
  )
}
