import { Button } from '../../Components/Button'
import { Input } from '../../Components/Input'
import { Table } from '../../Components/Table'
import { HomeContainer } from './styles'
import { MagnifyingGlass } from 'phosphor-react'
import { z } from 'zod'
import { Controller, useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { Pagination } from '../../Components/pagination'
import { useSearchParams } from 'react-router-dom'
import { useRemedies } from '../../hooks/useRemedies'

import {
  InputRadioIndicator,
  InputRadioItem,
  InputRadioRoot,
} from '../../Components/InputRadio/styles'
import { useEffect } from 'react'

const searchRemediesSchema = z.object({
  searchText: z.string().min(1),
  typeSearch: z.enum(['name', 'company']),
})

type SearchRemediesSchema = z.infer<typeof searchRemediesSchema>

export function Home() {
  const [searchParams, setSearchParams] = useSearchParams()

  const searchTextParams = searchParams.get('searchText') || ''

  const typeSearchParams = searchParams.get('typeSearch') || ''

  const pageCurrency = searchParams.get('page') ? searchParams.get('page') : 1

  const {
    remedies,
    totalItems,
    changePageCurrency,
    changeTextSearch,
    changeTypeSearch,
  } = useRemedies()

  const typeSearchParamsValidate =
    typeSearchParams === 'company' ? 'company' : 'name'

  const {
    register,
    handleSubmit,
    control,
    formState: { isSubmitting },
  } = useForm<SearchRemediesSchema>({
    resolver: zodResolver(searchRemediesSchema),
    values: {
      searchText: searchTextParams || '',
      typeSearch: typeSearchParamsValidate,
    },
  })

  async function handleSearchRemedios({
    searchText,
    typeSearch,
  }: SearchRemediesSchema) {
    if (typeSearch === 'name') {
      setSearchParams({ typeSearch, searchText, page: '1' })
    } else {
      setSearchParams({ typeSearch, searchText, page: '1' })
    }
  }

  useEffect(() => {
    changeTypeSearch(typeSearchParams)
    changeTextSearch(searchTextParams)
    changePageCurrency(Number(pageCurrency))
  }, [
    searchTextParams,
    typeSearchParams,
    pageCurrency,
    changePageCurrency,
    changeTypeSearch,
    changeTextSearch,
  ])

  if (!remedies) {
    return <p>Loading...</p>
  }

  return (
    <HomeContainer>
      <h1>Listagem de Remédios</h1>
      <form onSubmit={handleSubmit(handleSearchRemedios)}>
        <Input
          type="text"
          placeholder="Digite o nome do remedio..."
          {...register('searchText')}
        />

        <Controller
          name="typeSearch"
          control={control}
          render={({ field: { name, onChange, ref } }) => (
            <InputRadioRoot
              name={name}
              onValueChange={onChange}
              ref={ref}
              defaultValue="name"
            >
              <div>
                <InputRadioItem value="name">
                  <InputRadioIndicator />
                </InputRadioItem>
                <label>Name</label>
              </div>
              <div>
                <InputRadioItem value="company">
                  <InputRadioIndicator />
                </InputRadioItem>
                <label>Laboratório</label>
              </div>
            </InputRadioRoot>
          )}
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
      <Pagination totalItems={totalItems} pageCurrency={pageCurrency} />
    </HomeContainer>
  )
}
