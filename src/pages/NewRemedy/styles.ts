import styled from 'styled-components'

export const NewRemedyContainer = styled.div`
  padding: 2rem 5rem;
  display: flex;

  flex-direction: column;
  gap: 2rem;

  h2 {
    font-size: ${(props) => props.theme.lx};
    color: ${(props) => props.theme['gray-100']};
  }
`

export const HeaderDocuments = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr;
  align-items: baseline;
`
