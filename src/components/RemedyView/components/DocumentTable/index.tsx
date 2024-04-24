import React from 'react'
import { CelContent, CelHeader, Line, Table } from '../../../Table/style'
import { Button } from '../../../Button'
import { MagnifyingGlassPlus } from 'phosphor-react'

interface RemedyDocuments {
  expedient: string
  type: 'PATIENT' | 'PROFESSIONAL'
  url: string
}

interface DocumentTableProps {
  document: RemedyDocuments
  urlDownload: string
  remedyName: string
}

export default function DocumentTable({
  document,
  urlDownload,
  remedyName,
}: DocumentTableProps) {
  return (
    <div>
      <Table>
        <Line>
          <CelHeader>Nº de registro da bula:</CelHeader>
          <CelContent>{document.expedient}</CelContent>
        </Line>
        <Line>
          <CelHeader>Typo: </CelHeader>
          <CelContent>
            {document.type === 'PATIENT' ? 'Paciente' : 'profissional'}
          </CelContent>
        </Line>
        <Line>
          <CelContent>
            <a href={document.url}>
              <Button>
                <MagnifyingGlassPlus />
                Abrir bula
              </Button>
            </a>
          </CelContent>
          <CelContent>
            <a href={urlDownload} download={`${remedyName}-bula.pdf`}>
              <Button>
                <MagnifyingGlassPlus />
                Baixar bula
              </Button>
            </a>
          </CelContent>
        </Line>
      </Table>
    </div>
  )
}
