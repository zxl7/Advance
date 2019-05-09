<template>
  <div>
    <div>Class和style绑定</div>
    <!-- 第一种绑定方式 -->
    <div class="static" :class="{'active':isActive,'text-danger':hasError}">class</div>
    <!-- 第二种绑定方式 -->
    <div :class="classObject">class2</div>
    <!-- 第三种绑定方式 -->
    <div :class="[activeClass,errorClass]">c lass3</div>

    <div style="color:red; fontSize:13px">style</div>
    <div :style="{'color':activeColor,'fontSize':fontSize + 'px'}">style1</div>
    <div :style="styleObject">style2</div>
    <div :style="[baseStyle,overStyle]">style3</div>
    <div></div>
    <div></div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      isActive: true,
      hasError: false,
      classObject: {
        'active': true,
        'text-danger': true
      },
      activeClass: 'active',
      errorClass: 'text-danger',
      activeColor: 'red',
      fontSize: '24',
      styleObject: {
        'color': 'blue',
        'fontSize': '24px'
      },
      baseStyle: {
        color: 'red'
      },
      overStyle: {
        fontSize: '54px'
      }

    }
  }
}
</script>
