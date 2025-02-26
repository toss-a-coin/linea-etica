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

#app {
  width: 100vh;
  height: 100vh;
}
</style>
