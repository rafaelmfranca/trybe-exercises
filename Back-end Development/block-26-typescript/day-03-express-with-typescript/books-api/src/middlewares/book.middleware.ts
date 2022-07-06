import { NextFunction as NF, Request, Response } from 'express';
import Joi from 'joi';

const bookSchema = Joi.object({
  title: Joi.string().required(),
  price: Joi.number().required(),
  author: Joi.string().required(),
  isbn: Joi.string().required(),
});

export default (req: Request, _res: Response, next: NF) => {
  const { error } = bookSchema.validate(req.body);

  if (error) return next(error);

  next();
};
