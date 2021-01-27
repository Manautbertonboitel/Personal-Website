document.addEventListener("DOMContentLoaded", function(event) {
    var cursor = document.querySelector(".cursor");
    var outercursor = document.querySelector(".outer-cursor");
    var links = document.querySelectorAll("a");
    var initCursor = false;
  
    for (var i = 0; i < links.length; i++) {
      var selfLink = links[i];
  
      selfLink.addEventListener("mouseover", function() {
        cursor.classList.add("cursor--link");
        outercursor.classList.add("outer-cursor--link");
      });
      selfLink.addEventListener("mouseout", function() {
        cursor.classList.remove("cursor--link");
        outercursor.classList.remove("outer-cursor--link");
      });
    }
  
    window.onmousemove = function(e) {
      var mouseX = e.clientX;
      var mouseY = e.clientY;
  
      if (!initCursor) {
        // cursor.style.opacity = 1;
        TweenLite.to(cursor, 0.3, {
          opacity: 1
        });
        TweenLite.to(outercursor, 0.3, {
            opacity: 1
        });
        initCursor = true;
      }
  
      TweenLite.to(cursor, 0.1, {
        top: mouseY + "px",
        left: mouseX + "px"
      });
      TweenLite.to(outercursor, 0.5, {
        top: mouseY + "px",
        left: mouseX + "px"
      });
    };
  
    window.onmouseout = function(e) {
      TweenLite.to(cursor, 0.3, {
        opacity: 0
      });
      TweenLite.to(outercursor, 0.3, {
        opacity: 0
      });
      initCursor = false;
    };
});