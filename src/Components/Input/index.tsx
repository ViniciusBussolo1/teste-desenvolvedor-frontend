import { forwardRef } from "react";
import { InputStyle } from "./styles";

export type InputProps = React.InputHTMLAttributes<HTMLInputElement>

export  const Input = forwardRef<HTMLInputElement, InputProps>((props, ref)=> {
  return <InputStyle {...props} ref={ref} />
})

