import { useTranslation } from 'react-i18next'
import logoCda from '../../assets/images/logo-cda.png'
import logoDietitiansCanada from '../../assets/images/logo-dietitians-canada.png'
import logoUdem from '../../assets/images/logo-udem.png'
import { site } from '../../site.ts'
import layout from '../../styles/layout.module.css'
import { Eyebrow } from '../ui/Eyebrow.tsx'
import styles from './Credentials.module.css'

// Each card's logo and link, left to right.
const cards = [
  { key: 'udem', logo: logoUdem, width: 848, height: 330, href: site.links.udem },
  { key: 'dietitiansCanada', logo: logoDietitiansCanada, width: 540, height: 128, href: site.links.dietitiansCanada },
  { key: 'cda', logo: logoCda, width: 406, height: 118, href: site.links.cda },
] as const

// "Formation et appartenances": diploma and professional memberships, with logos.
export default function Credentials() {
  const { t } = useTranslation()

  return (
    <section className={layout.section}>
      <div className={layout.container}>
        <Eyebrow>{t('credentials.eyebrow')}</Eyebrow>
        <ul className={styles.grid}>
          {cards.map(({ key, logo, width, height, href }) => (
            <li key={key} className={styles.card}>
              <a href={href} target="_blank" rel="noreferrer" className={styles.logoBox}>
                <img src={logo} alt={t(`credentials.${key}.title`)} width={width} height={height} />
              </a>
              <h3>{t(`credentials.${key}.title`)}</h3>
              <p>{t(`credentials.${key}.text`)}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
