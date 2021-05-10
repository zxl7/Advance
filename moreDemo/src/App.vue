<template>
  <div>
    <appHeader />
    <router-view />
  </div>
</template>

<script>
import appHeader from './components/header'
export default {
  components: {
    appHeader,
  },
}
</script>

<style lang="scss">
@import './assets/css/reset.css';

#app {
  font-family: serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
