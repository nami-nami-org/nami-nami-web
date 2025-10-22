'use client'

import Button from '@/shared/ui/components/Button'
import FormInput from '@/shared/ui/components/FormInput'
import { ArrowRightIcon } from 'lucide-react'
import { redirect } from 'next/navigation'
import type { FC } from 'react'
import { type SubmitHandler, useForm } from 'react-hook-form'
import { toast } from 'sonner'

import { loginFormValues, loginResolver } from '../schema/LoginSchema'

const LoginForm: FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<loginFormValues>({
    resolver: loginResolver
  })

  const onSubmit: SubmitHandler<loginFormValues> = data => {
    const myPromise = new Promise<loginFormValues>(resolve => {
      setTimeout(() => resolve(data), 1500)
    })

    toast.promise(myPromise, {
      loading: 'Loading...',
      success: data => {
        return `Ingresando con la cuenta: ${data.email}`
      },
      error: 'Error'
    })

    redirect('/')
  }

  return (
    <form className='flex w-fit flex-col gap-5 pl-5' onSubmit={handleSubmit(onSubmit)}>
      <FormInput
        type='email'
        label='Correo Electrónico'
        placeholder='tucorreo@ejemplo.com'
        required
        className='w-[250px]'
        {...register('email')}
        error={errors.email?.message}
      />

      <FormInput
        type='password'
        label='Contraseña'
        placeholder='*********'
        required
        className='w-[250px]'
        {...register('password')}
        error={errors.password?.message}
      />

      <Button variant='active' type='submit' className='justify-center'>
        <span className='text-h4'>Iniciar Sesión</span>
        <ArrowRightIcon />
      </Button>
    </form>
  )
}

export default LoginForm
