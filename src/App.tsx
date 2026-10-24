import { Navigate, Route, Routes } from 'react-router'
import Layout from './components/Layout/Layout.tsx'
import LanguageRoute from './i18n/LanguageRoute.tsx'
import {
  type Language,
  languagePrefix,
  languages,
  legacyRedirects,
  pagePaths,
  pageUrl,
} from './i18n/routing.ts'
import Home from './pages/Home.tsx'
import NotFound from './pages/NotFound.tsx'
import Placeholder from './pages/Placeholder.tsx'

// Route path for a page, relative to its language prefix (e.g. "a-propos").
const path = (page: keyof typeof pagePaths, lng: Language) => pagePaths[page][lng].slice(1)

export default function App() {
  return (
    <Routes>
      {languages.map((lng) => (
        <Route
          key={lng}
          path={languagePrefix[lng] || '/'}
          element={<LanguageRoute lng={lng} />}
        >
          <Route element={<Layout />}>
            <Route index element={<Home />} />
            <Route path={path('about', lng)} element={<Placeholder page="about" />} />
            <Route path={path('services', lng)} element={<Placeholder page="services" />} />
            <Route path={path('contact', lng)} element={<Placeholder page="contact" />} />
            {Object.entries(legacyRedirects).map(([from, page]) => (
              <Route
                key={from}
                path={from.slice(1)}
                element={<Navigate to={pageUrl(page, lng)} replace />}
              />
            ))}
            <Route path="*" element={<NotFound />} />
          </Route>
        </Route>
      ))}
    </Routes>
  )
}
