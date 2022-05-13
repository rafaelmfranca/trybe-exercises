const { getSimpsons } = require('./fs-utils');

function findSimpsonById(id) {
  const simpsons = getSimpsons();
  return simpsons.find((simpson) => simpson.id === id);
}

module.exports = findSimpsonById;
