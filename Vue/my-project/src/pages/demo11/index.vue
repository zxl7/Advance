<template>
  <div>
    <div>Vue中DOM操作</div>
    <div>--------------------------------</div>
    <div ref="head" id="head"></div>
  </div>
</template>

<script>
export default {
  data () {
    return {

    }
  },
  mounted () {
    // dom已生成
    this.$refs.head.innerHTML = 'DOM操作贼酷'
    document.getElementById('head').innerHTML = '234'
  }
}
</script>
