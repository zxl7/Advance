<template>
  <div>
    <div>选项数据</div>
    <div>------------------------------</div>
    <div>{{msg}}</div>
    <div>------------------------------</div>
    <div>computed: {{aDouble}}</div>
    <div>------------------------------</div>
    <div @click="say('hi zhuerc ')">click</div>

  </div>
</template>

<script>
export default {
  data () { // 全局数据
    return {
      msg: '弟弟救我',
      a: 1
    }
  },
  computed: {
    aDouble () {
      return this.a * 2
    }
  },
  methods: {// 服务于事件
    say (h) {
      alert(h)
    }

  }
}
</script>
