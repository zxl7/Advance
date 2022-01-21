
// 用于处理二进制数据流
console.log(Buffer.alloc(10));

console.log(Buffer.from([1, 2, 3]));

console.log(Buffer.isBuffer(Buffer.from([1, 2, 3])));

// Buffer.concat  拼接数组

const buf = Buffer.from('sdsd')  //create el
// buf.length 占用空间
// buf.toString()
// buf.fill()