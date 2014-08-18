<?php


class NumeralsConversion {

	// Holds the value that we will be converting to/from roman numerals
	private $conversionValue;

	// Holds the array of possible roman numerals
	private $aNumerals = ['M' =>1000, 'CM' => 900, 'D' => 500, 'CD' => 400, 'C' => 100, 'XC' => 90, 'L' => 50, 'XL' => 40, 'X' => 10, 'IX' => 9, 'V' => 5, 'IV' => 4, 'I' => 1];

	private $aSpecialNumerals = ['CM' => 900, 'CD' => 400, 'XC' => 90, 'XL' => 40, 'IX' => 9,'IV' => 4];

	// Holds the converted value
	public $convertedValue;

	// Sets $conversionValue to the value passed in with class instantiation
    function __construct($conversionValue)
    {
    	// Set conversionValue to the passed in argument
        $this->conversionValue = $conversionValue;
    } 	
    // END __construct

    // Converts a number into roman numerals
    public function convertToNumerals() {

    	// Holds the current value of the conversion number
    	$iCurrentValue = $this->conversionValue;

    	// Set the converted value to an empty string
    	$this->convertedValue = '';

    	// Loop each of the numerals in the array
    	foreach ($this->aNumerals as $key => $value) {

	    	// Get number of times value can be divided by
	    	$iNumDivides = floor($iCurrentValue / $value);

	    	// Repeat the key for each time it divides the number and append to string
	    	$this->convertedValue .= str_repeat($key, $iNumDivides);

			// Get the remainder
	    	$iCurrentValue = $iCurrentValue % $value;

	    	// If the current value is 0, break from loop
	    	if ($iCurrentValue === 0) break;
    	}
    	// END loop

    }
    // END convertToNumerals

    // Converts a roman numeral string into the corresponding value in number format
    public function convertFromNumerals() {

    	// Holds the end total value after substring count
    	$iTotalValue = 0;


    	// Loop each of the special numerals in the array
    	foreach ($this->aSpecialNumerals as $key => $value) {
	    	// We want to find the special numerals first, start with CM. Add total occurences * value to the total
	    	$iTotalValue += substr_count($this->conversionValue, $key) * $value;
	    	// Remove each occurrence of CM
	    	$this->conversionValue = str_replace($key, '', $this->conversionValue);
    	}
    	// END loop  	 	 	

    	// Loop each of the numerals in the array
    	foreach ($this->aNumerals as $key => $value) {
    		// Add the number of times the value is found * by the value of that numeral to the total
    		$iTotalValue += substr_count($this->conversionValue, $key) * $value;
    	}
    	// END loop

    	// Set the total value to the class
    	$this->convertedValue = $iTotalValue;
    	
    }

}