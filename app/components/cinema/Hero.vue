<script setup lang="ts">
const emit = defineEmits<{
  start: []
}>()
</script>

<template>
  <section class="relative pt-60 pb-32 px-6 overflow-hidden min-h-screen flex items-center justify-center">
    <div class="light-leak"></div>
    <div class="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl aspect-video bg-amber-500/5 rounded-full blur-[200px] -z-10"></div>

    <div class="max-w-6xl mx-auto text-center relative z-10">
      <div class="inline-flex items-center gap-3 px-6 py-2 rounded-full bg-white/5 border border-white/10 text-amber-500 text-[10px] font-black tracking-[0.4em] uppercase mb-16 shadow-2xl backdrop-blur-md animate-bounce">
        A Human Experiment in Cinema
      </div>

      <h1 class="text-6xl md:text-[11rem] font-display font-black leading-[0.8] mb-12 tracking-tighter">
        Films are meant <br />
        <span class="text-gradient italic">to be shared.</span>
      </h1>

      <p class="text-xl md:text-2xl text-gray-400 max-w-3xl mx-auto mb-20 leading-relaxed font-light">
        Ditch the algorithms that feed you the same tropes. Meet a stranger, trade a masterpiece, and rediscover why we love movies.
      </p>

      <div class="flex flex-col sm:flex-row items-center justify-center gap-8">
        <UiButton size="lg" @click="emit('start')">
          Begin The Ritual
          <Icon name="mdi:lightning-bolt" class="ml-4 inline" />
        </UiButton>
        <UiButton variant="secondary" size="lg">
          Watch The Trailer
        </UiButton>
      </div>

      <div class="mt-40 flex flex-wrap justify-center gap-12 opacity-30">
        <div class="text-xs font-black tracking-[0.3em] uppercase">Berlin</div>
        <div class="text-xs font-black tracking-[0.3em] uppercase">Cannes</div>
        <div class="text-xs font-black tracking-[0.3em] uppercase">Sundance</div>
        <div class="text-xs font-black tracking-[0.3em] uppercase">Venice</div>
        <div class="text-xs font-black tracking-[0.3em] uppercase">Toronto</div>
      </div>
    </div>
  </section>
</template>
