# Celine Website

A static information website built with React.

## Stack

- [Vite](https://vite.dev): dev server and build tool
- [React](https://react.dev) + TypeScript
- [React Router](https://reactrouter.com): page routing
- CSS Modules for component styles, with global design tokens in `src/index.css`

## Getting started

Requires Node.js 26 or newer (see `.nvmrc`).

```sh
npm install
npm run dev      # start the dev server at http://localhost:5173
npm run build    # type-check and build to dist/
npm run preview  # serve the production build locally
npm run lint     # lint with oxlint
```

## Project structure

```
src/
  components/   reusable components, each with its own .module.css
  pages/        one component per route
  i18n/         translations (locales/fr, locales/en) and language routing
  styles/       layout helpers shared by pages
  App.tsx       route definitions
  site.ts       contact details and links
  index.css     global styles and design tokens (colours, fonts, spacing)
public/         static files copied as-is (favicon, images)
```

## Languages

The site is bilingual. French is the default and English lives under `/en-ca`,
matching the original celinecestbon.com URLs:

| French | English |
|---|---|
| `/` | `/en-ca` |
| `/a-propos` | `/en-ca/about` |
| `/services` | `/en-ca/services` |
| `/contact` | `/en-ca/contact` |

- All text lives in `src/i18n/locales/fr/` and `en/`, one JSON file per page. The build
  fails if the English files are missing a key that exists in French.
- Use `t('key')` from `react-i18next` for text, and `url('page')` from
  `src/i18n/useLanguage.ts` for links, so they stay in the current language.
- Page paths per language are defined in `src/i18n/routing.ts` (`pagePaths`).

## Hosting

`npm run build` outputs plain static files to `dist/`, which can be deployed to any
static host (Netlify, Vercel, Cloudflare Pages, GitHub Pages). Because the site uses
client-side routing, the host must serve `index.html` for every path.
`public/_redirects` does this for Netlify and Cloudflare Pages, and also 301-redirects
the old `/parcours-et-expertises` URLs.

### Preview on GitHub Pages

Every push to `main` builds and publishes a preview to
https://vincentcote87.github.io/CelineCestBon/ (`.github/workflows/deploy-pages.yml`).
The workflow builds with `--base=/CelineCestBon/` because Pages serves the site from a
sub-folder, copies `index.html` to `404.html` so direct links and refreshes work, and
marks the pages `noindex` so search engines skip the preview.
One-time setup: repository Settings → Pages → Source → **GitHub Actions**.

## Content

- `docs/content-review.md`: placeholder, drafted and missing content to review.
- `docs/mockup-notes.md` and `docs/current-site-content.md`: source material.
- Contact details (email, phone, links) live in `src/site.ts`.
