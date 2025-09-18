import type { ComponentPropsWithoutRef, FC, ReactNode } from 'react'

type ButtonProps = {
  children?: ReactNode | ReactNode[]
  asClass?: boolean
} & ComponentPropsWithoutRef<'button'> &
  ComponentPropsWithoutRef<'div'>

const Button: FC<ButtonProps> = ({ children, className = '', asClass = false, ...props }) => {
  const baseClasses = `flex items-center gap-2 rounded-xl p-3 ${className}`

  if (asClass)
    return (
      <div className={baseClasses} {...props}>
        {children}
      </div>
    )

  return (
    <button className={baseClasses} {...props}>
      {children}
    </button>
  )
}

export default Button
