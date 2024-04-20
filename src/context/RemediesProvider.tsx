import React, { createContext, useCallback, useEffect, useState } from 'react'
import { getListOfRemedies } from '../http/getListOfRemedies'
import { getListOfRemediesByName } from '../http/getListOfRemediesByName'
import { getListOfRemediesByLaboratory } from '../http/getListOfRemediesByLaboratory'
import { getRemedy } from '../http/getRemedy'

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
}

interface RemediesContextProps {
  remedies: Remedy[]
  totalItems: number
  changePageCurrency: (page: number) => void
  changeTextSearch: (textSearch: string) => void
  changeTypeSearch: (typeSearch: string) => void
  getRemedyById: (remedyId: string) => Promise<Remedy>
}

interface IRemediesProviderProps {
  children: React.ReactNode
}

export const RemediesContext = createContext({} as RemediesContextProps)

export function RemediesProvider({ children }: IRemediesProviderProps) {
  const [remedies, setRemedies] = useState<Remedy>([])
  const [totalItems, setTotalItems] = useState<number>(1)
  const [pageCurrecy, setPageCurrecy] = useState<number>(1)
  const [textSearch, setTextSearch] = useState<string>('')
  const [typeSearch, setTypeSearch] = useState<string>('')

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
    const { remediesData, totalItens } = await getListOfRemediesByLaboratory(
      company,
      page,
    )
    setTotalItems(totalItens)
    setRemedies(remediesData)
  }

  const getListByParams = useCallback(() => {
    if (typeSearch === 'company') {
      getListByCompany(textSearch, pageCurrecy)
    } else if (typeSearch === 'name') {
      getListByName(textSearch, pageCurrecy)
    } else if (!textSearch) {
      getListAll(pageCurrecy)
    }
  }, [typeSearch, textSearch, pageCurrecy])

  function changePageCurrency(page: number) {
    setPageCurrecy(page)
  }

  function changeTextSearch(textSearch: string) {
    setTextSearch(textSearch)
  }
  function changeTypeSearch(typeSearch: string) {
    setTypeSearch(typeSearch)
  }
  // eslint
  useEffect(() => {
    getListByParams()
  }, [getListByParams])

  return (
    <RemediesContext.Provider
      value={{
        remedies,
        totalItems,
        changePageCurrency,
        changeTextSearch,
        changeTypeSearch,
        getRemedyById,
      }}
    >
      {children}
    </RemediesContext.Provider>
  )
}
