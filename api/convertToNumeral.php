<?php

    // Require the class
    require_once 'classes/NumeralsConversion.class.php';

	// Array to hold response values
	$aResponse = [];

	// Get the request
	$iNumber = $_REQUEST['value'];

	// Check that the value is a number
	if (!is_numeric($iNumber)) {
		// Set the error code
		$aResponse['errorCode'] = -1;
		// Set the message for the response
		$aResponse['message'] = 'The value must be a number.';
		die(json_encode($aResponse));
	}

	// Check that the number is within range
	if ($iNumber < 1 || $iNumber > 3999) {
		// Set the error code
		$aResponse['errorCode'] = -1;
		// Set the message for the response
		$aResponse['message'] = 'The value must be between 1 and 3999.';
		die(json_encode($aResponse));		
	}

	// Create instance of class
	$NumeralsConversion = new NumeralsConversion();

	// Call method of class to convert number to roman numerals
	$NumeralsConversion->convertToNumerals($iNumber);

	// Set the converted value to the array
	$aResponse['convertedValue'] = $NumeralsConversion->convertedValue;

	// Return the array, encoded as JSON
	echo json_encode($aResponse);