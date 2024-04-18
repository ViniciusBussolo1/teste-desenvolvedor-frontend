import { useContext } from 'react'

import { format, formatISO } from 'date-fns'

import { FileText } from 'lucide-react'

import { bulasDataProps } from '../../type/bulas'
import { ThemeContext } from '../../context/theme-context'

import './table-bulas.scss'

interface TableDataProps {
  data: bulasDataProps
}

export function TableBulas({ data }: TableDataProps) {
  const { theme } = useContext(ThemeContext)

  const handleDate = (date: string) => {
    const result = formatISO(date, { representation: 'date' })

    const formattedDate = format(result, 'dd/M/yyyy')

    return formattedDate
  }

  const orderdData =
    data.data &&
    data.data.sort((a, b) => {
      const dateA = new Date(a.published_at).getTime()
      const dateB = new Date(b.published_at).getTime()
      return dateB - dateA
    })

  return (
    <div className="table-container">
      <table className={`table-${theme}`}>
        <thead>
          <tr>
            <th>Nome</th>
            <th>Laboratório</th>
            <th>PDF</th>
            <th className="order">Data de Publicação</th>
          </tr>
        </thead>
        <tbody>
          {orderdData &&
            orderdData.map((item) => {
              return (
                <tr key={item.id}>
                  <td>{item.name}</td>
                  <td>{item.company}</td>
                  <td key={item.id}>
                    <button className="button-pdf">
                      <a
                        href={item.documents[0].url}
                        download={'documento.pdf'}
                        target="_blank"
                        rel="noreferrer"
                      >
                        <FileText color="white" />
                      </a>
                    </button>
                  </td>
                  <td>{handleDate(item.published_at)}</td>
                </tr>
              )
            })}
        </tbody>
      </table>
    </div>
  )
}
