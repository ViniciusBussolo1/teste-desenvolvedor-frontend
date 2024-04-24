import { Trash } from 'phosphor-react'
import { CelContent, CelHeader, Line, Table } from '../Table/style'
import { Button } from '../Button'
import { useRemedies } from '../../hooks/useRemedies'
import EmpytMessage from '../EmpytMessage'

export default function ListPrincipleActives() {
  const { deletePrincipleActive, remedy } = useRemedies()

  const principleActives = remedy.principleActives
  if (principleActives.length === 0) {
    return <EmpytMessage message="Não há ativos adicionados." />
  }

  function handleDeletePrincipleActive(idPrincipleActive: string) {
    deletePrincipleActive(idPrincipleActive)
    return false
  }

  return (
    <div>
      <Table>
        {principleActives.map((principleActive) => {
          return (
            <Line key={principleActive.id}>
              <CelHeader>Principio ativo:</CelHeader>
              <CelContent>{principleActive.name}</CelContent>
              <CelContent style={{ justifyContent: 'flex-end' }}>
                <Button
                  variant="icon"
                  onClick={() =>
                    handleDeletePrincipleActive(principleActive.id)
                  }
                >
                  <Trash />
                </Button>
              </CelContent>
            </Line>
          )
        })}
      </Table>
    </div>
  )
}
