import express from 'express';
import { validateCreateUser } from '../middlewares';
import { create, getAll } from '../models/User';

const router = express.Router();

router
  .route('/')
  .get(async (_req, res) => {
    const users = await getAll();
    res.status(200).json(users);
  })
  .post(validateCreateUser, async (req, res) => {
    const { user } = req;

    const newUser = await create(user);

    res.status(201).json(newUser);
  });

export default router;
