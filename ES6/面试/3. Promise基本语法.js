function loadImg(src) {
  const promise = new Promise(function (result, reject) {
    var img = document.createElement('img')
    img.onload = function () {
      result(img)
    }
    img.onerror = funtion() {
      reject()
    }
    img.src = src
  })
  return promise
}

var src = 'url..........'
var result = loadImg(src)
result.then(function (img) {
  console.log(omg.width)
}, function () {
  console.log('failed');
})
result.then(function (img) {
  console.log(img.heught);
})


// new Promise实例，而且需要return
// new Promise时要传入函数，函数有resolve，reject两个参数
// 成功执行resolve，失败执行reject
// then 监听结果
