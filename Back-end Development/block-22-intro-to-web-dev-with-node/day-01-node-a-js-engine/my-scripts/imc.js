var questionFloat = require('readline-sync').questionFloat;
function getIMC(weight, height) {
    return (weight / Math.pow(height, 2)).toFixed(2);
}
function main() {
    var weight = questionFloat('Enter your weight (kg): ');
    var height = questionFloat('Enter your height (meters): ');
    console.log("Your IMC is ".concat(getIMC(weight, height)));
}
main();
