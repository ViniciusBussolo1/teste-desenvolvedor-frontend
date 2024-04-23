import React from 'react'
import { ListContainer } from './style'
import { CelHeader, Line, Table } from '../Table/style'
import { DocumentRemedy } from '../../pages/NewRemedy'

interface ListDocumentsProps {
  documents: DocumentRemedy[]
}

export default function ListDocuments({ documents }: ListDocumentsProps) {
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
