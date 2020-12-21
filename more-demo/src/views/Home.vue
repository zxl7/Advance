<template>
  <div class="home">
    <h1>作品集</h1>
    <main class="main">
      <div class="rounds">
        <div class="round1"></div>
        <div class="round2"></div>
        <div class="round3"></div>
        <div class="round4"></div>
        <div class="round5"></div>
        <div class="round6"></div>
        <div class="round7"></div>
        <div class="round8"></div>
        <div class="round9"></div>
      </div>
    </main>
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

.main {
  height: 400px;
  width: 400px;
  margin: 0 auto;
  border-radius: 6px;
  background: #000;
  display: flex;
  justify-content: center;
  align-items: center;
  filter: contrast(30);

  .rounds {
    position: relative;
    width: 80px;
    height: 80px;
    border-radius: 50%;
    background: #fff;
    filter: blur(6px);

    .round1 {
      filter: blur(6px);
      position: absolute;
      width: 26px;
      height: 26px;
      top: 50%;
      left: 50%;
      transform: translateX(-50%) translateY(-50%);
      background-color: #fff;
      border-radius: 50%;
      animation: inside-motion 3s linear infinite;
      transform-origin: 40px 0px;
    }

    .round2 {
      @extend .round1;
      transform-origin: 40px 40px;
    }

    @keyframes inside-motion {
      0% {
        transform: rotate(0deg);
      }
      100% {
        transform: rotate(360deg);
      }
    }
  }
}
</style>
