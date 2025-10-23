import { Geist, Geist_Mono, Instrument_Serif, Noto_Color_Emoji } from 'next/font/google'

export const geist = Geist({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800'],
  variable: '--font-geist'
})

export const geistMono = Geist_Mono({
  subsets: ['latin'],
  weight: ['300', '400', '500'],
  variable: '--font-geist-mono'
})

export const instrument = Instrument_Serif({
  subsets: ['latin'],
  weight: ['400'],
  variable: '--font-instrument'
})

export const noto = Noto_Color_Emoji({
  subsets: ['emoji'],
  weight: ['400'],
  variable: '--font-emojis'
})

export const bodyFonts = `${geistMono.variable} ${geist.variable} ${instrument.variable} ${noto.variable}`
