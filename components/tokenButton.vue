<template>
  <div id="token" class="flex flex-nowrap flex-col items-center p-5 w-72 h-96 bg-amber-400 relative" :class="!released ? 'unreleased' : ''">
    <img :src="img" class="w-64 aspect-square"/>
    <h1 class="font-black text-4xl">{{ name }}</h1>
    <span v-if="released">$0,00{{ price }}</span>
    <a :href="link" class="w-full flex items-center justify-center bg-yellow-400 hover:bg-yellow-500 transition-colors rounded-md font-semibold h-8">{{ released ? 'Mint': 'Not available yet'}}</a>
  </div>
</template>

<script lang="ts" setup>
const price = Math.floor(Math.random()*10000);
defineProps<{
    'img': string
    'released'?: boolean
    'name': string
    'link': string
}>();
</script>

<style lang="scss">
#token::before {
  content: "";
  position: absolute;
  z-index: -2;
  inset: -8px;
  filter: blur(10px);
  background: rgb(252, 148, 63);
  background: -moz-linear-gradient(65deg, rgba(255,163,0,1) 0%, rgba(255,244,180,1) 100%);
  background: -webkit-linear-gradient(65deg, rgba(255,163,0,1) 0%, rgba(255,244,180,1) 100%);
  background: linear-gradient(65deg, rgba(255,163,0,1) 0%, rgba(255,244,180,1) 100%);
}

.unreleased::after {
  content: "";
  position: absolute;
  inset: 0px;
  z-index: 2;
  transition: .150s;
  backdrop-filter: blur(15px);
}
.unreleased:hover::after {
  backdrop-filter: blur(0px);
}

</style>