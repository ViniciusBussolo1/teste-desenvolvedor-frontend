import styled from 'styled-components'

export const ButtonStyle = styled.button`
  background-color: ${(props) => props.theme['gray-500']};
  border: 1px solid transparent;
  padding: 1rem;
  border-radius: 122px;
  color: ${(props) => props.theme['gray-100']};

  display: flex;
  align-items: center;
  gap: 0.5rem;

  font-weight: bold;
  transition: 0.2s ease-in-out;

  svg {
    width: 1.5rem;
    height: 1.5rem;
  }

  &:hover {
    background-color: ${(props) => props.theme['gray-600']};
  }

  &:focus {
    border-color: ${(props) => props.theme['gray-100']};
  }
`
