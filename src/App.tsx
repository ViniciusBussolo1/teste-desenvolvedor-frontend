import { RouterProvider } from 'react-router-dom'
import { Header } from './Components/Header'
import { router } from './routes'

function App() {
  return (
    <>
      <Header />
      <RouterProvider router={router} />
    </>
  )
}

export default App
