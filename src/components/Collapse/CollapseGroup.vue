<template>
  <div :class="groupClasses">
    <slot />
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'

export interface CollapseGroupProps {
  /** 自定义类名 */
  customClass?: string
}

const props = withDefaults(defineProps<CollapseGroupProps>(), { customClass: '' })

const groupClasses = computed(() => {
  return [
    'c-collapse-group',
    props.customClass
  ].filter(Boolean)
})
</script>

<style scoped>
.c-collapse-group {
  display: flex;
  flex-direction: column;
  gap: 12px;
}
</style>
