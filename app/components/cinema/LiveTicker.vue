<script setup lang="ts">
const events = [
  "Alex and Maya swapped 'Persona' for 'Mulholland Drive'",
  "New curator joined from Paris, France",
  "Marco added 'The Holy Mountain' to the Vault",
  "Deep discussion trending: The use of red in Kieslowski",
  "Sara and Tom matched on 70s Japanese Horror",
  "1,242 swaps currently in progress worldwide"
]

const tickerEvents = [...events, ...events]
</script>

<template>
  <div class="fixed top-0 left-0 right-0 w-full bg-white/5 border-y border-white/5 py-3 overflow-hidden z-[110]">
    <div class="animate-marquee-fast whitespace-nowrap flex items-center gap-12">
      <div v-for="(event, i) in tickerEvents" :key="i" class="flex items-center gap-3">
        <span class="w-1 h-1 rounded-full bg-amber-500"></span>
        <span class="text-[10px] font-black uppercase tracking-[0.2em] text-gray-500">{{ event }}</span>
      </div>
    </div>
  </div>
</template>
