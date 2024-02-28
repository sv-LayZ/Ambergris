<template>
  <div class="min-h-screen pb-10">
    <nav class="text-2xl font-thin flex justify-center gap-4">
      <NuxtLink class="hover:font-normal transition-all">HOME</NuxtLink>
      <NuxtLink class="hover:font-normal transition-all">PUG TOKENS</NuxtLink>
      <NuxtLink class="hover:font-normal transition-all">ROADMAP</NuxtLink>
      <NuxtLink class="hover:font-normal transition-all">AIRDROP</NuxtLink>
      <NuxtLink class="hover:font-normal transition-all">ABOUT US</NuxtLink>
    </nav>
    <main>
      <NuxtPage />
    </main>
  </div>
</template>

<script>
import '~/assets/css/style.css'
</script>