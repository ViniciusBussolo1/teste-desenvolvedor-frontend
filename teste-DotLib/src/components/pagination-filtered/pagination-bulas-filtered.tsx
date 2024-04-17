import { ChevronLeft, ChevronRight } from 'lucide-react'

import { Dispatch, SetStateAction, useContext } from 'react'
import { ThemeContext } from '../../context/theme-context'

import './pagination-bulas-filtered.scss'

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
  const { theme } = useContext(ThemeContext)

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
    <div className={`pagination-${theme}`}>
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
