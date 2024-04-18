import { TableContainer } from './styles'
import { FormatterData } from '../../utils/formatters'
import { Remedy } from '../../pages/home'

interface TableProps {
  remedies: Remedy[]
}

export function Table({ remedies }: TableProps) {
  return (
    <TableContainer>
      <thead>
        <tr>
          <th>Nome</th>
          <th>Data de Publicação</th>
          <th>Nome do Laboratório</th>
        </tr>
      </thead>
      <tbody>
        {remedies.map((remedy) => {
          return (
            <tr key={remedy.id}>
              <td>{remedy.name}</td>
              <td>{FormatterData.format(new Date(remedy.published_at))}</td>
              <td>{remedy.company}</td>
            </tr>
          )
        })}
      </tbody>
    </TableContainer>
  )
}
