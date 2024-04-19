import { CaretLeft, CaretRight } from 'phosphor-react'
import {
  ButtonPagination,
  ButtonsContainer,
  PaginationContainer,
} from './style'

interface PaginationProps {
  totalItems: number
  pageCurrency?: string | number | null
}

export function Pagination({ totalItems, pageCurrency = 1 }: PaginationProps) {
  const perPage = 10
  const pages = Math.ceil(totalItems / perPage)

  function handleNextPage() {}

  return (
    <PaginationContainer>
      <span>Total de {totalItems} item(s)</span>
      <div>
        <p>
          Página {pageCurrency} de {pages}
        </p>
        <ButtonsContainer>
          <ButtonPagination>
            <CaretLeft />
          </ButtonPagination>
          <ButtonPagination onClick={handleNextPage}>
            <CaretRight />
          </ButtonPagination>
        </ButtonsContainer>
      </div>
    </PaginationContainer>
  )
}
