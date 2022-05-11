const fs = require('fs');

function writeFile(name, content) {
  fs.writeFileSync(name, content);
  return 'ok';
}

module.exports = writeFile;
