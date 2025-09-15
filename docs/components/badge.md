# Badge 徽章

<script setup>
import CBadge from '../../src/components/Badge/index.vue'
</script>

用于呈现状态/标签的小型圆角矩形，支持颜色、尺寸、变体与胶囊形态，宽度随内容自适应。

## 基本用法

<CBadge text="默认" />
<CBadge text="浅色" variant="light" color="#52c41a" />
<CBadge text="描边" variant="outline" color="#fa8c16" />
<CBadge text="胶囊" pill color="#722ed1" />

```vue
<template>
  <div style="display:flex; gap:12px; align-items:center;">
    <CBadge text="默认" />
    <CBadge text="浅色" variant="light" color="#52c41a" />
    <CBadge text="描边" variant="outline" color="#fa8c16" />
    <CBadge text="胶囊" pill color="#722ed1" />
  </div>
</template>
```

## 宽度与高度
- 宽度：随内容自适应，支持 `maxWidth` 限制并自动省略号。
- 高度：使用 `size` 选择预设高度；设置 `fullHeight` 可贴合父元素高度（父元素需有确定高度）。

```vue
<template>
  <div style="height:40px; display:flex; gap:12px; align-items:center;">
    <CBadge :maxWidth="120">这是一段较长的文字</CBadge>
    <CBadge text="贴合父高" :fullHeight="true" size="lg" />
  </div>
</template>
```

## 尺寸
`size` 可选：`'xs' | 'sm' | 'md' | 'lg' | 'xl'`

<CBadge size="xs" text="XS" />
<CBadge size="sm" text="SM" />
<CBadge size="md" text="MD" />
<CBadge size="lg" text="LG" />
<CBadge size="xl" text="XL" />

```vue
<template>
  <div style="display:flex; gap:12px; align-items:center;">
    <CBadge size="xs" text="XS" />
    <CBadge size="sm" text="SM" />
    <CBadge size="md" text="MD" />
    <CBadge size="lg" text="LG" />
    <CBadge size="xl" text="XL" />
  </div>
</template>
```

### 胶囊形态尺寸

<CBadge pill size="xs" text="XS" />
<CBadge pill size="sm" text="SM" />
<CBadge pill size="md" text="MD" />
<CBadge pill size="lg" text="LG" />
<CBadge pill size="xl" text="XL" />

```vue
<template>
  <div style="display:flex; gap:12px; align-items:center;">
    <CBadge pill size="xs" text="XS" />
    <CBadge pill size="sm" text="SM" />
    <CBadge pill size="md" text="MD" />
    <CBadge pill size="lg" text="LG" />
    <CBadge pill size="xl" text="XL" />
  </div>
</template>
```

## 颜色与变体
- `variant`：`'solid' | 'light' | 'outline'`
- `color`：主题色，`textColor`：文本色（solid 默认白色）

```vue
<template>
  <div style="display:flex; gap:12px; align-items:center;">
    <CBadge text="Solid" color="#1677ff" />
    <CBadge text="Light" variant="light" color="#1677ff" />
    <CBadge text="Outline" variant="outline" color="#1677ff" />
  </div>
</template>
```

## 状态预设颜色
建议使用以下默认色值：

- 成功 success: `#52c41a`
- 警告 warning: `#faad14`
- 错误 error: `#ff4d4f`
- 提示 info: `#1677ff`

示例：

```vue
<template>
  <div style="display:flex; gap:12px; flex-wrap:wrap; align-items:center;">
    <!-- Solid -->
    <CBadge text="Success" color="#52c41a" />
    <CBadge text="Warning" color="#faad14" />
    <CBadge text="Error" color="#ff4d4f" />
    <CBadge text="Info" color="#1677ff" />

    <!-- Light -->
    <CBadge text="Success" variant="light" color="#52c41a" />
    <CBadge text="Warning" variant="light" color="#faad14" />
    <CBadge text="Error" variant="light" color="#ff4d4f" />
    <CBadge text="Info" variant="light" color="#1677ff" />

    <!-- Outline -->
    <CBadge text="Success" variant="outline" color="#52c41a" />
    <CBadge text="Warning" variant="outline" color="#faad14" />
    <CBadge text="Error" variant="outline" color="#ff4d4f" />
    <CBadge text="Info" variant="outline" color="#1677ff" />
  </div>
</template>
```

### 使用 status 快速应用
无需手动设置 color，直接用 `status`：

<CBadge text="Success" status="success" />
<CBadge text="Warning" status="warning" />
<CBadge text="Error" status="error" />
<CBadge text="Info" status="info" />

```vue
<template>
  <div style="display:flex; gap:12px; align-items:center;">
    <CBadge text="Success" status="success" />
    <CBadge text="Warning" status="warning" />
    <CBadge text="Error" status="error" />
    <CBadge text="Info" status="info" />
  </div>
</template>
```

## 胶囊形态
```vue
<template>
  <div style="display:flex; gap:12px; align-items:center;">
    <CBadge text="Tag" pill />
    <CBadge text="长标签" pill color="#fa541c" />
  </div>
</template>
```

## 自定义圆角
直接通过 `radius` 指定圆角（优先级高于 `rounded` 与尺寸预设）。

<CBadge text="4px" :radius="4" />
<CBadge text="8px" :radius="8" />
<CBadge text="12px" :radius="12" />
<CBadge text="16px" :radius="16" />
<CBadge text="24px" :radius="24" />

```vue
<template>
  <div style="display:flex; gap:12px; align-items:center;">
    <CBadge text="4px" :radius="4" />
    <CBadge text="8px" :radius="8" />
    <CBadge text="12px" :radius="12" />
    <CBadge text="16px" :radius="16" />
    <CBadge text="24px" :radius="24" />
  </div>
</template>
```

## Props
| 名称 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| text | 文本内容（也可用默认插槽） | string | '' |
| color | 主题色 | string | '#1677ff' |
| textColor | 文本色 | string | '#ffffff' |
| size | 尺寸预设 | 'xs'\|'sm'\|'md'\|'lg'\|'xl' | 'md' |
| rounded | 是否圆角 | boolean | true |
| pill | 胶囊形状 | boolean | false |
| variant | 展示风格 | 'solid'\|'light'\|'outline' | 'solid' |
| fullHeight | 是否贴合父元素高度 | boolean | false |
| maxWidth | 最大宽度（数字视为 px） | number\|string | - |
| maxHeight | 最大高度（数字视为 px） | number\|string | - |
| ariaLabel | 无障碍标签 | string | - |
| customStyle | 自定义内联样式 | Record<string, string> | - |

## 无障碍
组件带有 `role="status"` 与 `aria-label`，可读性良好。

## 主题化建议
建议在设计系统中统一定义状态色（如成功/警告等），通过传入 `color` 实现；需要时可扩展 `status` 语义属性。
