import { NextFunction, Request, Response } from 'express';
import { STATUS_CODE } from '../utils/httpStatus';

function error(err: any, _req: Request, res: Response, _next: NextFunction) {
  if (err.isJoi) {
    return res.status(STATUS_CODE.BAD_REQUEST).json({
      error: { code: 'invalidData', message: err.details[0].message },
    });
  }

  if (err.code) {
    return res.status(err.status).json({ error: { ...err } });
  }

  return res.status(STATUS_CODE.INTERNAL_SERVER_ERROR).send({
    error: { code: 'internal', message: 'Internal server error' },
  });
}

export default error;
