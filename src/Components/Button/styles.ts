import styled, { css } from 'styled-components'

interface ButtonStyleProps {
  variant: 'primary' | 'secondary' | 'icon'
}

export const ButtonStyle = styled.button<ButtonStyleProps>`
  background-color: ${(props) => props.theme['gray-500']};
  border: 1px solid transparent;
  padding: 0.6rem;
  border-radius: 99999px;
  color: ${(props) => props.theme['gray-100']};
  cursor: pointer;

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

  ${({ variant }) => {
    if (variant === 'icon') {
      return css`
        width: 2.1rem;
        border-radius: 99999px;
        border: 1px solid ${(props) => props.theme['gray-400']};
        background-color: transparent;
        padding: 0.4rem;
        display: flex;
        align-items: center;
        justify-content: center;

        svg {
          color: ${(props) => props.theme['gray-100']};
        }

        &:not(:disabled):hover {
          background-color: ${(props) => props.theme['gray-600']};
        }

        &:disabled {
          background-color: ${(props) => props.theme['gray-800']};
          cursor: not-allowed;
          svg {
            color: ${(props) => props.theme['gray-200']};
          }
        }
      `
    }
  }}
`
