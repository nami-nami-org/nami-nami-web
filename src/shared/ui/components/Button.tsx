import { cn } from '@/lib/utils'
import type { ComponentPropsWithoutRef, FC, ReactNode } from 'react'

const variants = {
  active: 'bg-tn1 text-fnA hover:opacity-[0.9]',
  normal: 'bg-bg2 hover:bg-bg3',
  'normal-border': 'bg-bg2 border-bg3 border-[1.5px] hover:bg-bg3',
  transparent: 'hover:bg-bg2',
  outline: 'border-bg3 border-[1.5px] hover:bg-bg2'
} as const

type ButtonProps = {
  children?: ReactNode | ReactNode[]
  variant?: keyof typeof variants
  asClass?: boolean
} & ComponentPropsWithoutRef<'button'> &
  ComponentPropsWithoutRef<'div'>

const Button: FC<ButtonProps> = ({ children, className = '', asClass = false, variant = 'normal', ...props }) => {
  const variantClasses = variants[variant]
  const baseClasses = `flex items-center gap-2 rounded-xl p-3 w-fit focus:outline-none`
  const finalClasses = cn(baseClasses, variantClasses, className)

  if (asClass)
    return (
      <div className={finalClasses} {...props}>
        {children}
      </div>
    )

  return (
    <button className={finalClasses} {...props}>
      {children}
    </button>
  )
}

export default Button
