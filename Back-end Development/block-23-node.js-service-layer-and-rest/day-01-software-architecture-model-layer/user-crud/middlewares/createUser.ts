import { NextFunction, Request, Response } from 'express';

const validateCreateUser = async (
  req: Request,
  _res: Response,
  next: NextFunction
) => {
  const { firstName, lastName, email, password } = req.body;

  if (!firstName || !lastName || !email || !password) {
    return next({ status: 400, message: 'Missing required fields' });
  }

  if (password.length < 6) {
    return next({
      status: 400,
      message: 'Password must be at least 6 characters long',
    });
  }

  req.user = { firstName, lastName, email, password };

  next();
};

export default validateCreateUser;
