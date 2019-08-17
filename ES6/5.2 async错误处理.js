function q() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      reject('nihao')
    }, 100)
  })
}

(async function () {
  try {
    let res = await q()
    console.log(res);
  } catch (e) {
    console.log(e);

  }
})()

// await可以执行异步操作，但是必须运行在async中
// await可以有返回值，表示promise操作成功的返回值

// 如果发生了reject，错误，那么只能用try...catch语法来执行错误处理