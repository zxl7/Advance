function fn() {
  return new Promise((resolve, reejct) => {
    setTimeout(() => {
      console.log('你好')
      // 异步在此结束
      // 告诉外面
      resolve()
    }, 1000)
  })
}

fn().then(res => {
  console.log("下一步");

  fn().then(res => {
    console.log('执行第二步');

  })

})


// 解决回调地狱
function f1() {
  return new Promise(resolve => {
    setTimeout(() => {
      console.log('first')
      // 必须告诉外界 我执行完了
      resolve()
    }, 1000)
  })
}
function f2() {
  return new Promise(resolve => {
    setTimeout(() => {
      console.log('第二步')
      // 告诉外界，执行完毕
      resolve()
    }, 1000)
  })
}


f1().then(() => {
  return f2()
}).then(() => {
  setTimeout(() => {
    console.log('完成');

  }, 1000)
})

// 基本应用
var promise = new Promise((resolve, reject) => {
  // 异步操作
  // b
  $.get("$/getUser", res => {
    // 获取数据的异步操作已完成，等待下一步执行
    // 下一步操作，就在then回调中
    // c
    resolve(res)
  })

  // a
  promise.then(res => {
    // d
    console.log(res)
  })
})


// promise传参
function getUser() {
  return new Promise(resolve => {
    $.get('/getUser', res => {
      // res表示从服务器获取的数据
      // 将数据传下去
      // 告诉外界本次的异步操作已经执行完毕了
      resolve(res)
    })
  })
}

getUser().then(res => {
  // res 表示上一个异步操作返回的参数值，服务器数据
})


// Promise错误处理
function getBooks() {
  // 执行resolve成功
  // 执行reject()失败
  return new Promise((resolve, reject) => {
    $.ajax({
      url: "/getBooks",
      success(res) {
        // 成果获取数据
        resolve(res)
      },
      error(res) {
        // res表示错误信息
        // 失败则执行error
        reject(res)
      }
    })
  })
}

// 第一种错误处理：两个参数，定成败
getBooks().then(res => {
  // res表示请求成功时，获取到的数据
}, resError => {
  console.log('你可能失败了')
})

// 第二种错误处理，推荐
// 不仅仅可以捕获reject传递的参数
// 还可以捕获成功的回调中发生的错误。
getBooks().then(res => {
  // Success
}).catch(resError => {
  // Error
})


function f1(name) {
  return new Promise((resilve, reject) => {
    setTimeout(() => {
      if (name == 'a') {
        resolve('成功')
      } else {
        rejecy('失败')
      }
    }, 1000)
  })
}

f1('a').then(res => {
  console.log(res) //成功
})

f1('b').then(res => {
  console.log('成功了')
}, resError => {
  console.log('失败而来');

})