/** Note: We could add the logic from app.js here to start the app and then use jQuery to perform
          DOM manipulation to test the view/template logic to ensure that the form submits, images load, etc */

/* Require modules */
var $         = require('jquery'),
    Backbone  = require('backbone'),
    Router    = require('./common/router'),    
    events    = require('./common/eventChannel'),
    utils     = require('./common/utilities'),
    qunit     = require('./_vendor/qunit');

