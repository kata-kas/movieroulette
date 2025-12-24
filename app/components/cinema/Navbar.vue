<script setup lang="ts">
interface Props {
  isLanding: boolean
}

const props = defineProps<Props>()

const emit = defineEmits<{
  start: []
}>()

const handleReload = () => {
  window.location.reload()
}
</script>

<template>
  <nav class="fixed top-12 left-0 right-0 z-[100] glass-card border-b border-white/10 px-6 py-4">
    <div class="max-w-7xl mx-auto flex items-center justify-between">
      <div class="flex items-center gap-2 cursor-pointer" @click="handleReload">
        <div class="w-10 h-10 bg-gradient-to-tr from-amber-500 to-red-600 rounded-lg flex items-center justify-center text-white shadow-lg shadow-red-500/20">
          <Icon name="mdi:film" class="text-lg" />
        </div>
        <span class="text-2xl font-display font-bold tracking-tight">Movie<span class="text-amber-500">Roulette</span></span>
      </div>

      <div v-if="isLanding" class="hidden lg:flex items-center gap-10 text-[10px] font-black uppercase tracking-[0.2em] text-gray-500">
        <a href="#manifesto" class="hover:text-white transition-colors">Manifesto</a>
        <a href="#ritual" class="hover:text-white transition-colors">The Ritual</a>
        <a href="#community" class="hover:text-white transition-colors">Community</a>
      </div>

      <div class="flex items-center gap-4">
        <div v-if="isLanding">
          <UiButton @click="emit('start')">
            Launch Theatre
          </UiButton>
        </div>
        <div v-else class="flex items-center gap-3 bg-white/5 px-4 py-2 rounded-xl border border-white/10">
          <div class="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
          <span class="text-[10px] uppercase font-black tracking-widest opacity-70">Active Session</span>
        </div>
      </div>
    </div>
  </nav>
</template>
