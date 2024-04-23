import { RouterProvider } from 'react-router-dom'
import { RemediesProvider } from './context/RemediesProvider'
import { router } from './routes'

function App() {
  return (
    <>
      <RemediesProvider>
        <RouterProvider router={router} />
      </RemediesProvider>
    </>
  )
}

export default App
