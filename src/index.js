var $ = require('jquery');
require('index.scss');
var coupon = require('./app.js');
var htmlInsert = require('./html.js');

$(document).ready(function() {
  $('#page-container').append(`<div class="wrapper">
      <div class="box a">
        <div class="prize-value">
          <div class="covering-image">
            <img class="briefcase animated bounce infinite" src="${php_vars.home}/briefcase.svg" />
          </div>
        </div>
      </div>

      <div class="box b">
        <div class="prize-value">
          <div class="covering-image">
            <img class="briefcase animated bounce infinite" src="${php_vars.home}/briefcase.svg" />
          </div>
        </div>
      </div>

      <div class="box c">
        <div class="prize-value">
          <div class="covering-image">
            <img class="briefcase animated bounce infinite" src="${php_vars.home}/briefcase.svg" />
          </div>
        </div>
      </div>

      <div class="box d">
        <div class="prize-value">
          <div class="covering-image">
            <img class="briefcase animated bounce infinite" src="${php_vars.home}/briefcase.svg" />
          </div>
        </div>
      </div>

      <div class="box e">
        <div class="prize-value">
          <div class="covering-image">
            <img class="briefcase animated bounce infinite" src="${php_vars.home}/briefcase.svg" />
          </div>
        </div>
      </div>

      <div class="box f">
        <div class="prize-value">
          <div class="covering-image">
            <img class="briefcase animated bounce infinite" src="${php_vars.home}/briefcase.svg" />
          </div>
        </div>
      </div>

    </div>`);

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
