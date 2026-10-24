import { useTranslation } from 'react-i18next'
import { type Language, type Page, pageUrl } from './routing.ts'

// Current language plus a helper to build page links in that language.
export function useLanguage() {
  const { i18n } = useTranslation()
  const lng = i18n.language as Language
  return { lng, url: (page: Page) => pageUrl(page, lng) }
}
