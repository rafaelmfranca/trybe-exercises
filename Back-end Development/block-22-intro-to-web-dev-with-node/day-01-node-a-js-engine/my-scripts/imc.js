"use strict";
const { questionFloat } = require('readline-sync');
const getImcCategory = (imc) => {
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
    const weight = questionFloat('Enter your weight (kg): ');
    const height = questionFloat('Enter your height (meters): ');
    const imc = Number(getImc(weight, height));
    const imcCategory = getImcCategory(imc);
    console.log(`Your IMC is ${imc}`);
    console.log(`Your IMC category is ${imcCategory}`);
}
main();
