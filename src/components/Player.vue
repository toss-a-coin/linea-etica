<template>
    <player1>
        <u>
             <u>
                <u></u><u></u>
            </u>
            <u>
                <u></u><u>
                <bat></bat>
            </u><u></u><u></u>
            </u>
        </u>
    </player1>
</template>

<style scoped>
ball,
player1 > u > u:nth-of-type(2) u:nth-of-type(3):before,
player2 > u > u:nth-of-type(2) u:nth-of-type(3):before {
  width: 2rem;
  height: 2rem;
  transform: translate3d(31rem, 50rem, 0);
  background: #fff;
  border: 0.5rem solid #222E35 !important;
  border-radius: 50%;
  opacity: 0;
}

body > div > label {
  height: 100%;
  width: 50%;
  cursor: pointer;
  position: absolute;
  top: 0;
  font-size: 3rem;
}
body > div > label:after {
  padding: 0.5rem;
  background: #fff;
  transform: translate3d(1rem, 30rem, 0);
  position: absolute;
  top: 0;
  left: 0;
}
body > div > label:before {
  content: "";
  border-radius: 1rem;
  width: calc(100% - 2rem);
  height: calc(100% - 2rem);
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  margin: auto;
}
body > div > label:hover:before {
  background: rgba(255, 255, 255, 0.05);
}

.ll {
  left: 0;
}

.lr {
  right: 0;
}




dialog1 player1, dialog2 player1, dialog3 player1 {
  position: relative;
  transform: none;
  height: 28rem;
  display: block;
  width: 2rem;
  margin: auto;
}
dialog1 label, dialog2 label, dialog3 label {
  background: #000;
  display: inline-block;
  color: #fff;
  padding: 1rem 2rem;
}
dialog1 label, dialog2 label, dialog3 label {
  cursor: pointer;
}
dialog1 label:hover, dialog2 label:hover, dialog3 label:hover {
  background: #073B4C;
}

dialog2 {
  transform: translate3d(0, -100%, 0);
  background: linear-gradient(rgba(239, 71, 111, 0.3), rgba(243, 118, 148, 0.9)), #073B4C;
  padding: 6rem 4rem;
}

dialog3 {
  transform: translate3d(0, -100%, 0);
}

@keyframes remove-overlay {
  100% {
    transform: translate3d(0, -100%, 0);
  }
}
.clear-start:checked ~ div > dialog1 {
  transform: translate3d(0, -100%, 0);
}

#miss-left:checked ~ div > dialog2, #miss-right:checked ~ div > dialog2 {
  transform: translate3d(0, 0, 0);
}

#miss-right:checked ~ div > .mr:before, #miss-left:checked ~ div > .ml:before {
  box-shadow: inset 0 0 20rem rgba(239, 71, 111, 0.5);
  -webkit-mask-image: linear-gradient(rgba(255, 255, 255, 0), #fff, #fff);
}

#serve-left:checked ~ div > dialog2,
#serve-right:checked ~ div > dialog2 {
  animation: miss-delay 0.25s 2.5s linear forwards;
}

@keyframes miss-delay {
  100% {
    transform: translate3d(0, 0, 0);
  }
}
@keyframes miss-delay2 {
  100% {
    transform: translate3d(0, 0, 0);
  }
}
#ls-hit-left-right:checked ~ div > dialog2,
#ls-hit-left-right-2:checked ~ div > dialog2,
#ls-hit-right-left-2:checked ~ div > dialog2,
#ls-hit-right-left-3:checked ~ div > dialog2,
#rs-hit-right-left:checked ~ div > dialog2,
#rs-hit-right-left-2:checked ~ div > dialog2,
#rs-hit-left-right-2:checked ~ div > dialog2,
#rs-hit-left-right-3:checked ~ div > dialog2 {
  animation: miss-delay2 0.25s 2.5s linear forwards;
}

#ls-hit-right-left:checked ~ div > dialog2,
#ls-hit-right-right:checked ~ div > dialog2,
#ls-hit-left-right-3:checked ~ div > dialog2,
#ls-hit-left-left:checked ~ div > dialog2,
#rs-hit-left-right:checked ~ div > dialog2,
#rs-hit-left-left:checked ~ div > dialog2,
#rs-hit-right-left-3:checked ~ div > dialog2,
#rs-hit-right-right:checked ~ div > dialog2 {
  animation: miss-delay 0.25s 2.5s linear forwards;
}


