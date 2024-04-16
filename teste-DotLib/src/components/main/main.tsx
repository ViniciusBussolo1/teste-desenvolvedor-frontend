import { Search } from 'lucide-react'

import './main.scss'
import { Table } from '../table/table'
import { useEffect, useState } from 'react'
import axios from 'axios'
import { bulasDataProps } from '../../type/bulas'

export function Main() {
  const [bulas, setBulas] = useState<Array<bulasDataProps>>([])

  const baseURL = 'http://localhost:3000'

  useEffect(() => {
    axios.get(`${baseURL}/data`).then((response) => {
      setBulas(response.data)
    })
  }, [])

  return (
    <main className="main">
      <div className="container-main">
        <h1>Bulário Eletrônico</h1>

        <form className="form">
          <input
            type="text"
            placeholder="Pesquise pelo medicamento ou laboratório..."
          />
          <button>
            <Search className="search" />
          </button>
        </form>

        <Table data={bulas} />
      </div>
    </main>
  )
}
