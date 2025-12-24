<script setup lang="ts">
interface Props {
  variant?: 'primary' | 'secondary' | 'ghost'
  size?: 'sm' | 'md' | 'lg'
  disabled?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  variant: 'primary',
  size: 'md',
  disabled: false,
})

const buttonClasses = computed(() => {
  const base = 'font-bold rounded-xl transition-all active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed'

  const variants = {
    primary: 'bg-white text-black hover:bg-amber-500 hover:text-white shadow-xl',
    secondary: 'bg-white/5 border border-white/10 hover:bg-white/10 backdrop-blur-xl',
    ghost: 'bg-transparent hover:bg-white/5',
  }

  const sizes = {
    sm: 'px-6 py-2 text-sm',
    md: 'px-8 py-2.5 text-base',
    lg: 'px-16 py-7 text-xl',
  }

  return [base, variants[props.variant], sizes[props.size]].join(' ')
})
</script>

<template>
  <button
    :class="buttonClasses"
    :disabled="disabled"
  >
    <slot />
  </button>
</template>
