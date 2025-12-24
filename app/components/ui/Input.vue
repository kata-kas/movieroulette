<script setup lang="ts">
interface Props {
  modelValue: string
  placeholder?: string
  type?: string
  disabled?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  placeholder: '',
  type: 'text',
  disabled: false,
})

const emit = defineEmits<{
  'update:modelValue': [value: string]
}>()

const handleInput = (event: Event) => {
  const target = event.target as HTMLInputElement
  emit('update:modelValue', target.value)
}
</script>

<template>
  <input
    :type="type"
    :value="modelValue"
    :placeholder="placeholder"
    :disabled="disabled"
    @input="handleInput"
    class="w-full bg-white/5 border border-white/10 rounded-full py-10 px-16 text-2xl outline-none focus:border-amber-500 transition-all shadow-inner placeholder:opacity-30 disabled:opacity-50"
  />
</template>
