<template>
  <div>
    <div>过渡属性</div>
    <div>-------------------------------</div>
    <div id="demo">
      <button @click="show = ! show">toggle</button>

      <transition name="fade">
        <p v-if="show">藏起来,嘻嘻嘻</p>
      </transition>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      show: true
    }
  }
}
</script>

<style>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
