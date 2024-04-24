import { HeaderContainer, NavContainer, LinkStyle } from './styles'
import { Button } from '../Button'

export function Header() {
  return (
    <HeaderContainer>
      <div>Logo</div>

      <NavContainer>
        <LinkStyle to="/">Home</LinkStyle>
        <LinkStyle to="/remedy/new">
          <Button variant="success">Adicionar Remedio</Button>
        </LinkStyle>
      </NavContainer>
    </HeaderContainer>
  )
}
