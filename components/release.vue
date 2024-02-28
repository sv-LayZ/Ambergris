<template>
  <div id="release" class="w-full h-96 relative flex">
    <h1 class="flex items-center font-bold text-4xl text-nowrap">BABY PUG</h1>
    <video autoplay>
      <source src="/vid/intro.webm" type="video/webm" />
    </video>
  </div>
</template>

<script lang="ts" setup>
const { data: timing } = useFetch('/timer.json')
</script>

<style scoped>
#release {
  margin: 15px 0 15px 0;
  background: rgb(252, 148, 63);
  background: -moz-linear-gradient(65deg, rgba(255,163,0,1) 0%, rgba(255,193,0,1) 48%, rgba(255,244,180,1) 100%);
  background: -webkit-linear-gradient(65deg, rgba(255,163,0,1) 0%, rgba(255,193,0,1) 48%, rgba(255,244,180,1) 100%);
  background: linear-gradient(65deg, rgba(255,163,0,1) 0%, rgba(255,193,0,1) 48%, rgba(255,244,180,1) 100%);
  filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="#ffa300",endColorstr="#fff4b4",GradientType=1);
}

#release::before {
  content: "";
  position: absolute;
  z-index: -2;
  inset: -8px;
  filter: blur(10px);
  background: rgb(252, 148, 63);
  background: -moz-linear-gradient(65deg, rgba(255,163,0,1) 0%, rgba(255,193,0,1) 48%, rgba(255,244,180,1) 100%);
  background: -webkit-linear-gradient(65deg, rgba(255,163,0,1) 0%, rgba(255,193,0,1) 48%, rgba(255,244,180,1) 100%);
  background: linear-gradient(65deg, rgba(255,163,0,1) 0%, rgba(255,193,0,1) 48%, rgba(255,244,180,1) 100%);
}
</style>