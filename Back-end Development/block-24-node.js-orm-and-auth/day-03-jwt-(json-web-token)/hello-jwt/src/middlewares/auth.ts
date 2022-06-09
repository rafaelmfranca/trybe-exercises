import { jwt } from '@utils';
import { NextFunction, Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';

export default (req: Request, res: Response, next: NextFunction) => {
  const token = req.headers.authorization;

  if (!token) {
    return next({
      status: StatusCodes.UNAUTHORIZED,
      message: 'No token provided',
    });
  }

  try {
    const response = jwt.verifyToken(token);
    res.locals.payload = response;
    return next();
  } catch (error: any) {
    error.status = StatusCodes.UNAUTHORIZED;
    return next(error);
  }
};
