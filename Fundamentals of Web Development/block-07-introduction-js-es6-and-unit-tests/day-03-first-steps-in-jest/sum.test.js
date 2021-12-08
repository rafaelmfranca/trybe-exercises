const sum = require('./sum');

describe('sum', () => {
  it('return sum result', () => {
    expect(sum(4, 5)).toBe(9);
    expect(sum(0, 0)).toBe(0);
  });
  it('throws an error if it receives a string parameter', () => {
    expect(() => sum(4, '5')).toThrow();
    expect(() => sum(4, '5')).toThrow('parameters must be numbers');
  });
});