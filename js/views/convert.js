/* Require modules */
var $        = require('jquery'),
    Backbone = require('backbone'),
    models   = require('../models/global'),
    template = require("../templates/convert.html"),
    utils    = require("../common/utilities"),
    events   = require('../common/eventChannel'),
    globals   = require('../common/globals.js')
    ;

// Assign jQuery instance to Backbone.$
Backbone.$ = $;

// Set the view as the module export
module.exports = Backbone.View.extend({

	// Is called at instantiation
    initialize: function () {

        // Set the view's model
        this.model = new models.BasicModel();

        // Call function to render the view
        this.render();
    },  

    // Capture events
    events: {
        'submit form': 'onFormSubmit'
    },

    // Populates the view's element with the new HTML
    render: function () {     	
        // Log status
        utils.log("Convert", "viewRender");
        
    	// Populate template with data
        this.$el.html( template() );

        // Enable chaining
        return this;
    },

    // Handles the form submission. 
    onFormSubmit: function (e) {
        // Prevent form from submitting
        e.preventDefault();

        // Set the models url to the numeric conversion
        this.model.set('urlRoot', globals.api.convertToNumeral);

        // Set the form element to a variable
        var elForm = this.$el.find('form');

        // Get the input value
        var sValue   = elForm.find('input[name=ref]').val();

        // Set bErrors to false initially. Set message and pattern variables. The pattern 
        // will match a string that has two sets of characters with a space delimitting them
        var bErrors = false,
            sMessage = '',
            rPattern = /^(M?M?M?)((CM)|(CD)|((D?)(C?C?C?)))((XC)|(XL)|((L?)(X?X?X?)))((IX)|(IV)|((V?)(I?I?I?)))$/,
            elError = this.$el.find('.errors');

        // If the value is empty
        if (sValue === '') {
            // Set to true since there's an error
            bErrors = true;
            // Set the message
            sMessage = 'You have not entered anything!';
        // Now check to see if the value is not a number
        } else if ( isNaN(sValue) ) {
            // Check to see we have two strings seperated by a space
            if (!rPattern.test(sValue)) {
                bErrors = true;
                // Set the message
                sMessage = 'You have not entered a correctly formatted roman numeral';
            }

            // Since the value is a string, change the url            
            this.model.set('urlRoot', globals.api.convertToNumber);
        }
        // END if

        // If there are any errors
        if (bErrors) {

            // Find the errors element and remove/add the classes to enable the styles and then set the HTML to the message string
            elError.removeClass('fadeOutDown').addClass("alert alert-danger animated fadeInUp").html(sMessage);
            // Prevent further execution.
            return false;
        } 
        // END if errors

        // Find the errors element if it has the danger class and remove/add the classes to enable the styles and clear the html.
        if (elError.hasClass('alert-danger')) elError.removeClass('fadeInUp').addClass("alert alert-danger animated fadeOutDown");

        // Call function to send data to server
        this.getConvertedValue(sValue);
    },

    // Calls server to get converted value
    getConvertedValue: function (sValue) {

        // Set scope
        var $this = this;

        // Set the params
        this.model.set('params', sValue);

        // Make call to server
        this.model.fetch({
            success: function (model, response) {
                // Call function to display result
                $this.displayResult();
            },
            error: function (model, response) {

            }
        });
    },

    // Displays the result from the conversion API
    displayResult: function () {

        // Variable to hold string for HTML, class for element, get result element
        var sHtml  = 'Converted result: ',
            sClass = '',
            elResult = this.$el.find('.result');

        // Remove the error/success classes
        elResult.removeClass('alert-danger alert-success');
 
        // If the model has an error
        if (this.model.get('errors')) {
            // Set the HTML and class
            sHtml = this.model.get('message');
            sClass = 'alert-danger';
        } else {
            // Set the HTML and class
            sHtml += this.model.get('convertedValue');
            sClass = 'alert-success';
        }
  
        // Set the html of the results element and display the result
        elResult.html(sHtml).addClass(sClass + ' fadeIn');
    }

});
