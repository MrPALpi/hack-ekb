<template>
    <div class="map-settings__event-list">
        <transition-group name="list">
  <map-settings-event-item
    v-for="eventItem in eventList"
    :key="eventItem"
    :eventItem="eventItem"
  />
</transition-group>
</div>
</template>

<script setup>
import MapSettingsEventItem from "./MapSettingsEventItem.vue";
const props = defineProps({
  eventList: { type: Array, required: true, default: [] },
});
</script>

<style lang="scss" scoped>
.map-settings__event-list{
    display: grid;
}
.list-move, /* apply transition to moving elements */
.list-enter-active,
.list-leave-active {
  transition: all 0.5s ease;
}

.list-enter-from,
.list-leave-to {
  opacity: 0;
  transform: translateX(-50px);
}

/* ensure leaving items are taken out of layout flow so that moving
   animations can be calculated correctly. */
.list-leave-active {
  // position: absolute;
}
</style>