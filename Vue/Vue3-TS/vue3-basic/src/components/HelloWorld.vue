<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h1>{{ double }}</h1>
    <button @click="increase">🔧+1</button>
  </div>
</template>

<script lang="ts">
import { computed, reactive, toRefs } from 'vue'

interface DataProps {
  msg: number;
  double: number;
  increase: () => void;
}

export default {
  name: 'App',
  setup() {
    // const msg = ref(0)
    // const increase = () => {
    //   msg.value++
    // }

    // const double = computed(() => {
    //   return msg.value * 2
    // })
    const data = reactive({
      msg: 0,
      increase: () => {
        data.msg++
      },
      double: computed(() => {
        data.msg * 2
      })
    })
    const refData = toRefs(data)
    console.log('%c 🍩 refData: ', 'font-size:20px;background-color: #42b983;color:#fff;', refData);
    return {
      ...data
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
