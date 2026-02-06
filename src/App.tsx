import { BrowserRouter as Router, useRoutes, Link } from 'react-router-dom'
import { Suspense } from 'react'
import { routes } from '@/routes'
import './App.less'

function AppRoutes() {
  return useRoutes(routes)
}

function App() {
  return (
    <Router>
      <header className="app-header">
        <Link to="/" className="logo">React 演练</Link>
      </header>
      <main className="app-main">
        <Suspense fallback={<div>加载中...</div>}>
          <AppRoutes />
        </Suspense>
      </main>
    </Router>
  )
}

export default App
