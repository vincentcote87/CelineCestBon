import 'i18next'
import type fr from './locales/fr.json'

// Type-checks translation keys against the French file.
declare module 'i18next' {
  interface CustomTypeOptions {
    resources: { translation: typeof fr }
  }
}
