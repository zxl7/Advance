<template>
  <div>
    <div>自定义组件</div>
    <div>----------------------</div>
    <countdown col="red" @end="ending"></countdown>
  </div>
</template>

<script>
import countdown from '@/components/countdown.vue'
// 引入
export default {
  data () {
    return {
    }
  },
  methods: {
    ending () {
      alert('结束啦')
    }
  },
  components: {
    countdown
  }
}
</script>
