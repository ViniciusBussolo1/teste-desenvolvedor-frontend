import { CardContainer, CardInfo, CardItem, ContainerButtons } from './styles'
import { FormatterData } from '../../utils/formatters'

import { Button } from '../Button'
import { MagnifyingGlass, PencilLine } from 'phosphor-react'
import { Remedy } from '../../context/RemediesProvider'
import ModalDialog from '../ModalDialog'
import { RemedyView } from '../RemedyView'
import { Link } from 'react-router-dom'
import EmpytMessage from '../EmpytMessage'

interface CardRemedyResposiveProps {
  remedies: Remedy[]
}

export function CardRemedyResposive({ remedies }: CardRemedyResposiveProps) {
  if (remedies.length === 0) {
    return <EmpytMessage message="Não foi encontrado um remédio" />
  }
  return (
    <CardContainer>
      {remedies.map((remedy) => {
        return (
          <CardItem key={remedy.id}>
            <CardInfo>
              <p>
                <strong>Name:</strong> {remedy.name}
              </p>
            </CardInfo>
            <CardInfo>
              <p>
                <strong>Laboratorio:</strong> {remedy.company}
              </p>
            </CardInfo>
            <CardInfo>
              <p>
                <strong>Data de Publicação:</strong>{' '}
                {FormatterData.format(new Date(remedy.published_at))}
              </p>
            </CardInfo>
            <ContainerButtons>
              <ModalDialog
                buttonOpenModal={
                  <Button variant="icon">
                    <MagnifyingGlass />
                  </Button>
                }
                ContentModal={<RemedyView remedyId={remedy.id} />}
              />

              <Link to={`/remedy/${remedy.id}/update`}>
                <Button variant="icon">
                  <PencilLine />
                </Button>
              </Link>
            </ContainerButtons>
          </CardItem>
        )
      })}
    </CardContainer>
  )
}
