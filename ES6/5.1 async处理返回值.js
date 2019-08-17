function q() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve('nihao')
    }, 1000)
  })
}


(async function () {
  const res = await q()
  console.log('第一次:', res);

  const res2 = await q()
  console.log('第二次:', res2);

  const res3 = await q()
  console.log('第三次:', res3);


})()