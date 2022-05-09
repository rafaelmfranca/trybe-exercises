const rl = require('readline-sync');

const scripts = [
  { name: 'IMC', path: './imc.js' },
  { name: 'Average Speed', path: './averageSpeed.js' },
  { name: 'Guessing Game', path: './guessingGame.js' },
];

function chooseScript() {
  const scriptsNames = scripts.reduce(
    (acc, script, index) => `${acc}${index + 1} - ${script.name}\n`,
    'Choose a number: \n'
  );

  const script = rl.question(`${scriptsNames}\nChoose a script: `);

  return scripts[script - 1];
}

function runScript() {
  const script = chooseScript();
  require(script.path);
}

runScript();
