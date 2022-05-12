const fs = require('fs');

function writeFile(name, content) {
  fs.writeFileSync(name, content);
  return 'ok';
}

function readFile(name) {
  return String(fs.readFileSync(name, 'utf8'));
}

module.exports = { writeFile, readFile };
