const { questionFloat } = require('readline-sync');

function getIMC(weight: number, height: number) {
  return (weight / Math.pow(height, 2)).toFixed(2);
}

function main() {
  const weight = questionFloat('Enter your weight (kg): ');
  const height = questionFloat('Enter your height (meters): ');

  console.log(`Your IMC is ${getIMC(weight, height)}`);
}

main();
