import { api } from '../lib/axios'

export async function getRemedy(remedyId: string) {
  const remedyResponse = await api.get(`/data/${remedyId}`)

  const remedyData = remedyResponse.data

  return remedyData
}
