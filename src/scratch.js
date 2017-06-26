var $ = require('jquery');
require('index.scss');
var coupon = require('app.js');

$(document).ready(function() {
  (function() {


    var wrapperWidth = $('#js-wrapper').width;
    var wrapperHeight = $('#js-wrapper').height;
    var topMargin = (wrapperHeight - wrapperWidth) / 2
    $('#js-conainer').css(`margin-top: ${topMargin}`);
    $('#game-area').append(`
      <div id='under-scratch'>
        <div class="under-image">
          <img src="src/img/scratch-card.svg" alt="">
          <div id="js-wrapper">
            <div id="js-container">
              <canvas class="canvas" id="js-canvas" ></canvas>
              <img id='win-lose-img' src='src/img/you-win.svg' />
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
          $('.landing-cover').remove();
          $('.container').css('display', 'block');
        })
      } else {
        $('.validated-button').css('background-color', 'red');
        $('.validated-button').off('click');
      }
    })




    'use strict';

    var isDrawing, lastPoint;
    var container    = document.getElementById('js-container'),
    canvas       = document.getElementById('js-canvas'),
    canvasWidth  = canvas.width,
    canvasHeight = canvas.height,
    ctx          = canvas.getContext('2d'),
    image        = new Image(),
    brush        = new Image();

    canvas.width = document.getElementById('js-container').clientWidth;
    canvas.height = document.getElementById('js-container').clientWidth;
    // console.log("#js-container height is " + document.getElementById('js-container').clientHeight)

    // Make it visually fill the positioned parent
    // canvas.style.width ='100%';
    // canvas.style.height='100%';
    // ...then set the internal size to match
    // canvas.width  = canvas.offsetWidth;
    // canvas.height = canvas.offsetHeight;

    // base64 Workaround because Same-Origin-Policy
    image.src = 'data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+CjxzdmcKICAgeG1sbnM6ZGM9Imh0dHA6Ly9wdXJsLm9yZy9kYy9lbGVtZW50cy8xLjEvIgogICB4bWxuczpjYz0iaHR0cDovL2NyZWF0aXZlY29tbW9ucy5vcmcvbnMjIgogICB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiCiAgIHhtbG5zOnN2Zz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciCiAgIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIKICAgdmVyc2lvbj0iMS4xIgogICBoZWlnaHQ9IjE5Ni4yNDIiCiAgIHdpZHRoPSIyMTEuMzQyIgogICB2aWV3Qm94PSIwIDAgMjExLjM0MiAxOTYuMjQyIgogICBpZD0iTGF5ZXJfMSI+CiAgPG1ldGFkYXRhCiAgICAgaWQ9Im1ldGFkYXRhMTUzIj4KICAgIDxyZGY6UkRGPgogICAgICA8Y2M6V29yawogICAgICAgICByZGY6YWJvdXQ9IiI+CiAgICAgICAgPGRjOmZvcm1hdD5pbWFnZS9zdmcreG1sPC9kYzpmb3JtYXQ+CiAgICAgICAgPGRjOnR5cGUKICAgICAgICAgICByZGY6cmVzb3VyY2U9Imh0dHA6Ly9wdXJsLm9yZy9kYy9kY21pdHlwZS9TdGlsbEltYWdlIiAvPgogICAgICAgIDxkYzp0aXRsZT48L2RjOnRpdGxlPgogICAgICA8L2NjOldvcms+CiAgICA8L3JkZjpSREY+CiAgPC9tZXRhZGF0YT4KICA8ZGVmcwogICAgIGlkPSJkZWZzMTUxIiAvPgogIDxzdHlsZQogICAgIGlkPSJzdHlsZTMiPi5zdDB7ZmlsbDp1cmwoI1NWR0lEXzFfKX0uc3Qxe2ZpbGw6dXJsKCNTVkdJRF8yXyl9LnN0MntmaWxsOm5vbmU7c3Ryb2tlOiMwMDNiODY7c3Ryb2tlLXdpZHRoOjIuNzQyO3N0cm9rZS1taXRlcmxpbWl0OjEwfS5zdDN7ZmlsbDojZmZmfS5zdDR7ZmlsbDojMDAzYjg2fTwvc3R5bGU+CiAgPGcKICAgICB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtNi40MjkgLTUuOTI5KSIKICAgICBpZD0iTGF5ZXJfMiI+CiAgICA8ZwogICAgICAgaWQ9Imc3Ij4KICAgICAgPGcKICAgICAgICAgaWQ9Imc5Ij4KICAgICAgICA8bGluZWFyR3JhZGllbnQKICAgICAgICAgICBncmFkaWVudFRyYW5zZm9ybT0ibWF0cml4KDEsMCwwLC0xLDAsMjA2KSIKICAgICAgICAgICB5Mj0iMTk5Ljc0IgogICAgICAgICAgIHgyPSIxMTIuMSIKICAgICAgICAgICB5MT0iMy4xODQiCiAgICAgICAgICAgeDE9IjExMi4xIgogICAgICAgICAgIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIgogICAgICAgICAgIGlkPSJTVkdJRF8xXyI+CiAgICAgICAgICA8c3RvcAogICAgICAgICAgICAgc3RvcC1jb2xvcj0iI2NkY2RjZCIKICAgICAgICAgICAgIGlkPSJzdG9wMTIiCiAgICAgICAgICAgICBvZmZzZXQ9IjAiIC8+CiAgICAgICAgICA8c3RvcAogICAgICAgICAgICAgc3RvcC1jb2xvcj0iI2ZhZmFmYSIKICAgICAgICAgICAgIGlkPSJzdG9wMTQiCiAgICAgICAgICAgICBvZmZzZXQ9Ii4zNjQiIC8+CiAgICAgICAgICA8c3RvcAogICAgICAgICAgICAgc3RvcC1jb2xvcj0iI2RkZCIKICAgICAgICAgICAgIGlkPSJzdG9wMTYiCiAgICAgICAgICAgICBvZmZzZXQ9IjEiIC8+CiAgICAgICAgPC9saW5lYXJHcmFkaWVudD4KICAgICAgICA8cGF0aAogICAgICAgICAgIHN0eWxlPSJmaWxsOnVybCgjU1ZHSURfMV8pIgogICAgICAgICAgIGlkPSJwYXRoMTgiCiAgICAgICAgICAgZD0ibSAyMTAuOCwyMDAuOCAtMTk3LjQsMCBjIC0zLjEsMCAtNS42LC0yLjUgLTUuNiwtNS42IGwgMCwtMTgyLjMgYyAwLC0zLjEgMi41LC01LjYgNS42LC01LjYgbCAxOTcuNCwwIGMgMy4xLDAgNS42LDIuNSA1LjYsNS42IGwgMCwxODIuMyBjIDAsMy4xIC0yLjUsNS42IC01LjYsNS42IHoiCiAgICAgICAgICAgY2xhc3M9InN0MCIgLz4KICAgICAgICA8bGluZWFyR3JhZGllbnQKICAgICAgICAgICBncmFkaWVudFRyYW5zZm9ybT0ibWF0cml4KDEsMCwwLC0xLDAsMjA2KSIKICAgICAgICAgICB5Mj0iMTE2LjY3NSIKICAgICAgICAgICB4Mj0iMTA2LjY1OSIKICAgICAgICAgICB5MT0iLTExLjgwMiIKICAgICAgICAgICB4MT0iMTIwLjA4MyIKICAgICAgICAgICBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSIKICAgICAgICAgICBpZD0iU1ZHSURfMl8iPgogICAgICAgICAgPHN0b3AKICAgICAgICAgICAgIHN0b3AtY29sb3I9IiNlNmU2ZTYiCiAgICAgICAgICAgICBpZD0ic3RvcDIxIgogICAgICAgICAgICAgb2Zmc2V0PSIwIiAvPgogICAgICAgICAgPHN0b3AKICAgICAgICAgICAgIHN0b3AtY29sb3I9IiNkZGQiCiAgICAgICAgICAgICBpZD0ic3RvcDIzIgogICAgICAgICAgICAgb2Zmc2V0PSIuNTMzIiAvPgogICAgICAgICAgPHN0b3AKICAgICAgICAgICAgIHN0b3AtY29sb3I9IiNkM2QzZDMiCiAgICAgICAgICAgICBpZD0ic3RvcDI1IgogICAgICAgICAgICAgb2Zmc2V0PSIuNzM5IiAvPgogICAgICAgICAgPHN0b3AKICAgICAgICAgICAgIHN0b3AtY29sb3I9InNpbHZlciIKICAgICAgICAgICAgIGlkPSJzdG9wMjciCiAgICAgICAgICAgICBvZmZzZXQ9IjEiIC8+CiAgICAgICAgPC9saW5lYXJHcmFkaWVudD4KICAgICAgICA8cGF0aAogICAgICAgICAgIHN0eWxlPSJmaWxsOnVybCgjU1ZHSURfMl8pIgogICAgICAgICAgIGlkPSJwYXRoMjkiCiAgICAgICAgICAgZD0ibSA3LjgsMTE3LjcgMCw3Ny41IGMgMCwzLjEgMi41LDUuNiA1LjYsNS42IGwgMTk3LjQsMCBjIDMuMSwwIDUuNiwtMi41IDUuNiwtNS42IGwgMCwtMTA3LjkgQyAxNDYuOCw5NC43IDc5LjYsMTAzLjggNy44LDExNy43IFoiCiAgICAgICAgICAgY2xhc3M9InN0MSIgLz4KICAgICAgICA8cGF0aAogICAgICAgICAgIHN0eWxlPSJmaWxsOm5vbmU7c3Ryb2tlOiMwMDNiODY7c3Ryb2tlLXdpZHRoOjIuNzQyMDAwMTtzdHJva2UtbWl0ZXJsaW1pdDoxMCIKICAgICAgICAgICBzdHJva2UtbWl0ZXJsaW1pdD0iMTAiCiAgICAgICAgICAgaWQ9InBhdGgzMSIKICAgICAgICAgICBkPSJtIDIxMC44LDIwMC44IC0xOTcuNCwwIGMgLTMuMSwwIC01LjYsLTIuNSAtNS42LC01LjYgbCAwLC0xODIuMyBjIDAsLTMuMSAyLjUsLTUuNiA1LjYsLTUuNiBsIDE5Ny40LDAgYyAzLjEsMCA1LjYsMi41IDUuNiw1LjYgbCAwLDE4Mi4zIGMgMCwzLjEgLTIuNSw1LjYgLTUuNiw1LjYgeiIKICAgICAgICAgICBjbGFzcz0ic3QyIiAvPgogICAgICA8L2c+CiAgICAgIDxnCiAgICAgICAgIGlkPSJnMzMiPgogICAgICAgIDxnCiAgICAgICAgICAgaWQ9ImczNSI+CiAgICAgICAgICA8ZwogICAgICAgICAgICAgaWQ9ImczNyIgLz4KICAgICAgICAgIDxnCiAgICAgICAgICAgICBpZD0iZzQzIiAvPgogICAgICAgICAgPGcKICAgICAgICAgICAgIGlkPSJnNDkiPgogICAgICAgICAgICA8ZwogICAgICAgICAgICAgICBpZD0iZzUxIiAvPgogICAgICAgICAgPC9nPgogICAgICAgICAgPGcKICAgICAgICAgICAgIGlkPSJnNTciIC8+CiAgICAgICAgPC9nPgogICAgICAgIDxnCiAgICAgICAgICAgdHJhbnNmb3JtPSJtYXRyaXgoMywwLDAsMywtMjI0LjIsLTIwOC4yKSIKICAgICAgICAgICBpZD0iZzYzIj4KICAgICAgICAgIDxnCiAgICAgICAgICAgICBpZD0iZzY1Ij4KICAgICAgICAgICAgPHBhdGgKICAgICAgICAgICAgICAgc3R5bGU9ImZpbGw6I2ZmZmZmZiIKICAgICAgICAgICAgICAgaWQ9InBhdGg2NyIKICAgICAgICAgICAgICAgZD0ibSAxMTguNSw5Mi42IC0xMi44LDAgYyAtMC4yLDAgLTAuMywtMC4xIC0wLjQsLTAuMiBsIC0yLjksLTMuOCBDIDEwMiw4OC4xIDEwMiw4Ny41IDEwMi4yLDg3IGMgMC4yLC0wLjQgMC41LC0wLjYgMC45LC0wLjYgbCAxNy40LDAgYyAwLjYsMCAxLjEsMC4zIDEuMywwLjcgMC4yLDAuNCAwLjIsMSAtMC4xLDEuNCBsIC0yLjksMy44IGMgMCwwLjIgLTAuMiwwLjMgLTAuMywwLjMgeiIKICAgICAgICAgICAgICAgY2xhc3M9InN0MyIgLz4KICAgICAgICAgICAgPHBhdGgKICAgICAgICAgICAgICAgc3R5bGU9ImZpbGw6IzAwM2I4NiIKICAgICAgICAgICAgICAgaWQ9InBhdGg2OSIKICAgICAgICAgICAgICAgZD0ibSAxMjAuNiw4Ni45IGMgMC44LDAgMS4xLDAuOCAwLjgsMS4zIC0xLDEuMyAtMi4zLDMuMSAtMi45LDMuOCAtMC4xLDAgLTAuMywtMC4xIC0wLjQsLTAuMSBsIC0xMiwwIGMgLTAuMSwwIC0wLjMsMCAtMC40LDAuMSAtMC42LC0wLjcgLTEuOCwtMi41IC0yLjksLTMuOCAtMC40LC0wLjUgLTAuMywtMS4zIDAuMywtMS4zIGwgMTcuNSwwIHogbSAwLC0xIC0xNy40LDAgYyAtMC42LDAgLTEuMSwwLjMgLTEuNCwwLjggLTAuMywwLjYgLTAuMiwxLjUgMC4zLDIuMSBsIDIsMi43IDAuOCwxLjEgYyAwLjIsMC4zIDAuNSwwLjQgMC44LDAuNCBsIDEyLjgsMCBjIDAuMywwIDAuNiwtMC4xIDAuOCwtMC40IGwgMS44LC0yLjQgMSwtMS40IGMgMC40LC0wLjYgMC41LC0xLjMgMC4yLC0xLjkgLTAuMywtMC42IC0wLjksLTEgLTEuNywtMSB6IgogICAgICAgICAgICAgICBjbGFzcz0ic3Q0IiAvPgogICAgICAgICAgPC9nPgogICAgICAgICAgPGcKICAgICAgICAgICAgIGlkPSJnNzEiPgogICAgICAgICAgICA8cGF0aAogICAgICAgICAgICAgICBzdHlsZT0iZmlsbDojZmZmZmZmIgogICAgICAgICAgICAgICBpZD0icGF0aDczIgogICAgICAgICAgICAgICBkPSJtIDExMi4xLDEyMS43IGMgLTEwLjEsMCAtMTguMywtNi4zIC0xOC4zLC0xNCAwLC0yLjYgMC45LC01LjEgMi43LC03LjMgMC4yLC0wLjIgMC40LC0wLjUgMC42LC0wLjcgMi4xLC0yLjMgNC45LC00IDguMywtNSBsIDAuNCwwIDAuMSwwLjEgMTIuMywwIGMgMC4xLDAgMC4zLDAgMC40LC0wLjEgbCAwLjQsMCBjIDMuMywxIDYuMiwyLjggOC4zLDUgMS4xLDEuMiAxLjksMi41IDIuNSwzLjkgMC41LDEuMyAwLjgsMi43IDAuOCw0LjEgLTAuMiw3LjcgLTguNCwxNCAtMTguNSwxNCB6IgogICAgICAgICAgICAgICBjbGFzcz0ic3QzIiAvPgogICAgICAgICAgICA8cGF0aAogICAgICAgICAgICAgICBzdHlsZT0iZmlsbDojMDAzYjg2IgogICAgICAgICAgICAgICBpZD0icGF0aDc1IgogICAgICAgICAgICAgICBkPSJtIDEwNS41LDk1LjEgYyAwLjEsMCAwLjEsMCAwLjIsMC4xIGwgMC4xLDAgYyAwLjEsMCAwLjMsMC4xIDAuNCwwLjEgbCAxMiwwIGMgMC4yLDAgMC40LC0wLjEgMC42LC0wLjEgMy4yLDEgNiwyLjcgOCw0LjkgMS4xLDEuMiAxLjksMi40IDIuNCwzLjcgMC41LDEuMyAwLjgsMi42IDAuOCw0IDAsNy41IC04LDEzLjUgLTE3LjgsMTMuNSAtOS44LDAgLTE3LjgsLTYuMSAtMTcuOCwtMTMuNSAwLC0yLjUgMC45LC00LjkgMi42LC03IDAuMiwtMC4yIDAuNCwtMC41IDAuNiwtMC43IDEuOSwtMi4zIDQuNiwtNCA3LjksLTUgeiBtIDAsLTEgLTAuMywwIGMgLTMuNCwxIC02LjQsMi44IC04LjUsNS4yIC0wLjIsMC4yIC0wLjQsMC40IC0wLjYsMC44IC0xLjgsMi4zIC0yLjgsNC45IC0yLjgsNy42IDAsOCA4LjUsMTQuNiAxOC44LDE0LjYgMTAuNCwwIDE4LjgsLTYuNSAxOC44LC0xNC42IDAsLTEuNSAtMC4zLC0yLjkgLTAuOSwtNC4zIC0wLjYsLTEuNCAtMS41LC0yLjggLTIuNiwtNCAtMi4xLC0yLjMgLTUuMSwtNC4xIC04LjUsLTUuMiBsIC0wLjMsMCBjIC0wLjEsMCAtMC4zLDAgLTAuNCwwLjEgLTAuMSwwIC0wLjEsMC4xIC0wLjIsMC4xIGwgLTEyLjIsMCBjIDAsLTAuMyAtMC4yLC0wLjMgLTAuMywtMC4zIHoiCiAgICAgICAgICAgICAgIGNsYXNzPSJzdDQiIC8+CiAgICAgICAgICA8L2c+CiAgICAgICAgICA8ZwogICAgICAgICAgICAgaWQ9Imc3NyI+CiAgICAgICAgICAgIDxnCiAgICAgICAgICAgICAgIGlkPSJnNzkiPgogICAgICAgICAgICAgIDxwYXRoCiAgICAgICAgICAgICAgICAgc3R5bGU9ImZpbGw6IzAwM2I4NiIKICAgICAgICAgICAgICAgICBpZD0icGF0aDgxIgogICAgICAgICAgICAgICAgIGQ9Im0gMTEwLjksMTE2LjIgYyAtMC4xLDAgLTAuMywtMC4xIC0wLjMsLTAuMyBsIDAsLTAuOSBjIC0zLjgsLTAuNCAtNi41LC0yLjEgLTYuNSwtNC4zIDAsLTAuMSAwLC0wLjEgMC4xLC0wLjIgMCwwIDAuMSwtMC4xIDAuMiwtMC4xIGwgMi44LDAgYyAwLjEsMCAwLjMsMC4xIDAuMywwLjMgMCwwLjYgMS4yLDEuNCAzLjIsMS43IGwgMCwtMy42IGMgLTIuMiwtMC4yIC00LjIsLTAuOSAtNS40LC0yIC0wLjcsLTAuNyAtMS4xLC0xLjUgLTEuMSwtMi4zIDAsLTIuMiAyLjYsLTQgNi40LC00LjQgbCAwLC0wLjggYyAwLC0wLjEgMCwtMC4xIDAuMSwtMC4yIDAsMCAwLjEsLTAuMSAwLjIsLTAuMSBsIDIuNiwwIGMgMC4xLDAgMC4zLDAuMSAwLjMsMC4zIGwgMCwwLjggYyAzLjgsMC40IDYuNSwyLjEgNi41LDQuMyAwLDAuMSAwLDAuMSAtMC4xLDAuMiAwLDAgLTAuMSwwLjEgLTAuMiwwLjEgbCAtMi44LDAgYyAtMC4xLDAgLTAuMSwwIC0wLjIsLTAuMSAwLDAgLTAuMSwtMC4xIC0wLjEsLTAuMiAwLC0wLjYgLTEuMiwtMS40IC0zLjIsLTEuNyBsIDAsMy42IGMgMS43LDAuMiAzLjMsMC42IDQuNCwxLjMgMS4zLDAuOCAyLjEsMS44IDIuMSwzIDAsMi4yIC0yLjYsNCAtNi40LDQuNCBsIDAsMC45IGMgMCwwLjEgMCwwLjEgLTAuMSwwLjIgMCwwIC0wLjEsMC4xIC0wLjIsMC4xIGwgLTIuNiwwIHogbSAyLjgsLTMuOCBjIDIsLTAuMyAzLjIsLTEuMSAzLjIsLTEuNyAwLC0wLjYgLTEuMiwtMS40IC0zLjIsLTEuNyBsIDAsMy40IHogbSAtMy4yLC05LjYgYyAtMiwwLjMgLTMuMiwxLjEgLTMuMiwxLjcgMCwwLjIgMC4xLDAuNCAwLjQsMC42IDAuNiwwLjUgMS42LDAuOSAyLjgsMSBsIDAsLTMuMyB6IgogICAgICAgICAgICAgICAgIGNsYXNzPSJzdDQiIC8+CiAgICAgICAgICAgICAgPHBhdGgKICAgICAgICAgICAgICAgICBzdHlsZT0iZmlsbDojMDAzYjg2IgogICAgICAgICAgICAgICAgIGlkPSJwYXRoODMiCiAgICAgICAgICAgICAgICAgZD0ibSAxMTMuMyw5OS4yIDAsMS4xIGMgMy43LDAuMyA2LjUsMiA2LjUsNC4xIGwgLTIuOCwwIGMgMCwtMC44IC0xLjUsLTEuNyAtMy43LC0yIGwgMCw0LjEgYyAxLjgsMC4xIDMuNCwwLjYgNC42LDEuMyAxLjIsMC43IDEuOSwxLjcgMS45LDIuOCAwLDIuMSAtMi43LDMuOCAtNi40LDQuMiBsIDAsMS4yIC0yLjYsMCAwLC0xLjIgYyAtMy43LC0wLjMgLTYuNSwtMiAtNi41LC00LjEgbCAyLjcsMCBjIDAsMC44IDEuNSwxLjcgMy43LDIgbCAwLC00LjEgYyAtMi4zLC0wLjIgLTQuMywtMC45IC01LjQsLTIgLTAuNywtMC42IC0xLjEsLTEuMyAtMS4xLC0yLjEgMCwtMi4xIDIuNywtMy44IDYuNCwtNC4yIGwgMCwtMS4xIDIuNywwIHogbSAtMi41LDcuMiAwLC00IGMgLTIuMiwwLjMgLTMuNywxLjIgLTMuNywyIDAsMC4zIDAuMiwwLjUgMC41LDAuOCAwLjUsMC42IDEuNywxLjEgMy4yLDEuMiB6IG0gMi42LDYuMyBjIDIuMiwtMC4zIDMuNywtMS4yIDMuNywtMiAwLC0wLjggLTEuNSwtMS43IC0zLjcsLTIgbCAwLDQgeiBtIC0wLjEsLTE0IC0yLjYsMCBjIC0wLjMsMCAtMC41LDAuMiAtMC41LDAuNSBsIDAsMC42IGMgLTMuOCwwLjUgLTYuNSwyLjQgLTYuNCw0LjYgMCwwLjkgMC40LDEuOCAxLjIsMi41IDEuMiwxLjEgMy4xLDEuOCA1LjMsMiBsIDAsMyBjIC0xLjgsLTAuMyAtMi43LC0xIC0yLjcsLTEuNCAwLC0wLjEgLTAuMSwtMC4zIC0wLjIsLTAuNCAtMC4xLC0wLjEgLTAuMiwtMC4xIC0wLjQsLTAuMSBsIC0yLjcsMCBjIC0wLjEsMCAtMC4zLDAuMSAtMC40LDAuMiAtMC4xLDAuMSAtMC4xLDAuMiAtMC4xLDAuNCAwLDIuMyAyLjcsNC4xIDYuNSw0LjUgbCAwLDAuNyBjIDAsMC4xIDAuMSwwLjMgMC4yLDAuNCAwLjEsMC4xIDAuMiwwLjEgMC40LDAuMSBsIDIuNiwwIGMgMC4xLDAgMC4zLC0wLjEgMC40LC0wLjIgMC4xLC0wLjEgMC4xLC0wLjIgMC4xLC0wLjQgbCAwLC0wLjcgYyAzLjgsLTAuNSA2LjUsLTIuNCA2LjQsLTQuNiAwLC0xLjIgLTAuOCwtMi40IC0yLjIsLTMuMiAtMS4yLC0wLjcgLTIuNiwtMS4yIC00LjMsLTEuMyBsIDAsLTMgYyAxLjgsMC4zIDIuNywxIDIuNywxLjQgMCwwLjMgMC4yLDAuNSAwLjUsMC41IGwgMi44LDAgYyAwLjMsMCAwLjUsLTAuMiAwLjUsLTAuNSAwLC0yLjMgLTIuNywtNC4xIC02LjUsLTQuNSBsIDAsLTAuNiBjIDAsLTAuMiAtMC4zLC0wLjUgLTAuNiwtMC41IHogbSAtMyw3LjIgYyAtMSwtMC4yIC0xLjksLTAuNSAtMi40LC0wLjkgLTAuMiwtMC4yIC0wLjMsLTAuMyAtMC4zLC0wLjQgMCwtMC40IDAuOSwtMS4xIDIuNywtMS40IGwgMCwyLjcgeiBtIDMuNyw2LjIgMCwtMi44IGMgMS44LDAuMyAyLjcsMSAyLjcsMS40IC0wLjEsMC4zIC0xLDEgLTIuNywxLjQgeiIKICAgICAgICAgICAgICAgICBjbGFzcz0ic3Q0IiAvPgogICAgICAgICAgICA8L2c+CiAgICAgICAgICA8L2c+CiAgICAgICAgICA8ZwogICAgICAgICAgICAgaWQ9Imc4NSI+CiAgICAgICAgICAgIDxwYXRoCiAgICAgICAgICAgICAgIHN0eWxlPSJmaWxsOiNmZmZmZmYiCiAgICAgICAgICAgICAgIGlkPSJwYXRoODciCiAgICAgICAgICAgICAgIGQ9Im0gMTA2LjEsOTUgYyAtMC4xLDAgLTAuMiwwIC0wLjMsLTAuMSAtMC42LC0wLjIgLTEsLTAuNyAtMSwtMS4zIDAsLTAuOCAwLjYsLTEuNCAxLjMsLTEuNCBsIDEyLDAgYyAwLjEsMCAwLjMsMCAwLjQsMC4xIDAuNiwwLjIgMC45LDAuNyAwLjksMS4zIDAsMC44IC0wLjYsMS40IC0xLjMsMS40IGwgLTEyLDAgeiIKICAgICAgICAgICAgICAgY2xhc3M9InN0MyIgLz4KICAgICAgICAgICAgPHBhdGgKICAgICAgICAgICAgICAgc3R5bGU9ImZpbGw6IzAwM2I4NiIKICAgICAgICAgICAgICAgaWQ9InBhdGg4OSIKICAgICAgICAgICAgICAgZD0ibSAxMTguMSw5Mi44IDAuMiwwIGMgMC4zLDAuMSAwLjUsMC40IDAuNSwwLjggMCwwLjUgLTAuNCwwLjggLTAuOCwwLjggbCAtMTIuMiwwIGMgLTAuMywtMC4xIC0wLjYsLTAuNCAtMC42LC0wLjggMCwtMC41IDAuNCwtMC45IDAuOCwtMC45IGwgMTIuMSwwLjEgeiBtIDAsLTEuMSAtMTIsMCBjIC0xLDAgLTEuOCwwLjggLTEuOCwxLjkgMCwwLjggMC41LDEuNSAxLjMsMS44IGwgMC4xLDAgYyAwLjIsMCAwLjMsMC4xIDAuNSwwLjEgbCAxMiwwIGMgMSwwIDEuOCwtMC44IDEuOCwtMS45IDAsLTAuOCAtMC41LC0xLjUgLTEuMiwtMS44IGwgLTAuMSwwIGMgLTAuMywwIC0wLjQsLTAuMSAtMC42LC0wLjEgeiIKICAgICAgICAgICAgICAgY2xhc3M9InN0NCIgLz4KICAgICAgICAgIDwvZz4KICAgICAgICA8L2c+CiAgICAgICAgPGcKICAgICAgICAgICBpZD0iZzkxIj4KICAgICAgICAgIDxnCiAgICAgICAgICAgICBpZD0iZzkzIiAvPgogICAgICAgICAgPGcKICAgICAgICAgICAgIGlkPSJnOTkiIC8+CiAgICAgICAgICA8ZwogICAgICAgICAgICAgaWQ9ImcxMDUiPgogICAgICAgICAgICA8ZwogICAgICAgICAgICAgICBpZD0iZzEwNyIgLz4KICAgICAgICAgIDwvZz4KICAgICAgICAgIDxnCiAgICAgICAgICAgICBpZD0iZzExMyIgLz4KICAgICAgICA8L2c+CiAgICAgIDwvZz4KICAgICAgPGcKICAgICAgICAgaWQ9ImcxMTkiPgogICAgICAgIDxnCiAgICAgICAgICAgaWQ9ImcxMjEiPgogICAgICAgICAgPGcKICAgICAgICAgICAgIGlkPSJnMTIzIj4KICAgICAgICAgICAgPGcKICAgICAgICAgICAgICAgaWQ9ImcxMjUiIC8+CiAgICAgICAgICAgIDxnCiAgICAgICAgICAgICAgIGlkPSJnMTMxIiAvPgogICAgICAgICAgICA8ZwogICAgICAgICAgICAgICBpZD0iZzEzNyI+CiAgICAgICAgICAgICAgPGcKICAgICAgICAgICAgICAgICBpZD0iZzEzOSIgLz4KICAgICAgICAgICAgPC9nPgogICAgICAgICAgICA8ZwogICAgICAgICAgICAgICBpZD0iZzE0NSIgLz4KICAgICAgICAgIDwvZz4KICAgICAgICAgIDxnCiAgICAgICAgICAgICBpZD0iZzE1MSI+CiAgICAgICAgICAgIDxnCiAgICAgICAgICAgICAgIGlkPSJnMTUzIiAvPgogICAgICAgICAgICA8ZwogICAgICAgICAgICAgICBpZD0iZzE1OSIgLz4KICAgICAgICAgICAgPGcKICAgICAgICAgICAgICAgaWQ9ImcxNjUiPgogICAgICAgICAgICAgIDxnCiAgICAgICAgICAgICAgICAgaWQ9ImcxNjciIC8+CiAgICAgICAgICAgIDwvZz4KICAgICAgICAgICAgPGcKICAgICAgICAgICAgICAgaWQ9ImcxNzMiIC8+CiAgICAgICAgICA8L2c+CiAgICAgICAgICA8ZwogICAgICAgICAgICAgaWQ9ImcxNzkiPgogICAgICAgICAgICA8ZwogICAgICAgICAgICAgICBpZD0iZzE4MSIgLz4KICAgICAgICAgICAgPGcKICAgICAgICAgICAgICAgaWQ9ImcxODciIC8+CiAgICAgICAgICAgIDxnCiAgICAgICAgICAgICAgIGlkPSJnMTkzIj4KICAgICAgICAgICAgICA8ZwogICAgICAgICAgICAgICAgIGlkPSJnMTk1IiAvPgogICAgICAgICAgICA8L2c+CiAgICAgICAgICAgIDxnCiAgICAgICAgICAgICAgIGlkPSJnMjAxIiAvPgogICAgICAgICAgPC9nPgogICAgICAgIDwvZz4KICAgICAgICA8ZwogICAgICAgICAgIGlkPSJnMjA3Ij4KICAgICAgICAgIDxnCiAgICAgICAgICAgICBpZD0iZzIwOSI+CiAgICAgICAgICAgIDxnCiAgICAgICAgICAgICAgIGlkPSJnMjExIiAvPgogICAgICAgICAgICA8ZwogICAgICAgICAgICAgICBpZD0iZzIxNyIgLz4KICAgICAgICAgICAgPGcKICAgICAgICAgICAgICAgaWQ9ImcyMjMiPgogICAgICAgICAgICAgIDxnCiAgICAgICAgICAgICAgICAgaWQ9ImcyMjUiIC8+CiAgICAgICAgICAgIDwvZz4KICAgICAgICAgICAgPGcKICAgICAgICAgICAgICAgaWQ9ImcyMzEiIC8+CiAgICAgICAgICA8L2c+CiAgICAgICAgICA8ZwogICAgICAgICAgICAgaWQ9ImcyMzciPgogICAgICAgICAgICA8ZwogICAgICAgICAgICAgICBpZD0iZzIzOSIgLz4KICAgICAgICAgICAgPGcKICAgICAgICAgICAgICAgaWQ9ImcyNDUiIC8+CiAgICAgICAgICAgIDxnCiAgICAgICAgICAgICAgIGlkPSJnMjUxIj4KICAgICAgICAgICAgICA8ZwogICAgICAgICAgICAgICAgIGlkPSJnMjUzIiAvPgogICAgICAgICAgICA8L2c+CiAgICAgICAgICAgIDxnCiAgICAgICAgICAgICAgIGlkPSJnMjU5IiAvPgogICAgICAgICAgPC9nPgogICAgICAgICAgPGcKICAgICAgICAgICAgIGlkPSJnMjY1Ij4KICAgICAgICAgICAgPGcKICAgICAgICAgICAgICAgaWQ9ImcyNjciIC8+CiAgICAgICAgICAgIDxnCiAgICAgICAgICAgICAgIGlkPSJnMjczIiAvPgogICAgICAgICAgICA8ZwogICAgICAgICAgICAgICBpZD0iZzI3OSI+CiAgICAgICAgICAgICAgPGcKICAgICAgICAgICAgICAgICBpZD0iZzI4MSIgLz4KICAgICAgICAgICAgPC9nPgogICAgICAgICAgICA8ZwogICAgICAgICAgICAgICBpZD0iZzI4NyIgLz4KICAgICAgICAgIDwvZz4KICAgICAgICA8L2c+CiAgICAgIDwvZz4KICAgIDwvZz4KICA8L2c+Cjwvc3ZnPgo='
    image.onload = function() {
      ctx.drawImage(image, 0, 0, canvas.width, canvas.height);
      // Show the form when Image is loaded.
      //document.querySelectorAll('.form')[0].style.visibility = 'visible';
    };
    brush.src = 'data:image/png;base64,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';

    canvas.addEventListener('mousedown', handleMouseDown, false);
    canvas.addEventListener('touchstart', handleMouseDown, false);
    canvas.addEventListener('mousemove', handleMouseMove, false);
    canvas.addEventListener('touchmove', handleMouseMove, false);
    canvas.addEventListener('mouseup', handleMouseUp, false);
    canvas.addEventListener('touchend', handleMouseUp, false);

    function distanceBetween(point1, point2) {
      return Math.sqrt(Math.pow(point2.x - point1.x, 2) + Math.pow(point2.y - point1.y, 2));
    }

    function angleBetween(point1, point2) {
      return Math.atan2( point2.x - point1.x, point2.y - point1.y );
    }

    // Only test every `stride` pixel. `stride`x faster,
    // but might lead to inaccuracy
    function getFilledInPixels(stride) {
      if (!stride || stride < 1) { stride = 1; }

      var pixels   = ctx.getImageData(0, 0, canvasWidth, canvasHeight),
      pdata    = pixels.data,
      l        = pdata.length,
      total    = (l / stride),
      count    = 0;

      // Iterate over all pixels
      for(var i = count = 0; i < l; i += stride) {
        if (parseInt(pdata[i]) === 0) {
          count++;
        }
      }

      return Math.round((count / total) * 100);
    }

    function getMouse(e, canvas) {
      var offsetX = 0, offsetY = 0, mx, my;

      if (canvas.offsetParent !== undefined) {
        do {
          offsetX += canvas.offsetLeft;
          offsetY += canvas.offsetTop;
        } while ((canvas = canvas.offsetParent));
      }

      mx = (e.pageX || e.touches[0].clientX) - offsetX;
      my = (e.pageY || e.touches[0].clientY) - offsetY;

      return {x: mx, y: my};
    }

    function handlePercentage(filledInPixels) {
      filledInPixels = filledInPixels || 0;
      console.log(filledInPixels + '%');
      if (filledInPixels > 50) {
        canvas.parentNode.removeChild(canvas);
        var discount = coupon();

        $('#win-lose-img').addClass('animated fadeOut');
        $('#win-lose-img').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function() {
          $('#js-container').append("<div class='win-lose-value animated fadeIn ' style='position: absolute; font-family: Russo One, sans-serif; padding-top: 40%; top: 0; padding-left: 40%; font-size: 4em;' > " + discount[0] + "</div>");
        })

        //$('#js-wrapper').append("<div class='prize-text' style='animated; font-family: Russo One, sans-serif; fadeIn;'> <img src='src/img/you-win.svg' </div>")
        function prizeAlert() {
          alert("Congratulations! You got " + discount[0] + " off your next purchase! \n \n Use code " + discount[1] + " at checkout!");
        }
        setTimeout(prizeAlert, 2500)
      }
    }

    function handleMouseDown(e) {
      isDrawing = true;
      lastPoint = getMouse(e, canvas);
    }

    function handleMouseMove(e) {
      if (!isDrawing) { return; }

      e.preventDefault();

      var currentPoint = getMouse(e, canvas),
      dist = distanceBetween(lastPoint, currentPoint),
      angle = angleBetween(lastPoint, currentPoint),
      x, y;

      for (var i = 0; i < dist; i++) {
        x = lastPoint.x + (Math.sin(angle) * i) - 25;
        y = lastPoint.y + (Math.cos(angle) * i) - 25;
        ctx.globalCompositeOperation = 'destination-out';
        ctx.drawImage(brush, x, y);
      }

      lastPoint = currentPoint;
      handlePercentage(getFilledInPixels(32));
    }

    function handleMouseUp(e) {
      isDrawing = false;
    }

  })();


})
