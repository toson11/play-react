import { lazy } from 'react'
import type { RouteObject } from 'react-router-dom'

const Home = lazy(() => import('@/modules/home'))

// 自动收集 modules 下所有的 routes.tsx
const routeModules = import.meta.glob<{ default: RouteObject[] }>(
  '@/modules/**/routes.tsx',
  { eager: true }
)

// 合并所有模块路由
const moduleRoutes = Object.values(routeModules).flatMap((mod) => mod.default)

export const routes: RouteObject[] = [
  {
    path: '/',
    element: <Home />,
  },
  ...moduleRoutes,
]
