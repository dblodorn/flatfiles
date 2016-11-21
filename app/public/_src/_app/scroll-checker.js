define('scrollCheck', ['./debounce'], function(debounce) {
  
  var scroll = {},
      landingvideo = document.getElementById("home-video");

  var scrollCheck = {};

  scrollCheck.init = debounce(function(){
    scroll = {
       x: window.pageXOffset,
       y: window.pageYOffset
    };

    // PAUSE VIDEO ON SCROLL ON HOME PAGE
    if (landingvideo) {
      if(scroll.y <= 100) {
        landingvideo.play();
      } else {
        landingvideo.pause();
      }
    }
  }, 50);

  return scrollCheck;

});