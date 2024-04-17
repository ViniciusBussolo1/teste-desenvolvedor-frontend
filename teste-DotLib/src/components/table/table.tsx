import { format, formatISO } from 'date-fns'

import { FileText } from 'lucide-react'

import { bulasData, bulasDataProps } from '../../type/bulas'
import './table.scss'

interface TableDataProps {
  data: bulasDataProps
  bulasFilter: Array<bulasData>
}

export function Table({ data, bulasFilter }: TableDataProps) {
  const handleDate = (date: string) => {
    const result = formatISO(date, { representation: 'date' })

    const formattedDate = format(result, 'dd/M/yyyy')

    return formattedDate
  }

  return (
    <table>
      <thead>
        <tr>
          <th>Nome</th>
          <th>Laboratório</th>
          <th>PDF</th>
          <th>Data de Publicação</th>
        </tr>
      </thead>
      <tbody>
        {bulasFilter.length
          ? data.data &&
            bulasFilter.map((item) => {
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
            })
          : data.data &&
            data.data.map((item) => {
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
