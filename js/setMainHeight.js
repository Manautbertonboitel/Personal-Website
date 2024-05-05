// OTHER FEATURE Get and apply margins

// var navbar = document.querySelector("nav");
// var footer = document.querySelector("footer");
// var mainSection = document.querySelector("main");

// function reportWindowSize() {

//     var navbarStyle = navbar.currentStyle || window.getComputedStyle(navbar);
//     var navbarFullHeight = navbar.offsetHeight + navbarStyle.marginTop;

//     var footerStyle = footer.currentStyle || window.getComputedStyle(footer);
//     var footerFullHeight = footer.offsetHeight + footerStyle.marginTop; 


//     var mainSectionStyle = mainSection.currentStyle || window.getComputedStyle(mainSection);

//     mainSectionStyle.offsetHeight = mainSectionStyle.offsetHeight - footerFullHeight - navbarFullHeight;
//     console.log("main height =" + mainSectionStyle.offsetHeight);
// }

// // Do things when page's DOM is loaded
// // document.addEventListener("DOMContentLoaded", reportWindowSize());

// // Do things at each resize
// window.onresize = reportWindowSize;

var navbar = document.querySelector("nav");
var footer = document.querySelector("footer");
var mainSection = document.querySelector("main");
var cssRoot = document.querySelector(":root");

function reportWindowSize() {

    // console.log(getComputedStyle(cssRoot).getPropertyValue("--navAndFooterHeight"));
    // console.log("navbar offset height = " + window.getComputedStyle(navbar).height);
    // console.log("navbar margin-top = " + window.getComputedStyle(navbar).marginTop);
    var w = window.innerWidth;
    if (w > 1070) {
        var navbarValue = parseFloat(window.getComputedStyle(navbar).height, 10) + parseFloat(window.getComputedStyle(navbar).marginTop, 10) + "px";
        var footerValue = parseFloat(window.getComputedStyle(footer).height, 10) + parseFloat(window.getComputedStyle(footer).marginBottom, 10) + "px";
        var mainSectionMargin = parseFloat(window.getComputedStyle(mainSection).marginTop, 10) + parseFloat(window.getComputedStyle(mainSection).marginBottom, 10) + "px";
        var finalValue = parseFloat(navbarValue, 10) + parseFloat(footerValue, 10) + parseFloat(mainSectionMargin, 10) + "px";
        console.log("finalValue = " + finalValue);
    
        cssRoot.style.setProperty("--navAndFooterHeight", finalValue);
    } else if (w < 1070) {
        var footerValue = parseFloat(window.getComputedStyle(footer).height, 10) + parseFloat(window.getComputedStyle(footer).marginBottom, 10) + "px";
        var mainSectionMargin = parseFloat(window.getComputedStyle(mainSection).marginTop, 10) + parseFloat(window.getComputedStyle(mainSection).marginBottom, 10) + "px";
        var finalValue = parseFloat(footerValue, 10) + parseFloat(mainSectionMargin, 10) + "px";
        console.log("finalValue = " + finalValue);
    
        cssRoot.style.setProperty("--navAndFooterHeight", finalValue);
    }
    // console.log(getComputedStyle(cssRoot).getPropertyValue("--navAndFooterHeight"));
}

// document.addEventListener("DOMContentLoaded", reportWindowSize());
window.onload = reportWindowSize;
window.onresize = reportWindowSize;
