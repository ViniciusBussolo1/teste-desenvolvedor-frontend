import styled from 'styled-components'

export const RemedyViewContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 1rem;

  h2 {
    font-size: ${(props) => props.theme.lg};
    color: ${(props) => props.theme['gray-100']};
  }
`
