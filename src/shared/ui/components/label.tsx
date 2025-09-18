import { LabelHTMLAttributes, forwardRef } from "react"

export const Label = forwardRef<HTMLLabelElement, LabelHTMLAttributes<HTMLLabelElement>>(
  ({ className, ...props }, ref) => (
    <label
      ref={ref}
      className={className}
      {...props}
    />
  )
)

Label.displayName = "Label"