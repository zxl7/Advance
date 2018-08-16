var btn1 = document.getElementById('btn1');
var btn2 = document.getElementById('btn2');
var div = document.getElementsByClassName('class1');
var c2 = document.getElementsByClassName('c2');
console.log(c2[0])
console.log(typeof(div));
console.log(typeof(btn2));
console.log(div[1])
var set;
btn1.onclick = function() {
    clearInterval(set);
    set = setInterval(select, 1000);
    btn1.style.backgroundColor = "#ff7f02";
    btn2.style.backgroundColor = "#fff";
}
btn2.onclick = function() {
    colorRest();
    clearInterval(set);
    btn2.style.backgroundColor = "#ff7f02";
    btn1.style.backgroundColor = "#fff";
}

function select() {
    colorRest();
    var box = [];
    var N = [];
    var j;
    var i;
    var x = 3;
    //    var x = 8;
    //Method(1);       
    // for(i=0;i<3;i++) {
    //  M = Math.floor(Math.random()*9);
    //  N[i] = M
    // }
    // console.log(N)
    // if(N[0]!=N[1]&&N[1]!=N[2]&&N[0]!=N[2]) {
    //  for (j=0;j<x;j++){
    //      k = N[j];
    //      box[j]=div[k];
    //      box[j].style.backgroundColor = colors();
    //  }   
    // }else {
    //  select()
    // }
    //Method(2);
    for (i = 0; i < div.length; i++) {
        box[i] = i;
    }
    for (j = 0; j < x; j++) {
        do {
            M = Math.floor(Math.random() * 9)
        } while (box[M] == div.length
            //    ||M===4
        );
        box[M] = div.length;
        N[j] = div[M]
        N[j].style.backgroundColor = colors();
    }
    console.log(N)
}
// (for colorRest)
function colorRest() {
    for (i = 0; i < div.length; i++) {
        div[i].style.backgroundColor = '#ff7f02'
    }
}
// (for rgb)
function colors() {
    r = Math.floor(Math.random() * 255);
    g = Math.floor(Math.random() * 255);
    b = Math.floor(Math.random() * 255);
    color = "rgb(" + r + ',' + g + ',' + b + ")";
    return color
}
// (for #16)
// function colors() {
//  color = "#"+("00000"+((Math.random()*16777215+0.5)>>0).toString(16)).slice(-6);     
//  return color
// }
var reset = document.getElementById("reset")
reset.onclick = function() {
    colorRest();
    clearInterval(set);
    btn1.style.backgroundColor = "#fff";
    btn2.style.backgroundColor = "#fff";
}


// 回调函数实例
// 就是插入代码
var bb = []

function ss(xx) {
    var x = [];
    for (var i = 0; i < 3; i++) {
        x[i] = Math.floor(Math.random() * 9)

    }
    xx(x)
    console.log(x)
}

function xx(aaa) {
    if (aaa[0] == aaa[1] || aaa[1] == aaa[2] || aaa[0] == aaa[2]) {
        ss(xx)
    }
}
ss(xx)

//生成123//456//789的方法
// 失败的写法
for (let i = 0; i < 8; i = i + 3) {
    let b = i * 500
    setTimeout(function() {
        console.log("var：" + i);
        console.log("var：" + (i + 1));
        console.log("var：" + (i + 2));
    }, b)
}
//生成123//456//789的方法2
// 最合理的写法
var x = setInterval(xxx, 2000)
var n = 0;

function xxx() {
    for (var i = 0; i < 3; i++) {
        console.log(n)
        n++
        if (n >= 9) {
            n = 0
        }
    }
}