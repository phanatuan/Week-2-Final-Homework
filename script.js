//create the Random Number for people to guess
var randomNumber = Math.floor(Math.random() * 5); 
var message = '';
var click = 0;

function guess() {
	var userGuess = parseInt(document.getElementById('userGuess').value); 
	click ++;
	if (userGuess == randomNumber) { 
		message = 'Awesome, you guess correctly.'; 
	else if (userGuess < randomNumber) { 
		message = 'Your guess is lower than the random Number. Try again';
	} else {
		message = 'Your guess is higher than the random Number. Try again';
	}
	}
	//Output:
	document.getElementById('message').innerHTML = message; 
	document.getElementById('click').innerHTML = click;

}