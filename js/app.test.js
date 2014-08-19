/** Note: We could add the logic from app.js here to start the app and then use jQuery to perform
          DOM manipulation to test the view/template logic to ensure that the form submits, images load, etc */

/* Require modules */
var $         = require('jquery'),
    Backbone  = require('backbone'),
    Router    = require('./common/router'),    
    events    = require('./common/eventChannel'),
    utils     = require('./common/utilities'),
    globals   = require('./common/globals'),
    models    = require('./models/global'),
    qunit     = require('./_vendor/qunit');


/**
 * Set the module for the following tests
 */
QUnit.module('Value conversion');


// Test the value is submitted to server and the expected output is received for a pass
test("Pass-Check: Server conversion to numerals", 3, function () {

	// Object containing our test data
	var oTests = {
		0: { 
			params:  1,
			expected: 'I',
			testMessage: 'Test Extreme Low Limit: Numeral for 1 should be I'
		},
		1: {
			params:  3999,
			expected: 'MMMCMXCIX',
			testMessage: 'Test Extreme High Limit: Numeral for 3999 should be MMMCMXCIX'
		},
		2: {
			params:  2014,
			expected: 'MMXIV',
			testMessage: 'Test in Range Value: Numeral for 2014 should be MMXIV'
		}
	};

	// Set array to contain each model
	var aModels = [];

	// Loop for each test in array
	for (var i in oTests) {

	    // Stop QUnit
	    stop(); 		

		// Get the current test
		var oTest = oTests[i];

		// Add the urlRoot
		oTest.urlRoot = globals.api.convertToNumeral;

		// Define instance of model
		aModels[i] = new models.BasicModel( oTest );

	    // Make call to server
	    aModels[i].fetch({
	        success: function (model, response) {

	        	// Check that the returned conversion value matches our expected result
	        	strictEqual(model.get('convertedValue'), model.get('expected'), model.get('testMessage'));

	        	// Start QUnit
	        	start();
	        }
	    });
	    // END fetch
	}
	// END loop
});

// Let's make sure we get errors for submitting these values
test("Fail-Check: Server conversion to numerals", 3, function () {

	// Object containing our test data
	var oTests = {
		0: { 
			params:  -1,
			testMessage: 'Test Out of Min Range: -1 should return an error'
		},
		1: {
			params:  4000,
			testMessage: 'Test Out of Max Range: 4000 should return an error'
		},
		2: {
			params:  '20i4',
			testMessage: 'Test Non-Numerical Value: 20i4 should return an error'
		}
	};

	// Set array to contain each model
	var aModels = [];

	// Loop for each test in array
	for (var i in oTests) {

	    // Stop QUnit
	    stop(); 		

		// Get the current test
		var oTest = oTests[i];

		// Add the urlRoot
		oTest.urlRoot = globals.api.convertToNumeral;

		// Define instance of model
		aModels[i] = new models.BasicModel( oTest );

	    // Make call to server
	    aModels[i].fetch({
	        success: function (model, response) {

	        	// Check that model.get('errors') is true
	        	ok(model.get('errors'), model.get('tests'));

	        	// Start QUnit
	        	start();
	        }
	    });
	    // END fetch
	}
	// END loop
});

/**************************************************************/