@media (max-width: 1250px) {
  input, input + span {
    display: none;
  }
}
.in-play:checked ~ div > [for=serve-left], .in-play:checked ~ div > [for=serve-right] {
  display: none;
}

small {
  font-size: 1.5rem;
}


player1, player2 {
  transform: translate3d(40rem, 5rem, 0);
}
player1 > u:after, player2 > u:after {
  width: 12rem;
  height: 5rem;
  background: rgba(34, 46, 53, 0.1);
  border-radius: 50%;
  transform: translate3d(-4rem, 20rem, 0);
}
player1 > u ball, player2 > u ball {
  transform: translate3d(-10rem, 1rem, 0);
  opacity: 0;
}
@keyframes serveball2 {
  49%, 100% {
    transform: translate3d(-10rem, 1rem, 0);
    opacity: 0;
  }
  50% {
    opacity: 1;
  }
  75% {
    transform: translate3d(-10rem, -10rem, 0);
    opacity: 1;
  }
}
player1 > u > u:nth-of-type(2), player2 > u > u:nth-of-type(2) {
  animation: standby 2s infinite;
  height: 10rem;
}
player1 > u > u:nth-of-type(2) bat, player2 > u > u:nth-of-type(2) bat {
  width: 1.5rem;
  height: 4.5rem;
  border-radius: 0.5rem;
  background: #FFD166;
  border: 0.5rem solid #222E35;
  transform: translate3d(6rem, -3rem, 0) rotate(80deg);
}
player1 > u > u:nth-of-type(2) bat:before, player2 > u > u:nth-of-type(2) bat:before {
  width: 5rem;
  height: 5rem;
  border-radius: 50%;
  background: #EF476F;
  border: 0.5rem solid #222E35;
  transform: translate3d(-2.25rem, -3rem, 0);
}
player1 > u > u:nth-of-type(2) u:nth-of-type(4), player2 > u > u:nth-of-type(2) u:nth-of-type(4) {
  width: 5rem;
  height: 5rem;
  border-radius: 50%;
  background: #FFD166;
  border: 0.5rem solid #222E35;
  transform: translate3d(-2rem, 1rem, 0);
}
player1 > u > u:nth-of-type(2) u:nth-of-type(4):before, player2 > u > u:nth-of-type(2) u:nth-of-type(4):before {
  width: 0.5rem;
  height: 0.5rem;
  background: #222E35;
  border-radius: 50%;
  transform: translate3d(1rem, 2rem, 0);
  box-shadow: 1.2rem 0 0 #222E35;
  animation: blink 6s infinite;
}
@keyframes blink {
  70%, 74% {
    transform: translate3d(1rem, 2rem, 0);
  }
  72% {
    transform: translate3d(1rem, 2rem, 0) scaleY(0);
  }
}
player1 > u > u:nth-of-type(2) u:nth-of-type(1), player2 > u > u:nth-of-type(2) u:nth-of-type(1) {
  width: 10rem;
  height: 10rem;
  border-radius: 50%;
  background: #EF476F;
  border: 0.5rem solid #222E35;
  transform: translate3d(-3.5rem, 5rem, 0);
}
player1 > u > u:nth-of-type(2) u:nth-of-type(2), player2 > u > u:nth-of-type(2) u:nth-of-type(2) {
  border-style: hidden;
  border-left: 0.5rem solid #222E35;
  border-top: 0.5rem solid #222E35;
  width: 6rem;
  height: 6rem;
  transform: translate3d(-2.3rem, 1.4rem, 0) rotate(200deg);
  border-radius: 100% 0% 0% 100%/100% 100% 0% 0%;
  transform-origin: 0 100%;
}
@keyframes serve-left {
  70% {
    transform: translate3d(-1rem, 1rem, 0) rotate(280deg);
  }
}
player1 > u > u:nth-of-type(2) u:nth-of-type(3), player2 > u > u:nth-of-type(2) u:nth-of-type(3) {
  border-style: hidden;
  border-top: 0.5rem solid #222E35;
  border-right: 0.5rem solid #222E35;
  width: 8rem;
  height: 8rem;
  transform: translate3d(4.3rem, 6rem, 0) rotate(13deg);
  border-radius: 0% 100% 0% 100%/100% 100% 0% 0%;
  transform-origin: 0 0;
}
player1 > u > u:nth-of-type(2) u:nth-of-type(3):before, player2 > u > u:nth-of-type(2) u:nth-of-type(3):before {
  transform: translate3d(5rem, 8rem, 0);
}
@keyframes serve {
  50% {
    transform: translate3d(4rem, 6rem, 0) rotate(150deg);
  }
}
@keyframes serveball {
  49% {
    opacity: 1;
  }
  50%, 100% {
    opacity: 0;
  }
}
player1 > u > u:nth-of-type(1), player2 > u > u:nth-of-type(1) {
  animation: standby2 2s infinite;
  height: 10rem;
  transform-origin: 100% 100%;
  transform: translate3d(0, 14rem, 0) skewX(0deg) rotate(1deg);
}
player1 > u > u:nth-of-type(1) u:nth-of-type(2), player2 > u > u:nth-of-type(1) u:nth-of-type(2) {
  width: 8rem;
  height: 10rem;
  border-style: hidden;
  border-left: 0.5rem solid #222E35;
  border-top: 0.5rem solid #222E35;
  transform: translate3d(-6rem, 0, 0) rotate(-11deg);
  border-radius: 100% 0% 0% 100%/100% 100% 0% 0%;
}
player1 > u > u:nth-of-type(1) u:nth-of-type(1), player2 > u > u:nth-of-type(1) u:nth-of-type(1) {
  width: 8rem;
  height: 10rem;
  border-style: hidden;
  border-top: 0.5rem solid #222E35;
  border-right: 0.5rem solid #222E35;
  transform: translate3d(1rem, 0, 0) rotate(12deg);
  border-radius: 0% 100% 0% 100%/100% 100% 0% 0%;
}

