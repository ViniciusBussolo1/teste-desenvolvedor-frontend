import { api } from '../lib/axios'

export async function getRemedy(remedyId: string) {
  const remedyResponse = await api.get(`/data/${remedyId}`)

  const remedyData = remedyResponse.data

  const dataRemedyResponse = {
    ...remedyData,
    principleActives: remedyData.active_principles
      ? remedyData.active_principles
      : [],
  }

  return dataRemedyResponse
}
