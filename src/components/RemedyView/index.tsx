import { useCallback, useEffect, useState } from 'react'
import { RemedyViewContainer } from './styles'
import { useRemedies } from '../../hooks/useRemedies'
import { FormatterData } from '../../utils/formatters'
import { CelContent, CelHeader, Table, Line } from '../Table/style'
import DocumentTable from './components/DocumentTable'
import EmpytMessage from '../EmpytMessage'

interface RemedyViewProps {
  remedyId: string
}

export function RemedyView({ remedyId }: RemedyViewProps) {
  const { getRemedyById, remedy } = useRemedies()
  const [urlDownloads, setUrlDownloads] = useState<string[]>([])

  const isEmptyRemedy =
    Object.values(remedy).length === 0 || remedy?.published_at === ''

  function createListUrlDownload(url: string) {
    const blob = new Blob([url], { type: 'application/octet-stream' })
    const urlDownload = window.URL.createObjectURL(blob)
    setUrlDownloads((prevUrlDownloads) => [...prevUrlDownloads, urlDownload])
  }

  const getRemedy = useCallback(async () => {
    getRemedyById(remedyId)

    if (!isEmptyRemedy) {
      remedy.documents.forEach(({ url }) => createListUrlDownload(url))
    }
  }, [remedyId])

  useEffect(() => {
    getRemedy()
  }, [])

  if (isEmptyRemedy) {
    return <p>loading...</p>
  }
  return (
    <RemedyViewContainer>
      <h2>Informações do Remédio</h2>
      <Table>
        <Line>
          <CelHeader>Nome:</CelHeader>
          <CelContent>{remedy.name}</CelContent>
        </Line>
        <Line>
          <CelHeader>Data de publicação</CelHeader>
          <CelContent>
            {FormatterData.format(new Date(remedy.published_at))}
          </CelContent>
        </Line>
        <Line>
          <CelHeader>Laboratório:</CelHeader>
          <CelContent>{remedy.company}</CelContent>
        </Line>
      </Table>
      <h2>Documentos do Remédio</h2>

      {remedy.documents.map((document, index) => {
        return (
          <DocumentTable
            key={document.id}
            document={document}
            urlDownload={urlDownloads[index]}
            remedyName={remedy.name}
          />
        )
      })}

      <h2>Principios Ativos:</h2>

      {remedy.principleActives.length === 0 ? (
        <EmpytMessage message="Náo há princípios ativos." />
      ) : (
        <Table>
          {remedy.principleActives.map((principleActive) => {
            return (
              <Line key={principleActive.id}>
                <CelHeader>Principio ativo:</CelHeader>
                <CelContent>{principleActive.name}</CelContent>
              </Line>
            )
          })}
        </Table>
      )}
    </RemedyViewContainer>
  )
}
