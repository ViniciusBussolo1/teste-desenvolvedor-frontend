import { PrincipleActive } from '../../pages/NewRemedy'
import EmpytMessage from '../EmpytMessage'
import { CelContent, CelHeader, Line, Table } from '../Table/style'

interface ListPrincipleActivesProps {
  principleActives: PrincipleActive[]
}

export default function ListPrincipleActives({
  principleActives,
}: ListPrincipleActivesProps) {
  if (principleActives.length === 0) {
    return <EmpytMessage message="Não há ativos adicionados." />
  }

  return (
    <div>
      <Table>
        {principleActives.map((principleActive) => {
          return (
            <Line key={principleActive.id}>
              <CelHeader>Principio ativo:</CelHeader>
              <CelContent>{principleActive.name}</CelContent>
            </Line>
          )
        })}
      </Table>
    </div>
  )
}
