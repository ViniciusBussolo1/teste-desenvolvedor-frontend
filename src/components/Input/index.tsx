import { forwardRef } from 'react'
import { ContainerInput, ErrorMessage, InputStyle } from './styles'

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  error?: string
  label?: string
  htmlFor?: string
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ error, label, htmlFor, ...props }, ref) => {
    return (
      <ContainerInput>
        {label ? <label htmlFor={htmlFor}>{label}</label> : null}
        <InputStyle {...props} ref={ref} />
        {error && <ErrorMessage>{error}</ErrorMessage>}
      </ContainerInput>
    )
  },
)

Input.displayName = 'Input'
