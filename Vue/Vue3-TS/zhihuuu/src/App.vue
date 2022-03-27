<template>
  <ColumnList />
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import ColumnList from './components/ColumnList.vue'

export default defineComponent({
  name: 'App',
  components: {
    ColumnList,
  },
})
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
