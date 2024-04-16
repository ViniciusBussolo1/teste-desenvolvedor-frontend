import { Search } from 'lucide-react'

import './main.scss'
import { Table } from '../table/table'

export function Main() {
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

        <Table />
      </div>
    </main>
  )
}
