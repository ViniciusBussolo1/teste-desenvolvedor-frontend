import styled from 'styled-components'

export const PaginationContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding: 1rem;
  span {
    font-size: ${(props) => props.theme.sm};
  }

  div {
    display: flex;
    align-items: center;
    gap: 1rem;
    p {
      color: ${(props) => props.theme['gray-100']};
    }
  }
`

export const ButtonsContainer = styled.div`
  display: flex;
  justify-content: space-between;
`
export const ButtonPagination = styled.button`
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
