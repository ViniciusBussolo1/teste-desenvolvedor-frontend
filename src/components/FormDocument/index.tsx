import { ContainerRadio, FormDocumentContainer } from './styles'
import { Input } from '../Input'
import {
  InputRadioIndicator,
  InputRadioItem,
  InputRadioRoot,
} from '../InputRadio/styles'
import { Button } from '../Button'
import { Controller, useForm } from 'react-hook-form'
import z from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { useRemedies } from '../../hooks/useRemedies'
import { DocumentRemedy } from '../../context/RemediesProvider'
import { toast } from 'sonner'

const formDocumentSchema = z.object({
  expedient: z.string().min(1, { message: 'Esse campo não pode ser vazio.' }),
  type: z.enum(['PATIENT', 'PROFESSIONAL']),
  url: z
    .string()
    .url({ message: 'Essa não é uma URL  válida' })
    .min(1, { message: 'Esse campo não pode ser vazio.' }),
})

type FormDocumentSchema = z.infer<typeof formDocumentSchema>

interface FormDocumentProps {
  document?: DocumentRemedy
  closedModal: () => void
}

export function FormDocument({ document, closedModal }: FormDocumentProps) {
  const { addDocument, setDocument } = useRemedies()

  const documentId = document?.id

  const defaulfValueType = document?.type || 'PATIENT'
  const defaulfValueExpedient = document?.expedient || ''
  const defaulfValueUrl = document?.url || ''

  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<FormDocumentSchema>({
    resolver: zodResolver(formDocumentSchema),
    values: {
      expedient: defaulfValueExpedient,
      url: defaulfValueUrl,
      type: defaulfValueType,
    },
  })

  function submitFormDocument({ expedient, type, url }: FormDocumentSchema) {
    if (documentId) {
      const document: DocumentRemedy = {
        expedient,
        type,
        url,
        id: documentId,
      }

      try {
        setDocument(document)
        toast.success('Foi Alterado com sucesso o documento.')
        closedModal()
      } catch (error) {
        toast.error('Erro ao adicionar o documento.')
      }
    } else {
      const document: DocumentRemedy = {
        expedient,
        type,
        url,
        id: Math.random().toString(),
      }

      try {
        addDocument(document)
        toast.success('Foi adicionado com sucesso o documento.')
        closedModal()
      } catch (error) {
        toast.error('Erro ao adicionar o documento.')
      }
    }
  }
  return (
    <FormDocumentContainer onSubmit={handleSubmit(submitFormDocument)}>
      <Input
        placeholder="Digite o número do registro"
        label="Registro:"
        id="expedient"
        htmlFor="expedient"
        error={errors.expedient?.message}
        {...register('expedient')}
      />
      <Input
        placeholder="Digite URL do documento"
        label="URL:"
        id="urlDoc"
        htmlFor="urlDoc"
        error={errors.url?.message}
        {...register('url')}
      />
      <div>
        <label>Escolha o tipo de documento:</label>
        <Controller
          defaultValue={defaulfValueType}
          control={control}
          name="type"
          render={({ field: { name, ref, onChange } }) => (
            <InputRadioRoot
              name={name}
              ref={ref}
              onValueChange={onChange}
              defaultValue={defaulfValueType}
            >
              <ContainerRadio>
                <div>
                  <InputRadioItem value="PROFESSIONAL">
                    <InputRadioIndicator />
                  </InputRadioItem>
                  <label>Profissional</label>
                </div>
                <div>
                  <InputRadioItem value="PATIENT">
                    <InputRadioIndicator />
                  </InputRadioItem>
                  <label>Paciente</label>
                </div>
              </ContainerRadio>
            </InputRadioRoot>
          )}
        />
      </div>
      {document ? (
        <Button type="submit">Alterar Documento</Button>
      ) : (
        <Button variant="success" type="submit">
          Criar Documento
        </Button>
      )}
    </FormDocumentContainer>
  )
}
