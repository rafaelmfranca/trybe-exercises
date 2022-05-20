export interface IUser {
  id: number;
  first_name: string;
  last_name: string;
  email: string;
  password: string;
}

export interface IUserInput {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
}
