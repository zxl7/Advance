<template>
  <div>
    <div>选项数据</div>
    <div>------------------------------</div>
    <div>{{msg}}</div>

    <div>------------------------------</div>
    <div>computed:{{aDouble}}</div>

    <div>------------------------------</div>
    <div @click ="say('hi')">点击我</div>

  </div>
</template>

<script>
export default {
  data () {
    // 全局组件变量的定义
    return {
      // 数据绑定
      msg: 'helloworld',
      num: 5
    }
  },
  computed: {
    // 包含各种函数
    aDouble () {
      return this.num * 2
    },

    methods: {
      // 函数主要服务于事件
      say (h) {
        console(h)
        //出现错误!!
      }
    }
  }
}
</script>
