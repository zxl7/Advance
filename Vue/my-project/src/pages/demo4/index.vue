<template>
  <div>
    <div>计算属性</div>
    <div>{{msg}}</div>
    <div>{{reversedMessage}}</div>
    <div></div>
    <div></div>
    <div></div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      msg: '我知道的你都知道'
    }
  },
  computed: {
    reversedMessage () {
      return this.msg.split('').reverse().join('')
    }
  }
}
</script>
