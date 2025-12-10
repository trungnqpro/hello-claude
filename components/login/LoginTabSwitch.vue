<template>
  <div class="bg-gray-100 rounded-lg p-1 flex gap-1">
    <button
      v-for="tab in tabs"
      :key="tab.value"
      type="button"
      @click="$emit('update:modelValue', tab.value)"
      :class="[
        'flex-1 py-2.5 px-4 text-sm font-medium transition-all duration-200 rounded-md',
        modelValue === tab.value
          ? 'bg-white text-gray-900 shadow-sm'
          : 'text-gray-600 hover:text-gray-900'
      ]"
    >
      <span>{{ tab.label }}</span>
    </button>
  </div>
</template>

<script setup lang="ts">
interface Tab {
  label: string
  value: string
  icon: any
}

interface Props {
  tabs: Tab[]
  modelValue: string
}

defineProps<Props>()
defineEmits<{
  'update:modelValue': [value: string]
}>()
</script>
