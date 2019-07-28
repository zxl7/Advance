<template>
  <div>
    <p>{{msg}}</p>
    <p>{{$route.params.username}}</p>
    <p>{{$route.params.text}}</p>
  </div>
</template>

<script>
export default {
  data () {
    return {
      msg: '我是一号子组件！'
    }
  }
}
</script>
