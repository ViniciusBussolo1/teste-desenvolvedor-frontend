import {
  HeaderContainer,
  NavContainer,
  NavLinkStyle,
  NavLinkButtonStyle,
} from './styles'
import { Button } from '../Button'
import Logo from '../Logo'

export function Header() {
  return (
    <HeaderContainer>
      <Logo />

      <NavContainer>
        <NavLinkStyle to="/">Home</NavLinkStyle>
        <NavLinkButtonStyle to="/remedy/new">
          <Button variant="success">Adicionar Remedio</Button>
        </NavLinkButtonStyle>
      </NavContainer>
    </HeaderContainer>
  )
}
