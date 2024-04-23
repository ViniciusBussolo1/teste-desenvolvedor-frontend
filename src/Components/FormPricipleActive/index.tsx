import { FormPrincipleAtiveStyle } from './styles'
import { Input } from '../Input'
import { Button } from '../Button'
import { z } from 'zod'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { PrincipleActive } from '../../pages/NewRemedy'

const formPrincipleAtiveSchema = z.object({
  activePrinciple: z
    .string()
    .min(1, { message: 'Esse campo não pode ser vazio.' }),
})

type FormPrincipleAtiveSchema = z.infer<typeof formPrincipleAtiveSchema>

interface FormPrincipleAtiveProps {
  addPrincipleActive: (principleActive: PrincipleActive) => void
}

export function FormPrincipleAtive({
  addPrincipleActive,
}: FormPrincipleAtiveProps) {
  const {
    register: registerPrincipleActive,
    handleSubmit: handleSubmitPrincipleActive,
    formState: { errors: errosPrincipleActive },
  } = useForm<FormPrincipleAtiveSchema>({
    resolver: zodResolver(formPrincipleAtiveSchema),
  })

  function submitPrincipleActive({
    activePrinciple,
  }: FormPrincipleAtiveSchema) {
    addPrincipleActive({
      id: Math.random().toString(),
      activePrinciple,
    })
  }
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
