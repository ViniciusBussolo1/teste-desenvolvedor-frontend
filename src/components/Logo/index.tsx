import React from 'react'
import { LogoContainer } from './styles'
import { Notepad } from 'phosphor-react'

export default function Logo() {
  return (
    <LogoContainer>
      <Notepad />
      <p>Bulário</p>
    </LogoContainer>
  )
}
