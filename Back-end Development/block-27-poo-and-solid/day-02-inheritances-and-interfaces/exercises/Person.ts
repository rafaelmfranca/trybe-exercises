import { getYear, isFuture } from 'date-fns';

export default class Person {
  constructor(private _name: string, private _birthDate: Date) {}

  get name() {
    return this._name;
  }

  set name(newName: string) {
    this.validateName(newName);
    this._name = newName;
  }

  get birthDate() {
    return this._birthDate;
  }

  set birthDate(newBirthDate: Date) {
    this.validateBirthDate(newBirthDate);
    this._birthDate = newBirthDate;
  }

  private validateName(newName: string) {
    if (newName.length < 3) {
      throw new Error('Name must be at least 3 characters long');
    }
  }

  private validateBirthDate(date: Date) {
    if (isFuture(date)) {
      throw new Error('Birth date must be in the past');
    }

    if (getYear(date) < 1902) {
      throw new Error('Birth date must be after 1st Jan 1901');
    }
  }
}

const person1 = new Person('John', new Date(1997, 0, 1));
const person2 = new Person('Jane', new Date(1997, 0, 1));

console.log(person1);
console.log(person2);
