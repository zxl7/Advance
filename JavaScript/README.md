# JavaScript 👊

## iframe
```js
  var a2 = document.getElementById('iframe').contentWindow.document.getElementsByClassName('receipt-item')[1].href
```

## Data 对象
```js
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