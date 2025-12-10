<template>
  <div class="flex border-b border-gray-200">
    <button
      v-for="tab in tabs"
      :key="tab.value"
      type="button"
      @click="$emit('update:modelValue', tab.value)"
      :class="[
        'flex-1 py-3 px-4 text-sm font-medium transition-all duration-200',
        modelValue === tab.value
          ? 'text-gray-900 border-b-2 border-gray-900'
          : 'text-gray-500 border-b-2 border-transparent hover:text-gray-700'
      ]"
    >
      <div class="flex items-center justify-center gap-2">
        <component :is="tab.icon" class="w-4 h-4" />
        <span>{{ tab.label }}</span>
      </div>
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
