// Function.prototype.call()
// call() 方法使用一个指定的 this 值和单独给出的一个或多个参数来调用一个函数。
Function.prototype.call2 = function (context) {
  var context = context || window
  context.fn = this

  var args = []
  for (var i = 1, len = arguments.length; i < len; i++) {
    args.push('arguments[' + i + ']')
  }

  var result = eval('context.fn(' + args + ')')

  delete context.fn
  return result
}

// 测试一下
// var value = 2;

// var obj = {
//     value: 1
// }

// function bar(name, age) {
//     console.log(this.value);
//     return {
//         value: this.value,
//         name: name,
//         age: age
//     }
// }

// bar.call(null); // 2

// console.log(bar.call2(obj, 'kevin', 18));
// Object {
//    value: 1,
//    name: 'kevin',
//    age: 18
// }
