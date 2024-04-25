import styled from 'styled-components'

export const CardContainer = styled.div`
  width: 100%;
  margin-top: 2rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`
export const CardItem = styled.div`
  padding: 1rem;
  border: 1px solid ${(props) => props.theme['gray-100']};
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`
export const CardInfo = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`
export const ContainerButtons = styled.div`
  display: flex;
  gap: 1rem;
  align-items: center;
  justify-content: space-between;
`
