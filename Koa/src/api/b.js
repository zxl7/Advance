module.exports = function b(ctx) {
  ctx.body = {
    message: '这是路径b',
  }
  console.log(ctx)
}

// export default {
//   b() {
//     ctx.body = {
//       message: 'bbb',
//     }
//   },
// }
