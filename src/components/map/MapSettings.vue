<template>
  <div
    :class="{ 'map-settings_desktop-hide': windowSize > 900 && !show }"
    class="map-settings map__settings"
  >
    <div class="map-settings__bar" :class="{'map-settings__bar_rounded':!show}">
      <div class="map-settings-bar__title">Фильтры</div>
      <animate-arrow  @click="show = !show" :active="show" class="map-settings-bar__arrow"/>
    </div>

    <transition name="to-top">
      <div v-show="show" class="map-settings__body">
        <div class="map-settings-body__filters">

          <div class="map-settings-body-filters__group">
            <custom-input type="text" v-model:input-value="name">Поиск</custom-input>

            <drop-down v-model:inputValue="findWord">
              <div v-for="typeItem in searchMatch" :key="typeItem">
                <input :id="typeItem" :name="typeItem" :value="typeItem" v-model="chekedTypes" type="checkbox" />
                <label :for="typeItem">{{ typeItem  }}</label>
              </div>
            </drop-down>

          <!-- </div> -->
          
          <!-- <div class="map-settings-body-filters__group"> -->
            <custom-input type="date" v-model:input-value="dateBegin" :max="dateEnd" name="dateBegin">Дата начала</custom-input>
            <custom-input type="date" v-model:input-value="dateEnd" :min="dateBegin" name="dateEnd">Дата конца</custom-input>
          </div>

        </div>
          <map-settings-event-list :event-list="SearchAndSort" class="map-settings-body__list"/>
      </div>
    </transition>

  </div>
</template>

<script setup>
// components
// import ArrowTo from "../icons/ArrowTo.vue";
import AnimateArrow from "../ui/AnimateArrow.vue";
import DropDown from "../ui/DropDown.vue";
import CustomInput from "../ui/CustomInput.vue";
import MapSettingsEventList from "./MapSettingsEventList.vue";
// GloabalStore
import { useEventsStore } from '@/stores/EventsStore.js';
import { storeToRefs } from 'pinia';
// hooks
import useWindowSize from "../../hooks/useWindowSize.js";
import useSearchMatch from "../../hooks/useSearchMatch";

// default
import { ref, computed } from "vue";



const show = ref(true);
const store = useEventsStore()
const { SearchAndSort, name, dateBegin, dateEnd, chekedTypes, types } = storeToRefs(store);
const { windowSize } = useWindowSize();
const { findWord, searchMatch } = useSearchMatch(types);

// const SelectInputFilter = ref('');

// const filterTypes = computed(()=>{
//   return types.value.filter((itemType)=>itemType.toLowerCase().includes(SelectInputFilter.value.toLowerCase()));
// })


</script>

<style lang="scss" scoped>
@import "../../assets/styles/main.scss";
.map-settings {
  max-width: 380px;
  width: 100%;
  // background: $background;
  // height: min-content;
  // background: $background;
  height: 100%;
  max-height: 100vh;
  transition: transform 0.3s ease;
  &_desktop-hide {
    // transform: rotate(90deg) translateX(-2%);
    background: transparent;
    transition: transform 0.3s ease 0.3s;
    transform: translateX(-80%);
  }
  &__bar {
    box-shadow: $box-shadow;
    border: 1px solid $border-light;
    background: $background;
    border-radius: 0 15px 0 0;
    padding: 5px 10px;
    display: flex;
    justify-content: space-between;
    align-items: center;
   
    transition: border-radius 0.3s;
    &_rounded{
      transition: border-radius 0.3s 0.25s;
      border-radius: 0 15px 15px 0;
    }
    // transform-origin: bottom left;

    // z-index: 2;
    // position: relative;
  }
  &-bar {
    &__title {
      font-size: 16px;
      font-weight: 600;
    }
    &__arrow {
      width: 40px;
    }
  }
  &__body {
    border: 1px solid $border-light;
    background: $background;

    border-radius: 0 0 15px 15px;
    padding: 15px 10px;
    border-top: 1px solid transparent;
    transform-origin: top center;
  }
  &-body {
    &__filters {
      display: grid;
      gap: 10px;
    }
    &-filters {
      &__group {
      //   display: flex;
      //   align-items: center;
      //   gap: 10px;
      //   & > div {
      //     width: 50%;
      //   }
      // }
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
      gap: 20px;
    }
  }
  }
}

.to-top-leave-active {
  transition: transform 0.3s ease;
  // position: absolute;
}
.to-top-enter-active {
  transition: transform 0.3s ease 0.3s;
  // position: absolute;
}
.to-top-enter-from,
.to-top-leave-to {
  transform: scaleY(0);
  // width: 100%;
  // position: absolute;
}
</style>
