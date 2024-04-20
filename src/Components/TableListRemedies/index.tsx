import { TableContainer } from './styles'
import { FormatterData } from '../../utils/formatters'

import { Button } from '../Button'
import { MagnifyingGlass, PencilLine } from 'phosphor-react'
import { Remedy } from '../../context/RemediesProvider'
import ModalDialog from '../ModalDialog'
import { RemedyView } from '../Remedy'

interface TableProps {
  remedies: Remedy[]
}

export function TableListRemedies({ remedies }: TableProps) {
  return (
    <TableContainer>
      <thead>
        <tr>
          <th></th>
          <th>Nome</th>
          <th>Data de Publicação</th>
          <th>Nome do Laboratório</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        {remedies.map((remedy) => {
          return (
            <tr key={remedy.id}>
              <td>
                <ModalDialog
                  buttonOpenModal={
                    <Button>
                      <MagnifyingGlass />
                    </Button>
                  }
                  ContentModal={<RemedyView remedyId={remedy.id} />}
                />
              </td>
              <td>{remedy.name}</td>
              <td>{FormatterData.format(new Date(remedy.published_at))}</td>
              <td>{remedy.company}</td>
              <td>
                <Button>
                  <PencilLine />
                </Button>
              </td>
            </tr>
          )
        })}
      </tbody>
    </TableContainer>
  )
}
