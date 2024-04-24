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
