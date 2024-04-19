import { api } from '../lib/axios'

export async function getListOfRemediesByName(name: string, page: number) {
  const remediesResponse = await api.get('/data', {
    params: {
      name_like: name.toUpperCase(),
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
