define('utility', ['jquery'], function($) {

  var utility  = {},
      html = document.querySelector("html"),
      wh = window.innerHeight;

      console.log(wh);

  // SET ID

  utility.setId = function(target,id){
    setTimeout(function(){
      document.querySelector(target).setAttribute('id', id);
    }, 25);
  }

  // PRELOAD IMAGES
  // USAGE:
  // setTimeout(function(){
  //  utility.preload(landingData.preload_images)
  // }, 1000);*/

  utility.preload = function (arr) {
    var i = arr.length,
        o,
        d = document,
        b = d.body,
        p = d.getElementById('preload'),
        isIE = /*@cc_on!@*/0;
    while (i--) {
      if (isIE) {
        new Image().src = arr[i];
        continue;
      };
      o = d.createElement('object');
      o.data = arr[i];
      o.className += "invisible";
      p.appendChild(o);
    };
  } 

  utility.scrollCheckHeader = function(top) {
    $(window).scroll(function() {    
      var scroll = $(window).scrollTop();
      if (scroll <= top) {
        $('body').removeClass('scrolled')
      } else {
        $('body').addClass('scrolled')
      }
    });
  }

  utility.vidPlay = function(videoId) {
    var video = document.getElementById(videoId);
    $(window).scroll(function() {    
    var scroll = $(window).scrollTop();
      if (scroll <= wh - 60) {
        video.play();
      } else {
        video.pause();
      }
    });
  }

  utility.fadeIn = function(element,timeout,time) {
    setTimeout(function(){
      $(element).animate({ opacity: 1 }, time)
    }, timeout);
  }

  utility.imgDeferInit = function() {
    setTimeout(function(){
      var imgDefer = document.getElementsByTagName('img');
      for (var i=0; i<imgDefer.length; i++) {
          if(imgDefer[i].getAttribute('data-src')) {
          imgDefer[i].setAttribute('src',imgDefer[i].getAttribute('data-src'));
        }
      }
    }, 1000);
  }

  return utility;

});