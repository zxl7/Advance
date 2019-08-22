class Adaptee {
  specificRequest() {
    return '德国标准插头'
  }
}

class Target {
  constructor() {
    this.adaptee = new Adaptee()
  }
  request() {
    let info = this.adaptee.specificRequest()
    return `${info} - 转换器 - 中国标准插头`
  }
}

// 测试
let target = new Target()
let res = target.request()

// 旧接口和使用者进行分离
// 符合开放封闭原则


var arr = ['java', 'book', 'web开发', '8月1号']

function arrToObj() {
  return {
    name: arr[0],
    type: arr[1],
    title: arr[2],
    data: arr[3],
  }
}


var adapter = new arrToObj(arr)
console.log(adapter); //.........
