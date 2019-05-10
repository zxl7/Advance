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
      <!-- 方法可传参 -->
      <button @click="say('传参shu')">say</button>
    </div>

    <div @click="dothis2">
      <!-- 方法可传参 -->
      <button @click.stop="dothis">dothis</button>
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
    },
    say (h) {
      alert(h)
    },
    dothis () {
      alert(1)
    },
    dothis2 () {
      alert(2)
    }
  }
}
</script>
