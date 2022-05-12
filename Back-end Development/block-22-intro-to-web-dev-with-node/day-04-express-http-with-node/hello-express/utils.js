function sortInAlphabeticalOrder(array) {
  return array.sort((a, b) => a.name.localeCompare(b.name));
}

function findItemById(array, id) {
  return array.find((item) => item.id === Number(id));
}

function filterItemsByNameAndMaxPrice(array, name, maxPrice) {
  return array.filter(
    (item) => item.name.includes(name) && item.price <= Number(maxPrice)
  );
}

module.exports = {
  sortInAlphabeticalOrder,
  findItemById,
  filterItemsByNameAndMaxPrice,
};
