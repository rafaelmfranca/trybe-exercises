import connection from '../db/connection';

const add = async (name: string, brand: string) => {
  try {
    const [result] = JSON.parse(
      JSON.stringify(
        await connection.query(
          'INSERT INTO products (name, brand) VALUES (?, ?);',
          [name, brand]
        )
      )
    );

    return { id: result.insertId, name, brand };
  } catch (err) {
    console.error(err);
    return process.exit(1);
  }
};

const getAll = async () => {
  try {
    const [rows] = JSON.parse(
      JSON.stringify(await connection.query('SELECT * FROM products'))
    );
    return rows;
  } catch (err) {
    console.error(err);
    return process.exit(1);
  }
};

const getById = async (id: number) => {
  try {
    const [result] = JSON.parse(
      JSON.stringify(
        await connection.query('SELECT * FROM products WHERE id = ?', [id])
      )
    );
    if (!result.length) return null;
    return result[0];
  } catch (err) {
    console.error(err);
    return process.exit(1);
  }
};

const update = async (id: number, name: string, brand: string) => {
  try {
    const [result] = JSON.parse(
      JSON.stringify(
        await connection.query(
          'UPDATE products SET name = ?, brand = ? WHERE id = ?',
          [name, brand, id]
        )
      )
    );
    return result;
  } catch (err) {
    console.error(err);
    return process.exit(1);
  }
};

const exclude = async (id: number) => {
  try {
    const product = await getById(id);
    if (!product) return {};
    await connection.query('DELETE FROM products WHERE id = ?', [id]);
  } catch (err) {
    console.error(err);
    return process.exit(1);
  }
};

export default { add, getAll, getById, update, exclude };
