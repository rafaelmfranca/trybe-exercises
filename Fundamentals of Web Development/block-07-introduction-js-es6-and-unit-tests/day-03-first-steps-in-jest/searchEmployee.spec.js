const searchEmployee = require('./searchEmployee');

describe('searchEmployee', () => {
  it('function searchEmployee exists', () => {
    expect(typeof searchEmployee).toBe('function');
  });
  it('error message when id do not exist', () => {
    expect(() => searchEmployee('1256-89', 'specialities')).toThrow();
    expect(() => searchEmployee('1256-8', 'specialities')).toThrowError(new Error('ID não identificada'));
  });
  it('error message when detail do not exist', () => {
    expect(() => searchEmployee('9852-2-2', 'specialitie')).toThrow();
    expect(() => searchEmployee('9852-2-2', 'specialitie')).toThrowError(new Error('Informação indisponível'));
  });
  test('test if each detail display correctly', () => {
    expect(searchEmployee('8579-6', 'firstName')).toBe('Ana');
    expect(searchEmployee('1256-4', 'lastName')).toBe('Bezos');
    expect(searchEmployee('8579-6', 'specialities')).toContain('UX', 'Design');
  });
});