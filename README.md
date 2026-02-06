# React 演练

## 初始化项目
### 安装
```bash
npm create vite@latest my-app -- --template react-ts
```
### 使用路由
1. 安装 react-router-dom
```bash
npm install react-router-dom
```
2. 独立路由文件：src/routes.tsx

### 配置路径别名
1. tsconfig.app.json
```json
{
  "compilerOptions": {
    "baseUrl": ".",
    "paths": {
      "@/*": ["src/*"]
    }
  }
}
```
2. vite.config.ts
```ts
import path from 'path'
export default defineConfig({
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },
})
```

### 使用 less
- 安装 less 即可，Vite 内置了对 less 的支持，无需额外配置。
```bash
pnpm install less --D
```

## 组件说明
### StrictMode
StrictMode模式下，开发环境中，组件的部分生命周期（如 useEffect、componentDidMount 等）执行两次（即“挂载-卸载-再挂载”），以帮助发现副作用问题。
```jsx
<React.StrictMode>
  <App />
</React.StrictMode>
```
