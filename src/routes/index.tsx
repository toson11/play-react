import { lazy } from 'react'
import type { RouteObject } from 'react-router-dom'
import performanceRoutes from '@/modules/performance/routes'

const Home = lazy(() => import('@/modules/home'))

export const routes: RouteObject[] = [
  {
    path: '/',
    element: <Home />,
  },
  ...performanceRoutes,
]
