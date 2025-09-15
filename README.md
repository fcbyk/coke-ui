# Coke UI

个人Vue 3组件库，用于快速开发。

## 特性

- 🚀 基于Vue 3 + TypeScript
- 📦 开箱即用的高质量组件
- 🎨 现代化设计风格
- 📱 响应式设计
- 🔧 支持按需引入
- 📖 完整的TypeScript支持

## 安装

```bash
npm install coke-ui
```

## 快速开始

### 全局引入

```typescript
import { createApp } from 'vue'
import CokeUI from 'coke-ui'
import App from './App.vue'

const app = createApp(App)
app.use(CokeUI)
app.mount('#app')
```

### 按需引入

```typescript
import { CCollapse, CBadge } from 'coke-ui'
```