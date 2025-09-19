import type { ButtonHTMLAttributes, HTMLAttributes, ReactNode } from 'react'

const variants = {
  normal: 'bg-bg2 text-fn1',
  border: 'border-bg3 bg-bg2 border-[1.5px]',
  active: 'bg-tn1 text-fnA',
  transparent: ''
} as const

type CommonProps = {
  children?: ReactNode | ReactNode[]
  variant?: keyof typeof variants
  noHover?: boolean
  className?: string
}

type ButtonAsButton = CommonProps &
  ButtonHTMLAttributes<HTMLButtonElement> & {
    asClass?: false
  }

type ButtonAsDiv = CommonProps &
  HTMLAttributes<HTMLDivElement> & {
    asClass: true
  }

type ButtonProps = ButtonAsButton | ButtonAsDiv

const Button = ({ children, className = '', asClass = false, variant = 'normal', noHover = false, ...props }: ButtonProps) => {
  const hoverClass = noHover ? '' : 'hover:opacity-90'
  const baseClasses = `focus:outline-none flex items-center gap-2 rounded-xl p-3 ${variants[variant]} ${hoverClass} ${className}`

  if (asClass) {
    return (
      <div className={baseClasses} {...(props as HTMLAttributes<HTMLDivElement>)}>
        {children}
      </div>
    )
  }

  return (
    <button className={baseClasses} {...(props as ButtonHTMLAttributes<HTMLButtonElement>)}>
      {children}
    </button>
  )
}

export default Button
