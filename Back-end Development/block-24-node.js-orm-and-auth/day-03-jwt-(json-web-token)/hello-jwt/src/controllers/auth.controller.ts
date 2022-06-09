import { authService } from '@services';
import { NextFunction, Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';

export default {
  signIn: async (req: Request, res: Response, next: NextFunction) => {
    const token = await authService.signIn(req.body);

    if (!token) {
      return next({
        status: StatusCodes.UNAUTHORIZED,
        message: 'Invalid credentials',
      });
    }

    res.status(StatusCodes.OK).json({ token });
  },
};
