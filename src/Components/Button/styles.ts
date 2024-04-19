import styled, { css } from 'styled-components'

interface ButtonStyleProps {
  variant: 'primary' | 'secondary'
}

export const ButtonStyle = styled.button<ButtonStyleProps>`
  background-color: ${(props) => props.theme['gray-500']};
  border: 1px solid transparent;
  padding: 0.6rem;
  border-radius: 99999px;
  color: ${(props) => props.theme['gray-100']};

  display: flex;
  align-items: center;
  gap: 0.5rem;

  font-weight: bold;
  transition: 0.2s ease-in-out;

  svg {
    width: 1.2rem;
    height: 1.2rem;
  }

  &:hover {
    background-color: ${(props) => props.theme['gray-600']};
  }

  &:focus {
    border-color: ${(props) => props.theme['gray-100']};
  }

  ${({ variant }) => {
    if (variant === 'secondary') {
      return css`
        background-color: transparent;
        border: 1px solid ${(props) => props.theme['gray-200']};
      `
    }
  }}
`
