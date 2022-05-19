import express from 'express';
import { getAll, getByAuthorId } from '../models/Book';

const router = express.Router();

router.route('/').get(async (req, res) => {
  const { author_id } = req.query;

  const books = author_id
    ? await getByAuthorId(String(author_id))
    : await getAll();

  if (!books) {
    res.status(404).json({ message: 'No books found' });
  }

  res.status(200).json(books);
});

export default router;
