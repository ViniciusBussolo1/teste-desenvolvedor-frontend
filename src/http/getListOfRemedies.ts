import { api } from '../lib/axios'

export async function getListOfRemedies(page: number) {
  const remediesResponse = await api.get('/data', {
    params: {
      _sort: 'published_at',
      _order: 'desc',
      _page: page,
    },
  })
  const totalItens = remediesResponse.headers['x-total-count']
  const remediesData = remediesResponse.data

  return {
    remediesData,
    totalItens,
  }
}