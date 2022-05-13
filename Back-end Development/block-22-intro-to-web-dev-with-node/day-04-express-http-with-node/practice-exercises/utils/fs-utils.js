const fs = require('fs');

function getSimpsons() {
  try {
    const simpsons = fs.readFileSync('./data/simpsons.json', 'utf8');
    return JSON.parse(simpsons);
  } catch (err) {
    return `Error when reading file: ${err.path}`;
  }
}

function addNewSimpson(newSimpson) {
  const simpsons = getSimpsons();

  simpsons.push(newSimpson);

  fs.writeFileSync('./data/simpsons.json', JSON.stringify(simpsons));
}

module.exports = { getSimpsons, addNewSimpson };
