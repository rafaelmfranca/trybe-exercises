import { addressService } from '@services';
import { NextFunction, Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';

export default {
  getByUsername: async (_req: Request, res: Response, _next: NextFunction) => {
    const {
      payload: { email, username },
    } = res.locals;

    const address = await addressService.getByUsername(username);

    res.status(StatusCodes.OK).json({ email, username, address });
  },
};
