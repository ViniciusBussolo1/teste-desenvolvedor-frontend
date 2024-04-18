import { CaretLeft, CaretRight } from 'phosphor-react'
import {
  ButtonPagination,
  ButtonsContainer,
  PaginationContainer,
} from './style'

export function Pagination() {
  return (
    <PaginationContainer>
      <span>Total de 25 item(s)</span>
      <div>
        <p>Página 1 de 3</p>
        <ButtonsContainer>
          <ButtonPagination>
            <CaretLeft />
          </ButtonPagination>
          <ButtonPagination>
            <CaretRight />
          </ButtonPagination>
        </ButtonsContainer>
      </div>
    </PaginationContainer>
  )
}
