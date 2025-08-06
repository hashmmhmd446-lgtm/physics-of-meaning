<template>
  <input
    :type="type"
    :placeholder="placeholder"
    :value="modelValue"
    :required="required"
    :class="inputClasses"
    @input="$emit('update:modelValue', ($event.target as HTMLInputElement).value)"
  />
</template>

<script setup lang="ts">
import { computed } from 'vue'

interface Props {
  type?: string
  placeholder?: string
  modelValue?: string
  required?: boolean
  className?: string
}

const props = withDefaults(defineProps<Props>(), {
  type: 'text',
  placeholder: '',
  modelValue: '',
  required: false,
  className: ''
})

defineEmits<{
  'update:modelValue': [value: string]
}>()

const inputClasses = computed(() => {
  const baseClasses = 'w-full px-3 py-2 rounded-lg border focus:outline-none focus:ring-2 focus:ring-purple-400'
  const themeClasses = 'bg-white/20 border-white/30 text-white placeholder:text-purple-200'
  
  return `${baseClasses} ${themeClasses} ${props.className}`
})
</script>

