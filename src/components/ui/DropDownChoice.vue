<template>
    <Transition name="fade">
         <div
           ref="choice"
           v-show="show"
           class="drop-down__choice"
           
         >
         <slot name="input"></slot>
         <div class="drop-down-choice__scroll">
          <slot> </slot>
         </div>
         
         
           
         </div>
       </Transition>  
   </template>
   
   <script setup>
   const props = defineProps({
       show:{type: Boolean, required:true},

   })



   </script>
   
   <style lang="scss" scoped>
   @import "../../assets/styles/main.scss";
  
    .drop-down__choice {
       position: absolute;
       top: 100%;
       margin-top: 5px;
       padding: 10px 5px;
       width: 100%;
       border-radius: 10px;
       border: 1px solid $border-light;
       background: $background;
       color: $accent;
       z-index: 2;
       
     }
     .drop-down-choice__scroll{
       scrollbar-gutter: stable;
       padding-top: 10px;
       max-height: 250px;
       overflow: auto;
       display: grid;
       gap: 10px;
     }
        

     .fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease, transform 0.3s ease;
  transform-origin: top center;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
//   scale: 0;
//   scaleY:0;
    transform: scaleY(0);
}
   </style>