@keyframes standby {
  50% {
    transform: skewX(2deg) rotate(-5deg);
  }
}
@keyframes standby2 {
  50% {
    transform: translate3d(0, 14rem, 0) skewX(-5deg) rotate(1deg);
  }
}
dialog1 player1 > u > u:nth-of-type(2) {
  animation: standby3 2s infinite;
}
dialog1 player1 > u > u:nth-of-type(2) u:nth-of-type(2) {
  animation: dance 2s infinite;
  transform: translate3d(-2rem, 0.4rem, 0) rotate(60deg) scaleY(-1);
}
@keyframes dance {
  25% {
    transform: translate3d(-2rem, 0.4rem, 0) rotate(95deg) scaleY(-1);
  }
  50% {
    transform: translate3d(-2rem, 0.4rem, 0) rotate(60deg) scaleY(-1);
  }
  75% {
    transform: translate3d(-2rem, 0.4rem, 0) rotate(30deg) scaleY(-1);
  }
}
dialog1 player1 > u > u:nth-of-type(2) u:nth-of-type(3) {
  animation: dance2 2s infinite;
  transform: translate3d(4.5rem, 6rem, 0) rotate(13deg);
}
@keyframes dance2 {
  25% {
    transform: translate3d(4.5rem, 6rem, 0) rotate(43deg);
  }
  50% {
    transform: translate3d(4.5rem, 6rem, 0) rotate(13deg);
  }
  75% {
    transform: translate3d(4.5rem, 6rem, 0) rotate(-13deg);
  }
}
dialog1 player1 > u > u:nth-of-type(1) {
  animation: standby4 2s infinite;
}

@keyframes standby3 {
  25% {
    transform: translate3d(0, 1rem, 0) skewX(3deg) rotate(-8deg);
  }
  50% {
    transform: translate3d(0, 0, 0);
  }
  75% {
    transform: translate3d(0, 1rem, 0) skewX(-3deg) rotate(8deg);
  }
}
@keyframes standby4 {
  25% {
    transform: translate3d(0, 14rem, 0) skewX(-8deg) rotate(3deg);
  }
  50% {
    transform: translate3d(0, 14rem, 0);
  }
  75% {
    transform: translate3d(0, 14rem, 0) skewX(8deg) rotate(-3deg);
  }
}
</style>