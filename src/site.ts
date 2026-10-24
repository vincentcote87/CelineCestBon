// Contact details and links used across the site.
export const site = {
  name: 'CelineCestBon',
  email: 'celineb.dt.p@gmail.com',
  phone: '403-880-8032',
  phoneHref: 'tel:+14038808032',
  links: {
    cda: 'https://www.collegeofdietitians.ab.ca/',
    dietitiansCanada: 'https://www.dietitians.ca/',
  },
}

export const mailto = `mailto:${site.email}`

// Section ids on the Services page, also linked from the Home page cards.
export const serviceAnchors = {
  cinqEpices: 'cinq-epices',
  collectiveKitchens: 'cuisines-collectives',
  healthPromotion: 'promotion-sante',
  schoolWork: 'ecole-travail',
} as const
