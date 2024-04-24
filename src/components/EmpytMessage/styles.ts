import styled from 'styled-components'

export const Message = styled.p`
  width: 100%;
  color: ${(props) => props.theme['gray-100']};
  font-size: ${(props) => props.theme.lg};
  text-align: center;
  margin-top: 1rem;
`
