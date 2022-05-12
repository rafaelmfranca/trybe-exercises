function sortInAlphabeticalOrder(array) {
  return array.sort((a, b) => a.name.localeCompare(b.name));
}

function findItemById(array, id) {
  return array.find((item) => item.id === Number(id));
}

function filterItemsByNameAndPrice(array, name, minPrice, maxPrice) {
  return array.filter(
    (item) =>
      item.name.includes(name) &&
      item.price >= minPrice &&
      item.price <= Number(maxPrice)
  );
}

function findIndexById(array, id) {
  return array.findIndex((item) => item.id === Number(id));
}

module.exports = {
  sortInAlphabeticalOrder,
  findItemById,
  filterItemsByNameAndPrice,
  findIndexById,
};
