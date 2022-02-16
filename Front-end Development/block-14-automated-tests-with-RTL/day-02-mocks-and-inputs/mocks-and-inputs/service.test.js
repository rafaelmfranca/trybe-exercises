let { generateRandomNumber } = require('./service');

describe('Testing generateRandomNumber func', () => {
  it('exercise 1 ', () => {
    generateRandomNumber = jest.fn().mockReturnValue(10);

    generateRandomNumber();
    expect(generateRandomNumber).toHaveBeenCalled();
    expect(generateRandomNumber()).toBe(10);
    expect(generateRandomNumber).toHaveBeenCalledTimes(2);
  });

  it('exercise 2 ', () => {
    // Original implementation
    expect(generateRandomNumber()).not.toBeNull();

    // Creating mock and replacing implementation to be a division
    generateRandomNumber = jest.fn().mockImplementation((a, b) => a / b);

    expect(generateRandomNumber(2, 1)).toBe(2);
    expect(generateRandomNumber).toHaveBeenCalled();
    expect(generateRandomNumber).toHaveBeenCalledTimes(1);
    expect(generateRandomNumber).toHaveBeenCalledWith(2, 1);
  });
});
