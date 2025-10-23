import { Image } from '@unpic/react/nextjs'
import { ArrowUpRightIcon } from 'lucide-react'
import Link from 'next/link'
import type { FC } from 'react'

const BenefitBanner: FC = () => {
  return (
    <header className='bg-bg2 mx-auto flex w-full flex-wrap items-center justify-center gap-5 rounded-lg px-2 py-4'>
      <div className='max-region:px-2.5 flex items-center justify-center gap-2.5'>
        <Image src='/assets/CookingPot.webp' width={35} height={35} alt='CookingPot' />

        <p className='text-fn1 max-region:text-left max-region:text-wrap max-region:max-w-[400px] text-center text-nowrap'>
          Descubre todos tus beneficios: <strong>tú cocinas con Ñami Ñami</strong> y nosotros nos encargamos del resto.
        </p>
      </div>

      <Link href='/register' className='text-tn1 flex gap-1.5'>
        Registrar mi local
        <ArrowUpRightIcon />
      </Link>
    </header>
  )
}

export default BenefitBanner
