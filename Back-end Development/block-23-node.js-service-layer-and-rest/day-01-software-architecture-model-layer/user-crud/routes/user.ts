import express from 'express';
// import rescue from 'express-rescue';
import { validateCreateUser } from '../middlewares';
import { create } from '../models/User';

const router = express.Router();

router.route('/').post(validateCreateUser, async (req, res) => {
  const { user } = req;

  const newUser = await create(user);

  res.status(201).json(newUser);
});

export default router;
