var main = document.getElementsByClassName("main")[0];
var go = document.getElementById("go");
var timer,
  num = 0,
  speed = 5;
var color = ["red", "greend", "black"];

function cDiv() {
  //创建行和列
  var oDiv = document.createElement("div");
  var index = Math.floor[Math.random() * 4];
  oDiv.setAttribute("class", "row");

  for (var j = 0; j < 4; j++) {
    var iDiv = document.createElement("div");

    oDiv.appendChild(iDiv);
  }

  if (main.childNodes.length == 0) {
    main.appendChild(oDiv);
  } else {
    main.insertBefore(oDiv, main.childNodes[0]);
  }

  for (let i = 0; i < 4; i++) {
    if (i == index) {
      var clickDiv = main.childNodes[0].childNodes[index];
      //    为当前点击div设置上class类名 作为标记
      clickDiv.setAttribute("class", "i");
      clickDiv.style.backgroundColor = colors[index];
    }
  }
}

function move() {
  clearInterval(timer);
  timer = setInterval(function() {
    var step = parseInt(main.offsetTop) + speed;
    main.style.top = step + "px";
    if (parseInt(main.offsetTop) >= 0) {
      cDiv();
      main.style.top = "-150px";
    }
    var len = main.childNodes.lenth;
    if (len == 6) {
      for (var i = 0; i < 4; i++) {
        if (main.childNodes[len - 1].children[i].classList.contains("i")) {
          // 利用已经标记的class进行判断
          alert("游戏结束，得分：" + num);
          clearInterval(timer);
          // flag 用于标记当前游戏是否结束
          flag = false;
        }
      }
      main.removeChild(main.childNodes.length - 1);
    }
  }, 20);
}

function bindEvent() {
  main.addEventListener("click", function(e) {
    if (flag) {
      var tar = e.target;
      // 判断点击方块的class名 正确则改变当前方块的背景颜色 并且分数加一
      if (tar.className == "i") {
        tar.style.backgroundColor = "#bbb";
        tar.classList.remove("i");
        num++;
      } else {
        // 如果没有点击正确方块  游戏结束
        alert("游戏结束，得分：" + num);
        clearInterval(timer);
        // flag 用于标记当前游戏是否结束
        flag = false;
      }
      // 提高速度  改变每次改变的距离
      // 当当前分数达到能被10整除时 提高速度
      if (num % 10 == 0) {
        speed++;
      }
    }
  });
}

function clickStart() {
  go.addEventListener("click", function() {
    go.style.display = "none";
    move();
  });
}

clickStart();
