import { TableContainer } from './styles'
import { FormatterData } from '../../utils/formatters'

import { Button } from '../Button'
import { MagnifyingGlass, PencilLine } from 'phosphor-react'
import { Remedy } from '../../context/RemediesProvider'
import ModalDialog from '../ModalDialog'
import { RemedyView } from '../RemedyView'
import { Link } from 'react-router-dom'
import EmpytMessage from '../EmpytMessage'

interface TableProps {
  remedies: Remedy[]
}

export function TableListRemedies({ remedies }: TableProps) {
  if (remedies.length === 0) {
    return <EmpytMessage message="Não foi encontrado um remédio" />
  }
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
                    <Button variant="icon">
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
                <Link to={`/remedy/${remedy.id}/update`}>
                  <Button variant="icon">
                    <PencilLine />
                  </Button>
                </Link>
              </td>
            </tr>
          )
        })}
      </tbody>
    </TableContainer>
  )
}
