var $ = require('jquery');
require('index.scss');
var coupon = require('./app.js');
var htmlInsert = require('./html.js');

$(document).ready(function() {
  $('body').append(htmlInsert);

  $('.covering-image').on('click', function() {

    $(this).children().removeClass('infinite').addClass('hinge');

    $('.covering-image').off();

    var discount = coupon();

    $(this).parent().append("<div class='prize-text' style='animated fadeIn'> " + discount[0] + "</div>");

    $(this).children().one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function() {
      alert("Congratulations! You got " + discount[0] + " off your next purchase! \n \n Use code " + discount[1] + " at checkout!");
    });

  });

});
