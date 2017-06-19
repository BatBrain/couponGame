var gameMaker = function(){
var $ = require('jquery');

//Staggered Briefcase Animation**
function animateCases() {
  var activate = function() {
    $(".briefcase").addClass('bounce infinite');
  }
    // $('.briefcase').each(function(n) {
    //   setTimeout(activate, 2500)
    // });
}

  $(document).ready(function() {

    // $('#game-area').append(gamePicker(config))


    //Emits close event
    $('.cg-close-button').on('click', function() {
      parent.postMessage('close-message', "*")
    })


    //Chevron animation and collapse of iframe
    $('.open-close-chevron').on('click', function() {
      $(this).toggleClass('open-close-chevron-flipped');
      $('.wrapper').toggleClass('hide-game');
    });


    //Form Validation Logic
    $('.form-control').on('keyup change', function() {
      var $form = $(this).closest('form'),
      $group = $(this).closest('.input-group'),
      state = false;
      if (!$group.data('validate')) {
        state = $(this).val() ? true : false;
      }else if ($group.data('validate') == "email") {
        state = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/.test($(this).val())
      }else if($group.data('validate') == 'phone') {
        state = /^[(]{0,1}[0-9]{3}[)]{0,1}[-\s\.]{0,1}[0-9]{3}[-\s\.]{0,1}[0-9]{4}$/.test($(this).val())
      }else if ($group.data('validate') == "length") {
        state = $(this).val().length >= $group.data('length') ? true : false;
      }else if ($group.data('validate') == "number") {
        state = !isNaN(parseFloat($(this).val())) && isFinite($(this).val());
      }

      //What to do on form submit
      if (state) {
        $('.validated-button').css('background-color', 'rgba(2, 224, 2, 0.97)');
        $('.input-group').on('submit', function(e) {
          e.preventDefault();
          $('.landing-cover').css('opacity', '0');
          $('.covering-image').addClass('card-shuffle');
          animateCases(true)
        })
      } else {
        $('.validated-button').css('background-color', 'red');
        $('.validated-button').off('click');
      }
    })

    //Winning Prize Code:
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

}


module.exports = gameMaker;
