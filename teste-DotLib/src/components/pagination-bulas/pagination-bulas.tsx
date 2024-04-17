import { Dispatch, SetStateAction } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'

import './pagination-bulas.scss'

interface PaginationProps {
  page: number
  setPage: Dispatch<SetStateAction<number>>
  next: number
  last: number
}

export function PaginationBulas({
  page,
  setPage,
  next,
  last,
}: PaginationProps) {
  const handleNextPage = () => {
    setPage(next)
  }

  const handleReturnPage = () => {
    setPage(page - 1)
  }

  return (
    <div className="pagination">
      <div className="container-pagination">
        <button onClick={handleReturnPage} disabled={page === 1}>
          <ChevronLeft />
        </button>
        <button onClick={handleNextPage} disabled={page === last}>
          <ChevronRight />
        </button>
      </div>
    </div>
  )
}
