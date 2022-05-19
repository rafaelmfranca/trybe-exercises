import { exists } from './Author';
import { connection } from './connection';

interface IBook {
  id?: number;
  title: string;
  author_id: number;
}

function serialize(bookData: IBook) {
  return {
    id: bookData.id,
    title: bookData.title,
    authorId: bookData.author_id,
  };
}

export async function create({ title, author_id }: IBook) {
  await connection.execute(
    `INSERT INTO books (title, author_id) VALUES ('${title}', ${author_id})`
  );
}

export async function isValidBook({ title, author_id }: IBook) {
  if (!title || !author_id) return false;
  if (title.length < 3 || !(await exists(author_id))) return false;
  return true;
}

export async function getById(bookId: string | number) {
  const [book] = JSON.parse(
    JSON.stringify(
      await connection.execute(`SELECT title FROM books WHERE id = ${bookId}`)
    )
  );

  return book.length ? book[0] : null;
}

export async function getByAuthorId(authorId: string | number) {
  const [books] = JSON.parse(
    JSON.stringify(
      await connection.execute(
        `SELECT id, title FROM books WHERE author_id = ${authorId}`
      )
    )
  );

  return books.length ? books : null;
}

export async function getAll() {
  const [books] = JSON.parse(
    JSON.stringify(
      await connection.execute('SELECT id, title, author_id FROM books')
    )
  );
  return books.map(serialize);
}
