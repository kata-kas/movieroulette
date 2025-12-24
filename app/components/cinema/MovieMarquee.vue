<script setup lang="ts">
interface Props {
  reverse?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  reverse: false,
})

// Generate placeholder movie data for the marquee
const movies = Array.from({ length: 12 }, (_, i) => ({
  id: `marquee-${i}`,
  title: `Film ${i + 1}`,
  year: 2020 + i,
  genre: 'Drama',
  plot: 'A cinematic masterpiece',
  imageUrl: `https://picsum.photos/seed/movie_poster_${i + (props.reverse ? 30 : 0)}/400/600`,
  rating: '8.0',
}))

// Duplicate for seamless loop
const marqueeMovies = [...movies, ...movies]
</script>

<template>
  <div class="relative py-16 overflow-hidden bg-black/40 border-y border-white/5">
    <div :class="reverse ? 'animate-marquee-reverse flex' : 'animate-marquee flex'">
      <div
        v-for="(movie, i) in marqueeMovies"
        :key="i"
        class="mx-6 w-48 md:w-64 aspect-[2/3] rounded-3xl overflow-hidden shadow-[0_25px_60px_-15px_rgba(0,0,0,0.8)] ring-1 ring-white/10 group relative flex-shrink-0"
      >
        <img
          :src="movie.imageUrl"
          alt="poster"
          class="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000 group-hover:scale-110"
        />
        <div class="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-0 group-hover:opacity-100 transition-opacity p-6 flex items-end">
          <span class="text-[10px] font-black uppercase tracking-widest text-amber-500">View In Vault</span>
        </div>
      </div>
    </div>
  </div>
</template>
