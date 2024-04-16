import { bulasDataProps } from '../../type/bulas'
import './table.scss'

interface TableDataProps {
  data: Array<bulasDataProps>
}

export function Table({ data }: TableDataProps) {
  return (
    <table>
      <thead>
        <tr>
          <th>Nome</th>
          <th>Companhia</th>
          <th>PDF</th>
          <th>Data de Publicação</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>AMOXICILINA</td>
          <td>MULTILAB INDUSTRIA E COMERCIO DE PRODUTOS FARMACEUTICOS LTDA</td>
          <td>Germany</td>
          <td>2022-12-16</td>
        </tr>
        <tr>
          <td>Centro comercial Moctezuma</td>
          <td>Francisco Chang</td>
          <td>Mexico</td>
        </tr>
        <tr>
          <td>Ernst Handel</td>
          <td>Roland Mendel</td>
          <td>Austria</td>
        </tr>
        <tr>
          <td>Island Trading</td>
          <td>Helen Bennett</td>
          <td>UK</td>
        </tr>
        <tr>
          <td>Laughing Bacchus Winecellars</td>
          <td>Yoshi Tannamuri</td>
          <td>Canada</td>
        </tr>
        <tr>
          <td>Magazzini Alimentari Riuniti</td>
          <td>Giovanni Rovelli</td>
          <td>Italy</td>
        </tr>
      </tbody>
    </table>
  )
}
