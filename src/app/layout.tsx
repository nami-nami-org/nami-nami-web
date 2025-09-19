import Footer from '@/shared/components/footer/footer'
import { bodyFonts } from '@/shared/ui/assets/fonts'
import BenefitBanner from '@/shared/ui/components/BenefitBanner'
import Nav from '@/shared/ui/components/Nav'
import { ThemeProvider } from 'next-themes'
import { ViewTransitions } from 'next-view-transitions'
import NextTopLoader from 'nextjs-toploader'
import type { FC, ReactNode } from 'react'
import { Toaster } from 'sonner'

import { globalMetadata as metadata, viewport } from '../shared/config/metadata/global.metadata'
import './globals.css'

interface Props {
  children?: ReactNode | ReactNode[]
}

const Bootstrap: FC<Props> = ({ children }) => {
  return (
    <ViewTransitions>
      <html lang='es' className='no-scrollbar' data-lt-installed='true' suppressHydrationWarning>
        <body className={`${bodyFonts} bg-bg1 relative flex min-h-screen max-w-screen flex-col pt-2.5`}>
          <Toaster position='top-center' />
          <NextTopLoader color='var(--tn1)' showSpinner={false} />
          <ThemeProvider defaultTheme='system' enableSystem attribute={'class'} disableTransitionOnChange>
            <Nav />
            <BenefitBanner />
            {children}
            <Footer />
          </ThemeProvider>
        </body>
      </html>
    </ViewTransitions>
  )
}

export default Bootstrap
export { metadata, viewport }
