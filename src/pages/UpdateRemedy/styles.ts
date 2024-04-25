import styled from 'styled-components'
import { devices } from '../../styles/theme/devices'

export const UpdateFormContainer = styled.div`
  padding: 2rem 5rem;
  display: flex;

  flex-direction: column;
  gap: 2rem;

  h2 {
    font-size: ${(props) => props.theme.lx};
    color: ${(props) => props.theme['gray-100']};
  }

  @media ${devices.mobile} {
    padding: 2rem 1rem;
  }
`

export const HeaderDocuments = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr;
  align-items: baseline;

  @media ${devices.mobile} {
    grid-template-columns: 1fr;
    gap: 1rem;

    h2 {
      font-size: ${(props) => props.theme.lg};
    }
  }
`
