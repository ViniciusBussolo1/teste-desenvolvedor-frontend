import React from 'react'
import { ListContainer } from './style'
import { CelHeader, Line, Table } from '../Table/style'
import { DocumentRemedy } from '../../pages/NewRemedy'
import EmpytMessage from '../EmpytMessage'

interface ListDocumentsProps {
  documents: DocumentRemedy[]
}

export default function ListDocuments({ documents }: ListDocumentsProps) {
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
        </Line>
        {documents.map((document) => {
          return (
            <Line key={document.id}>
              <CelHeader>{document.expedient}</CelHeader>
              <CelHeader>{document.type}</CelHeader>
              <CelHeader>{document.url}</CelHeader>
            </Line>
          )
        })}
      </Table>
    </ListContainer>
  )
}
