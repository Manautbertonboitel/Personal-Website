// Look for specified elements

var hamburger = document.querySelector(".header__main__navs__button");
var header = document.querySelector(".navbar");
var body = document.querySelector("body");
var toggle1 = document.querySelector(".toggle1");
var toggle2 = document.querySelector(".toggle2");
var toggle3 = document.querySelector(".toggle3");

// On click
hamburger.addEventListener("click", function() {
    // Toggle class "is-active" && "open"
    header.classList.toggle("navs--collapse--open");
    body.classList.toggle("no-scroll");
});

toggle1.addEventListener("click", function() {
    // Toggle class "is-active" && "open"
    header.classList.toggle("navs--collapse--open");
    body.classList.toggle("no-scroll");
});

toggle2.addEventListener("click", function() {
    // Toggle class "is-active" && "open"
    header.classList.toggle("navs--collapse--open");
    body.classList.toggle("no-scroll");
});

toggle3.addEventListener("click", function() {
    // Toggle class "is-active" && "open"
    header.classList.toggle("navs--collapse--open");
    body.classList.toggle("no-scroll");
});

function reportWindowSize() {
    var w = window.innerWidth;
    if (w > 1070) {
        header.classList.remove("navs--collapse--open");
        body.classList.remove("no-scroll");
    }


    var originStyle = a.currentStyle || window.getComputedStyle(a);
    b.style.paddingTop = originStyle.marginRight
    b.style.paddingBottom = originStyle.marginRight
    c.style.paddingBottom = originStyle.marginRight
}

window.onresize = reportWindowSize;


const heightOutput = document.querySelector("#height");
const widthOutput = document.querySelector("#width");

var a = document.getElementById("originNav");
var b = document.getElementById("targetNav");
var c = document.getElementById("targetFooter");

document.addEventListener("DOMContentLoaded", reportWindowSize());

window.onresize = reportWindowSize;