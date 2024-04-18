import { api } from '../lib/axios'

export async function getListOfRemediesByLaboratory(laboratory: string) {
  const remediesResponse = await api.get('/data', {
    params: {
      company_like: laboratory.toUpperCase(),
      _sort: 'published_at',
      _order: 'desc',
    },
  })

  return remediesResponse.data
}
