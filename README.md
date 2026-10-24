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
  App.tsx       route definitions
  index.css     global styles and design tokens (colours, fonts, spacing)
public/         static files copied as-is (favicon, images)
```

## Languages

The site is bilingual. French is the default and English lives under `/en-ca`,
matching the original celinecestbon.com URLs:

| French | English |
|---|---|
| `/` | `/en-ca` |
| `/contact` | `/en-ca/contact` |

- All text lives in `src/i18n/locales/fr.json` and `en.json`. The build fails if a key is
  used that isn't in `fr.json`.
- Use `t('key')` from `react-i18next` for text, and `localize('/path')` from
  `src/i18n/useLanguage.ts` for links, so they stay in the current language.
- Add new pages in `src/App.tsx`; they are automatically available in both languages.

## Hosting

`npm run build` outputs plain static files to `dist/`, which can be deployed to any
static host (Netlify, Vercel, Cloudflare Pages, GitHub Pages). Because the site uses
client-side routing, configure the host to serve `index.html` for unknown paths.
