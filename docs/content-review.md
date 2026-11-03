# Content to review

The pages were first built from the mockup photos (`docs/mockup-notes.md`) and the
current site (`docs/current-site-content.md`). The French text has since been updated
from the client's corrections of 27 October 2026; typo fixes, open questions and
follow-ups from that pass are in `docs/corrections-notes.md`. This list covers what
is still a guess, a draft or missing. All text lives in `src/i18n/locales/fr/` and `en/`.

## Placeholder text (not in the mockup photos)

| Where | Key | Notes |
|---|---|---|
| Home: photo stickers | `home.hero.badge`, `badge2` | "Dt.P. / RD" and "25 ans d’expérience". |
| About: closing band | `about.cta.*` | Not photographed. I wrote "Envie de collaborer ? / Cultivons ensemble." The corrections keep the kicker only; the title and text are still mine. |
| Image descriptions | `home.hero.photoAlt` | Screen-reader text for the headshot. |
| Search description | `meta.description` | The summary Google shows under the link. |

## Taken from the current site (the mockup photo was cut off)

- The food-security definition, credited to the FAO (the mockup credits Santé Canada).

## Drafted translations

All English text is my translation of the corrected French (see the "Version anglaise"
section of `docs/corrections-notes.md`). Brand and program names (Les Ateliers cinq
épices, Réseau santé Alberta, ACFA régionale de Calgary, ÉducationNutrition) are left
in French.

## Still missing

- **Privacy policy page.** The current site has one at `/privacy` and `/en-ca/privacy`.
- **Social sharing image** (the preview shown when the link is shared on Facebook or LinkedIn).

## Illustrations

The food illustrations are simple SVG drawings in
`src/components/Illustrations/Illustrations.tsx`. Any of them can be replaced with
artwork exported from Photoshop or Illustrator (SVG is best, or PNG/WebP).
