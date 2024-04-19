import styled from 'styled-components'

export const InputStyle = styled.input`
  width: 100%;
  background-color: transparent;
  border: 2px solid ${(props) => props.theme['gray-600']};
  border-radius: 8px;
  color: ${(props) => props.theme['gray-100']};
  padding: 0.625rem 0.5rem;
  outline: 0;
  transition: 0.3s ease-in-out;

  &:focus {
    border-color: ${(props) => props.theme['gray-200']};
  }

  &::placeholder {
    font-size: 0.75rem;
    color: ${(props) => props.theme['gray-200']};
  }
`

export const ContainerInput = styled.div`
  width: 100%;
  display: flex;
  gap: 0.5rem;
  flex-direction: column;
`
export const ErrorMessage = styled.p`
  font-size: ${(props) => props.theme.sm};
  color: ${(props) => props.theme['red-400']};
`
