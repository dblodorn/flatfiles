// IMPORT SASS BASE
import './_sass/main.sass'

// VENDOR
import $ from 'jquery'
import series from 'async-series'

// RUN CONFIG
var initApp = function() {
  setTimeout(function(){
    $('main').animate({opacity: 1}, 500)
  }, 1000);
}

// RUN APP
document.addEventListener('DOMContentLoaded', initApp);