import { cn } from '@/lib/utils'
import type { FC, InputHTMLAttributes } from 'react'

interface FormInputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string
  containerClassName?: string
  labelClassName?: string
  inputClassName?: string
  error?: string
}

const FormInput: FC<FormInputProps> = ({
  label,
  required = false,
  containerClassName = '',
  labelClassName = '',
  type = 'text',
  className: inputClassName,
  id,
  name,
  error,
  ...props
}) => {
  const inputId = id ?? name

  return (
    <div className={`flex flex-col gap-2.5 ${containerClassName}`}>
      {label && (
        <label htmlFor={inputId}>
          <h3 className={`flex items-center gap-1.5 font-medium ${labelClassName}`}>
            {required && <span className='text-tn1 font-bold'>*</span>}
            {label}
          </h3>
        </label>
      )}
      <input
        type={type}
        className={cn(
          'm-w-[200px] bg-bg2 border-bg3 text-h3 flex items-center gap-2 rounded-xl border-[1.5px] p-3',
          inputClassName
        )}
        id={inputId}
        name={name}
        {...props}
      />
      {error && <span className='text-tn1 text-sm'>{error}</span>}
    </div>
  )
}

export default FormInput
