const { expect } = require('chai');
const positiveOrNegative = require('..');

describe('positiveOrNegative.js', () => {
  it('should return "positive" if the number is greater than 0', () => {
    expect(positiveOrNegative(1)).to.equal('positive');
    expect(positiveOrNegative(2)).to.equal('positive');
  });

  it('should return "negative" if the number is less than 0', () => {
    expect(positiveOrNegative(-1)).to.equal('negative');
    expect(positiveOrNegative(-2)).to.equal('negative');
  });

  it('should return error when param is not a number', () => {
    try {
      positiveOrNegative('1');
    } catch (error) {
      expect(error.message).to.equal('Expected a number');
    }
  });
});
