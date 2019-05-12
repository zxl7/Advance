<template>
  <div>
    <div>移动组件库Mint UI</div>
  </div>
</template>

<script>
import { Toast } from 'mint-ui'
export default {
  data () {
    return {

    }
  },
  mounted () {
    Toast('提示信息')
  }
}
</script>
