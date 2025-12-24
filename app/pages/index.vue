<script setup lang="ts">

import {AppState} from "#shared/types";

const {
  currentState,
  transitionToState,
} = useAppState()

const isLanding = computed(() => currentState.value === AppState.LANDING)

const handleStart = () => {
  transitionToState(AppState.PICKING_MOVIE)
}
</script>

<template>
  <div class="min-h-screen bg-[#050505] selection:bg-amber-500 selection:text-black">
    <CinemaNavbar :is-landing="isLanding" @start="handleStart" />
    <div v-if="currentState === AppState.LANDING">
      <CinemaLiveTicker />
      <CinemaHero @start="handleStart" />

      <CinemaMovieMarquee />

      <section id="manifesto" class="max-w-7xl mx-auto px-6 py-40">
        <div class="grid lg:grid-cols-2 gap-24 items-center">
          <div class="space-y-12">
            <h2 class="text-6xl font-display font-bold leading-tight">
              A Sanctuary for <span class="text-gradient">Pure Taste.</span>
            </h2>
            <div class="space-y-8 text-xl text-gray-400 font-light leading-relaxed">
              <p>Algorithms have killed discovery. They feed us what we already like, trapping us in a loop of familiar tropes and safe choices.</p>
              <p>MovieRoulette is an intervention. We connect you with a living, breathing human whose cinematic soul is a mystery to you.</p>
              <p>One movie. One conversation. One new perspective. That is our entire mission.</p>
            </div>
          </div>
          <div class="relative group">
            <div class="absolute -inset-4 bg-gradient-to-tr from-amber-500/20 to-red-600/20 rounded-[3rem] blur-2xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
            <img
              src="https://images.unsplash.com/photo-1485846234645-a62644f84728?auto=format&fit=crop&q=80&w=1000"
              class="rounded-[3rem] shadow-2xl relative z-10 grayscale hover:grayscale-0 transition-all duration-1000"
              alt="cinema"
            />
          </div>
        </div>
      </section>

      <section id="ritual" class="bg-white/[0.02] border-y border-white/5 py-40 px-6">
        <div class="max-w-7xl mx-auto">
          <div class="text-center mb-24">
            <h2 class="text-5xl md:text-8xl font-display font-bold mb-8 italic">The Ritual</h2>
            <p class="text-gray-500 max-w-xl mx-auto text-lg font-light">From search to discovery in four cinematic acts.</p>
          </div>

          <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div
              v-for="(step, idx) in [
                { step: '01', title: 'The Prop', desc: 'Pick a film that defines your current mood. It is your calling card.', icon: 'heroicons:magnifying-glass' },
                { step: '02', title: 'The Match', desc: 'Our engine finds a fellow curator waiting in the wings of the theatre.', icon: 'mdi:lightning-bolt' },
                { step: '03', title: 'The Swap', desc: 'Exchange recommendations and delve into the subtext of the craft.', icon: 'heroicons:chat-bubble-left' },
                { step: '04', title: 'The Vault', desc: 'Every shared film is archived. Your library of human connection grows.', icon: 'mdi:treasure-chest' }
              ]"
              :key="idx"
              class="glass-card p-12 rounded-[2.5rem] relative group hover:bg-white/[0.04] transition-all"
            >
              <span class="text-[8rem] font-display font-black text-white/[0.02] absolute -top-12 -left-4 pointer-events-none group-hover:text-amber-500/5 transition-colors">{{ step.step }}</span>
              <div class="w-16 h-16 rounded-2xl bg-white/5 flex items-center justify-center text-amber-500 mb-8 border border-white/10 group-hover:scale-110 transition-transform">
                <Icon :name="step.icon" class="text-2xl" />
              </div>
              <h3 class="text-2xl font-bold mb-4 font-display">{{ step.title }}</h3>
              <p class="text-gray-500 leading-relaxed font-light">{{ step.desc }}</p>
            </div>
          </div>
        </div>
      </section>

      <CinemaMovieMarquee reverse />

      <section id="community" class="max-w-7xl mx-auto px-6 py-40">
        <div class="grid lg:grid-cols-2 gap-32">
          <div class="space-y-10">
            <h2 class="text-5xl md:text-7xl font-display font-bold">The Global <br /><span class="text-gradient">Film Circle.</span></h2>
            <div class="grid grid-cols-2 gap-8">
              <div class="space-y-2">
                <span class="text-5xl font-display font-black">128k</span>
                <p class="text-[10px] font-black uppercase tracking-widest text-gray-500">Active Members</p>
              </div>
              <div class="space-y-2">
                <span class="text-5xl font-display font-black">2.4M</span>
                <p class="text-[10px] font-black uppercase tracking-widest text-gray-500">Discussions</p>
              </div>
            </div>
          </div>
          <div class="space-y-8">
            <div
              v-for="(testimonial, idx) in [
                { name: 'Kael', role: 'Archivist', text: `Finally, a place where people don't just talk about spoilers, but actually discuss the cinematography.`, avatar: 'https://i.pravatar.cc/150?u=kael' },
                { name: 'Elena', role: 'Student', text: `I matched with a retired projectionist who showed me the entire history of Soviet montage.`, avatar: 'https://i.pravatar.cc/150?u=elena' }
              ]"
              :key="idx"
              class="glass-card p-10 rounded-3xl flex gap-8 items-center border-white/5"
            >
              <img :src="testimonial.avatar" class="w-20 h-20 rounded-2xl grayscale" alt="avatar" />
              <div>
                <p class="text-gray-300 italic mb-4 font-light">"{{ testimonial.text }}"</p>
                <div class="flex items-center gap-3">
                  <span class="font-bold">{{ testimonial.name }}</span>
                  <span class="text-[9px] font-black uppercase tracking-widest text-gray-600">{{ testimonial.role }}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="relative py-60 px-6 overflow-hidden text-center bg-black">
        <div class="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(245,158,11,0.1)_0%,transparent_70%)]"></div>
        <div class="max-w-4xl mx-auto relative z-10">
          <h2 class="text-7xl md:text-[10rem] font-display font-black mb-16 leading-tight italic tracking-tighter">
            Your chair <br />is waiting.
          </h2>
          <UiButton size="lg" @click="handleStart">
            Enter The Roulette
          </UiButton>
          <p class="mt-12 text-gray-600 text-sm font-bold uppercase tracking-[0.4em]">Available on all devices • No login required</p>
        </div>
      </section>

      <footer class="border-t border-white/5 py-40 px-6 bg-black">
        <div class="max-w-7xl mx-auto grid md:grid-cols-4 items-start gap-20">
          <div class="col-span-2 space-y-10">
            <div class="flex items-center gap-5">
              <div class="w-16 h-16 bg-gradient-to-tr from-amber-500 to-red-600 rounded-2xl flex items-center justify-center shadow-2xl">
                <Icon name="mdi:film" class="text-white text-2xl" />
              </div>
              <span class="text-4xl font-display font-bold tracking-tighter">MovieRoulette</span>
            </div>
            <p class="text-gray-500 max-w-sm leading-relaxed text-xl font-light">
              Reclaiming cinema from the algorithms. A global sanctuary for the rare, the strange, and the masterpiece.
            </p>
            <div class="flex gap-8 text-2xl text-gray-700">
              <Icon name="mdi:twitter" class="hover:text-white transition-colors cursor-pointer" />
              <Icon name="mdi:instagram" class="hover:text-white transition-colors cursor-pointer" />
              <Icon name="mdi:discord" class="hover:text-white transition-colors cursor-pointer" />
              <Icon name="mdi:vimeo" class="hover:text-white transition-colors cursor-pointer" />
            </div>
          </div>
          <div class="flex flex-col gap-8">
            <h4 class="text-[12px] font-black uppercase tracking-[0.4em] text-white/40">The Circle</h4>
            <a href="#" class="text-xl text-gray-500 hover:text-white transition-colors font-light">Join Curator Program</a>
            <a href="#" class="text-xl text-gray-500 hover:text-white transition-colors font-light">The Vault Archive</a>
            <a href="#" class="text-xl text-gray-500 hover:text-white transition-colors font-light">Member Manifesto</a>
            <a href="#" class="text-xl text-gray-500 hover:text-white transition-colors font-light">Global Stats</a>
          </div>
          <div class="flex flex-col gap-8">
            <h4 class="text-[12px] font-black uppercase tracking-[0.4em] text-white/40">Studio</h4>
            <a href="#" class="text-xl text-gray-500 hover:text-white transition-colors font-light">Privacy Rituals</a>
            <a href="#" class="text-xl text-gray-500 hover:text-white transition-colors font-light">Code of Conduct</a>
            <a href="#" class="text-xl text-gray-500 hover:text-white transition-colors font-light">Terminal Access</a>
            <a href="#" class="text-xl text-gray-500 hover:text-white transition-colors font-light">Contact Curator</a>
          </div>
        </div>
        <div class="max-w-7xl mx-auto pt-40 flex flex-col md:flex-row justify-between items-end gap-12 border-t border-white/5 mt-20 opacity-20">
          <div class="text-[10px] font-black uppercase tracking-[0.5em] text-gray-400">© MMXXIV MovieRoulette • All Rights Reserved</div>
          <div class="text-right">
            <p class="text-[10px] font-black uppercase tracking-[0.5em] text-gray-400 mb-2">Designed In</p>
            <p class="text-2xl font-display font-bold">Los Angeles</p>
          </div>
        </div>
      </footer>
    </div>
  </div>
</template>
