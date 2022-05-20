import { NextFunction, Request, Response } from 'express';
import { getById } from '../models/User';

async function getUserById(req: Request, res: Response, next: NextFunction) {
  const { id } = req.params;

  const user = await getById(id);

  if (!user) return next({ status: 404, message: 'User not found' });

  req.user = user;
  next();
}

export default getUserById;
