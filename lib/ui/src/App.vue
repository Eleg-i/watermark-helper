<template>
  <div class="app">
    <WatermarkHelper />
  </div>
</template>

<script>
import WatermarkHelper from './components/WatermarkHelperWebComp.vue'

export default {
  components: {
    WatermarkHelper
  }
}
</script>

<style lang="scss" scoped>
.app {
  display: inline-block;
  border: 1px solid #000;
}
</style>
