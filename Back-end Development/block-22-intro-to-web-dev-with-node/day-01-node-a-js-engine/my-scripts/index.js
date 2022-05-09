var rl = require('readline-sync');
var scripts = [
    { name: 'IMC', path: './imc.js' },
    { name: 'Average Speed', path: './averageSpeed.js' },
    { name: 'Guessing Game', path: './guessingGame.js' },
];
function chooseScript() {
    var scriptsNames = scripts.reduce(function (acc, script, index) { return "".concat(acc).concat(index + 1, " - ").concat(script.name, "\n"); }, 'Choose a number: \n');
    var script = rl.question("".concat(scriptsNames, "\nChoose a script: "));
    return scripts[script - 1];
}
function runScript() {
    var script = chooseScript();
    require(script.path);
}
runScript();
