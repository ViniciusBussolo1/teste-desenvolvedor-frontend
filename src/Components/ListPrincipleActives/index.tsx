import { PrincipleActive } from '../../pages/NewRemedy'
import { CelContent, CelHeader, Line, Table } from '../Table/style'

interface ListPrincipleActivesProps {
  principleActives: PrincipleActive[]
}

export default function ListPrincipleActives({
  principleActives,
}: ListPrincipleActivesProps) {
  return (
    <div>
      <Table>
        {principleActives.map((principleActive) => {
          return (
            <Line key={principleActive.id}>
              <CelHeader>Principio ativo:</CelHeader>
              <CelContent>{principleActive.activePrinciple}</CelContent>
            </Line>
          )
        })}
      </Table>
    </div>
  )
}
