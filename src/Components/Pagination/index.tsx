import { CaretLeft, CaretRight } from 'phosphor-react'
import { ButtonsContainer, PaginationContainer } from './style'
import { Button } from '../Button'

interface PaginationProps {
  totalItems: number
  pageCurrecy: number
  nextPage: () => void
  previousPage: () => void
}

export function Pagination({
  totalItems,
  nextPage,
  previousPage,
  pageCurrecy,
}: PaginationProps) {
  const perPage = 10
  const pages = Math.ceil(totalItems / perPage)

  function handleNextPage() {
    nextPage()
  }

  function handlePreviousPage() {
    previousPage()
  }

  const isExistingPreviousPage = pageCurrecy <= 1
  const isExistingNextPage = pageCurrecy === pages

  return (
    <PaginationContainer>
      <span>Total de {totalItems} item(s)</span>
      <div>
        <p>
          Página {pageCurrecy} de {pages}
        </p>
        <ButtonsContainer>
          <Button
            variant="icon"
            onClick={handlePreviousPage}
            disabled={isExistingPreviousPage}
          >
            <CaretLeft />
          </Button>
          <Button
            variant="icon"
            onClick={handleNextPage}
            disabled={isExistingNextPage}
          >
            <CaretRight />
          </Button>
        </ButtonsContainer>
      </div>
    </PaginationContainer>
  )
}
