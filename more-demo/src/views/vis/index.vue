/* eslint-disable no-unused-expressions */
<template>
  <div class="home">
    <Polar />
    <Smoothed />
  </div>
</template>
<script>
import Polar from "@/components/vis/Polar.vue"
import Smoothed from "@/components/vis/Smoothed.vue"

export default {
  components: {
    Polar,
    Smoothed
  }
}
</script>

<style lang="scss" scoped>
.home {
  width: 100%;
  height: 1000px;
}
</style>
