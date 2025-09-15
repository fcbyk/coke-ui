export type BadgeSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl'
export type BadgeVariant = 'solid' | 'light' | 'outline'
export type BadgeStatus = 'success' | 'warning' | 'error' | 'info'

export interface BadgeProps {
  /** 文本内容（也可用默认 slot 覆盖） */
  text?: string
  /** 背景或主题色（solid/outline 作为主色，light 用于边框与文本） */
  color?: string
  /** 文本颜色（solid 默认白色，其他模式会根据主题色调整） */
  textColor?: string
  /** 尺寸预设 */
  size?: BadgeSize
  /** 是否圆角（与 pill 不冲突） */
  rounded?: boolean
  /** 自定义圆角（优先于 rounded 与 size 预设），如 4 或 '12px' */
  radius?: number | string
  /** 胶囊形状（完全圆角） */
  pill?: boolean
  /** 展示风格 */
  variant?: BadgeVariant
  /** 语义状态，应用内置预设颜色 */
  status?: BadgeStatus
  /** 兼容字段：等价于 status */
  type?: BadgeStatus
  /** 是否充满父元素高度 */
  fullHeight?: boolean
  /** 最大宽度，数字视为 px，可传如 '10rem' */
  maxWidth?: number | string
  /** 最大高度，数字视为 px，可传如 '2rem' */
  maxHeight?: number | string
  /** aria 标签描述 */
  ariaLabel?: string
  /** 自定义内联样式 */
  customStyle?: Record<string, string>
}


