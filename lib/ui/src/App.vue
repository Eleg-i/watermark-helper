<template>
  <div class="app">
    <WatermarkHepler />
  </div>
</template>

<script>
import WatermarkHepler from './components/WatermarkHeplerWebComp.vue'

export default {
  components: {
    WatermarkHepler
  }
}
</script>

<style lang="scss" scoped>
.app {
  display: inline-block;
  border: 1px solid #000;
}
</style>
