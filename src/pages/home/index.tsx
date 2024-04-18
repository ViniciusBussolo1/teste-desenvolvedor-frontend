import { useEffect, useState } from 'react'
import { Button } from '../../Components/Button'
import { Input } from '../../Components/Input'
import { Table } from '../../Components/Table'
import { HomeContainer } from './styles'
import { MagnifyingGlass } from 'phosphor-react'
import { api } from '../../lib/axios'
import { z } from 'zod'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'

const searchRemediesSchema = z.object({
  name: z.string().nullable(),
  laboratory: z.string().nullable(),
})

type SearchRemediesSchema = z.infer<typeof searchRemediesSchema>

export interface Remedy {
  id: string
  name: string
  published_at: string
  company: string
  documents: {
    id: string
    expedient: string
    type: string
    url: string
  }[]
}

export default function Home() {
  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm<SearchRemediesSchema>({
    resolver: zodResolver(searchRemediesSchema),
    values: {
      name: '',
      laboratory: '',
    },
  })
  const [remedies, setRemedies] = useState<Remedy[]>([])

  async function getListOfRemedies() {
    const remediesResponse = await api.get('/data', {
      params: {
        _sort: 'published_at',
        _order: 'desc',
      },
    })
    const remediesData = remediesResponse.data
    setRemedies(remediesData)
  }

  async function handleSearchRemedios({
    laboratory,
    name,
  }: SearchRemediesSchema) {
    if (name) {
      const remediesResponse = await api.get('/data', {
        params: {
          name_like: name.toUpperCase(),
          _sort: 'published_at',
          _order: 'desc',
        },
      })
      const remediesData = remediesResponse.data
      setRemedies(remediesData)
    }

    if (laboratory) {
      const remediesResponse = await api.get('/data', {
        params: {
          company_like: laboratory.toUpperCase(),
          _sort: 'published_at',
          _order: 'desc',
        },
      })

      const remediesData = remediesResponse.data
      setRemedies(remediesData)
    }
  }

  useEffect(() => {
    getListOfRemedies()
  }, [])
  return (
    <HomeContainer>
      <h1>Listagem de Remedios</h1>
      <form onSubmit={handleSubmit(handleSearchRemedios)}>
        <Input
          type="text"
          placeholder="Digite o nome do remedio..."
          {...register('name')}
        />
        <Input
          type="text"
          placeholder="Digite o nome do laboratório farmacêutico..."
          {...register('laboratory')}
        />
        <Button
          type="submit"
          icon={<MagnifyingGlass size={16} weight="bold" />}
          disabled={isSubmitting}
        >
          Pesquisar
        </Button>
      </form>
      <Table remedies={remedies} />
    </HomeContainer>
  )
}
