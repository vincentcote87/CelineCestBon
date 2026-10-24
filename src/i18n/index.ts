import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import en from './locales/en.json'
import fr from './locales/fr.json'
import { defaultLanguage, languageFromPath, languages } from './routing.ts'

// The URL decides the language; LanguageRoute keeps i18n in sync as it changes.
i18n.use(initReactI18next).init({
  resources: {
    fr: { translation: fr },
    en: { translation: en },
  },
  lng: languageFromPath(window.location.pathname),
  supportedLngs: languages,
  fallbackLng: defaultLanguage,
  interpolation: { escapeValue: false },
})

// Keep <html lang> in sync for accessibility and SEO.
const syncHtmlLang = (lng: string) => {
  document.documentElement.lang = lng
}
syncHtmlLang(i18n.language)
i18n.on('languageChanged', syncHtmlLang)

export default i18n
