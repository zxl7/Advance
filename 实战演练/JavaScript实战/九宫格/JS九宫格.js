var boxAA = document.getElementsByClassName('item');
var run = document.getElementById('run');
var over = document.getElementById('over');
var time;

function begin() {
    var one = Math.floor(Math.random() * boxAA.length);
    var two = Math.floor(Math.random() * boxAA.length);
    var three = Math.floor(Math.random() * boxAA.length);

    if (one == two) {
        one = Math.floor(Math.random() * boxAA.length);
    } else if (one == three) {
        three = Math.floor(Math.random() * boxAA.length);
    } else if (two == three) {
        two = Math.floor(Math.random() * boxAA.length);
    }
    // 改变所选择的盒子的背景色;
    boxAA[one].style.backgroundColor = 'rgb' + colors();
    boxAA[two].style.backgroundColor = 'rgb' + colors();
    boxAA[three].style.backgroundColor = 'rgb' + colors();

}

function colors() {
    var rgb;
    var r = Math.floor(Math.random() * 265);
    var g = Math.floor(Math.random() * 265);
    var b = Math.floor(Math.random() * 265);
    rgb = '(' + r + ',' + g + ',' + b + ')';
    return rgb;
}

run.onclick = function() {
    clearInterval(time);
    time = setInterval(function() {
        for (var i = 0; i < boxAA.length; i++) {
            boxAA[i].style.backgroundColor = '';
        }
        begin();
    }, 1000);
}

over.onclick = function() {
    clearInterval(time);
    for (var i = 0; i < boxAA.length; i++) {
        boxAA[i].style.backgroundColor = '';
    }
}