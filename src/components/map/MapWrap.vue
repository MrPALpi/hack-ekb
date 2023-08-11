<template>
  <div class="wrap__map">
    <map-settings class="map__settings"/>
    <map-city/>
  </div>
</template>

<script setup>
import MapCity from './MapCity.vue';
import MapSettings from './MapSettings.vue';
</script>

<style lang="scss" scoped>
.wrap__map{
    height: 100vh;
    width: 100%;
    // display: flex;
    // gap: 0;
    position: relative;
}
.map{
  &__settings{
    position: absolute;
    
  }
}
</style>