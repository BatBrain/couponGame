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
          $('.briefcase').on('click', function() {
            $(this).removeClass('infinite').addClass('hinge');
            $('.briefcase').off();
          })
        });
      });
    });
});

function coupon() {
  var winval = Math.floor(Math.random() * (10 - 1)) + 1
  console.log(testValues[winval])
}


var testValues = {
  1: 'winrar 10%',
  2: 'winrar 20%',
  3: 'winrar 30%',
  4: 'winrar 40%',
  5: 'winrar 50%',
  6: 'winrar 60%',
  7: 'winrar 70%',
  8: 'winrar 80%',
  9: 'winrar 90%',
  10: 'winrar 100%'
}
