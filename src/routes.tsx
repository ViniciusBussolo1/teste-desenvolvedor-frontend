import { createBrowserRouter } from 'react-router-dom'
import { Home } from './pages/home'
import { DefaultLayout } from './layouts/DefaultLayout'
import { UpdateRemedy } from './pages/UpdateRemedy'
import { NewRemedy } from './pages/NewRemedy'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <DefaultLayout />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/remedy/new',
        element: <NewRemedy />,
      },
      {
        path: '/remedy/:id/update',
        element: <UpdateRemedy />,
      },
    ],
  },
])
