import { useTranslation } from 'react-i18next'
import { type Language, localizePath } from './routing.ts'

// Current language plus a helper to build links that stay in that language.
export function useLanguage() {
  const { i18n } = useTranslation()
  const lng = i18n.language as Language
  return { lng, localize: (path: string) => localizePath(path, lng) }
}
