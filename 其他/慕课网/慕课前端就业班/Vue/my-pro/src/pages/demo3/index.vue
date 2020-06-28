<template>
  <div>
    <div>model</div>
    <div>------------</div>
    <div>data: {{msg}}</div>
    <div>{{number + 1}}</div>
    <div v-html="rawHtml"></div>
    <div v-bind:class="red">123</div>
    <div v-on:click="say('hi')">点击我</div>
    <div @click="change">修改颜色</div>
    <div>{{ message | capitalize }}</div>
  </div>
</template>


<script>
export default {
  data() {
    return {
      msg: "haoahoxuexi",
      number: 2,
      rawHtml: "<h1>hhh1</h1>",
      red: "red",
      message: "message"
    };
  },

  methods: {
    change() {
      this.red = "blue";
    },
    say(h) {
      alert(h);
    }
  },
  filters: {
    capitalize() {
      return "过滤器";
    }
  }
};
</script>
