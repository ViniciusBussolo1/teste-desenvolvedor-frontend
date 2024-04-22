import { createBrowserRouter } from 'react-router-dom'
import { Home } from './pages/home'
import { DefaultLayout } from './layouts/DefaultLayout'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <DefaultLayout />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
    ],
  },
])
