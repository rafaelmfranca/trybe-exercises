const myRemove = require('./myRemove');

describe('myRemove', () => {
  it('returns expected array', () => {
    expect([1, 2, 4]).toEqual(myRemove([1, 2, 3, 4], 3));
    expect([1, 2, 3, 4]).toEqual(myRemove([1, 2, 3, 4], 5));
  });
  it('dont return array', () => {
    expect([1, 2, 3, 4]).not.toEqual(myRemove([1, 2, 3, 4], 3));
  });
});