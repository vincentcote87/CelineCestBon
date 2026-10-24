import { useTranslation } from 'react-i18next'
import { Link, useLocation } from 'react-router'
import { languages, translateUrl } from '../../i18n/routing.ts'
import { useLanguage } from '../../i18n/useLanguage.ts'
import styles from './LanguageSwitcher.module.css'

const labels = { fr: 'Français', en: 'English' }

// FR | EN toggle linking to the same page in each language.
export default function LanguageSwitcher() {
  const { t } = useTranslation()
  const { lng } = useLanguage()
  const { pathname } = useLocation()

  return (
    <nav className={styles.switcher} aria-label={t('nav.language')}>
      {languages.map((code) => (
        <Link
          key={code}
          to={translateUrl(pathname, code)}
          className={code === lng ? `${styles.option} ${styles.active}` : styles.option}
          aria-current={code === lng ? 'true' : undefined}
          lang={code}
          hrefLang={code}
        >
          <span aria-hidden="true">{code.toUpperCase()}</span>
          <span className="visually-hidden">{labels[code]}</span>
        </Link>
      ))}
    </nav>
  )
}
