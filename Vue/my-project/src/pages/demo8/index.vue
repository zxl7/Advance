<template>
  <div>
    <div>事件处理器</div>
    <div id="exmaple-1">
      <button @click="counter+=1">加一</button>
      <p>这个按钮被点击了{{counter}}次</p>
    </div>

    <div id="exmaple-2">
      <!-- gltter是方法名 -->
      <button @click="gltter">Gltter</button>
    </div>

    <div id="exmaple-3">
      <button @click="counter+=1">加一</button>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      counter: 0
    }
  },
  methods: {
    gltter () {
      this.counter++
    }
  }
}
</script>
