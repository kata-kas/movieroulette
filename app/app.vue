<template>
  <header>
    <SignedOut>
      <SignInButton />
    </SignedOut>
    <SignedIn>
      <UserButton />
    </SignedIn>
  </header>

  <main>
    <NuxtPage />
  </main>
</template>
