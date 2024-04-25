import { useContext } from 'react'
import { RemediesContext } from '../context/RemediesProvider'

export function useRemedies() {
  return useContext(RemediesContext)
}
