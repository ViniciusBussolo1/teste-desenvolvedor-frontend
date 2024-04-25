import styled from 'styled-components'

export const CardContainer = styled.div`
  padding: 0.5rem;
  display: flex;
  flex-direction: Column;
  gap: 1rem;
  border: 1px solid ${(props) => props.theme['gray-200']};
  border-radius: 8px;

  p {
    font-size: ${(props) => props.theme.sm};
    color: ${(props) => props.theme['gray-100']};
  }
  strong {
    font-weight: bold;
  }
`
