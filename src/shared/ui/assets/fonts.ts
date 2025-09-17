import { Instrument_Serif, Noto_Color_Emoji, Roboto } from 'next/font/google'

export const roboto = Roboto({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800'],
  variable: '--robot'
})

export const instrument = Instrument_Serif({
  subsets: ['latin'],
  weight: ['400'],
  variable: '--Instrument'
})

export const noto = Noto_Color_Emoji({
  subsets: ['emoji'],
  weight: ['400'],
  variable: '--emojis'
})

export const bodyFonts = `${roboto.variable} ${instrument.variable} ${noto.variable}`
