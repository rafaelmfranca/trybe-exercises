import { NextFunction, Request, Response } from 'express';
import Joi from 'joi';
import { zipCodeBodyRegex } from '../utils/regex';

function validateZipCodeBody(req: Request, _res: Response, next: NextFunction) {
  const reqNonEmptyStr = Joi.string().not().empty().required();

  const { error } = Joi.object({
    cep: Joi.string().regex(zipCodeBodyRegex).required(),
    logradouro: reqNonEmptyStr,
    bairro: reqNonEmptyStr,
    localidade: reqNonEmptyStr,
    uf: reqNonEmptyStr.length(2),
  }).validate(req.body);

  if (error) {
    return next(error);
  }

  return next();
}

export default validateZipCodeBody;
