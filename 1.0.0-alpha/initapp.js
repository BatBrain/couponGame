function include(filename, onload) {
    var head = document.getElementsByTagName('head')[0];
    var script = document.createElement('script');
    script.src = filename;
    script.type = 'text/javascript';
    script.onload = script.onreadystatechange = function() {
        if (script.readyState) {
            if (script.readyState === 'complete' || script.readyState === 'loaded') {
                script.onreadystatechange = null;
                onload();
            }
        }
        else {
            onload();
        }
    };
    head.appendChild(script);
}

include('https://code.jquery.com/jquery-3.2.1.min.js', function() {
    $(document).ready(function() {
      include('https://cdn.rawgit.com/noelboss/featherlight/1.7.6/release/featherlight.min.js', function() {
        $(document).ready(function() {
          $('.covering-image').on('click', function() {
            $(this).children().removeClass('infinite').addClass('hinge');
            $('.covering-image').off();
            $(this).parent().append(coupon());
          });
        });
      });
    });
});

function coupon() {
  var winval = Math.floor(Math.random() * (10 - 1)) + 1
  return "<div class='prize-text' style='animated fadeIn'> " + testValues[winval] + "</div>"
};


var testValues = {
  1: '10%',
  2: '20%',
  3: '30%',
  4: '40%',
  5: '50%',
  6: '60%',
  7: '70%',
  8: '80%',
  9: '90%',
  10: '100%'
};
