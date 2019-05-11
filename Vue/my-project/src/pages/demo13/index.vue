<template>
  <div>
    <div>Vue-routh</div>
    <div>-------------------------------</div>
    <router-link to='/demo9'>demo9</router-link>
    <div>-------------------------------</div>
    <router-link :to="{name:'demo9',params:{userId:123}}">params</router-link>
    <div>-------------------------------</div>
    <router-link :to="{name:'demo9',params:{userId:123},query:{plan:'private' }}">query</router-link>
    <!-- js方式跳转 -->
    <div>-------------------------------</div>
    <button @click="toURL">跳转页面</button>
  </div>
</template>

<script>
export default {
  data () {
    return {
    }
  },
  methods: {
    toURL () {
      // this.$router.push({path: '/demo8'})
      // this.$router.push({name: 'demo9', params: {userId: 123123}})
      this.$router.push({name: 'demo9',
        params: {userId: 123123},
        query: {plan: 'private'}})
    }
  }
}
</script>
