<script setup lang="ts">
import type { MovieRecommendation } from '#shared/types/movie'

interface Props {
  movie: MovieRecommendation
}

const props = defineProps<Props>()

const emit = defineEmits<{
  select: [movie: MovieRecommendation]
}>()
</script>

<template>
  <div
    class="group cursor-pointer transform hover:-translate-y-4 transition-all duration-700"
    @click="emit('select', movie)"
  >
    <div class="aspect-[2/3] rounded-[2rem] overflow-hidden mb-8 relative shadow-[0_30px_70px_rgba(0,0,0,0.7)] ring-1 ring-white/10 group-hover:ring-amber-500/50">
      <img
        :src="movie.imageUrl"
        :alt="movie.title"
        class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000"
      />
      <div class="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-8">
        <button class="w-full py-4 bg-amber-500 text-black font-black uppercase tracking-widest text-[11px] rounded-2xl transform translate-y-6 group-hover:translate-y-0 transition-transform">
          Match with this
        </button>
      </div>
    </div>
    <h4 class="font-bold text-xl truncate px-4">{{ movie.title }}</h4>
    <p class="text-[11px] text-gray-500 px-4 font-black uppercase tracking-[0.2em] mt-2">
      {{ movie.year }} • {{ movie.genre.split(',')[0] }}
    </p>
  </div>
</template>
