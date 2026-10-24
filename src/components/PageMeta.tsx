import { useTranslation } from 'react-i18next'
import { useLocation } from 'react-router'
import { basePath, languages, translateUrl } from '../i18n/routing.ts'

// Sets the page <title>, description and links to the other language versions.
// React hoists these tags into <head>.
export default function PageMeta({ title }: { title: string }) {
  const { t } = useTranslation()
  const { pathname } = useLocation()

  return (
    <>
      <title>{`${title} | ${t('meta.siteName')}`}</title>
      <meta name="description" content={t('meta.description')} />
      {languages.map((lng) => (
        <link key={lng} rel="alternate" hrefLang={lng} href={basePath + translateUrl(pathname, lng)} />
      ))}
    </>
  )
}
