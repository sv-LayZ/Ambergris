<template>
  <release/>
  <div class="flex flex-wrap justify-center gap-16 md:gap-32 p-10">
    <TokenButton img="/img/babypug.webp" name="BABY PUG" link="https://app.uniswap.org/tokens/ethereum" :released="true"/>
    <TokenButton img="/img/pug.webp" name="PUG" link="https://app.uniswap.org/tokens/ethereum" :released="true"/>
  </div>
  <div class="flex p-1 bg-amber-400 text-3xl rounded-md choice relative gap-1">
    <button class="hover:bg-gray-900 hover:text-white p-2 transition-all rounded-md" @click="view = '$bpug'" :class="{ active: view == '$bpug' }">BABY PUG</button>
    <button class="hover:bg-gray-900 hover:text-white p-2 transition-all rounded-md" @click="view = '$pug'" :class="{ active: view == '$pug' }">PUG</button>
  </div>
  <div v-if="view == '$bpug'" class="w-full p-1 flex flex-col items-center gap-16 text-yellow-100">
    <div class="w-full p-3 md:w-3/5 flex justify-center flex-col items-center">
      <h1 class="text-3xl font-black">TOKEN ECOSYSTEM</h1>
      <ul class="self-start text-2xl">
        <li class="flex items-center gap-2"><Icon name="cryptocurrency-color:sol"/><span class="font-bold">Solana</span> Smart-contract</li>
        <li class="flex items-center gap-2"><Icon name="emojione:bank"/><span class="font-bold">4%</span> Transaction fees</li>
        <!-- <li class="flex items-center gap-2"><Icon name="emojione:chart-increasing"/><span class="font-bold">40%</span> Preparing <span class="font-bold">$PUG</span> arrival</li> -->
      </ul>
    </div>
    <div class="w-full p-3 md:w-3/5 flex justify-center flex-col items-center">
      <h1 class="text-3xl font-black">WHY BUY BABY PUG ?</h1>
      <ul class="self-start text-2xl">
        <li>Become a <span class="font-bold">$BPUG</span> holder</li>
        <li>Eligibility for <span class="font-bold">$PUG</span> airdrop</li>
        <li>Presale for <span class="font-bold">$PUG</span></li>
        <li>Access to the <span class="font-bold">$PUG</span> TEAM insider infos</li>
      </ul>
    </div>
    <div class="w-full p-3 md:w-3/5 flex justify-center flex-col items-center">
      <h1 class="text-3xl font-black">WHY 4% FEES ?</h1>
      <div class="flex w-full items-center">
        <ul class="self-start text-2xl">
          <li class="flex items-center gap-2"><Icon name="emojione:construction-worker"/><span class="font-bold">10%</span> Project developement & Team</li>
          <li class="flex items-center gap-2"><Icon name="emojione:fire"/><span class="font-bold">45%</span> Burn</li>
          <li class="flex items-center gap-2"><Icon name="emojione:chart-increasing"/><span class="font-bold">35%</span> Preparing <span class="font-bold">$PUG</span> arrival</li>
          <li class="flex items-center gap-2"><Icon name="emojione:construction-worker"/><span class="font-bold">10%</span> Marketing</li>
        </ul>
        <div class="justify-self-end">
          dqsdsqdsqd
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const view = ref('$bpug')
</script>

<style>
.active {
  background-color: #272727;
  color: #fff;
}

.choice {
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

.choice::before {
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