var questionFloat = require('readline-sync').questionFloat;
var getImcCategory = function (imc) {
    if (imc < 18.5)
        return 'Underweight';
    if (imc < 25)
        return 'Normal';
    if (imc < 30)
        return 'Overweight';
    if (imc < 35)
        return 'Obesity class I';
    if (imc < 40)
        return 'Obesity class II';
    return 'Obesity class III';
};
function getImc(weight, height) {
    return (weight / Math.pow(height, 2)).toFixed(2);
}
function main() {
    var weight = questionFloat('Enter your weight (kg): ');
    var height = questionFloat('Enter your height (meters): ');
    var imc = Number(getImc(weight, height));
    var imcCategory = getImcCategory(imc);
    console.log("Your IMC is ".concat(imc));
    console.log("Your IMC category is ".concat(imcCategory));
}
main();
