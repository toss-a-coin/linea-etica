<template>
    <main class="intro">
            <div>
                <h1>Actividad</h1>
                <p>Actividad</p>
                <p>
                    En la siguiente actividad visualizaras círculos con diferentes preguntas, selecciona las preguntas que corresponden con la información mostrada en el microbit anterior.
                </p>
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

p {
    width: 300px;
}

h1 {
    font-family: "Columbia Sans", 'Times New Roman';
}
</style>
