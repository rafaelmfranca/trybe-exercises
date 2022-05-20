import express from 'express';
import { getUserById, validateCreateUser } from '../middlewares';
import { create, getAll, update } from '../models/User';

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

router
  .route('/:id')
  .get(getUserById, (req, res) => {
    const { user } = req;

    res.status(200).json(user);
  })
  .put(getUserById, validateCreateUser, async (req, res) => {
    const { id } = req.params;
    const { user } = req;

    const updatedUser = await update(id, user);

    res.status(200).json(updatedUser);
  });

export default router;
