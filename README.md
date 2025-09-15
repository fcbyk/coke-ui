# Coke UI

![npm (scoped)](https://img.shields.io/npm/v/%40fcbyk%2Fvue-ui.svg)
![license](https://img.shields.io/npm/l/%40fcbyk%2Fvue-ui.svg)
![bundle size](https://img.shields.io/bundlephobia/minzip/%40fcbyk%2Fvue-ui)

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
npm install @fcbyk/vue-ui
```

## 快速开始

### 全局引入

```typescript
import { createApp } from 'vue'
import CokeUI from '@fcbyk/vue-ui'
import App from './App.vue'

const app = createApp(App)
app.use(CokeUI)
app.mount('#app')
```

### 按需引入

```typescript
import { CCollapse, CBadge } from '@fcbyk/vue-ui'
```