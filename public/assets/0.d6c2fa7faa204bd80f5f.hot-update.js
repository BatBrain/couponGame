webpackHotUpdate(0,[
/* 0 */,
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var $ = __webpack_require__(3);
__webpack_require__(0);
var coupon = __webpack_require__(2);
var valFunction = __webpack_require__(9);

$(document).ready(function () {

  valFunction;

  $('.covering-image').addClass('card-shuffle');

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
//# sourceMappingURL=0.d6c2fa7faa204bd80f5f.hot-update.js.map