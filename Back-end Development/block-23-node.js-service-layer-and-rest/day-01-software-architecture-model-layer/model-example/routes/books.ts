import express from 'express';
import { getAll } from '../models/Book';

const router = express.Router();

router.route('/').get(async (_req, res) => {
  const books = await getAll();
  res.status(200).json(books);
});

export default router;
