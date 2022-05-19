import express from 'express';
import { getAll } from '../models/Author';

const router = express.Router();

router.route('/').get(async (_req, res) => {
  const authors = await getAll();
  res.status(200).json(authors);
});

export default router;
