import styled from 'styled-components'

export const HomeContainer = styled.main`
  padding: 2rem 5rem;

  form {
    margin-top: 2rem;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    justify-content: center;
  }
`

export const ContainerButtons = styled.div`
  display: flex;
  gap: 1rem;
`
export const ContainerInputs = styled.div`
  width: 100%;
  display: flex;
  gap: 2rem;
  align-items: baseline;
  justify-content: start;
  h1 {
    font-size: ${(props) => props.theme.md};
    color: ${(props) => props.theme['gray-100']};
  }
`
