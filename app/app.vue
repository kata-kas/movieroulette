<template>
  <div class="min-h-screen bg-[#050505] grain">
    <div class="fixed top-24 right-6 z-[150]">
      <SignedOut>
        <SignInButton mode="modal">
          <button class="px-6 py-2 bg-white/10 hover:bg-white/20 border border-white/20 rounded-xl text-sm font-bold transition-all backdrop-blur-md">
            Sign In
          </button>
        </SignInButton>
      </SignedOut>
      <SignedIn>
        <UserButton />
      </SignedIn>
    </div>

    <main>
      <NuxtPage />
    </main>
  </div>
</template>
