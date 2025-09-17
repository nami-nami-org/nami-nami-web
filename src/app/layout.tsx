import { bodyFonts } from '@/shared/ui/assets/fonts'
import { ThemeProvider } from 'next-themes'
import NextTopLoader from 'nextjs-toploader'
import type { FC, ReactNode } from 'react'

import { globalMetadata as metadata, viewport } from '../shared/config/metadata/global.metadata'
import './globals.css'

interface Props {
  children?: ReactNode | ReactNode[]
}

const Bootstrap: FC<Props> = ({ children }) => {
  return (
    <html lang='es' data-lt-installed='true' suppressHydrationWarning>
      <body className={`${bodyFonts} min-h-screen min-w-screen`}>
        <NextTopLoader color='rgb(var(--tn-tn1))' showSpinner={false} />
        <ThemeProvider defaultTheme='system' enableSystem attribute={'class'} disableTransitionOnChange>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}

export default Bootstrap
export { metadata, viewport }
