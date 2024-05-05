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

function reportWindowSize() {

    // var navbarStyle = navbar.currentStyle || window.getComputedStyle(navbar);
    var navbarStyle = window.getComputedStyle(navbar);
    var navbarFullHeight = navbar.height + navbarStyle.marginTop;
    console.log("navbar offset height = " + navbar.height);
    console.log("navbar margin-top = " + navbarStyle.marginTop);
    console.log("navbar offset + height = " + navbarFullHeight);

    // var footerStyle = footer.currentStyle || window.getComputedStyle(footer);
    // var footerFullHeight = footer.offsetHeight + footerStyle.marginTop; 


    // var mainSectionStyle = mainSection.currentStyle || window.getComputedStyle(mainSection);

    // mainSectionStyle.offsetHeight = mainSectionStyle.offsetHeight - footerFullHeight - navbarFullHeight;
    // console.log("main height =" + mainSectionStyle.offsetHeight);
}

document.addEventListener("DOMContentLoaded", reportWindowSize());

window.onresize = reportWindowSize;
