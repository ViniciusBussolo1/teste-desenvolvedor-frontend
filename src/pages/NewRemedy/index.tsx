import { useForm } from 'react-hook-form'
import { Button } from '../../components/Button'
import { FormDocument } from '../../components/FormDocument'
import ModalDialog from '../../components/ModalDialog'
import { HeaderDocuments, NewRemedyContainer } from './styles'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { FormPrincipleAtive } from '../../components/FormPricipleActive'
import ListDocuments from '../../components/ListDocuments'
import ListPrincipleActives from '../../components/ListPrincipleActives'
import { useRemedies } from '../../hooks/useRemedies'
import { toast } from 'sonner'
import { Link } from 'react-router-dom'
import { FormRemedy } from '../../components/FormRemedy'
import { useEffect, useState } from 'react'
import { Plus } from 'phosphor-react'

const formRemedySchema = z.object({
  name: z.string().min(1, { message: 'Esse campo não pode ser vazio.' }),
  company: z.string().min(1, { message: 'Esse campo não pode ser vazio.' }),
})
type FormRemedySchema = z.infer<typeof formRemedySchema>

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

export function NewRemedy() {
  const [isOpenModal, setIsOpenModal] = useState<boolean>(false)
  const { addRemedy, remedy, clearRemedy } = useRemedies()

  const { register: registerRemedy, getValues: getValuesRemedy } =
    useForm<FormRemedySchema>({
      resolver: zodResolver(formRemedySchema),
    })

  function handleSubmitRemedy() {
    const { company, name } = getValuesRemedy()

    const RemedyRequest = {
      id: Math.random().toString(),
      published_at: new Date().toISOString(),
      company: company.toUpperCase(),
      name: name.toUpperCase(),
      principleActives: remedy.principleActives,
      documents: remedy.documents,
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

  function closedModal() {
    setIsOpenModal(false)
  }

  useEffect(() => {
    clearRemedy()
  }, [])

  if (Object.values(remedy).length === 0) {
    return <p>Carregando...</p>
  }

  return (
    <NewRemedyContainer>
      <h2>Adicionar Remedio:</h2>
      <FormRemedy registerRemedy={registerRemedy} />
      <HeaderDocuments>
        <h2>Adicionar Documentos</h2>
        <ModalDialog
          openModal={isOpenModal}
          onOpenChangeModal={setIsOpenModal}
          buttonOpenModal={
            <Button variant="success">
              <Plus weight="bold" />
              Adicionar documento
            </Button>
          }
          ContentModal={<FormDocument closedModal={closedModal} />}
        />
      </HeaderDocuments>

      <ListDocuments />

      <h2>Adicionar Principio Ativo:</h2>
      <FormPrincipleAtive />

      <ListPrincipleActives />

      <Button onClick={handleSubmitRemedy} variant="success">
        Salvar
      </Button>
    </NewRemedyContainer>
  )
}
