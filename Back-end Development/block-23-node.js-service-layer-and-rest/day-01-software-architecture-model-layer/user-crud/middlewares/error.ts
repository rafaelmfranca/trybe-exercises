import { NextFunction, Request, Response } from 'express';

function errorMiddleware(
  err: any,
  _req: Request,
  res: Response,
  _next: NextFunction
) {
  if (err.status) {
    return res.status(err.status).json({ error: err.message });
  } else {
    return res.status(500).json({ error: 'Internal server error' });
  }
}

export default errorMiddleware;
