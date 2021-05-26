export const GA_TRACKING_ID = 'G-3RF231V766'

export const defaultTitle =
  'Arian Architects - Redefine & Reimagine your lifestyle'

export const deploymentUrl =
  process.env.NODE_ENV == 'production'
    ? 'https://cdn.jsdelivr.net/gh/Arian-Architects/arian-architects.github.io'
    : 'http://localhost:3000'

export const defaultDescription =
  'A renowned architecture firm in Delhi NCR, Arian Architects is one of the top Indian architectural consultants with expertise in architectural drawing, interior designing, modular kitchen and wardrobes.'

export const socialLinks = [
  {
    name: 'Twitter',
    href: 'https://twitter.com/ijainishant/',
    src: `${deploymentUrl}/twitter.png`,
  },
  {
    name: 'Facebook',
    href: 'https://www.facebook.com/ArianArchitects/',
    src: `${deploymentUrl}/facebook.png`,
  },
  {
    name: 'Instagram',
    href: 'https://www.instagram.com/arianarchitects/',
    src: `${deploymentUrl}/instagram.png`,
  },
  {
    name: 'LinkedIn',
    href: 'https://www.linkedin.com/in/ijainishant/',
    src: `${deploymentUrl}/linkedin.png`,
  },
]

export const structuredData = {
  '@id': 'https://arian-architects.github.io/',
  '@context': 'https://schema.org',
  '@type': 'Website',
  name: defaultTitle,
  description: defaultDescription,
  url: 'https://arian-architects.github.io/',
}

export const items = [
  {
    project: 'B 301, Hari Nagar',
    end: 4,
  },
  {
    project: 'Raveesh Bagla KWS & Civil CGA, DLF MOTI NAGAR',
    end: 107,
  },
  {
    project: 'Rakesh Kohli, Inderpuri',
    end: 26,
  },
  {
    project: 'Rekha Gupta A Block Vishal Enclave, Rajouri Garden',
    end: 38,
  },
  {
    project: 'Faisal Irfan CGB, DLF MOTI NAGAR',
    end: 28,
  },
  {
    project: 'CGG, DLF Moti Nagar',
    end: 6,
  },
  {
    project: 'Pavas Bhatia Kitchen, Vasant Kunj',
    end: 8,
  },
  {
    project: 'Amit Khurana Kitchen, Kirti Nagar',
    end: 13,
  },
  {
    project: 'A-11, Anand Niketan',
    end: 43,
  },
  {
    project: 'B10 Kitchen 3D View, Vasant Kunj',
    end: 5,
  },
  {
    project: 'Belmont Club, Indore',
    end: 26,
  },
  {
    project: 'D-25, Janak Puri',
    end: 28,
  },
  {
    project: 'MS-90, Hari Nagar',
    end: 20,
  },
]
