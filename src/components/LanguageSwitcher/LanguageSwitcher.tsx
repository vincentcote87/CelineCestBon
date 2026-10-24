import { useTranslation } from 'react-i18next'
import { Link, useLocation } from 'react-router'
import { localizePath, stripLanguage } from '../../i18n/routing.ts'
import { useLanguage } from '../../i18n/useLanguage.ts'
import styles from './LanguageSwitcher.module.css'

// Links to the same page in the other language.
export default function LanguageSwitcher() {
  const { t } = useTranslation()
  const { lng } = useLanguage()
  const { pathname } = useLocation()
  const next = lng === 'en' ? 'fr' : 'en'

  return (
    <Link
      to={localizePath(stripLanguage(pathname), next)}
      className={styles.button}
      lang={next}
      hrefLang={next}
      aria-label={t('nav.language')}
    >
      {t('nav.switchTo')}
    </Link>
  )
}
