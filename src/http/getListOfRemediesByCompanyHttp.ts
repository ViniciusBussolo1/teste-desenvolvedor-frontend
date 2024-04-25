import { api } from '../lib/axios'

interface Remedy {
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
  active_principles?: {
    id: string
    name: string
  }[]
}
interface RemedyResponse {
  remediesData: Remedy[]
  totalItems: number
}

export async function getListOfRemediesByCompanyHttp(
  laboratory: string,
  page: number,
): Promise<RemedyResponse> {
  try {
    const remediesResponse = await api.get('/data', {
      params: {
        company_like: laboratory.toUpperCase(),
        _sort: 'published_at',
        _order: 'desc',
        _page: page,
      },
    })
    const totalItems = remediesResponse.headers['x-total-count']

    const remediesData: Remedy[] = remediesResponse.data
    const RemedyResponseStatus = remediesData.map((remedyData) => {
      return {
        ...remedyData,
        principleActives: remedyData.active_principles
          ? remedyData.active_principles
          : [],
      }
    })

    return {
      remediesData: RemedyResponseStatus,
      totalItems,
    }
  } catch (error) {
    throw new Error('Erro ao fazer a busca.')
  }
}
