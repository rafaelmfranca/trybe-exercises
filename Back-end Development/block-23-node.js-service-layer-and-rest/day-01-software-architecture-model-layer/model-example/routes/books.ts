import express from 'express';
import {
  create,
  getAll,
  getByAuthorId,
  getById,
  isValidBook,
} from '../models/Book';

const router = express.Router();

router
  .route('/')
  .get(async (req, res) => {
    const { author_id } = req.query;

    const books = author_id
      ? await getByAuthorId(Number(author_id))
      : await getAll();

    if (!books) {
      res.status(404).json({ message: 'No books found' });
    }

    res.status(200).json(books);
  })
  .post(async (req, res) => {
    const { title, author_id } = req.body;

    const book = { title: String(title), author_id: Number(author_id) };
    const isValid = await isValidBook(book);

    if (!isValid) {
      res.status(400).json({ message: 'Invalid book' });
    }

    await create(book);
    res.status(200).json({ message: 'Book created' });
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
