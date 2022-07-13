import { format } from 'date-fns';
import { v4 as uuidv4 } from 'uuid';

interface Employee {
  registration: string;
  salary: number;
  admissionDate: Date;

  generateRegistration(): string;
}

const testEmployee: Employee = {
  registration: uuidv4(),
  salary: 4000,
  admissionDate: new Date(),

  generateRegistration() {
    return `${this.registration}-${format(this.admissionDate, 'yyyyMMdd')}`;
  },
};

console.log(testEmployee);
console.log(testEmployee.generateRegistration());
