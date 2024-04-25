import React, { createContext, useCallback, useEffect, useState } from 'react'
import { getListOfRemediesHttp } from '../http/getListOfRemediesHttp'
import { getListOfRemediesByNameHttp } from '../http/getListOfRemediesByNameHttp'
import { getListOfRemediesByCompanyHttp } from '../http/getListOfRemediesByCompanyHttp'
import { getRemedyHttp } from '../http/getRemedyHttp'
import { createRemedyHttp } from '../http/createRemediesHttp'
import { updateRemedyHttp } from '../http/updateRemedyHttp'

export interface DocumentRemedy {
  id: string
  expedient: string
  type: 'PROFESSIONAL' | 'PATIENT'
  url: string
}

interface PrincipleActive {
  id: string
  name: string
}

export interface Remedy {
  id: string
  name: string
  published_at: string
  company: string
  documents: DocumentRemedy[] | []
  principleActives?: PrincipleActive[] | []
}

export interface RemedyRequest {
  id: string
  name: string
  published_at: string
  company: string
  documents: DocumentRemedy[]
  principleActives?: PrincipleActive[] | []
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
  remedy: Remedy
  getRemedyById: (remedyId: string) => Promise<Remedy>
  addRemedy: (remedyRequest: Remedy) => void
  addPrincipleActive: (principleActive: PrincipleActive) => void
  addDocument: (documentRemedy: DocumentRemedy) => void
  setDocument: (documentRemedy: DocumentRemedy) => void
  deletePrincipleActive: (idPrincipleActive: string) => void
  updateRemedyProvider: (idRemedy: string, requestRamedy: RemedyRequest) => void
  clearRemedy: () => void
}

interface RemediesProviderProps {
  children: React.ReactNode
}

export const RemediesContext = createContext({} as RemediesContextProps)

export function RemediesProvider({ children }: RemediesProviderProps) {
  const [remedies, setRemedies] = useState<Remedy[]>([] as Remedy[])
  const [totalItems, setTotalItems] = useState<number>(1)
  const [remedy, setRemedy] = useState<Remedy>({} as Remedy)

  const [seachParamsProvider, setSeachParamsProvider] = useState<SearchParams>(
    {} as SearchParams,
  )

  async function getRemedyById(remedyId: string): Promise<Remedy> {
    const remedyData = await getRemedyHttp(remedyId)
    setRemedy(remedyData)
    return remedy
  }

  async function getListAll(page: number) {
    const { remediesData, totalItems } = await getListOfRemediesHttp(page)

    setTotalItems(totalItems)
    setRemedies(remediesData)
  }

  function clearRemedy() {
    setRemedy({
      principleActives: [],
      documents: [],
      id: '',
      name: '',
      published_at: '',
      company: '',
    } as Remedy)
  }

  async function getListByName(name: string, page: number) {
    const { remediesData, totalItems } = await getListOfRemediesByNameHttp(
      name,
      page,
    )
    setTotalItems(totalItems)
    setRemedies(remediesData)
  }

  async function updateRemedyProvider(
    idRemedy: string,
    requestRamedy: RemedyRequest,
  ) {
    console.log('🚀 ~ RemediesProvider ~ requestRamedy:', requestRamedy)
    await updateRemedyHttp(idRemedy, requestRamedy)
  }

  async function getListByCompany(company: string, page: number) {
    const { remediesData, totalItems } = await getListOfRemediesByCompanyHttp(
      company,
      page,
    )
    setTotalItems(totalItems)
    setRemedies(remediesData)
  }

  function addPrincipleActive(principleActive: PrincipleActive) {
    setRemedy((prevRemedy) => {
      if (prevRemedy.principleActives) {
        return {
          ...prevRemedy,
          principleActives: [...prevRemedy.principleActives, principleActive],
        }
      } else {
        return {
          ...prevRemedy,
          principleActives: [principleActive],
        }
      }
    })
  }

  function addDocument(documentRemedy: DocumentRemedy) {
    setRemedy((prevRemedy) => ({
      ...prevRemedy,
      documents: [...prevRemedy.documents, documentRemedy],
    }))
  }

  function setDocument(documentRemedy: DocumentRemedy) {
    setRemedy((prevRemedy) => ({
      ...prevRemedy,
      documents: prevRemedy.documents.map((document) => {
        if (document.id === documentRemedy.id) {
          return documentRemedy
        } else {
          return document
        }
      }),
    }))
  }

  async function addRemedy(remedyRequestData: Remedy) {
    createRemedyHttp(remedyRequestData)
  }

  async function deletePrincipleActive(idPrincipleActive: string) {
    setRemedy((prevRemedy) => {
      if (prevRemedy.principleActives) {
        return {
          ...prevRemedy,
          principleActives: prevRemedy.principleActives.filter(
            (principleActive) => principleActive.id !== idPrincipleActive,
          ),
        }
      } else {
        return {
          ...prevRemedy,
          principleActives: [],
        }
      }
    })
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
        remedy,
        totalItems,
        changeSearchParams,
        getRemedyById,
        addRemedy,
        addPrincipleActive,
        addDocument,
        setDocument,
        deletePrincipleActive,
        updateRemedyProvider,
        clearRemedy,
      }}
    >
      {children}
    </RemediesContext.Provider>
  )
}
