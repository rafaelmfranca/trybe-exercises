export default class Subject {
  constructor(private _name: string) {}

  get name() {
    return this._name;
  }

  set name(newName: string) {
    this.validateName(newName);
    this._name = newName;
  }

  private validateName(name: string) {
    if (name.length < 3) {
      throw new Error('Name must be at least 3 characters long');
    }
  }
}

const randomSubject = new Subject('Math');

randomSubject.name = 'Physics';

console.log(randomSubject);
