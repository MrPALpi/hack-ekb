<template>
  <div class="custom-input">
    <span class="custom-input__title">
      <slot></slot>
    </span>

    <input
      class="custom-input__input"

      v-bind="attrs"
      v-model="inputValue"
    />
  </div>
</template>

<script setup>
import { computed, useAttrs } from "vue";
const props = defineProps({
  inputValue: { type: String, required: false },
});
const attrs = useAttrs();

const emit = defineEmits(["update:inputValue"]);
const inputValue = computed({
  get: () => {
    return props.inputValue;
  },
  set: (val) => {
      emit("update:inputValue", val);
  },
});
</script>

<style lang="scss" scoped>
@import "@/assets/styles/main.scss";

.custom-input {
  position: relative;
  border: 1px solid $border-light;
  border-radius: 10px;
  background: $background;
  padding: 12px 10px 10px;
  transition: border-color 0.3s;

  &__title {
    font-size: 14px;
    font-weight: 600;
    color: $accent-50;
    position: absolute;
    background: inherit;
    top: -8px;
    left: 15px;
  }
  &__input {
    // padding: 5px 10px;
    font-size: 16px;
    background: transparent;
    color: $text;
    // border: 1px solid $accent-50;
    border: none;
    outline: none;
    width: 100%;
  }
  &:focus-within {
    border-color: $accent-20;
  }
}
</style>