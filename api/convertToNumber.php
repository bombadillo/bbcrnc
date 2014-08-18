<?php

    // Require the class
    require_once 'classes/NumeralsConversion.class.php';

	// Array to hold response values
	$aResponse = [];

	// Get the request
	$sNumerals = $_REQUEST['value'];

	// Pattern to match string against
	$sPattern = '/^(M?M?M?)((CM)|(CD)|((D?)(C?C?C?)))((XC)|(XL)|((L?)(X?X?X?)))((IX)|(IV)|((V?)(I?I?I?)))$/';

	// Check that the value is a correctly structured roman numeral
	if (!preg_match($sPattern, $sNumerals)) {
		// Set the error code
		$aResponse['errorCode'] = -1;
		// Set the message for the response
		$aResponse['message'] = 'The value must be a valid set of roman numerals.';
		die(json_encode($aResponse));
	}

	// Create instance of class
	$NumeralsConversion = new NumeralsConversion($sNumerals);

	// Call method of class to convert number to roman numerals
	$NumeralsConversion->convertFromNumerals();

	// Set the converted value to the array
	$aResponse['convertedValue'] = $NumeralsConversion->convertedValue;

	// Return the array, encoded as JSON
	echo json_encode($aResponse);