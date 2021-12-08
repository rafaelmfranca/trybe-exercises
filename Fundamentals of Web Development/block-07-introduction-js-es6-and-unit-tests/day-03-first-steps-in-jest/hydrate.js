function hydrate(string) {
  let n = string.match(/\d+/g).map((ch) => Number(ch)).reduce((a, b) => a + b);
  return `${n} copo${n > 1 ? 's' : ''} de água`;
}

module.exports = hydrate;