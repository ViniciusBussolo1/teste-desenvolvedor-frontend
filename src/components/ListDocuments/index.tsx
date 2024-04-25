import React, { useState } from 'react'
import { ListContainer } from './style'
import { CelContent, CelHeader, Line, Table } from '../Table/style'
import EmpytMessage from '../EmpytMessage'
import { Button } from '../Button'
import { NotePencil } from 'phosphor-react'
import ModalDialog from '../ModalDialog'
import { FormDocument } from '../FormDocument'
import { useRemedies } from '../../hooks/useRemedies'
import useScreenSize from '../../hooks/useScreenSize'
import CardDocumentResponsive from '../CardDocumentResponsive'

export default function ListDocuments() {
  const { width: widthScreen } = useScreenSize()
  const [isOpenModal, setIsOpenModal] = useState<boolean>(false)

  const { remedy } = useRemedies()
  const documents = remedy.documents

  if (documents.length === 0) {
    return <EmpytMessage message="Não há documentos adicionados." />
  }

  function closedModal() {
    setIsOpenModal(false)
  }

  if (widthScreen < 480) {
    return (
      <>
        {documents.map((document) => (
          <CardDocumentResponsive document={document} key={document.id} />
        ))}
      </>
    )
  }
  return (
    <ListContainer>
      <Table>
        <Line>
          <CelHeader>Expediente</CelHeader>
          <CelHeader>Tipo</CelHeader>
          <CelHeader>URL</CelHeader>
          <CelHeader></CelHeader>
        </Line>
        {documents.map((document) => {
          return (
            <Line key={document.id}>
              <CelContent>{document.expedient}</CelContent>
              <CelContent>{document.type}</CelContent>
              <CelContent>{document.url}</CelContent>
              <CelContent style={{ justifyContent: 'flex-end' }}>
                <ModalDialog
                  openModal={isOpenModal}
                  onOpenChangeModal={setIsOpenModal}
                  buttonOpenModal={
                    <Button variant="icon">
                      <NotePencil />
                    </Button>
                  }
                  ContentModal={
                    <FormDocument
                      closedModal={closedModal}
                      document={document}
                    />
                  }
                />
              </CelContent>
            </Line>
          )
        })}
      </Table>
    </ListContainer>
  )
}
