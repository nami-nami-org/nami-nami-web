import { Image } from '@unpic/react/nextjs'
import { ArrowUpRightIcon } from 'lucide-react'
import Link from 'next/link'
import type { FC } from 'react'

const BenefitBanner: FC = () => {
  return (
    <header className='bg-bg2 mx-auto my-2.5 flex w-full max-w-[1200px] flex-wrap items-center justify-center gap-5 rounded-lg px-2 py-4'>
      <div className='max-middle:px-2.5 flex items-center justify-center gap-2.5'>
        <Image src='/assets/CookingPot.webp' width={35} height={35} alt='CookingPot' />

        <p className='text-fn1 max-middle:text-left max-middle:text-wrap max-middle:max-w-[400px] text-center text-nowrap'>
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
