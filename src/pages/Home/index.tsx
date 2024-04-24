import { Button } from '../../components/Button'
import { Input } from '../../components/Input'
import { TableListRemedies } from '../../components/TableListRemedies'
import { ContainerButtons, ContainerInputs, HomeContainer } from './styles'
import { MagnifyingGlass } from 'phosphor-react'
import { z } from 'zod'
import { Controller, useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { Pagination } from '../../components/Pagination'
import { useSearchParams } from 'react-router-dom'
import { useRemedies } from '../../hooks/useRemedies'

import {
  InputRadioIndicator,
  InputRadioItem,
  InputRadioRoot,
} from '../../components/InputRadio/styles'
import { useCallback, useEffect } from 'react'

const searchRemediesSchema = z.object({
  searchText: z.string().min(1, 'Necessário inserir um texto de busca.'),
  typeSearch: z.enum(['name', 'company']),
})

type SearchRemediesSchema = z.infer<typeof searchRemediesSchema>

export function Home() {
  const [searchParams, setSearchParams] = useSearchParams()

  const searchTextParams = searchParams.get('searchText') || ''

  const typeSearchParams = searchParams.get('typeSearch') || ''

  const pageCurrency = searchParams.get('page')
    ? Number(searchParams.get('page'))
    : 1

  const { remedies, totalItems, changeSearchParams } = useRemedies()

  const typeSearchParamsValidate =
    typeSearchParams === 'company' ? 'company' : 'name'

  const {
    register,
    handleSubmit,
    control,
    reset,
    clearErrors,
    formState: { isSubmitting, errors },
  } = useForm<SearchRemediesSchema>({
    resolver: zodResolver(searchRemediesSchema),
    defaultValues: {
      searchText: searchTextParams || '',
      typeSearch: typeSearchParamsValidate,
    },
  })

  function handleSearchRemedios({
    searchText,
    typeSearch,
  }: SearchRemediesSchema) {
    if (typeSearch === 'name') {
      setSearchParams({ typeSearch, searchText, page: '1' })
    } else {
      setSearchParams({ typeSearch, searchText, page: '1' })
    }
  }

  function nextPage() {
    const page = String(Number(pageCurrency) + 1)
    const typeSearch = typeSearchParams
    const searchText = searchTextParams
    setSearchParams({ page, typeSearch, searchText })
  }

  function previousPage() {
    const page = String(Number(pageCurrency) - 1)
    const typeSearch = typeSearchParams
    const searchText = searchTextParams
    setSearchParams({ page, typeSearch, searchText })
  }

  function handleClearForm() {
    reset()
    clearErrors('searchText')

    setSearchParams({ page: '1' })
  }

  const setSearchParamsProvider = useCallback(() => {
    changeSearchParams({
      page: pageCurrency,
      searchText: searchTextParams,
      typeSearch: typeSearchParams,
    })
  }, [pageCurrency, searchTextParams, typeSearchParams])

  useEffect(() => {
    setSearchParamsProvider()
  }, [setSearchParamsProvider])

  if (!remedies) {
    return <p>Loading...</p>
  }

  return (
    <HomeContainer>
      <h1>Listagem de Remédios</h1>
      <form onSubmit={handleSubmit(handleSearchRemedios)}>
        <ContainerInputs>
          <h1>Filtros:</h1>
          <Input
            type="text"
            error={errors.searchText?.message}
            placeholder="Nome do laboratório ou remédio de acordo com a seleção..."
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
        </ContainerInputs>
        <ContainerButtons>
          <Button
            type="submit"
            icon={<MagnifyingGlass size={16} weight="bold" />}
            disabled={isSubmitting}
          >
            Pesquisar
          </Button>
          <Button variant="secondary" onClick={handleClearForm}>
            Limpar
          </Button>
        </ContainerButtons>
      </form>
      <TableListRemedies remedies={remedies} />
      <Pagination
        totalItems={totalItems}
        nextPage={nextPage}
        previousPage={previousPage}
        pageCurrecy={pageCurrency}
      />
    </HomeContainer>
  )
}
