import { useTranslation } from 'react-i18next'
import styles from './LanguageSwitcher.module.css'

export default function LanguageSwitcher() {
  const { t, i18n } = useTranslation()
  const next = i18n.resolvedLanguage === 'en' ? 'fr' : 'en'

  return (
    <button
      type="button"
      className={styles.button}
      lang={next}
      aria-label={t('nav.language')}
      onClick={() => i18n.changeLanguage(next)}
    >
      {t('nav.switchTo')}
    </button>
  )
}
