// Each language lives under its own URL prefix. These match the paths of the
// original celinecestbon.com so existing links and search results keep working.
export const languages = ['fr', 'en'] as const
export type Language = (typeof languages)[number]

export const defaultLanguage: Language = 'fr'

export const languagePrefix: Record<Language, string> = {
  fr: '',
  en: '/en-ca',
}

// Works out the language from a URL path, e.g. "/en-ca/contact" -> "en".
export function languageFromPath(pathname: string): Language {
  const prefix = languagePrefix.en
  return pathname === prefix || pathname.startsWith(`${prefix}/`) ? 'en' : 'fr'
}

// Removes the language prefix, e.g. "/en-ca/contact" -> "/contact".
export function stripLanguage(pathname: string): string {
  const prefix = languagePrefix[languageFromPath(pathname)]
  return pathname.slice(prefix.length) || '/'
}

// Builds the URL for a page in a given language, e.g. ("/contact", "en") -> "/en-ca/contact".
export function localizePath(path: string, lng: Language): string {
  const prefix = languagePrefix[lng]
  if (path === '/') return prefix || '/'
  return `${prefix}${path}`
}
