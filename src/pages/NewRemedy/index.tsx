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
import { useRemedies } from '../../hooks/useRemedies'
import { toast } from 'sonner'
import { Link } from 'react-router-dom'

const formRemedySchema = z.object({
  name: z.string().min(1, { message: 'Esse campo não pode ser vazio.' }),
  company: z.string().min(1, { message: 'Esse campo não pode ser vazio.' }),
})
type FormRemedySchema = z.infer<typeof formRemedySchema>

export interface PrincipleActive {
  id: string
  activePrinciple: string
}

export interface DocumentRemedy {
  id: string
  expedient: string
  type: 'PROFESSIONAL' | 'PATIENT'
  url: string
}

export function NewRemedy() {
  const [principleActives, setPrincipleActives] = useState<PrincipleActive[]>(
    [],
  )
  const [documents, setDocuments] = useState<DocumentRemedy[]>([])

  const { addRemedy } = useRemedies()

  const { register: registerRemedy, getValues: getValuesRemedy } =
    useForm<FormRemedySchema>({
      resolver: zodResolver(formRemedySchema),
    })

  function addDocument(document: DocumentRemedy) {
    setDocuments((prevDocuments) => [...prevDocuments, document])
  }

  function addPrincipleActive(principleActive: PrincipleActive) {
    setPrincipleActives((prevPrincipleActive) => [
      ...prevPrincipleActive,
      principleActive,
    ])
  }

  function handleSubmitRemedy() {
    const { company, name } = getValuesRemedy()

    const RemedyRequest = {
      id: Math.random().toString(),
      published_at: new Date().toISOString(),
      company: company.toUpperCase(),
      name: name.toUpperCase(),
      principleActives,
      documents,
    }
    try {
      addRemedy(RemedyRequest)
      toast.success('Remédio adicionado com Sucesso.', {
        action: (
          <Link to="/">
            <Button variant="toast">Voltar a lista</Button>
          </Link>
        ),
      })
    } catch {
      toast.error('Erro ao adicionar o Remédio.')
    }
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
          ContentModal={<FormDocument addDocument={addDocument} />}
        />
      </HeaderDocuments>

      {!(documents.length === 0) ? (
        <ListDocuments documents={documents} />
      ) : (
        <EmpytMessage message="Não há documentos adicionados." />
      )}

      <FormPrincipleAtive addPrincipleActive={addPrincipleActive} />

      {!(principleActives.length === 0) ? (
        <ListPrincipleActives principleActives={principleActives} />
      ) : (
        <EmpytMessage message="Não há ativos adicionados." />
      )}

      <Button onClick={handleSubmitRemedy}>Salvar</Button>
    </NewRemedyContainer>
  )
}
