declare namespace Express {
  export interface Request {
    user: {
      firstName: string;
      lastName: string;
      email: string;
      password: string;
    };
  }
}
