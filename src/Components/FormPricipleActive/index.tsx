import { FormPrincipleAtiveStyle } from './styles'
import { Input } from '../Input'
import { Button } from '../Button'
import { z } from 'zod'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'

const formPrincipleAtiveSchema = z.object({
  name: z.string().min(1, { message: 'Esse campo não pode ser vazio.' }),
})

type FormPrincipleAtiveSchema = z.infer<typeof formPrincipleAtiveSchema>

export function FormPrincipleAtive() {
  const {
    register: registerPrincipleActive,
    handleSubmit: handleSubmitPrincipleActive,
    formState: { errors: errosPrincipleActive },
  } = useForm<FormPrincipleAtiveSchema>({
    resolver: zodResolver(formPrincipleAtiveSchema),
  })

  function submitPrincipleActive({ name }: FormPrincipleAtiveSchema) {
    console.log('🚀 ~ submitPrincipleActive ~ name:', name)
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
      <Button type="submit">Adicionar principio ativo</Button>
    </FormPrincipleAtiveStyle>
  )
}
