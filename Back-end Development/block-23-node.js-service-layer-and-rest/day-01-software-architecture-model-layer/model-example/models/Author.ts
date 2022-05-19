import { connection } from './connection';

interface IAuthor {
  id: number;
  first_name: string;
  middle_name: string | null;
  last_name: string;
}

interface IAuthorSerialized {
  id: number;
  firstName: string;
  middleName: string | null;
  lastName: string;
}

function getNewAuthor(author: IAuthorSerialized) {
  return {
    id: author.id,
    fullName: `${author.firstName} ${author.middleName || ''} ${
      author.lastName
    }`,
  };
}

function serialize(authorData: IAuthor) {
  return {
    id: authorData.id,
    firstName: authorData.first_name,
    middleName: authorData.middle_name,
    lastName: authorData.last_name,
  };
}

export async function getAll() {
  const [authors] = JSON.parse(
    JSON.stringify(
      await connection.execute(
        'SELECT id, first_name, middle_name, last_name FROM authors'
      )
    )
  );
  return authors.map(serialize).map(getNewAuthor);
}
