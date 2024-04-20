import styled from 'styled-components'

export const Table = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  border: 1px solid ${(props) => props.theme['gray-400']};
  border-radius: 8px;

  div:first-child {
    border-radius: 8px 8px 0 0;
  }
  div:last-child {
    border-radius: 0 0 8px 8px;
    border: none;
  }
`
export const Line = styled.div`
  width: 100%;
  display: flex;
  border-bottom: 1px solid ${(props) => props.theme['gray-400']};
  padding: 0.5rem;

  &:hover {
    background-color: ${(props) => props.theme['gray-700']};
  }
`
export const CelHeader = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-weight: bold;
  margin-left: 0.5rem;
`
export const CelContent = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: ${(props) => props.theme['gray-100']};
`
