import { api } from '../lib/axios'

interface RemedyRequestData {
  name: string
  company: string
  documents: {
    id: string
    expedient: string
    type: 'PROFESSIONAL' | 'PATIENT'
    url: string
  }[]
  principleActives?: {
    id: string
    name: string
  }[]
}

export async function updateRemedyHttp(
  idRemedy: string,
  remedyRequest: RemedyRequestData,
) {
  const dataRemedyRequest = {
    ...remedyRequest,
    active_principles: remedyRequest.principleActives,
  }

  try {
    await api.put(`/data/${idRemedy}`, dataRemedyRequest)
  } catch (error) {
    throw new Error('Erro atualizar remédio.')
  }
}
