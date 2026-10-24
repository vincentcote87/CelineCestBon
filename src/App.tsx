import { Route, Routes } from 'react-router'
import Layout from './components/Layout/Layout.tsx'
import LanguageRoute from './i18n/LanguageRoute.tsx'
import { languagePrefix, languages } from './i18n/routing.ts'
import Home from './pages/Home.tsx'
import NotFound from './pages/NotFound.tsx'

// Page routes, defined once and mounted under every language prefix.
const pageRoutes = (
  <Route element={<Layout />}>
    <Route index element={<Home />} />
    <Route path="*" element={<NotFound />} />
  </Route>
)

export default function App() {
  return (
    <Routes>
      {languages.map((lng) => (
        <Route
          key={lng}
          path={languagePrefix[lng] || '/'}
          element={<LanguageRoute lng={lng} />}
        >
          {pageRoutes}
        </Route>
      ))}
    </Routes>
  )
}
