import { FormPrincipleAtiveStyle } from './styles'
import { Input } from '../Input'
import { Button } from '../Button'
import { z } from 'zod'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'

const formPrincipleAtiveSchema = z.object({
  activePrinciple: z
    .string()
    .min(1, { message: 'Esse campo não pode ser vazio.' }),
})

type FormPrincipleAtiveSchema = z.infer<typeof formPrincipleAtiveSchema>

export function FormPrincipleAtive() {
  function submitPrincipleActive({
    activePrinciple,
  }: FormPrincipleAtiveSchema) {
    console.log('🚀 ~ NewRemedy ~ active_principle:', activePrinciple)
  }
  const {
    register: registerPrincipleActive,
    handleSubmit: handleSubmitPrincipleActive,
    formState: { errors: errosPrincipleActive },
  } = useForm<FormPrincipleAtiveSchema>({
    resolver: zodResolver(formPrincipleAtiveSchema),
  })
  return (
    <>
      <h2>Adicionar Principio Ativo:</h2>
      <FormPrincipleAtiveStyle
        onSubmit={handleSubmitPrincipleActive(submitPrincipleActive)}
      >
        <Input
          placeholder="Digite o nome do Principio Ativo"
          id="activePrinciple"
          label="Principio ativo:"
          htmlFor="activePrinciple"
          error={errosPrincipleActive.activePrinciple?.message}
          {...registerPrincipleActive('activePrinciple')}
        />
        <Button type="submit">Adicionar principio ativo</Button>
      </FormPrincipleAtiveStyle>
    </>
  )
}
