
import React, { useState, useCallback, useMemo, Suspense, lazy } from 'react'
import './index.less'

// 1. React.memo - 避免不必要的渲染
const MemoizedCounter = React.memo(function MemoizedCounter({ 
  value, 
  label 
}: { 
  value: number
  label: string 
}) {
  console.log(`🔄 MemoizedCounter [${label}] 渲染`)
  return (
    <span className="counter-value">{value}</span>
  )
})

// 2. 懒加载组件
const LazyComp = lazy(() => import('./components/LazyComp'))

function Performance() {
  console.log('📦 Performance 组件渲染')
  const [countA, setCountA] = useState(0)
  const [countB, setCountB] = useState(0)

  // useCallback - 缓存函数引用
  const incrementA = useCallback(() => {
    setCountA((c) => c + 1)
  }, [])

  const incrementB = useCallback(() => {
    setCountB((c) => c + 1)
  }, [])

  // useMemo - 缓存计算结果
  const expensiveResultA = useMemo(() => {
    console.log('💰 计算 expensiveResultA (依赖 countA)')
    return countA * 2
  }, [countA])

  const expensiveResultB = useMemo(() => {
    console.log('💰 计算 expensiveResultB (依赖 countB)')
    return countB * 3
  }, [countB])

  return (
    <div className="performance-demo">
      <h1>⚡ React 性能优化演示</h1>
      <p className="intro">打开控制台查看 console.log 输出，观察组件渲染和计算的时机</p>

      {/* React.memo 演示 */}
      <section className="demo-section">
        <h2>1. React.memo - 避免不必要的子组件渲染</h2>
        <p className="description">
          当父组件重新渲染时，使用 <code>React.memo</code> 包裹的子组件只有在 props 变化时才会重新渲染。
          <br />
          <strong>试试：</strong>点击"增加 A"时，观察控制台只有 Counter A 重新渲染。
        </p>
        <div className="demo-content">
          <div className="counter-group">
            <div className="counter-item">
              <span className="counter-label">Counter A:</span>
              <MemoizedCounter value={countA} label="A" />
              <button onClick={incrementA}>增加 A</button>
            </div>
            <div className="counter-item">
              <span className="counter-label">Counter B:</span>
              <MemoizedCounter value={countB} label="B" />
              <button onClick={incrementB}>增加 B</button>
            </div>
          </div>
        </div>
      </section>

      {/* useMemo 演示 */}
      <section className="demo-section">
        <h2>2. useMemo - 缓存计算结果</h2>
        <p className="description">
          <code>useMemo</code> 只有在依赖项变化时才会重新计算，避免每次渲染都执行昂贵的计算。
          <br />
          <strong>试试：</strong>点击按钮时，观察控制台只有对应的计算被执行。
        </p>
        <div className="demo-content">
          <div className="result-group">
            <div className="result-item">
              <span>countA × 2 = </span>
              <span className="result-value">{expensiveResultA}</span>
            </div>
            <div className="result-item">
              <span>countB × 3 = </span>
              <span className="result-value">{expensiveResultB}</span>
            </div>
          </div>
        </div>
      </section>

      {/* useCallback 说明 */}
      <section className="demo-section">
        <h2>3. useCallback - 缓存函数引用</h2>
        <p className="description">
          <code>useCallback</code> 返回一个 memoized 回调函数，配合 <code>React.memo</code> 使用，
          避免因函数引用变化导致子组件不必要的重新渲染。
          <br />
          <strong>注意：</strong>上面的按钮点击事件都使用了 useCallback 包裹。
        </p>
      </section>

      {/* 懒加载演示 */}
      <section className="demo-section">
        <h2>4. React.lazy + Suspense - 代码分割与懒加载</h2>
        <p className="description">
          使用 <code>React.lazy</code> 动态导入组件，配合 <code>Suspense</code> 实现按需加载，
          减少首屏加载时间。
        </p>
        <div className="demo-content">
          <Suspense fallback={<div className="loading">⏳ 组件加载中...</div>}>
            <LazyComp />
          </Suspense>
        </div>
      </section>

      <footer className="tips">
        💡 <strong>提示：</strong>在实际项目中，应根据具体场景选择合适的优化手段，避免过度优化。
      </footer>
    </div>
  )
}

export default Performance


