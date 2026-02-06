import { lazy } from 'react'
import type { RouteObject } from 'react-router-dom'

const PerformanceApi = lazy(() => import('./performance-api'))

const routes: RouteObject[] = [
  {
    path: '/performance',
    children: [
      { path: 'api', element: <PerformanceApi /> },
    ],
  },
]

export default routes
