import styled from 'styled-components'
import { devices } from '../../styles/theme/devices'

export const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;

  svg {
    width: 2.5rem;
    height: 2.5rem;
  }

  p {
    font-size: 1.5rem;
    font-weight: bold;
  }

  @media ${devices.mobile} {
    svg {
      width: 2rem;
      height: 2rem;
    }

    p {
      font-size: 1.5rem;
      font-weight: bold;
    }
  }
`
