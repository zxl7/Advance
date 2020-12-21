<template>
  <div class="home">
    <h1>˘</h1>
    <div class="frame">
      <main class="center">
        <div class="ball"></div>
        <div class="blubb-1"></div>
        <div class="blubb-2"></div>
        <div class="blubb-3"></div>
        <div class="blubb-4"></div>
        <div class="blubb-5"></div>
        <div class="blubb-6"></div>
        <div class="blubb-7"></div>
        <div class="blubb-8"></div>
        <div class="sparkle-1"></div>
        <div class="sparkle-2"></div>
        <div class="sparkle-3"></div>
        <div class="sparkle-4"></div>
        <div class="sparkle-5"></div>
        <div class="sparkle-6"></div>
        <div class="sparkle-7"></div>
        <div class="sparkle-8"></div>
        <div class="sparkle-9"></div>
        <div class="sparkle-10"></div>
      </main>
    </div>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component'

@Options({
  components: {},
})
export default class Home extends Vue {}
</script>

<style lang="scss" scoped>
.home {
  margin: 0 auto;
  padding-top: 50px;
}

.frame {
  position: absolute;
  top: 50%;
  left: 50%;
  width: 400px;
  height: 400px;
  margin-top: -200px;
  margin-left: -200px;
  border-radius: 2px;
  box-shadow: 1px 2px 10px 0px rgba(0, 0, 0, 0.3);
  background: #000;
  /* -webkit-filter: contrast(25); */
  filter: contrast(25);
}

.center {
  position: absolute;
  top: 50%;
  left: 50%;
  -webkit-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
}

.ball {
  position: relative;
  width: 90px;
  height: 90px;
  background: #fff;
  border-radius: 50%;
  -webkit-filter: blur(15px);
  filter: blur(15px);
}
.blubb-1 {
  position: absolute;
  top: 20px;
  left: 20px;
  width: 50px;
  height: 50px;
  transform: rotate(172deg);
}
.blubb-1:after {
  position: absolute;
  display: block;
  content: '';
  width: 50px;
  height: 50px;
  background: #fff;
  border-radius: 50%;
  transform-origin: 37px 37px;
  animation: rotate 2.7s ease-in-out 0.2s infinite;
  filter: blur(5px);
}

.blubb-2 {
  position: absolute;
  top: 20px;
  left: 20px;
  width: 50px;
  height: 50px;
  transform: rotate(70deg);
}
.blubb-2:after {
  position: absolute;
  display: block;
  content: '';
  width: 50px;
  height: 50px;
  background: #fff;
  border-radius: 50%;
  transform-origin: 34px 34px;
  animation: rotate 2.9s ease-in-out 0.4s infinite;
  filter: blur(5px);
}

.blubb-3 {
  position: absolute;
  top: 20px;
  left: 20px;
  width: 50px;
  height: 50px;
  transform: rotate(58deg);
}
.blubb-3:after {
  position: absolute;
  display: block;
  content: '';
  width: 50px;
  height: 50px;
  background: #fff;
  border-radius: 50%;
  transform-origin: 31px 31px;
  animation: rotate 3.1s ease-in-out 0.6s infinite;
  filter: blur(5px);
}

.blubb-4 {
  position: absolute;
  top: 20px;
  left: 20px;
  width: 50px;
  height: 50px;
  transform: rotate(50deg);
}
.blubb-4:after {
  position: absolute;
  display: block;
  content: '';
  width: 50px;
  height: 50px;
  background: #fff;
  border-radius: 50%;
  transform-origin: 28px 28px;
  animation: rotate 3.3s ease-in-out 0.8s infinite;
  filter: blur(5px);
}

.blubb-5 {
  position: absolute;
  top: 20px;
  left: 20px;
  width: 50px;
  height: 50px;
  transform: rotate(154deg);
}
.blubb-5:after {
  position: absolute;
  display: block;
  content: '';
  width: 50px;
  height: 50px;
  background: #fff;
  border-radius: 50%;
  transform-origin: 25px 25px;
  animation: rotate 3.5s ease-in-out 1s infinite;
  filter: blur(5px);
}

.blubb-6 {
  position: absolute;
  top: 20px;
  left: 20px;
  width: 50px;
  height: 50px;
  transform: rotate(52deg);
}
.blubb-6:after {
  position: absolute;
  display: block;
  content: '';
  width: 50px;
  height: 50px;
  background: #fff;
  border-radius: 50%;
  transform-origin: 22px 22px;
  animation: rotate 3.7s ease-in-out 1.2s infinite;
  filter: blur(5px);
}

.blubb-7 {
  position: absolute;
  top: 20px;
  left: 20px;
  width: 50px;
  height: 50px;
  transform: rotate(80deg);
}
.blubb-7:after {
  position: absolute;
  display: block;
  content: '';
  width: 50px;
  height: 50px;
  background: #fff;
  border-radius: 50%;
  transform-origin: 19px 19px;
  animation: rotate 3.9s ease-in-out 1.4s infinite;
  filter: blur(5px);
}

