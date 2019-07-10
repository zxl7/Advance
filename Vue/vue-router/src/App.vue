<template>
  <div id="app">
    <img src="./assets/logo.png" /><br>
    <router-link to="/"> Home</router-link>
    <router-link to="/params/198/jspang is very"> params</router-link>
    <router-link to="/goHome">goHome</router-link>
    <router-link to="/goParams/111/i like Vue.js">goParamse</router-link>

    <router-view/>
  </div>
</template>

<script>
export default {
  name: "App"
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
