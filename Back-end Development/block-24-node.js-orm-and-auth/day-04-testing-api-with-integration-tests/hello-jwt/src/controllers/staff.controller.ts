import { staffService } from '@services';
import { NextFunction, Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';

export default {
  getAll: async (_req: Request, res: Response, _next: NextFunction) => {
    const staffs = await staffService.getAll();

    res.status(StatusCodes.OK).json(staffs);
  },
};
