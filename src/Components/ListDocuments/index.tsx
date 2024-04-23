import React from 'react'
import { ListContainer } from './style'
import { CelHeader, Line, Table } from '../Table/style'

export default function ListDocuments() {
  return (
    <ListContainer>
      <Table>
        <Line>
          <CelHeader>Expediente</CelHeader>
          <CelHeader>Tipo</CelHeader>
          <CelHeader>URL</CelHeader>
        </Line>
        {/* <Line>
          <CelContent>Expediente</CelContent>
          <CelContent>Tipo</CelContent>
          <CelContent>URL</CelContent>
        </Line> */}
      </Table>
    </ListContainer>
  )
}
