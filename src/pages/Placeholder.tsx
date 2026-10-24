import { useTranslation } from 'react-i18next'
import PageMeta from '../components/PageMeta.tsx'
import type { Page } from '../i18n/routing.ts'
import styles from './Placeholder.module.css'

// Temporary stand-in for pages that haven't been built yet.
export default function Placeholder({ page }: { page: Page }) {
  const { t } = useTranslation()
  const title = t(`nav.${page}`)

  return (
    <section className={styles.section}>
      <PageMeta title={title} />
      <h1>{title}</h1>
      <p>{t('placeholder.text')}</p>
    </section>
  )
}
