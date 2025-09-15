<template>
  <span
    :class="badgeClasses"
    :style="badgeStyles"
    role="status"
    :aria-label="ariaLabel || text"
  >
    <slot>{{ text }}</slot>
  </span>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import type { BadgeProps, BadgeStatus } from './types'

const props = withDefaults(defineProps<BadgeProps>(), {
  text: '',
  color: '#1677ff',
  textColor: '#ffffff',
  size: 'md',
  rounded: true,
  variant: 'solid',
  pill: false
})

const sizeToken = computed(() => {
  switch (props.size) {
    case 'xs':
      return { height: 18, paddingX: 6, fontSize: 11, radius: 8 }
    case 'sm':
      return { height: 20, paddingX: 8, fontSize: 12, radius: 9 }
    case 'md':
      return { height: 22, paddingX: 10, fontSize: 12, radius: 10 }
    case 'lg':
      return { height: 26, paddingX: 12, fontSize: 13, radius: 12 }
    case 'xl':
      return { height: 30, paddingX: 14, fontSize: 14, radius: 14 }
    default:
      return { height: 22, paddingX: 10, fontSize: 12, radius: 10 }
  }
})

const badgeClasses = computed(() => {
  return [
    'c-badge',
    `c-badge--${props.variant}`,
    `c-badge--${props.size}`,
    { 'c-badge--rounded': props.rounded, 'c-badge--pill': props.pill }
  ]
})

const badgeStyles = computed(() => {
  const statusColorMap: Record<BadgeStatus, string> = {
    success: '#52c41a',
    warning: '#faad14',
    error: '#ff4d4f',
    info: '#1677ff'
  }

  const resolvedStatus = (props.status || props.type) as BadgeStatus | undefined
  const themeColor = resolvedStatus ? statusColorMap[resolvedStatus] : props.color

  const h = props.fullHeight ? '100%' : `${sizeToken.value.height}px`
  const px = `${sizeToken.value.paddingX}px`
  const computeRadius = () => {
    if (props.pill) return `${sizeToken.value.height / 2}px`
    if (props.radius !== undefined && props.radius !== null) {
      return typeof props.radius === 'number' ? `${props.radius}px` : String(props.radius)
    }
    return `${sizeToken.value.radius}px`
  }
  const radiusBase = computeRadius()

  const styles: Record<string, string> = {
    '--badge-bg': themeColor,
    '--badge-color': props.textColor,
    '--badge-border': themeColor,
    '--badge-height': h,
    '--badge-px': px,
    '--badge-radius': radiusBase,
    '--badge-font-size': `${sizeToken.value.fontSize}px`
  }

  if (props.variant === 'light') {
    styles['--badge-bg'] = 'color-mix(in srgb, var(--badge-border) 12%, transparent)'
    styles['--badge-color'] = themeColor
  }

  if (props.variant === 'outline') {
    styles['--badge-bg'] = 'transparent'
    styles['--badge-color'] = themeColor
  }

  // 直接内联颜色，确保在不支持 CSS 变量或构建差异时也生效
  if (props.variant === 'solid') {
    styles['backgroundColor'] = themeColor
    styles['borderColor'] = themeColor
    styles['color'] = props.textColor
  } else if (props.variant === 'light') {
    styles['backgroundColor'] = ''
    styles['borderColor'] = themeColor
    styles['color'] = themeColor
  } else if (props.variant === 'outline') {
    styles['backgroundColor'] = 'transparent'
    styles['borderColor'] = themeColor
    styles['color'] = themeColor
  }

  if (props.maxWidth) styles['maxWidth'] = typeof props.maxWidth === 'number' ? `${props.maxWidth}px` : props.maxWidth
  if (props.maxHeight) styles['maxHeight'] = typeof props.maxHeight === 'number' ? `${props.maxHeight}px` : props.maxHeight

  // 若未显式传入 textColor，则在非 solid 模式下使用主题色；solid 模式默认白色
  if (!props.textColor) {
    styles['--badge-color'] = props.variant === 'solid' ? '#ffffff' : themeColor
    if (props.variant === 'solid') styles['color'] = '#ffffff'
    else styles['color'] = themeColor
  }
  if (props.customStyle) Object.assign(styles, props.customStyle)

  return styles
})
</script>

<style scoped>
.c-badge {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  height: var(--badge-height);
  max-height: var(--badge-height);
  padding: 0 var(--badge-px);
  border-radius: var(--badge-radius);
  background: var(--badge-bg);
  color: var(--badge-color);
  border: 1px solid var(--badge-border);
  font-size: var(--badge-font-size);
  font-weight: 500;
  line-height: 1;
  white-space: nowrap;
  vertical-align: middle;
  user-select: none;
  box-sizing: border-box;
}



.c-badge--pill { border-radius: 999px; }

/* 文本溢出时可省略号 */
.c-badge {
  overflow: hidden;
  text-overflow: ellipsis;
}

@media (prefers-color-scheme: dark) {
  .c-badge.c-badge--light {
    filter: saturate(0.9) brightness(0.95);
  }
}
</style>

