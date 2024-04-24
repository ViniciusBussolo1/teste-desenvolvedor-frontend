import React from 'react'
import { Input } from '../Input'
import { FormRemedyContainer } from './styles'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { useRemedies } from '../../hooks/useRemedies'

const formRemedySchema = z.object({
  name: z.string().min(1, { message: 'Esse campo não pode ser vazio.' }),
  company: z.string().min(1, { message: 'Esse campo não pode ser vazio.' }),
})
type FormRemedySchema = z.infer<typeof formRemedySchema>

export function FormRemedy() {
  const { remedy } = useRemedies()

  const defaultValueRemedyName = remedy.name || ''
  const defaultValueRemedyCompany = remedy.company || ''

  const { register: registerRemedy } = useForm<FormRemedySchema>({
    resolver: zodResolver(formRemedySchema),
    defaultValues: {
      name: defaultValueRemedyName,
      company: defaultValueRemedyCompany,
    },
  })

  return (
    <FormRemedyContainer>
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
    </FormRemedyContainer>
  )
}
