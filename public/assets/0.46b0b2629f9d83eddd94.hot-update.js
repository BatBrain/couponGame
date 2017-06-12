webpackHotUpdate(0,{

/***/ 9:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var $ = __webpack_require__(3);

var validatorFunction = $('.input-group input[required], .input-group textarea[required], .input-group select[required]').on('keyup change', function () {
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

	if ($form.find('.input-group-addon.danger').length === 0) {
		$form.find('[type="submit"]').prop('disabled', false);
	} else {
		$form.find('[type="submit"]').prop('disabled', true);
	}
});

module.exports = validatorFunction;

/***/ })

})
//# sourceMappingURL=0.46b0b2629f9d83eddd94.hot-update.js.map