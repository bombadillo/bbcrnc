/* Require modules */
var $        = require('jquery'),
    Backbone = require('backbone'),
    globals  = require('../common/globals'),
    utils    = require('../common/utilities');

// Assign jQuery instance to Backbone.$
Backbone.$ = $;

// Set the router as the module exports
module.exports = Backbone.Router.extend({

    // The app routes ("routeUrl": "routeName")
    routes: {
    	'' : 'home'
    },

    home: function () {
    	// Log route change 
    	utils.log('Home', 'routeChange');

        // Require views.
        var NavView     = require('../views/nav'),
            ConvertView = require('../views/convert');

        // Create instances of views if they don't exist.
        this.navView     = this.navView || new NavView({ el: $(globals.elNav) });        
        this.ConvertView = this.ConvertView || new ConvertView({ el: $(globals.elConvert) });	
    }

}); 