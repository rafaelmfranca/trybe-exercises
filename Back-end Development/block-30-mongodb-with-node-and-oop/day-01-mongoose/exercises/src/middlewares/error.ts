import { NextFunction as NF, Request, Response } from 'express';
import { ZodError } from 'zod';
import { errorCatalog, ErrorTypes } from '../errors/catalog';

// eslint-disable-next-line max-len
export default (err: Error | ZodError, _req: Request, res: Response, _next: NF) => {
  if (err instanceof ZodError) {
    return res.status(400).json({ message: err.issues });
  }

  const messageAsErrorType = err.message as keyof typeof ErrorTypes;
  const mappedError = errorCatalog[messageAsErrorType];

  if (mappedError) {
    const { message, httpStatus } = mappedError;
    return res.status(httpStatus).json({ message });
  }

  console.error(err);
  return res.status(500).json({ message: 'Internal server error' });
};
