<template>
  <span class="loader"></span>
</template>




<style lang="scss" scoped>
@import "../../assets/styles/main.scss";

.loader {
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  
}
.loader::after,
.loader::before {
  content: '';
  width: 35vw;
  height: 35vw;
  max-width: 300px;
  max-height: 300px;
  border: 10px solid $accent;
  position: absolute;
  margin-bottom: 5%;
  box-sizing: border-box;
  animation: rotation 0.5s ease-in-out infinite;
}
.loader::after {
  border-color: #FF3D00;
  animation-direction: alternate-reverse;
}

@keyframes rotation {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(90deg);
  }
} 
</style>