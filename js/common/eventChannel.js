/* Require modules */
var $        = require('jquery'),
    Backbone = require('backbone'),
    _        = require('underscore');

// Assign jQuery instance to Backbone.$
Backbone.$ = $;      

// Set the result of the underscore extend function as the module exports
module.exports = _.extend({}, Backbone.Events); 