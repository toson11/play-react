import { Link } from 'react-router-dom'
import './index.less'

export default function Home() {
  return (
    <div className="home">
      <h1>React 演示项目</h1>
      <nav className="nav-links">
        <Link to="/performance/api" className="nav-link">
          <div className="nav-card">
            <h2>性能优化</h2>
            <p>演示 React.memo, useMemo, useCallback, 懒加载等性能优化技术</p>
          </div>
        </Link>
      </nav>
    </div>
  )
}
