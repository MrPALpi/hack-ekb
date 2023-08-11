<template>
    <div class="drop-down" >
      <div @click="showChoice" class="drop-down__menu">
        <span  class="drop-down-menu__placeholder">Выберите</span>
        <!-- <arrow-to 
          class="drop-down-menu__arrow"
          :class="{ 'drop-down-menu-arrow_down': show }"
        /> -->
        <animate-arrow  class="drop-down-menu__arrow" :active="show" />
      </div>
      <drop-down-choice :show="show" >
        <template #input>
          <!-- <custom-input type="text" v-model:input-value="props.inputValue">
            Поиск значений
          </custom-input> -->
            <input 
         type="text"
        @input="$emit('update:inputValue', $event.target.value)"
        :value="props.inputValue"
        placeholder="Поиск..."
        class="drop-down__input">
        </template>
        <slot></slot>
      </drop-down-choice>
    </div>
  </template>
  
  <script setup>
  
  import { ref } from "vue";
  // import ArrowTo from "../icons/ArrowTo.vue";
  import AnimateArrow from "./AnimateArrow.vue";
  import DropDownChoice from './DropDownChoice.vue'
  // import CustomInput from "./CustomInput.vue";
  const show = ref(false);
  const showChoice = (event) => {
    show.value = !show.value; 

  };

  const props = defineProps({
    inputValue: { type: String,
      required: false,
    },
  });
  

  </script>
  
  <style lang="scss" scoped>
  @import "../../assets/styles/main.scss";
  
  .drop-down {
    color: $text;
    position: relative;
    // width: min-content;
  
    &__menu {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 7px 10px;
      border: 1px solid $border-light;
      border-radius: 10px;
      background: transparent;
      // min-width: 200px;
    }
    &-menu {
      &__arrow {
        width: 30px;
       
      }
      // &-arrow_down {
      //   transform: rotate(90deg);
      // }
      &__placeholder{
        color: $text;
      }
    }
    &__input {
      padding: 5px 10px;
      background: transparent;
      color: $text;
      border: 1px solid $border-light;
      border-radius: 10px;
      outline: none;
      width: 100%;
      transition: border-color 0.3s;
      &:focus {
        border-color: $accent-20;
      }
    }
  }
  </style>