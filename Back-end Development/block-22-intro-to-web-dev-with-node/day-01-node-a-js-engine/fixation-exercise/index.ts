const { question, questionInt } = require('readline-sync');

const userName = question('What is your name? ');
const userAge = questionInt('How old are you? ');

console.log(`Hello ${userName}! You are ${userAge} years old.`);
