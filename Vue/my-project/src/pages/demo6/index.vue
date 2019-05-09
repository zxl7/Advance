<template>
  <div>
    <div>条件渲染</div>
    <h1 v-if="ok">Yes</h1>
    <div v-if="type === 'a'">a</div>
    <div v-else-if="type === 'b'">b</div>
    <div v-else-if="type === 'c'">c</div>
    <div v-else>NOT a/b/c</div>
    <div>----------------------</div>
    <div v-show="isShow">123</div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      ok: true,
      type: 'a',
      isShow: true
    }
  }
}
</script>
