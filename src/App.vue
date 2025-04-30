<script setup>
import Intro from './components/Intro.vue'
</script>

<template>
  <main>
    <RouterView />
  </main>
</template>

<style>
@font-face {
    font-family: 'Graphik Light';
    src: url('@/assets/fonts/Graphik-Font-Family/GraphikLight.otf');
}

@font-face {
      font-family: 'Columbia Sans';
      src: url('~@/assets/fonts/Columbia-Sans/ColumbiaSansWDisplay-Medium.ttf') format('truetype'),
           url('~@/assets/fonts/Columbia-Sans/ColumbiaSansWDisplay-Medium.woff2') format('woff2'),
           url('~@/assets/fonts/Columbia-Sans/ColumbiaSansWDisplay-Medium.woff') format('woff'),
    }

</style>
