<template>
  <div>
    
  </div>
</template>

<script lang="ts" setup>
const data = {
  type: 'outlabeledPie',
  data: {
    labels: ['ONE', 'TWO', 'THREE', 'FOUR', 'FIVE'],
    datasets: [
      {
        backgroundColor: [
          '#FF3784',
          '#36A2EB',
          '#4BC0C0',
          '#F77825',
          '#9966FF',
        ],
        data: [1, 2, 3, 4, 5],
      },
    ],
  },
  options: {
    plugins: {
      legend: false,
      outlabels: {
        text: '%l %p',
        color: 'white',
        stretch: 35,
        font: {
          resizable: true,
          minSize: 12,
          maxSize: 18,
        },
      },
    },
  },
}
</script>

<style>

</style>