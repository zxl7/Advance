<template>
  <div>
    <h2>{{msg}}</h2>
    <router-view class="childer"></router-view>
  </div>
</template>

<script>
export default {
  data () {
    return {
      msg: '我是Hi组件'
    }
  }
}
</script>
<style>
.childer {
  background: red;
}
</style>
