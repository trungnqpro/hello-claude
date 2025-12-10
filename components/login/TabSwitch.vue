<template>
  <div class="bg-gray-100 rounded-lg p-1 flex gap-1">
    <button
      v-for="tab in tabs"
      :key="tab.value"
      @click="$emit('update:modelValue', tab.value)"
      :class="[
        'tab-button',
        modelValue === tab.value ? 'tab-button-active' : 'tab-button-inactive'
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
