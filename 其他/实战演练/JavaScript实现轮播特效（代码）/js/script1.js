var timer = null,
    index = 0,
    pics = byId("banner").getElementsByTagName("div"),
    dots = byId("dots").getElementsByTagName("span"),
    size = pics.length,
    prev = byId("prev"),
    next = byId("next");

function byId(id) {
    return typeof(id) === "string" ? document.getElementById(id) : id;
}

//自动播放
function startAutoPlay() {
    timer = setInterval(function() {
        index++;
        if (index >= size) {
            index = 0;
        }
        changeImg();
        console.log(index)
    }, 3000)
}


function changeImg() {
    for (var i = 0, len = dots.length; i < len; i++) {
        pics[i].style.display = "none";
    }
    pics[index].style.display = "block";
}