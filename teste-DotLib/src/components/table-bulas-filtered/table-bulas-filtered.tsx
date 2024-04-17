import { useContext } from 'react'

import { format, formatISO } from 'date-fns'

import { FileText } from 'lucide-react'

import { bulasData } from '../../type/bulas'
import { ThemeContext } from '../../context/theme-context'

import './table-bulas-filtered.scss'

interface TableDataProps {
  bulasFilter: Array<bulasData>
}

export function TableBulasFiltered({ bulasFilter }: TableDataProps) {
  const { theme } = useContext(ThemeContext)

  const handleDate = (date: string) => {
    const result = formatISO(date, { representation: 'date' })

    const formattedDate = format(result, 'dd/M/yyyy')

    return formattedDate
  }

  const orderdData =
    bulasFilter &&
    bulasFilter.sort((a, b) => {
      const dateA = new Date(a.published_at).getTime()
      const dateB = new Date(b.published_at).getTime()
      return dateB - dateA
    })

  return (
    <table className={`table-${theme}`}>
      <thead>
        <tr>
          <th>Nome</th>
          <th>Laboratório</th>
          <th>PDF</th>
          <th>Data de Publicação</th>
        </tr>
      </thead>
      <tbody>
        {orderdData &&
          orderdData.map((item) => {
            return (
              <tr key={item.id}>
                <td>{item.name}</td>
                <td>{item.company}</td>
                <td>
                  <button className="button-pdf">
                    <FileText />
                  </button>
                </td>
                <td>{handleDate(item.published_at)}</td>
              </tr>
            )
          })}
      </tbody>
    </table>
  )
}
