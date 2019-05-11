<template>
  <div>
    <div>Slot插槽</div>
    <div>-------------------------------</div>
    <slots>
      <div>1234</div>
        <p>564645</p>
        <p slot="bottom">dibu 999</p>
    </slots>
  </div>
</template>

<script>
import slots from '@/components/slot.vue'
export default {
  data () {
    return {

    }
  },
  components: {
    slots
  }
}
</script>
