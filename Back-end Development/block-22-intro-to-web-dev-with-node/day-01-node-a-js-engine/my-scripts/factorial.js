var read = require('readline-sync');
function calculateFactorial(n) {
    if (n === 0)
        return 1;
    return n * calculateFactorial(n - 1);
}
function getFactorial() {
    var n = read.questionInt('\nEnter a positive number: ');
    if (n === 0) {
        var answer = read.question('The factorial of 0 is 1.\n Would you like to enter a positive number? (y/n): ');
        if (answer === 'y')
            getFactorial();
        else
            return;
    }
    console.log("\nThe factorial of ".concat(n, " is ").concat(calculateFactorial(n)));
}
getFactorial();
