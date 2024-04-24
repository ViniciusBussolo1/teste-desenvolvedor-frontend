import React, { createContext, useCallback, useEffect, useState } from 'react'
import { getListOfRemedies } from '../http/getListOfRemedies'
import { getListOfRemediesByName } from '../http/getListOfRemediesByName'
import { getListOfRemediesByCompany } from '../http/getListOfRemediesByCompany'
import { getRemedy } from '../http/getRemedy'
import { createRemedy } from '../http/createRemedies'

export interface Remedy {
  id: string
  name: string
  published_at: string
  company: string
  documents: {
    id: string
    expedient: string
    type: 'PROFESSIONAL' | 'PATIENT'
    url: string
  }[]
  principleActives: {
    id: string
    name: string
  }[]
}

interface SearchParams {
  page: number
  typeSearch: string
  searchText: string
}

interface RemediesContextProps {
  remedies: Remedy[] | never[]
  totalItems: number
  changeSearchParams: (params: SearchParams) => void

  getRemedyById: (remedyId: string) => Promise<Remedy>
  addRemedy: (remedyRequest: Remedy) => void
}

interface RemediesProviderProps {
  children: React.ReactNode
}

export const RemediesContext = createContext({} as RemediesContextProps)

export function RemediesProvider({ children }: RemediesProviderProps) {
  const [remedies, setRemedies] = useState<Remedy | never[]>([])
  const [totalItems, setTotalItems] = useState<number>(1)

  const [seachParamsProvider, setSeachParamsProvider] = useState<SearchParams>(
    {} as SearchParams,
  )

  async function getRemedyById(remedyId: string): Promise<Remedy> {
    const remedy = await getRemedy(remedyId)
    return remedy
  }

  async function getListAll(page: number) {
    const { remediesData, totalItens } = await getListOfRemedies(page)

    setTotalItems(totalItens)
    setRemedies(remediesData)
  }

  async function getListByName(name: string, page: number) {
    const { remediesData, totalItens } = await getListOfRemediesByName(
      name,
      page,
    )
    setTotalItems(totalItens)
    setRemedies(remediesData)
  }
  async function getListByCompany(company: string, page: number) {
    const { remediesData, totalItens } = await getListOfRemediesByCompany(
      company,
      page,
    )
    setTotalItems(totalItens)
    setRemedies(remediesData)
  }

  async function addRemedy(remedyRequestData: Remedy) {
    createRemedy(remedyRequestData)
  }

  function changeSearchParams({ page, searchText, typeSearch }: SearchParams) {
    setSeachParamsProvider({ page, searchText, typeSearch })
  }

  const getListByParams = useCallback(() => {
    if (seachParamsProvider.typeSearch === 'company') {
      getListByCompany(seachParamsProvider.searchText, seachParamsProvider.page)
    } else if (seachParamsProvider.typeSearch === 'name') {
      getListByName(seachParamsProvider.searchText, seachParamsProvider.page)
    } else if (!seachParamsProvider.searchText) {
      getListAll(seachParamsProvider.page)
    }
  }, [seachParamsProvider])

  useEffect(() => {
    getListByParams()
  }, [getListByParams])

  return (
    <RemediesContext.Provider
      value={{
        remedies: remedies as Remedy[],
        totalItems,
        changeSearchParams,
        getRemedyById,
        addRemedy,
      }}
    >
      {children}
    </RemediesContext.Provider>
  )
}
