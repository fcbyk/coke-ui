# Coke UI

[![npm (scoped)](https://img.shields.io/npm/v/@fcbyk/vue-ui.svg)](https://www.npmjs.com/package/@fcbyk/vue-ui)
[![license](https://img.shields.io/npm/l/@fcbyk/vue-ui.svg)](https://github.com/fcbyk/coke-ui/blob/main/LICENSE)
[![bundle size](https://img.shields.io/bundlephobia/minzip/@fcbyk/vue-ui)](https://bundlephobia.com/package/@fcbyk/vue-ui)

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

## 全局引入

```typescript
import { createApp } from 'vue'
import CokeUI from '@fcbyk/vue-ui'
import '@fcbyk/vue-ui/style.css'
import App from './App.vue'

const app = createApp(App)
app.use(CokeUI)
app.mount('#app')
```

## 按需引入

```typescript
import { CCollapse, CBadge } from '@fcbyk/vue-ui'
import '@fcbyk/vue-ui/style.css'
```