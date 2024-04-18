import { api } from '../lib/axios'

export async function getListOfRemediesByName(name: string) {
  const remediesResponse = await api.get('/data', {
    params: {
      name_like: name.toUpperCase(),
      _sort: 'published_at',
      _order: 'desc',
    },
  })
  return remediesResponse.data
}
