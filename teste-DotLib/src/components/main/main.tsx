import { FormEvent, useContext, useEffect, useState } from 'react'

import { Search } from 'lucide-react'

import { Table } from '../table/table'

import { bulasDataProps } from '../../type/bulas'
import { useBulaFilter } from '../../hooks/useBulaFilter'

import { ThemeContext } from '../../context/theme-context'

import axios from 'axios'
import './main.scss'

export function Main() {
  const [bulas, setBulas] = useState({} as bulasDataProps)
  const [searchBula, setSearchBula] = useState('')

  const { handleSearchBulas, bulasFilter } = useBulaFilter()
  const { theme } = useContext(ThemeContext)

  const baseURL = 'http://localhost:3000'

  useEffect(() => {
    axios.get(`${baseURL}/data?_page=1`).then((response) => {
      setBulas(response.data)
    })
  }, [])

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
            value={searchBula}
            onChange={(e) => setSearchBula(e.target.value)}
          />
          <button type="submit">
            <Search className="search" />
          </button>
        </form>

        <Table data={bulas} bulasFilter={bulasFilter} />
      </div>
    </main>
  )
}
