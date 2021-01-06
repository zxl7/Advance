<template>
  <div>
    <h1>
      组件
    </h1>
    <Calendar />
  </div>
</template>
<script>
import Calendar from './calendar/calendar'
export default {
  components: {
    Calendar,
  },
  data() {
    return {}
  },

  mounted() {},
  methods: {},
}
</script>
<style lang="scss" scoped>
h1{
  margin: 20px auto;
}
</style>
