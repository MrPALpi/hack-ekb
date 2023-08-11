<template>
  <div class="map-settings__event-item">
    <div></div>
    <!-- <img
      :src="props.eventItem.imgs[0]"
      :alt="props.eventItem.name"
      class="map-settings-event-item__img"
    /> -->
    <span class="map-settings-event-item__title">{{
      props.eventItem.name
    }}</span>
    <div class="map-settings-event-item__icon-wrap">
        <question class="map-settings-event-item__icon"/>

        <icon-eye class="map-settings-event-item__icon"/>
    </div>
    
  </div>
</template>
  
  <script setup>
// import ArrowTo from "../icons/ArrowTo.vue";
import IconEye from '../icons/IconEye.vue'
import Question from "../icons/Question.vue";
const props = defineProps({
  eventItem: { type: Object, required: true },
});
</script>
  
  <style lang="scss" scoped>
.map-settings__event-item {
    display: grid;
    // justify-content: space-between;
    padding: 5px 10px;
    gap: 10px;
    align-items: center;
    grid-template-columns: repeat(3, 1fr);
}
.map-settings-event-item {
    
    &__icon{
        width: 30px;
        cursor: pointer;
        &-wrap{
            display: flex;
            align-items: center;
            justify-content: space-between;
            gap: 10px;
        }
    }
}
</style>