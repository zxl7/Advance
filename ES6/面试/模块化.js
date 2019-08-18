// export语法，默认输出一个
// util1.js
export default {
  a: 100
}

// util2.js
export function fn1() {
  alert('fn1')
}
export function fn2() {
  alert('fn2')
}

// import语法，引入
import util1 from './util1.js'
import { fn1, fn2 } from './util2.js'