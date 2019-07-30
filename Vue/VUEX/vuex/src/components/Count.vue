<template>
  <div>
    <h2>{{msg}}</h2>
    <h3>{{count}}</h3>
    <p>
      <button @click="$store.commit('add',50)">+</button>
      <button @click="$store.commit('reduce')">-</button>
    </p>
    <p>
      <button @click="$store.commit('add',50)">+</button>
      <button @click="$store.commit('reduce')">-</button>
    </p>
    <h3>{{$store.state.a.count}}</h3>
  </div>
</template>

<script>
import store from '@/vuex/store'
import { mapState, mapMutations, mapGetters, mapActions } from 'vuex'
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
  computed: {
    ...mapState(['count']),
    ...mapGetters(['count'])
  },
  methods: {
    ...mapMutations(['add', 'reduce']),
    ...mapActions(['addAction', 'reduceAction'])
  },
  store
}
</script>
