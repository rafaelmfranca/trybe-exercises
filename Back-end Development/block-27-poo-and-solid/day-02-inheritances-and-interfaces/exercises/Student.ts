import { format } from 'date-fns';
import Person from './Person';

export default class Student extends Person {
  private _enrollmnent: string;
  private _examsGrades: number[] = [];
  private _worksGrades: number[] = [];

  constructor(name: string, birthDate: Date) {
    super(name, birthDate);
    this._enrollmnent = this.generateEnrollment();
  }

  get enrollment() {
    return this._enrollmnent;
  }

  set enrollment(newEnrollment: string) {
    this.validateEnrollment(newEnrollment);
    this._enrollmnent = newEnrollment;
  }

  get examsGrades() {
    return this._examsGrades;
  }

  set examsGrades(newExamsGrades: number[]) {
    this.validateExamsGrades(newExamsGrades);
    this._examsGrades = newExamsGrades;
  }

  get worksGrades() {
    return this._worksGrades;
  }

  set worksGrades(newWorksGrades: number[]) {
    this.validateWorksGrades(newWorksGrades);
    this._worksGrades = newWorksGrades;
  }

  private validateWorksGrades(newWorksGrades: number[]) {
    if (newWorksGrades.length > 2) {
      throw new Error('Maximum of 2 works grades allowed');
    }
  }

  private validateExamsGrades(newExamsGrades: number[]) {
    if (newExamsGrades.length > 4) {
      throw new Error('Maximum of 4 exams grades allowed');
    }
  }

  private validateEnrollment(newEnrollment: string) {
    if (newEnrollment.length < 16) {
      throw new Error('Enrollment must be at least 16 characters long');
    }
  }

  private generateEnrollment() {
    return `${this.name}-${format(this.birthDate, 'yyyyMMdd')}`;
  }
}

const student = new Student('John', new Date());

student.examsGrades = [1, 2, 3, 4];
student.worksGrades = [1, 2];

console.log(student);
