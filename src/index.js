var $               = require('jquery');
                      require('index.scss');
var coupon          = require('app.js');
var config          = require('config.js');
//Games:



console.log(config)



$(document).ready(function(){
  //Emits close event
  $('.cg-close-button').on('click', function() {
    parent.postMessage('close-message', "*")
  })


  //Chevron animation and collapse of iframe
  $('.open-close-chevron').on('click', function() {
    $(this).toggleClass('open-close-chevron-flipped');
    $('.wrapper').toggleClass('hide-game');
  });
  //Picks Resources to append onto page
  if (config.game == "case") {
    var casesGame = require('cases.js');
    casesGame(coupon);
  } else if (config.game == "scratch") {
    var scratchGame = require('scratch.js');
    scratchGame(coupon);
  } else {
    console.log('Could not find proper config variables.');
  }
})
