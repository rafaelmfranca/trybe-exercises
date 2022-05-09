var readline = require('readline-sync');
function generateRandomNumber() {
    return Math.round(Math.random() * 10);
}
function startGame() {
    var randomNumber = generateRandomNumber();
    var chosenNumber = readline.questionInt('\nEnter a number between 0 and 10: ');
    if (chosenNumber === randomNumber)
        console.log('You guessed the number!');
    else
        console.log('Oops! The number was:', randomNumber);
    var playAgain = readline.question('\nWould you like to play again? (y/n): ');
    if (playAgain === 'y')
        startGame();
}
startGame();
