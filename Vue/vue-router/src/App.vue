<template>
  <div id="app">
    <img src="./assets/logo.png" />
    <br />
    <router-link to="/">Home</router-link>|
    <router-link to="/params/198/jspang is very">params</router-link>|
    <router-link to="/goHome">goHome</router-link>|
    <router-link to="/goParams/111/i like Vue.js">goParamse</router-link>|
    <router-link to="/Hi1">Hi1</router-link>|
    <router-link to="/xana">xana</router-link>|
    <router-link to="/home1">home1</router-link>|
    <transition name="fade" mode="out-in">
      <router-view />
    </transition>
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

.fade-enter {
  opacity: 0;
}

.fade-enter-active {
  transition: opacity 0.5s;
}

.fade-leaver {
  opacity: 1;
}

.fade-leaver-active {
  opacity: 0;
  transition: opacity 0.5s;
}
</style>
