import express from 'express';
import { getAll, getByAuthorId, getById } from '../models/Book';

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

router.route('/:id').get(async (req, res) => {
  const { id } = req.params;

  const book = await getById(id);

  if (!book) {
    res.status(404).json({ message: 'No book found' });
  }

  res.status(200).json(book);
});

export default router;
