define('states', ['simplestatemanager'], function(ssm) {

  var states  = {},
      html = document.querySelector('html'),
      mobileNav = document.getElementById('mobile-nav'),
      desktopNav = document.getElementById('desktop-nav');

  states.init = function(){
  
    ssm.addState({
      id: 'small',
      query: '(max-width: 824px)',
      onEnter: function(){
        html.setAttribute('id','small');
      }
    });

    ssm.addState({
      id: 'medium',
      query: '(min-width: 825px) and (max-width: 1279px)',
      onEnter: function(){
        html.setAttribute('id','medium');
      }
    });

    ssm.addState({
      id: 'large',
      query: '(min-width: 1280px)',
      onEnter: function(){
        html.setAttribute('id','large');
      }
    });

  }

  return states;

});