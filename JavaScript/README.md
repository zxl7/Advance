# JavaScript 👊

## iframe

```js
var a2 = document.getElementById('iframe').contentWindow.document.getElementsByClassName('receipt-item')[1].href
```

## Data 对象
```js
  // 分钟处理为 0天0小时0分钟
  averageTime(time) {
    const days = Math.floor(time / 1440)
    const hours = Math.floor(time % 1440 / 60)
    const minute = time % 60
    return `${days}天 ${hours}小时 ${minute}分钟`
  },
  
  formatDateTime () {
    let date = new Date()
    let y = date.getFullYear()
    let MM = date.getMonth() + 1
    MM = MM < 10 ? '0' + MM : MM
    let d = date.getDate()
    d = d < 10 ? '0' + d : d
    let h = date.getHours()
    h = h < 10 ? '0' + h : h
    let m = date.getMinutes()
    m = m < 10 ? '0' + m : m
    let s = date.getSeconds()
    s = s < 10 ? '0' + s : s
    return y + '-' + MM + '-' + d + ' ' + h + ':' + m + ':' + s
  }
```

## 函数技巧
```js
// 获取基本类型
function getType(obj){
  let type  = typeof obj;
  if (type !== "object") {    // 先进行typeof判断，如果是基础数据类型，直接返回
    return type;
  }
  // 对于typeof返回结果是object的，再进行如下的判断，正则返回结果
  return Object.prototype.toString.call(obj).replace(/^\[object (\S+)\]$/, '$1');  // 注意正则中间有个空格
}
```

```js
// 函数触发一次
function once(fn) {
  let called = false
  return function () {
    if (!called) {
      called = true
      fn.apply(this, arguments)
    }
  }
}
```

```js
// 转换命名风格
const camelizeRE = /-(\w)/g
const camelize = cached((str) => {
  return str.replace(camelizeRE, (_, c) => (c ? c.toUpperCase() : ''))
})
camelize('a-b-c')
// "aBC"
```

```js
// 把值转换成字符串
function isPlainObject(obj) {
  return Object.prototype.toString.call(obj) === '[object Object]'
}
function toString(val) {
  if (val === null || val === undefined) return ''
  if (Array.isArray(val)) return JSON.stringify(val)
  if (isPlainObject(val) && val.toString === Object.prototype.toString) return JSON.stringify(val)
  return String(val)
}
```

```js
// 确定对象的类型
function toRawType(value) {
  const _toString = Object.prototype.toString
  return _toString.call(value).slice(8, -1)
}
toRawType(null) // "Null"
toRawType(/sdfsd/) // "RegExp"
```

```js
  // 数据转中文数字
  format(num) {
    var str = num + ''
    return (
      '¥' +
      str
        .split('')
        .reverse()
        .reduce((prev, next, index) => {
          return (index % 3 ? next : next + ',') + prev
        }) +
      '.00'
    )
  },
  //
  //  * @description 数字转中文数码
  //  *
  //  * @param {Number|String}   num     数字[正整数]
  //  * @param {String}          type    文本类型，lower|upper，默认upper
  //  *
  //  * @example number2text(100000000) => "壹亿元整"
  number2text(number, type = 'upper') {
    // 配置
    const confs = {
      lower: {
        num: ['零', '一', '二', '三', '四', '五', '六', '七', '八', '九'],
        unit: ['', '十', '百', '千', '万'],
        level: ['', '万', '亿']
      },
      upper: {
        num: ['零', '壹', '贰', '叁', '肆', '伍', '陆', '柒', '捌', '玖'],
        unit: ['', '拾', '佰', '仟'],
        level: ['', '万', '亿']
      },
      decimal: {
        unit: ['分', '角']
      },
      maxNumber: 999999999999.99
    }
    // 过滤不合法参数
    if (Number(number) > confs.maxNumber) {
      console.error(`The maxNumber is ${confs.maxNumber}. ${number} is bigger than it!`)
      return false
    }
    const conf = confs[type]
    const numbers = String(Number(number).toFixed(2)).split('.')
    const integer = numbers[0].split('')
    const decimal = Number(numbers[1]) === 0 ? [] : numbers[1].split('')
    // 四位分级
    const levels = integer.reverse().reduce((pre, item, idx) => {
      let level = pre[0] && pre[0].length < 4 ? pre[0] : []
      let value = item === '0' ? conf.num[item] : conf.num[item] + conf.unit[idx % 4]
      level.unshift(value)

      if (level.length === 1) {
        pre.unshift(level)
      } else {
        pre[0] = level
      }
      return pre
    }, [])

    // 整数部分
    const _integer = levels.reduce((pre, item, idx) => {
      let _level = conf.level[levels.length - idx - 1]
      let _item = item.join('').replace(/(零)\1+/g, '$1') // 连续多个零字的部分设置为单个零字

      // 如果这一级只有一个零字，则去掉这级
      if (_item === '零') {
        _item = ''
        _level = ''

        // 否则如果末尾为零字，则去掉这个零字
      } else if (_item[_item.length - 1] === '零') {
        _item = _item.slice(0, _item.length - 1)
      }
      return pre + _item + _level
    }, '')
    // 小数部分
    let _decimal = decimal
      .map((item, idx) => {
        const unit = confs.decimal.unit
        const _unit = item !== '0' ? unit[unit.length - idx - 1] : ''
        return `${conf.num[item]}${_unit}`
      })
      .join('')
    // 如果是整数，则补个整字
    return `${_integer}元` + (_decimal || '整')
  },

```

## 时间

```js
  // 获取今天时间
  formatDateTime() {
    let date = new Date()
    let y = date.getFullYear()
    let MM = date.getMonth() + 1
    MM = MM < 10 ? '0' + MM : MM
    let d = date.getDate()
    d = d < 10 ? '0' + d : d
    // let h = date.getHours();
    // h = h < 10 ? "0" + h : h;
    // let m = date.getMinutes();
    // m = m < 10 ? "0" + m : m;
    return y + '-' + MM + '-' + d
  }
```

## 数组重组

```js
// 值的重构
    valueTraverse(beforeData) {
      let arr = []
      let afterArr = []
      beforeData.forEach((before) => {
        arr.push(before.group_id)
      })
      arr = [...new Set(arr)]
      arr.forEach((key) => {
        const afterData = []
        beforeData.forEach((before) => {
          if (before.group_id === key) {
            afterData.push(before)
          }
        })
        afterArr.push(afterData)
      })

      return afterArr
    },
```
