<template>
  <div>
    <div>列表渲染</div>
    <div>------------------------------</div>
    <ul id="example-1">
      <li v-for="item in items">{{ item.message }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data () {
    return {
      items: [
        {message: 'Foo'},
        {message: 'Bar'}
      ]
    }
  }
}
</script>
