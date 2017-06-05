var $ = require('jquery');
require('./index.scss')


$(document).on('ready', function() {
    var app = require('./app');
    require('featherlight');
    console.log("RANDOM NUMBER!" + app.roll());
});
