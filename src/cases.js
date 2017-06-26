var $ = require('jquery');


var gameMaker = function(couponChoices){

var coupon = couponChoices;
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

    $('#game-area').append(`<div class="grid">

      <div class="box">
        <div class="prize-value">
          <div class="covering-image a">
            <svg class="briefcase animated" xmlns:dc="http://purl.org/dc/elements/1.1/" xmlns:cc="http://creativecommons.org/ns#" xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#" xmlns:svg="http://www.w3.org/2000/svg" xmlns="http://www.w3.org/2000/svg" xmlns:sodipodi="http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd" xmlns:inkscape="http://www.inkscape.org/namespaces/inkscape" height="45.980999" width="64" version="1.1" id="Layer_1" x="0px" y="0px" viewBox="0 7.019 64 45.981" enable-background="new 0 7.019 64 45.981" xml:space="preserve" inkscape:version="0.91 r13725" sodipodi:docname="briefcase.svg"><sodipodi:namedview pagecolor="#ffffff" bordercolor="#666666" borderopacity="1" objecttolerance="10" gridtolerance="10" guidetolerance="10" inkscape:pageopacity="0" inkscape:pageshadow="2" inkscape:window-width="1440" inkscape:window-height="783" id="namedview17" showgrid="false" fit-margin-top="0" fit-margin-left="0" fit-margin-right="0" fit-margin-bottom="0" inkscape:zoom="3.6875" inkscape:cx="34.033898" inkscape:cy=" inkscape:window-x="0" inkscape:window-y="1" inkscape:window-maximized="1" inkscape:current-layer="Layer_1" /><metadata id="metadata29"><rdf:RDF><cc:Work rdf:about=""><dc:format>image/svg+xml</dc:format><dc:type rdf:resource="http://purl.org/dc/dcmitype/StillImage" /><dc:title></dc:title></cc:Work></rdf:RDF></metadata><defs id="defs27" /><g transform="translate(0,9.009501)" id="g9" /><g transform="translate(0,-18.019001)" id="g3346"><g id="g3" transform="translate(0,18.019001)"><polygon id="polygon5" points="43,35.875 43,7.019 32,7.019 32,10.938 39.084,10.938 39.084,28.661 32,28.661 32 style="fill:#d6a844" /><polygon id="polygon7" points="32,28.661 24.916,28.661 24.916,10.938 32,10.938 32,7.019 21,7.019 21,35.875 32,35.875 "style="fill:#dfb144" /></g><path transform="translate(0,18.019001)" id="path11" d="M 2.415,14.108 C 1.082,14.108 0,15.196 0,16.539 L 0,50.568 C 0,51.912 1.082,53 2.415,53 L 32,53 l 0,-38.892 -29.585,0 z" style="fill:#dfb144" inkscape:connector-curvature="0" /><path transform="translate(0,18.019001)" id="path13" d="M 61.585,14.108 32,14.108 32,53 61.585,53 C 62.918,53 64,51.912 64,50.568 l 0,-34.029 c 0,-1.343 -1.082,-2.431 -2.415,-2.431 z" style="fill:#d6a844" inkscape:connector-curvature="0" /><g id="g15" transform="translate(0,18.019001)"><rect id="rect17" height="38.641998" width="4.8299999" y="14.358" x="10" style="fill:#e4c03f" /><rect id="rect19" height="38.641998" width="4.8299999" y="14.358" x="47.169998" style="fill:#deb534" /><rect id="rect21" height="2.724" width="6.875" y="13.151" x="46" style="fill:#c38768" /><rect id="rect23" height="2.938" width="6.875" y="13.062" x="9.125" style="fill:#cd8868" /></g></g></svg>
          </div>
        </div>
      </div>

      <div class="box">
        <div class="prize-value">
          <div class="covering-image b">
            <svg class="briefcase animated" xmlns:dc="http://purl.org/dc/elements/1.1/" xmlns:cc="http://creativecommons.org/ns#" xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#" xmlns:svg="http://www.w3.org/2000/svg" xmlns="http://www.w3.org/2000/svg" xmlns:sodipodi="http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd" xmlns:inkscape="http://www.inkscape.org/namespaces/inkscape" height="45.980999" width="64" version="1.1" id="Layer_1" x="0px" y="0px" viewBox="0 7.019 64 45.981" enable-background="new 0 7.019 64 45.981" xml:space="preserve" inkscape:version="0.91 r13725" sodipodi:docname="briefcase.svg"><sodipodi:namedview pagecolor="#ffffff" bordercolor="#666666" borderopacity="1" objecttolerance="10" gridtolerance="10" guidetolerance="10" inkscape:pageopacity="0" inkscape:pageshadow="2" inkscape:window-width="1440" inkscape:window-height="783" id="namedview17" showgrid="false" fit-margin-top="0" fit-margin-left="0" fit-margin-right="0" fit-margin-bottom="0" inkscape:zoom="3.6875" inkscape:cx="34.033898" inkscape:cy=" inkscape:window-x="0" inkscape:window-y="1" inkscape:window-maximized="1" inkscape:current-layer="Layer_1" /><metadata id="metadata29"><rdf:RDF><cc:Work rdf:about=""><dc:format>image/svg+xml</dc:format><dc:type rdf:resource="http://purl.org/dc/dcmitype/StillImage" /><dc:title></dc:title></cc:Work></rdf:RDF></metadata><defs id="defs27" /><g transform="translate(0,9.009501)" id="g9" /><g transform="translate(0,-18.019001)" id="g3346"><g id="g3" transform="translate(0,18.019001)"><polygon id="polygon5" points="43,35.875 43,7.019 32,7.019 32,10.938 39.084,10.938 39.084,28.661 32,28.661 32 style="fill:#d6a844" /><polygon id="polygon7" points="32,28.661 24.916,28.661 24.916,10.938 32,10.938 32,7.019 21,7.019 21,35.875 32,35.875 "style="fill:#dfb144" /></g><path transform="translate(0,18.019001)" id="path11" d="M 2.415,14.108 C 1.082,14.108 0,15.196 0,16.539 L 0,50.568 C 0,51.912 1.082,53 2.415,53 L 32,53 l 0,-38.892 -29.585,0 z" style="fill:#dfb144" inkscape:connector-curvature="0" /><path transform="translate(0,18.019001)" id="path13" d="M 61.585,14.108 32,14.108 32,53 61.585,53 C 62.918,53 64,51.912 64,50.568 l 0,-34.029 c 0,-1.343 -1.082,-2.431 -2.415,-2.431 z" style="fill:#d6a844" inkscape:connector-curvature="0" /><g id="g15" transform="translate(0,18.019001)"><rect id="rect17" height="38.641998" width="4.8299999" y="14.358" x="10" style="fill:#e4c03f" /><rect id="rect19" height="38.641998" width="4.8299999" y="14.358" x="47.169998" style="fill:#deb534" /><rect id="rect21" height="2.724" width="6.875" y="13.151" x="46" style="fill:#c38768" /><rect id="rect23" height="2.938" width="6.875" y="13.062" x="9.125" style="fill:#cd8868" /></g></g></svg>
          </div>
        </div>
      </div>

      <div class="box">
        <div class="prize-value">
          <div class="covering-image c">
            <svg class="briefcase animated" xmlns:dc="http://purl.org/dc/elements/1.1/" xmlns:cc="http://creativecommons.org/ns#" xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#" xmlns:svg="http://www.w3.org/2000/svg" xmlns="http://www.w3.org/2000/svg" xmlns:sodipodi="http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd" xmlns:inkscape="http://www.inkscape.org/namespaces/inkscape" height="45.980999" width="64" version="1.1" id="Layer_1" x="0px" y="0px" viewBox="0 7.019 64 45.981" enable-background="new 0 7.019 64 45.981" xml:space="preserve" inkscape:version="0.91 r13725" sodipodi:docname="briefcase.svg"><sodipodi:namedview pagecolor="#ffffff" bordercolor="#666666" borderopacity="1" objecttolerance="10" gridtolerance="10" guidetolerance="10" inkscape:pageopacity="0" inkscape:pageshadow="2" inkscape:window-width="1440" inkscape:window-height="783" id="namedview17" showgrid="false" fit-margin-top="0" fit-margin-left="0" fit-margin-right="0" fit-margin-bottom="0" inkscape:zoom="3.6875" inkscape:cx="34.033898" inkscape:cy=" inkscape:window-x="0" inkscape:window-y="1" inkscape:window-maximized="1" inkscape:current-layer="Layer_1" /><metadata id="metadata29"><rdf:RDF><cc:Work rdf:about=""><dc:format>image/svg+xml</dc:format><dc:type rdf:resource="http://purl.org/dc/dcmitype/StillImage" /><dc:title></dc:title></cc:Work></rdf:RDF></metadata><defs id="defs27" /><g transform="translate(0,9.009501)" id="g9" /><g transform="translate(0,-18.019001)" id="g3346"><g id="g3" transform="translate(0,18.019001)"><polygon id="polygon5" points="43,35.875 43,7.019 32,7.019 32,10.938 39.084,10.938 39.084,28.661 32,28.661 32 style="fill:#d6a844" /><polygon id="polygon7" points="32,28.661 24.916,28.661 24.916,10.938 32,10.938 32,7.019 21,7.019 21,35.875 32,35.875 "style="fill:#dfb144" /></g><path transform="translate(0,18.019001)" id="path11" d="M 2.415,14.108 C 1.082,14.108 0,15.196 0,16.539 L 0,50.568 C 0,51.912 1.082,53 2.415,53 L 32,53 l 0,-38.892 -29.585,0 z" style="fill:#dfb144" inkscape:connector-curvature="0" /><path transform="translate(0,18.019001)" id="path13" d="M 61.585,14.108 32,14.108 32,53 61.585,53 C 62.918,53 64,51.912 64,50.568 l 0,-34.029 c 0,-1.343 -1.082,-2.431 -2.415,-2.431 z" style="fill:#d6a844" inkscape:connector-curvature="0" /><g id="g15" transform="translate(0,18.019001)"><rect id="rect17" height="38.641998" width="4.8299999" y="14.358" x="10" style="fill:#e4c03f" /><rect id="rect19" height="38.641998" width="4.8299999" y="14.358" x="47.169998" style="fill:#deb534" /><rect id="rect21" height="2.724" width="6.875" y="13.151" x="46" style="fill:#c38768" /><rect id="rect23" height="2.938" width="6.875" y="13.062" x="9.125" style="fill:#cd8868" /></g></g></svg>
          </div>
        </div>
      </div>

      <div class="box">
        <div class="prize-value">
          <div class="covering-image d">
            <svg class="briefcase animated" xmlns:dc="http://purl.org/dc/elements/1.1/" xmlns:cc="http://creativecommons.org/ns#" xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#" xmlns:svg="http://www.w3.org/2000/svg" xmlns="http://www.w3.org/2000/svg" xmlns:sodipodi="http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd" xmlns:inkscape="http://www.inkscape.org/namespaces/inkscape" height="45.980999" width="64" version="1.1" id="Layer_1" x="0px" y="0px" viewBox="0 7.019 64 45.981" enable-background="new 0 7.019 64 45.981" xml:space="preserve" inkscape:version="0.91 r13725" sodipodi:docname="briefcase.svg"><sodipodi:namedview pagecolor="#ffffff" bordercolor="#666666" borderopacity="1" objecttolerance="10" gridtolerance="10" guidetolerance="10" inkscape:pageopacity="0" inkscape:pageshadow="2" inkscape:window-width="1440" inkscape:window-height="783" id="namedview17" showgrid="false" fit-margin-top="0" fit-margin-left="0" fit-margin-right="0" fit-margin-bottom="0" inkscape:zoom="3.6875" inkscape:cx="34.033898" inkscape:cy=" inkscape:window-x="0" inkscape:window-y="1" inkscape:window-maximized="1" inkscape:current-layer="Layer_1" /><metadata id="metadata29"><rdf:RDF><cc:Work rdf:about=""><dc:format>image/svg+xml</dc:format><dc:type rdf:resource="http://purl.org/dc/dcmitype/StillImage" /><dc:title></dc:title></cc:Work></rdf:RDF></metadata><defs id="defs27" /><g transform="translate(0,9.009501)" id="g9" /><g transform="translate(0,-18.019001)" id="g3346"><g id="g3" transform="translate(0,18.019001)"><polygon id="polygon5" points="43,35.875 43,7.019 32,7.019 32,10.938 39.084,10.938 39.084,28.661 32,28.661 32 style="fill:#d6a844" /><polygon id="polygon7" points="32,28.661 24.916,28.661 24.916,10.938 32,10.938 32,7.019 21,7.019 21,35.875 32,35.875 "style="fill:#dfb144" /></g><path transform="translate(0,18.019001)" id="path11" d="M 2.415,14.108 C 1.082,14.108 0,15.196 0,16.539 L 0,50.568 C 0,51.912 1.082,53 2.415,53 L 32,53 l 0,-38.892 -29.585,0 z" style="fill:#dfb144" inkscape:connector-curvature="0" /><path transform="translate(0,18.019001)" id="path13" d="M 61.585,14.108 32,14.108 32,53 61.585,53 C 62.918,53 64,51.912 64,50.568 l 0,-34.029 c 0,-1.343 -1.082,-2.431 -2.415,-2.431 z" style="fill:#d6a844" inkscape:connector-curvature="0" /><g id="g15" transform="translate(0,18.019001)"><rect id="rect17" height="38.641998" width="4.8299999" y="14.358" x="10" style="fill:#e4c03f" /><rect id="rect19" height="38.641998" width="4.8299999" y="14.358" x="47.169998" style="fill:#deb534" /><rect id="rect21" height="2.724" width="6.875" y="13.151" x="46" style="fill:#c38768" /><rect id="rect23" height="2.938" width="6.875" y="13.062" x="9.125" style="fill:#cd8868" /></g></g></svg>
          </div>
        </div>
      </div>

      <div class="box">
        <div class="prize-value">
          <div class="covering-image e">
            <svg class="briefcase animated" xmlns:dc="http://purl.org/dc/elements/1.1/" xmlns:cc="http://creativecommons.org/ns#" xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#" xmlns:svg="http://www.w3.org/2000/svg" xmlns="http://www.w3.org/2000/svg" xmlns:sodipodi="http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd" xmlns:inkscape="http://www.inkscape.org/namespaces/inkscape" height="45.980999" width="64" version="1.1" id="Layer_1" x="0px" y="0px" viewBox="0 7.019 64 45.981" enable-background="new 0 7.019 64 45.981" xml:space="preserve" inkscape:version="0.91 r13725" sodipodi:docname="briefcase.svg"><sodipodi:namedview pagecolor="#ffffff" bordercolor="#666666" borderopacity="1" objecttolerance="10" gridtolerance="10" guidetolerance="10" inkscape:pageopacity="0" inkscape:pageshadow="2" inkscape:window-width="1440" inkscape:window-height="783" id="namedview17" showgrid="false" fit-margin-top="0" fit-margin-left="0" fit-margin-right="0" fit-margin-bottom="0" inkscape:zoom="3.6875" inkscape:cx="34.033898" inkscape:cy=" inkscape:window-x="0" inkscape:window-y="1" inkscape:window-maximized="1" inkscape:current-layer="Layer_1" /><metadata id="metadata29"><rdf:RDF><cc:Work rdf:about=""><dc:format>image/svg+xml</dc:format><dc:type rdf:resource="http://purl.org/dc/dcmitype/StillImage" /><dc:title></dc:title></cc:Work></rdf:RDF></metadata><defs id="defs27" /><g transform="translate(0,9.009501)" id="g9" /><g transform="translate(0,-18.019001)" id="g3346"><g id="g3" transform="translate(0,18.019001)"><polygon id="polygon5" points="43,35.875 43,7.019 32,7.019 32,10.938 39.084,10.938 39.084,28.661 32,28.661 32 style="fill:#d6a844" /><polygon id="polygon7" points="32,28.661 24.916,28.661 24.916,10.938 32,10.938 32,7.019 21,7.019 21,35.875 32,35.875 "style="fill:#dfb144" /></g><path transform="translate(0,18.019001)" id="path11" d="M 2.415,14.108 C 1.082,14.108 0,15.196 0,16.539 L 0,50.568 C 0,51.912 1.082,53 2.415,53 L 32,53 l 0,-38.892 -29.585,0 z" style="fill:#dfb144" inkscape:connector-curvature="0" /><path transform="translate(0,18.019001)" id="path13" d="M 61.585,14.108 32,14.108 32,53 61.585,53 C 62.918,53 64,51.912 64,50.568 l 0,-34.029 c 0,-1.343 -1.082,-2.431 -2.415,-2.431 z" style="fill:#d6a844" inkscape:connector-curvature="0" /><g id="g15" transform="translate(0,18.019001)"><rect id="rect17" height="38.641998" width="4.8299999" y="14.358" x="10" style="fill:#e4c03f" /><rect id="rect19" height="38.641998" width="4.8299999" y="14.358" x="47.169998" style="fill:#deb534" /><rect id="rect21" height="2.724" width="6.875" y="13.151" x="46" style="fill:#c38768" /><rect id="rect23" height="2.938" width="6.875" y="13.062" x="9.125" style="fill:#cd8868" /></g></g></svg>
          </div>
        </div>
      </div>

      <div class="box">
        <div class="prize-value">
          <div class="covering-image f">
            <svg class="briefcase animated" xmlns:dc="http://purl.org/dc/elements/1.1/" xmlns:cc="http://creativecommons.org/ns#" xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#" xmlns:svg="http://www.w3.org/2000/svg" xmlns="http://www.w3.org/2000/svg" xmlns:sodipodi="http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd" xmlns:inkscape="http://www.inkscape.org/namespaces/inkscape" height="45.980999" width="64" version="1.1" id="Layer_1" x="0px" y="0px" viewBox="0 7.019 64 45.981" enable-background="new 0 7.019 64 45.981" xml:space="preserve" inkscape:version="0.91 r13725" sodipodi:docname="briefcase.svg"><sodipodi:namedview pagecolor="#ffffff" bordercolor="#666666" borderopacity="1" objecttolerance="10" gridtolerance="10" guidetolerance="10" inkscape:pageopacity="0" inkscape:pageshadow="2" inkscape:window-width="1440" inkscape:window-height="783" id="namedview17" showgrid="false" fit-margin-top="0" fit-margin-left="0" fit-margin-right="0" fit-margin-bottom="0" inkscape:zoom="3.6875" inkscape:cx="34.033898" inkscape:cy=" inkscape:window-x="0" inkscape:window-y="1" inkscape:window-maximized="1" inkscape:current-layer="Layer_1" /><metadata id="metadata29"><rdf:RDF><cc:Work rdf:about=""><dc:format>image/svg+xml</dc:format><dc:type rdf:resource="http://purl.org/dc/dcmitype/StillImage" /><dc:title></dc:title></cc:Work></rdf:RDF></metadata><defs id="defs27" /><g transform="translate(0,9.009501)" id="g9" /><g transform="translate(0,-18.019001)" id="g3346"><g id="g3" transform="translate(0,18.019001)"><polygon id="polygon5" points="43,35.875 43,7.019 32,7.019 32,10.938 39.084,10.938 39.084,28.661 32,28.661 32 style="fill:#d6a844" /><polygon id="polygon7" points="32,28.661 24.916,28.661 24.916,10.938 32,10.938 32,7.019 21,7.019 21,35.875 32,35.875 "style="fill:#dfb144" /></g><path transform="translate(0,18.019001)" id="path11" d="M 2.415,14.108 C 1.082,14.108 0,15.196 0,16.539 L 0,50.568 C 0,51.912 1.082,53 2.415,53 L 32,53 l 0,-38.892 -29.585,0 z" style="fill:#dfb144" inkscape:connector-curvature="0" /><path transform="translate(0,18.019001)" id="path13" d="M 61.585,14.108 32,14.108 32,53 61.585,53 C 62.918,53 64,51.912 64,50.568 l 0,-34.029 c 0,-1.343 -1.082,-2.431 -2.415,-2.431 z" style="fill:#d6a844" inkscape:connector-curvature="0" /><g id="g15" transform="translate(0,18.019001)"><rect id="rect17" height="38.641998" width="4.8299999" y="14.358" x="10" style="fill:#e4c03f" /><rect id="rect19" height="38.641998" width="4.8299999" y="14.358" x="47.169998" style="fill:#deb534" /><rect id="rect21" height="2.724" width="6.875" y="13.151" x="46" style="fill:#c38768" /><rect id="rect23" height="2.938" width="6.875" y="13.062" x="9.125" style="fill:#cd8868" /></g></g></svg>
          </div>
        </div>
      </div>

    </div>`)




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
