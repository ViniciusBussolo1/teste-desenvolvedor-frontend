export interface bulasDataProps {
  first: number
  prev: string
  next: number
  last: number
  pages: number
  items: number
  data: [
    {
      id: string
      name: string
      published_at: string
      company: string
      documents: {
        id: string
        expedient: string
        type: string
        url: string
      }
      active_principles: {
        id: string
        name: string
      }
    },
  ]
}
