function sortInAlphabeticalOrder(array) {
  return array.sort((a, b) => a.name.localeCompare(b.name));
}

function findItemById(array, id) {
  return array.find((item) => item.id === Number(id));
}

module.exports = { sortInAlphabeticalOrder, findItemById };
