import { FormPrincipleAtiveStyle } from './styles'
import { Input } from '../Input'
import { Button } from '../Button'
import { z } from 'zod'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { useRemedies } from '../../hooks/useRemedies'
import { Plus } from 'phosphor-react'

const formPrincipleAtiveSchema = z.object({
  name: z.string().min(1, { message: 'Esse campo não pode ser vazio.' }),
})

type FormPrincipleAtiveSchema = z.infer<typeof formPrincipleAtiveSchema>

export function FormPrincipleAtive() {
  const { addPrincipleActive } = useRemedies()
  const {
    register: registerPrincipleActive,
    handleSubmit: handleSubmitPrincipleActive,
    formState: { errors: errosPrincipleActive },
  } = useForm<FormPrincipleAtiveSchema>({
    resolver: zodResolver(formPrincipleAtiveSchema),
  })

  function submitPrincipleActive({ name }: FormPrincipleAtiveSchema) {
    const principleActive = {
      id: Math.random().toString(),
      name,
    }
    addPrincipleActive(principleActive)
  }
  return (
    <FormPrincipleAtiveStyle
      onSubmit={handleSubmitPrincipleActive(submitPrincipleActive)}
    >
      <Input
        placeholder="Digite o nome do Principio Ativo"
        id="activePrinciple"
        label="Principio ativo:"
        htmlFor="activePrinciple"
        error={errosPrincipleActive.name?.message}
        {...registerPrincipleActive('name')}
      />
      <Button type="submit" variant="success">
        <Plus weight="bold" />
        Adicionar principio ativo
      </Button>
    </FormPrincipleAtiveStyle>
  )
}
