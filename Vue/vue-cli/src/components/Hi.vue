<template>
  <div>
    <h2>{{msg}}</h2>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "hi",
  data() {
    return {
      msg: "新的学习Hi"
    };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
