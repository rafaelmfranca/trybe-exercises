function positiveOrNegative(number) {
  if (typeof number !== 'number') throw new TypeError('Expected a number');

  return number > 0 ? 'positive' : 'negative';
}

module.exports = positiveOrNegative;
