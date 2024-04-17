import React from 'react'
import { TableContainer } from './styles'

export  function Table() {
  return (
      <TableContainer>
        <thead>
          <tr>
            <th>Nome</th>
            <th>Data de Publicação</th>
            <th>Nome do Laboratório</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Nome</td>
            <td>Data de Publicação</td>
            <td>Nome do Laboratório</td>
          </tr>
          <tr>
            <td>Nome</td>
            <td>Data de Publicação</td>
            <td>Nome do Laboratório</td>
          </tr>
        </tbody>
      </TableContainer>
  )
}
