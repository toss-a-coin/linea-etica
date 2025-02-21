<template>
    <div class="canvas" v-show="isVisible">
      <div 
        v-for="(obj, index) in objects" 
        :key="index" 
        class="object"
        :class="obj.className"
        :style="{
          left: `${obj.x}px`,
          top: `${obj.y}px`
        }"
        @click="handleClick(index)"
      >{{elements[index].text}}</div>
    </div>

    <div v-show="!isVisible">
        <dialog1>
            <div>
                <h1>Juego terminado</h1>
                <p>
                    Tuviste {{ counterRight }} respuestas correctas. <br>
                    Tuviste {{ counterWrong }} respuestas incorrectas.
                </p>
            </div>
            <Player />
        </dialog1>
        <!-- <button @click="playAgain">
                <span class="shadow"></span>
                <span class="edge"></span>
                <span class="front text"> Jugar de nuevo </span>
        </button> -->
    </div>
  </template>
  
  <script setup>
    import { ref, onMounted } from "vue";
    import Player from "./Player.vue";
    const rightAnswers = 5;
    let counterRight = 0;
    let counterWrong = 0;
    let isVisible = ref(true);
    const elements = [
        {text: "¿Para qué?", isRightAnswer: false},
        {text: "¿Qué?", isRightAnswer: true}, //Rigth answer
        {text: "¿Cuál?", isRightAnswer: false},
        {text: "¿Porqué?", isRightAnswer: false},
        {text: "¿Cómo?", isRightAnswer: true}, //Rigth answer
        {text: "¿Quién?", isRightAnswer: true}, //Rigth answer
        {text: "¿Cuándo?", isRightAnswer: true}, //Rigth answer
        {text: "¿Dónde?", isRightAnswer: true} //Rigth answer
    ];
    const numObjects = elements.length;
    const canvasSize = { width: window.innerWidth, height: innerHeight };
    const objects = ref([]);
    
    function getRandomPosition() {
        return {
        x: Math.random() * (canvasSize.width - 50),
        y: Math.random() * (canvasSize.height - 50),
        className: 'object'
        };
    }
    
    function moveObjects() {
        objects.value.forEach((obj) => {
        const newPos = getRandomPosition();
        obj.x = newPos.x;
        obj.y = newPos.y;
        });
    
        setTimeout(moveObjects, 10000); // Change position every 2 seconds
    }

    function handleClick(index) {
        if (elements[index].isRightAnswer) {
            objects.value[index].className = 'right';
            counterRight += 1;
            if (counterRight === rightAnswers) {
                isVisible = false;
            }

        }
        else if (!elements[index].isRightAnswer) {
            objects.value[index].className = 'wrong';
            counterWrong += 1;
        }
    }

    function playAgain() {
        counterRight = 0;
        counterWrong = 0;
        isVisible = true;
        Object.assign(objects, []);
    }
    
    
    onMounted(() => {
        objects.value = Array.from({ length: numObjects }, () => getRandomPosition());
        moveObjects();
    });
  </script>
  
  <style scoped>
    .object {
        position: absolute;
        width: 100px;
        height: 100px;
        background-color: blue;
        border-radius: 50%;
        transition: all 1.5s ease-in-out;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .right {
        opacity: 0;
        transition: opacity 1s ease-out;
        background-color: greenyellow;
        color: black;
    }

    .wrong {
        opacity: 0;
        transition: opacity 1s ease-out;
        background-color: red;
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

    body div > div *:not(label), body div > div *:before, body div > div *:after, body sig *:not(label), body sig *:before, body sig *:after, body player1 *:not(label), body player1 *:before, body player1 *:after {
    box-sizing: border-box;
    position: absolute;
    content: "";
    left: 0;
    top: 0;
    }

  </style>
  