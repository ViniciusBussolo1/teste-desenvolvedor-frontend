import { useForm } from 'react-hook-form'
import { Button } from '../../Components/Button'
import { FormDocument } from '../../Components/FormDocument'
import { Input } from '../../Components/Input'
import ModalDialog from '../../Components/ModalDialog'
import { FormRemedy, HeaderDocuments, NewRemedyContainer } from './styles'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { FormPrincipleAtive } from '../../Components/FormPricipleActive'
import ListDocuments from '../../Components/ListDocuments'
import ListPrincipleActives from '../../Components/ListPrincipleActives'
import { useState } from 'react'
import EmpytMessage from '../../Components/EmpytMessage'

const formRemedySchema = z.object({
  name: z.string().min(1, { message: 'Esse campo não pode ser vazio.' }),
  company: z.string().min(1, { message: 'Esse campo não pode ser vazio.' }),
})
type FormRemedySchema = z.infer<typeof formRemedySchema>

interface PrincipleActive {
  id: string
  activePrinciple: string
}

interface Document {
  id: string
  expedient: string
  type: 'PROFESSIONAL' | 'PATIENT'
  url: string
}

export function NewRemedy() {
  const [principleActives, setPrincipleActives] = useState<PrincipleActive[]>(
    [],
  )
  const [documents, setDocuments] = useState<Document[]>([])

  const { register: registerRemedy, getValues: getValuesRemedy } =
    useForm<FormRemedySchema>({
      resolver: zodResolver(formRemedySchema),
    })

  function handleSubmitRemedy() {
    const { company, name } = getValuesRemedy()
  }

  return (
    <NewRemedyContainer>
      <h2>Adicionar Remedio:</h2>
      <FormRemedy>
        <Input
          placeholder="Digite o nome do Remedio"
          id="name"
          label="Name:"
          htmlFor="name"
          {...registerRemedy('name')}
        />

        <Input
          placeholder="Digite o nome do Laboratório"
          id="company"
          label="Laboratório:"
          htmlFor="company"
          {...registerRemedy('company')}
        />
      </FormRemedy>
      <HeaderDocuments>
        <h2>Adicionar Documentos</h2>
        <ModalDialog
          buttonOpenModal={
            <Button variant="success">Adicionar documento </Button>
          }
          ContentModal={<FormDocument />}
        />
      </HeaderDocuments>
      {!(documents.length === 0) ? (
        <ListDocuments />
      ) : (
        <EmpytMessage message="Não há documentos adicionados." />
      )}

      <FormPrincipleAtive />
      {!(principleActives.length === 0) ? (
        <ListPrincipleActives />
      ) : (
        <EmpytMessage message="Não há ativos adicionados." />
      )}

      <Button onClick={handleSubmitRemedy}>Adicionar Remédio</Button>
    </NewRemedyContainer>
  )
}
