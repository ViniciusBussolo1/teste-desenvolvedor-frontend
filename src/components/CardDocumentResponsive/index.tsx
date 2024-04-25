import { useState } from 'react'
import { CardContainer } from './style'
import ModalDialog from '../ModalDialog'
import { Button } from '../Button'
import { NotePencil } from 'phosphor-react'
import { FormDocument } from '../FormDocument'

interface CardDocumentResponsiveProps {
  document: {
    id: string
    expedient: string
    type: 'PATIENT' | 'PROFESSIONAL'
    url: string
  }
}

export default function CardDocumentResponsive({
  document,
}: CardDocumentResponsiveProps) {
  const [isOpenModal, setIsOpenModal] = useState<boolean>(false)
  function closedModal() {
    setIsOpenModal(false)
  }

  return (
    <CardContainer>
      <p>
        <strong>Expediente: </strong>
        {document.expedient}
      </p>
      <p>
        <strong>Tipo: </strong>
        {document.type}
      </p>

      <p>
        <strong>URL: </strong>
        {document.url}
      </p>
      <ModalDialog
        openModal={isOpenModal}
        onOpenChangeModal={setIsOpenModal}
        buttonOpenModal={
          <Button variant="icon">
            <NotePencil />
          </Button>
        }
        ContentModal={
          <FormDocument closedModal={closedModal} document={document} />
        }
      />
    </CardContainer>
  )
}
