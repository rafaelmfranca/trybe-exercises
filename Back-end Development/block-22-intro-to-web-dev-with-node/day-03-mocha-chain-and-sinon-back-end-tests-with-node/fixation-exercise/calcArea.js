const rdl = require('readline-sync');

function calcArea() {
  const input = rdl.questionInt('Enter a number: ');

  if (input < 0) {
    throw new Error('Invalid input value');
  }

  return input * input;
}

module.exports = calcArea;
