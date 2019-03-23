var oImg = $('img');
// 默认中间展示索引值为0的这张图片
var curDisplay = 0;
// 将图片分散排列

// 获得图片个数
var len = oImg.length;

// 定时器
var timer;

function init() {
    initalCarousel();
    bindEvent();
}
init();

function initalCarousel() {
    // 获得中间图片
    console.log($('img'))
    var hLen = Math.floor(oImg.length / 2);
    // rNum,lNum分别是分散在中间图片左右左右两侧的图片索引
    var rNum, lNum;
    for (var i = 0; i < hLen; i++) {
        lNum = curDisplay - i - 1;
        // console.log(lNum)
        // 分别让分散在左右两侧的图片平移旋转
        oImg.eq(lNum).css({
            transform: 'translateX(' + (-150 * (i + 1)) + 'px) translateZ(' + (200 - i * 100) + 'px) rotateY(30deg)'
        });
        rNum = curDisplay + i + 1;
        // 如果运动到最后一张 循环运动
        if (rNum > oImg.length - 1) {
            rNum -= oImg.length;
        }
        oImg.eq(rNum).css({
            transform: 'translateX(' + (150 * (i + 1)) + 'px) translateZ(' + (200 - i * 100) + 'px) rotateY(-30deg)'
        });
        oImg.removeClass('active');
    }

    // 当前显示图片直接z轴向前移动  同时添加class名作为标记
    
    oImg.eq(curDisplay).css({
        transform: 'translateZ(300px)'
    }).addClass('active');

}
// 点击事件
function bindEvent() {
    // 在每一张图片上绑定上点击事件
    oImg.on('click', function (e) {
        // 判断点击图片不是第一张显示图片 
        if (!$(this).hasClass('active')) {
            // 标记图片flag切换
            // 改变当前显示图片索引
            curDisplay = $(this).index();
            initalCarousel();
        }
        // 鼠标覆盖  清除自动轮播定时器
    }).hover(function () {
        clearInterval(timer);
        // 鼠标移走 继续轮播
    }, function () {
        play();
    });
}
// 自动播放
function play() {
    timer = setInterval(function () {
        if (curDisplay == len - 1) {
            curDisplay = 0;
        } else {
            curDisplay++;
        }
        initalCarousel();
    }, 2000);
}