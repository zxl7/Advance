// 设置画布

var canvas = document.querySelector('canvas');
var ctx = canvas.getContext('2d');

var width = canvas.width = window.innerWidth;
var height = canvas.height = window.innerHeight;

// 函数生成随机数

function random(min, max) {
    var num = Math.floor(Math.random() * (max - min)) + min;
    return num;
}

// 球定义构造函数

function Ball(x, y, velX, velY, color, size) {
    this.x = x;
    this.y = y;
    this.velX = velX;
    this.velY = velY;
    this.color = color;
    this.size = size;
}

// 画小球

Ball.prototype.deaw = function () {
	ctx.beginPath();
	ctx.fillStyle = this.color;
	ctx.arc(this.x, this.y, this.size, 0,2 *Math.PI);
	ctx.fill();
}

