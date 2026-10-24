import { useLayoutEffect } from 'react'
import { useTranslation } from 'react-i18next'
import { Outlet } from 'react-router'
import type { Language } from './routing.ts'

// Switches i18n to the language of the matched URL prefix (also on back/forward).
export default function LanguageRoute({ lng }: { lng: Language }) {
  const { i18n } = useTranslation()

  useLayoutEffect(() => {
    if (i18n.language !== lng) i18n.changeLanguage(lng)
  }, [i18n, lng])

  return <Outlet />
}
