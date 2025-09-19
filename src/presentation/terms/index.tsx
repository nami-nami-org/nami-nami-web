import Button from '@/shared/ui/components/Button'
import { CheckCircleIcon } from 'lucide-react'
import Link from 'next/link'
import type { FC } from 'react'

import termData from './termData.json'

const Terms: FC = () => {
  return (
    <main className='bg-bg1 text-fn1 mt-10 mb-10 flex h-full w-full flex-1 flex-col gap-20'>
      <div className='m-auto flex w-full max-w-[1200px] flex-col flex-wrap items-center justify-center gap-5'>
        <section className='mb-12 flex flex-col items-center gap-2.5 text-center'>
          <h1 className='text-6xl font-bold'>Términos y condiciones de uso</h1>
          <h1 className='text-6xl font-bold'>Términos y condiciones de uso</h1>
          <h1 className='text-6xl font-bold'>Términos y condiciones de uso</h1>
          <p className='max-w-2xl'>
            Antes de continuar, necesitamos tu consentimiento para garantizar una experiencia segura, justa y transparente dentro
            de Ñami Ñami.
          </p>

          <Link href='/login'>
            <Button asClass variant='active' className='mt-5'>
              <CheckCircleIcon />
              Continuemos
            </Button>
          </Link>
        </section>

        <section className='flex flex-wrap justify-center gap-5'>
          {termData.map((card, index) => (
            <div
              key={index}
              className='border-bg3 bg-bg2 flex h-full min-h-[220px] w-[380px] flex-col justify-between rounded-xl border p-6 shadow-sm'
            >
              <div className='flex flex-1 flex-col p-0'>
                <div className='mb-4 flex items-center space-x-3'>
                  <div
                    className={`font-emojis h-12 w-12 ${card.emojiBg} flex items-center justify-center rounded-full text-3xl shadow`}
                  >
                    {card.emoji}
                  </div>
                  <h3 className='text-fn1 text-base font-semibold'>{card.title}</h3>
                </div>
                <div className='text-fn2 flex-1 text-sm'>
                  <p>{card.content}</p>
                </div>
              </div>
            </div>
          ))}
        </section>
      </div>
    </main>
  )
}

export default Terms
