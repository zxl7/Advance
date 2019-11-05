<template>
  <div id="app">
    <img src="./assets/logo.png" />
    <br />
    <div>
      <button @click="Go">前进</button>
      <button @click="goBack">后退</button>
      <button @click="goHome">返回首页</button>
    </div>
    <div>
      <router-link to="/">首页</router-link>|
      <router-link to="/hi">Hi页面</router-link>|
      <router-link to="/params/1997/这世界美好依旧">Params</router-link>|
      <router-link to="/xana">Xana</router-link>
      <router-link to="/goback">goBack</router-link>|
      <router-link to="/goParams/2019/世界就在我脚下！">Params</router-link>|
      <!-- <router-link :to="{name:'hi1',params:{username:'thor',text:'你是逆时光'}}">-Hi1页面</router-link>| -->
      <!-- <router-link to="/hi/Hi2">-Hi2页面</router-link> -->
    </div>
    <p>{{$route.name}}</p>
    <transition name="fade" mode="out-in">
      <router-view />
    </transition>
    <transition name="fade" mode="out-in">
      <router-view name="left" class="left"></router-view>
    </transition>
    <transition name="fade" mode="out-in">
      <router-view name="right" class="right"></router-view>
    </transition>
  </div>
</template>
<script>
export default {
  name: 'App',
  methods: {
    Go() {
      this.$router.go(1)
    },
    goBack() {
      this.$router.go(-1)
    },
    goHome() {
      this.$router.push('/')
    }
  }
}

</script>
<style>
* {
  margin: 0px;
}

#app {
  text-align: center;
  color: #2c3e50;
  margin-top: 160px;
}

.left {
  float: left;
  width: 50%;
  background-color: #ccc;
  height: 300px;
}

.right {
  float: right;
  width: 50%;
  background-color: #c0c;
  height: 300px;
}

.fade-enter {
  opacity: 0;
}

.fade-leave {
  opacity: 1;
}

.fade-enter-active {
  transition: opacity 0.5s;
}

.fade-leave-active {
  opacity: 0;
  transition: opacity 0.5s;
}

</style>
