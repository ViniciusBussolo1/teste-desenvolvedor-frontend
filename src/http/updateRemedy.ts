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

export async function updateRemedy(
  idRemedy: string,
  remedyRequest: RemedyRequestData,
) {
  const dataRemedyRequest = {
    ...remedyRequest,
    active_principles: remedyRequest.principleActives,
  }
  await api.put(`/data/${idRemedy}`, dataRemedyRequest)
}
