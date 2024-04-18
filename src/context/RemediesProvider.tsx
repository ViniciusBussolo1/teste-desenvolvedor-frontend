import React, { createContext, useReducer } from 'react'

export interface Remedy {
  id: string
  name: string
  published_at: string
  company: string
  documents: {
    id: string
    expedient: string
    type: string
    url: string
  }[]
}

interface RemediesContextProps {
  remedies: Remedy[]
}

interface IRemediesProviderProps {
  children: React.ReactNode
}

export const RemediesContext = createContext({} as RemediesContextProps)

export function RemediesProvider({ children }: IRemediesProviderProps) {
  return (
    <RemediesContext.Provider value={{ remedies: [] }}>
      {children}
    </RemediesContext.Provider>
  )
}
