import { NextFunction, Request, Response } from 'express';
import { STATUS_CODE } from './../utils/httpStatus';
import { zipCodeRegex } from './../utils/regex';

function validateZipCode(req: Request, _res: Response, next: NextFunction) {
  const { zipcode } = req.params;

  if (!zipCodeRegex.test(zipcode)) {
    return next({
      error: {
        status: STATUS_CODE.BAD_REQUEST,
        code: 'invalid_zipcode',
        message: 'Invalid zipcode',
      },
    });
  }

  return next();
}

export default validateZipCode;
