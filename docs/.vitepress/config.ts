import { defineConfig } from 'vitepress'
import { resolve } from 'path'

export default defineConfig({
  title: 'Coke UI',
  description: '个人Vue组件库，用于快速开发',
  
  // 主题配置
  themeConfig: {

    // 侧边栏
    sidebar: {
      '/': [
        {
          text: '基础组件',
          items: [
            { text: 'Collapse 折叠面板', link: '/components/collapse' },
            { text: 'Badge 徽章', link: '/components/badge' }
          ]
        }
      ],
    },

    // 社交链接
    socialLinks: [
      { icon: 'github', link: 'https://github.com/fcbyk/coke-ui' }
    ],


    // 搜索
    search: {
      provider: 'local'
    }
  },

  // Vite配置
  vite: {
    resolve: {
      alias: {
        '@': resolve(__dirname, '../../src')
      }
    }
  },
})
