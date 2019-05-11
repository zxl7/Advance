<template>
  <div>
    <div>表单控件绑定</div>
    <input v-model="mes">
    <p>双向绑定:{{mes}}</p>
    <input type="checkbox" value="bob" v-model="checkedNames">
    <br>
    <span>{{checkedNames}}</span>
    <!-- 选择列表 -->
    <div>
      <select v-model="selected">
        <option disabled value="">请选择</option>
        <option>A</option>
        <option>B</option>
        <option>C</option>
      </select>
      Selected:{{selected}}
      </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      mes: 'hhh我是第一个',
      checkedNames: [],
      selected: ''
    }
  },
  mounted () {
    alert(this.$route.params.userId)
  }
}
</script>
