import styled from 'styled-components'
import { devices } from '../../styles/theme/devices'

export const FormPrincipleAtiveStyle = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: start;
  gap: 1.5rem;
  button {
    width: 30%;
  }
  @media ${devices.mobile} {
    button {
      width: 70%;
    }
  }
`
