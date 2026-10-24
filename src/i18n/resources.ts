// All translations, one file per page. French is the reference: its shape
// defines the translation keys that TypeScript checks.
import enAbout from './locales/en/about.json'
import enCommon from './locales/en/common.json'
import enContact from './locales/en/contact.json'
import enHome from './locales/en/home.json'
import enServices from './locales/en/services.json'
import frAbout from './locales/fr/about.json'
import frCommon from './locales/fr/common.json'
import frContact from './locales/fr/contact.json'
import frHome from './locales/fr/home.json'
import frServices from './locales/fr/services.json'

const fr = { ...frCommon, home: frHome, about: frAbout, services: frServices, contact: frContact }
const en: typeof fr = { ...enCommon, home: enHome, about: enAbout, services: enServices, contact: enContact }

export const resources = {
  fr: { translation: fr },
  en: { translation: en },
}
