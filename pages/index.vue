<template>
  <release/>
  <div class="flex flex-wrap justify-center gap-16 md:gap-32 p-10">
    <TokenButton img="/img/babypug.png" name="BABY PUG" link="https://app.uniswap.org/tokens/ethereum" :released="true"/>
    <TokenButton img="/img/babypug.png" name="PUG" link="https://app.uniswap.org/tokens/ethereum" :released="false"/>
  </div>
  <div class="flex p-1 bg-amber-400 text-3xl gap-2">
    <button class="hover:bg-gray-900 hover:text-white p-2 transition-all">BABY PUG</button>
    <button class="hover:bg-gray-900 hover:text-white p-2 transition-all">PUG</button>
  </div>
</template>

<style>

</style>