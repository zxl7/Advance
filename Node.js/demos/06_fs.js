const fs = require('fs')

const result = fs.readFile('./06_fs.js', (err, data) => {
  if (err) {
    console.log(err)
    // 打印错误对象
  } else {
    console.log(data.toString())
  }
})

console.log(result)
