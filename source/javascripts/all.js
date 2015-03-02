//= require jquery
//= require_tree .
//= require bootstrap
//= require_validate

setInterval(function(){
  var spacer = $('.spacer').height();
  var spacer = spacer + 200
  $('body').css({'height':spacer + 'px'});
  $('html').css({'height':spacer + 'px'});
}, 100);