.blubb-8 {
  position: absolute;
  top: 20px;
  left: 20px;
  width: 50px;
  height: 50px;
  transform: rotate(234deg);
}
.blubb-8:after {
  position: absolute;
  display: block;
  content: '';
  width: 50px;
  height: 50px;
  background: #fff;
  border-radius: 50%;
  transform-origin: 16px 16px;
  animation: rotate 4.1s ease-in-out 1.6s infinite;
  filter: blur(5px);
}

.sparkle-1 {
  position: absolute;
  top: 38px;
  left: 38px;
  width: 8px;
  height: 8px;
  transform: rotate(265deg);
}
.sparkle-1:after {
  position: absolute;
  display: block;
  content: '';
  width: 8px;
  height: 8px;
  background: #fff;
  border-radius: 50%;
  transform-origin: 58px 58px;
  animation: rotate 3.7s ease-in-out 0.2s infinite;
  filter: blur(3px);
}

.sparkle-2 {
  position: absolute;
  top: 38px;
  left: 38px;
  width: 9px;
  height: 9px;
  transform: rotate(31deg);
}
.sparkle-2:after {
  position: absolute;
  display: block;
  content: '';
  width: 9px;
  height: 9px;
  background: #fff;
  border-radius: 50%;
  transform-origin: 56px 56px;
  animation: rotate 3.9s ease-in-out 0.4s infinite;
  filter: blur(3px);
}

.sparkle-3 {
  position: absolute;
  top: 38px;
  left: 38px;
  width: 10px;
  height: 10px;
  transform: rotate(273deg);
}
.sparkle-3:after {
  position: absolute;
  display: block;
  content: '';
  width: 10px;
  height: 10px;
  background: #fff;
  border-radius: 50%;
  transform-origin: 54px 54px;
  animation: rotate 4.1s ease-in-out 0.6s infinite;
  filter: blur(3px);
}

.sparkle-4 {
  position: absolute;
  top: 38px;
  left: 38px;
  width: 11px;
  height: 11px;
  transform: rotate(123deg);
}
.sparkle-4:after {
  position: absolute;
  display: block;
  content: '';
  width: 11px;
  height: 11px;
  background: #fff;
  border-radius: 50%;
  transform-origin: 52px 52px;
  animation: rotate 4.3s ease-in-out 0.8s infinite;
  filter: blur(3px);
}

.sparkle-5 {
  position: absolute;
  top: 38px;
  left: 38px;
  width: 12px;
  height: 12px;
  transform: rotate(60deg);
}
.sparkle-5:after {
  position: absolute;
  display: block;
  content: '';
  width: 12px;
  height: 12px;
  background: #fff;
  border-radius: 50%;
  transform-origin: 50px 50px;
  animation: rotate 4.5s ease-in-out 1s infinite;
  filter: blur(3px);
}

.sparkle-6 {
  position: absolute;
  top: 38px;
  left: 38px;
  width: 13px;
  height: 13px;
  transform: rotate(161deg);
}
.sparkle-6:after {
  position: absolute;
  display: block;
  content: '';
  width: 13px;
  height: 13px;
  background: #fff;
  border-radius: 50%;
  transform-origin: 48px 48px;
  animation: rotate 4.7s ease-in-out 1.2s infinite;
  filter: blur(3px);
}

.sparkle-7 {
  position: absolute;
  top: 38px;
  left: 38px;
  width: 14px;
  height: 14px;
  transform: rotate(81deg);
}
.sparkle-7:after {
  position: absolute;
  display: block;
  content: '';
  width: 14px;
  height: 14px;
  background: #fff;
  border-radius: 50%;
  transform-origin: 46px 46px;
  animation: rotate 4.9s ease-in-out 1.4s infinite;
  filter: blur(3px);
}

.sparkle-8 {
  position: absolute;
  top: 38px;
  left: 38px;
  width: 15px;
  height: 15px;
  transform: rotate(32deg);
}
.sparkle-8:after {
  position: absolute;
  display: block;
  content: '';
  width: 15px;
  height: 15px;
  background: #fff;
  border-radius: 50%;
  transform-origin: 44px 44px;
  animation: rotate 5.1s ease-in-out 1.6s infinite;
  filter: blur(3px);
}

.sparkle-9 {
  position: absolute;
  top: 38px;
  left: 38px;
  width: 16px;
  height: 16px;
  transform: rotate(147deg);
}
.sparkle-9:after {
  position: absolute;
  display: block;
  content: '';
  width: 16px;
  height: 16px;
  background: #fff;
  border-radius: 50%;
  transform-origin: 42px 42px;
  animation: rotate 5.3s ease-in-out 1.8s infinite;
  filter: blur(3px);
}

.sparkle-10 {
  position: absolute;
  top: 38px;
  left: 38px;
  width: 17px;
  height: 17px;
  transform: rotate(74deg);
}
.sparkle-10:after {
  position: absolute;
  display: block;
  content: '';
  width: 17px;
  height: 17px;
  background: #fff;
  border-radius: 50%;
  transform-origin: 40px 40px;
  animation: rotate 5.5s ease-in-out 2s infinite;
  filter: blur(3px);
}

@keyframes rotate {
  from {
    transform: rotate(0deg) translate3d(0, 0, 0);
  }
  to {
    transform: rotate(360deg) translate3d(0, 0, 0);
  }
}
</style>
