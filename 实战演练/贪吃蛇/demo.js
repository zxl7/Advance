//点击开始游戏>>startPage消失   游戏开始
//随机出现食物,出现三界狂蛇开始运动
//上下左右>>改变方向
//判断是否吃到食物>>食物消失,狂蛇加一
//判段游戏结束弹出框

var content = document.getElementById('content');
var startPage = document.getElementById('startPage');

init();

function init() {
    //地图
    this.mapW = parseInt(window.getComputedStyle(content).width);
    //取得宽高
    this.mapH = parseInt(window.getComputedStyle(content).height);
    this.mapDiv = content;
    //食物
    this.foodW = 20;
    this.foodH = 20;
    this.foodX = 0;
    this.foodY = 0;
    // 蛇
    this.snakeW = 20;
    this.snakeH = 20;
    this.snakeBody = [
        [3, 1, 'head'],
        [2, 1, 'body'],
        [1, 1, 'body']
    ];
    this.direct = 'right';
    this.
    startGame();
}

function startGame() {
    food();
    snake();
}

function food() {
    var food = document.createElement('div');
    food.style.width = this.foodW + 'px';
    food.style.height = this.foodH + 'px';
    food.style.borderRadius = '50%';

    food.style.left = this.foodX * this.foodW + 'px';
    food.style.top = this.foodY * this.foodH + 'px';

    food.style.position = 'absolute';
    this.foodX = Math.floor(Math.random() * (this.mapW / this.foodW));
    this.foodY = Math.floor(Math.random() * (this.mapH / this.foodH));
    this.mapDiv.appendChild(food).setAttribute('class', 'food');
}

function snake() {
    for (var i = 0; i < snakeBody.length; i++) {
        var snake = document.createElement('div');
        snake.style.width = this.snakeW + 'px';
        snake.style.height = this.snakeH + 'px';
        snake.style.position = 'absolute';
        snake.style.left = this.snakeBody[i][0] * 20 + 'px';
        snake.style.top = this.snakeBody[i][1] * 20 + 'px';
        snake.classList.add(this.snakeBody[i][2]);
        this.mapDiv.appendChild(snake).classList.add('snake');
    }
}

function move() {
    for (let i = 0; i < this.snakeBody.length; i++) {
        tis.snakeBody[i][0] = this.snakeBody[i - 1][0];
        tis.snakeBody[i][0] = this.snakeBody[i - 1][1];
    }
    switch (this.direct) {
        case 'right':
            this.snakeBody[0][0] += 1;
            break;
        case 'up':
            this.snakeBody[0][1] -= 1;
            break;
        case 'left':
            this.snakeBody[0][0] -= 1;
            break;
        case 'down':
            this.snakeBody[0][0] += 1;
            break;

    }
    removeClass('snake');
    snake();
}

function removeClass(className) {
    var ele = document.getElementsByClassName(className);
    while (ele.length>0){
        ele[0].parentNode.removeChild(ele[0]);
    }
}

function setDerict(code) {
    switch(code) {
        case 37:
        if(this.left){
            this.direct = 'left';
            break;
        }
        case :
            
            break;
    }
}

function bindEvent() {
    document.onkeydown = function (e) {
        let code = e.keyCode;
        deetDerict(cpde);
    }
}


