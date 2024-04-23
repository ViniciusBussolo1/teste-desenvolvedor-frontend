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
    activePrinciple: string
  }[]
}

export async function createRemedy(remedyRequest: RemedyRequestData) {
  await api.post('/data', remedyRequest)
}
