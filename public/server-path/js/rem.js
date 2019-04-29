(function () {
    var designW = 750;  //设计稿宽
    var font_rate = 75;
    //适配
    document.getElementsByTagName("html")[0].style.fontSize = document.body.offsetWidth / designW * font_rate + "px";
    document.getElementsByTagName("body")[0].style.fontSize = document.body.offsetWidth / designW * font_rate + "px";

    //监测窗口大小变化
    window.addEventListener("onorientationchange" in window ? "orientationchange" : "resize", function () {
        document.getElementsByTagName("html")[0].style.fontSize = document.body.offsetWidth / designW * font_rate + "px";
        document.getElementsByTagName("body")[0].style.fontSize = document.body.offsetWidth / designW * font_rate + "px";
    }, false);
})();