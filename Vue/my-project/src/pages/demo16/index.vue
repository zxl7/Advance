<template>
  <div>
    <div>Vue-resource请求</div>
    <div>---------------------------------</div>

  </div>
</template>

<script>
export default {
  data () {
    return {

    }
  },
  mountes () {
    this.$http.get('/someUrl').then(response => {
      console.log(response.body)
    }, response => {
      // error callback
    })

    this.$http.post('/someUrl', {foo: 'bar'}).then(response => {
      console.log(response.body)
    }, response => {
      // error callback
    })

    this.$http.get('/someUrl', {params: {foo: 'bar'},
      headers: {
        'X-custom': '...'}}).then(response => {
      // success callback
    }, response => {
      // error callback
    })
  }
}
</script>
