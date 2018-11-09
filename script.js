//create the Random Number for people to guess
var randomNumber = Math.floor(Math.random() * 10 + 1); 
var message = '';
var click = 0;
var pastGuess = [];

function guess() {
	var userGuess = parseInt(document.getElementById('userGuess').value); 
	
	//check if userGuess is null or undefined.If it is, alert, then set the value as 0;
	if (isNaN(userGuess)){
		alert ('Please enter a number');
	} else {
		pastGuess.push(userGuess);
		click++;
		document.getElementById('message').removeAttribute("class"); //remove any existing class 
	}

	if(click>9) {
		message = 'GAME OVER. You have run out of click. Do you want to restart the game?';
		document.getElementById('guess').disabled = true;
	} else if (userGuess == randomNumber) { 
			message = `Awesome, you guess correctly after ${click} times. Game end. Click restart to play again`;
			document.getElementById('guess').disabled = true;
			document.getElementById('message').classList.add('bg-success');
		} 
		else if (userGuess < randomNumber) { 
			message = `Your guess is lower than the mystery number. You have ${10-click} guess left. Try again`;
			document.getElementById('message').classList.add('bg-danger');
		} else if (userGuess >randomNumber) {
			message = `Your guess is higher than the mystery number. You have ${10-click} guess left. Try again`;
			document.getElementById('message').classList.add('bg-danger');
		}
	
	//Display Message and Past Guesses
	document.getElementById('message').innerHTML = message; 
	document.getElementById('pastGuess').innerHTML = pastGuess.join(', ');
}
	
//Restart the game
function reset() {
	document.getElementById('message').innerHTML = ""; 
	document.getElementById('pastGuess').innerHTML = "";
	document.getElementById('guess').disabled = false;
	document.getElementById('userGuess').value = '';
	randomNumber = Math.floor(Math.random() * 10 + 1); 
	click = 0;
	pastGuess = [];
}
	
	
