// 时间倒计时插件
function TimeDown(id, endDateStr) {
  var endDate = new Date(endDateStr);
  //结束时间
  var nowDate = new Date();
  //当前时间
  var totalSeconds = parseInt((endDate - nowDate) / 1000);
  //相差的总秒数
  var days = Math.floor(totalSeconds / (60 * 60 * 24));
  //天数
  var modulo = totalSeconds % (60 * 60 * 24);
  //取模（余数）
  var hours = Math.floor(modulo / (60 * 60));
  //小时数
  //分钟
  modulo = modulo % (60 * 60);
  //秒
  var minutes = Math.floor(modulo / 60);
  //输出到页面
  var seconds = modulo % 60;
  //延迟一秒执行自己
  console.log("还剩:" + days + "天" + hours + "小时" + minutes + "分钟" + seconds + "秒");
  setTimeout(function () {
    TimeDown(id, endDateStr);
  }, 1000)
}