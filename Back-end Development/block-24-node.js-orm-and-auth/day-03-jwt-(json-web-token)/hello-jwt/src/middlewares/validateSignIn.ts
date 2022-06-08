import { NextFunction, Request, Response } from 'express';
import Joi from 'joi';

const validateSignInDTO = Joi.object({
  username: Joi.string().min(5).required(),
  password: Joi.string().min(5).required(),
});

export default (req: Request, _res: Response, next: NextFunction) => {
  const { error } = validateSignInDTO.validate(req.body);

  if (error) {
    return next(error);
  }

  return next();
};
