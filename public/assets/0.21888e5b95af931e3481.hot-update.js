webpackHotUpdate(0,[
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var $ = __webpack_require__(8);
__webpack_require__(1);
var coupon = __webpack_require__(7);

$(document).ready(function () {

  // $('.covering-image').addClass('card-shuffle');

  $('.open-close-chevron').on('click', function () {
    $(this).toggleClass('open-close-chevron-flipped');
    $('.wrapper').toggleClass('hide-game');
  });

  $('cg-close-button').on('click', function () {
    $('body').remove();
  });

  $('.validated-button').on('click', function () {
    $('.covering-image').addClass('card-shuffle');
  }

  // $('.validate-email').on('keyup change', function() {
  //   state = false;
  //     if (!$group.data('validate')) {
  //     state = $(this).val() ? true : false;
  //   }else if ($group.data('validate') == "email") {
  //     state = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/.test($(this).val())
  //   }else if($group.data('validate') == 'phone') {
  //     state = /^[(]{0,1}[0-9]{3}[)]{0,1}[-\s\.]{0,1}[0-9]{3}[-\s\.]{0,1}[0-9]{4}$/.test($(this).val())
  //   }else if ($group.data('validate') == "length") {
  //     state = $(this).val().length >= $group.data('length') ? true : false;
  //   }else if ($group.data('validate') == "number") {
  //     state = !isNaN(parseFloat($(this).val())) && isFinite($(this).val());
  //   }
  //
  //   if (state) {
  //
  //   }
  // })

  );$('.covering-image').on('click', function () {

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
//# sourceMappingURL=0.21888e5b95af931e3481.hot-update.js.map