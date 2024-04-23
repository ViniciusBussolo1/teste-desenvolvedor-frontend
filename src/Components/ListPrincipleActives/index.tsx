import { CelContent, CelHeader, Line, Table } from '../Table/style'

export default function ListPrincipleActives() {
  return (
    <div>
      <Table>
        <Line>
          <CelHeader>Principio ativo:</CelHeader>
          <CelContent>name</CelContent>
        </Line>
      </Table>
    </div>
  )
}
