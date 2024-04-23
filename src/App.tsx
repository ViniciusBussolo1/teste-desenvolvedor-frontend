import { RouterProvider } from 'react-router-dom'
import { RemediesProvider } from './context/RemediesProvider'
import { router } from './routes'
import { Toaster } from 'sonner'

function App() {
  return (
    <>
      <RemediesProvider>
        <Toaster
          toastOptions={{
            style: {
              background: '#FFF',
              padding: '1rem',
            },
          }}
          richColors={true}
        />
        <RouterProvider router={router} />
      </RemediesProvider>
    </>
  )
}

export default App
