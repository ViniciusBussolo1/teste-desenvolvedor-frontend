import { useState } from 'react'

import axios from 'axios'

export interface bulasData {
  id: string
  name: string
  published_at: string
  company: string
  documents: {
    id: string
    expedient: string
    type: string
    url: string
  }
  active_principles: {
    id: string
    name: string
  }
}

export function useBulaFilter() {
  const [bulasFilter, setbulasFilter] = useState<Array<bulasData>>([])

  function removerSpecials(texto: string) {
    // eliminando acentuação
    texto = texto.replace(/[ÀÁÂÃÄÅ]/, 'A')
    texto = texto.replace(/[àáâãäå]/, 'a')
    texto = texto.replace(/[ÈÉÊË]/, 'E')
    texto = texto.replace(/[Ç]/, 'C')
    texto = texto.replace(/[ç]/, 'c')

    return texto.replace(/[^a-z0-9]/gi, '')
  }

  async function handleSearchBulas(textFilter: string) {
    const baseURL = 'http://localhost:3000'

    const response = await axios.get(`${baseURL}/data`).then((response) => {
      return response.data
    })

    const bulasFiltered = response.filter((item: bulasData) => {
      return (
        removerSpecials(item.name)
          .toLocaleLowerCase()
          .includes(removerSpecials(textFilter).toLocaleLowerCase()) ||
        removerSpecials(item.company)
          .toLocaleLowerCase()
          .includes(removerSpecials(textFilter).toLocaleLowerCase())
      )
    })

    setbulasFilter(bulasFiltered)
  }

  return { bulasFilter, handleSearchBulas }
}
