import React from 'react'
import { ListContainer } from './style'
import { CelContent, CelHeader, Line, Table } from '../Table/style'
import EmpytMessage from '../EmpytMessage'
import { Button } from '../Button'
import { NotePencil } from 'phosphor-react'
import ModalDialog from '../ModalDialog'
import { FormDocument } from '../FormDocument'
import { useRemedies } from '../../hooks/useRemedies'

export default function ListDocuments() {
  const { remedy } = useRemedies()
  const documents = remedy.documents

  if (documents.length === 0) {
    return <EmpytMessage message="Não há documentos adicionados." />
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
                  buttonOpenModal={
                    <Button variant="icon">
                      <NotePencil />
                    </Button>
                  }
                  ContentModal={<FormDocument document={document} />}
                />
              </CelContent>
            </Line>
          )
        })}
      </Table>
    </ListContainer>
  )
}
