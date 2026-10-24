import { useTranslation } from 'react-i18next'
import { Link } from 'react-router'
import { useLanguage } from '../i18n/useLanguage.ts'

export default function NotFound() {
  const { t } = useTranslation()
  const { localize } = useLanguage()

  return (
    <section>
      <h1>{t('notFound.title')}</h1>
      <p>
        <Link to={localize('/')}>{t('notFound.back')}</Link>
      </p>
    </section>
  )
}
