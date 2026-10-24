import { useTranslation } from 'react-i18next'
import { Link } from 'react-router'

export default function NotFound() {
  const { t } = useTranslation()

  return (
    <section>
      <h1>{t('notFound.title')}</h1>
      <p>
        <Link to="/">{t('notFound.back')}</Link>
      </p>
    </section>
  )
}
