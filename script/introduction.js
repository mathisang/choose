setTimeout(function () {
    document.getElementById("logo").classList.add("animlogo");
    document.getElementById("logo").style.opacity = "1";
    document.getElementById("logo").style.width = "25rem";
}, 500);

setTimeout(function () {
    document.getElementById("logo").classList.add("poslogo");
}, 3600);

setTimeout(function () {
    document.getElementById("logo").style.top = "7%";
    document.getElementById("logo").style.left = "50%";
    document.getElementById("logo").style.width = "15rem";
}, 4000);

setTimeout(function () {
    document.getElementById("laptop").classList.add("animlaptop");
    document.getElementById("laptop").style.opacity = "1";
}, 6000);

setTimeout(function () {
    document.getElementById("start").classList.add("animbutton");
    document.getElementById("start").style.opacity = "1";
}, 6500);