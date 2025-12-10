<template>
  <div class="flex border-b border-gray-200">
    <button
      v-for="tab in tabs"
      :key="tab.value"
      type="button"
      @click="$emit('update:modelValue', tab.value)"
      :class="[
        'tab-button',
        modelValue === tab.value ? 'tab-button-active' : 'tab-button-inactive'
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
