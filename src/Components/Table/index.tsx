import { useEffect, useState } from 'react'
import { TableContainer } from './styles'
import { api } from '../../lib/axios'
import { FormatterData } from '../../utils/formatters'

interface Remedy {
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

export  function Table() {
  const [remedies, setRemedies] = useState<Remedy[]>([])

  async function getListOfRemedies() {
    const remediesResponse = await api.get('/data', {
      params: {
        _sort:'published_at',
        _order: 'desc'
      }
    })
    const remediesData = remediesResponse.data
    setRemedies(remediesData)
  }

  useEffect(() =>  {
    getListOfRemedies()
  },[])

  
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
          {remedies.map(remedy => {
            return (
              <tr key={remedy.id}>
                <td>{remedy.name}</td>
                <td>{FormatterData.format(new Date(remedy.published_at))}</td>
                <td>{remedy.company}</td>
              </tr>
            )
          })}
        </tbody>
      </TableContainer>
  )
}
