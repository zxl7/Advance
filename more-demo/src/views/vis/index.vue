/* eslint-disable no-unused-expressions */
<template>
  <div class="home">
    <Polar />
    <Smoothed />
    <Bar />
  </div>
</template>
<script>
import Polar from "@/components/vis/Polar.vue"
import Smoothed from "@/components/vis/Smoothed.vue"
import Bar from "@/components/vis/Bar.vue"

export default {
  components: {
    Polar,
    Bar
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
