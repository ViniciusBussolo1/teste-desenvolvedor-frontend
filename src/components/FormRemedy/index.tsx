import { Input } from '../Input'
import { FormRemedyContainer } from './styles'
import { UseFormRegister } from 'react-hook-form'
import { FormRemedySchema } from '../../pages/UpdateRemedy'

interface FormRemedyProps {
  registerRemedy: UseFormRegister<FormRemedySchema>
}

export function FormRemedy({ registerRemedy }: FormRemedyProps) {
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
