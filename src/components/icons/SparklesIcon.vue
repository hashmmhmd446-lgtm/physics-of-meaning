<template>
  <svg 
    :class="className"
    fill="none" 
    stroke="currentColor" 
    viewBox="0 0 24 24" 
    xmlns="http://www.w3.org/2000/svg"
  >
    <path 
      stroke-linecap="round" 
      stroke-linejoin="round" 
      stroke-width="2" 
      d="M5 3l1.5 1.5L5 6 3.5 4.5 5 3zM12 3l1.5 1.5L12 6l-1.5-1.5L12 3zM19 3l1.5 1.5L19 6l-1.5-1.5L19 3zM5 12l1.5 1.5L5 15l-1.5-1.5L5 12zM12 12l1.5 1.5L12 15l-1.5-1.5L12 12zM19 12l1.5 1.5L19 15l-1.5-1.5L19 12zM5 21l1.5-1.5L5 18l-1.5 1.5L5 21zM12 21l1.5-1.5L12 18l-1.5 1.5L12 21zM19 21l1.5-1.5L19 18l-1.5 1.5L19 21z"
    />
  </svg>
</template>

<script setup lang="ts">
interface Props {
  className?: string
}

withDefaults(defineProps<Props>(), {
  className: 'w-6 h-6'
})
</script>

