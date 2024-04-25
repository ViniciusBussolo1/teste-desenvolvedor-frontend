import React from 'react'
import { Message } from './styles'

interface EmpytMessageProps {
  message: string
}

export default function EmpytMessage({ message }: EmpytMessageProps) {
  return <Message>{message}</Message>
}
