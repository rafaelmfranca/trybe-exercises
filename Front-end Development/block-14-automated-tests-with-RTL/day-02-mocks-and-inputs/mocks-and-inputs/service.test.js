const services = require('./service');

describe('Testing generateRandomNumber func', () => {
  it('exercise 1 ', () => {
    let { generateRandomNumber } = services;
    generateRandomNumber = jest.fn().mockReturnValue(10);

    generateRandomNumber();
    expect(generateRandomNumber).toHaveBeenCalled();
    expect(generateRandomNumber()).toBe(10);
    expect(generateRandomNumber).toHaveBeenCalledTimes(2);
  });

  it('exercise 2 ', () => {
    let { generateRandomNumber } = services;
    // Original implementation
    expect(generateRandomNumber()).not.toBeNull();

    // Creating mock and replacing implementation to be a division
    generateRandomNumber = jest.fn().mockImplementation((a, b) => a / b);

    expect(generateRandomNumber(2, 1)).toBe(2);
    expect(generateRandomNumber).toHaveBeenCalled();
    expect(generateRandomNumber).toHaveBeenCalledTimes(1);
    expect(generateRandomNumber).toHaveBeenCalledWith(2, 1);
  });

  it('exercise 3 ', () => {
    // Creating mock and replacing implementation to be a division
    const mockMultiplication = jest
      .spyOn(services, 'generateRandomNumber')
      .mockImplementation((a, b, c) => a * b * c);

    services.generateRandomNumber(3, 3, 3);
    expect(mockMultiplication).toHaveBeenCalledTimes(1);
    expect(mockMultiplication(3, 3, 3)).toBe(27);
    expect(mockMultiplication).toHaveBeenCalledTimes(2);
    expect(mockMultiplication).toHaveBeenCalledWith(3, 3, 3);

    services.generateRandomNumber.mockRestore();
    expect(services.generateRandomNumber()).not.toBeNull();
  });
});
