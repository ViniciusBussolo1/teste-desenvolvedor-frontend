import { forwardRef } from 'react'
import { ContainerInput, ErrorMessage, InputStyle } from './styles'

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  error?: string
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ error, ...props }, ref) => {
    return (
      <ContainerInput>
        <InputStyle {...props} ref={ref} />
        {error && <ErrorMessage>{error}</ErrorMessage>}
      </ContainerInput>
    )
  },
)

Input.displayName = 'Input'
