import { NextFunction as NF, Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';

interface ICustomError extends Error {
  details: [{ message: string }];
}

export default (err: ICustomError, _req: Request, res: Response, _next: NF) => {
  const { name, message, details } = err;

  switch (name) {
    case 'ValidationError':
      res.status(StatusCodes.BAD_REQUEST).json({ message: details[0].message });
      break;
    case 'NotFoundError':
      res.status(StatusCodes.NOT_FOUND).json({ message });
      break;
    case 'ConflictError':
      res.status(StatusCodes.CONFLICT).json({ message });
      break;
    default:
      console.error(err);
      res
        .status(StatusCodes.INTERNAL_SERVER_ERROR)
        .json({ message: 'Internal server error' });
  }
};
