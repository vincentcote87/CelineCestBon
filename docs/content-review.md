# Content to review

The pages are built from the mockup photos (`docs/mockup-notes.md`) and the current
site (`docs/current-site-content.md`). This list covers everything that is a guess,
a draft or still missing. All text lives in `src/i18n/locales/fr/` and `en/`.

## Placeholder text (not in the mockup photos)

| Where | Key | Notes |
|---|---|---|
| Home: hero greeting | `home.hero.eyebrow` | From the "Jardin" design mockup: "Bonjour, moi c’est Céline !" |
| Home: photo stickers | `home.hero.badge`, `badge2` | "Dt.P. / RD" and "25 ans d’expérience". |
| Home: stats label | `home.stats.kicker` | "En chiffres". |
| About: closing band | `about.cta.*` | Not photographed. I wrote "Envie de collaborer ? / Cultivons ensemble." |
| About: hero paragraph (FR) | `about.hero.text` | Only the English version was photographed, so the French is my translation. |
| Home: hero buttons | `common.emailMe`, `common.seeServices` | Cut off in the photo. Assumed "Écrivez-moi" + "Voir les services". |
| Contact: email checklist | `contact.prepare.steps` | Four steps were visible; the photo may have cut off a fifth. |
| Image descriptions | `home.hero.photoAlt` | Screen-reader text for the headshot. |
| Search description | `meta.description` | The summary Google shows under the link. |

## Taken from the current site (the mockup photo was cut off)

- About › Parcours: the last two paragraphs (`about.background.p3`, `p4`), about the
  Réseau santé Alberta role and non-communicable diseases. I merged two short paragraphs
  and dropped the sentence starting "Particulièrement ces dernières années…".
- The food-security definition, credited to the FAO (the mockup credits Santé Canada).

## Drafted translations

All English text is my draft, except the About hero, which was photographed in English.
Brand and program names (Ateliers Cinq Épices, Réseau santé Alberta, ACFA régionale de
Calgary, Éducation Nutrition) are left in French.

## Still missing

- **Privacy policy page.** The current site has one at `/privacy` and `/en-ca/privacy`.
- **Social sharing image** (the preview shown when the link is shared on Facebook or LinkedIn).

## Illustrations

The food illustrations are simple SVG drawings in
`src/components/Illustrations/Illustrations.tsx`. Any of them can be replaced with
artwork exported from Photoshop or Illustrator (SVG is best, or PNG/WebP).
