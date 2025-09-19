import Button from '@/shared/ui/components/Button'
import { Image } from '@unpic/react/nextjs'
import Link from 'next/link'
import type { FC } from 'react'

import LoginForm from './components/LoginForm'

const Login: FC = () => {
  return (
    <main className='grid h-full w-full flex-1 grid-cols-[1fr_700px] gap-[60px] pt-4'>
      <section className='relative h-full'>
        <Image className='h-full rounded-t-2xl' src='/assets/login-background.webp' layout='fullWidth' alt='login background' />

        <div className='absolute bottom-10 left-10 flex w-fit flex-col gap-2.5'>
          <h2 className='mb-2 text-2xl font-bold text-white'>
            <span className='font-emojis'>⭐</span> ¡Nos alegra tenerte aquí!
          </h2>
          <h3 className='text-fnA'>
            Inicia sesión para continuar tu
            <br /> recorrido culinario.
          </h3>
        </div>
      </section>
      <section className='flex h-full flex-col gap-10 p-3.5 pt-[100px]'>
        <header className='flex flex-col gap-5'>
          <h3 className='text-fn2'>
            <span className='font-emojis'>👋</span> ¡Qué gusto tenerte de vuelta!
          </h3>
          <h1 className='text-4xl leading-[1.2] font-bold'>
            <span className='text-tn1'>Inicia sesión</span> y sigue <br />
            disfrutando tu experiencia
            <br /> gastronómica con&nbsp;
            <span className='text-tn1 font-instrument font-normal italic'>Ñami Ñami</span>
          </h1>
        </header>

        <LoginForm />

        <footer className='flex flex-col gap-2.5'>
          <h2 className='font-bold'>¿Aún no tienes una cuenta?</h2>
          <Link href='/register'>
            <Button asClass className='w-fit justify-center' variant='border'>
              <span className='font-emojis'>👉</span>
              <span className='text-h4'>Regístrate aquí</span>
            </Button>
          </Link>
        </footer>
      </section>
    </main>
  )
}

export default Login
