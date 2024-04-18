import { RouterProvider } from 'react-router-dom'
import { Header } from './Components/Header'
import { router } from './routes'
import { RemediesProvider } from './context/RemediesProvider'

function App() {
  return (
    <>
      <RemediesProvider>
        <Header />
        <RouterProvider router={router} />
      </RemediesProvider>
    </>
  )
}

export default App
