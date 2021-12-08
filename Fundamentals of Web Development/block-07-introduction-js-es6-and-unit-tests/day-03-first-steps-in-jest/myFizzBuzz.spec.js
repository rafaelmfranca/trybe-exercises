const myFizzBuzz = require('./myFizzBuzz');

describe('myFizzBuzz', () => {
  it('expected returns', () => {
    expect(myFizzBuzz(15)).toBe('fizzbuzz');
    expect(myFizzBuzz(9)).toBe('fizz');
    expect(myFizzBuzz(10)).toBe('buzz');
    expect(myFizzBuzz(4)).toBe(4);
    expect(myFizzBuzz('15')).toBe(false);
  });
});