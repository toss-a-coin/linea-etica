<template>
    <main class="intro">
            <div>
                <p>Actividad</p>
                <h1>Linea Ética</h1>
            </div>
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

button {
    width: 150px;;
}

.intro {
  width: 100vh;
  height: 90vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-family: "Graphik Light";
}
</style>
