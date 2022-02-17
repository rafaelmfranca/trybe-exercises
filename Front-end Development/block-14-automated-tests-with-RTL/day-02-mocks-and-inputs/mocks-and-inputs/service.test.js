const services = require('./service');

describe('Testing funcs', () => {
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
    // Creating mock and replacing implementation to be a multiplication
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

  it('exercise 4 - A', () => {
    const mockToLowerCase = jest
      .spyOn(services, 'stringToUpperCase')
      .mockImplementation((str) => str.toLowerCase());

    services.stringToUpperCase('LOWERCASE');
    expect(mockToLowerCase).toHaveBeenCalledTimes(1);
    expect(mockToLowerCase('UPPERCASE')).toBe('uppercase');
    expect(mockToLowerCase).toHaveBeenCalledTimes(2);
    expect(mockToLowerCase).toHaveBeenCalledWith('UPPERCASE');

    services.stringToUpperCase.mockRestore();
    expect(services.stringToUpperCase('uppercase')).toBe('UPPERCASE');
  });

  it('exercise 4 - B', () => {
    const mockLastLetterOfString = jest
      .spyOn(services, 'firstLetterOfString')
      .mockImplementation((str) => str.charAt(str.length - 1));

    services.firstLetterOfString('string');
    expect(mockLastLetterOfString).toHaveBeenCalledTimes(1);
    expect(mockLastLetterOfString('string')).toBe('g');
    expect(mockLastLetterOfString).toHaveBeenCalledTimes(2);
    expect(mockLastLetterOfString).toHaveBeenCalledWith('string');

    services.firstLetterOfString.mockRestore();
    expect(services.firstLetterOfString('string')).toBe('s');
  });

  it('exercise 4 - C', () => {
    const mockConcatStrings = jest
      .spyOn(services, 'concatStrings')
      .mockImplementation((str1, str2, str3) => str1.concat(str2, str3));

    services.concatStrings('string');
    expect(mockConcatStrings).toHaveBeenCalledTimes(1);
    expect(mockConcatStrings('string1', 'string2', 'string3')).toBe(
      'string1string2string3'
    );
    expect(mockConcatStrings).toHaveBeenCalledTimes(2);
    expect(mockConcatStrings).toHaveBeenCalledWith(
      'string1',
      'string2',
      'string3'
    );

    services.concatStrings.mockRestore();
    expect(services.concatStrings('string1', 'string2')).toBe('string1string2');
  });
});

describe('Testing fetchDogPictures', () => {
  let { fetchDogPictures } = services;
  fetchDogPictures = jest.fn();
  afterEach(fetchDogPictures.mockReset);

  it('resolve', async () => {
    fetchDogPictures.mockResolvedValue('success');

    fetchDogPictures();
    expect(fetchDogPictures).toHaveBeenCalled();
    expect(fetchDogPictures).toHaveBeenCalledTimes(1);
    await expect(fetchDogPictures()).resolves.toBe('success');
    expect(fetchDogPictures).toHaveBeenCalledTimes(2);
  });

  it('reject', async () => {
    fetchDogPictures.mockRejectedValue('failed');

    await expect(fetchDogPictures()).rejects.toBe('failed');
    expect(fetchDogPictures).toHaveBeenCalledTimes(1);
  });
});
