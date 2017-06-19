var $               = require('jquery');
                      require('index.scss');
var coupon          = require('app.js');
var config          = require('config.js');
//var caseHTML        = require('casesHTML.js');
//var scratchHTML     = require('scratchHTML.js');
//Games:
var casesGame       = require('cases.js');
//var scratchGame     = require('scratch.js');

console.log(config)


//Picks Resources to append onto page
if (config.game == "case") {
  casesGame(coupon);
} else if (config.game == "scratch") {
  scratchHTML();
} else {
  console.log('Could not find proper config variables.');
}
