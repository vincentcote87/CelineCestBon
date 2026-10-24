import { useTranslation } from 'react-i18next'
import PageMeta from '../components/PageMeta.tsx'
import Button from '../components/ui/Button.tsx'
import { useLanguage } from '../i18n/useLanguage.ts'
import styles from './NotFound.module.css'

export default function NotFound() {
  const { t } = useTranslation()
  const { url } = useLanguage()

  return (
    <section className={styles.section}>
      <PageMeta title={t('notFound.title')} />
      <h1>{t('notFound.title')}</h1>
      <p>{t('notFound.text')}</p>
      <Button to={url('home')}>{t('notFound.back')}</Button>
    </section>
  )
}
