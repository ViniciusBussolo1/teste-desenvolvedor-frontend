import { api } from '../lib/axios'

export async function getListOfRemedies() {
  const remediesResponse = await api.get('/data', {
    params: {
      _sort: 'published_at',
      _order: 'desc',
      _page: 1,
    },
  })

  return remediesResponse.data
}
