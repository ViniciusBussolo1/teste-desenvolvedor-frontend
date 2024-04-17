import { ButtonHTMLAttributes, ReactNode, forwardRef } from "react"
import { ButtonStyle } from "./styles"
interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  icon?: ReactNode
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(({icon, ...props} , ref) =>  {
  return <ButtonStyle {...props} ref={ref} >
    {icon ? icon : null}
    {props.children}
  </ButtonStyle>
})