<template>
  <div :class="cardClasses">
    <slot />
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'

interface Props {
  variant?: 'default' | 'glass'
  className?: string
}

const props = withDefaults(defineProps<Props>(), {
  variant: 'default',
  className: ''
})

const cardClasses = computed(() => {
  const baseClasses = 'rounded-lg shadow-lg'
  const variantClasses = {
    default: 'bg-white border border-gray-200',
    glass: 'bg-white/10 backdrop-blur-lg border-white/20'
  }
  
  return `${baseClasses} ${variantClasses[props.variant]} ${props.className}`
})
</script>

