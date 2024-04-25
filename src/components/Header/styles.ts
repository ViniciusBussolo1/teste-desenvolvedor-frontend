import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { devices } from '../../styles/theme/devices'

export const HeaderContainer = styled.header`
  left: 0;
  width: 100%;
  padding: 1.5rem 5rem;
  border-bottom: 0.5px solid ${(props) => props.theme['gray-300']};
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media ${devices.mobile} {
    padding: 1rem;
  }
`
export const NavContainer = styled.nav`
  display: flex;
  align-items: center;
  gap: 1rem;
`

export const LinkStyle = styled(Link)`
  color: ${(props) => props.theme['gray-200']};
  transition: 0.3s ease-out;

  &:hover {
    color: ${(props) => props.theme['gray-100']};
  }
`
