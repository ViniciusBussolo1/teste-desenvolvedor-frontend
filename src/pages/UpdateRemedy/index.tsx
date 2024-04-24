import { Button } from '../../components/Button'
import { FormDocument } from '../../components/FormDocument'
import ModalDialog from '../../components/ModalDialog'
import { HeaderDocuments, UpdateFormContainer } from './styles'
import { FormPrincipleAtive } from '../../components/FormPricipleActive'
import ListDocuments from '../../components/ListDocuments'
import ListPrincipleActives from '../../components/ListPrincipleActives'
import { useCallback, useEffect } from 'react'
import { useRemedies } from '../../hooks/useRemedies'
import { Link, useParams } from 'react-router-dom'
import { FormRemedy } from '../../components/FormRemedy'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { toast } from 'sonner'

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

const formRemedySchema = z.object({
  name: z.string().min(1, { message: 'Esse campo não pode ser vazio.' }),
  company: z.string().min(1, { message: 'Esse campo não pode ser vazio.' }),
})
export type FormRemedySchema = z.infer<typeof formRemedySchema>

export function UpdateRemedy() {
  const { id } = useParams()

  const { getRemedyById, remedy, updateRemedyProvider } = useRemedies()
  const isEmptyRemedy = Object.values(remedy).length === 0

  const defaultValueRemedyName = remedy.name || ''
  const defaultValueRemedyCompany = remedy.company || ''

  const { register: registerRemedy, getValues } = useForm<FormRemedySchema>({
    resolver: zodResolver(formRemedySchema),
    defaultValues: {
      name: defaultValueRemedyName,
      company: defaultValueRemedyCompany,
    },
  })

  function handleSubmitUpdateRemedy() {
    const { name, company } = getValues()
    const remedyRequest = {
      ...remedy,
      name: name.toUpperCase(),
      company: company.toUpperCase(),
      principleActives: remedy.principleActives,
      documents: remedy.documents,
    }
    try {
      updateRemedyProvider(remedy.id, remedyRequest)
      toast.success('Remedio atualizado com sucesso', {
        action: (
          <Link to="/">
            <Button variant="toast">Voltar a lista</Button>
          </Link>
        ),
      })
    } catch (error) {}
  }

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
      <h2>Adicionar Remédio:</h2>
      <FormRemedy registerRemedy={registerRemedy} />

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

      <Button onClick={handleSubmitUpdateRemedy}>Salvar</Button>
    </UpdateFormContainer>
  )
}
