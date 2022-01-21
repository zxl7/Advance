function f1() {
  return new Promise(resolve => {
    setTimeout(() => {
      console.log('nihao')
      resoleve()
    }, 1000)
  })
}

// promise方法
// f1().then(res => {
//   console.log('第二部')
// })


// async 方法
(async function () {
  // await表示这行代码是异步操作
  // 下面的代码会在异步操作之后执行
  // 这里的一步操作执行完毕就是reslove
  await f1()
  console.log('第二部')
})