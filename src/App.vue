<script setup>
import Intro from './components/Intro.vue'
</script>

<template>
  <main>
    <RouterView />
  </main>
</template>

<style>
.game {
  border-color: red;
  width: 100vh;
  height: 100vh;
}

.intro {
  border-color: blue;
}

#app {
  width: 100vh;
  height: 100vh;
}
</style>
