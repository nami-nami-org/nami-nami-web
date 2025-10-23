'use client'

import Button from '@/shared/ui/components/Button'
import FormInput from '@/shared/ui/components/FormInput'
import { ArrowRightIcon } from 'lucide-react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import type { FC } from 'react'
import { Controller, type SubmitHandler, useForm } from 'react-hook-form'
import { toast } from 'sonner'
import { userService } from '@/core/services/users.service'
import { registerFormValues, registerResolver } from '../schema/RegisterSchema'

const RegisterForm: FC = () => {
  const router = useRouter()
  const {
    register,
    handleSubmit,
    control,
    watch,
    formState: { errors }
  } = useForm<registerFormValues>({
    resolver: registerResolver,
    defaultValues: {
      name: '',
      email: '',
      password: '',
      confirmPassword: '',
      phone: '',
      terms: false
    }
  })

  const termsChecked = watch('terms')

  const onSubmit: SubmitHandler<registerFormValues> = async (data) => {
    toast.promise(
      userService.createUser({
        name: data.name,
        email: data.email,
        password: data.password,
        phone: data.phone
      }),
      {
        loading: 'Creando tu cuenta...',
        success: () => {
          // Opcional: redirigir después de crear la cuenta
          router.push('/login')
          return 'Cuenta creada exitosamente.'
        },
        error: (err) => err.message || 'Error al crear la cuenta. Intenta de nuevo.'
      }
    )
  }

  return (
    <form
      className='flex w-fit flex-col gap-5 pl-5'
      onSubmit={handleSubmit(onSubmit)}
    >
      <FormInput
        type='text'
        label='Nombre'
        placeholder='Tu nombre completo'
        required
        className='w-[250px]'
        {...register('name')}
        error={errors.name?.message}
      />

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

      <FormInput
        type='password'
        label='Confirmar Contraseña'
        placeholder='*********'
        required
        className='w-[250px]'
        {...register('confirmPassword')}
        error={errors.confirmPassword?.message}
      />

      <FormInput
        type='tel'
        label='Teléfono (Opcional)'
        placeholder='Ej. 123456789'
        className='w-[250px]'
        {...register('phone')}
        error={errors.phone?.message}
      />

      <Controller
        name='terms'
        control={control}
        rules={{ required: 'Debes aceptar los términos y condiciones' }}
        render={({ field, fieldState }) => (
          <div className='flex flex-col gap-2'>
            <div className='flex items-center gap-2'>
              <input
                type='checkbox'
                id='terms'
                className='accent-tn1'
                checked={field.value}
                onChange={(e) => field.onChange(e.target.checked)}
                onBlur={field.onBlur}
                name={field.name}
                ref={field.ref}
              />
              <label htmlFor='terms' className='text-fnt-secondary text-sm'>
                Acepto los&nbsp;
                <Link
                  href='/terms'
                  className='underline'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  Términos y Condiciones
                </Link>
              </label>
            </div>
            {fieldState.error && (
              <span className='text-xs text-red-500'>
                {fieldState.error.message}
              </span>
            )}
          </div>
        )}
      />

      <Button
        variant='active'
        type='submit'
        className='justify-center'
        disabled={!termsChecked}
      >
        <span className='text-h4'>Registrarse</span>
        <ArrowRightIcon />
      </Button>
    </form>
  )
}

export default RegisterForm
