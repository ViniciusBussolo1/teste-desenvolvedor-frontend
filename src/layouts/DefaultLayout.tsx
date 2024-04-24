import { Toaster } from 'sonner'
import { Header } from '../components/Header'
import { Outlet } from 'react-router-dom'

export function DefaultLayout() {
  return (
    <>
      <Toaster
        toastOptions={{
          style: {
            background: '#FFF',
            padding: '1rem',
          },
        }}
        richColors={true}
      />
      <Header />
      <Outlet />
    </>
  )
}
