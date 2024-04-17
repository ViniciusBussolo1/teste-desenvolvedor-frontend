import { ChevronLeft, ChevronRight } from 'lucide-react'

import './pagination-bulas-filtered.scss'
import { Dispatch, SetStateAction } from 'react'

interface PaginationProps {
  setPage: Dispatch<SetStateAction<number>>
  page: number
  indiceFinal: number
}

export function PaginationBulasFiltered({
  page,
  setPage,
  indiceFinal,
}: PaginationProps) {
  console.log(page, indiceFinal)
  const handleNextPage = () => {
    if (page < indiceFinal) {
      setPage(page + 1)
    }
  }

  const handleReturnPage = () => {
    if (page > 1) {
      setPage(page - 1)
    }
  }

  return (
    <div className="pagination">
      <div className="container-pagination">
        <button onClick={handleReturnPage} disabled={page === 1}>
          <ChevronLeft />
        </button>
        <button onClick={handleNextPage} disabled={page === indiceFinal}>
          <ChevronRight />
        </button>
      </div>
    </div>
  )
}
