// 导出所有组件
export { default as CCollapse } from './components/Collapse/index.vue'
export { default as CCollapseGroup } from './components/Collapse/CollapseGroup.vue'
export { default as CBadge } from './components/Badge/index.vue'

// 导出类型定义
export type { CollapseProps, CollapseEmits } from './components/Collapse/types'
export type { BadgeProps } from './components/Badge/types'

// 安装函数
import type { App } from 'vue'
import CCollapse from './components/Collapse/index.vue'
import CCollapseGroup from './components/Collapse/CollapseGroup.vue'
import CBadge from './components/Badge/index.vue'

const components = {
  CCollapse,
  CCollapseGroup,
  CBadge
}

export default {
  install(app: App) {
    Object.keys(components).forEach(key => {
      app.component(key, components[key as keyof typeof components])
    })
  }
}
