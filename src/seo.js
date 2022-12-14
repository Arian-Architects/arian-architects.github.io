export const SITE_TITLE = 'Arian Architects - Redefine & Reimagine your lifestyle'

export const SITE_DESCRIPTION =
  'A renowned architecture firm in Delhi NCR, Arian Architects is one of the top Indian architectural consultants with expertise in architectural drawing, interior designing, modular kitchen and wardrobes.'

export const structuredData = {
  '@id': 'https://arian-architects.github.io',
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: SITE_TITLE,
  description: SITE_DESCRIPTION,
  url: 'https://arian-architects.github.io',
  address: {
    '@type': 'PostalAddress',
    streetAddress: '90 MS Block, Hari Nagar, Clock Tower, opposite to Hotel Maya Palace',
    addressLocality: 'New Delhi',
    addressRegion: 'Delhi',
    postalCode: '10064',
    addressCountry: 'IN',
  },
  logo: 'https://arian-architects.github.io/static/favicon-image.png',
}
