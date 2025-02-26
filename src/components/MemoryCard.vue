<template>
    <div class="canvas" v-show="isVisible">
      <div v-for="(obj, index) in objects" 
        :key="index" 
        class="object"
        :class="obj.className"
        :style="{
          left: `${obj.x}px`,
          top: `${obj.y}px`,
          opacity: obj.opacity,
          transition: obj.transition,
          backgroundColor: obj.backgroundColor
        }"
        @click="handleClick(index)"
      >{{elements[index].text}}</div>
    </div>

    <div v-show="!isVisible">
        <div class="results">
            <h1>Felicidades haz terminado la actividad</h1>
                <p>
                    Tuviste {{ counterRight }} respuestas correctas. <br>
                    Tuviste {{ counterWrong }} respuestas incorrectas.
                </p>
            </div>
    </div>
  </template>
  
  <script setup>
    import { ref, onMounted } from "vue";
    const rightAnswers = 5;
    let counterRight = 0;
    let counterWrong = 0;
    let isVisible = ref(true);
    const elements = [
        {text: "¿Para qué?", isRightAnswer: false},
        {text: "¿Qué?", isRightAnswer: true}, //Rigth answer
        {text: "¿Cuál?", isRightAnswer: false},
        {text: "¿Por qué?", isRightAnswer: false},
        {text: "¿Cómo?", isRightAnswer: true}, //Rigth answer
        {text: "¿Quién?", isRightAnswer: true}, //Rigth answer
        {text: "¿Cuándo?", isRightAnswer: true}, //Rigth answer
        {text: "¿Dónde?", isRightAnswer: true} //Rigth answer
    ];
    const numObjects = elements.length;
    const canvasSize = { width: window.innerWidth, height: innerHeight };
    const objects = ref([]);
    const constantColors = [
        "#046099",
        "#5A95AA",
        "#82956B",
        "#3E5123",
        "#E9E0D2"
    ];
    const objectColors = 
        Array.from(
            { length:  numObjects},
            () => Math.floor(Math.random() * ((constantColors.length - 1) - 0 + 1)) + 0
        );
    
    function getRandomPosition() {
        return {
        x: Math.random() * (canvasSize.width - 50),
        y: Math.random() * (canvasSize.height - 50),
        className: 'object',
        backgroundColor: 'red',
        opacity: 1,
        transition: ''
        };
    }
    
    function moveObjects() {
        objects.value.forEach((obj, index) => {
            const newPos = getRandomPosition();
            obj.x = newPos.x;
            obj.y = newPos.y;
            obj.backgroundColor = constantColors[objectColors[index]];
        });
    
        setTimeout(moveObjects, 1500); 
    }

    function handleClick(index) {
        if (elements[index].isRightAnswer) {
            const x = objects.value[index].x, y = objects.value[index].y;
            objects.value[index].backgroundColor = 'green';
            counterRight += 1;
            if (counterRight === rightAnswers) {
                isVisible = false;
            }

        }
        else if (!elements[index].isRightAnswer) {
            objects.value[index].backgroundColor = 'red';
            counterWrong += 1;
        }
        objects.value[index].opacity = 0;
        objects.value[index].transition = 'opacity 1s ease-out';
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
        border-radius: 50%;
        transition: all 1.5s ease-in-out;
        display: flex;
        justify-content: center;
        align-items: center;
        color: black;
        cursor: pointer;
        -ms-user-select: none;
        -webkit-user-select: none;
        user-select: none;
        color: black;
    }

    .results {
        width: 100vh;
        height: 90vh;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        font-family: "Graphik Light";
    }

  </style>
  