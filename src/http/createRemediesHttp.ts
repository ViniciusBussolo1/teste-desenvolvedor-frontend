import { api } from '../lib/axios'

interface RemedyRequestData {
  id: string
  name: string
  published_at: string
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

export async function createRemedyHttp(remedyRequest: RemedyRequestData) {
  const dataRemedyRequest = {
    ...remedyRequest,
    active_principles: remedyRequest.principleActives,
  }
  try {
    await api.post('/data', dataRemedyRequest)
  } catch (error) {
    throw new Error('Erro registar remédio.')
  }
}
