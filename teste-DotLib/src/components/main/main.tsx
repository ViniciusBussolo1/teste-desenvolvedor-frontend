import { Search } from 'lucide-react'

import './main.scss'
import { Table } from '../table/table'
import { FormEvent, useEffect, useState } from 'react'
import axios from 'axios'
import { bulasDataProps } from '../../type/bulas'
import { useBulaFilter } from '../../hooks/useBulaFilter'

export function Main() {
  const [bulas, setBulas] = useState({} as bulasDataProps)
  const [searchBula, setSearchBula] = useState('')

  const { handleSearchBulas } = useBulaFilter()

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
    <main className="main">
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

        <Table data={bulas} />
      </div>
    </main>
  )
}
