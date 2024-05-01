const heightOutput = document.querySelector("#height");
const widthOutput = document.querySelector("#width");

var a = document.getElementById("originNav");
var b = document.getElementById("targetNav");
var c = document.getElementById("targetFooter");

function reportWindowSize() {
    var originStyle = a.currentStyle || window.getComputedStyle(a);
    b.style.paddingTop = originStyle.marginRight
    b.style.paddingBottom = originStyle.marginRight
    c.style.paddingBottom = originStyle.marginRight
}

document.addEventListener("DOMContentLoaded", reportWindowSize());

window.onresize = reportWindowSize;