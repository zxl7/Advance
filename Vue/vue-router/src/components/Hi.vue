<template>
  <div>
    <h2>{{msg}}</h2>
    <p>我有雷神的力量</p>
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
