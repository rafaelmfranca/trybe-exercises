let { generateRandomNumber } = require('./service');

describe('Testing generateRandomNumber func', () => {
  it('exercise 1 ', () => {
    generateRandomNumber = jest.fn().mockReturnValue(10);

    generateRandomNumber();
    expect(generateRandomNumber).toHaveBeenCalled();
    expect(generateRandomNumber()).toBe(10);
    expect(generateRandomNumber).toHaveBeenCalledTimes(2);
  });
});
