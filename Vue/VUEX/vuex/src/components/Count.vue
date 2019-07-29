<template>
  <div>
    <h2>{{msg}}</h2>
    <h3>{{count}}</h3>
    <p>
      <button @click="$store.commit('add',10)">+</button>
      <button @click="$store.commit('reduce')">-</button>
    </p>
  </div>
</template>

<script>
import store from '@/vuex/store'
import { mapState, mapMutations } from 'vuex'
export default {
  data () {
    return {
      msg: 'state状态！！'
    }
  },
  // computed: {
  //   count () {
  //     return this.$store.state.count
  //   }
  // }
  // 方法二：
  // computed: mapState({
  //   count: state => state.count
  // })
  // 方法三
  computed: mapState(['count']),
  methods: mapMutations(['add', 'reduce']),
  store
}
</script>
