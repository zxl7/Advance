<template>
  <div>
    <div>mo模板语法</div>
    <div>data:{{msg}}</div>
    <div>{{number +6}}</div>
    <div v-html="rawH"></div>
    <div :class="red">red</div>
    <div @click="say('hi didi')">点击</div>
    <div @click="change">改变</div>
    <div>{{message | capitalize}}</div>
    <div></div>

  </div>
</template>

<script>
export default {
  data () {
    return {
      msg: 'didjiuwo',
      number: 1,
      rawH: '<h1>一级标题</h1>',
      red: 'red red red',
      messagg: 'message'
    }
  },
  methods: {
    change () {
      this.red = 'blue'
    },
    say (h) {
      alert(h)
    }

  },
  filters: {
    capitalize () {
      return '123'
    }
  }
}
</script>
