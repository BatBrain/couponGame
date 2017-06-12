webpackHotUpdate(0,[
/* 0 */,
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var $ = __webpack_require__(3);
__webpack_require__(0);
var coupon = __webpack_require__(2);

$(document).ready(function () {

  $('.box').addClass('card-shuffle');

  //email validation
  function validateEmail(email) {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
  }

  $('.open-close-chevron').on('click', function () {
    $(this).toggleClass('open-close-chevron-flipped');
    $('.wrapper').toggleClass('hide-game');
  });

  $('cg-close-button').on('click', function () {
    $('body').remove();
  });

  $('.covering-image').on('click', function () {

    $(this).children().removeClass('infinite').addClass('hinge');

    $('.covering-image').off();

    var discount = coupon();

    $(this).parent().append("<div class='prize-text' style='animated fadeIn'> " + discount[0] + "</div>");

    $(this).children().one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function () {
      alert("Congratulations! You got " + discount[0] + " off your next purchase! \n \n Use code " + discount[1] + " at checkout!");
    });
  });
});

/***/ })
])
//# sourceMappingURL=0.76752ae2be650bd9e1b3.hot-update.js.map