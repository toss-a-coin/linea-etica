<template>
    <main class="intro">
        <dialog1>
            <div>
                <p>Actividad</p>
                <h1>Linea Ética</h1>
            </div>
            <Player />
        </dialog1>
        <button @click="startGame">
            <span class="shadow"></span>
            <span class="edge"></span>
            <span class="front text"> Jugar </span>
        </button>
    </main>
</template>

<script>
    import Player from './Player.vue';
    export default {
        name: 'Intro',
        components: {Player},
        methods: {
            startGame() {
                this.$router.push('/game')
            }
        }
    }
</script>

<style scoped>
html {
  font-size: 1vh;
}

body {
  margin: 0;
  background: #073B4C;
  font-family: "Consolas";
  color: #000;
}
body > div {
  width: 56rem;
  max-width: 100%;
  height: 100rem;
  margin: auto;
  position: absolute;
  overflow: hidden;
  background: #3dc1ec;
  left: 0;
  right: 0;
  top: 0;
  display: flex;
}

button {
    width: 150px;;
}
body > div > div {
  width: 100%;
  height: 100%;
  transform: translate3d(0, -8rem, 0) scale(0.9);
}
body div > div *:not(label), body div > div *:before, body div > div *:after, body sig *:not(label), body sig *:before, body sig *:after, body player1 *:not(label), body player1 *:before, body player1 *:after {
  box-sizing: border-box;
  position: absolute;
  content: "";
  left: 0;
  top: 0;
}

.table {
  width: 30rem;
  height: 30rem;
  border: 0.5rem solid #222E35;
  bottom: 0;
  right: 0;
  margin: auto;
  background: linear-gradient(90deg, #fff 14rem, #222E35 14rem, #222E35 14.5rem, #fff 14.5rem);
  box-shadow: 0 10rem 0 rgba(34, 46, 53, 0.1);
}
.table:before {
  height: 12rem;
  border-left: 0.5rem solid #222E35;
  border-right: 0.5rem solid #222E35;
  width: 28rem;
  transform: translate3d(0.5rem, 29.5rem, 0);
}
.table:after {
  border: 0.5rem solid #222E35;
  height: 4rem;
  width: 32rem;
  transform: translate3d(-1.5rem, 11rem, 0);
  background: repeating-linear-gradient(45deg, rgba(255, 255, 255, 0), rgba(255, 255, 255, 0) 0.5rem, #222E35 0.5rem, #222E35 0.8rem), repeating-linear-gradient(-45deg, rgba(255, 255, 255, 0), rgba(255, 255, 255, 0) 0.5rem, #222E35 0.5rem, #222E35 0.8rem);
}
</style>
