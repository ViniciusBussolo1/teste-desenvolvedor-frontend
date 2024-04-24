import { Button } from '../../Components/Button'
import { FormDocument } from '../../Components/FormDocument'
import ModalDialog from '../../Components/ModalDialog'
import { HeaderDocuments, UpdateFormContainer } from './styles'
import { FormPrincipleAtive } from '../../Components/FormPricipleActive'
import ListDocuments from '../../Components/ListDocuments'
import ListPrincipleActives from '../../Components/ListPrincipleActives'
import { useCallback, useEffect } from 'react'
import { useRemedies } from '../../hooks/useRemedies'
import { useParams } from 'react-router-dom'
import { FormRemedy } from '../../Components/FormRemedy'

export interface PrincipleActive {
  id: string
  name: string
}

export interface DocumentRemedy {
  id: string
  expedient: string
  type: 'PROFESSIONAL' | 'PATIENT'
  url: string
}

export function UpdateRemedy() {
  const { id } = useParams()

  const { getRemedyById, remedy } = useRemedies()
  const isEmptyRemedy = Object.values(remedy).length === 0

  function handleSubmitRemedy() {}

  const getRemedy = useCallback(async () => {
    if (id) {
      getRemedyById(id)
    }
  }, [id])

  useEffect(() => {
    getRemedy()
  }, [])

  if (isEmptyRemedy) {
    return <p>loading...</p>
  }
  return (
    <UpdateFormContainer>
      <h2>Adicionar Remedio:</h2>
      <FormRemedy />

      <HeaderDocuments>
        <h2>Documentos:</h2>
        <ModalDialog
          buttonOpenModal={
            <Button variant="success">Adicionar documento </Button>
          }
          ContentModal={<FormDocument />}
        />
      </HeaderDocuments>
      <ListDocuments />

      <h2>Principio Ativos:</h2>
      <FormPrincipleAtive />
      <ListPrincipleActives />

      <Button onClick={handleSubmitRemedy}>Salvar</Button>
    </UpdateFormContainer>
  )
}
