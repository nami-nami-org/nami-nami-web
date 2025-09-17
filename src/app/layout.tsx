import { bodyFonts } from '@/shared/fonts'
import { ThemeProvider } from 'next-themes'
import NextTopLoader from 'nextjs-toploader'
import type { FC, ReactNode } from 'react'

import './globals.css'
import { metadata, viewport } from './metadata'

interface Props {
  children?: ReactNode | ReactNode[]
}

const Bootstrap: FC<Props> = ({ children }) => {
  return (
    <html lang='es' data-lt-installed='true' suppressHydrationWarning>
      <body className={`${bodyFonts} min-h-screen min-w-screen`}>
        <NextTopLoader color='rgb(var(--tn-tn1))' showSpinner={false} />
        <ThemeProvider defaultTheme='system' enableSystem attribute={'class'}>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}

export default Bootstrap
export { metadata, viewport }
