<template>
  <div id="release" class="w-full h-96 relative flex justify-center gap-16 border-4 rounded-b-md border-[#FFD931]">
    <div class="text-white flex justify-center flex-col items-center gap-4 w-1/3 h-full">
      <h1 class="inline-flex items-center font-bold text-[7rem] h-24">BABY</h1>
      <h1 class="inline-flex items-center font-bold text-[9.1rem] h-16">PUG</h1>
      <h1 class="inline-flex items-center font-bold text-[2.5rem] h-4">pugcrypto.com</h1>
    </div>
    <video ref="video" class="w-1/3 h-full" autoplay muted @ended="playback">
      <source src="/vid/intro.webm" type="video/webm" />
    </video>
  </div>
</template>

<script lang="ts" setup>
const { data: timing } = useFetch('/timer.json');

const video = ref();
  
function playback(event: Event) {
  const video = event.target
  console.log(video)
  // When the video ends, rewind and play in reverse
  // video.currentTime = video.duration; // Set to the end of the video
  // video.playbackRate = -1; // Set playback rate to reverse
  // video.play(); // Start playing in reverse
};
</script>

<style scoped>
@font-face {
  font-family: davish;
  src: url(/font/davish.otf);
}

#release {
  margin: 0px 0 15px 0;
  background: rgb(252, 148, 63);
  background: -moz-linear-gradient(65deg, rgba(255,163,0,1) 0%, rgba(255,193,0,1) 48%, rgba(255,244,180,1) 100%);
  background: -webkit-linear-gradient(65deg, rgba(255,163,0,1) 0%, rgba(255,193,0,1) 48%, rgba(255,244,180,1) 100%);
  background: linear-gradient(65deg, rgba(255,163,0,1) 0%, rgba(255,193,0,1) 48%, rgba(255,244,180,1) 100%);
  filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="#ffa300",endColorstr="#fff4b4",GradientType=1);

  h1 {
    font-family: davish;
  }
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