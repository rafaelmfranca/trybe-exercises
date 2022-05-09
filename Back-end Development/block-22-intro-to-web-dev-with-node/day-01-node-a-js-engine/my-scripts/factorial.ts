const read = require('readline-sync');

function calculateFactorial(n: number): number {
  if (n === 0) return 1;
  return n * calculateFactorial(n - 1);
}

function getFactorial() {
  const n = read.questionInt('\nEnter a positive number: ');

  if (n === 0) {
    const answer = read.question(
      'The factorial of 0 is 1.\nWould you like to enter a positive number? (y/n): '
    );

    if (answer === 'y') getFactorial();
    else return;
  }

  console.log(`\nThe factorial of ${n} is ${calculateFactorial(n)}`);
}

getFactorial();
