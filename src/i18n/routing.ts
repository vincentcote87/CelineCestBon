// Each language lives under its own URL prefix. French matches the original
// celinecestbon.com paths so existing links and search results keep working.
export const languages = ['fr', 'en'] as const
export type Language = (typeof languages)[number]

export const defaultLanguage: Language = 'fr'

export const languagePrefix: Record<Language, string> = {
  fr: '',
  en: '/en-ca',
}

// Every page and its path in each language (without the language prefix).
export const pagePaths = {
  home: { fr: '/', en: '/' },
  about: { fr: '/a-propos', en: '/about' },
  services: { fr: '/services', en: '/services' },
  contact: { fr: '/contact', en: '/contact' },
} as const satisfies Record<string, Record<Language, string>>

export type Page = keyof typeof pagePaths

// Old URLs from the previous site, redirected to the page that now holds their content.
export const legacyRedirects: Record<string, Page> = {
  '/parcours-et-expertises': 'about',
}

// Folder the site is served from: "" at a domain's root, "/CelineCestBon" on GitHub
// Pages (set at build time with `--base`). React Router paths never include it.
export const basePath = import.meta.env.BASE_URL.replace(/\/$/, '')

// Removes the base folder from a browser path, e.g. "/CelineCestBon/en-ca" -> "/en-ca".
export function stripBase(pathname: string): string {
  if (!basePath || !pathname.startsWith(basePath)) return pathname
  return pathname.slice(basePath.length) || '/'
}

// Works out the language from a URL path, e.g. "/en-ca/contact" -> "en".
export function languageFromPath(pathname: string): Language {
  const prefix = languagePrefix.en
  return pathname === prefix || pathname.startsWith(`${prefix}/`) ? 'en' : 'fr'
}

// Removes the language prefix, e.g. "/en-ca/contact" -> "/contact".
export function stripLanguage(pathname: string): string {
  const prefix = languagePrefix[languageFromPath(pathname)]
  return pathname.slice(prefix.length).replace(/\/$/, '') || '/'
}

// Adds the language prefix, e.g. ("/contact", "en") -> "/en-ca/contact".
export function localizePath(path: string, lng: Language): string {
  const prefix = languagePrefix[lng]
  if (path === '/') return prefix || '/'
  return `${prefix}${path}`
}

// Full URL of a page in a language, e.g. ("about", "en") -> "/en-ca/about".
export function pageUrl(page: Page, lng: Language): string {
  return localizePath(pagePaths[page][lng], lng)
}

// The same page in another language, e.g. ("/a-propos", "en") -> "/en-ca/about".
// Unknown paths go to that language's home page.
export function translateUrl(pathname: string, to: Language): string {
  const from = languageFromPath(pathname)
  const path = stripLanguage(pathname)
  const page = (Object.keys(pagePaths) as Page[]).find(
    (p) => pagePaths[p][from] === path,
  )
  return pageUrl(page ?? 'home', to)
}
