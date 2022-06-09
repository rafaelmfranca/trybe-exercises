import { postsService } from '@services';
import { NextFunction, Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';

export default {
  getAll: async (_req: Request, res: Response, _next: NextFunction) => {
    const { payload } = res.locals;

    const posts = await postsService.getAll();

    res.status(StatusCodes.OK).json({ payload, posts });
  },
};
