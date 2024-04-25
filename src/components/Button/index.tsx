import { ButtonHTMLAttributes, ReactNode, forwardRef } from 'react'
import { ButtonStyle } from './styles'
interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  icon?: ReactNode
  variant?: 'primary' | 'secondary' | 'icon' | 'success' | 'toast'
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ icon, variant = 'primary', ...props }, ref) => {
    return (
      <ButtonStyle {...props} ref={ref} variant={variant}>
        {icon || null}
        {props.children}
      </ButtonStyle>
    )
  },
)

Button.displayName = 'Button'
