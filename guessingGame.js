
// jshint browser:true
// jshint jquery:true

/* **** Global Variables **** */
// try to elminate these global variables in your project, these are here just to start.

$(document).ready(function(){
	'use strict';
	var playersGuess,
    	winningNumber;


/* **** Guessing Game Functions **** */

// Generate the Winning Number

	function generateWinningNumber(){
	// add code here
		var numberGenerated = Math.round(Math.random()*100);
		return numberGenerated;
	}
	winningNumber = generateWinningNumber();
	console.log(winningNumber);

// Fetch the Players Guess

	function playersGuessSubmission(){
	// add code here
		playersGuess = parseInt($('input[name=guessNumber]').val());
	}

	$('button[name=submit').on('click', function() {
		playersGuessSubmission();
		console.log(playersGuess);
	});


// Determine if the next guess should be a lower or higher number

	function lowerOrHigher(){
	// add code here
	}

// Check if the Player's Guess is the winning number 

	function checkGuess(){
	// add code here
	}

// Create a provide hint button that provides additional clues to the "Player"

	function provideHint(){
	// add code here
	}

// Allow the "Player" to Play Again

	function playAgain(){
	// add code here
	}
});

/* **** Event Listeners/Handlers ****  */

