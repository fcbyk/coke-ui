import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'
import dts from 'vite-plugin-dts'

export default defineConfig(({ mode }) => {
  const isLib = mode === 'lib'
  
  if (isLib) {
    // 构建组件库
    return {
      plugins: [
        vue(),
        dts({
          insertTypesEntry: true,
          include: ['src/components/**/*', 'src/composables/**/*', 'src/index.ts']
        })
      ],
      build: {
        lib: {
          entry: resolve(__dirname, 'src/index.ts'),
          name: 'CokeUI',
          fileName: (format) => `index.${format}.js`
        },
        rollupOptions: {
          external: ['vue'],
          output: {
            exports: 'named',
            globals: {
              vue: 'Vue'
            }
          }
        }
      }
    }
  }
  
  // 开发环境 - 用于组件库开发
  return {
    plugins: [vue()],
    resolve: {
      alias: {
        '@': resolve(__dirname, 'src')
      }
    },
    server: {
      port: 3000,
      open: true
    }
  }
})
