import React, { createContext, useCallback, useEffect, useState } from 'react'
import { getListOfRemedies } from '../http/getListOfRemedies'
import { getListOfRemediesByName } from '../http/getListOfRemediesByName'
import { getListOfRemediesByLaboratory } from '../http/getListOfRemediesByLaboratory'
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
}

interface RemedyRequestData {
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
  principleActives?: {
    id: string
    activePrinciple: string
  }[]
}

interface RemediesContextProps {
  remedies: Remedy[]
  totalItems: number
  changePageCurrency: (page: number) => void
  changeTextSearch: (textSearch: string) => void
  changeTypeSearch: (typeSearch: string) => void
  getRemedyById: (remedyId: string) => Promise<Remedy>
  addRemedy: (remedyRequest: RemedyRequestData) => void
}

interface RemediesProviderProps {
  children: React.ReactNode
}

export const RemediesContext = createContext({} as RemediesContextProps)

export function RemediesProvider({ children }: RemediesProviderProps) {
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

  async function addRemedy(remedyRequestData: RemedyRequestData) {
    createRemedy(remedyRequestData)
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
        addRemedy,
      }}
    >
      {children}
    </RemediesContext.Provider>
  )
}
