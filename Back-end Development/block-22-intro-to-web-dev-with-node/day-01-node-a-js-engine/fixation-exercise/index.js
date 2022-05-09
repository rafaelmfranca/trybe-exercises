var _a = require('readline-sync'), question = _a.question, questionInt = _a.questionInt;
var userName = question('What is your name? ');
var userAge = questionInt('How old are you? ');
console.log("Hello ".concat(userName, "! You are ").concat(userAge, " years old."));
