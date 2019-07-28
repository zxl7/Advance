<template>
  <div>
    <h2>{{msg}}</h2>
    <p>newsId:{{ $route.params.newsId }}</p>
    <p>newsTitle:{{ $route.params.newsTitle }}</p>
  </div>
</template>

<script>
export default {
  data () {
    return {
      msg: 'params pages'
    }
  },
  beforeRouteEnter: (to, from, next) => {
    console.log('准备进入Params路由模板！！')
    console.log(to)
    console.log(from)
    next()
    // 控制是否允许跳转
    // 跳转其他页面
  },
  beforeRouteLeave: (to, from, next) => {
    console.log('准备离开Params路由模板！！')
    console.log(to)
    console.log(from)
    next()
  }
}
</script>
