import { connection } from './connection';

interface IBook {
  id: number;
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

export async function getAll() {
  const [books] = JSON.parse(
    JSON.stringify(
      await connection.execute('SELECT id, title, author_id FROM books')
    )
  );
  return books.map(serialize);
}
