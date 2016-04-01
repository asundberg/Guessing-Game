
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
		return Math.round(Math.random()*100);
	}

	winningNumber = generateWinningNumber();
	console.log(winningNumber);

// Fetch the Players Guess

	function playersGuessSubmission(){
	// add code here
		return parseInt($('input[name=guessNumber]').val());		 
	}

	$('button[name=submit').on('click', function() {
		playersGuess = playersGuessSubmission();
		$('input[name=guessNumber]').val('');
		checkGuess();
	});

// Determine if the next guess should be a lower or higher number

	function lowerOrHigher(){
	// add code here
		var message = '';
		if(playersGuess > winningNumber) {
			message = 'Your guess is higher ';
		} else {
			message = 'Your guess is lower ';
		}
		var difference = Math.abs(playersGuess - winningNumber);
		if(difference > 20) {
			message += 'and more than 20 digits away from the winning number!';
		} else if(difference > 10) {
			message += 'and within 20 digits away from the winning number!';
		} else if(difference > 5) {
			message += 'and within 10 digits away from the winning number!';
		} else {
			message += 'and really really close!!! Keep guessing!';
		}
		return message;
	}

// Check if the Player's Guess is the winning number 
	var guesses = [];
	var numberOfGuesses = 4; 

	function checkGuess(){
	// add code here
		if(guesses.length >= numberOfGuesses - 1) {
			$('.message').text('You have lost the game...');
			$('.loser').show();
		} else if(guesses.indexOf(playersGuess) >= 0) {
			$('.message').text('Duplicate guess, try again!');
		} else if(playersGuess === winningNumber) {
			$('.message').text('Yay!! Congratulations, you won the game!');
			$('.winner').show();
		} else {
			guesses.push(playersGuess);
			$('.message').text(lowerOrHigher() + ' Number of guesses left: ' + (numberOfGuesses - guesses.length) + '.');
		}
	}

// Create a provide hint button that provides additional clues to the "Player"
	$('button[name=hint').on('click', function() {
		$('.message').text('HINT: When divided by 10, the remainder of the winning number is ' + (winningNumber%10) + '.');
	});

// Allow the "Player" to Play Again

	$('button[name=playAgain').on('click', function() {
		$('.message').text('');
		winningNumber = generateWinningNumber();
		console.log(winningNumber);
		guesses = [];
		$('.loser, .winner').hide();
	});
});

