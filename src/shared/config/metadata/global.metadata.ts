import type { Metadata } from 'next'

export const globalMetadata: Metadata = {
  metadataBase: new URL('https://ñamiñami.vercel.app'),
  authors: [{ name: 'Ñami Ñami', url: 'https://ñamiñami.vercel.app' }],
  creator: 'Ñami Ñami org',
  title: `Ñami Ñami`,
  description: `Ñami Ñami es la plataforma de delivery con IA para restaurantes locales en Lima, que protege datos, mejora visibilidad y reduce comisiones, ofreciendo soluciones innovadoras para negocios gastronómicos.`,
  keywords: `Delivery, Plataforma de Delivery, Restaurantes Locales, IA, Digitalización, Lima, Perú, Comisiones Justas, Privacidad, Tecnología Gastronómica`,
  publisher: 'ñami-ñami-org',
  icons: {
    icon: '/ñami-bg.svg'
  },
  openGraph: {
    title: 'Ñami Ñami: Plataforma de Delivery Inteligente',
    description:
      'Ñami Ñami es la plataforma de delivery con IA diseñada para restaurantes locales de Lima, que prioriza la privacidad, el control de datos y comisiones justas para los negocios.',
    url: 'https://ñamiñami.vercel.app',
    siteName: 'Ñami Ñami',
    images: [
      {
        url: '/openGraph.webp',
        alt: 'Logo de Ñami Ñami',
        width: 1200,
        height: 630
      }
    ],
    type: 'website'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Ñami Ñami: Plataforma de Delivery Inteligente',
    description:
      'Descubre Ñami Ñami, la solución de delivery con IA para restaurantes locales en Lima, que protege datos, mejora visibilidad y reduce comisiones.',
    images: [
      {
        url: '/openGraph.webp',
        alt: 'Ñami Ñami'
      }
    ]
  }
}

export const viewport = {
  width: 'device-width',
  initialScale: 1
}
