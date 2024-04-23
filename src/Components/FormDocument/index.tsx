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

const formDocumentSchema = z.object({
  expedient: z.string().min(1, { message: 'Esse campo não pode ser vazio.' }),
  type: z.enum(['PATIENT', 'PROFESSIONAL']),
  url: z
    .string()
    .url({ message: 'Essa não é uma URL  válida' })
    .min(1, { message: 'Esse campo não pode ser vazio.' }),
})

type FormDocumentSchema = z.infer<typeof formDocumentSchema>

export function FormDocument() {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<FormDocumentSchema>({
    resolver: zodResolver(formDocumentSchema),
    defaultValues: {
      expedient: '132456',
      type: 'PATIENT',
      url: 'www.google.com',
    },
  })

  function SubmitFormDocument(data: FormDocumentSchema) {
    console.log(data)
  }
  return (
    <FormDocumentContainer onSubmit={handleSubmit(SubmitFormDocument)}>
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
          control={control}
          name="type"
          render={({ field: { name, ref, onChange } }) => (
            <InputRadioRoot
              name={name}
              ref={ref}
              onValueChange={onChange}
              defaultValue="PATIENT"
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
      <Button type="submit">Criar Documento</Button>
    </FormDocumentContainer>
  )
}
