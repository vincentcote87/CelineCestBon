// Contact details and links used across the site.
export const site = {
  name: 'CelineCestBon',
  email: 'c.bosse@celinecestbon.com',
  phone: '403-880-8032',
  // Includes the country code (+1) so the number dials from anywhere.
  phoneHref: 'tel:+14038808032',
  // Opens the messaging app instead of the dialer.
  smsHref: 'sms:+14038808032',
  links: {
    udem: 'https://www.umontreal.ca/',
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
  workplace: 'milieu-travail',
} as const
