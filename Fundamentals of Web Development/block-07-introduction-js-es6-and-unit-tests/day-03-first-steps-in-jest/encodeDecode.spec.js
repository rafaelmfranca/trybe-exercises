const func = require('./encodeDecode');

describe('encodeDecode', () => {
  it('are functions', () => { 
    expect(typeof func.encode).toBe('function');
    expect(typeof func.decode).toBe('function');
  });
  it('returns expected value', () => {
    expect(func.encode('aeiou')).toEqual('12345');
    expect(func.decode('12345')).toEqual('aeiou');
  });
  it('dont convert other values', () => {
    expect(func.encode('aeiouVWXYZ')).toEqual('12345VWXYZ');
    expect(func.decode('123456789')).toEqual('aeiou6789');
  });
  it('same length input/output', () => {
    expect(func.encode('aeiou').length).toEqual(5);
    expect(func.decode('12345').length).toEqual(5);
  });
});