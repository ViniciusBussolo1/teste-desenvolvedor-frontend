import { FormEvent, useContext, useEffect, useState } from 'react'

import { Search } from 'lucide-react'

import { PaginationBulas } from '../pagination-bulas/pagination-bulas'
import { TableBulas } from '../table-bulas/table-bulas'
import { TableBulasFiltered } from '../table-bulas-filtered/table-bulas-filtered'

import { bulasDataProps } from '../../type/bulas'
import { useBulaFilter } from '../../hooks/useBulaFilter'

import { ThemeContext } from '../../context/theme-context'

import axios from 'axios'
import './main.scss'
import { PaginationBulasFiltered } from '../pagination-filtered/pagination-bulas-filtered'

export function Main() {
  const [bulas, setBulas] = useState({} as bulasDataProps)
  const [searchBula, setSearchBula] = useState('')
  const [page, setPage] = useState(1)
  const [pageFiltered, setPageFiltered] = useState(1)

  const { handleSearchBulas, bulasFilter } = useBulaFilter()
  const { theme } = useContext(ThemeContext)

  const itensPorPagina = 10

  const indiceInicial = pageFiltered - 1
  const indiceFinal = indiceInicial + itensPorPagina
  const bulasParaPaginaAtual = bulasFilter.slice(indiceInicial, indiceFinal)

  const totalPageCount = Math.ceil(bulasFilter.length / indiceFinal)

  const baseURL = 'http://localhost:3000'

  useEffect(() => {
    axios.get(`${baseURL}/data?_page=${page}`).then((response) => {
      setBulas(response.data)
    })
  }, [page])

  const handleSubmitSearchBulas = (event: FormEvent) => {
    event.preventDefault()
    handleSearchBulas(searchBula)
  }

  return (
    <main className={`main-${theme}`}>
      <div className="container-main">
        <h1>Bulário Eletrônico</h1>

        <form onSubmit={handleSubmitSearchBulas} className="form">
          <input
            type="text"
            placeholder="Pesquise pelo medicamento ou laboratório..."
            required
            value={searchBula}
            onChange={(e) => setSearchBula(e.target.value)}
          />
          <button type="submit">
            <Search className="search" />
          </button>
        </form>

        {bulasFilter.length ? (
          <>
            <TableBulasFiltered bulasFilter={bulasParaPaginaAtual} />

            <PaginationBulasFiltered
              page={pageFiltered}
              setPage={setPageFiltered}
              indiceFinal={totalPageCount}
            />
          </>
        ) : (
          <>
            <TableBulas data={bulas} />

            <PaginationBulas
              page={page}
              setPage={setPage}
              next={bulas.next}
              last={bulas.last}
            />
          </>
        )}
      </div>
    </main>
  )
}
