webpackHotUpdate(0,[
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var $ = __webpack_require__(8);
__webpack_require__(1);
var coupon = __webpack_require__(7);

$(document).ready(function () {

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

  $('.input-group input[required], .input-group textarea[required], .input-group select[required]').on('keyup change', function () {
    var $form = $(this).closest('form'),
        $group = $(this).closest('.input-group'),
        $addon = $group.find('.input-group-addon'),
        $icon = $addon.find('span'),
        state = false;

    if (!$group.data('validate')) {
      state = $(this).val() ? true : false;
    } else if ($group.data('validate') == "email") {
      state = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/.test($(this).val());
    } else if ($group.data('validate') == 'phone') {
      state = /^[(]{0,1}[0-9]{3}[)]{0,1}[-\s\.]{0,1}[0-9]{3}[-\s\.]{0,1}[0-9]{4}$/.test($(this).val());
    } else if ($group.data('validate') == "length") {
      state = $(this).val().length >= $group.data('length') ? true : false;
    } else if ($group.data('validate') == "number") {
      state = !isNaN(parseFloat($(this).val())) && isFinite($(this).val());
    }

    if (state) {
      $addon.removeClass('danger');
      $addon.addClass('success');
      $icon.attr('class', 'glyphicon glyphicon-ok');
    } else {
      $addon.removeClass('success');
      $addon.addClass('danger');
      $icon.attr('class', 'glyphicon glyphicon-remove');
    }

    if ($form.find('.input-group-addon.danger').length == 0) {
      $form.find('[type="submit"]').prop('disabled', false);
    } else {
      $form.find('[type="submit"]').prop('disabled', true);
    }
  });

  $('.input-group input[required], .input-group textarea[required], .input-group select[required]').trigger('change');
});

/***/ })
])
//# sourceMappingURL=0.ef8898e39c69f983c627.hot-update.js.map